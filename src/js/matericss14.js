const materiCSSBab14 = [
  {
    title: "Bab 14",
    subtitle: "Final Project CSS <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menggabungkan semua konsep CSS yang sudah dipelajari.</li>
        <li>Membuat website e-learning mini dengan layout rapi dan interaktif.</li>
        <li>Melatih kreativitas styling: warna, font, flexbox, grid, transition, pseudo-class, dan pseudo-element.</li>
      </ul>
      <p>Ini adalah kesempatanmu untuk membuat sebuah website mini yang nyata dan bisa dipamerkan. 🚀</p>
    `,
  },

  {
    title: "Bab 14.1",
    subtitle: "Halaman Home dengan Hero Section",
    html: `
      <p>Halaman Home biasanya memiliki hero section yang menarik perhatian:</p>
      <ul>
        <li>Gunakan <code>background-image</code> atau <code>background-color</code> yang eye-catching.</li>
        <li>Tambahkan heading, deskripsi, dan tombol call-to-action.</li>
        <li>Gunakan <code>display: flex</code> untuk men-center konten.</li>
      </ul>
      <pre><code>.hero {
  height: 80vh;
  background: url('hero-image.jpg') center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 15px;
}

.hero p {
  font-size: 20px;
  margin-bottom: 25px;
}

.hero button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.hero button:hover {
  background-color: #2980b9;
}</code></pre>
      <p>Hasil: halaman home jadi menarik, teks terbaca, tombol jelas terlihat, dan siap memandu user.</p>
    `,
  },

  {
    title: "Bab 14.2",
    subtitle: "Halaman Materi dengan Layout Card/Grid",
    html: `
      <p>Halaman Materi berisi daftar topik yang bisa ditampilkan dalam card:</p>
      <ul>
        <li>Gunakan <code>display: grid</code> atau <code>flex</code> untuk layout card responsif.</li>
        <li>Tambahkan shadow, padding, dan border-radius agar card enak dilihat.</li>
        <li>Gunakan pseudo-class <code>:hover</code> untuk efek interaktif.</li>
      </ul>
      <pre><code>.materi-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.materi-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.materi-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.materi-card h3 {
  margin-bottom: 10px;
}

.materi-card p {
  line-height: 1.5;
}</code></pre>
      <p>Hasil: materi tampil rapi, interaktif saat di-hover, dan tetap responsif di berbagai layar.</p>
    `,
  },

  {
    title: "Bab 14.3",
    subtitle: "Halaman Contact dengan Form Styled",
    html: `
      <p>Halaman Contact memungkinkan user mengirim pesan:</p>
      <ul>
        <li>Gunakan <code>form</code> dengan input, textarea, dan tombol submit.</li>
        <li>Tambahkan border, padding, dan hover effect.</li>
        <li>Gunakan <code>:focus</code> untuk efek saat input diketik.</li>
      </ul>
      <pre><code>.contact-form {
  max-width: 500px;
  margin: auto;
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #3498db;
  outline: none;
}

.contact-form button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 25px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.contact-form button:hover {
  background-color: #2980b9;
}</code></pre>
      <p>Hasil: form terlihat rapi, input fokus jelas, dan tombol interaktif saat di-hover.</p>
    `,
  },

  {
    title: "Bab 14.4",
    subtitle: "Tips Praktis Final Project CSS",
    html: `
      <ul>
        <li>Gunakan konsistensi warna dan font di seluruh halaman.</li>
        <li>Manfaatkan flexbox & grid agar layout tetap responsif.</li>
        <li>Gunakan pseudo-class & transition untuk interaksi halus.</li>
        <li>Periksa di mobile, tablet, dan desktop untuk memastikan responsif.</li>
      </ul>
      <p>Dengan tips ini, website e-learning mini kamu akan terlihat profesional dan siap digunakan. 🌟</p>
    `,
  },

  {
    title: "Bab 14.5",
    subtitle: "Latihan Final Project CSS",
    html: `
      <ol>
        <li>Buat halaman Home dengan hero section, heading, deskripsi, dan tombol.</li>
        <li>Buat halaman Materi dengan daftar topik menggunakan card/grid, beri hover effect.</li>
        <li>Buat halaman Contact dengan form styled, efek focus, dan tombol submit interaktif.</li>
        <li>Pastikan semua halaman responsif di berbagai ukuran layar.</li>
        <li>Gunakan warna, font, padding, dan margin yang konsisten.</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah bisa membuat website mini e-learning lengkap dengan CSS profesional! 🎓💻</p>
    `,
  },
];

let idxCSS14 = 0;

function renderMateriCSS14() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab14[idxCSS14];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS14 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS14 === materiCSSBab14.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS14 > 0) {
    idxCSS14--;
    renderMateriCSS14();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS14 < materiCSSBab14.length - 1) {
    idxCSS14++;
    renderMateriCSS14();
  }
};

// Inisialisasi pertama kali
renderMateriCSS14();
