const materiJSBab1 = [
  {
    title: "Bab 1",
    subtitle: "Pengenalan JavaScript <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu JavaScript dan fungsinya di web.</li>
        <li>Belajar cara menambahkan JS ke HTML (inline, internal, eksternal).</li>
        <li>Memahami console & debugging sederhana.</li>
      </ul>
      <p>JavaScript membuat website menjadi interaktif dan dinamis. Ini adalah dasar penting sebelum mulai coding lebih lanjut. 🚀</p>
    `,
  },

  {
    title: "Bab 1.1",
    subtitle: "Apa itu JavaScript?",
    html: `
      <p>JavaScript adalah bahasa pemrograman yang berjalan di browser (client-side) dan bisa juga di server (Node.js).</p>
      <ul>
        <li>Membuat website interaktif: tombol klik, animasi, form validasi.</li>
        <li>Manipulasi elemen HTML & CSS secara real-time.</li>
        <li>Menghubungkan data dengan server tanpa reload halaman (AJAX / Fetch API).</li>
      </ul>
      <p>Singkatnya: HTML itu kerangka, CSS itu desain, JS itu otak & aksi. 🧠💻</p>
    `,
  },

  {
    title: "Bab 1.2",
    subtitle: "Cara Menambahkan JavaScript ke HTML",
    html: `
      <p>Ada tiga cara menambahkan JS ke halaman web:</p>
      <ol>
        <li><strong>Inline:</strong> langsung di tag HTML</li>
        <pre><code>&lt;button onclick="alert('Halo!')"&gt;Klik aku&lt;/button&gt;</code></pre>

        <li><strong>Internal:</strong> di dalam tag &lt;script&gt; di HTML</li>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;script&gt;
    console.log('Hello, JavaScript!');
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

        <li><strong>Eksternal:</strong> menggunakan file .js</li>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;&lt;/head&gt;
&lt;body&gt;
  &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </ol>
      <p>Eksternal biasanya lebih rapi dan memudahkan pemeliharaan kode. 📁</p>
    `,
  },

  {
    title: "Bab 1.3",
    subtitle: "Console & Debugging Sederhana",
    html: `
      <p>Console adalah tempat kita menampilkan data & mengecek kode:</p>
      <ul>
        <li><code>console.log()</code> → menampilkan informasi</li>
        <li><code>console.warn()</code> → menampilkan peringatan</li>
        <li><code>console.error()</code> → menampilkan error</li>
      </ul>
      <pre><code>console.log('Halo Dunia!');
console.warn('Ini peringatan!');
console.error('Terjadi error!');</code></pre>
      <p>Tips: selalu gunakan <code>console.log</code> untuk ngecek variabel & alur kode, supaya debug lebih mudah. 🐛</p>
    `,
  },

  {
    title: "Bab 1.4",
    subtitle: "Tips Praktis Pengenalan JS",
    html: `
      <ul>
        <li>Selalu simpan file JS terpisah supaya HTML tetap rapi.</li>
        <li>Gunakan console untuk memeriksa variabel & error.</li>
        <li>Praktek langsung di browser dengan DevTools (F12) sangat membantu.</li>
        <li>Jangan takut salah, JavaScript itu fleksibel & forgiving 😎</li>
      </ul>
      <p>Dengan tips ini, kamu siap mulai bab JavaScript selanjutnya dan praktik coding interaktif. 🌟</p>
    `,
  },

  {
    title: "Bab 1.5",
    subtitle: "Latihan Bab 1",
    html: `
      <ol>
        <li>Buat tombol HTML yang menampilkan alert saat diklik.</li>
        <li>Tambahkan script internal yang menampilkan pesan di console.</li>
        <li>Buat file JS eksternal, hubungkan ke HTML, dan tampilkan console.log.</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah mengerti dasar JavaScript dan siap lanjut ke variabel & tipe data! 🎓💻</p>
    `,
  },
];

let idxJS1 = 0;

function renderMateriJS1() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab1[idxJS1];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS1 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS1 === materiJSBab1.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS1 > 0) {
    idxJS1--;
    renderMateriJS1();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS1 < materiJSBab1.length - 1) {
    idxJS1++;
    renderMateriJS1();
  }
};

// Inisialisasi pertama kali
renderMateriJS1();
