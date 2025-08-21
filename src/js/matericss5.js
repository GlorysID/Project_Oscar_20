const materiCSSBab5 = [
  {
    title: "Bab 5",
    subtitle: "Text & Styling Lanjutan <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami cara mengatur spasi antar baris, huruf, dan kata.</li>
        <li>Menggunakan text-decoration untuk memberi/ menghapus garis pada teks.</li>
        <li>Membuat efek keren dengan <code>text-shadow</code> dan <code>box-shadow</code>.</li>
      </ul>
      <p>Styling lanjutan ini bikin tampilan web jadi lebih <b>rapi</b> sekaligus <b>menarik</b>.</p>
    `,
  },
  {
    title: "Bab 5.1",
    subtitle: "Line-height",
    html: `
      <p><code>line-height</code> = jarak antar baris teks.</p>
      <p>Ibarat barisan anak sekolah, biar nggak desak-desakan 🧍‍♂️🧍‍♀️🧍‍♂️.</p>
      <pre><code>
p {
  line-height: 1.8; /* Angka relatif (kali ukuran font) */
}
      </code></pre>
      <p>Nilai bisa berupa:</p>
      <ul>
        <li>Angka (misal: 1.5 → 1,5 kali tinggi font).</li>
        <li>Piksel/px (misal: 24px).</li>
        <li>Persen (misal: 150%).</li>
      </ul>
    `,
  },
  {
    title: "Bab 5.2",
    subtitle: "Letter-spacing & Word-spacing",
    html: `
      <p><code>letter-spacing</code> = jarak antar huruf.  
      <br><code>word-spacing</code> = jarak antar kata.</p>
      <pre><code>
h1 {
  letter-spacing: 3px;
  word-spacing: 10px;
}
      </code></pre>
      <p>👉 Cocok buat bikin teks judul lebih <b>lapang & elegan</b>.</p>
    `,
  },
  {
    title: "Bab 5.3",
    subtitle: "Text-decoration",
    html: `
      <p>Properti ini dipakai untuk menambah/menghapus garis pada teks:</p>
      <pre><code>
a {
  text-decoration: none; /* Menghilangkan garis bawah link */
}

u {
  text-decoration: underline; /* Garis bawah */
}

.del {
  text-decoration: line-through; /* Coret */
}

.over {
  text-decoration: overline; /* Garis di atas teks */
}
      </code></pre>
      <p>👉 Umumnya dipakai buat link, biar lebih fleksibel styling-nya.</p>
    `,
  },
  {
    title: "Bab 5.4",
    subtitle: "Text-shadow",
    html: `
      <p><code>text-shadow</code> memberi bayangan pada teks.</p>
      <pre><code>
h1 {
  text-shadow: 2px 2px 5px gray;
}
/* Format: offset-x | offset-y | blur-radius | warna */
      </code></pre>
      <p>Contoh efek:</p>
      <div style="font-size:28px; font-weight:bold; text-shadow: 2px 2px 5px gray;">Bayangan halus</div>
      <div style="font-size:28px; font-weight:bold; text-shadow: 0px 0px 8px red;">Neon Glow 🔥</div>
    `,
  },
  {
    title: "Bab 5.5",
    subtitle: "Box-shadow",
    html: `
      <p><code>box-shadow</code> memberi bayangan pada kotak (bukan teks).</p>
      <pre><code>
.box {
  width: 200px;
  height: 100px;
  background: lightblue;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
}
      </code></pre>
      <div style="width:200px;height:100px;background:lightblue;box-shadow:5px 5px 10px rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;">Box Shadow ✔</div>
      <p>Bisa dipakai untuk efek <i>card modern</i> ala UI kekinian.</p>
    `,
  },
  {
    title: "Bab 5.6",
    subtitle: "Kesimpulan",
    html: `
      <p>Dengan bab ini, kita bisa:</p>
      <ul>
        <li>Ngatur jarak teks biar enak dibaca (line-height, spacing).</li>
        <li>Kontrol dekorasi teks (underline, coret, dll).</li>
        <li>Kasih efek keren pake shadow (baik teks maupun box).</li>
      </ul>
      <p>💡 Intinya: tulisan di web bukan cuma sekadar huruf, tapi bisa jadi <b>desain yang hidup</b> ✨.</p>
    `,
  },
];

let idxCSS5 = 0;

function renderMateriCSS5() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab5[idxCSS5];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idxCSS5 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS5 === materiCSSBab5.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS5 > 0) {
    idxCSS5--;
    renderMateriCSS5();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS5 < materiCSSBab5.length - 1) {
    idxCSS5++;
    renderMateriCSS5();
  }
};

// Inisialisasi pertama kali
renderMateriCSS5();
