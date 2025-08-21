const materiCSSBab1 = [
  {
    title: "Bab 1",
    subtitle: "Pendahuluan CSS <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu CSS dan fungsinya.</li>
        <li>Mengetahui cara menuliskan CSS ke dalam HTML.</li>
        <li>Mengenal sintaks dasar CSS (selector, property, value).</li>
      </ul>
      <p>Kalau HTML ibarat kerangka rumah 🏠, maka CSS itu dekorasinya: cat, gorden, ubin, dan perabot biar rumahnya enak dilihat.  
      Jadi, CSS dipakai untuk <b>mengatur tampilan</b> HTML: warna, ukuran, layout, dan lain-lain.</p>
    `,
  },
  {
    title: "Bab 1.1",
    subtitle: "Apa itu CSS?",
    html: `
      <p><b>CSS</b> singkatan dari <i>Cascading Style Sheets</i>.  
      Fungsinya untuk mengatur tampilan elemen HTML.</p>
      <p>Contoh hal yang bisa diatur dengan CSS:</p>
      <ul>
        <li>Warna teks dan background</li>
        <li>Jenis dan ukuran font</li>
        <li>Jarak antar elemen</li>
        <li>Posisi elemen</li>
      </ul>
    `,
  },
  {
    title: "Bab 1.2",
    subtitle: "Cara Menambahkan CSS ke HTML",
    html: `
      <p>Ada 3 cara menulis CSS di HTML:</p>
      <ol>
        <li><b>Inline CSS</b>: langsung di atribut elemen.<br>
        <code>&lt;p style="color: red;"&gt;Teks merah&lt;/p&gt;</code></li><br>

        <li><b>Internal CSS</b>: ditulis di dalam tag <code>&lt;style&gt;</code> di file HTML.<br>
        <pre><code>
&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;
        </code></pre></li>

        <li><b>External CSS</b>: dipisahkan di file <code>.css</code> lalu dipanggil di HTML.<br>
        <pre><code>
&lt;link rel="stylesheet" href="style.css"&gt;
        </code></pre></li>
      </ol>
      <p>Di dunia nyata, cara paling sering dipakai adalah <b>External CSS</b> biar kodenya rapi.</p>
    `,
  },
  {
    title: "Bab 1.3",
    subtitle: "Sintaks Dasar CSS",
    html: `
      <p>Sintaks CSS terdiri dari:</p>
      <pre><code>
selector {
  property: value;
}
      </code></pre>
      <p>Keterangan:</p>
      <ul>
        <li><b>selector</b>: elemen HTML yang mau diubah (misal: <code>p</code>).</li>
        <li><b>property</b>: apa yang mau diubah (misal: <code>color</code>).</li>
        <li><b>value</b>: nilainya (misal: <code>red</code>).</li>
      </ul>
      <p>Contoh:</p>
      <pre><code>
p {
  color: green;
  font-size: 18px;
}
      </code></pre>
      <p>Artinya semua elemen <code>&lt;p&gt;</code> akan jadi warna hijau dengan ukuran font 18px.</p>
    `,
  },
];

let idxCSS1 = 0;

function renderMateriCSS1() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab1[idxCSS1];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idxCSS1 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS1 === materiCSSBab1.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS1 > 0) {
    idxCSS1--;
    renderMateriCSS1();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS1 < materiCSSBab1.length - 1) {
    idxCSS1++;
    renderMateriCSS1();
  }
};

// Inisialisasi pertama kali
renderMateriCSS1();
