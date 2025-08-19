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
    title: "Pengenalan Scratch",
    content:
      "Scratch itu bahasa pemrograman visual.\nBedanya sama Python atau C++ → kalau bahasa itu pakai kode teks, Scratch pakai block warna-warni.\nCoding di Scratch ibarat main lego: tinggal tarik block → sambungin → jadi program. \nMakanya Scratch gampang dipahami semua orang, bahkan anak SD bisa langsung bikin animasi atau game.",
    img: "../img/scratchimg.jpg",
  },
  {
    id: 2,
    title: "Mengenal Tampilan",
    content: "Stage, sprite, dan blok-blok seru.",
    img: "img/boticons.png",
  },
  {
    id: 3,
    title: "Jenis Blok",
    content: "Motion, looks, sound, event, dan lainnya.",
    img: "img/blok.png",
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
