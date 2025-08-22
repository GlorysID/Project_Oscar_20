const materiJSBab8 = [
  {
    title: "Bab 8",
    subtitle: "Object & Method <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami apa itu <b>object</b> dan kegunaannya di JavaScript.</li>
        <li>Belajar cara membuat object literal.</li>
        <li>Mengakses dan memanipulasi properti (dot notation vs bracket notation).</li>
        <li>Membuat method di dalam object.</li>
      </ul>
      <p>Object itu ibarat <i>lemari berlabel</i>. Kalau array punya sekat bernomor (index), object punya sekat dengan <b>nama</b> (key). Jadi kita bisa simpan data dengan label khusus.</p>
    `,
  },

  {
    title: "Bab 8.1",
    subtitle: "Membuat Object Literal",
    html: `
      <p>Object literal adalah cara paling umum membuat object dengan tanda kurung kurawal <code>{}</code>.</p>

      <pre><code>// Membuat object kosong
const kosong = {};

// Membuat object dengan properti
const user = {
  nama: "Anya",
  umur: 17,
  isAdmin: true,
};</code></pre>

      <p>Properti = pasangan <b>key: value</b>. Key biasanya string (ditulis tanpa tanda kutip kalau valid identifier).</p>

      <pre><code>const mobil = {
  "merek mobil": "Toyota", // key bisa ada spasi jika pakai string
  tahun: 2022,
  warna: "hitam",
};</code></pre>
    `,
  },

  {
    title: "Bab 8.2",
    subtitle: "Mengakses Properti (Dot vs Bracket)",
    html: `
      <p>Kita bisa akses properti object dengan 2 cara:</p>

      <h4>1) Dot Notation (paling umum)</h4>
      <pre><code>console.log(user.nama);   // "Anya"
console.log(user.umur);   // 17</code></pre>

      <h4>2) Bracket Notation (pakai string key)</h4>
      <pre><code>console.log(user["nama"]);       // "Anya"
console.log(mobil["merek mobil"]); // "Toyota"</code></pre>

      <p><b>Kapan pakai bracket?</b></p>
      <ul>
        <li>Kalau key mengandung spasi/karakter khusus.</li>
        <li>Kalau key ditentukan secara dinamis (pakai variabel).</li>
      </ul>

      <pre><code>const key = "umur";
console.log(user[key]); // 17</code></pre>
    `,
  },

  {
    title: "Bab 8.3",
    subtitle: "Menambah, Mengubah, dan Menghapus Properti",
    html: `
      <p>Object itu fleksibel, kita bisa tambah, ubah, dan hapus propertinya kapan saja.</p>

      <pre><code>const user = { nama: "Anya", umur: 17 };

// Menambah
user.email = "anya@mail.com";

// Mengubah
user.umur = 18;

// Hapus
delete user.nama;

console.log(user);</code></pre>

      <p><b>Catatan:</b> Jika key yang diakses tidak ada → hasilnya <code>undefined</code>.</p>
    `,
  },

  {
    title: "Bab 8.4",
    subtitle: "Method di Object",
    html: `
      <p>Selain menyimpan data, object juga bisa menyimpan <b>fungsi</b> sebagai properti. Ini disebut <b>method</b>.</p>

      <pre><code>const user = {
  nama: "Anya",
  sapa: function() {
    console.log("Halo, saya " + this.nama);
  }
};

user.sapa(); // "Halo, saya Anya"</code></pre>

      <p>Kita bisa tulis lebih ringkas:</p>
      <pre><code>const user = {
  nama: "Budi",
  sapa() {
    console.log(\`Halo, saya \${this.nama}\`);
  }
};

user.sapa();</code></pre>

      <p><b>this</b> menunjuk ke object tempat method dipanggil.</p>
    `,
  },

  {
    title: "Bab 8.5",
    subtitle: "Iterasi Properti Object",
    html: `
      <p>Beberapa cara menelusuri isi object:</p>

      <pre><code>const user = { nama: "Cici", umur: 20, isAdmin: true };

// for...in → iterasi key
for (const key in user) {
  console.log(key, user[key]);
}

// Object.keys → array key
console.log(Object.keys(user)); // ["nama", "umur", "isAdmin"]

// Object.values → array value
console.log(Object.values(user)); // ["Cici", 20, true]

// Object.entries → array pasangan [key, value]
console.log(Object.entries(user));
// [["nama","Cici"], ["umur",20], ["isAdmin",true]]</code></pre>
    `,
  },

  {
    title: "Bab 8.6",
    subtitle: "Latihan Mini Bab 8",
    html: `
      <ol>
        <li>Buat object <code>mahasiswa</code> dengan properti <code>nama</code>, <code>nim</code>, dan method <code>perkenalan()</code> yang mencetak "Halo, saya [nama] dengan NIM [nim]".</li>
        <li>Diberi object <code>barang</code>, tambahkan properti <code>stok</code> dan kurangi stoknya setiap kali method <code>beli()</code> dipanggil.</li>
        <li>Buat object <code>film</code> dengan properti <code>judul</code>, <code>tahun</code>, lalu akses propertinya dengan <b>dot</b> dan <b>bracket</b>.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa membuat object, akses dan ubah propertinya, serta membuat method yang memanfaatkan <code>this</code>.</p>
    `,
  },
];

let idxJS8 = 0;

function renderMateriJS8() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab8[idxJS8];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS8 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS8 === materiJSBab8.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS8 > 0) {
    idxJS8--;
    renderMateriJS8();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS8 < materiJSBab8.length - 1) {
    idxJS8++;
    renderMateriJS8();
  }
};

// Inisialisasi pertama kali
renderMateriJS8();
