<?php
require_once __DIR__ . "/config.php";
require_once __DIR__ . "/helpers.php";

$successMsg = null;
$errorMsg = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');

    // Selalu tampilkan pesan yang sama (jangan bocorkan apakah email ada)
    $successMsg = "Jika email terdaftar, kami telah mengirim link reset. Silakan cek email kamu.";

    if ($email !== '') {
        $stmt = $pdo->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
        $stmt->execute([':email' => $email]);
        $user = $stmt->fetch();

        if ($user) {
            // Buat token & expiry (1 jam)
            $token   = bin2hex(random_bytes(32));
            $expires = date("Y-m-d H:i:s", time() + 3600);

            $pdo->prepare("UPDATE users SET reset_token=:t, reset_expires=:e WHERE id=:id")
                ->execute([':t' => $token, ':e' => $expires, ':id' => $user['id']]);

            // Buat absolute URL
            $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
            $host   = $_SERVER['HTTP_HOST'] ?? 'localhost';
            $origin = $scheme . '://' . $host;
            $resetLink = $origin . rtrim($BASE_URL, '/') . "/auth/reset_password.php?token=" . urlencode($token);

            // Kirim email (coba), kalau gagal -> tulis ke log
            $subject = "Reset Password Kiddos";
            $message = "Klik link berikut untuk reset password Anda:\n\n{$resetLink}\n\nLink berlaku 1 jam.";
            $headers = "From: no-reply@{$host}\r\n";

            $sent = @mail($email, $subject, $message, $headers);
            if (!$sent) {
                // Dev fallback: simpan link ke file log (cek file ini kalau mail() gagal)
                @file_put_contents(__DIR__ . "/../_mail_log.txt",
                    date('c') . " TO: {$email}\n{$resetLink}\n\n",
                    FILE_APPEND
                );
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Lupa Password</title>
  <link rel="stylesheet" href="/project-oscar-main/bootstrap-5.3.7-dist/css/bootstrap.min.css">
</head>
<body class="bg-dark text-light d-flex align-items-center" style="min-height:100vh;">
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-5">
      <div class="card bg-secondary">
        <div class="card-body">
          <h4 class="mb-3">Lupa Password</h4>

          <?php if ($successMsg): ?>
            <div class="alert alert-info"><?= htmlspecialchars($successMsg) ?></div>
          <?php endif; ?>

          <form method="post" novalidate>
            <div class="mb-3">
              <label class="form-label">Email anda</label>
              <input type="email" name="email" class="form-control" required placeholder="you@example.com">
            </div>
            <button class="btn btn-light w-100" type="submit">Kirim Link Reset</button>
          </form>

          <div class="mt-3">
            <a href="/project-oscar-main/src/pages/login.php" class="text-white">Kembali ke Login</a>
          </div>

          <hr class="border-light">
          <small class="text-warning">Dev tips: jika email tidak terkirim, cek file
            <code>project-oscar-main/_mail_log.txt</code> untuk melihat link reset.</small>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>
