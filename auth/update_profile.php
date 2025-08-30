<?php
// update_profile.php
require_once __DIR__ . "/config.php";
require_once __DIR__ . "/helpers.php"; 
session_start();

// validasi login
if (!isset($_SESSION['user']) || empty($_SESSION['user']['id'])) {
    header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/login.php");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php");
    exit();
}

$user_id = (int) $_SESSION['user']['id'];

// ambil input
$full_name = trim($_POST['full_name'] ?? '');
$username  = trim($_POST['username'] ?? '');
$email     = trim($_POST['email'] ?? '');
$password  = $_POST['password'] ?? '';

// siapkan update
$fields = [];
$params = [':id' => $user_id];

// full name
if ($full_name !== '') {
    $fields[] = "full_name = :full_name";
    $params[':full_name'] = $full_name;
}

// username (cek unik jika berubah)
if ($username !== '' && $username !== $_SESSION['user']['username']) {
    $stmt = $pdo->prepare("SELECT id FROM users WHERE username = :u AND id != :id LIMIT 1");
    $stmt->execute([':u' => $username, ':id' => $user_id]);
    if ($stmt->fetch()) {
        header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php?e=username_exists");
        exit();
    }
    $fields[] = "username = :username";
    $params[':username'] = $username;
}

// email
if ($email !== '') {
    $fields[] = "email = :email";
    $params[':email'] = $email;
}

// password (hanya jika diisi)
if ($password !== '') {
    $fields[] = "password_hash = :password_hash";
    $params[':password_hash'] = password_hash($password, PASSWORD_DEFAULT);
}

if (!empty($_FILES['avatar']['tmp_name']) && is_uploaded_file($_FILES['avatar']['tmp_name'])) {
    $allowed = ['image/jpeg' => 'jpg', 'image/png' => 'png', 'image/webp' => 'webp'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $_FILES['avatar']['tmp_name']);
    finfo_close($finfo);

    if (!array_key_exists($mime, $allowed)) {
        header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php?e=unsupported_type");
        exit();
    }

    $maxBytes = 2 * 1024 * 1024;
    if ($_FILES['avatar']['size'] > $maxBytes) {
        header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php?e=file_too_large");
        exit();
    }


    $uploadsDir = __DIR__ . "/../uploads/avatars";
    if (!is_dir($uploadsDir) && !mkdir($uploadsDir, 0755, true)) {
        header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php?e=upload_dir_failed");
        exit();
    }

    try {
        $random = bin2hex(random_bytes(8));
    } catch (Exception $e) {
        $random = time() . rand(1000,9999);
    }
    $ext = $allowed[$mime];
    $filename = "avatar_{$user_id}_{$random}." . $ext;
    $destFullPath = $uploadsDir . DIRECTORY_SEPARATOR . $filename;

    if (!move_uploaded_file($_FILES['avatar']['tmp_name'], $destFullPath)) {
        header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php?e=upload_failed");
        exit();
    }

    $stmt = $pdo->prepare("SELECT avatar FROM users WHERE id = :id LIMIT 1");
    $stmt->execute([':id' => $user_id]);
    $old = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($old && !empty($old['avatar'])) {
        $oldAvatar = $old['avatar'];
        $oldBasename = basename($oldAvatar);
        $oldFull = $uploadsDir . DIRECTORY_SEPARATOR . $oldBasename;
        if (is_file($oldFull)) {
            @unlink($oldFull);
        }
    }

    $webPath = '/uploads/avatars/' . $filename;

    $fields[] = "avatar = :avatar";
    $params[':avatar'] = $webPath;
}


if (!empty($fields)) {
    $sql = "UPDATE users SET " . implode(", ", $fields) . " WHERE id = :id";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
}

$stmt = $pdo->prepare("SELECT id, username, email, full_name, avatar FROM users WHERE id = :id LIMIT 1");
$stmt->execute([':id' => $user_id]);
$updated = $stmt->fetch(PDO::FETCH_ASSOC);
if ($updated) {

    set_user_session($updated);
}

header("Location: " . rtrim($BASE_URL, '/') . "/src/pages/profile.php?success=1");
exit();
