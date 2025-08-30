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

// Simulasi daftar materi
const materiList = [
  {
    id: 1,
    title: "Pengenalan Scratch",
    content:
      "Scratch itu bahasa pemrograman visual.\nBedanya sama Python atau C++ → kalau bahasa itu pakai kode teks, Scratch pakai block warna-warni.\nCoding di Scratch ibarat main lego: tinggal tarik block → sambungin → jadi program. \nMakanya Scratch gampang dipahami semua orang, bahkan anak SD bisa langsung bikin animasi atau game.",
    img: "../img/scratchimg.jpg",
  },
  {
    id: 2,
    title: "Kenapa Belajar Scratch?",
    content:
      "Scratch cocok di pelajari bagi pemula karena scratch\n- Drag & drop sehingga gampang dipelajari\n- Hasil langsung keliatan di layar\n- Bisa bikin animasi, cerita, dan game\n- Jadi dasar sebelum masuk ke Python, JS, atau C++\n- Mengasah logika dasar",
    img: "../img/scratchimg.jpg",
  },
  {
    id: 3,
    title: "Antarmuka Scratch",
    content:
      "Editor Scratch terbagi jadi 4 bagian:\n1. Stage (panggung hasil program)\n2. Sprite List (karakter/objek)\n3. Block Palette (kumpulan block perintah)\n4. Script Area (tempat nyusun block)",
    img: "../img/editorscratch.png",
  },
  {
    id: 4,
    title: "Jenis - Jenis Blok",
    img: "../img/Jenisblokscratch.png",
    content:
      "Block di Scratch punya warna beda sesuai fungsi:\n🔵 Motion (gerakan)\n🟣 Looks (tampilan)\n🔈 Sound (Suara)\n🟡 Events (Pemicu Peristiwa)\n🟠 Control (kontrol alur program)\n🟢 Operators (Operator)\n🔢 Variables (menyimpan data)",
  },
];

let currentIndex = 0;

function loadMateri(index) {
  const materi = materiList[index];
  document.getElementById("materi-title").innerText = materi.title;
  document.getElementById("materi-content").innerText = materi.content;
  document.getElementById("materi-img").src = materi.img;
}

function nextMateri() {
  if (currentIndex < materiList.length - 1) {
    currentIndex++;
    loadMateri(currentIndex);
  }
}

function prevMateri() {
  if (currentIndex > 0) {
    currentIndex--;
    loadMateri(currentIndex);
  }
}

// load awal
window.onload = () => loadMateri(currentIndex);

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
