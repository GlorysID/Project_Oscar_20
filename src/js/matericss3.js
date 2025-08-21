const materiCSSBab3 = [
  {
    title: "Bab 3",
    subtitle: "Warna, Background, & Font <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami cara memberi warna menggunakan berbagai format (nama, HEX, RGB, HSL).</li>
        <li>Mengatur latar belakang elemen dengan warna & gambar.</li>
        <li>Mengatur font: jenis, ukuran, gaya, ketebalan, dan perataan teks.</li>
      </ul>
      <p>Cara ngasih warna & font di CSS itu kayak milih baju 👕: warnanya bisa bebas, background bisa polos atau motif, font kayak gaya tulisan tanganmu.</p>
    `,
  },
  {
    title: "Bab 3.1",
    subtitle: "Warna di CSS",
    html: `
      <p>Cara menulis warna di CSS ada beberapa format:</p>
      <ul>
        <li><b>Nama warna</b>: <code>color: red;</code></li>
        <li><b>HEX</b>: <code>color: #ff0000;</code></li>
        <li><b>RGB</b>: <code>color: rgb(255, 0, 0);</code></li>
        <li><b>HSL</b>: <code>color: hsl(0, 100%, 50%);</code></li>
      </ul>
      <p>Semua contoh di atas hasilnya sama 👉 warna merah ❤️.</p>
    `,
  },
  {
    title: "Bab 3.2",
    subtitle: "Background Warna & Gambar",
    html: `
      <p>Properti <code>background</code> bisa dipakai untuk:</p>
      <ul>
        <li><code>background-color</code>: warna latar.</li>
        <li><code>background-image</code>: gambar latar.</li>
        <li><code>background-repeat</code>: mengulang/tidak → <code>no-repeat</code>, <code>repeat-x</code>, <code>repeat-y</code>.</li>
        <li><code>background-size</code>: ukuran → <code>cover</code>, <code>contain</code>, px/%.</li>
        <li><code>background-position</code>: posisi gambar → <code>center</code>, <code>top left</code>.</li>
      </ul>
      <p>Contoh:</p>
      <pre><code>
body {
  background-color: lightblue;
  background-image: url('pantai.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
      </code></pre>
    `,
  },
  {
    title: "Bab 3.3",
    subtitle: "Font di CSS",
    html: `
      <p>Beberapa properti font penting di CSS:</p>
      <ul>
        <li><code>font-family</code>: jenis huruf → <code>"Arial", sans-serif;</code></li>
        <li><code>font-size</code>: ukuran → <code>16px</code>, <code>1.2em</code>, <code>120%</code></li>
        <li><code>font-weight</code>: ketebalan → <code>normal</code>, <code>bold</code>, angka 100-900</li>
        <li><code>font-style</code>: gaya → <code>normal</code>, <code>italic</code>, <code>oblique</code></li>
        <li><code>text-align</code>: perataan teks → <code>left</code>, <code>center</code>, <code>right</code>, <code>justify</code></li>
      </ul>
      <p>Contoh:</p>
      <pre><code>
h1 {
  font-family: "Times New Roman", serif;
  font-size: 28px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  color: darkblue;
}
      </code></pre>
    `,
  },
];

let idxCSS3 = 0;

function renderMateriCSS3() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab3[idxCSS3];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idxCSS3 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS3 === materiCSSBab3.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS3 > 0) {
    idxCSS3--;
    renderMateriCSS3();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS3 < materiCSSBab3.length - 1) {
    idxCSS3++;
    renderMateriCSS3();
  }
};

// Inisialisasi pertama kali
renderMateriCSS3();
