const materiHTMLBab1 = [
  {
    title: "Bab 1",
    subtitle: "Pendahuluan HTML",
    html: `
      <b>Tujuan Bab:</b>
      <ul>
        <li>Mengenal apa itu HTML dan bagaimana web bekerja.</li>
        <li>Memahami struktur dasar dokumen HTML5.</li>
        <li>Membuat halaman HTML pertama (Hello, World!).</li>
        <li>Memahami konsep tag, elemen, dan atribut.</li>
      </ul>
      <p><b>Kenapa HTML penting?</b> HTML adalah rangka dari setiap halaman web. Tanpa HTML, browser tidak tahu apa yang harus ditampilkan. CSS membuatnya cantik; JavaScript membuatnya interaktif; tapi HTML adalah tulangnya.</p>
    `,
  },
  {
    title: "Bab 1.1",
    subtitle: "Apa itu HTML? (HyperText Markup Language)",
    html: `
      <p><b>HTML</b> adalah bahasa markup untuk menyusun konten di web. <i>Markup</i> berarti kita memberi tanda pada teks menggunakan <b>tag</b> agar browser paham struktur dan maknanya.</p>
      <b>Contoh elemen HTML:</b>
      <ul>
        <li><code>&lt;p&gt;...&lt;/p&gt;</code> untuk paragraf</li>
        <li><code>&lt;h1&gt;...&lt;/h1&gt;</code> sampai <code>&lt;h6&gt;</code> untuk judul</li>
        <li><code>&lt;a href="..."&gt;</code> untuk tautan</li>
        <li><code>&lt;img src="..." alt="..."&gt;</code> untuk gambar</li>
      </ul>
      <p><b>Istilah kunci:</b> <u>tag</u> adalah penandanya (mis. <code>&lt;p&gt;</code>), <u>elemen</u> adalah satu kesatuan dari tag pembuka + konten + tag penutup, <u>atribut</u> adalah info tambahan pada tag (mis. <code>href</code>, <code>src</code>).</p>
    `,
  },
  {
    title: "Bab 1.2",
    subtitle: "Bagaimana Web Bekerja (Gambaran Besar)",
    html: `
      <p>Ketika kamu membuka situs, browser mengirim <i>request</i> ke server, server membalas dengan file (HTML/CSS/JS), browser merendernya untukmu.</p>
      <pre><code>Browser ⟶ (HTTP Request) ⟶ Server
       ⟵ (HTML/CSS/JS Response) ⟵      
Browser merender HTML → tampil di layar</code></pre>
      <p>Untuk belajar HTML, kita akan fokus pada <b>isi HTML</b>-nya dulu, sambil menyiapkan CSS/JS di bab berikut.</p>
    `,
  },
  {
    title: "Bab 1.3",
    subtitle: "Struktur Dasar Dokumen HTML5",
    html: `
      <p>Setiap halaman HTML modern diawali dengan <code>&lt;!DOCTYPE html&gt;</code> dan memiliki kerangka seperti ini:</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Judul Halaman&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    Konten kamu di sini.
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code>: memberi tahu browser ini HTML5.</li>
        <li><code>&lt;html lang="id"&gt;</code>: bahasa dokumen (baik untuk aksesibilitas & SEO).</li>
        <li><code>&lt;head&gt;</code>: info tentang halaman (bukan konten utama), meta, judul, link CSS.</li>
        <li><code>&lt;body&gt;</code>: tempat semua konten yang terlihat pengguna.</li>
      </ul>
    `,
  },
  {
    title: "Bab 1.4",
    subtitle: "Persiapan Alat (Editor & Folder Project)",
    html: `
      <ol>
        <li><b>Editor</b>: VS Code sangat direkomendasikan (fitur Emmet & ekstensi HTML linting).</li>
        <li><b>Folder</b>: Buat folder proyek, misal <code>web-pemula/</code>. Di dalamnya buat file <code>index.html</code>.</li>
        <li><b>Buka di browser</b>: Klik dua kali file HTML atau drag ke tab browser.</li>
      </ol>
      <p><b>Tip kilat:</b> di VS Code, ketik <code>!</code> lalu tekan Tab (Emmet) untuk menghasilkan kerangka HTML5 otomatis.</p>
    `,
  },
  {
    title: "Bab 1.5",
    subtitle: "Halaman Pertama: Hello, World!",
    html: `
      <p>Coba salin kode ini ke <code>index.html</code> lalu buka di browser.</p>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;Hello HTML&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello, World!&lt;/h1&gt;
    &lt;p&gt;Ini halaman HTML pertamaku.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p>Kalau muncul teks di browser, selamat—kamu sudah resmi jadi warga HTML-land! 🎉</p>
    `,
  },
  {
    title: "Bab 1.6",
    subtitle: "Tag, Elemen, dan Atribut (Fundamental)",
    html: `
      <p>Format umum elemen:</p>
      <pre><code>&lt;nama-tag atribut="nilai" atribut2="nilai"&gt;konten&lt;/nama-tag&gt;</code></pre>
      <ul>
        <li><b>Tag pembuka</b>: <code>&lt;p&gt;</code>, <b>Tag penutup</b>: <code>&lt;/p&gt;</code></li>
        <li><b>Self-closing</b>: beberapa tidak punya penutup, mis. <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code></li>
        <li><b>Atribut</b>: info tambahan, mis. <code>href</code> di tautan, <code>src</code>/<code>alt</code> di gambar.</li>
      </ul>
      <b>Contoh:</b>
      <pre><code>&lt;a href="https://example.com" target="_blank"&gt;Kunjungi Example&lt;/a&gt;
&lt;img src="kucing.jpg" alt="Kucing oren imut"&gt;</code></pre>
      <p><b>Kenapa atribut <code>alt</code> penting?</b> Untuk aksesibilitas (screen reader), SEO, dan fallback saat gambar gagal dimuat.</p>
    `,
  },
  {
    title: "Bab 1.7",
    subtitle: "Komentar, Spasi, dan Kerapian Kode",
    html: `
      <p>Komentar tidak akan tampil di halaman, tapi membantu kita memahami kode.</p>
      <pre><code>&lt;!-- Ini komentar --&gt;
&lt;p&gt;Teks&lt;/p&gt;  &lt;!-- Komentar di samping juga boleh --&gt;</code></pre>
      <ul>
        <li><b>Indentasi</b>: rapikan struktur bersarang agar mudah dibaca.</li>
        <li><b>Spasi</b>: HTML menganggap banyak spasi berturut sama seperti satu spasi (kecuali di dalam <code>&lt;pre&gt;</code>).</li>
        <li><b>Nama file</b>: gunakan huruf kecil dan strip, mis. <code>foto-liburan-2025.jpg</code>.</li>
      </ul>
    `,
  },
  {
    title: "Bab 1.8",
    subtitle: "Sedikit Tentang Semantik (Bonus Pendahuluan)",
    html: `
      <p>HTML punya elemen yang <i>bermakna</i> (semantik) seperti <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, dan <code>&lt;footer&gt;</code>. Ini membantu mesin pencari, alat bantu (screen reader), dan developer lain memahami struktur halaman.</p>
      <pre><code>&lt;header&gt;Logo &amp; Judul&lt;/header&gt;
&lt;nav&gt;Menu&lt;/nav&gt;
&lt;main&gt;
  &lt;section&gt;Konten Utama&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;Hak Cipta&lt;/footer&gt;</code></pre>
    `,
  },
  {
    title: "Bab 1.9",
    subtitle: "Latihan Mini & Checklist Pemahaman",
    html: `
      <b>Latihan:</b>
      <ol>
        <li>Buat file <code>index.html</code> dengan struktur HTML5.</li>
        <li>Tampilkan judul <code>&lt;h1&gt;</code> namamu dan paragraf perkenalan.</li>
        <li>Tambahkan gambar profil dummy (boleh pakai link internet) lengkap dengan <code>alt</code>.</li>
        <li>Buat tautan ke akun media sosialmu yang membuka tab baru (<code>target="_blank"</code>).</li>
        <li>Berikan komentar di beberapa baris kode untuk menjelaskan fungsinya.</li>
      </ol>
      <b>Checklist:</b>
      <ul>
        <li>Aku paham perbedaan tag, elemen, atribut.</li>
        <li>Aku bisa membuat kerangka HTML5 dasar.</li>
        <li>Aku bisa menulis paragraf, heading, gambar, dan tautan.</li>
        <li>Aku merapikan indentasi dan menulis komentar.</li>
      </ul>
      <p>Kalau semua sudah dicentang, kamu siap lanjut ke Bab 2. 🚀</p>
    `,
  },
];

let idx = 0;

function renderMateri1() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab1[idx];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      <p>${m.html}</p>
    </div>
  `;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled =
    idx === materiHTMLBab1.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx > 0) {
    idx--;
    renderMateri1();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx < materiHTMLBab1.length - 1) {
    idx++;
    renderMateri1();
  }
};

// Inisialisasi pertama kali
renderMateri1();
