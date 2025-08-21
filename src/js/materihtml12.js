const materiHTMLBab12 = [
  {
    title: "Bab 12",
    subtitle: "Final Project HTML Only <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menggunakan semua elemen HTML dasar dalam satu project nyata.</li>
        <li>Membuat website sederhana dengan beberapa halaman.</li>
        <li>Belajar menyusun struktur folder dan file HTML.</li>
      </ul>
      <p>Di bab terakhir ini, kita akan bikin website sederhana dengan 3 halaman utama:</p>
      <ul>
        <li><b>Home</b> → halaman depan</li>
        <li><b>About</b> → tentang pemilik website</li>
        <li><b>Contact</b> → form untuk menghubungi</li>
      </ul>
      <p>Struktur folder project:</p>
      <pre><code>
project-html/
│── index.html   (Home)
│── about.html   (About)
│── contact.html (Contact)
│── img/
│    └── foto.jpg
      </code></pre>
    `,
  },
  {
    title: "Bab 12.1",
    subtitle: "Halaman Home",
    html: `
      <p>Halaman <b>Home</b> akan berisi:</p>
      <ul>
        <li>Header + judul website.</li>
        <li>Menu navigasi ke halaman lain.</li>
        <li>Konten utama berisi sambutan singkat.</li>
        <li>Footer sederhana.</li>
      </ul>
      <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Home - Website Sederhana&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Selamat Datang di Website Saya&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="index.html"&gt;Home&lt;/a&gt; |
      &lt;a href="about.html"&gt;About&lt;/a&gt; |
      &lt;a href="contact.html"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;h2&gt;Halo! 👋&lt;/h2&gt;
    &lt;p&gt;Ini adalah website sederhana yang dibuat hanya dengan HTML.&lt;/p&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2025 Website Sederhana&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code></pre>
    `,
  },
  {
    title: "Bab 12.2",
    subtitle: "Halaman About",
    html: `
      <p>Halaman <b>About</b> berisi informasi tentang diri kamu:</p>
      <ul>
        <li>Foto profil.</li>
        <li>Deskripsi singkat.</li>
        <li>Daftar keterampilan atau hobi.</li>
      </ul>
      <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;About - Website Sederhana&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Tentang Saya&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="index.html"&gt;Home&lt;/a&gt; |
      &lt;a href="about.html"&gt;About&lt;/a&gt; |
      &lt;a href="contact.html"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;img src="img/foto.jpg" alt="Foto Profil" width="150"&gt;
    &lt;p&gt;Halo, nama saya Anjali. Saya sedang belajar HTML.&lt;/p&gt;
    &lt;h3&gt;Hobi&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;Coding&lt;/li&gt;
      &lt;li&gt;Membaca&lt;/li&gt;
      &lt;li&gt;Traveling&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2025 Website Sederhana&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code></pre>
    `,
  },
  {
    title: "Bab 12.3",
    subtitle: "Halaman Contact",
    html: `
      <p>Halaman <b>Contact</b> berisi form kontak sederhana:</p>
      <ul>
        <li>Nama</li>
        <li>Email</li>
        <li>Pesan</li>
      </ul>
      <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Contact - Website Sederhana&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;
    &lt;h1&gt;Hubungi Saya&lt;/h1&gt;
    &lt;nav&gt;
      &lt;a href="index.html"&gt;Home&lt;/a&gt; |
      &lt;a href="about.html"&gt;About&lt;/a&gt; |
      &lt;a href="contact.html"&gt;Contact&lt;/a&gt;
    &lt;/nav&gt;
  &lt;/header&gt;

  &lt;main&gt;
    &lt;form&gt;
      Nama: &lt;input type="text" name="nama"&gt;&lt;br&gt;&lt;br&gt;
      Email: &lt;input type="email" name="email"&gt;&lt;br&gt;&lt;br&gt;
      Pesan: &lt;br&gt;
      &lt;textarea name="pesan"&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;
      &lt;button type="submit"&gt;Kirim&lt;/button&gt;
    &lt;/form&gt;
  &lt;/main&gt;

  &lt;footer&gt;
    &lt;p&gt;&copy; 2025 Website Sederhana&lt;/p&gt;
  &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code></pre>
    `,
  },
];

let idx12 = 0;

function renderMateri12() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab12[idx12];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx12 === 0;
  document.getElementById("nextBtn").disabled =
    idx12 === materiHTMLBab12.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx12 > 0) {
    idx12--;
    renderMateri12();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx12 < materiHTMLBab12.length - 1) {
    idx12++;
    renderMateri12();
  }
};

// Inisialisasi pertama kali
renderMateri12();
