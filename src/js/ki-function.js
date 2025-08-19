/* =========================
     KONFIGURASI GEMINI (FRONT-END)
     ========================= */
const GEMINI_API_KEY = "AIzaSyDbldA0fBJgj4n0ySLYfKHIixmxojVu18w";
const GEMINI_MODEL = "gemini-1.5-flash-latest";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${encodeURIComponent(
  GEMINI_API_KEY
)}`;

/* =========================
     DOM Helpers
     ========================= */
const win = document.getElementById("rtChatWindow");
const form = document.getElementById("rtForm");
const input = document.getElementById("aiInput");
const send = document.getElementById("rtSend");

// ---- Terminal helpers (PY) ----
const terminalPy = document.getElementById("terminalPy");
function writeTerminalPy(msg, cls) {
  const line = document.createElement("div");
  line.textContent = typeof msg === "string" ? msg : String(msg);
  if (cls) line.className = cls;
  terminalPy.appendChild(line);
  terminalPy.scrollTop = terminalPy.scrollHeight;
}
function clearTerminalPy() {
  terminalPy.textContent = "";
}
document
  .getElementById("clearTerminalPy")
  .addEventListener("click", clearTerminalPy);
document.getElementById("copyTerminalPy").addEventListener("click", () => {
  const text = terminalPy.textContent || "";
  navigator.clipboard.writeText(text);
  writeTerminalPy("[terminal] Copied.", "sys");
});

// ---- Terminal helpers (CPP) ----
const terminalCpp = document.getElementById("terminalCpp");
function writeTerminalCpp(msg, cls) {
  const line = document.createElement("div");
  line.textContent = typeof msg === "string" ? msg : String(msg);
  if (cls) line.className = cls;
  terminalCpp.appendChild(line);
  terminalCpp.scrollTop = terminalCpp.scrollHeight;
}
function clearTerminalCpp() {
  terminalCpp.textContent = "";
}
document
  .getElementById("clearTerminalCpp")
  .addEventListener("click", clearTerminalCpp);
document.getElementById("copyTerminalCpp").addEventListener("click", () => {
  const text = terminalCpp.textContent || "";
  navigator.clipboard.writeText(text);
  writeTerminalCpp("[terminal] Copied.", "sys");
});

const escapeHTML = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );

function addRow(role, html) {
  const row = document.createElement("div");
  row.className = "chat-row " + role;

  const avatar = document.createElement("div");
  avatar.className = "rt-avatar " + role;
  avatar.innerHTML = role === "bot" ? "🤖" : "👤";

  const bubble = document.createElement("div");
  bubble.className = "rt-bubble";
  bubble.innerHTML = html;

  row.appendChild(avatar);
  row.appendChild(bubble);
  win.appendChild(row);
  win.scrollTop = win.scrollHeight;
  return row;
}

function addTyping() {
  const row = document.createElement("div");
  row.className = "chat-row bot";

  const avatar = document.createElement("div");
  avatar.className = "rt-avatar bot";
  avatar.innerHTML = "🤖";

  const bubble = document.createElement("div");
  bubble.className = "rt-bubble";
  bubble.innerHTML =
    '<div class="rt-typing">Kiddos Ai <span class="rt-dots"><i class="rt-dot"></i><i class="rt-dot"></i><i class="rt-dot"></i></span></div>';

  row.appendChild(avatar);
  row.appendChild(bubble);
  win.appendChild(row);
  win.scrollTop = win.scrollHeight;
  return row;
}

// Markdown lite -> HTML
function mdLite(text) {
  const safe = String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  return safe
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.*?)\*/g, "<i>$1</i>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\n/g, "<br>");
}

/* =========================
     PANGGIL GEMINI
     ========================= */
async function askGemini(userText) {
  const sys =
    "Kamu adalah Kiddos Ai, asisten pengajar ringkas dan akurat Bahasa pemrograman. Jawab to the point. Jika memberi contoh code, gunakan blok kode yang jelas. Jangan menjawab pertanyaan yang diluar pemrograman seperti matematika, dan pelajaran umum lainnya.";
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const payload = {
        contents: [
          {
            role: "user",
            parts: [{ text: `${sys}\n\nPertanyaan pengguna:\n${userText}` }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 32,
          topP: 0.9,
          maxOutputTokens: 800,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE",
          },
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Kiddos Ai/1.0",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errorText = await res.text().catch(() => "");
        if (attempt < 3) {
          await new Promise((r) => setTimeout(r, 1000 * attempt));
          continue;
        }
        throw new Error(
          `HTTP ${res.status}: Server overloaded atau API key bermasalah`
        );
      }

      const data = await res.json();
      if (!data?.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error("Respons Gemini kosong atau tidak valid");
      }

      const text = data.candidates[0].content.parts
        .map((p) => p.text)
        .join("\n")
        .trim();
      return text || "Maaf, saya tidak bisa memberikan jawaban saat ini.";
    } catch (error) {
      if (attempt < 3) {
        await new Promise((r) => setTimeout(r, 2000 * attempt));
        continue;
      }
      return getFallbackResponse(userText);
    }
  }
}

function getFallbackResponse(userText) {
  const text = userText.toLowerCase();
  if (text.includes("html"))
    return `Maaf, API Gemini sedang sibuk. Tapi saya bisa bantu dengan HTML!
    
