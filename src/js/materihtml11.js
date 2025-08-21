const materiHTMLBab11 = [
  {
    title: "Bab 11",
    subtitle: "Latihan Mini Project <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menggabungkan semua elemen dasar HTML yang sudah dipelajari.</li>
        <li>Melatih kemampuan membuat struktur halaman yang rapi.</li>
        <li>Membiasakan diri menulis kode HTML nyata, bukan cuma potongan kecil.</li>
      </ul>
      <p>Di bab ini, kita akan coba bikin beberapa halaman mini-project, seperti profil, artikel, dan contact form.  
      Tujuannya biar kamu terbiasa menulis HTML sebagai satu halaman utuh, bukan cuma elemen terpisah. 🚀</p>
    `,
  },
  {
    title: "Bab 11.1",
    subtitle: "Mini Project 1: Halaman Profil Sederhana",
    html: `
      <p>Bikin halaman profil dengan elemen berikut:</p>
      <ul>
        <li>Judul halaman (pakai <code>&lt;h1&gt;</code>).</li>
        <li>Foto profil (pakai <code>&lt;img&gt;</code>).</li>
        <li>Deskripsi singkat (pakai <code>&lt;p&gt;</code>).</li>
        <li>Daftar hobi (pakai <code>&lt;ul&gt;</code>).</li>
      </ul>
      <pre><code>
&lt;h1&gt;Profil Saya&lt;/h1&gt;
&lt;img src="foto.jpg" alt="Foto Profil" width="150"&gt;
&lt;p&gt;Halo, saya sedang belajar HTML!&lt;/p&gt;
&lt;h3&gt;Hobi&lt;/h3&gt;
&lt;ul&gt;
  &lt;li&gt;Coding&lt;/li&gt;
  &lt;li&gt;Main game&lt;/li&gt;
  &lt;li&gt;Baca buku&lt;/li&gt;
&lt;/ul&gt;
      </code></pre>
    `,
  },
  {
    title: "Bab 11.2",
    subtitle: "Mini Project 2: Halaman Artikel / Blog Mini",
    html: `
      <p>Bikin halaman artikel sederhana:</p>
      <ul>
        <li>Judul artikel.</li>
        <li>Nama penulis + tanggal.</li>
        <li>Isi artikel (beberapa paragraf).</li>
      </ul>
      <pre><code>
&lt;article&gt;
  &lt;h1&gt;Belajar HTML Itu Mudah&lt;/h1&gt;
  &lt;p&gt;&lt;em&gt;Ditulis oleh: Anjali, 21 Agustus 2025&lt;/em&gt;&lt;/p&gt;
  &lt;p&gt;HTML adalah dasar dari web. Semua website dimulai dari HTML.&lt;/p&gt;
  &lt;p&gt;Setelah menguasai HTML, kamu bisa lanjut ke CSS dan JavaScript.&lt;/p&gt;
&lt;/article&gt;
      </code></pre>
    `,
  },
  {
    title: "Bab 11.3",
    subtitle: "Mini Project 3: Contact Form",
    html: `
      <p>Bikin form kontak dengan elemen:</p>
      <ul>
        <li>Nama (input text).</li>
        <li>Email (input email).</li>
        <li>Pesan (textarea).</li>
        <li>Tombol kirim.</li>
      </ul>
      <pre><code>
&lt;h1&gt;Hubungi Saya&lt;/h1&gt;
&lt;form&gt;
  Nama: &lt;input type="text" name="nama"&gt;&lt;br&gt;&lt;br&gt;
  Email: &lt;input type="email" name="email"&gt;&lt;br&gt;&lt;br&gt;
  Pesan: &lt;br&gt;
  &lt;textarea name="pesan"&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;
  &lt;button type="submit"&gt;Kirim&lt;/button&gt;
&lt;/form&gt;
      </code></pre>
    `,
  },
];

let idx11 = 0;

function renderMateri11() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab11[idx11];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx11 === 0;
  document.getElementById("nextBtn").disabled =
    idx11 === materiHTMLBab11.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx11 > 0) {
    idx11--;
    renderMateri11();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx11 < materiHTMLBab11.length - 1) {
    idx11++;
    renderMateri11();
  }
};

// Inisialisasi pertama kali
renderMateri11();
