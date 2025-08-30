<?php
function random_otp_6() {
    return (string) random_int(100000, 999999);
}

function now_utc() {
    return (new DateTime('now', new DateTimeZone('UTC')))->format('Y-m-d H:i:s');
}

function minutes_from_now(int $m) {
    $dt = new DateTime('now', new DateTimeZone('UTC'));
    $dt->modify("+{$m} minutes");
    return $dt->format('Y-m-d H:i:s');
}

function send_email($to, $subject, $html, $SMTP) {
    // Load PHPMailer manual dari folder /PHPMailer
    $phpMailerBase = __DIR__ . '/../PHPMailer/src';
    require_once $phpMailerBase . '/PHPMailer.php';
    require_once $phpMailerBase . '/SMTP.php';
    require_once $phpMailerBase . '/Exception.php';

    try {
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);

        // Server settings
        $mail->isSMTP();
        $mail->Host       = $SMTP['host'] ?? 'smtp.gmail.com';
        $mail->Port       = (int)($SMTP['port'] ?? 587);
        $mail->SMTPAuth   = true;
        $mail->Username   = $SMTP['user'] ?? '';
        $mail->Password   = $SMTP['pass'] ?? '';
        $secure           = strtolower($SMTP['secure'] ?? 'tls');
        if ($secure === 'ssl') {
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        } else {
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
        }

        // From / To
        $fromEmail = $SMTP['from_email'] ?? $SMTP['user'] ?? 'no-reply@example.com';
        $fromName  = $SMTP['from_name']  ?? 'App';
        $mail->setFrom($fromEmail, $fromName);
        $mail->addAddress($to);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $html;
        $mail->AltBody = strip_tags($html);

        $mail->send();
        return true;
    } catch (Throwable $e) {
        error_log('[MAIL ERROR] ' . $e->getMessage());
        return false;
    }
}

function ensure_session() {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function csrf_token() {
    ensure_session();
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(16));
    }
    return $_SESSION['csrf'];
}

function csrf_check() {
    ensure_session();
    if (($_POST['csrf'] ?? '') !== ($_SESSION['csrf'] ?? null)) {
        http_response_code(400);
        die('Invalid CSRF token');
    }
}
