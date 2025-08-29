<?php
  require __DIR__ . "/../../auth/config.php";
  require __DIR__ . "/../../auth/helpers.php";

  $logged_in = is_logged_in();
  $user = $logged_in ? current_user() : null;

  ?>

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Kiddos Profile</title>
      <link
        rel="stylesheet"
        href="../../bootstrap-5.3.7-dist/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="../css/pr-achievment.css" />
      <link rel="stylesheet" href="../css/pr-navsidebar.css" />
      <link rel="stylesheet" href="../css/pr-main.css" />
      <link rel="stylesheet" href="../css/pr-profile.css" />
      <link rel="stylesheet" href="../css/pr-xp.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap&subset=latin"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <style>
        /* ===== BASE STYLES ===== */
        html,
        body {
          font-family: "Baloo 2", sans-serif;
          height: 100%;
          margin: 0;
          padding: 0;
          background: #02030a; /* warna background utama */
          color: #fff;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }

        .btn {
        height: 30px;
        padding: 0 16px;
        background: linear-gradient(45deg, #8b5cf6, #a78bfa);
        padding-top: 2px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(138, 92, 246, 0.3);
      }

      .btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(138, 92, 246, 0.4);
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
      </style>
    </head>
    <body>
      <?php if ($logged_in): ?>
        <div id="app">
        <section class="bgdesain">
          <canvas id="starfield"></canvas>

          <!-- Modal Crop Avatar -->
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

          <h1 class="profile-title text-center">
            <span class="my">My</span>
            <span class="profile">Profile</span>
          </h1>
          <div class="profile-wrapper">
            <!-- Kolom kiri: Avatar + Achievements + XP Bar -->
            <div class="profile-left-col" id="profileLeftCol">
              <div class="profile-avatar" id="profileAvatarSection">
                <div class="avatar-edit-hover" id="avatarEditHover">
                <?php
                  $avatarPath = !empty($user['avatar']) ? $user['avatar'] : "/src/img/profileicon.png";

                  if ($avatarPath && is_file($avatarPath)) {
                      $avatarUrl = $BASE_URL . $user['avatar'];
                  } else {
                      $avatarUrl = $BASE_URL . "/src/img/profileicon.png";
                  }
                  ?>
                  <img id="avatarImg" 
                    src="<?= htmlspecialchars($BASE_URL . $avatarPath) ?>" 
                    width="150" height="150" 
                    style="border-radius:50%;">




                  <div class="avatar-info">
                    <div id="avatarName"><?= htmlspecialchars($user['full_name'] ?? 'Nama') ?></div>
                    <div id="avatarUsername">@<?= htmlspecialchars($user['username'] ?? 'username') ?></div>
                  </div>

                  <span class="avatar-edit-icon" id="avatarEditIcon" title="Edit Foto">
                    <i class="fa-solid fa-pencil"></i>
                  </span>
                </div>
                <!-- HAPUS input file avatar di sini -->
                <!-- <input type="file" id="avatarInput" name="avatar" accept="image/*" style="display:none;"> -->
              </div>

              <!-- Achievements -->
              <div class="achievements-container" id="achievementsContainer">
                <div class="achievements-header">Achievements</div>
                <div class="achievements-list" id="achievementsPreview">
                  <span class="badge"
                    ><img src="../img/pythonicons.png" alt="Python"
                  /></span>
                  <span class="badge"
                    ><img src="../img/jsicons.png" alt="JS"
                  /></span>
                  <span class="badge"
                    ><img src="../img/cppicons.png" alt="C++"
                  /></span>
                  <span class="badge"
                    ><img src="../img/cssicons.png" alt="CSS"
                  /></span>
                  <span class="badge"
                    ><img src="../img/htmlicons.png" alt="HTML"
                  /></span>
                  <span class="badge"
                    ><img src="../img/jsicons.png" alt="Java"
                  /></span>
                  <!-- Tambahkan badge lain jika perlu -->
                </div>
              </div>

              <!-- Gabungkan XP Bar ke dalam Rank Container -->
              <div class="xp-rank-container">
                <div class="achievements-header">Your Rank</div>
                <div class="xp-role-row">
                  <div class="xp-role-col">
                    <span id="xpRole" class="xp-role">Rookie</span>
                  </div>
                  <div class="xp-img-col">
                    <img
                      id="xpRankImg"
                      class="xp-rank-img"
                      src="../img/rank_rookie.png"
                      alt="Rank"
                    />
                  </div>
                </div>
                <!-- XP Bar dipindahkan ke sini -->
                <div class="xp-bar-container">
                  <div class="xp-bar-bg">
                    <div class="xp-bar-fire-bg" id="xpBarFireBg"></div>
                    <div class="xp-bar" id="xpBar"></div>
                    <div class="xp-fire" id="xpFire"></div>
                  </div>
                  <div class="xp-label">
                    XP: <span id="xpValue">0</span> / 10000
                    <button type="button" id="xpDown" class="xp-arrow">
                      &#8595;
                    </button>
                    <button type="button" id="xpUp" class="xp-arrow">
                      &#8593;
                    </button>
                  </div>
                </div>
              </div>
              <!-- END Rank+XP Bar -->

              <!-- Form Edit Profil (pindahkan ke sini) -->
            </div>
            <!-- Form Edit Profil (panel kanan, hidden by default) -->
            <div class="profile-edit-panel" id="profileEditPanel">
              <div class="profile-form">
                <form id="editProfileForm" method="POST" action="/project_oscar_20/auth/update_profile.php" enctype="multipart/form-data">
                  <label>Nama Display</label>
                  <input type="text" name="full_name" id="editName" value="<?= htmlspecialchars($user['full_name'] ?? '') ?>" />

                  <label>Username</label>
                  <input type="text" name="username" id="editUsername" value="<?= htmlspecialchars($user['username'] ?? '') ?>" />
                  
                  <label>Email</label>
                  <input type="email" name="email" id="editEmail"   value="<?= htmlspecialchars($user['email'] ?? '') ?>" />

                  <label>Password</label>
                  <div class="password-field">
                    <input type="password" name="password" value="" placeholder="Isi jika ingin ganti password" />
                    <span class="toggle-password" id="toggleEditPassword">
                      <i class="fa fa-eye"></i>
                    </span>
                  </div>
                  <!-- Input file avatar HANYA di sini -->
                  <input type="file" id="avatarInput" name="avatar" accept="image/*" style="display:none;">
                  <div class="form-actions">
                    <button type="submit" class="btn-save">Simpan</button>
                    <button type="button" class="btn-reset" id="cancelEditProfile">Batal</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Modal Achievements tetap di luar -->
          <div class="achievements-modal" id="achievementsModal">
            <div class="modal-content">
              <span class="modal-close" id="modalClose">&times;</span>
              <div class="modal-images" id="modalImages"></div>
            </div>
          </div>

          <!-- Setelah XP Bar -->
        </section>

        <!-- NAVBAR -->
        <nav class="custom-navbar fixed-top">
          <div class="navbar-container">
            <a href="../../index.php" class="logo"
              ><img src="../img/KiddosLogo.png" alt="Logo"
            /></a>
            <?php if ($logged_in): ?>
              <div class="nav-right">
                <div class="chatbot">
                  <a href="Kiddos AI.html"><img src="../img/boticons.png" alt="Chatbot"></a>
                </div>
                <a href="/project_oscar_20/auth/logout.php" class="btn btn-outline-light btn-sm" style="padding-top:0.3rem; ">Logout</a>
              <?php endif; ?>
              <div class="hamburger" id="hamburger">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </nav>

        <!-- Side Menu -->
        <div class="side-menu" id="sideMenu">
          <a href="../../index.php"
            ><img
              src="../img/homeicons.png"
              alt="Home"
              class="menu-icon"
            />Home</a
          >
          <a href="../../index.html #Materi"
            ><img
              src="../img/brainicons.png"
              alt="Learn"
              class="menu-icon2"
            />Learn</a
          >
          <a href="../../index.html #Games"
            ><img
              src="../img/gameicons.png"
              alt="Games"
              class="menu-icon3"
            />Games</a
          >
          <a href="#"
            ><img
              src="../img/profileicons.png"
              alt="Profile"
              class="menu-icon"
            />Profile</a
          >
        </div>
      </div>
   

      <?php else: ?>
        <!-- Modal kalau belum login -->
        <div class="modal fade show" id="loginRequiredModal" tabindex="-1" style="display:block; background: linear-gradient(
    to bottom,
    rgb(7, 0, 11) 0%,
    rgba(29, 3, 49, 1) 100%
  );">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center p-4">
              <h3 class="mb-3 text-dark">⚠️ Akses Ditolak</h3>
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
    </body>
  </html>
