<?php
require __DIR__ . '/config.php';
require __DIR__ . '/helpers.php';

ensure_session();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
csrf_check();

$email = trim($_POST['email'] ?? '');
$generic_msg = 'Jika email terdaftar, OTP telah dikirim. Cek inbox/spam.';

$user = null;
if ($email !== '') {
    $stmt = $pdo->prepare('SELECT id, email FROM users WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    $user = $stmt->fetch();
}

if ($user) {
    // generate OTP
    $otp = random_otp_6();
    $hash = password_hash($otp, PASSWORD_DEFAULT);

    // simpan expiry UTC ke DB
    $expires = minutes_from_now(15);
    $upd = $pdo->prepare('UPDATE users SET reset_token = ?, reset_expires = ? WHERE id = ?');
    $upd->execute([$hash, $expires, $user['id']]);
    $_SESSION['otp_sent_email'] = $email;

    // konversi untuk tampilan email (ke WIB / Asia/Jakarta)
    $dt = new DateTime($expires, new DateTimeZone('UTC'));
    $dt->setTimezone(new DateTimeZone('Asia/Jakarta'));
    $expires_local = $dt->format('Y-m-d H:i:s');

    $html = '<p>Halo,</p><p>Kode OTP reset password kamu:</p>'
        . '<h2 style="letter-spacing:3px;">' . htmlspecialchars($otp) . '</h2>'
        . '<p>Berlaku sampai ' . htmlspecialchars($expires_local) . ' WIB (±15 menit).</p>';
    send_email($email, 'OTP Reset Password', $html, $SMTP);

    $_SESSION['flash'] = $generic_msg;
    header('Location: otp.php');
    exit;
} else {
    // Email tidak ditemukan
    $_SESSION['flash'] = 'Email tidak ditemukan.';
    header('Location: forgotpassword.php');
    exit;
}
