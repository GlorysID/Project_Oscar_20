const materiHTMLBab10 = [
  {
    title: "Bab 10",
    subtitle: "Best Practices HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menulis HTML yang rapi dan mudah dibaca.</li>
        <li>Menggunakan elemen sesuai fungsinya (semantic HTML).</li>
        <li>Menghindari kesalahan umum dalam HTML.</li>
        <li>Menerapkan aksesibilitas & SEO dasar.</li>
      </ul>
      <p>Best Practices HTML itu ibarat etika di dunia coding ✨.  
      Kalau kamu ikuti, kode lebih rapi, developer lain gampang paham,  
      dan website lebih ramah untuk pengguna maupun mesin pencari.</p>
    `,
  },
  {
    title: "Bab 10.1",
    subtitle: "Gunakan Struktur & Indentasi yang Rapi",
    html: `
      <p>Indentasi membuat kode HTML mudah dibaca.  
      Setiap elemen anak diberi tab/space agar strukturnya jelas.</p>

      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Contoh Rapi&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;
      &lt;h1&gt;Website Saya&lt;/h1&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;section&gt;
        &lt;h2&gt;Artikel&lt;/h2&gt;
        &lt;p&gt;Ini contoh artikel.&lt;/p&gt;
      &lt;/section&gt;
    &lt;/main&gt;
    &lt;footer&gt;
      &lt;p&gt;&copy; 2025&lt;/p&gt;
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
    `,
  },
  {
    title: "Bab 10.2",
    subtitle: "Gunakan Semantic HTML",
    html: `
      <p>Hindari pakai &lt;div&gt; untuk semua hal 🚫.  
      Gunakan elemen semantik agar makna struktur lebih jelas.</p>

      <ul>
        <li>&lt;header&gt; → bagian kepala halaman.</li>
        <li>&lt;nav&gt; → navigasi menu.</li>
        <li>&lt;main&gt; → konten utama.</li>
        <li>&lt;article&gt; → artikel / konten independen.</li>
        <li>&lt;section&gt; → bagian dari halaman.</li>
        <li>&lt;footer&gt; → bagian bawah halaman.</li>
      </ul>

      <pre><code>&lt;article&gt;
  &lt;h2&gt;Berita Terbaru&lt;/h2&gt;
  &lt;p&gt;Isi berita...&lt;/p&gt;
&lt;/article&gt;</code></pre>
    `,
  },
  {
    title: "Bab 10.3",
    subtitle: "Atribut & Tag Ditulis dengan Benar",
    html: `
      <p>Biasakan atribut lowercase, selalu pakai tanda kutip, dan tutup tag dengan benar.</p>

      <pre><code>&lt;!-- ✅ Benar --&gt;
&lt;img src="foto.png" alt="Foto Profil"&gt;

&lt;!-- ❌ Salah --&gt;
&lt;IMG SRC=foto.png&gt;</code></pre>
    `,
  },
  {
    title: "Bab 10.4",
    subtitle: "Aksesibilitas & SEO Dasar",
    html: `
      <p>Website harus bisa diakses semua orang, termasuk yang menggunakan screen reader.  
      Selain itu, struktur HTML yang baik juga meningkatkan SEO.</p>

      <ul>
        <li>Gunakan atribut <code>alt</code> di gambar.</li>
        <li>Gunakan heading berurutan (h1 → h2 → h3).</li>
        <li>Tambahkan atribut <code>lang</code> di tag &lt;html&gt;.</li>
        <li>Gunakan meta description untuk SEO.</li>
      </ul>

      <pre><code>&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta name="description" content="Website berita teknologi terbaru"&gt;
&lt;/head&gt;</code></pre>
    `,
  },
  {
    title: "Bab 10.5",
    subtitle: "Hindari Kesalahan Umum",
    html: `
      <ul>
        <li>Jangan menumpuk &lt;br&gt; untuk membuat jarak, gunakan CSS.</li>
        <li>Jangan lupa menutup tag.</li>
        <li>Jangan pakai inline CSS berlebihan → lebih baik pakai file CSS eksternal.</li>
      </ul>
    `,
  },
  {
    title: "Bab 10.6",
    subtitle: "Latihan Mini Bab 10",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat halaman HTML dengan struktur rapi dan indentasi jelas.</li>
        <li>Gunakan elemen semantik untuk header, nav, main, article, dan footer.</li>
        <li>Tambahkan gambar dengan atribut <code>alt</code>.</li>
        <li>Pastikan semua tag & atribut ditulis dengan benar.</li>
      </ol>
      <p>💡 Tips: Bayangkan kamu bikin kode untuk tim besar → semua orang harus bisa baca dan paham.</p>
    `,
  },
];

let idx10 = 0;

function renderMateri10() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab10[idx10];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx10 === 0;
  document.getElementById("nextBtn").disabled =
    idx10 === materiHTMLBab10.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx10 > 0) {
    idx10--;
    renderMateri10();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx10 < materiHTMLBab10.length - 1) {
    idx10++;
    renderMateri10();
  }
};

// Inisialisasi pertama kali
renderMateri10();
