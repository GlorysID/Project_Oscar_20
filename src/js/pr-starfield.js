/* =========================
     STARFIELD (tetap)
     ========================= */
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d", { alpha: true });
const bgdesain = document.querySelector(".bgdesain");
let stars = [];
const STAR_COUNT = 150,
  MOUSE_RADIUS = 100,
  REPULSE_STRENGTH = 0.6,
  FRICTION = 0.99;
const FALL_SPEED = 0.3,
  FALL_SPEED_VARIATION = 0.4;
const mouse = { x: null, y: null, active: false };

function resizeCanvas() {
  canvas.width = bgdesain.offsetWidth;
  canvas.height = bgdesain.offsetHeight;
  canvas.style.width = bgdesain.offsetWidth + "px";
  canvas.style.height = bgdesain.offsetHeight + "px";
  if (!stars.length) spawnStars();
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function r(min, max) {
  return Math.random() * (max - min) + min;
}
function spawnStars() {
  stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    const base = FALL_SPEED + Math.random() * FALL_SPEED_VARIATION;
    stars.push({
      x: r(0, canvas.width),
      y: r(0, canvas.height),
      vx: r(-0.1, 0.1),
      vy: base,
      originalVy: base,
      r: Math.random() < 0.85 ? r(0.6, 1.6) : r(1.6, 2.8),
      opacity: r(0.4, 1),
      fade: false, // Tambahkan properti fade
    });
  }
}

// Mouse event hanya di dalam bgdesain
bgdesain.addEventListener("mousemove", (e) => {
  const rect = bgdesain.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  mouse.active = true;
});
bgdesain.addEventListener("mouseleave", () => {
  mouse.active = false;
});

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  for (const s of stars) {
    if (mouse.active) {
      const dx = s.x - mouse.x,
        dy = s.y - mouse.y,
        d = Math.hypot(dx, dy);
      if (d < MOUSE_RADIUS && d > 0.001) {
        const f = (1 - d / MOUSE_RADIUS) * REPULSE_STRENGTH;
        s.vx += (dx / d) * f * 0.3;
        s.vy += (dy / d) * f * 0.5;
      }
    }
    s.vx *= FRICTION;
    s.vy *= FRICTION;
    if (s.vy < s.originalVy * 0.5) s.vy += s.originalVy * 0.02;
    s.x += s.vx;
    s.y += s.vy;

    // Fade out jika bintang melewati batas bawah canvas
    if (s.y > canvas.height - 20 && !s.fade) {
      s.fade = true;
    }
    if (s.fade) {
      s.opacity -= 0.025; // Fade out smooth
      if (s.opacity <= 0) {
        // Respawn bintang di atas
        s.x = r(0, canvas.width);
        s.y = r(-100, -10);
        s.vy = s.originalVy;
        s.vx = r(-0.1, 0.1);
        s.opacity = r(0.4, 1);
        s.fade = false;
      }
    }

    if (s.x < 0) {
      s.x = 0;
      s.vx *= -0.8;
    }
    if (s.x > canvas.width) {
      s.x = canvas.width;
      s.vx *= -0.8;
    }
    if (s.y < -100) {
      s.y = -100;
      s.vy = Math.abs(s.vy);
    }

    ctx.shadowBlur = 8;
    ctx.shadowColor = `rgba(255,255,255,${s.opacity * 0.8})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${s.opacity})`;
    ctx.fill();
    if (s.r > 1.8) {
      ctx.shadowBlur = 15;
      ctx.shadowColor = `rgba(200,220,255,${s.opacity * 0.5})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,220,255,${s.opacity * 0.8})`;
      ctx.fill();
    }
  }
  ctx.restore();
  requestAnimationFrame(loop);
}
loop();
