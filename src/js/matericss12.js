const materiCSSBab12 = [
  {
    title: "Bab 12",
    subtitle: "Best Practices CSS <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami cara menulis CSS yang rapi dan efisien.</li>
        <li>Mengenal prinsip DRY (Don't Repeat Yourself) agar kode lebih bersih.</li>
        <li>Membedakan cara penggunaan inline, internal, dan external CSS.</li>
        <li>Memperkenalkan CSS Framework populer seperti Bootstrap dan Tailwind.</li>
      </ul>
      <p>Best practices bikin CSS kamu lebih profesional, mudah dirawat, dan scalable. 🚀</p>
    `,
  },

  {
    title: "Bab 12.1",
    subtitle: "Penamaan Class yang Rapi",
    html: `
      <p>Pada CSS, penamaan class yang rapi sangat penting supaya mudah dipahami tim maupun diri sendiri:</p>
      <ul>
        <li>Gunakan nama deskriptif, misal <code>.btn-primary</code> untuk button utama.</li>
        <li>Pakai lowercase dan dash <code>-</code> untuk memisahkan kata (<code>.main-header</code>).</li>
        <li>Gunakan BEM (Block__Element--Modifier) untuk proyek besar: <code>.card__title--highlight</code>.</li>
      </ul>
      <p>Contoh:</p>
      <pre><code>.nav-bar { background-color: #333; }
.nav-bar__item { color: white; }</code></pre>
      <p>Dengan penamaan yang konsisten, siapa pun bisa mengerti struktur CSS kamu.</p>
    `,
  },

  {
    title: "Bab 12.2",
    subtitle: "DRY Principle (Don't Repeat Yourself)",
    html: `
      <p>DRY berarti kita tidak menulis aturan CSS yang sama berkali-kali. Fokus ke reusable class.</p>
      <ul>
        <li>Gunakan class umum untuk style yang sering dipakai, misal <code>.text-center</code>.</li>
        <li>Hindari menulis <code>color: red;</code> di 10 tempat berbeda, cukup buat class <code>.text-red</code>.</li>
        <li>Gunakan CSS variables untuk warna, ukuran, atau spacing yang sering dipakai.</li>
      </ul>
      <pre><code>:root {
  --primary-color: #3498db;
}

.btn {
  background-color: var(--primary-color);
}</code></pre>
      <p>Ini bikin maintenance lebih gampang, kalau warna berubah tinggal ubah satu tempat.</p>
    `,
  },

  {
    title: "Bab 12.3",
    subtitle: "Inline, Internal, & External CSS",
    html: `
      <p>Ada 3 cara pakai CSS:</p>
      <ul>
        <li><b>Inline CSS</b> → langsung di tag HTML (<code>&lt;div style="color:red"&gt;</code>)</li>
        <li><b>Internal CSS</b> → di dalam tag <code>&lt;style&gt;</code> dalam HTML</li>
        <li><b>External CSS</b> → di file terpisah (<code>style.css</code>), paling direkomendasikan</li>
      </ul>
      <p>External CSS bikin kode lebih rapi, bisa dipakai di banyak halaman, dan mudah di-maintain.</p>
    `,
  },

  {
    title: "Bab 12.4",
    subtitle: "CSS Framework (Bootstrap & Tailwind)",
    html: `
      <p>CSS Framework adalah toolkit siap pakai untuk membuat layout dan style cepat:</p>
      <ul>
        <li><b>Bootstrap</b> → menyediakan class siap pakai untuk grid, button, navbar, dsb.</li>
        <li><b>Tailwind</b> → utility-first, semua styling dilakukan lewat class singkat (misal <code>p-4 bg-blue-500</code>).</li>
      </ul>
      <p>Contoh Bootstrap:</p>
      <pre><code>&lt;button class="btn btn-primary"&gt;Click Me&lt;/button&gt;</code></pre>
      <p>Contoh Tailwind:</p>
      <pre><code>&lt;div class="p-4 bg-blue-500 text-white"&gt;Halo&lt;/div&gt;</code></pre>
      <p>Framework ini mempercepat development, tapi tetap pahami CSS dasar dulu.</p>
    `,
  },

  {
    title: "Bab 12.5",
    subtitle: "Tips Praktis Best Practices CSS",
    html: `
      <ul>
        <li>Selalu gunakan penamaan class yang konsisten dan deskriptif.</li>
        <li>Ikuti prinsip DRY, gunakan reusable class dan variable.</li>
        <li>Pakai External CSS untuk proyek besar, internal/inline hanya untuk testing cepat.</li>
        <li>Kenalilah framework tapi jangan lupakan CSS dasar.</li>
        <li>Selalu komentar kode penting supaya mudah dimengerti tim.</li>
      </ul>
      <p>Dengan best practices, website kamu lebih terstruktur, scalable, dan gampang dikembangkan.</p>
    `,
  },

  {
    title: "Bab 12.6",
    subtitle: "Latihan Mini Bab 12",
    html: `
      <ol>
        <li>Buat 3 class reusable: <code>.text-center</code>, <code>.btn</code>, <code>.card</code>.</li>
        <li>Pakai CSS variable untuk warna utama dan sekunder.</li>
        <li>Buat file external CSS dan hubungkan ke HTML.</li>
        <li>Eksperimen dengan framework Bootstrap atau Tailwind di satu halaman.</li>
      </ol>
      <p>Checklist paham ✔: Sekarang kamu bisa menulis CSS yang rapi, efisien, dan siap dikembangkan ke proyek besar.</p>
    `,
  },
];

let idxCSS12 = 0;

function renderMateriCSS12() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab12[idxCSS12];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS12 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS12 === materiCSSBab12.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS12 > 0) {
    idxCSS12--;
    renderMateriCSS12();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS12 < materiCSSBab12.length - 1) {
    idxCSS12++;
    renderMateriCSS12();
  }
};

// Inisialisasi pertama kali
renderMateriCSS12();
