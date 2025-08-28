// Navbar dan Hamburger Menu
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const navbar = document.querySelector(".custom-navbar");

function openMenu() {
  sideMenu.classList.add("active");
  hamburger.classList.add("open");
}

function closeMenu() {
  sideMenu.classList.remove("active");
  hamburger.classList.remove("open");

  // reset animasi biar pas buka lagi fresh
  sideMenu.querySelectorAll("a").forEach((link) => {
    link.style.animation = "none";
    setTimeout(() => (link.style.animation = ""), 10);
  });
}

// Toggle menu on click
hamburger.addEventListener("click", () => {
  const isOpen = sideMenu.classList.toggle("active");
  hamburger.classList.toggle("open");

  if (!isOpen) {
    closeMenu();
  }
});

// Auto-close kalau kursor keluar area menu
sideMenu.addEventListener("mouseleave", () => {
  closeMenu();
});

// Auto-open kalau kursor mentok kanan layar
document.addEventListener("mousemove", (e) => {
  const edgeThreshold = 10; // jarak dari tepi kanan (px)
  if (window.innerWidth - e.clientX <= edgeThreshold) {
    openMenu();
  }
});

// Scroll effect: navbar jadi lebih gelwwap
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Animasi Bintang di Banner
const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

let stars = [];
const numStars = 100;

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
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.2 + 0.05,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach((star) => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
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

// ===== Tips Random dari Maskot =====
const tips = [
  "Semua yang handal berawal dari yang dasar.",
  "Belajar coding yuk karena coding itu seru polll.",
  "Kalau kamu bingung mulai belajar dari mana, aku saranin Scratch dulu aja.",
  "Jangan lupa istirahat yaaa.",
  "Buat target kecil. 20 menit per sesi udah mantap.",
  "Semua orang pernah error kok. Yang penting tau cara nyari solusinya 😉",
  "Python enak buat logika. Coba latihan if/else dan loop.",
];

function setRandomTip() {
  const tipEl = document.getElementById("mascot-tip");
  if (!tipEl) return;
  const newTip = tips[Math.floor(Math.random() * tips.length)];
  // animasi fade-in sederhana
  tipEl.style.opacity = 0;
  setTimeout(() => {
    tipEl.textContent = newTip;
    tipEl.style.opacity = 1;
    tipEl.style.transition = "opacity 250ms ease";
  }, 160);
}

document.addEventListener("DOMContentLoaded", setRandomTip);

// Kalo mau auto-rotate tiap 8 detik, buka komen di bawah:
setInterval(setRandomTip, 4000);

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".game-card");

  cards.forEach((card) => {
    const video = card.querySelector("video");
    const poster = card.querySelector(".poster");

    // default ke poster
    video.pause();
    video.currentTime = 0;

    card.addEventListener("mouseenter", () => {
      poster.style.opacity = "0"; // sembunyikan poster
      video.currentTime = 0; // mulai dari awal
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // reset ke frame awal
      poster.style.opacity = "1"; // munculin poster lagi
    });
  });
});

async function refreshAuthUI() {
  try {
    const res = await fetch("/project-oscar-main/auth/whoami.php", {
      credentials: "include",
    });
    const j = await res.json();
    const authButtons = document.querySelector(".auth-buttons");
    if (!authButtons) return;
    if (j.logged_in) {
      // hide login/signup
      authButtons.style.display = "none";

      // create avatar/profile + logout
      let right = document.querySelector(".nav-right");
      if (right && !document.getElementById("userMenu")) {
        const div = document.createElement("div");
        div.id = "userMenu";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.gap = "10px";

        const img = document.createElement("img");
        img.src = j.avatar
          ? `/project-oscar-main/${j.avatar}`
          : "/project-oscar-main/src/img/default-avatar.png";
        img.alt = j.username;
        img.style.width = "36px";
        img.style.height = "36px";
        img.style.borderRadius = "50%";
        img.style.objectFit = "cover";
        img.style.cursor = "pointer";
        img.onclick = () =>
          (location.href = "/project-oscar-main/src/pages/profile.php");

        const logout = document.createElement("a");
        logout.href = "/project-oscar-main/auth/logout.php";
        logout.className = "btn btn-outline-light btn-sm";
        logout.textContent = "Logout";

        div.appendChild(img);
        div.appendChild(logout);
        right.insertBefore(div, right.querySelector("#hamburger"));
      }
    } else {
      authButtons.style.display = "flex";
      const um = document.getElementById("userMenu");
      if (um) um.remove();
    }
  } catch (err) {
    console.error("auth check failed", err);
  }
}

document.addEventListener("DOMContentLoaded", refreshAuthUI);

function showLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
}
function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}
