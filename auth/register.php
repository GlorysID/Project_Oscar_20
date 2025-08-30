<?php
require_once __DIR__ . "/config.php";
require_once __DIR__ . "/helpers.php";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect("/src/pages/register.php");
}

$username = trim($_POST['username'] ?? '');
$email    = trim($_POST['email'] ?? '');
$password = $_POST['password'] ?? '';

$full_name = $username;

if ($username === '' || $email === '' || $password === '') {
    redirect("/src/pages/register.php?e=invalid");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect("/src/pages/register.php?e=email");
}

$hash = password_hash($password, PASSWORD_DEFAULT);

try {
    // Cek username/email
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :u OR email = :e LIMIT 1");
    $stmt->execute([':u' => $username, ':e' => $email]);
    if ($stmt->fetch()) {
        redirect("/src/pages/register.php?e=exists");
    }


    $stmt = $pdo->prepare("
        INSERT INTO users (username, email, password_hash, full_name, created_at)
        VALUES (:u, :e, :p, :f, NOW())
    ");
    $stmt->execute([
        ':u' => $username,
        ':e' => $email,
        ':p' => $hash,
        ':f' => $full_name
    ]);


    redirect("/src/pages/login.php?success=registered");
} catch (Exception $ex) {
    redirect("/src/pages/register.php?e=server");
}
?>
