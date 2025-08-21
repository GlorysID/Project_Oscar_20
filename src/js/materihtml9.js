const materiHTMLBab9 = [
  {
    title: "Bab 9",
    subtitle: "HTML5 Lanjutan <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Mengenal fitur-fitur baru di HTML5.</li>
        <li>Belajar cara menambahkan audio dan video ke halaman web.</li>
        <li>Memahami input & atribut baru untuk form.</li>
        <li>Mengerti fungsi Canvas & SVG.</li>
        <li>Memahami konsep penyimpanan lokal (localStorage & sessionStorage).</li>
      </ul>
      <p>HTML5 membuka banyak kemampuan baru ✨ yang sebelumnya butuh plugin tambahan seperti Flash.  
      Sekarang, semua bisa dilakukan langsung dengan HTML + JS.</p>
    `,
  },
  {
    title: "Bab 9.1",
    subtitle: "Multimedia: Audio & Video",
    html: `
      <p>HTML5 mendukung tag <code>&lt;audio&gt;</code> dan <code>&lt;video&gt;</code> untuk menampilkan media tanpa plugin tambahan.</p>

      <pre><code>&lt;audio controls&gt;
  &lt;source src="lagu.mp3" type="audio/mpeg"&gt;
  Browser kamu tidak mendukung audio.
&lt;/audio&gt;

&lt;video width="320" height="240" controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  Browser kamu tidak mendukung video.
&lt;/video&gt;</code></pre>

      <p>Atribut penting:</p>
      <ul>
        <li><code>controls</code> → menampilkan kontrol play/pause.</li>
        <li><code>autoplay</code> → memulai otomatis (hati-hati, sering dimute).</li>
        <li><code>loop</code> → mengulang setelah selesai.</li>
        <li><code>muted</code> → suara dimatikan.</li>
      </ul>
    `,
  },
  {
    title: "Bab 9.2",
    subtitle: "Form Input Baru",
    html: `
      <p>HTML5 menambahkan banyak <b>tipe input baru</b> untuk form:</p>
      <ul>
        <li><code>type="email"</code> → validasi email otomatis.</li>
        <li><code>type="url"</code> → validasi URL.</li>
        <li><code>type="number"</code> → input angka (ada panah ↑↓).</li>
        <li><code>type="date"</code> → pilih tanggal dengan kalender.</li>
        <li><code>type="color"</code> → pilih warna.</li>
        <li><code>type="range"</code> → slider.</li>
      </ul>

      <pre><code>&lt;form&gt;
  Email: &lt;input type="email"&gt;&lt;br&gt;
  Tanggal Lahir: &lt;input type="date"&gt;&lt;br&gt;
  Pilih Warna: &lt;input type="color"&gt;&lt;br&gt;
  Nilai: &lt;input type="range" min="0" max="100"&gt;
&lt;/form&gt;</code></pre>
    `,
  },
  {
    title: "Bab 9.3",
    subtitle: "Canvas & SVG",
    html: `
      <p><b>Canvas</b> → untuk menggambar grafik 2D/3D dengan JavaScript.</p>
      <pre><code>&lt;canvas id="myCanvas" width="200" height="100" style="border:1px solid black;"&gt;&lt;/canvas&gt;

&lt;script&gt;
  let c = document.getElementById("myCanvas");
  let ctx = c.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(20, 20, 150, 50);
&lt;/script&gt;</code></pre>

      <p><b>SVG</b> → Scalable Vector Graphics, untuk gambar vektor (logo, icon, chart).</p>
      <pre><code>&lt;svg width="200" height="100"&gt;
  &lt;circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&gt;
&lt;/svg&gt;</code></pre>
    `,
  },
  {
    title: "Bab 9.4",
    subtitle: "Web Storage (localStorage & sessionStorage)",
    html: `
      <p>HTML5 menyediakan cara menyimpan data di browser tanpa database:</p>
      <ul>
        <li><b>localStorage</b> → data tersimpan permanen (walau browser ditutup).</li>
        <li><b>sessionStorage</b> → data hilang saat tab ditutup.</li>
      </ul>

      <pre><code>&lt;script&gt;
// Simpan data
localStorage.setItem("nama", "Budi");

// Ambil data
alert(localStorage.getItem("nama"));

// Hapus data
localStorage.removeItem("nama");
&lt;/script&gt;</code></pre>
    `,
  },
  {
    title: "Bab 9.5",
    subtitle: "Fitur Tambahan HTML5",
    html: `
      <p>Selain di atas, ada juga:</p>
      <ul>
        <li><b>Geolocation API</b> → mengetahui lokasi pengguna.</li>
        <li><b>Drag & Drop</b> → geser elemen langsung di browser.</li>
        <li><b>Web Workers</b> → menjalankan proses di background.</li>
      </ul>

      <pre><code>&lt;script&gt;
navigator.geolocation.getCurrentPosition(function(pos) {
  alert("Latitude: " + pos.coords.latitude);
});
&lt;/script&gt;</code></pre>
    `,
  },
  {
    title: "Bab 9.6",
    subtitle: "Latihan Mini Bab 9",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat halaman dengan audio & video player.</li>
        <li>Tambahkan form dengan input: email, date, range, dan color.</li>
        <li>Buat canvas sederhana menggambar kotak merah.</li>
        <li>Simpan nama pengguna ke localStorage lalu tampilkan di halaman.</li>
      </ol>
      <p>💡 Tips: Mulai gunakan fitur HTML5 biar websitemu makin interaktif dan modern.</p>
    `,
  },
];

let idx9 = 0;

function renderMateri9() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab9[idx9];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx9 === 0;
  document.getElementById("nextBtn").disabled =
    idx9 === materiHTMLBab9.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx9 > 0) {
    idx9--;
    renderMateri9();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx9 < materiHTMLBab9.length - 1) {
    idx9++;
    renderMateri9();
  }
};

// Inisialisasi pertama kali
renderMateri9();
