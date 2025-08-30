<?php
  require __DIR__ . "/../../auth/config.php";
  require __DIR__ . "/../../auth/helpers.php";

  $logged_in = is_logged_in();
  $user = $logged_in ? current_user() : null;

  function getUserExp($pdo, $user_id) {
    try {
      $stmt = $pdo->prepare("SELECT exp FROM users WHERE id = ?");
      $stmt->execute([$user_id]);
      $result = $stmt->fetch(PDO::FETCH_ASSOC);
      return $result ? intval($result['exp']) : 0;
    } catch(PDOException $e) {
      return 0;
    }
  }

  function updateUserExp($pdo, $user_id, $new_exp) {
    try {
      $stmt = $pdo->prepare("UPDATE users SET exp = ? WHERE id = ?");
      return $stmt->execute([$new_exp, $user_id]);
    } catch(PDOException $e) {
      return false;
    }
  }

  function calculateRank($exp) {
    if ($exp < 100) return ['name' => 'Newbie', 'img' => '../img/rank_newbie.png'];
    if ($exp < 500) return ['name' => 'Rookie', 'img' => '../img/rank_rookie.png'];
    if ($exp < 1000) return ['name' => 'Explorer', 'img' => '../img/rank_explorer.png'];
    if ($exp < 2500) return ['name' => 'Expert', 'img' => '../img/rank_expert.png'];
    if ($exp < 5000) return ['name' => 'Master', 'img' => '../img/rank_master.png'];
    return ['name' => 'Legend', 'img' => '../img/rank_legend.png'];
  }

  function getMaxExpForLevel($exp) {
    if ($exp < 100) return 100;
    if ($exp < 500) return 500;
    if ($exp < 1000) return 1000;
    if ($exp < 2500) return 2500;
    if ($exp < 5000) return 5000;
    return 10000;
  }

  $user_exp = 0;
  $user_rank = ['name' => 'Newbie', 'img' => '../img/rank_newbie.png'];
  $max_exp = 100;

  if ($logged_in && $user) {
    $user_exp = getUserExp($pdo, $user['id']);
    $user_rank = calculateRank($user_exp);
    $max_exp = getMaxExpForLevel($user_exp);

    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
      header('Content-Type: application/json; charset=utf-8');

      // -- EXISTING: update_exp (masih dipertahankan) --
      if ($_POST['action'] === 'update_exp' && isset($_POST['exp_value'])) {
        $new_exp = max(0, min(10000, intval($_POST['exp_value'])));
        if (updateUserExp($pdo, $user['id'], $new_exp)) {
          echo json_encode(['success' => true, 'exp' => $new_exp]);
        } else {
          echo json_encode(['success' => false, 'error' => 'Database update failed']);
        }
        exit;
      }

      // -- NEW: grant_exp (award sekali per award_key) --
      if ($_POST['action'] === 'grant_exp' && isset($_POST['award_key']) && isset($_POST['amount'])) {
        if (!$logged_in || !$user) {
          echo json_encode(['success' => false, 'awarded' => false, 'message' => 'Login required']);
          exit;
        }

        $award_key = trim($_POST['award_key']);
        $amount = max(0, min(10000, intval($_POST['amount'])));

        try {
          $hasAwardedKeys = false;
          try {
            $colCheck = $pdo->prepare("SHOW COLUMNS FROM users LIKE 'awarded_keys'");
            $colCheck->execute();
            $hasAwardedKeys = (bool) $colCheck->fetch(PDO::FETCH_ASSOC);
          } catch (Exception $e) {
            $hasAwardedKeys = false;
          }

          if ($hasAwardedKeys) {
            $pdo->beginTransaction();

            $sth = $pdo->prepare("SELECT exp, awarded_keys FROM users WHERE id = ? FOR UPDATE");
            $sth->execute([$user['id']]);
            $row = $sth->fetch(PDO::FETCH_ASSOC);

            $currentExp = $row ? intval($row['exp']) : 0;
            $awardedKeysJson = $row && isset($row['awarded_keys']) ? $row['awarded_keys'] : null;
            $awardedKeys = [];
            if ($awardedKeysJson) {
              $decoded = json_decode($awardedKeysJson, true);
              if (is_array($decoded)) $awardedKeys = $decoded;
            }

            if (in_array($award_key, $awardedKeys, true)) {
              // already awarded
              $pdo->commit();
              echo json_encode(['success' => true, 'awarded' => false, 'exp' => $currentExp, 'message' => 'Already awarded']);
              exit;
            }

            // not awarded yet --> add and update
            $awardedKeys[] = $award_key;
            $newExp = min(10000, $currentExp + $amount);

            $upd = $pdo->prepare("UPDATE users SET exp = ?, awarded_keys = ? WHERE id = ?");
            $upd->execute([$newExp, json_encode($awardedKeys, JSON_UNESCAPED_UNICODE), $user['id']]);

            $pdo->commit();

            echo json_encode(['success' => true, 'awarded' => true, 'amount' => $amount, 'exp' => $newExp, 'message' => 'EXP granted']);
            exit;
          } else {
            // Fallback: file-based storage per-user (no new DB table)
            $pdo->beginTransaction();

            // lock user row to avoid race on exp
            $sth = $pdo->prepare("SELECT exp FROM users WHERE id = ? FOR UPDATE");
            $sth->execute([$user['id']]);
            $row = $sth->fetch(PDO::FETCH_ASSOC);
            $currentExp = $row ? intval($row['exp']) : 0;

            // file path
            $dataDir = __DIR__ . '/../../data';
            if (!is_dir($dataDir)) {
              // try create directory (silent fail ok)
              @mkdir($dataDir, 0755, true);
            }
            $filePath = $dataDir . '/awards_user_' . intval($user['id']) . '.json';
            $awardedKeys = [];
            if (is_file($filePath)) {
              $contents = @file_get_contents($filePath);
              $decoded = json_decode($contents, true);
              if (is_array($decoded)) $awardedKeys = $decoded;
            }

            if (in_array($award_key, $awardedKeys, true)) {
              $pdo->commit();
              echo json_encode(['success' => true, 'awarded' => false, 'exp' => $currentExp, 'message' => 'Already awarded (file)']);
              exit;
            }

            $awardedKeys[] = $award_key;
            $newExp = min(10000, $currentExp + $amount);

            // update users.exp
            $upd = $pdo->prepare("UPDATE users SET exp = ? WHERE id = ?");
            $upd->execute([$newExp, $user['id']]);

            // save file
            @file_put_contents($filePath, json_encode($awardedKeys, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));

            $pdo->commit();

            echo json_encode(['success' => true, 'awarded' => true, 'amount' => $amount, 'exp' => $newExp, 'message' => 'EXP granted (file)']);
            exit;
          }
        } catch (Exception $e) {
          if ($pdo->inTransaction()) $pdo->rollBack();
          error_log("grant_exp error: " . $e->getMessage());
          echo json_encode(['success' => false, 'awarded' => false, 'message' => 'Server error']);
          exit;
        }
      }

      echo json_encode(['success' => false, 'error' => 'Invalid action']);
      exit;
    }
  }

  $progressPercent = 0;
  if ($max_exp > 0) {
    $progressPercent = min(100, ($user_exp / $max_exp) * 100);
  }
  $xpFireOpacity = ($progressPercent >= 100) ? '1' : '0';
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Kiddos Profile</title>
    <link rel="stylesheet" href="../../bootstrap-5.3.7-dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../css/pr-achievment.css" />
    <link rel="stylesheet" href="../css/pr-navsidebar.css" />
    <link rel="stylesheet" href="../css/pr-main.css" />
    <link rel="stylesheet" href="../css/pr-profile.css" />
    <link rel="stylesheet" href="../css/pr-xp.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" />
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&display=swap" rel="stylesheet" />

    <style>
      html, body { font-family: "Baloo 2", sans-serif; height:100%; margin:0; background:#02030a; color:#fff; }
      html::-webkit-scrollbar, body::-webkit-scrollbar { display:none; }
      .btn { height:30px; padding:0 16px; background:linear-gradient(45deg,#8b5cf6,#a78bfa); padding-top:2px; border:none; border-radius:5px; color:#fff; font-weight:600; cursor:pointer; transition:all .3s ease; box-shadow:0 4px 15px rgba(138,92,246,.3); }
      .xp-bar-bg { width:100%; height:18px; background:rgba(255,255,255,.08); border-radius:12px; position:relative; overflow:hidden; margin-bottom:8px; }
      .xp-bar { height:100%; background:linear-gradient(90deg,rgba(91, 50, 186, 0.4),rgba(201, 181, 246, 0.4)); width:0%; transition:width 500ms ease; }
      .xp-fire { position:absolute; right:10px; top:-6px; width:40px; height:40px; pointer-events:none; opacity:0; transition:opacity 300ms ease; }
    </style>
  </head>
  <body>
    <?php if ($logged_in): ?>
    <div id="app">
      <section class="bgdesain">
        <canvas id="starfield"></canvas>
        <div class="avatar-crop-modal" id="avatarCropModal">
            <div class="avatar-crop-content">
              <span class="avatar-crop-close" id="avatarCropClose">&times;</span>
              <h3>Edit foto</h3>
              <div class="avatar-crop-preview" id="avatarCropPreview"></div>
              <div class="avatar-crop-slider">
                <label>Zoom</label>
                <input
                  type="range"
                  id="avatarZoom"
                  min="1"
                  max="2.5"
                  step="0.01"
                  value="1"
                />
              </div>
              <div class="avatar-crop-actions">
                <button id="avatarCropDelete" class="btn-delete">Hapus</button>
                <button id="avatarCropCancel" class="btn-reset">Batal</button>
                <button id="avatarCropApply" class="btn-save">Terapkan</button>
              </div>
            </div>
          </div>
        <h1 class="profile-title text-center"><span class="my">My</span> <span class="profile">Profile</span></h1>
        <div class="profile-wrapper">
          <div class="profile-left-col" id="profileLeftCol">
            <div class="profile-avatar" id="profileAvatarSection">
              <div class="avatar-edit-hover" id="avatarEditHover">
                <?php
                  $avatarPath = !empty($user['avatar']) ? $user['avatar'] : "/src/img/profileicon.png";
                  $imgToShow = htmlspecialchars($BASE_URL . $avatarPath);
                ?>
                <img id="avatarImg" src="<?= $imgToShow ?>" width="150" height="150" style="border-radius:50%;" />
                <div class="avatar-info">
                  <div id="avatarName"><?= htmlspecialchars($user['full_name'] ?? 'Nama') ?></div>
                  <div id="avatarUsername">@<?= htmlspecialchars($user['username'] ?? 'username') ?></div>
                </div>
                <span class="avatar-edit-icon" id="avatarEditIcon" title="Edit Foto"><i class="fa-solid fa-pencil"></i></span>
              </div>
            </div>

            <div class="achievements-container" id="achievementsContainer">
              <div class="achievements-header">List Materi</div>
              <div class="achievements-list" id="achievementsPreview">
                <span class="badge"><img src="../img/pythonicons.png" alt="Python" /></span>
                <span class="badge"><img src="../img/jsicons.png" alt="JS" /></span>
                <span class="badge"><img src="../img/cppicons.png" alt="C++" /></span>
                <span class="badge"><img src="../img/cssicons.png" alt="CSS" /></span>
                <span class="badge"><img src="../img/htmlicons.png" alt="HTML" /></span>
                <span class="badge"><img src="../img/jsicons.png" alt="Java" /></span>
              </div>
            </div>

            <div class="xp-rank-container">
              <div class="achievements-header">Your Rank</div>
              <div class="xp-role-row">
                <div class="xp-role-col"><span id="xpRole" class="xp-role"><?= htmlspecialchars($user_rank['name']) ?></span></div>
                <div class="xp-img-col"><img id="xpRankImg" class="xp-rank-img" src="<?= htmlspecialchars($user_rank['img']) ?>" alt="Rank" /></div>
              </div>

              <div class="xp-bar-container">
                <div class="xp-bar-bg">
                  <div class="xp-bar-fire-bg" id="xpBarFireBg"></div>
                  <div class="xp-bar" id="xpBar" style="width: <?= round($progressPercent,2) ?>%;"></div>
                  <div class="xp-fire" id="xpFire" style="opacity: <?= $xpFireOpacity ?>;"></div>
                </div>
                <div class="xp-label">
                  XP: <span id="xpValue"><?= htmlspecialchars(intval($user_exp)) ?></span> / <span id="xpMax"><?= htmlspecialchars(intval($max_exp)) ?></span>
                  <!-- tombol manual dihapus sesuai permintaan -->
                </div>
              </div>
            </div>
          </div>

          <!-- profile edit panel unchanged -->
          <div class="profile-edit-panel" id="profileEditPanel">
            <div class="profile-form">
              <form id="editProfileForm" method="POST" action="/project_oscar_20/auth/update_profile.php" enctype="multipart/form-data">
                <label>Nama Display</label>
                <input type="text" name="full_name" id="editName" value="<?= htmlspecialchars($user['full_name'] ?? '') ?>" />
                <label>Username</label>
                <input type="text" name="username" id="editUsername" value="<?= htmlspecialchars($user['username'] ?? '') ?>" />
                <label>Email</label>
                <input type="email" name="email" id="editEmail" value="<?= htmlspecialchars($user['email'] ?? '') ?>" />
                <label>Password</label>
                <div class="password-field">
                  <input 
                    type="password" 
                    name="password" 
                    id="editPassword"
                    placeholder="Isi jika ingin ganti password"
                    minlength="6"
                  />
                  <span class="toggle-password" id="toggleEditPassword"><i class="fa fa-eye"></i></span>
                </div>
                <small id="passwordWarning" style="color:red; display:none;">
                  Password minimal 6 karakter
                </small>
                <input type="file" id="avatarInput" name="avatar" accept="image/*" style="display:none;">
                <div class="form-actions">
                  <button type="submit" class="btn-save">Simpan</button>
                  <button type="button" class="btn-reset" id="cancelEditProfile">Batal</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <nav class="custom-navbar fixed-top">
        <div class="navbar-container">
          <a href="../../index.php" class="logo"><img src="../img/KiddosLogo.png" alt="Logo" /></a>
          <?php if ($logged_in): ?>
          <div class="nav-right">
            <div class="chatbot"><a href="Kiddos AI.html"><img src="../img/boticons.png" alt="Chatbot"></a></div>
            <a href="/project_oscar_20/auth/logout.php" class="btn btn-outline-light btn-sm" style="padding-top:0.3rem;">Logout</a>
          <?php endif; ?>
            <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
          </div>
        </div>
      </nav>

      <div class="side-menu" id="sideMenu">
        <a href="../../index.php"><img src="../img/homeicons.png" alt="Home" class="menu-icon" />Home</a>
        <a href="../../index.html #Materi"><img src="../img/brainicons.png" alt="Learn" class="menu-icon2" />Learn</a>
        <a href="../../index.html #Games"><img src="../img/gameicons.png" alt="Games" class="menu-icon3" />Games</a>
        <a href="#"><img src="../img/profileicons.png" alt="Profile" class="menu-icon" />Profile</a>
      </div>
    </div>

    <?php else: ?>
      <div class="modal fade show" id="loginRequiredModal" tabindex="-1" style="display:block; background: linear-gradient(to bottom, rgb(7,0,11) 0%, rgba(29,3,49,1) 100%);">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content text-center p-4">
            <h3 class="mb-3 text-dark">Silahkan Login</h3>
            <p class="text-dark">Kamu harus login dulu untuk membuka semua fitur.</p>
            <a href="/project_oscar_20/src/pages/login.php" class="btn btn-primary mt-3">Login Sekarang</a>
          </div>
        </div>
      </div>
    <?php endif; ?>

      
    
    <script src="../js/pr-navsidebar.js"></script>
    <script src="../js/pr-profile.js"></script>
    <script src="../js/pr-starfield.js"></script>
    <script src="../js/pr-xp.js"></script>

    <script>
      const userData = {
        id: <?= $logged_in ? intval($user['id']) : 'null' ?>,
        exp: <?= intval($user_exp) ?>,
        maxExp: <?= intval($max_exp) ?>
      };

      function calculateRank(exp) {
        if (exp < 100) return { name: 'Newbie', img: '../img/rank_newbie.png' };
        if (exp < 500) return { name: 'Rookie', img: '../img/rank_rookie.png' };
        if (exp < 1000) return { name: 'Explorer', img: '../img/rank_explorer.png' };
        if (exp < 2500) return { name: 'Expert', img: '../img/rank_expert.png' };
        if (exp < 5000) return { name: 'Master', img: '../img/rank_master.png' };
        return { name: 'Legend', img: '../img/rank_legend.png' };
      }

      function getMaxExpForLevel(exp) {
        if (exp < 100) return 100;
        if (exp < 500) return 500;
        if (exp < 1000) return 1000;
        if (exp < 2500) return 2500;
        if (exp < 5000) return 5000;
        return 10000;
      }

      function updateExpDisplay(exp) {
        const maxExp = getMaxExpForLevel(exp);
        const rank = calculateRank(exp);
        const xpValueEl = document.getElementById('xpValue');
        const xpMaxEl = document.getElementById('xpMax');
        const xpBar = document.getElementById('xpBar');
        const xpRole = document.getElementById('xpRole');
        const xpRankImg = document.getElementById('xpRankImg');
        const xpFire = document.getElementById('xpFire');

        if (xpValueEl) xpValueEl.textContent = exp;
        if (xpMaxEl) xpMaxEl.textContent = maxExp;
        const progressPercent = Math.min((exp / maxExp) * 100, 100);
        if (xpBar) xpBar.style.width = progressPercent + '%';
        if (xpRole) xpRole.textContent = rank.name;
        if (xpRankImg) xpRankImg.src = rank.img;
        if (xpFire) xpFire.style.opacity = progressPercent >= 100 ? '1' : '0';
      }

      window.addEventListener('load', () => {
        updateExpDisplay(userData.exp);
        // fallback reapply
        setTimeout(()=> updateExpDisplay(userData.exp), 120);
      });
    </script>
    <script>
  const passwordInput = document.getElementById("editPassword");
  const passwordWarning = document.getElementById("passwordWarning");
  const editForm = document.getElementById("editProfileForm");

  // realtime cek input
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0 && passwordInput.value.length < 6) {
      passwordWarning.style.display = "block";
    } else {
      passwordWarning.style.display = "none";
    }
  });

  // validasi sebelum submit
  editForm.addEventListener("submit", (e) => {
    if (passwordInput.value.length > 0 && passwordInput.value.length < 6) {
      e.preventDefault();
      alert("Password minimal 6 karakter!");
      passwordInput.focus();
    }
  });
</script>

  </body>
</html>
