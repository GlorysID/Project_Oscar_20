const materiCSSBab13 = [
  {
    title: "Bab 13",
    subtitle: "Mini Project CSS <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Melatih kemampuan styling halaman menggunakan CSS.</li>
        <li>Membuat layout rapi untuk profil, navbar, dan artikel.</li>
        <li>Mempraktikkan semua konsep CSS: color, font, flexbox, grid, dan pseudo-class.</li>
      </ul>
      <p>Mini project ini mengajak kamu langsung praktek agar ilmu CSS lebih nempel! 💻✨</p>
    `,
  },

  {
    title: "Bab 13.1",
    subtitle: "Styling Halaman Profil",
    html: `
      <p>Kita mulai dengan halaman profil sederhana:</p>
      <ul>
        <li>Gunakan warna background yang nyaman di mata (<code>background-color</code>).</li>
        <li>Pilih font yang mudah dibaca (<code>font-family</code>).</li>
        <li>Tambahkan padding & margin supaya elemen tidak menempel.</li>
      </ul>
      <pre><code>body {
  background-color: #f0f4f8;
  font-family: 'Arial', sans-serif;
}

.profile-header {
  text-align: center;
  padding: 20px;
}

.profile-avatar {
  width: 120px;
  border-radius: 50%;
  border: 3px solid #3498db;
}</code></pre>
      <p>Dengan ini, halaman profil jadi rapi dan enak dilihat.</p>
    `,
  },

  {
    title: "Bab 13.2",
    subtitle: "Membuat Navbar Sederhana",
    html: `
      <p>Navbar adalah navigasi utama halaman:</p>
      <ul>
        <li>Gunakan <code>display: flex</code> untuk menata item secara horizontal.</li>
        <li>Tambahkan hover effect untuk interaksi user-friendly.</li>
        <li>Gunakan padding dan warna background supaya jelas terlihat.</li>
      </ul>
      <pre><code>nav {
  display: flex;
  justify-content: center;
  background-color: #3498db;
  padding: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}</code></pre>
      <p>Navbar ini mudah diubah sesuai kebutuhan website kamu.</p>
    `,
  },

  {
    title: "Bab 13.3",
    subtitle: "Membuat Layout Artikel Rapi",
    html: `
      <p>Artikel biasanya terdiri dari judul, gambar, dan paragraf:</p>
      <ul>
        <li>Gunakan <code>max-width</code> untuk teks agar mudah dibaca.</li>
        <li>Gunakan <code>margin: auto</code> untuk memposisikan konten di tengah.</li>
        <li>Gunakan <code>gap</code> pada flexbox atau grid untuk spacing antar elemen.</li>
      </ul>
      <pre><code>.article-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 700px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
}

.article-title {
  font-size: 24px;
  font-weight: bold;
}

.article-image {
  width: 100%;
  border-radius: 8px;
}

.article-text {
  line-height: 1.6;
}</code></pre>
      <p>Hasilnya: artikel rapi, mudah dibaca, dan layout terlihat profesional.</p>
    `,
  },

  {
    title: "Bab 13.4",
    subtitle: "Tips Praktis Mini Project CSS",
    html: `
      <ul>
        <li>Gunakan warna & font konsisten di seluruh halaman.</li>
        <li>Gunakan class reusable untuk tombol, card, atau teks center.</li>
        <li>Perhatikan jarak antar elemen agar halaman tidak terlalu padat.</li>
        <li>Manfaatkan hover, focus, dan pseudo-element untuk efek tambahan.</li>
      </ul>
      <p>Dengan tips ini, mini project CSS jadi lebih rapi, interaktif, dan enak dilihat. 🌟</p>
    `,
  },

  {
    title: "Bab 13.5",
    subtitle: "Latihan Mini Project CSS",
    html: `
      <ol>
        <li>Buat halaman profil dengan avatar, nama, dan deskripsi singkat.</li>
        <li>Buat navbar sederhana dengan 3–4 link, beri hover effect.</li>
        <li>Buat 2–3 artikel dengan judul, gambar, dan paragraf. Gunakan flexbox atau grid.</li>
        <li>Gunakan class reusable untuk button dan card.</li>
        <li>Tambahkan pseudo-class & pseudo-element untuk efek dekorasi.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa membuat halaman website sederhana tapi rapi, stylish, dan interaktif menggunakan CSS.</p>
    `,
  },
];

let idxCSS13 = 0;

function renderMateriCSS13() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab13[idxCSS13];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS13 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS13 === materiCSSBab13.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS13 > 0) {
    idxCSS13--;
    renderMateriCSS13();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS13 < materiCSSBab13.length - 1) {
    idxCSS13++;
    renderMateriCSS13();
  }
};

// Inisialisasi pertama kali
renderMateriCSS13();
