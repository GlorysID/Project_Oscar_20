const materiJSBab3 = [
  {
    title: "Bab 3",
    subtitle: "Operator & Ekspresi <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu operator dan ekspresi.</li>
        <li>Mengenal operator matematika, logika, dan perbandingan.</li>
        <li>Bisa menggunakan operator dalam kode JavaScript sehari-hari.</li>
      </ul>
      <p>Operator adalah “alat hitung” atau “alat cek” dalam JavaScript, sedangkan ekspresi adalah gabungan variabel, nilai, dan operator. 🛠️</p>
    `,
  },

  {
    title: "Bab 3.1",
    subtitle: "Operator Matematika",
    html: `
      <p>Dipakai untuk operasi angka:</p>
      <ul>
        <li><code>+</code> → tambah</li>
        <li><code>-</code> → kurang</li>
        <li><code>*</code> → kali</li>
        <li><code>/</code> → bagi</li>
        <li><code>%</code> → sisa bagi (modulus)</li>
      </ul>
      <pre><code>let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1</code></pre>
      <p>Modulus (%) sering dipakai buat cek ganjil-genap. 😉</p>
    `,
  },

  {
    title: "Bab 3.2",
    subtitle: "Operator Perbandingan",
    html: `
      <p>Dipakai untuk membandingkan dua nilai:</p>
      <ul>
        <li><code>==</code> → sama dengan (cek nilai saja).</li>
        <li><code>===</code> → sama persis (cek nilai & tipe data).</li>
        <li><code>!=</code> → tidak sama dengan (cek nilai saja).</li>
        <li><code>!==</code> → tidak sama persis (cek nilai & tipe data).</li>
        <li><code>&lt;</code> → lebih kecil.</li>
        <li><code>&gt;</code> → lebih besar.</li>
      </ul>
      <pre><code>console.log(5 == "5");   // true (cek nilai aja)
console.log(5 === "5");  // false (beda tipe)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(7 > 3);      // true
console.log(2 < 1);      // false</code></pre>
      <p>Pakai <code>===</code> & <code>!==</code> biar lebih aman (strict comparison). 🔒</p>
    `,
  },

  {
    title: "Bab 3.3",
    subtitle: "Operator Logika",
    html: `
      <p>Dipakai untuk operasi logika (benar/salah):</p>
      <ul>
        <li><code>&&</code> → AND (harus dua-duanya true).</li>
        <li><code>||</code> → OR (cukup salah satu true).</li>
        <li><code>!</code> → NOT (membalik nilai).</li>
      </ul>
      <pre><code>let umur = 20;
let punyaSIM = true;

console.log(umur >= 18 && punyaSIM); // true (dua-duanya benar)
console.log(umur >= 18 || punyaSIM); // true (salah satu benar)
console.log(!(umur >= 18));          // false (dibalik)</code></pre>
      <p>Logika ini penting untuk percabangan (if-else). 🧠</p>
    `,
  },

  {
    title: "Bab 3.4",
    subtitle: "Ekspresi",
    html: `
      <p>Ekspresi = kombinasi variabel, nilai, dan operator yang menghasilkan nilai baru.</p>
      <pre><code>let x = 10;
let y = 5;
let hasil = (x + y) * 2;  // ekspresi
console.log(hasil);       // 30</code></pre>
      <p>Setiap kali kita nulis perhitungan atau logika → itu ekspresi!</p>
    `,
  },

  {
    title: "Bab 3.5",
    subtitle: "Tips Praktis Operator & Ekspresi",
    html: `
      <ul>
        <li>Selalu pakai <code>===</code> dan <code>!==</code> dibanding <code>==</code> dan <code>!=</code>.</li>
        <li>Gunakan tanda kurung <code>()</code> untuk bikin ekspresi lebih jelas.</li>
        <li>Hati-hati dengan string + number (JavaScript suka "nggabungin").</li>
      </ul>
      <pre><code>console.log(5 + "5"); // "55" (string gabung angka)</code></pre>
      <p>Kalau ketemu hasil aneh, cek lagi apakah itu dihitung atau digabung. 😅</p>
    `,
  },

  {
    title: "Bab 3.6",
    subtitle: "Latihan Bab 3",
    html: `
      <ol>
        <li>Buat 2 variabel angka, lalu coba semua operator matematika.</li>
        <li>Buat perbandingan angka dengan <code>==</code> dan <code>===</code>, lihat bedanya.</li>
        <li>Coba operator logika <code>&&</code>, <code>||</code>, dan <code>!</code> pada kondisi umur & punyaSIM.</li>
        <li>Buat ekspresi gabungan, misalnya <code>(a + b) * c</code>.</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah bisa menghitung, membandingkan, dan membuat logika dasar dengan operator di JavaScript. 🎉</p>
    `,
  },
];

let idxJS3 = 0;

function renderMateriJS3() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab3[idxJS3];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS3 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS3 === materiJSBab3.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS3 > 0) {
    idxJS3--;
    renderMateriJS3();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS3 < materiJSBab3.length - 1) {
    idxJS3++;
    renderMateriJS3();
  }
};

// Inisialisasi pertama kali
renderMateriJS3();
