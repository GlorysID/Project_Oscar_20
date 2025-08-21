const materiCSSBab9 = [
  {
    title: "Bab 9",
    subtitle: "Responsive Design <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami unit relatif: %, em, rem, vw, vh.</li>
        <li>Mengerti konsep <b>media query</b> untuk menyesuaikan tampilan perangkat.</li>
        <li>Membuat layout responsif sederhana dengan prinsip <b>mobile first</b>.</li>
      </ul>
      <p>Responsive Design itu seperti pakaian yang bisa menyesuaikan ukuran tubuh orang yang memakainya. Jadi web kita tetap rapi di HP, tablet, maupun laptop.</p>
    `,
  },

  {
    title: "Bab 9.1",
    subtitle: "Unit Relatif",
    html: `
      <p>Unit relatif itu ukuran yang menyesuaikan dengan konteks, bukan nilai tetap.</p>
      <ul>
        <li><b>%</b> → persentase dari parent element.</li>
        <li><b>em</b> → relatif terhadap font-size parent.</li>
        <li><b>rem</b> → relatif terhadap font-size root (<code>html</code>).</li>
        <li><b>vw</b> → 1% dari lebar viewport.</li>
        <li><b>vh</b> → 1% dari tinggi viewport.</li>
      </ul>
      <pre><code>.box {
  width: 50%;   /* setengah dari parent */
  font-size: 1.5rem; /* 1.5x root font size */
  height: 20vh; /* 20% tinggi layar */
}</code></pre>
    `,
  },

  {
    title: "Bab 9.2",
    subtitle: "Media Query",
    html: `
      <p><b>Media query</b> memungkinkan kita mengubah style berdasarkan ukuran layar.</p>
      <pre><code>@media (max-width: 768px) {
  .container {
    flex-direction: column; /* tumpuk elemen di layar kecil */
  }
}</code></pre>

      <p>Jadi kalau layar di bawah 768px, container berubah jadi kolom, bukan baris. Ini prinsip <b>mobile first</b>.</p>
    `,
  },

  {
    title: "Bab 9.3",
    subtitle: "Layout Responsif Sederhana",
    html: `
      <p>Prinsip <b>mobile first</b> artinya kita bikin style untuk HP dulu, baru tambah aturan untuk tablet/laptop.</p>
      <pre><code>/* default mobile */
.container {
  display: flex;
  flex-direction: column;
}

/* tablet/laptop */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}</code></pre>

      <p>Dengan cara ini, layout otomatis menyesuaikan layar, tanpa harus bikin versi terpisah.</p>
    `,
  },

  {
    title: "Bab 9.4",
    subtitle: "Tips Responsive Design",
    html: `
      <ul>
        <li>Gunakan unit relatif, hindari pixel tetap.</li>
        <li>Gunakan <code>max-width</code> & <code>min-width</code> untuk membatasi ukuran elemen.</li>
        <li>Coba selalu cek tampilan di HP, tablet, dan desktop.</li>
        <li>Gunakan flexbox atau grid supaya layout lebih fleksibel.</li>
      </ul>
      <p>Ingat, web responsif itu bukan cuma nyaman dilihat, tapi juga membuat user betah berlama-lama. 😎</p>
    `,
  },

  {
    title: "Bab 9.5",
    subtitle: "Latihan Mini Bab 9",
    html: `
      <ol>
        <li>Buat kotak berwarna dengan lebar <code>80%</code> dan tinggi <code>30vh</code>.</li>
        <li>Tambahkan <b>media query</b> untuk layar <768px → kotak menjadi 100% lebar.</li>
        <li>Coba ubah layout container dari kolom ke baris sesuai ukuran layar.</li>
        <li>Periksa hasilnya di HP dan laptop, pastikan rapi di semua device.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa pakai unit relatif, buat media query, layout mobile first, dan cek tampilan responsif.</p>
    `,
  },
];

let idxCSS9 = 0;

function renderMateriCSS9() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab9[idxCSS9];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS9 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS9 === materiCSSBab9.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS9 > 0) {
    idxCSS9--;
    renderMateriCSS9();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS9 < materiCSSBab9.length - 1) {
    idxCSS9++;
    renderMateriCSS9();
  }
};

// Inisialisasi pertama kali
renderMateriCSS9();
