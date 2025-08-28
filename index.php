<?php
require_once __DIR__ . "/auth/config.php";
require_once __DIR__ . "/auth/helpers.php";

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kiddos Learning</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="bootstrap-5.3.7-dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="src/css/style.css" />

    <style>
      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        display: none;
      }

      .btn {
        height: 30px;
        padding: 0 16px;
        background: linear-gradient(45deg, #8b5cf6, #a78bfa);
        padding-top: 2px;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(138, 92, 246, 0.3);
      }

      .btn:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(138, 92, 246, 0.4);
      }

      .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
      }
    </style>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="custom-navbar fixed-top">
      <div class="navbar-container">
        <a href="#" class="logo"
          ><img src="src/img/KiddosLogo.png" alt="Logo"
        /></a>
        <div class="nav-right">
          <?php if (is_logged_in()): ?>
          <div
            id="userMenu"
            style="display: flex; align-items: center; gap: 10px"
          >
            <img
              src="<?= $BASE_URL ?>/auth/avatar.php?id=<?= $_SESSION['user']['id'] ?>"
              alt="Avatar"
              style="
                width: 36px;
                height: 36px;
                border-radius: 50%;
                object-fit: cover;
                cursor: pointer;
              "
              onclick="location.href='src/pages/profile.php'"
            />
            <a href="auth/logout.php" class="btn btn-outline-light btn-sm"
              >Logout</a
            >
          </div>
          <?php else: ?>

          <div
            class="auth-buttons"
            style="display: flex; gap: 10px; align-items: center"
          >
            <a href="src/pages/login.php" class="btn">Login</a>
            <a href="src/pages/register.php" class="btn">Sign Up</a>
          </div>
          <?php endif; ?>
          <div class="chatbot">
            <a href="src/pages/Kiddos AI.html"
              ><img src="src/img/boticons.png" alt="Chatbot"
            /></a>
          </div>
          <div class="hamburger" id="hamburger">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    </nav>

    <!-- Side Menu -->
    <div class="side-menu" id="sideMenu">
      <a href="#"><img src="src/img/homeicons.png" class="menu-icon" />Home</a>
      <a href="#Materi"
        ><img src="src/img/brainicons.png" class="menu-icon2" />Learn</a
      >
      <a href="#Games"
        ><img src="src/img/gameicons.png" class="menu-icon3" />Games</a
      >
      <?php if (is_logged_in()): ?>
      <a href="src/pages/profile.php">
        <img src="src/img/profileicons.png" class="menu-icon" />Profile
      </a>
      <?php else: ?>
      <a href="#" onclick="showLoginModal()">
        <img src="src/img/profileicons.png" class="menu-icon" />Profile
      </a>
      <?php endif; ?>
    </div>

    <!-- Banner -->

    <section class="banner">
      <canvas id="starsCanvas"></canvas>

      <div class="banner-gradient"></div>
      <img src="src/img/KiddosMain.png" class="main-logo" alt="Kiddos Logo" />
      <a href="#Materi" class="main-button">Pelajari Sekarang!</a>

      <img src="src/img/pythonicons.png" class="icon python" alt="Python" />
      <img src="src/img/jsicons.png" class="icon js" alt="JavaScript" />
      <img src="src/img/htmlicons.png" class="icon html" alt="HTML" />
      <img src="src/img/cssicons.png" class="icon css" alt="CSS" />
      <img src="src/img/scratchicons.png" class="icon scratch" alt="scratch" />
      <img src="src/img/cppicons.png" class="icon cpp" alt="C++" />
    </section>

    <!-- Materi Section -->
    <section class="materi-section container my-5" id="Materi">
      <div class="materi-h">
        <p class="kategori-text">Kategori</p>
        <h2 class="judul-materi">Mau Belajar Apa Nih?</h2>
      </div>

      <div class="row g-4 mt-3">
        <!-- Materi Boxes -->
        <div class="col-lg-4 col-md-6 col-sm-12">
          <a
            href="src/pages/portalmateriscratch.html"
            style="text-decoration: none"
          >
            <div class="materi-box">
              <img src="src/img/scratchicons.png" class="materi-icon" />
              <div>
                <h4>Scratch</h4>
                <p>Belajar logika dasar dengan Scratch.</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <a
            href="src/pages/portalmaterihtml.html"
            style="text-decoration: none"
          >
            <div class="materi-box">
              <img src="src/img/htmlicons.png" class="materi-icon" />
              <div>
                <h4>HTML</h4>
                <p>Belajar struktur elemen website.</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <a
            href="src/pages/portalmatericss.html"
            style="text-decoration: none"
          >
            <div class="materi-box">
              <img src="src/img/cssicons.png" class="materi-icon" />
              <div>
                <h4>CSS</h4>
                <p>Belajar design website dengan CSS.</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="src/pages/portalmaterijs.html" style="text-decoration: none">
            <div class="materi-box">
              <img src="src/img/jsicons.png" class="materi-icon" />
              <div>
                <h4>JavaScript</h4>
                <p>Pengenalan JavaScript dan dasar syntax JavaScript.</p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <a href="src/pages/portalmateripy.html" style="text-decoration: none">
            <div class="materi-box">
              <img src="src/img/pythonicons.png" class="materi-icon" />
              <div>
                <h4>Python</h4>
                <p>
                  Pengenalan Python dan belajar dasar bahasa populer untuk data,
                  dan backend.
                </p>
              </div>
            </div>
          </a>
        </div>

        <div class="col-lg-4 col-md-6 col-sm-12">
          <a
            href="src/pages/portalmatericpp.html"
            style="text-decoration: none"
          >
            <div class="materi-box">
              <img src="src/img/cppicons.png" class="materi-icon" />
              <div>
                <h4>C++</h4>
                <p>Pelajari dasar bahasa kuat untuk game dan sistem.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Section Tips dari Maskot -->
    <section class="mascot-section container my-5">
      <div class="row align-items-center g-4">
        <!-- Maskot kiri -->
        <div
          class="col-md-4 d-flex justify-content-md-end justify-content-center"
        >
          <img
            src="src/img/maskotfullbody1.png"
            alt="Maskot"
            class="mascot-img"
            id="mascot1"
          />
        </div>

        <!-- Bubble chat kanan -->
        <div class="col-md-8">
          <div class="mascot-bubble">
            <h4 class="mb-1">Apa kata Kiddos</h4>
            <p id="mascot-tip">
              Mulai dari yang paling gampang: HTML dulu. Nanti CSS bikin cakep,
              JS bikin hidup. Easy.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Game Section -->
    <section class="games-section" id="Games">
      <div class="games-h">
        <p class="Games-text">Games</p>
        <h2 class="judul-games">Coba main yukk!</h2>
      </div>
      <div class="games-grid">
        <a href="src/pages/level1scratch.html" style="text-decoration: none">
          <div class="game-card">
            <div class="media-card">
              <img
                src="src/img/scratchposter.png"
                class="poster"
                alt="Poster"
              />
              <video muted autoplay loop playsinline>
                <source src="src/video/scratchpreview.mp4" type="video/mp4" />
              </video>
            </div>
            <h3>Scratch</h3>
            <p>Mainkan Sekarang!</p>
          </div>
        </a>
        <a href="src/pages/level1html.HTML" style="text-decoration: none">
          <div class="game-card">
            <div class="media-card">
              <img src="src/img/htmlposter.png" class="poster" alt="Poster" />
              <video muted autoplay loop playsinline>
                <source src="src/video/htmlpreview.mp4" type="video/mp4" />
                Browser Tidak Support Video.
              </video>
            </div>
            <h3>HTML</h3>
            <p>Mainkan Sekarang!</p>
          </div>
        </a>
        <a href="src/pages/level1css.html" style="text-decoration: none">
          <div class="game-card">
            <div class="media-card">
              <img src="src/img/cssposter.png" class="poster" alt="Poster" />
              <video muted autoplay loop playsinline>
                <source src="src/video/csspreview.mp4" type="video/mp4" />
                Browser Tidak Support Video.
              </video>
            </div>
            <h3>CSS</h3>
            <p>Mainkan Sekarang!</p>
          </div>
        </a>
        <a href="src/pages/level1js.html" style="text-decoration: none">
          <div class="game-card">
            <div class="media-card">
              <img src="src/img/jsposter.png" class="poster" alt="Poster" />
              <video muted autoplay loop playsinline>
                <source src="src/video/jspreview.mp4" type="video/mp4" />
                Browser Tidak Support Video.
              </video>
            </div>
            <h3>JavaScript</h3>
            <p>Mainkan Sekarang!</p>
          </div>
        </a>
        <a href="src/pages/level1py.html" style="text-decoration: none">
          <div class="game-card">
            <div class="media-card">
              <img src="src/img/pyposter.png" class="poster" alt="Poster" />
              <video muted autoplay loop playsinline>
                <source src="src/video/pythonpreview.mp4" type="video/mp4" />
                Browser Tidak Support Video.
              </video>
            </div>
            <h3>Python</h3>
            <p>Mainkan Sekarang!</p>
          </div>
        </a>
        <a href="src/pages/level1cpp.html" style="text-decoration: none">
          <div class="game-card">
            <div class="media-card">
              <img src="src/img/c++poster.png" class="poster" alt="Poster" />
              <video muted autoplay loop playsinline>
                <source src="src/video/c++preview.mp4" type="video/mp4" />
                Browser Tidak Support Video.
              </video>
            </div>
            <h3>C++</h3>
            <p>Mainkan Sekarang!</p>
          </div>
        </a>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-container">
        <!-- Kolom 1: Identitas -->
        <div class="footer-about">
          <h2>E-Learning Dev</h2>
          <p>SMK BINA MANDIRI MULTIMEDIA</p>
          <p><em>“Yang Handal Berawal Dari Yang Dasar”</em></p>
        </div>

        <!-- Kolom 2: Navigasi -->
        <div class="footer-links">
          <h3>Menu</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#Materi">Learn</a></li>
            <li><a href="#Games">Games</a></li>
          </ul>
        </div>

        <!-- Kolom 3: Kontak -->
        <div class="footer-contact">
          <h3>Kontak</h3>
          <p>Email: anjalisaputra@gmail.com</p>
          <p>Email: rexnabagus@gmail.com</p>
          <p>
            GitHub:
            <a href="https://github.com/GlorysID">github.com/timalpha</a>
          </p>
          <p>
            GitHub:
            <a href="https://github.com/zxlyn16">github.com/timalpha</a>
          </p>
        </div>
      </div>

      <!-- Copyright -->
      <p class="copyright">
        © 2025 Tim E-Learning Dev – SMK BINA MANDIRI MULTIMEDIA.
      </p>
    </footer>

    <!-- modal -->
    <!-- Modal untuk login warning -->
    <div id="loginModal" class="modal" style="display: none">
      <div class="modal-content">
        <h3>⚠ Harus Login</h3>
        <p>Anda harus login dulu untuk membuka halaman Profile.</p>
        <a href="src/pages/login.php"><button>Login Sekarang</button></a>
        <button onclick="closeLoginModal()">Tutup</button>
      </div>
    </div>

    <script src="src/js/script.js"></script>
  </body>
</html>
