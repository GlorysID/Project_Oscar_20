<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kiddos Login</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&family=Poppins:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet"/>
    
    <style>
      html {
        scroll-behavior: smooth;
      }

      body {
        scrollbar-width: none; 
        -ms-overflow-style: none; 
      }
      
      body::-webkit-scrollbar {
        display: none; 
      }

      html::-webkit-scrollbar,
      body::-webkit-scrollbar {
        display: none;
      }

      /* === BANNER DARK SPACE STYLE === */
      body {
        margin: 0;
        font-family: "Baloo 2", sans-serif;
        overflow-x: hidden;
        background: #1d0331;
      }

      /* Banner */
      .banner {
        position: relative;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }

    /* Dark overlay */
    .banner-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.65); 
      z-index: 1;
    }

    /* gradient overlay untuk transisi halus */
    .banner-gradient {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 150px;
      background: linear-gradient(
        to bottom,
        rgba(29, 3, 49, 0) 0%,
        rgba(29, 3, 49, 1) 100%
      );
      z-index: 2;
    }

    .banner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(black, rgba(255, 255, 255, 0) 2px),
        radial-gradient(black, rgba(255, 255, 255, 0) 1px);
      background-size: 3px 3px, 1px 1px;
      animation: twinkle 4s infinite alternate;
      z-index: 0;
    }


      @keyframes twinkle {
        0% {
          opacity: 0.7;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

      /* floating icons */
      .icon {
        position: absolute;
        width: 60px; 
        animation: float 8s ease-in-out infinite, rotate 12s linear infinite;
        z-index: 1;
      }
      .icon img {
        width: 60px; 
        height: auto;
        display: block;
      }

      /* Positions */
      .python {
        top: 20%;
        left: 10%;
      }
      .js {
        top: 60%;
        left: 15%;
      }
      .html {
        top: 40%;
        right: 15%;
      }
      .css {
        top: 70%;
        right: 10%;
      }
      .scratch {
        top: 15%;
        left: 50%;
      }
      .cpp {
        top: 80%;
        left: 45%;
      }

      #starsCanvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
      }

      
      .wrapper {
        display: flex;
        gap: 40px;
        justify-content: center;
        align-items: stretch;
        z-index: 3;
        position: relative;
        overflow: visible;
        --rt-max-w: 100vh;
        --rt-win-h: 400px;
        --rt-glass: rgba(255, 255, 255, 0.06);
        --rt-border: rgba(255, 255, 255, 0.1);
        margin: 4px auto;
        background: var(--rt-glass);
        border: 1px solid var(--rt-border);
        border-radius: 20px;
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        padding: 20px;
        align-items: flex-start;
        justify-content: center;
        max-width: 400px;
      }

      .glass-container {
        flex: 1;
        padding: 25px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--rt-border);
        backdrop-filter: blur(6px);
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        min-height: auto;
        width: 100%;
        gap: 0;
      }

      .login-header {
        text-align: left;
        margin-bottom: 18px;
      }

      .login-header h2 {
        font-family: "Baloo 2", sans-serif;
        font-size: 1.8rem;
        font-weight: 600;
        color: white;
        margin: 0;
        z-index: 3;
      }

      .form-group {
        margin-bottom: 20px;
        position: relative;
        width: 100%;
      }

      .input-container {
        position: relative;
        display: block;
        width: 100%;
      }

      .input-icon {
        position: absolute;
        left: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: #ddd;
        font-size: 1rem;
        z-index: 2;
        pointer-events: none;
      }

      .form-input {
        width: 100%;
        box-sizing: border-box;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid var(--rt-border);
        margin-bottom: 0;
        height: 36px;
        padding: 0 16px 0 45px;
        border-radius: 12px;
        font-size: 1rem;
        transition: all 0.3s ease;
        display: block;
      }

      .form-input:focus {
        outline: none;
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
      }

      .form-input::placeholder {
        color: #ddd;
      }

      .forgot-password {
        text-align: right;
        margin-bottom: 15px;
        margin-top: -10px;
      }

      .forgot-password a {
        color: #4f7df3;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
      }

      .forgot-password a:hover {
        text-decoration: underline;
      }

      .checkbox-container {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        gap: 8px;
      }

      .checkbox-container input[type="checkbox"] {
        width: 18px;
        height: 18px;
        accent-color: #4f7df3;
      }

      .checkbox-container label {
        font-family: "Poppins", sans-serif;
        font-size: 0.9rem;
        color: #ddd;
        cursor: pointer;
      }

      .login-button {
        height: 44px;
        padding: 0 16px;
        background: linear-gradient(45deg, #8b5cf6, #a78bfa);
        border: none;
        border-radius: 12px;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(138, 92, 246, 0.3);
        width: 100%;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
      }

      .login-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(138, 92, 246, 0.4);
      }

      .login-button:active {
        transform: translateY(0);
      }

      .signup-link, .back-link {
        text-align: center;
        margin-top: 15px;
        font-family: "Poppins", sans-serif;
        color: #ddd;
        font-size: 0.9rem;
      }


      .signup-link, .back-link  a {
        color: #4f7df3;
        text-decoration: none;
        font-weight: 600;
      }

      .signup-link, .back-link  a:hover {
        text-decoration: underline;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .wrapper {
          padding: 15px;
          margin: 20px;
          max-width: 350px;
        }

        .glass-container {
          padding: 20px;
        }

        .login-header h2 {
          font-size: 1.6rem;
        }

        .icon {
          width: 40px;
        }
      }

      @media (max-width: 480px) {
        .wrapper {
          padding: 15px;
          margin: 15px;
          max-width: 320px;
        }

        .glass-container {
          padding: 15px;
        }

        .login-header h2 {
          font-size: 1.4rem;
        }

        .form-input {
          padding: 0 12px 0 40px;
          height: 34px;
          font-size: 0.95rem;
        }

        .input-icon {
          left: 12px;
          font-size: 1rem;
        }
      }

        .toggle-password {
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
        color: #ddd;
        cursor: pointer;
        font-size: 1rem;
        z-index: 2;
      }

      #passwordError {
      margin-top: 5px;
      color: #ff4d6d;
      font-size: 0.8rem;
      font-weight: 500;
      display: none;
    }

  
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.08) inset !important;
      -webkit-text-fill-color: #fff !important;
      caret-color: #fff; 
      transition: background-color 9999s ease-in-out 0s;
    }


        
    </style>
  </head>
  <body>
    <div class="app">

      <!-- Banner -->
      <section class="banner">
        <canvas id="starsCanvas"></canvas>
        <div class="banner-gradient"></div>
        
   <div class="icon python"><img src="/Project_Oscar_20/src/img/pythonicons.png" alt="Python"></div>
        <div class="icon js"><img src="/Project_Oscar_20/src/img/jsicons.png" alt="JavaScript"></div>  
        <div class="icon html"><img src="/Project_Oscar_20/src/img/htmlicons.png" alt="Html"></div>
        <div class="icon css"><img src="/Project_Oscar_20/src/img/cssicons.png" alt="Cascading Style Sheet"></div>
        <div class="icon scratch"><img src="/Project_Oscar_20/src/img/scratchicons.png" alt="Scratch"></div>
        <div class="icon cpp"><img src="/Project_Oscar_20/src/img/cppicons.png" alt="c++"></div>
    
        <!-- Login Form Container (MENGGUNAKAN STRUKTUR ASLI) -->
        <div class="wrapper">
          <div class="glass-container">
            <div class="login-header">
              <h2>Log In</h2>
            </div>
            
            <form class="login-form" method="POST" action="../../auth/login.php">
              <div class="form-group">
                <div class="input-container">
                  <i class="fas fa-user input-icon"></i>
                  <input 
                    type="text" 
                    class="form-input" 
                    placeholder="Username Atau Email" 
                    required
                    name="login">
                </div>
              </div>
              
              <div class="form-group">
                <div class="input-container">
                  <i class="fas fa-lock input-icon"></i>
                  <input 
                    type="password" 
                    class="form-input" 
                    id="password"
                    placeholder="Masukan Password" 
                    required
                    name="password">
                  <i class="fas fa-eye toggle-password" id="togglePassword"></i>
                </div>
                 <small id="passwordError" style="color:#ff4d6d; font-size:0.8rem; display:none; font-family:'Poppins',sans-serif;">
                    Password must be at least 6 characters
                  </small>
              </div>
                            
              <div class="forgot-password">
                <a href="/Project_Oscar_20/forgotpassword/forgotpassword.php">Lupa Password?</a>
              </div>
              
              <div class="checkbox-container">
                <input type="checkbox" id="keepLoggedIn" name="remember">
                <label for="keepLoggedIn">Ingat Saya</label>
              </div>
              
              <button type="submit" class="login-button">Log In</button>
              
              <div class="signup-link">
                Tidak Punya Akun? <a href="register.php">Register Disini</a>
              </div>

              <div class="back-link">
                <a href="/Project_Oscar_20/index.php">Kembali Ke Halaman Utama</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal Error Window -->
    <div id="errorModal" style="display:none;position:fixed;z-index:9999;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,0.5);align-items:center;justify-content:center;">
      <div style="background:#fff;padding:32px 24px;border-radius:14px;max-width:320px;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.25);">
        <div id="errorMsg" style="color:#c2185b;font-size:1.1rem;font-family:'Poppins',sans-serif;margin-bottom:18px;"></div>
        <button onclick="document.getElementById('errorModal').style.display='none'" style="background:#8b5cf6;color:#fff;border:none;padding:8px 24px;border-radius:8px;font-weight:600;cursor:pointer;">OK</button>
      </div>
    </div>

    <script>
      const canvas = document.getElementById("starsCanvas");
      const ctx = canvas.getContext("2d");

      let stars = [];
      const numStars = 150;

      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      function createStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.3 + 0.1,
            opacity: Math.random() * 0.8 + 0.2,
          });
        }
      }

      function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach((star) => {
          ctx.save();
          ctx.globalAlpha = star.opacity;
          ctx.fillStyle = "white";
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }

      function updateStars() {
        stars.forEach((star) => {
          star.y += star.speed;
          star.opacity += (Math.random() - 0.5) * 0.02;
          star.opacity = Math.max(0.2, Math.min(1, star.opacity));
          
          if (star.y > canvas.height + star.radius) {
            star.y = -star.radius;
            star.x = Math.random() * canvas.width;
          }
        });
      }

      function animate() {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
      }

      createStars();
      animate();
      // Error Modal Logic
      (function() {
        const params = new URLSearchParams(window.location.search);
        if (params.get('e') === 'wrong') {
          document.getElementById('errorMsg').textContent = "Password salah. Silakan coba lagi.";
          document.getElementById('errorModal').style.display = "flex";
        }
        if (params.get('e') === 'invalid') {
          document.getElementById('errorMsg').textContent = "Email dan password harus diisi.";
          document.getElementById('errorModal').style.display = "flex";
        }
        if (params.get('e') === 'server') {
          document.getElementById('errorMsg').textContent = "Terjadi kesalahan server. Coba lagi nanti.";
          document.getElementById('errorModal').style.display = "flex";
        }
      })();
      // toggle eye
      const togglePassword = document.getElementById("togglePassword");
      const passwordInput = document.getElementById("password");

      togglePassword.addEventListener("click", function () {
        // cek tipe input
        const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
        passwordInput.setAttribute("type", type);

        // ganti icon mata / mata dicoret
        this.classList.toggle("fa-eye");
        this.classList.toggle("fa-eye-slash");
      });

      // minimum pasword 
      const passwordError = document.getElementById("passwordError");

      passwordInput.addEventListener("input", function() {
        if (passwordInput.value.length > 0 && passwordInput.value.length < 6) {
          passwordError.style.display = "block";
        } else {
          passwordError.style.display = "none";
        }
      });
    </script>
  </body>
</html>