HTML (HyperText Markup Language) adalah bahasa markup untuk membuat halaman web.

Contoh dasar:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Halaman Saya</title>
</head>
<body>
  <h1>Hello World!</h1>
  <p>Ini paragraf pertama saya.</p>
</body>
</html>
\`\`\``;
  if (text.includes("css"))
    return `Maaf, API Gemini sedang sibuk. Tapi saya bisa bantu dengan CSS!

CSS (Cascading Style Sheets) untuk styling halaman web.

Contoh:
\`\`\`css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: blue;
  text-align: center;
}
\`\`\``;
  if (text.includes("javascript") || text.includes("js"))
    return `Maaf, API Gemini sedang sibuk. Tapi saya bisa bantu dengan JavaScript!

Contoh:
\`\`\`javascript
function sayHello(name) {
  return "Hello, " + name + "!";
}
console.log(sayHello("World"));
\`\`\``;
  if (text.includes("python"))
    return `Maaf, API Gemini sedang sibuk. Tapi saya bisa bantu dengan Python!

\`\`\`python
def hello_world(name):
    return f"Hello, {name}!"
print(hello_world("World"))
\`\`\``;
  return `Maaf, API Gemini sedang overloaded (Error 503). Coba lagi sebentar.`;
}

/* =========================
     EVENT: Kirim pesan
     ========================= */
async function handleSend(e) {
  e && e.preventDefault();
  const text = (input.value || "").trim();
  if (!text) return;

  addRow("user", escapeHTML(text));
  input.value = "";
  input.focus();

  send.disabled = true;
  send.textContent = "Mengirim...";
  const typing = addTyping();

  try {
    const reply = await askGemini(text);
    typing.remove();
    addRow("bot", mdLite(reply));
  } catch (err) {
    typing.remove();
    let errorMsg = `⚠️ <b>Koneksi bermasalah:</b><br><br>${escapeHTML(
      err.message
    )}<br><br><small>Cek internet atau coba lagi.</small>`;
    addRow("bot", errorMsg);
  } finally {
    send.disabled = false;
    send.textContent = "Kirim";
    win.scrollTop = win.scrollHeight;
  }
}

form.addEventListener("submit", handleSend);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSend(e);
  }
});

/* =========================
     STARFIELD (tetap)
     ========================= */
const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d", { alpha: true });
const banner = document.querySelector(".banner");
let stars = [];
const STAR_COUNT = 150,
  MOUSE_RADIUS = 100,
  REPULSE_STRENGTH = 0.6,
  FRICTION = 0.99;
const FALL_SPEED = 0.3,
  FALL_SPEED_VARIATION = 0.4;
const mouse = { x: null, y: null, active: false };

function resizeCanvas() {
  canvas.width = banner.offsetWidth;
  canvas.height = banner.offsetHeight;
  canvas.style.width = banner.offsetWidth + "px";
  canvas.style.height = banner.offsetHeight + "px";
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

// Mouse event hanya di dalam banner
banner.addEventListener("mousemove", (e) => {
  const rect = banner.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  mouse.active = true;
});
banner.addEventListener("mouseleave", () => {
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

/* =========================
     Chat send button animation
     ========================= */
const sendBtn = document.getElementById("rtSend");
if (sendBtn) {
  sendBtn.addEventListener("click", function () {
    this.classList.add("launch");
    setTimeout(() => this.classList.remove("launch"), 600);
  });
}

/* =========================
     QUICK REPLY
     ========================= */
const AUTO_SEND_QUICK_REPLY = false;
const quickContainer = document.getElementById("quickReplies");
if (quickContainer) {
  quickContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".quick-reply");
    if (!btn) return;
    input.value = btn.textContent.trim();
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.focus();
    if (AUTO_SEND_QUICK_REPLY) {
      if (typeof form.requestSubmit === "function") form.requestSubmit();
      else
        form.dispatchEvent(
          new Event("submit", { bubbles: true, cancelable: true })
        );
    }
  });
}

