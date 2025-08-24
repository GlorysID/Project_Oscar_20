document.addEventListener("DOMContentLoaded", function () {
  // --- Achievements Preview Logic ---
  const achievementsPreview = document.getElementById("achievementsPreview");
  const modalImages = document.getElementById("modalImages");
  const MAX_BADGES = 4;

  // Ambil semua badge dari preview (asli)
  const allBadges = Array.from(achievementsPreview.querySelectorAll(".badge"));

  // Helper: Tambah tooltip ke badge
  function addTooltip(badge) {
    if (!badge.querySelector('.badge-tooltip')) {
      const img = badge.querySelector("img");
      const tooltip = document.createElement("span");
      tooltip.className = "badge-tooltip";
      tooltip.textContent = img?.alt || "Achievement";
      badge.appendChild(tooltip);
    }
  }

  // Render preview (hanya MAX_BADGES + "+N" jika perlu)
  function renderPreview() {
    achievementsPreview.innerHTML = "";
    let shown = allBadges.slice(0, MAX_BADGES);
    shown.forEach(badge => {
      addTooltip(badge);
      achievementsPreview.appendChild(badge);
    });
    if (allBadges.length > MAX_BADGES) {
      const moreCount = allBadges.length - MAX_BADGES;
      const moreBadge = document.createElement("span");
      moreBadge.className = "badge badge-more";
      moreBadge.innerHTML = `<span style="font-size:1.2em;font-weight:700;">+${moreCount}</span>`;
      achievementsPreview.appendChild(moreBadge);
    }
  }

  // Render semua badge ke modal
  function renderModal() {
    modalImages.innerHTML = "";
    allBadges.forEach(badge => {
      // Clone node supaya event & tooltip tetap
      const clone = badge.cloneNode(true);
      addTooltip(clone);
      modalImages.appendChild(clone);
    });
  }

  // Inisialisasi
  allBadges.forEach(addTooltip);
  renderPreview();
  renderModal();

  // --- XP Bar Logic (tetap) ---
  const xpBar = document.getElementById("xpBar");
  const xpFire = document.getElementById("xpFire");
  const xpValue = document.getElementById("xpValue");
  const xpUp = document.getElementById("xpUp");
  const xpDown = document.getElementById("xpDown");
  const xpBarBg = document.querySelector(".xp-bar-bg");
  const xpBarFireBg = document.getElementById("xpBarFireBg");
  let xp = 0;
  const XP_LIMIT = 10000;
  const XP_MAX = 10000; // Biar tidak bisa lebih dari 10.000

  // SVG api panjang untuk seluruh bar
  const fireBarSVG = `
    <svg width="100%" height="46" viewBox="0 0 400 46" fill="none" preserveAspectRatio="none">
      <path d="M0,38 Q50,10 100,38 Q150,10 200,38 Q250,10 300,38 Q350,10 400,38" 
        stroke="url(#fireBarGradient)" stroke-width="16" fill="none" filter="url(#fireBarGlow)" />
      <defs>
        <linearGradient id="fireBarGradient" x1="0" y1="10" x2="400" y2="38" gradientUnits="userSpaceOnUse">
          <stop stop-color="#38bdf8"/>
          <stop offset="0.5" stop-color="#60a5fa"/>
          <stop offset="1" stop-color="#6366f1"/>
        </linearGradient>
        <filter id="fireBarGlow" x="-20" y="-20" width="440" height="86">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  `;

  function updateXPBar() {
    const percent = Math.min(xp, XP_LIMIT) / XP_LIMIT * 100;
    xpBar.style.width = percent + "%";
    xpValue.textContent = xp;
    if (xp > 8000) { // Api biru hanya jika XP > 8000
      xpBar.classList.add("over");
      xpFire.classList.add("active");
      xpBarBg.classList.add("fire-active");
      xpBarFireBg.innerHTML = fireBarSVG;
      xpFire.innerHTML = `
        <div class="fire-effect">
          <svg class="fire-main" width="48" height="38" viewBox="0 0 48 38" fill="none">
            <g>
              <path d="M24 6 Q28 18 40 18 Q46 18 46 28 Q46 38 24 38 Q2 38 2 28 Q2 18 8 18 Q20 18 24 6" fill="url(#fireGradient)" filter="url(#glow)"/>
              <path d="M24 16 Q27 24 36 24 Q42 24 42 30 Q42 36 24 36 Q6 36 6 30 Q6 24 12 24 Q21 24 24 16" fill="url(#fireGradientInner)" opacity="0.7"/>
            </g>
            <defs>
              <linearGradient id="fireGradient" x1="24" y1="6" x2="24" y2="38" gradientUnits="userSpaceOnUse">
                <stop stop-color="#60a5fa"/>
                <stop offset="0.5" stop-color="#38bdf8"/>
                <stop offset="1" stop-color="#6366f1"/>
              </linearGradient>
              <linearGradient id="fireGradientInner" x1="24" y1="16" x2="24" y2="36" gradientUnits="userSpaceOnUse">
                <stop stop-color="#a5f3fc"/>
                <stop offset="1" stop-color="#38bdf8"/>
              </linearGradient>
              <filter id="glow" x="-10" y="-10" width="68" height="68">
                <feGaussianBlur stdDeviation="6" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      `;
      const fireMain = xpFire.querySelector('.fire-main');
      fireMain.style.animation = "fireWave 1.2s infinite alternate";
    } else {
      xpBar.classList.remove("over");
      xpFire.classList.remove("active");
      xpBarBg.classList.remove("fire-active");
      xpBarFireBg.innerHTML = "";
      xpFire.innerHTML = "";
    }
  }

  xpUp.addEventListener("click", function () {
    xp = Math.min(xp + 100, XP_MAX);
    updateXPBar();
  });

  xpDown.addEventListener("click", function () {
    xp = Math.max(xp - 100, 0);
    updateXPBar();
  });

  updateXPBar();
});



