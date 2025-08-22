const materiJSBab2 = [
  {
    title: "Bab 2",
    subtitle: "Variabel & Tipe Data <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu variabel dan cara mendeklarasikannya.</li>
        <li>Belajar perbedaan <code>var</code>, <code>let</code>, dan <code>const</code>.</li>
        <li>Memahami tipe data dasar di JavaScript.</li>
      </ul>
      <p>Variabel adalah “kotak penyimpanan” data di memori. Tanpa variabel, kita cuma bisa hardcode. Dengan variabel, program jadi dinamis. 📦</p>
    `,
  },

  {
    title: "Bab 2.1",
    subtitle: "Mengenal Variabel",
    html: `
      <p>Variabel digunakan untuk menyimpan data yang bisa dipakai lagi.</p>
      <pre><code>// Contoh variabel
let nama = "Anjali";
let umur = 17;
console.log(nama, umur);</code></pre>
      <p>Bayangin variabel seperti kotak: kamu bisa taruh nama, angka, atau apapun di dalamnya, lalu dipakai lagi nanti. 🎁</p>
    `,
  },

  {
    title: "Bab 2.2",
    subtitle: "Perbedaan var, let, dan const",
    html: `
      <ul>
        <li><code>var</code> → cara lama, bisa dipakai ulang (kurang disarankan sekarang).</li>
        <li><code>let</code> → cara modern, nilainya bisa diubah.</li>
        <li><code>const</code> → nilainya tidak bisa diubah (konstan).</li>
      </ul>
      <pre><code>var kota = "Jakarta";
let umur = 18;
const pi = 3.14;

kota = "Bandung";  // boleh
umur = 19;         // boleh
pi = 3.14159;      // ❌ error, const tidak bisa diubah</code></pre>
      <p>Gunakan <code>let</code> untuk data yang bisa berubah, <code>const</code> untuk data tetap, dan hindari <code>var</code> kecuali terpaksa.</p>
    `,
  },

  {
    title: "Bab 2.3",
    subtitle: "Tipe Data Dasar di JavaScript",
    html: `
      <p>JavaScript punya beberapa tipe data utama:</p>
      <ul>
        <li><strong>String</strong> → teks, diapit tanda kutip (<code>"halo"</code> atau <code>'hai'</code>).</li>
        <li><strong>Number</strong> → angka, bisa integer atau desimal.</li>
        <li><strong>Boolean</strong> → true / false.</li>
        <li><strong>Null</strong> → nilai kosong (kosong tapi disengaja).</li>
        <li><strong>Undefined</strong> → variabel belum diberi nilai.</li>
      </ul>
      <pre><code>let nama = "Anjali";   // String
let umur = 17;         // Number
let aktif = true;      // Boolean
let kosong = null;     // Null
let alamat;            // Undefined

console.log(nama, umur, aktif, kosong, alamat);</code></pre>
      <p>JavaScript fleksibel, variabel bisa ganti tipe data seenaknya! 🪄</p>
    `,
  },

  {
    title: "Bab 2.4",
    subtitle: "Operator Dasar",
    html: `
      <p>Kita bisa melakukan operasi pada variabel:</p>
      <ul>
        <li><strong>+ - * / %</strong> → operasi matematika</li>
        <li><strong>+</strong> juga bisa untuk gabung string</li>
      </ul>
      <pre><code>let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1

let nama = "Kiddos";
let sapaan = "Halo " + Kiddos;
console.log(sapaan);  // Halo Kiddos</code></pre>
      <p>JS itu unik: satu operator bisa punya dua fungsi. Kalau ada angka → dihitung, kalau ada string → digabung.</p>
    `,
  },

  {
    title: "Bab 2.5",
    subtitle: "Tips Praktis Variabel & Tipe Data",
    html: `
      <ul>
        <li>Selalu pakai <code>let</code> dan <code>const</code>, lupakan <code>var</code>.</li>
        <li>Pakai <code>const</code> kalau yakin nilainya nggak bakal berubah.</li>
        <li>Gunakan nama variabel yang jelas (bukan <code>x</code>, <code>y</code> doang).</li>
        <li>Ingat: JavaScript tipe datanya <i>dynamic</i>, bisa berubah-ubah.</li>
      </ul>
      <p>Dengan pemahaman ini, kamu bisa mulai bikin program dinamis. 🏎️</p>
    `,
  },

  {
    title: "Bab 2.6",
    subtitle: "Latihan Bab 2",
    html: `
      <ol>
        <li>Buat variabel <code>nama</code> dan <code>umur</code>, lalu tampilkan di console.</li>
        <li>Gunakan <code>const</code> untuk menyimpan nilai pi, lalu coba ubah nilainya (lihat error-nya!).</li>
        <li>Buat dua angka, lakukan operasi tambah, kurang, kali, bagi, modulus.</li>
        <li>Buat variabel string nama depan & nama belakang, lalu gabungkan jadi satu.</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah bisa bikin variabel, ngerti tipe data, dan siap lanjut ke <strong>operator logika & percabangan</strong>! 🎓🔥</p>
    `,
  },
];

let idxJS2 = 0;

function renderMateriJS2() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab2[idxJS2];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS2 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS2 === materiJSBab2.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS2 > 0) {
    idxJS2--;
    renderMateriJS2();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS2 < materiJSBab2.length - 1) {
    idxJS2++;
    renderMateriJS2();
  }
};

// Inisialisasi pertama kali
renderMateriJS2();
