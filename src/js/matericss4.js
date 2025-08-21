const materiCSSBab4 = [
  {
    title: "Bab 4",
    subtitle: "Box Model (Penting Banget!) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami struktur dasar box model: content, padding, border, margin.</li>
        <li>Mengetahui peran width & height dalam mengatur ukuran elemen.</li>
        <li>Menggunakan <code>box-sizing</code> agar layout lebih terkontrol.</li>
      </ul>
      <p>Di CSS, semua elemen <b>pada dasarnya dianggap sebagai kotak</b>. Kotak ini punya lapisan (layer) yang disebut <b>Box Model</b>.</p>
    `,
  },
  {
    title: "Bab 4.1",
    subtitle: "Struktur Box Model",
    html: `
      <p>Box Model terdiri dari 4 bagian utama:</p>
      <ol>
        <li><b>Content</b>: isi kotak (teks/gambar).</li>
        <li><b>Padding</b>: jarak antara content dengan border.</li>
        <li><b>Border</b>: garis yang mengelilingi padding & content.</li>
        <li><b>Margin</b>: jarak antara elemen dengan elemen lain di luar kotak.</li>
      </ol>
      <p>Ibarat kamu punya kamar:</p>
      <ul>
        <li><b>Content</b> = tempat tidur/meja kamu.</li>
        <li><b>Padding</b> = ruang kosong antara furnitur & dinding.</li>
        <li><b>Border</b> = tembok kamar.</li>
        <li><b>Margin</b> = halaman kosong di luar kamar.</li>
      </ul>
    `,
  },
  {
    title: "Bab 4.2",
    subtitle: "Width & Height",
    html: `
      <p>Properti <code>width</code> dan <code>height</code> digunakan untuk mengatur ukuran kotak (content area).</p>
      <pre><code>
.box1 {
  width: 200px;
  height: 100px;
  background-color: lightblue;
}
      </code></pre>
      <p>👉 Tapi ingat! Nilai ini <b>hanya menghitung content</b>, belum termasuk padding, border, atau margin.</p>
    `,
  },
  {
    title: "Bab 4.3",
    subtitle: "Box-sizing",
    html: `
      <p>Secara default, CSS pakai mode <code>content-box</code>: artinya width/height hanya untuk content.</p>
      <p>Kalau ada padding/border, ukuran total elemen jadi lebih besar.</p>
      <p>Solusi: pakai <code>box-sizing: border-box;</code></p>
      <pre><code>
.box2 {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  box-sizing: border-box;
}
      </code></pre>
      <p>Dengan <code>border-box</code>, width & height sudah <b>termasuk padding + border</b>.  
      Jadi elemen lebih gampang dikontrol ukurannya 👌.</p>
    `,
  },
  {
    title: "Bab 4.4",
    subtitle: "Contoh Lengkap Box Model",
    html: `
      <p>Contoh gabungan semua properti Box Model:</p>
      <pre><code>
.box-demo {
  width: 250px;
  height: 120px;
  padding: 20px;
  border: 5px solid green;
  margin: 30px;
  background-color: lightyellow;
  box-sizing: border-box;
}
      </code></pre>

      <div style="width:250px;height:120px;padding:20px;border:5px solid green;margin:30px;background-color:lightyellow;box-sizing:border-box;">
        Ini kotak demo dengan Box Model ✔
      </div>
    `,
  },
];

let idxCSS4 = 0;

function renderMateriCSS4() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab4[idxCSS4];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idxCSS4 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS4 === materiCSSBab4.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS4 > 0) {
    idxCSS4--;
    renderMateriCSS4();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS4 < materiCSSBab4.length - 1) {
    idxCSS4++;
    renderMateriCSS4();
  }
};

// Inisialisasi pertama kali
renderMateriCSS4();