// modal
// achievment
document.addEventListener("DOMContentLoaded", function () {
  const achievementsContainer = document.getElementById("achievementsContainer");
  const achievementsModal = document.getElementById("achievementsModal");
  const modalClose = document.getElementById("modalClose");

  achievementsContainer.addEventListener("click", function () {
    achievementsModal.classList.add("active");
  });

  modalClose.addEventListener("click", function () {
    achievementsModal.classList.remove("active");
  });

  // Optional: close modal on outside click
  achievementsModal.addEventListener("click", function (e) {
    if (e.target === achievementsModal) {
      achievementsModal.classList.remove("active");
    }
  });
});

  // XP Role Logic
  const xpValue = document.getElementById("xpValue");
  const xpRole = document.getElementById("xpRole");
  const xpUp = document.getElementById("xpUp");
  const xpDown = document.getElementById("xpDown");
  const xpBar = document.getElementById("xpBar");
  const xpRankImg = document.getElementById("xpRankImg"); // Tambahkan ini
  let xp = 0;
  const XP_MAX = 10000;

  function getRole(xp) {
    if (xp <= 999) return "Rookie";
    if (xp <= 1999) return "Apprentice";
    if (xp <= 2999) return "Adventurer";
    if (xp <= 3999) return "Challenger";
    if (xp <= 4999) return "Warrior";
    if (xp <= 5999) return "Elite";
    if (xp <= 6999) return "Hero";
    if (xp <= 7999) return "Master";
    if (xp <= 8999) return "Grandmaster";
    return "Legend";
  }

  // Mapping role ke gambar
  function getRankImg(role) {
    switch (role) {
      case "Rookie": return "/src/img/rank_rookie.png";
      case "Apprentice": return "/src/img/rank_apprentice.png";
      case "Adventurer": return "/src/img/rank_adventurer.png";
      case "Challenger": return "/src/img/rank_challenger.png";
      case "Warrior": return "/src/img/rank_warrior.png";
      case "Elite": return "/src/img/rank_elite.png";
      case "Hero": return "/src/img/rank_hero.png";
      case "Master": return "/src/img/rank_master.png";
      case "Grandmaster": return "/src/img/rank_grandmaster.png";
      case "Legend": return "/src/img/rank_legend.png";
      default: return "/src/mg/rank_rookie.png";
    }
  }

  function updateXPUI() {
    xpValue.textContent = xp;
    const role = getRole(xp);
    xpRole.textContent = role;
    xpBar.style.width = (xp / XP_MAX * 100) + "%";
    if (xpRankImg) xpRankImg.src = getRankImg(role); // Update gambar
  }

  xpUp.addEventListener("click", function () {
    xp = Math.min(XP_MAX, xp + 100);
    updateXPUI();
  });
  xpDown.addEventListener("click", function () {
    xp = Math.max(0, xp - 100);
    updateXPUI();
  });

  updateXPUI();