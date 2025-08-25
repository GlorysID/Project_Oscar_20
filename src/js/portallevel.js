const totalLevels = 10;
let progress =
  JSON.parse(localStorage.getItem("levelProgress10")) ||
  Array(totalLevels).fill(false);

const levelPositions = [
  { x: 12, y: 16 },
  { x: 35, y: 10 },
  { x: 65, y: 10 },
  { x: 85, y: 30 },
  { x: 65, y: 50 },
  { x: 35, y: 50 },
  { x: 22, y: 70 },
  { x: 35, y: 90 },
  { x: 65, y: 90 },
  { x: 85, y: 70 },
];

function renderLevels() {
  const container = document.getElementById("levelsContainer");
  container.innerHTML = "";

  if (window.innerWidth > 1024) {
    // desktop zigzag dengan SVG path
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.style.position = "absolute";
    svg.style.top = 0;
    svg.style.left = 0;
    svg.style.zIndex = 0;
    svg.style.pointerEvents = "none";

    for (let i = 0; i < levelPositions.length - 1; i++) {
      let p1 = levelPositions[i],
        p2 = levelPositions[i + 1];
      let mx = (p1.x + p2.x) / 2,
        my = (p1.y + p2.y) / 2 + (i % 2 === 0 ? 10 : -10);
      let d = `M${p1.x} ${p1.y} Q${mx} ${my} ${p2.x} ${p2.y}`;
      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      path.setAttribute("stroke", "#bbb");
      path.setAttribute("stroke-width", "2");
      path.setAttribute("fill", "none");
      svg.appendChild(path);
    }
    container.appendChild(svg);

    for (let i = 0; i < totalLevels; i++) {
      let btn = document.createElement("button");
      btn.className = "level-card";
      btn.style.left = `calc(${levelPositions[i].x}% - 3vw)`;
      btn.style.top = `calc(${levelPositions[i].y}% - 3vw)`;
      btn.textContent = i + 1;

      // Lock logic
      if (i !== 0 && !progress[i] && !progress[i - 1]) {
        btn.classList.add("locked");
        btn.disabled = true;
      }
      if (progress[i]) btn.classList.add("completed");

      btn.onclick = () => unlockLevel(i);
      container.appendChild(btn);
    }
  } else {
    // mobile list
    for (let i = 0; i < totalLevels; i++) {
      let row = document.createElement("div");
      row.className = "level-row";
      row.textContent = "Level " + (i + 1);

      let status = document.createElement("span");
      status.className = "level-status";

      if (progress[i]) {
        row.classList.add("completed");
        status.textContent = "✅";
      } else if (i !== 0 && !progress[i] && !progress[i - 1]) {
        row.classList.add("locked");
        status.textContent = "🔒";
      } else {
        status.textContent = "➡️"; // next level kebuka
      }

      row.appendChild(status);

      if (i === 0 || progress[i] || progress[i - 1]) {
        row.onclick = () => unlockLevel(i);
      }

      container.appendChild(row);
    }
  }
}

function unlockLevel(i) {
  progress[i] = true;
  localStorage.setItem("levelProgress10", JSON.stringify(progress));
  renderLevels();
  updateProgressBar();
  if (i < totalLevels - 1)
    alert(`Level ${i + 1} selesai! Level ${i + 2} terbuka.`);
  else alert("🎉 Semua level selesai!");
}

function updateProgressBar() {
  let completed = progress.filter(Boolean).length;
  let percent = Math.round((completed / totalLevels) * 100);
  let bar = document.getElementById("progressBar");
  bar.style.width = percent + "%";
  bar.textContent = percent + "%";
}

// --- Tambahan reset progress biar gampang dicoba ---
function resetProgress() {
  progress = Array(totalLevels).fill(false);
  localStorage.setItem("levelProgress10", JSON.stringify(progress));
  renderLevels();
  updateProgressBar();
}

window.addEventListener("resize", renderLevels);
renderLevels();
updateProgressBar();
