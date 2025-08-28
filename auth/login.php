<?php
require_once __DIR__ . "/config.php";
require_once __DIR__ . "/helpers.php";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect("/src/pages/login.php");
}

$login    = trim($_POST['login'] ?? '');
$password = $_POST['password'] ?? '';

if ($login === '' || $password === '') {
    redirect("/src/pages/login.php?e=invalid");
}

// Allow login by email OR username
try {
    $stmt = $pdo->prepare("SELECT id, username, email, full_name, password_hash, avatar 
                       FROM users 
                       WHERE email = :l OR username = :l 
                       LIMIT 1");

    $stmt->execute([':l' => $login]);
    $row = $stmt->fetch();

    if (!$row || !password_verify($password, $row['password_hash'])) {
        redirect("/src/pages/login.php?e=wrong");
    }

    // setelah verifikasi password berhasil
set_user_session($row, isset($_POST['remember'])); // remember dari checkbox di form
// redirect to main page (index)
redirect("/index.php");

} catch (Exception $ex) {
    redirect("/src/pages/login.php?e=server");
}
?>
        