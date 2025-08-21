const materiHTMLBab8 = [
  {
    title: "Bab 8",
    subtitle: "Semantic HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep semantic HTML.</li>
        <li>Mengenal tag semantic utama seperti header, nav, section, article, aside, dan footer.</li>
        <li>Membedakan antara semantic dan non-semantic HTML.</li>
        <li>Membuat struktur halaman web yang lebih bermakna.</li>
      </ul>
      <p>Semantic HTML membuat struktur halaman lebih jelas 🧩.  
      Browser, mesin pencari, dan pembaca screen reader akan lebih mudah memahami isi website kita.</p>
    `,
  },
  {
    title: "Bab 8.1",
    subtitle: "Pengertian Semantic HTML",
    html: `
      <p><b>Semantic HTML</b> berarti menggunakan tag yang punya makna jelas.  
      Misalnya, <code>&lt;header&gt;</code> digunakan untuk bagian kepala halaman, bukan sekadar <code>&lt;div&gt;</code>.</p>
      <p>Keuntungan:</p>
      <ul>
        <li>Kode lebih rapi dan mudah dibaca.</li>
        <li>SEO lebih optimal.</li>
        <li>Aksesibilitas lebih baik untuk difabel.</li>
      </ul>
    `,
  },
  {
    title: "Bab 8.2",
    subtitle: "Tag Semantic Utama",
    html: `
      <p>Beberapa tag semantic yang sering digunakan:</p>
      <ul>
        <li><code>&lt;header&gt;</code> → bagian kepala halaman atau section.</li>
        <li><code>&lt;nav&gt;</code> → navigasi utama.</li>
        <li><code>&lt;section&gt;</code> → mengelompokkan konten per topik.</li>
        <li><code>&lt;article&gt;</code> → konten mandiri seperti artikel/blog.</li>
        <li><code>&lt;aside&gt;</code> → informasi tambahan/ sidebar.</li>
        <li><code>&lt;footer&gt;</code> → bagian bawah halaman.</li>
      </ul>
      <pre><code>&lt;header&gt;
  &lt;h1&gt;Judul Website&lt;/h1&gt;
  &lt;nav&gt;
    &lt;a href="#"&gt;Home&lt;/a&gt; | &lt;a href="#"&gt;About&lt;/a&gt;
  &lt;/nav&gt;
&lt;/header&gt;</code></pre>
    `,
  },
  {
    title: "Bab 8.3",
    subtitle: "Perbandingan Non-Semantic vs Semantic",
    html: `
      <p><b>Non-Semantic:</b></p>
      <pre><code>&lt;div&gt;
  &lt;div&gt;Judul Website&lt;/div&gt;
  &lt;div&gt;Menu Navigasi&lt;/div&gt;
  &lt;div&gt;Isi Artikel&lt;/div&gt;
&lt;/div&gt;</code></pre>

      <p><b>Semantic:</b></p>
      <pre><code>&lt;header&gt;Judul Website&lt;/header&gt;
&lt;nav&gt;Menu Navigasi&lt;/nav&gt;
&lt;main&gt;Isi Artikel&lt;/main&gt;
&lt;footer&gt;Hak Cipta&lt;/footer&gt;</code></pre>
    `,
  },
  {
    title: "Bab 8.4",
    subtitle: "Contoh Layout Semantic HTML",
    html: `
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Contoh Semantic HTML&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;

  &lt;header&gt;
    &lt;h1&gt;Belajar HTML&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="#"&gt;Home&lt;/a&gt; | &lt;a href="#"&gt;Artikel&lt;/a&gt; | &lt;a href="#"&gt;Kontak&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;section&gt;
      &lt;h2&gt;Artikel Terbaru&lt;/h2&gt;
      &lt;article&gt;
        &lt;h3&gt;Apa itu HTML?&lt;/h3&gt;
        &lt;p&gt;HTML adalah fondasi semua website...&lt;/p&gt;
      &lt;/article&gt;
    &lt;/section&gt;

    &lt;aside&gt;
      &lt;h3&gt;Menu Samping&lt;/h3&gt;
      &lt;ul&gt;
        &lt;li&gt;Profil Penulis&lt;/li&gt;
        &lt;li&gt;Artikel Populer&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/aside&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2025 Belajar HTML&lt;/p&gt;
  &lt;/footer&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
    `,
  },
  {
    title: "Bab 8.5",
    subtitle: "Latihan Mini Bab 8",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat halaman web dengan struktur lengkap: header, nav, main, article, aside, dan footer.</li>
        <li>Gunakan minimal 2 artikel dalam sebuah section.</li>
        <li>Tambahkan menu navigasi sederhana di header.</li>
      </ol>
      <p>💡 Tips: Jangan lagi pakai <code>&lt;div&gt;</code> untuk segalanya, gunakan tag semantic biar lebih jelas.</p>
    `,
  },
];

let idx8 = 0;

function renderMateri8() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab8[idx8];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx8 === 0;
  document.getElementById("nextBtn").disabled =
    idx8 === materiHTMLBab8.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx8 > 0) {
    idx8--;
    renderMateri8();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx8 < materiHTMLBab8.length - 1) {
    idx8++;
    renderMateri8();
  }
};

// Inisialisasi pertama kali
renderMateri8();
