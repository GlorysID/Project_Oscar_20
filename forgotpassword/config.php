<?php


$DB_HOST = getenv('DB_HOST') ?: 'localhost';
$DB_NAME = getenv('DB_NAME') ?: 'kiddos_auth';
$DB_USER = getenv('DB_USER') ?: 'root';
$DB_PASS = getenv('DB_PASS') ?: '';

try {
    $pdo = new PDO("mysql:host={$DB_HOST};dbname={$DB_NAME};charset=utf8mb4", $DB_USER, $DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
} catch (Throwable $e) {
    http_response_code(500);
    die("Database connection failed.");
}

// SMTP
$SMTP = [
    'host' => getenv('SMTP_HOST') ?: 'smtp.gmail.com',
    'port' => getenv('SMTP_PORT') ?: 587,
    'user' => getenv('SMTP_USER') ?: 'kiddoscodes.app@gmail.com',
    'pass' => getenv('SMTP_PASS') ?: 'kmll tuco ysop mqfa',
    'secure' => getenv('SMTP_SECURE') ?: 'tls',
    'from_email' => getenv('FROM_EMAIL') ?: 'kiddoscodes.app@gmail.com',
    'from_name'  => getenv('FROM_NAME') ?: 'Kiddos App',
];

