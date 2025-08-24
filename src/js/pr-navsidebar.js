/* =========================
     Navbar & Side Menu
     ========================= */
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
let lastScrollTop = 0;
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
hamburger.addEventListener("click", () => {
  const isOpen = sideMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
  if (!isOpen) closeMenu();
});
sideMenu.addEventListener("mouseleave", () => closeMenu());
document.addEventListener("mousemove", (e) => {
  const edgeThreshold = 10;
  if (window.innerWidth - e.clientX <= edgeThreshold) openMenu();
});
window.addEventListener("scroll", function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop && st > 60) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.35s cubic-bezier(.77,0,.175,1)";
  } else {
    // Scroll ke atas, tampilkan navbar
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "transform 0.35s cubic-bezier(.77,0,.175,1)";
  }
  lastScrollTop = st <= 0 ? 0 : st; // Untuk iOS
});
