const materiJSBab6 = [
  {
    title: "Bab 6",
    subtitle: "Function (Fungsi) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep fungsi sebagai blok kode yang bisa digunakan ulang.</li>
        <li>Membedakan <b>function declaration</b> dan <b>function expression</b>.</li>
        <li>Menggunakan parameter & return value di dalam fungsi.</li>
        <li>Memahami arrow function (<code>() => { }</code>) sebagai cara modern menulis fungsi.</li>
      </ul>
      <p>Bayangkan fungsi itu kayak rice cooker 🍚 → tinggal pencet, otomatis masak nasi. Nggak usah ngulang step manual terus-terusan.</p>
    `,
  },

  {
    title: "Bab 6.1",
    subtitle: "Apa itu Function?",
    html: `
      <p>Fungsi adalah sekumpulan kode yang dibungkus, bisa dipanggil berkali-kali. 
      Jadi, nggak perlu copas kode berulang. <b>DRY Principle</b> → Don't Repeat Yourself.</p>

      <pre><code>// Contoh sederhana
function halo() {
  console.log("Halo dunia!");
}

halo(); // Panggil fungsi
halo(); // Bisa dipanggil lagi</code></pre>
    `,
  },

  {
    title: "Bab 6.2",
    subtitle: "Function Declaration",
    html: `
      <p><b>Function declaration</b> adalah cara klasik mendefinisikan fungsi.</p>
      <pre><code>function tambah(a, b) {
  return a + b;
}

console.log(tambah(2, 3)); // 5</code></pre>

      <p>Kelebihan: bisa dipanggil sebelum deklarasi, karena di-*hoisting* oleh JavaScript.</p>
      <pre><code>console.log(kali(2, 4)); // 8

function kali(x, y) {
  return x * y;
}</code></pre>
    `,
  },

  {
    title: "Bab 6.3",
    subtitle: "Function Expression",
    html: `
      <p><b>Function expression</b> → fungsi disimpan ke dalam variabel.</p>
      <pre><code>const bagi = function(a, b) {
  return a / b;
};

console.log(bagi(10, 2)); // 5</code></pre>

      <p>Bedanya: <i>tidak di-hoisting</i>. Jadi harus didefinisikan dulu baru bisa dipanggil.</p>
    `,
  },

  {
    title: "Bab 6.4",
    subtitle: "Parameter & Return Value",
    html: `
      <p>Fungsi bisa punya <b>parameter</b> (input) & <b>return value</b> (output).</p>

      <pre><code>function sapa(nama) {
  return "Halo, " + nama + "!";
}

let pesan = sapa("Budi");
console.log(pesan); // Halo, Budi!</code></pre>

      <p>Tips:</p>
      <ul>
        <li>Parameter = inputan.</li>
        <li>Return = hasil keluaran.</li>
        <li>Kalau nggak ada <code>return</code>, fungsi hasilnya <code>undefined</code>.</li>
      </ul>
    `,
  },

  {
    title: "Bab 6.5",
    subtitle: "Arrow Function",
    html: `
      <p><b>Arrow function</b> adalah cara baru (ES6) menulis fungsi lebih singkat.</p>
      <pre><code>// Bentuk panjang
const tambah = (a, b) => {
  return a + b;
};

// Bentuk singkat (jika hanya 1 baris return)
const kali = (a, b) => a * b;

console.log(tambah(2, 3)); // 5
console.log(kali(4, 5)); // 20</code></pre>

      <p>Kelebihan arrow function:</p>
      <ul>
        <li>Lebih ringkas.</li>
        <li>Tidak punya <code>this</code> sendiri (berguna dalam callback/event).</li>
      </ul>
    `,
  },

  {
    title: "Bab 6.6",
    subtitle: "Latihan Bab 6",
    html: `
      <ol>
        <li>Buat fungsi untuk menghitung luas persegi panjang (pakai parameter panjang & lebar).</li>
        <li>Buat fungsi ekspresi untuk menghitung keliling lingkaran.</li>
        <li>Buat arrow function untuk mengecek apakah suatu angka genap atau ganjil.</li>
        <li>Buat fungsi yang menerima nama & umur, lalu return kalimat: "Halo [nama], umurmu [umur] tahun".</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah bisa bikin kode reusable, kayak bikin mesin otomatis untuk tugas tertentu. ⚡</p>
    `,
  },
];

let idxJS6 = 0;

function renderMateriJS6() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab6[idxJS6];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS6 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS6 === materiJSBab6.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS6 > 0) {
    idxJS6--;
    renderMateriJS6();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS6 < materiJSBab6.length - 1) {
    idxJS6++;
    renderMateriJS6();
  }
};

// Inisialisasi pertama kali
renderMateriJS6();
