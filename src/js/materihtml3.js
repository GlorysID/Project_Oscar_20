const materiHTMLBab3 = [
  {
    title: "Bab 3",
    subtitle: "Link & Navigasi di HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami cara membuat hyperlink dengan tag <code>&lt;a&gt;</code>.</li>
        <li>Membedakan antara link internal, eksternal, dan anchor.</li>
        <li>Mengetahui atribut penting pada link (target, title, rel).</li>
        <li>Mampu membuat struktur navigasi sederhana dengan link.</li>
      </ul>
      <p>Di bab ini kita akan belajar membuat <i>jembatan</i> antar halaman, baik di dalam website sendiri maupun ke luar (eksternal).</p>
    `,
  },
  {
    title: "Bab 3.1",
    subtitle: "Dasar Link di HTML",
    html: `
      <p>Tag link menggunakan elemen <code>&lt;a&gt;</code> (anchor). Contoh:</p>
      <pre><code>&lt;a href="https://www.google.com"&gt;Kunjungi Google&lt;/a&gt;</code></pre>
      <p>Hasil: <a href="https://www.google.com" target="_blank">Kunjungi Google</a></p>
      <p><b>Atribut utama:</b></p>
      <ul>
        <li><code>href</code> → alamat tujuan (URL).</li>
        <li><code>target="_blank"</code> → buka di tab baru.</li>
        <li><code>title</code> → teks tambahan ketika mouse diarahkan.</li>
      </ul>
    `,
  },
  {
    title: "Bab 3.2",
    subtitle: "Link Internal vs Eksternal",
    html: `
      <ul>
        <li><b>Link internal</b>: menuju halaman dalam website sendiri.<br>
        Contoh: <code>&lt;a href="about.html"&gt;Tentang Kami&lt;/a&gt;</code></li>
        <li><b>Link eksternal</b>: menuju website lain.<br>
        Contoh: <code>&lt;a href="https://openai.com"&gt;OpenAI&lt;/a&gt;</code></li>
      </ul>
      <p>Biasanya, link internal dipakai untuk navigasi antar halaman di dalam project.</p>
    `,
  },
  {
    title: "Bab 3.3",
    subtitle: "Anchor (Link ke Bagian Halaman)",
    html: `
      <p>Anchor memungkinkan kita langsung lompat ke bagian tertentu dalam satu halaman.</p>
      <pre><code>&lt;a href="#bagian1"&gt;Lompat ke Bagian 1&lt;/a&gt;
&lt;h2 id="bagian1"&gt;Ini Bagian 1&lt;/h2&gt;</code></pre>
      <p>Hasil: <a href="#contohBagian">Lompat ke Bagian Contoh</a></p>
      <h3 id="contohBagian">Ini Bagian Contoh 🎯</h3>
    `,
  },
  {
    title: "Bab 3.4",
    subtitle: "Membuat Navigasi Sederhana",
    html: `
      <p>Kita bisa membuat menu navigasi menggunakan daftar (<code>&lt;ul&gt;</code> atau <code>&lt;nav&gt;</code>):</p>
      <pre><code>&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="about.html"&gt;Tentang&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="contact.html"&gt;Kontak&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>
      <p>Menu ini bisa dihias dengan CSS biar jadi navbar modern.</p>
    `,
  },
  {
    title: "Bab 3.5",
    subtitle: "Latihan Mini Bab 3",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat halaman utama (index.html) dengan link ke halaman profil (profil.html).</li>
        <li>Tambahkan link eksternal ke website favoritmu.</li>
        <li>Gunakan anchor untuk melompat ke bagian "Kontak" dalam halaman profil.</li>
        <li>Buat navigasi sederhana dengan minimal 3 menu.</li>
      </ol>
      <p>Kalau latihan ini selesai, kamu sudah bisa bikin website multi-halaman dengan navigasi 🔗.</p>
    `,
  },
];

let idx2 = 0;

function renderMateri3() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab3[idx2];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx2 === 0;
  document.getElementById("nextBtn").disabled =
    idx2 === materiHTMLBab3.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx2 > 0) {
    idx2--;
    renderMateri3();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx2 < materiHTMLBab3.length - 1) {
    idx2++;
    renderMateri3();
  }
};

// Inisialisasi pertama kali
renderMateri3();
