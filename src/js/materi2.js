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

// Simulasi daftar materi
const materiList = [
  {
    id: 1,
    title: "Motion",
    content:
      "Motion  adalah  salah  satu  fungsi  di  dalam  Script/Code  yang memiliki blok-blok program untuk mengatur  semua gerakan sprite yang ada di dalam projek kita. Blok tersebut diantaranya adalah: ",
    img: "../img/scratchimg.jpg",
  },
  {
    id: 2,
    title: "Motion",
    content:
      "Blok  ini  berfungsi  untuk memindahkan  sprite  secara horizontal  (sesuai  garis  x).  Angka yang  dimasukkan  ke dalam  blok  ini bisa  berupa  angka  negatif  maupun angka positif.   Jika angka yang  dimasukkan positif, maka sprite akan berpindah ke arah kanan (ke posisi x yang lebih besar)  Jika  angka  yang  dimasukkan  adalah negatif, maka sprite akan berpindah ke arah kiri (posisi x yang lebih kecil)",
    img: "../img/motion1.png",
  },
  {
    id: 3,
    title: "Motion",
    content:
      "  Blok  ini  berfungsi  untuk memutarkan  sprite  yang  ada  di projek kita\n sesuai arah jarum jam dan derajat yang kita inginkan",
    img: "../img/motion2.png",
  },
  {
    id: 4,
    title: "Motion",
    content:
      "Blok  ini  berfungsi  untuk memutarkan  sprite  yang  ada  di projek  kita  berlawanan  arah  jarum jam dan derajat yang kita inginkan.",
    img: "../img/motion3.png",
  },
  {
    id: 5,
    title: "Motion",
    content:
      "Blok  ini  berfungsi  untuk memindahkan  sprite  yang  ada  di projek  kita  ke  posisi  tertentu.  Kita dapat  memilih  posisi  pemindahan sprite  sesuai  dengan  pilihan  yang disediakan oleh Scratch .   Jika  kita  memilih  random  position, maka sprite akan berpindah ke tempat acak  yang ada  di area  output  projek kita.  Jika  kita  memilih  mouse-pointer, maka Scratch akan berpindah menuju kursor mouse kita.  Kita  juga  dapat memindahkan  posisi sprite kita ke posisi sprite lainnya jika kita  memiliki  lebih  dari  satu  sprite dalam satu projek.",
    img: "../img/motion4.png",
  },
  {
    id: 6,
    title: "Motion",
    content:
      "Blok  ini  berfungsi  untuk  membuat sprite  kita  bergerak  menuju  posisi tertentu yang kita inginkan.   Berbeda  dari  sebelumnya  dimana sprite akan langsung muncul di posisi yang kita inginkan, blok ini membuat sprite “bergerak” menuju posisi yang kita inginkan.  Kita  juga  dapat  menentukan  berapa lama  waktu  yang  diperlukan  oleh sprite  untuk  berpindah  ke  posisi tersebut dengan satuan detik.  Sprite juga dapat  berpindah ke  sprite lain jika didalam projek terdapat lebih dari 1 sprite ",
    img: "../img/motion5.png",
  },
  {
    id: 7,
    title: "Motion",
    content:
      "Blok  ini  berfungsi  untuk  membuat sprite bergerak  menuju  koordinat x dan y yang  diinginkan dengan waktu tertentu.",
    img: "../img/motion6.png",
  },
  {
    id: 8,
    title: "Motion",
    content:
      "Blok  ini berfungsi  untuk  mengubah hadapan sprite sehingga sprite  akan menghadap  ke  arah  yang  telah ditentukan.",
    img: "../img/motion7.png",
  },
  {
    id: 7,
    title: "Motion",
    content:
      "Blok  ini  berfungsi  untuk  membuat sprite bergerak  menuju  koordinat x dan y yang  diinginkan dengan waktu tertentu.",
    img: "../img/motion8.png",
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
