const materiCSSBab2 = [
  {
    title: "Bab 2",
    subtitle: "Selector & Atribut Dasar <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu selector di CSS.</li>
        <li>Menggunakan selector dasar: tag, class, id.</li>
        <li>Menggunakan beberapa properti CSS dasar (color, background, font, margin, padding).</li>
      </ul>
      <p>Selector itu ibarat alamat rumah 🏡. CSS harus tahu elemen mana yang mau dihias.  
      Kalau salah alamat, dekorasinya bisa nyasar ke rumah tetangga 🤭.</p>
    `,
  },
  {
    title: "Bab 2.1",
    subtitle: "Selector Tag (Element Selector)",
    html: `
      <p>Selector tag akan memilih semua elemen HTML dengan nama tag tertentu.</p>
      <pre><code>
p {
  color: blue;
}
      </code></pre>
      <p>Contoh: Semua teks dalam &lt;p&gt; akan berwarna biru.</p>
    `,
  },
  {
    title: "Bab 2.2",
    subtitle: "Selector Class",
    html: `
      <p>Class ditandai dengan <b>.</b> (titik). Bisa digunakan untuk banyak elemen sekaligus.</p>
      <pre><code>
.highlight {
  background-color: yellow;
}
      </code></pre>
      <p>HTML:</p>
      <pre><code>
&lt;p class="highlight"&gt;Teks ini ada highlight kuning&lt;/p&gt;
      </code></pre>
    `,
  },
  {
    title: "Bab 2.3",
    subtitle: "Selector ID",
    html: `
      <p>ID ditandai dengan <b>#</b> (pagar). Biasanya dipakai untuk elemen unik.</p>
      <pre><code>
#judul {
  font-size: 24px;
  color: green;
}
      </code></pre>
      <p>HTML:</p>
      <pre><code>
&lt;h1 id="judul"&gt;Judul Utama&lt;/h1&gt;
      </code></pre>
      <p><i>Catatan:</i> 1 elemen hanya boleh punya 1 ID unik, kayak NIK di KTP 🪪.</p>
    `,
  },
  {
    title: "Bab 2.4",
    subtitle: "Properti Dasar CSS",
    html: `
      <p>Beberapa properti CSS yang sering dipakai:</p>
      <ul>
        <li><code>color</code>: warna teks → <code>color: red;</code></li>
        <li><code>background-color</code>: warna latar → <code>background-color: lightblue;</code></li>
        <li><code>font-size</code>: ukuran teks → <code>font-size: 20px;</code></li>
        <li><code>margin</code>: jarak luar elemen → <code>margin: 10px;</code></li>
        <li><code>padding</code>: jarak dalam elemen → <code>padding: 5px;</code></li>
      </ul>
      <p>Contoh:</p>
      <pre><code>
.box {
  background-color: lightgreen;
  color: darkblue;
  font-size: 18px;
  margin: 20px;
  padding: 15px;
}
      </code></pre>
    `,
  },
];

let idxCSS2 = 0;

function renderMateriCSS2() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab2[idxCSS2];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idxCSS2 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS2 === materiCSSBab2.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS2 > 0) {
    idxCSS2--;
    renderMateriCSS2();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS2 < materiCSSBab2.length - 1) {
    idxCSS2++;
    renderMateriCSS2();
  }
};

// Inisialisasi pertama kali
renderMateriCSS2();
