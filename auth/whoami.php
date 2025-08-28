<!-- auth/whoami.php — untuk client-side nav -->

<?php
require_once __DIR__ . "/config.php";
require_once __DIR__ . "/helpers.php";

header('Content-Type: application/json');

$user = current_user();

if (!$user) {
    echo json_encode(['logged_in' => false]);
    exit;
}

// Kirim hanya field yang aman
echo json_encode([
    'logged_in' => true,
    'id' => $user['id'],
    'username' => $user['username'],
    'email' => $user['email'],
    'avatar' => $user['avatar'] ?? null
]);
