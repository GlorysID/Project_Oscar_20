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

// efek bintang
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
