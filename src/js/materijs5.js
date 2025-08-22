const materiJSBab5 = [
  {
    title: "Bab 5",
    subtitle: "Looping (Perulangan) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep perulangan untuk mengulang kode secara otomatis.</li>
        <li>Mengenal berbagai jenis loop: <code>for</code>, <code>while</code>, <code>do...while</code>.</li>
        <li>Mengenal <code>for...of</code> dan <code>for...in</code> untuk data koleksi.</li>
        <li>Belajar menggunakan <code>break</code> dan <code>continue</code> dalam loop.</li>
      </ul>
      <p>Loop = mesin fotokopi kode. Daripada nulis ulang, biar komputer yang ngulangin. 🔄</p>
    `,
  },

  {
    title: "Bab 5.1",
    subtitle: "For Loop",
    html: `
      <p><b>for</b> digunakan ketika kita tahu berapa kali perulangan akan dilakukan.</p>
      <pre><code>// Struktur umum
for (inisialisasi; kondisi; increment/decrement) {
  // kode yang diulang
}

// Contoh:
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}</code></pre>

      <p>Penjelasan:</p>
      <ul>
        <li><b>inisialisasi</b>: mulai dari nilai awal (misal i = 1).</li>
        <li><b>kondisi</b>: selama true → loop jalan.</li>
        <li><b>increment/decrement</b>: perubahan tiap putaran (misal i++ = tambah 1).</li>
      </ul>
    `,
  },

  {
    title: "Bab 5.2",
    subtitle: "While Loop",
    html: `
      <p><b>while</b> dipakai ketika kita tidak tahu pasti jumlah perulangannya, tapi tahu syarat berhentinya.</p>
      <pre><code>let i = 1;

while (i <= 5) {
  console.log("Perulangan ke-" + i);
  i++;
}</code></pre>

      <p>Bedanya dengan <code>for</code>: inisialisasi & increment ditulis terpisah di luar/dalam block.</p>
    `,
  },

  {
    title: "Bab 5.3",
    subtitle: "Do...While Loop",
    html: `
      <p><b>do...while</b> mirip <code>while</code>, bedanya perulangan <b>pasti dijalankan minimal sekali</b> meskipun kondisi false.</p>
      <pre><code>let i = 6;

do {
  console.log("Perulangan ke-" + i);
  i++;
} while (i <= 5);</code></pre>

      <p>Pada contoh ini, walau kondisi salah sejak awal, kode tetap jalan 1 kali.</p>
    `,
  },

  {
    title: "Bab 5.4",
    subtitle: "For...of & For...in",
    html: `
      <p><b>for...of</b> → digunakan untuk iterasi langsung isi array/string.</p>
      <pre><code>let buah = ["apel", "mangga", "pisang"];

for (let b of buah) {
  console.log(b);
}

// Output: apel, mangga, pisang</code></pre>

      <p><b>for...in</b> → digunakan untuk iterasi index (array) atau property (object).</p>
      <pre><code>let mahasiswa = { nama: "Budi", umur: 20, jurusan: "Informatika" };

for (let key in mahasiswa) {
  console.log(key + " : " + mahasiswa[key]);
}

// Output:
// nama : Budi
// umur : 20
// jurusan : Informatika</code></pre>
    `,
  },

  {
    title: "Bab 5.5",
    subtitle: "Break & Continue",
    html: `
      <p><b>break</b> → menghentikan loop meskipun kondisinya belum selesai.</p>
      <pre><code>for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // keluar dari loop
  }
  console.log(i);
}
// Output: 1, 2</code></pre>

      <p><b>continue</b> → skip 1 iterasi lalu lanjut ke iterasi berikutnya.</p>
      <pre><code>for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // lewati angka 3
  }
  console.log(i);
}
// Output: 1, 2, 4, 5</code></pre>
    `,
  },

  {
    title: "Bab 5.6",
    subtitle: "Tips Praktis Looping",
    html: `
      <ul>
        <li>Pakai <code>for</code> kalau tahu jumlah perulangannya.</li>
        <li>Pakai <code>while</code> kalau hanya tahu syarat berhentinya.</li>
        <li>Pakai <code>do...while</code> kalau butuh minimal sekali eksekusi.</li>
        <li>Pakai <code>for...of</code> untuk isi array/string.</li>
        <li>Pakai <code>for...in</code> untuk object atau index.</li>
        <li>Hati-hati! Loop tanpa kondisi berhenti = infinite loop (program nge-freeze 🚨).</li>
      </ul>
    `,
  },

  {
    title: "Bab 5.7",
    subtitle: "Latihan Bab 5",
    html: `
      <ol>
        <li>Buat perulangan <code>for</code> untuk menampilkan angka 1–10.</li>
        <li>Buat perulangan <code>while</code> untuk menampilkan angka genap dari 2–20.</li>
        <li>Buat perulangan <code>do...while</code> untuk menampilkan "Halo Dunia" minimal sekali.</li>
        <li>Gunakan <code>for...of</code> untuk menampilkan isi array nama temanmu.</li>
        <li>Gunakan <code>for...in</code> untuk menampilkan semua property dalam object.</li>
        <li>Buat loop dari 1–10, tapi hentikan di angka 7 (pakai <code>break</code>).</li>
        <li>Buat loop dari 1–10, tapi lewati angka 5 (pakai <code>continue</code>).</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah bisa bikin komputer “ngulang-ngulang” kerjaan tanpa capek. 😎</p>
    `,
  },
];

let idxJS5 = 0;

function renderMateriJS5() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab5[idxJS5];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS5 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS5 === materiJSBab5.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS5 > 0) {
    idxJS5--;
    renderMateriJS5();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS5 < materiJSBab5.length - 1) {
    idxJS5++;
    renderMateriJS5();
  }
};

// Inisialisasi pertama kali
renderMateriJS5();
