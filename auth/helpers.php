    <?php
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    if (!function_exists('redirect')) {
        function redirect($path) {
            global $BASE_URL;
            $base = rtrim($BASE_URL, '/');
            $location = ($base === '' ? $path : $base . $path);
            header("Location: " . $location);
            exit;
        }
    }

    function is_logged_in() {
        return isset($_SESSION['user']) && !empty($_SESSION['user']['id']);
    }

    function current_user() {
        return $_SESSION['user'] ?? null;
    }

    function redirect($path) {
    $base = "/Project_Oscar_20"; // ganti sesuai folder project di htdocs
    header("Location: " . $base . $path);
    exit;
}


    // panggil saat login sukses; $row: array dari query user
    function set_user_session(array $row, $remember = false) {
        // regenerasi session id utk keamanan
        session_regenerate_id(true);

        $_SESSION['user'] = [
            'id' => $row['id'],
            'username' => $row['username'] ?? $row['email'] ?? '',
            'email' => $row['email'] ?? '',
            'full_name' => $row['full_name'] ?? '',
            'avatar' => $row['avatar'] ?? null
        ];

        // Jika ingin implementasi "remember me" terpisah, bisa set cookie persistent di sini.
    }

    // safe logout function
    function logout_user() {
        $_SESSION = [];
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
    }

    // require_login() tetap ada jika halaman harus memaksa redirect
    function require_login() {
        if (!is_logged_in()) {
            redirect("/src/pages/login.php?e=unauthorized");
        }
    }