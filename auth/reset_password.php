<?php
require_once __DIR__ . "/config.php";
require_once __DIR__ . "/helpers.php";

$token = $_GET['token'] ?? $_POST['token'] ?? '';
if ($token === '') {
    http_response_code(400);
    die("Token tidak ditemukan.");
}

// Cek token valid dan belum expired
$stmt = $pdo->prepare("SELECT id FROM users WHERE reset_token = :t AND reset_expires > NOW() LIMIT 1");
$stmt->execute([':t' => $token]);
$user = $stmt->fetch();
if (!$user) {
    http_response_code(400);
    die("Token tidak valid atau sudah kedaluwarsa.");
}

$err = null;
$ok  = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $p1 = $_POST['password'] ?? '';
    $p2 = $_POST['password_confirm'] ?? '';

    if (strlen($p1) < 8) {
        $err = "Password minimal 8 karakter.";
    } elseif ($p1 !== $p2) {
        $err = "Konfirmasi password tidak sama.";
    } else {
        $hash = password_hash($p1, PASSWORD_DEFAULT);
        $upd = $pdo->prepare("UPDATE users 
                                SET password_hash=:ph, reset_token=NULL, reset_expires=NULL 
                              WHERE id=:id");
        $upd->execute([':ph' => $hash, ':id' => $user['id']]);

        // (Opsional) logout semua session lama user tsb di sini

        // Redirect ke login dengan pesan sukses
        redirect("/src/pages/login.php?reset=ok");
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Reset Password</title>
  <link rel="stylesheet" href="/project-oscar-main/bootstrap-5.3.7-dist/css/bootstrap.min.css">
</head>
<body class="bg-dark text-light d-flex align-items-center" style="min-height:100vh;">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-5">
      <div class="card bg-secondary">
        <div class="card-body">
          <h4 class="mb-3">Buat Password Baru</h4>

          <?php if ($err): ?>
            <div class="alert alert-warning"><?= htmlspecialchars($err) ?></div>
          <?php endif; ?>

          <form method="post" novalidate>
            <input type="hidden" name="token" value="<?= htmlspecialchars($token) ?>">
            <div class="mb-3">
              <label class="form-label">Password Baru</label>
              <input type="password" name="password" class="form-control" required minlength="8">
            </div>
            <div class="mb-3">
              <label class="form-label">Konfirmasi Password</label>
              <input type="password" name="password_confirm" class="form-control" required minlength="8">
            </div>
            <button class="btn btn-light w-100" type="submit">Reset Password</button>
          </form>

          <div class="mt-3">
            <a href="/project-oscar-main/src/pages/login.php" class="text-white">Kembali ke Login</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>
