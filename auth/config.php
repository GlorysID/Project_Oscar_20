<?php

$DB_HOST = "localhost";
$DB_NAME = "kiddos_auth";
$DB_USER = "root";
$DB_PASS = "";
$BASE_URL = "/project_oscar_20";

// KONEKSI PDO
try {
    $pdo = new PDO("mysql:host={$DB_HOST};dbname={$DB_NAME};charset=utf8mb4", $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    die("DB connection failed: " . htmlspecialchars($e->getMessage()));
}

// SESI WAKTU
$lifetime_days = 30;
$lifetime_seconds = $lifetime_days * 24 * 60 * 60;

if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => $lifetime_seconds,
        'path' => '/',
        'domain' => '',
        'secure' => isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off',
        'httponly' => true,
        'samesite' => 'Lax'
    ]);
    session_start();
}
?>