/* =========================
     CAROUSEL logic (scroll-snap)
     ========================= */
const track = document.getElementById("CDEDITOR");
const pager = document.getElementById("rtPager");
const slides = Array.from(track.children);
const prevBtn = document.querySelector(".rt-prev");
const nextBtn = document.querySelector(".rt-next");

function slideIndex() {
  const w = track.clientWidth;
  return Math.round(track.scrollLeft / w);
}
function updateDots() {
  const idx = slideIndex();
  [...pager.children].forEach((dot, i) =>
    dot.classList.toggle("active", i === idx)
  );
}
// Build dots
slides.forEach((_, i) => {
  const b = document.createElement("button");
  b.className = "rt-dot-btn" + (i === 0 ? " active" : "");
  b.addEventListener("click", () =>
    track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" })
  );
  pager.appendChild(b);
});
// Arrows
prevBtn.addEventListener("click", () => {
  const idx = Math.max(0, Math.round(track.scrollLeft / track.clientWidth) - 1);
  track.scrollTo({ left: idx * track.clientWidth, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
  const idx = Math.min(
    slides.length - 1,
    Math.round(track.scrollLeft / track.clientWidth) + 1
  );
  track.scrollTo({ left: idx * track.clientWidth, behavior: "smooth" });
});
// Sync on scroll/resize
track.addEventListener("scroll", () => requestAnimationFrame(updateDots));
addEventListener("resize", () => requestAnimationFrame(updateDots));
window.addEventListener("load", updateDots);

/* =========================
     ACE Editors Setup
     ========================= */
ace.config.set(
  "basePath",
  "https://cdnjs.cloudflare.com/ajax/libs/ace/1.32.3/"
);
const aceOpts = {
  theme: "ace/theme/one_dark",
  fontSize: 14,
  showPrintMargin: false,
  tabSize: 2,
  useSoftTabs: true,
  wrap: true,
};

// HTML/CSS/JS editors
const ed_html = ace.edit("ed_html", { ...aceOpts, mode: "ace/mode/html" });
const ed_css = ace.edit("ed_css", { ...aceOpts, mode: "ace/mode/css" });
const ed_js = ace.edit("ed_js", { ...aceOpts, mode: "ace/mode/javascript" });

const boilerHtml = `<!-- Mulai dari sini -->
<div class="card">
  <h1>Hello</h1>
  <p>Ini preview dari Web Editor.</p>
  <button onclick="alert('Mantap!')">Klik aku</button>
</div>`;
const boilerCss = ``;

const boilerJs = `console.log("Web Editor siap!");`;

ed_html.setValue(boilerHtml, -1);
ed_css.setValue(boilerCss, -1);
ed_js.setValue(boilerJs, -1);

function runWeb() {
  const html = ed_html.getValue();
  const css = ed_css.getValue();
  const js = ed_js.getValue();
  const doc = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1" />
<style>${css}</style>
</head>
<body>
${html}
<script>
${js.replace(/<\/script>/gi, "<\\/script>")}
<\/script>
</body>
</html>`;
  const iframe = document.getElementById("webPreview");
  iframe.srcdoc = doc;
}
document.getElementById("btnRun").addEventListener("click", runWeb);
document.getElementById("btnResetBoiler").addEventListener("click", () => {
  ed_html.setValue(boilerHtml, -1);
  ed_css.setValue(boilerCss, -1);
  ed_js.setValue(boilerJs, -1);
  runWeb();
});
document.getElementById("btnExportHtml").addEventListener("click", () => {
  const blob = new Blob([document.getElementById("webPreview").srcdoc || ""], {
    type: "text/html",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bm3_web_editor_export.html";
  a.click();
  URL.revokeObjectURL(a.href);
});
// initial preview
runWeb();

// Python / C++ editors
const ed_py = ace.edit("ed_py", { ...aceOpts, mode: "ace/mode/python" });
const ed_cpp = ace.edit("ed_cpp", { ...aceOpts, mode: "ace/mode/c_cpp" });

ed_py.setValue(
  `# Python demo
def add(a,b): 
    return a+b

print(add(2,3))`,

  -1
);
ed_cpp.setValue(
  `#include <iostream>
  int main() {
  std::cout << "Halo Dunia!" << std::endl;
  return 0;
}`,
  -1
);

function saveAs(filename, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
document
  .getElementById("savePy")
  .addEventListener("click", () => saveAs("script.py", ed_py.getValue()));
document
  .getElementById("saveCpp")
  .addEventListener("click", () => saveAs("main.cpp", ed_cpp.getValue()));

// Copy buttons (delegation, jika suatu saat ditambah tombol copy editor)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;
  const sel = btn.getAttribute("data-copy");
  const el = document.querySelector(sel);
  if (!el) return;
  const editor = ace.edit(el.id);
  navigator.clipboard.writeText(editor.getValue()).then(() => {
    btn.textContent = "Copied!";
    setTimeout(
      () => (btn.innerHTML = '<i class="fa-solid fa-copy"></i> Copy'),
      1200
    );
  });
});

/* =========================
     Python via Pyodide → Terminal Python
     ========================= */
let pyodideReady = false;
let pyodide;

(async () => {
  try {
    writeTerminalPy("[pyodide] Memuat runtime...", "sys");
    pyodide = await loadPyodide();
    // Redirect stdout/stderr ke terminal Python
    pyodide.setStdout({
      batched: (s) => {
        if (s.trim().length) writeTerminalPy(s);
      },
    });
    pyodide.setStderr({
      batched: (s) => {
        if (s.trim().length) writeTerminalPy(s, "error");
      },
    });
    pyodideReady = true;
    writeTerminalPy("[pyodide] Siap.", "sys");

    // Patch input() agar pakai prompt browser
    await pyodide.runPythonAsync(`
import builtins
def _web_input(prompt=''):
    import js
    return js.prompt(prompt) or ''
builtins.input = _web_input
`);
  } catch (e) {
    writeTerminalPy("[pyodide] Gagal memuat: " + e, "error");
  }
})();

async function runPython(code) {
  if (!pyodideReady) {
    writeTerminalPy("[pyodide] Belum siap...", "error");
    return;
  }
  writeTerminalPy(">>> python run", "sys");
  try {
    const result = await pyodide.runPythonAsync(code);
    if (typeof result !== "undefined") {
      writeTerminalPy(String(result));
    }
  } catch (e) {
    writeTerminalPy(String(e), "error");
  }
}
document.getElementById("runPy").addEventListener("click", () => {
  clearTerminalPy();
  runPython(ed_py.getValue());
});

/* =========================
     C++ Transpile → JS → Terminal C++
     ========================= */
function cppToJs(code) {
  // 1) Normalize newlines
  let src = code.replace(/\r\n/g, "\n");

  // 2) Remove includes & using
  src = src
    .replace(/#include[^\n]*\n/g, "")
    .replace(/using\s+namespace\s+std\s*;\s*/g, "")
    .replace(/std::/g, "");

  // 3) Replace basic types -> let
  src = src.replace(
    /\b(int|long\s+long|long|float|double|bool|char|string)\b(\s+[*&])?\s+/g,
    "let "
  );

  // 4) Replace cout << ... with __print(...)
  src = src.replace(/cout\s*<<\s*([^;]+);/g, (m, expr) => {
    // Ubah << menjadi , dan hapus endl
    expr = expr.replace(/<<\s*/g, ", ").replace(/\s*endl\s*/g, '"\\n"');
    return `__print(${expr});`;
  });

  // 8) main() wrapper
  src = src.replace(
    /\b(let\s+)?main\s*\(\s*\)\s*\{/g,
    "async function main(){"
  );
  if (!/function\s+main\s*\(/.test(src)) {
    src = "async function main(){\n" + src + "\n}";
  }

  // 9) Final JS program
  const program = `
      (async () => {
        function __print(...args){
          let out = '';
          for(const a of args){ out += (a===undefined || a===null) ? '' : String(a); }
          writeTerminalCpp(out);
        }
        async function __cin(varName){
          const val = prompt("[cin] Input untuk " + varName + ":","");
          return val ?? "";
        }
        try{
          ${src}
          await main();
        }catch(e){
          writeTerminalCpp(String(e), 'error');
        }
      })();
    `;
  return program;
}

async function runCpp(code) {
  clearTerminalCpp();
  writeTerminalCpp(">>> c++ transpile → js", "sys");
  try {
    const js = cppToJs(code);
    // Execute
    // eslint-disable-next-line no-eval
    eval(js);
  } catch (e) {
    writeTerminalCpp(String(e), "error");
  }
}
document.getElementById("runCpp").addEventListener("click", () => {
  runCpp(ed_cpp.getValue());
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    resizeCanvas();
    updateDots();
  }, 120);
});
