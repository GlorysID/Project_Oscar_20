const materiHTMLBab4 = [
  {
    title: "Bab 4",
    subtitle: "Gambar & Multimedia <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami cara menampilkan gambar dengan tag <code>&lt;img&gt;</code>.</li>
        <li>Mengetahui atribut penting pada gambar (src, alt, width, height).</li>
        <li>Mempelajari cara menambahkan audio & video di halaman HTML.</li>
        <li>Menggunakan iframe untuk menyematkan konten eksternal (YouTube, peta, dll).</li>
      </ul>
      <p>Di bab ini kita akan belajar membuat website jadi lebih <i>hidup</i> dengan gambar, musik, dan video 🎨🎶📺.</p>
    `,
  },
  {
    title: "Bab 4.1",
    subtitle: "Menambahkan Gambar dengan &lt;img&gt;",
    html: `
      <p>Tag <code>&lt;img&gt;</code> digunakan untuk menampilkan gambar. Contoh:</p>
      <pre><code>&lt;img src="gambar.jpg" alt="Deskripsi gambar" width="300"&gt;</code></pre>
      <p><b>Atribut penting:</b></p>
      <ul>
        <li><code>src</code> → lokasi file gambar.</li>
        <li><code>alt</code> → teks alternatif jika gambar gagal dimuat.</li>
        <li><code>width</code> & <code>height</code> → mengatur ukuran.</li>
      </ul>
      <p>Contoh hasil:</p>
      <img src="../img/KiddosLogo.png" alt="Contoh Gambar" width="150">
    `,
  },
  {
    title: "Bab 4.2",
    subtitle: "Menampilkan Audio dengan &lt;audio&gt;",
    html: `
      <p>Tag <code>&lt;audio&gt;</code> digunakan untuk memutar suara.</p>
      <pre><code>&lt;audio controls&gt;
  &lt;source src="lagu.mp3" type="audio/mpeg"&gt;
  Browser tidak mendukung audio.
&lt;/audio&gt;</code></pre>
      <p>Hasil:</p>
      <audio controls>
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
        Browser tidak mendukung audio.
      </audio>
    `,
  },
  {
    title: "Bab 4.3",
    subtitle: "Menampilkan Video dengan &lt;video&gt;",
    html: `
      <p>Tag <code>&lt;video&gt;</code> digunakan untuk menampilkan video.</p>
      <pre><code>&lt;video width="320" height="240" controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  Browser tidak mendukung video.
&lt;/video&gt;</code></pre>
      <p>Hasil:</p>
      <video width="300" controls>
        <source src="../video/nocopyrightvideo.mp4" type="video/mp4">
        Browser tidak mendukung video.
      </video>
    `,
  },
  {
    title: "Bab 4.4",
    subtitle: "Embed Konten Eksternal dengan &lt;iframe&gt;",
    html: `
      <p>Dengan <code>&lt;iframe&gt;</code>, kita bisa menyematkan konten dari website lain, seperti YouTube.</p>
      <pre><code>&lt;iframe width="300" height="200"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  frameborder="0"
  allowfullscreen&gt;&lt;/iframe&gt;</code></pre>
      <p>Hasil:</p>
      <iframe width="300" height="200"
        src="https://www.youtube.com/embed/DMOQPaLbUvs?si=1CjH3tytv9mppP65"
        frameborder="0"
        allowfullscreen></iframe>
        <p>Sumber video: https://www.youtube.com/embed/DMOQPaLbUvs?si=1CjH3tytv9mppP65</p>
    `,
  },
  {
    title: "Bab 4.5",
    subtitle: "Latihan Mini Bab 4",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Tampilkan sebuah gambar profil di halaman utama.</li>
        <li>Tambahkan musik latar menggunakan <code>&lt;audio&gt;</code>.</li>
        <li>Sisipkan video perkenalan singkat (boleh file lokal atau YouTube).</li>
        <li>Buat halaman portfolio dengan minimal 2 gambar dan 1 video.</li>
      </ol>
      <p>Kalau latihan ini selesai, website kamu udah punya <b>multimedia interaktif</b> yang keren ✨.</p>
    `,
  },
];

let idx4 = 0;

function renderMateri4() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab4[idx4];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx4 === 0;
  document.getElementById("nextBtn").disabled =
    idx4 === materiHTMLBab4.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx4 > 0) {
    idx4--;
    renderMateri4();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx4 < materiHTMLBab4.length - 1) {
    idx4++;
    renderMateri4();
  }
};

// Inisialisasi pertama kali
renderMateri4();
