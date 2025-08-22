const materiJSBab7 = [
  {
    title: "Bab 7",
    subtitle: "Array & Method <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu <b>array</b> dan cara membuat serta mengaksesnya.</li>
        <li>Menguasai method penting: <code>push()</code>, <code>pop()</code>, <code>shift()</code>, <code>unshift()</code>, <code>map()</code>, <code>filter()</code>, <code>reduce()</code>.</li>
        <li>Mengenal berbagai cara <i>iterasi</i> array: <code>for</code>, <code>while</code>, <code>for...of</code>, <code>forEach</code>.</li>
      </ul>
      <p>Array itu seperti <i>rak bersekat</i> tempat menyimpan banyak data berurutan. Kita bisa ambil, ubah, sortir, dan olah datanya dengan efisien.</p>
    `,
  },

  {
    title: "Bab 7.1",
    subtitle: "Membuat & Mengakses Array",
    html: `
      <p>Array menyimpan banyak nilai dalam satu variabel. Index dimulai dari 0.</p>

      <pre><code>// 1) Membuat array
const kosong = [];
const angka = [10, 20, 30];
const campur = ["Anya", 42, true, null, { role: "admin" }, [1,2,3]];

// 2) Mengakses & mengubah
console.log(angka[0]);        // 10 (elemen pertama)
angka[1] = 99;                // ubah elemen ke-2
console.log(angka.length);    // 3 (jumlah elemen)

// 3) Akses elemen terakhir
console.log(angka[angka.length - 1]); // cara klasik
console.log(angka.at(-1));            // cara modern (mendukung index negatif)</code></pre>

      <p><b>Catatan penting:</b></p>
      <ul>
        <li><code>const</code> pada array & objek <i>tidak</i> membuat isinya beku; yang tidak bisa berubah adalah <i>referensinya</i>. Kamu tetap bisa <code>push()</code>, <code>pop()</code>, dll pada array bertipe <code>const</code>.</li>
        <li>Array adalah <b>tipe referensi</b>. Meng-assign ke variabel lain akan menyalin referensi, <i>bukan</i> menyalin isi.</li>
      </ul>

      <pre><code>// Referensi (hati-hati!)
const a1 = [1, 2];
const a2 = a1;     // a2 mereferensikan array yang sama
a2.push(3);
console.log(a1);   // [1, 2, 3] — a1 ikut berubah!

// Cara copy yang aman (shallow copy)
const a3 = [...a1];         // spread
const a4 = a1.slice();      // slice tanpa argumen
// Catatan: ini shallow copy; kalau di dalamnya ada objek/array, referensinya tetap sama.</code></pre>
    `,
  },

  {
    title: "Bab 7.2",
    subtitle: "Method Dasar: push(), pop(), shift(), unshift()",
    html: `
      <p>Empat method ini ibarat alat angkut untuk keluar/masuk data di ujung array.</p>

      <pre><code>const arr = [10, 20];

// Tambah di belakang
arr.push(30);     // arr = [10, 20, 30]; return 3 (panjang baru)

// Hapus dari belakang
const terakhir = arr.pop();  // arr = [10, 20]; terakhir = 30

// Hapus dari depan
const pertama = arr.shift(); // arr = [20]; pertama = 10

// Tambah di depan
arr.unshift(5);  // arr = [5, 20]; return 2</code></pre>

      <p><b>Kapan pakai apa?</b></p>
      <ul>
        <li><code>push()/pop()</code> → manipulasi di <b>belakang</b> (umum & cepat).</li>
        <li><code>shift()/unshift()</code> → manipulasi di <b>depan</b> (perlu geser elemen lain, relatif lebih berat).</li>
      </ul>

      <p><i>Tip:</i> Kalau butuh struktur antrean (queue) → <code>push()</code> + <code>shift()</code>. Kalau butuh tumpukan (stack) → <code>push()</code> + <code>pop()</code>.</p>
    `,
  },

  {
    title: "Bab 7.3",
    subtitle: "Transformasi Data: map(), filter(), reduce()",
    html: `
      <p>Ketiga method ini adalah “tiga sekawan” untuk olah data fungsional. Mereka <b>menghasilkan array/hasil baru</b> tanpa mengubah array asli (kecuali kamu sengaja mengubah objek di dalamnya).</p>

      <h4>1) map() — ubah setiap elemen jadi bentuk baru</h4>
      <pre><code>const angka = [1, 2, 3, 4];

// kalikan setiap angka dengan 2
const kali2 = angka.map(n => n * 2);
console.log(kali2); // [2, 4, 6, 8]

// format string dari angka
const label = angka.map((n, i) => \`Item-\${i+1}: \${n}\`);
console.log(label); // ["Item-1: 1", "Item-2: 2", ...]</code></pre>
      <p><b>Ciri:</b> <code>map()</code> selalu menghasilkan array <b>dengan panjang yang sama</b>.</p>

      <h4>2) filter() — ambil yang lolos syarat</h4>
      <pre><code>const skor = [90, 45, 77, 88, 50];
const lulus = skor.filter(s => s >= 75);
console.log(lulus); // [90, 77, 88]</code></pre>
      <p><b>Ciri:</b> <code>filter()</code> bisa menghasilkan array <b>lebih pendek</b> (atau bahkan kosong) tergantung kondisinya.</p>

      <h4>3) reduce() — kumpulkan semua jadi satu nilai</h4>
      <pre><code>const nilai = [1, 2, 3, 4];

// jumlahkan semua
const total = nilai.reduce((acc, n) => acc + n, 0);
console.log(total); // 10

// cari nilai maksimum
const max = nilai.reduce((m, n) => (n > m ? n : m), -Infinity);
console.log(max); // 4

// ubah array objek jadi indeks by id
const users = [
  { id: "u1", name: "Ana" },
  { id: "u2", name: "Budi" },
];
const byId = users.reduce((acc, u) => {
  acc[u.id] = u;
  return acc;
}, {});
console.log(byId.u2.name); // "Budi"</code></pre>

      <p><b>Struktur reduce:</b> <code>array.reduce((accumulator, item, index, array) => {...}, initialValue)</code>.  
      <i>initialValue</i> penting: tanpa itu, elemen pertama jadi nilai awal <code>acc</code>.</p>
    `,
  },

  {
    title: "Bab 7.4",
    subtitle: "Iterasi Array (Looping)",
    html: `
      <p>Beberapa cara umum untuk menelusuri array:</p>

      <h4>1) for klasik (fleksibel & bisa break)</h4>
      <pre><code>const arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}</code></pre>

      <h4>2) for...of (langsung ke nilai, rapi)</h4>
      <pre><code>for (const val of arr) {
  console.log(val);
}</code></pre>

      <h4>3) forEach (fungsi callback untuk tiap item)</h4>
      <pre><code>arr.forEach((val, idx) => {
  console.log(idx, val);
});</code></pre>
      <p><b>Catatan:</b> <code>forEach</code> tidak bisa <code>break</code>/<code>continue</code>. Kalau butuh berhenti di tengah, pakai <code>for</code> atau <code>for...of</code>.</p>

      <h4>4) for...in (hati-hati)</h4>
      <pre><code>// Mengiterasi KEY (index sebagai string) & bisa ikut properti turunan.
// Tidak direkomendasikan untuk array kecuali memang butuh index sebagai key.
for (const key in arr) {
  console.log(key, arr[key]);
}</code></pre>
      <p>Rekomendasi: untuk array biasa, pilih <b>for</b>, <b>for...of</b>, atau <b>forEach</b>.</p>
    `,
  },

  {
    title: "Bab 7.5",
    subtitle: "Bonus Ringkas: slice(), splice(), includes(), indexOf(), join()",
    html: `
      <p>Tambahan yang sering berguna saat kerja harian.</p>

      <pre><code>const data = ["a", "b", "c", "d"];

// slice(start, end) → ambil POTONGAN (tidak mutasi)
console.log(data.slice(1, 3)); // ["b", "c"]
console.log(data);             // tetap ["a","b","c","d"]

// splice(start, count, ...itemBaru) → MUTASI: hapus/sisip
const copy = [...data];
copy.splice(1, 2, "X", "Y");   // hapus 2 mulai index 1, lalu sisip "X","Y"
console.log(copy);             // ["a", "X", "Y", "d"]

// includes / indexOf
console.log(data.includes("c")); // true
console.log(data.indexOf("d"));  // 3 (ketemu) atau -1 (tidak ada)

// join → gabung jadi string
console.log(["2025","08","22"].join("-")); // "2025-08-22"</code></pre>
    `,
  },

  {
    title: "Bab 7.6",
    subtitle: "Tips & Praktik Baik",
    html: `
      <ul>
        <li><b>Utamakan method non-mutasi</b> (seperti <code>map</code>, <code>filter</code>, <code>reduce</code>) saat mengolah data, terutama di UI framework (React, dsb.).</li>
        <li><b>Hati-hati referensi</b>: saat perlu “copy”, pakai <code>[...arr]</code> atau <code>slice()</code> (shallow copy).</li>
        <li>Jika perlu berhenti di tengah iterasi, gunakan <code>for</code> / <code>for...of</code>, bukan <code>forEach</code>.</li>
        <li><code>reduce</code> kuat tapi mudah disalahgunakan—pastikan memilih alat tepat:  
          <code>map</code> untuk ubah, <code>filter</code> untuk saring, <code>reduce</code> untuk akumulasi.</li>
        <li>Untuk angka, hati-hati saat <code>sort()</code> (butuh pembanding: <code>arr.sort((a,b) => a-b)</code>).</li>
      </ul>
    `,
  },

  {
    title: "Bab 7.7",
    subtitle: "Latihan Mini Bab 7",
    html: `
      <ol>
        <li>Buat array skor siswa. Ambil hanya skor <code>&ge; 75</code> (pakai <code>filter()</code>), lalu kalikan semua skor lulus dengan 1.05 (bonus 5%) (pakai <code>map()</code>), dan hitung totalnya (pakai <code>reduce()</code>).</li>
        <li>Diberi array nama: <code>["Ana","Budi","Cici","Budi"]</code>.  
          a) Cek apakah ada "Dodi" (pakai <code>includes()</code>).  
          b) Cari index kemunculan pertama "Budi" (pakai <code>indexOf()</code>).</li>
        <li>Simulasi antrean kasir: mulai dari <code>[]</code>,  
          <code>unshift("VIP")</code>, <code>push("A")</code>, <code>push("B")</code>, lalu layani 1 orang (pakai <code>shift()</code>). Tampilkan kondisi antrean setelah tiap langkah.</li>
        <li>Dari array <code>[5, 1, 9, 3, 3]</code>, cari nilai maksimum dan jumlah totalnya dengan <code>reduce()</code>.</li>
        <li>Buat fungsi <code>gabungKata(arr)</code> yang menerima array kata dan mengembalikan kalimat (pakai <code>join(" ")</code>).</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa menyimpan banyak data dalam satu variabel, mengolahnya dengan method inti, dan memilih teknik iterasi yang tepat.</p>
    `,
  },
];

let idxJS7 = 0;

function renderMateriJS7() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab7[idxJS7];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS7 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS7 === materiJSBab7.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS7 > 0) {
    idxJS7--;
    renderMateriJS7();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS7 < materiJSBab7.length - 1) {
    idxJS7++;
    renderMateriJS7();
  }
};

// Inisialisasi pertama kali
renderMateriJS7();
