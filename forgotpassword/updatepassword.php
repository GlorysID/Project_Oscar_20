<?php
require __DIR__ . '/helpers.php'; // includes ensure_session(), csrf helpers
require __DIR__ . '/config.php';
ensure_session();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: forgotpassword.php');
    exit;
}

// CSRF optional: cek jika ada token pada form reset
csrf_check();

$email = $_SESSION['otp_verified_email'] ?? '';
$password = $_POST['new_password'] ?? '';
$confirm  = $_POST['confirm_password'] ?? '';

if (!$email) {
    $_SESSION['flash'] = 'Sesi kadaluarsa. Silakan ulangi proses forgot password.';
    header('Location: forgotpassword.php');
    exit;
}

if (empty($password) || empty($confirm)) {
    $_SESSION['flash'] = 'Password dan konfirmasi tidak boleh kosong.';
    header('Location: resetpassword.php');
    exit;
}

if ($password !== $confirm) {
    $_SESSION['flash'] = 'Konfirmasi password tidak sama.';
    header('Location: resetpassword.php');
    exit;
}

// Hash password baru
$hash = password_hash($password, PASSWORD_DEFAULT);

try {
    $stmt = $pdo->prepare('UPDATE users SET password_hash = ?, reset_token = NULL, reset_expires = NULL WHERE email = ?');
    $stmt->execute([$hash, $email]);

    if ($stmt->rowCount() > 0) {
        // sukses
        unset($_SESSION['otp_verified_email']);
        $_SESSION['flash'] = 'Password berhasil diubah. Silakan login.';
        header('Location: ../src/pages/login.php'); // arahkan ke landing page
        exit;
    } else {
        // tidak ada row terupdate -> kemungkinan masalah data
        // (tambahkan logging jika perlu)
        error_log("UPDATE password gagal untuk email: {$email}");
        $_SESSION['flash'] = 'Gagal mengubah password — data pengguna tidak ditemukan. Hub admin.';
        header('Location: resetpassword.php');
        exit;
    }
} catch (Exception $e) {
    error_log("DB error saat update password: " . $e->getMessage());
    $_SESSION['flash'] = 'Terjadi kesalahan server. Coba lagi nanti.';
    header('Location: resetpassword.php');
    exit;
}
