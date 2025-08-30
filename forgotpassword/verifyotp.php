<?php
require __DIR__ . '/config.php';
require __DIR__ . '/helpers.php';
ensure_session();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit; }
csrf_check();

$email = trim($_POST['email'] ?? ($_SESSION['otp_sent_email'] ?? ''));

$otpArray = $_POST['otp'] ?? [];
$otp = implode('', array_map('trim', $otpArray));

if ($email === '' || $otp === '' || strlen($otp) !== 6) {
    $_SESSION['flash'] = 'Email atau OTP tidak valid.';
    header('Location: otp.php');
    exit;
}

$stmt = $pdo->prepare('SELECT id, reset_token, reset_expires FROM users WHERE email = ? LIMIT 1');
$stmt->execute([$email]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

$ok = false;
if ($row && !empty($row['reset_token']) && !empty($row['reset_expires'])) {
    $now = new DateTime('now', new DateTimeZone('UTC'));
    $exp = new DateTime($row['reset_expires'], new DateTimeZone('UTC'));

    if ($exp > $now) {
        if (password_verify($otp, $row['reset_token'])) {
            $ok = true;
        }
    }
}

if ($ok) {
    $_SESSION['otp_verified_email'] = $email;
    $pdo->prepare('UPDATE users SET reset_token = NULL, reset_expires = NULL WHERE email = ?')->execute([$email]);
    header('Location: resetpassword.php');
    exit;
}

$_SESSION['flash'] = 'OTP salah atau sudah kadaluarsa.';
header('Location: otp.php');
exit;
