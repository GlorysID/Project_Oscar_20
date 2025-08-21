const materiCSSBab11 = [
  {
    title: "Bab 11",
    subtitle: "Pseudo-class & Pseudo-element <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami <b>pseudo-class</b> untuk memilih state khusus elemen.</li>
        <li>Mengenal <b>pseudo-element</b> untuk menambahkan konten sebelum atau sesudah elemen.</li>
        <li>Melatih kreativitas dalam styling tanpa menambah elemen HTML baru.</li>
      </ul>
      <p>Pseudo-class & pseudo-element membuat CSS lebih powerful tanpa mengubah HTML. ⚡</p>
    `,
  },

  {
    title: "Bab 11.1",
    subtitle: "Pseudo-class",
    html: `
      <p>Pseudo-class memilih elemen berdasarkan state atau posisi:</p>
      <ul>
        <li><b>:hover</b> → saat mouse berada di atas elemen.</li>
        <li><b>:active</b> → saat elemen diklik.</li>
        <li><b>:focus</b> → saat input fokus (diketik).</li>
        <li><b>:nth-child(n)</b> → memilih elemen berdasarkan urutan.</li>
      </ul>
      <pre><code>/* Contoh hover dan active */
button:hover {
  background-color: lightblue;
}

button:active {
  transform: scale(0.95);
}

/* Contoh focus */
input:focus {
  border-color: blue;
}

/* Contoh nth-child */
ul li:nth-child(2) {
  color: red;
}</code></pre>
      <p>Dengan pseudo-class, kita bisa memberi efek interaktif tanpa JavaScript.</p>
    `,
  },

  {
    title: "Bab 11.2",
    subtitle: "Pseudo-element",
    html: `
      <p>Pseudo-element memungkinkan menambahkan konten atau style ke bagian tertentu elemen:</p>
      <ul>
        <li><b>::before</b> → menambahkan konten sebelum isi elemen.</li>
        <li><b>::after</b> → menambahkan konten setelah isi elemen.</li>
      </ul>
      <pre><code>/* Contoh before dan after */
p::before {
  content: "✨ ";
}

p::after {
  content: " ✨";
}</code></pre>
      <p>Ini berguna untuk dekorasi, ikon, atau efek visual tanpa menambahkan elemen HTML tambahan.</p>
    `,
  },

  {
    title: "Bab 11.3",
    subtitle: "Tips Praktis Pseudo-class & Pseudo-element",
    html: `
      <ul>
        <li>Gunakan :hover dan :focus untuk interaksi user-friendly.</li>
        <li>Gunakan :nth-child() untuk styling list atau grid tanpa menambahkan class baru.</li>
        <li>::before dan ::after bagus untuk dekorasi, ikon, atau efek khusus.</li>
        <li>Jangan terlalu berlebihan, keep it simple supaya halaman tetap rapi.</li>
      </ul>
      <p>Dengan kombinasi ini, CSS kamu bisa lebih dinamis dan menarik tanpa menyentuh HTML.</p>
    `,
  },

  {
    title: "Bab 11.4",
    subtitle: "Latihan Mini Bab 11",
    html: `
      <ol>
        <li>Buat button, beri efek hover dan active menggunakan pseudo-class.</li>
        <li>Buat input text, beri border berbeda saat fokus (:focus).</li>
        <li>Buat list, beri warna berbeda pada item ke-2 menggunakan :nth-child(2).</li>
        <li>Tambahkan dekorasi sebelum dan sesudah paragraf menggunakan ::before dan ::after.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa memakai pseudo-class & pseudo-element untuk interaksi dan dekorasi CSS yang ciamik tanpa HTML tambahan.</p>
    `,
  },
];

let idxCSS11 = 0;

function renderMateriCSS11() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab11[idxCSS11];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS11 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS11 === materiCSSBab11.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS11 > 0) {
    idxCSS11--;
    renderMateriCSS11();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS11 < materiCSSBab11.length - 1) {
    idxCSS11++;
    renderMateriCSS11();
  }
};

// Inisialisasi pertama kali
renderMateriCSS11();
