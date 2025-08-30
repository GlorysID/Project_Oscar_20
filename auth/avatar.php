<?php
require_once __DIR__ . "/config.php";

$id = isset($_GET['id']) ? (int) $_GET['id'] : 0;
if ($id <= 0) exit();

$stmt = $pdo->prepare("SELECT avatar FROM users WHERE id = :id LIMIT 1");
$stmt->execute([':id' => $id]);
$row = $stmt->fetch(PDO::FETCH_ASSOC);

$default = __DIR__ . "/../src/img/profileicon.png";
$path = $default;

if ($row && !empty($row['avatar'])) {
    $relative = ltrim($row['avatar'], '/');
    $candidate = __DIR__ . "/../" . $relative;

    if (is_file($candidate)) {
        $path = $candidate;
    }
}

$mime = mime_content_type($path);
header("Content-Type: $mime");
readfile($path);
exit();
