const materiCppBab2 = [
  {
    title: "Bab 2",
    subtitle: "Variabel, Tipe Data, dan Konstanta <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu memahami apa itu variabel dan kenapa dipakai dalam program.</li>
        <li>Kamu mengenal berbagai macam tipe data di C++.</li>
        <li>Kamu bisa menggunakan konstanta agar programmu lebih aman dan terstruktur.</li>
        <li>Kamu mengerti cara mengubah tipe data (casting) sesuai kebutuhan.</li>
        <li>Kamu bisa melakukan operasi dasar dengan variabel seperti menghitung, menggabungkan, dan membandingkan.</li>
      </ul>
      <p>Kalau di bab pertama kita belajar "rumah" C++ itu seperti apa, sekarang aku akan ajak kamu kenalan dengan
      <b>perabotan rumahnya</b> yaitu variabel dan tipe data. Tanpa ini, program kita nggak bisa menyimpan informasi.</p>
    `,
  },

  {
    title: "Bab 2.1",
    subtitle: "Apa itu Variabel?",
    html: `
      <p>Variabel itu ibarat <b>kotak penyimpanan</b> di dalam memori komputer. Kamu bisa memberi nama kotak itu,
      lalu menyimpan sebuah nilai di dalamnya. Nanti, kamu bisa mengambil isi kotak itu kapan saja.</p>

      <p>Contoh sederhana variabel di C++:</p>
      <pre><code>int umur = 20;     // kotak bernama umur menyimpan angka 20
string nama = "Ani"; // kotak bernama nama menyimpan teks "Ani"</code></pre>

      <p>Dengan variabel, kamu bisa meminta data dari pengguna, menyimpannya, lalu menggunakannya
      di bagian lain dari programmu.</p>
    `,
  },

  {
    title: "Bab 2.2",
    subtitle: "Macam-macam Tipe Data",
    html: `
      <p>Tipe data adalah <b>jenis isi kotak</b>. Sama seperti di rumah, kamu nggak bisa nyimpan air di kardus, 
      atau nyimpan pasir di botol air. Nah, komputer juga begitu. Setiap variabel harus jelas tipe datanya.</p>

      <ul>
        <li><code>int</code> → untuk angka bulat (contoh: 10, -3, 2025).</li>
        <li><code>float</code> → untuk angka desimal (contoh: 3.14, -0.5).</li>
        <li><code>double</code> → mirip float, tapi lebih presisi (punya lebih banyak angka di belakang koma).</li>
        <li><code>char</code> → untuk satu karakter saja (contoh: 'A', 'b', '#').</li>
        <li><code>string</code> → untuk kumpulan huruf atau teks (contoh: "Halo Dunia").</li>
        <li><code>bool</code> → untuk logika benar/salah (true/false).</li>
      </ul>

      <p>Contoh penggunaannya:</p>
      <pre><code>int jumlah = 5;
float pi = 3.14;
double berat = 65.789;
char grade = 'A';
string kota = "Jakarta";
bool lulus = true;</code></pre>
    `,
  },

  {
    title: "Bab 2.3",
    subtitle: "Deklarasi & Inisialisasi Variabel",
    html: `
      <p>Ada dua langkah saat bekerja dengan variabel:</p>
      <ol>
        <li><b>Deklarasi</b> → memberi tahu komputer nama variabel dan tipe datanya.</li>
        <li><b>Inisialisasi</b> → memberikan nilai awal ke variabel itu.</li>
      </ol>

      <pre><code>int umur;        // deklarasi saja
umur = 18;       // baru diisi nilai

int tahun = 2025; // deklarasi sekaligus inisialisasi</code></pre>

      <p>Kalau kamu lupa memberi nilai, variabel bisa berisi data acak (sampah memori). Jadi biasakan untuk menginisialisasi variabel.</p>
    `,
  },

  {
    title: "Bab 2.4",
    subtitle: "Konstanta",
    html: `
      <p>Konstanta itu seperti variabel, tapi <b>nilainya tidak bisa diubah</b> setelah ditentukan.
      Ini berguna kalau kamu punya nilai penting yang harus tetap sama sepanjang program.</p>

      <p>Ada dua cara membuat konstanta di C++:</p>
      <ul>
        <li><code>const</code> → cara modern, lebih direkomendasikan.</li>
        <li><code>#define</code> → cara lama, tapi masih sering dipakai.</li>
      </ul>

      <pre><code>const float PI = 3.14159;
#define MAX_SISWA 30</code></pre>

      <p>Kenapa penting? Supaya kamu tidak sengaja mengubah nilai yang seharusnya tetap.
      Misalnya nilai <code>PI</code> tidak boleh kamu ubah jadi 4.0 😅.</p>
    `,
  },

  {
    title: "Bab 2.5",
    subtitle: "Casting (Mengubah Tipe Data)",
    html: `
      <p>Kadang kamu perlu mengubah isi kotak dari satu jenis ke jenis lain. Misalnya,
      kamu punya angka desimal tapi hanya butuh angka bulatnya saja. Proses ini disebut <b>casting</b>.</p>

      <pre><code>float angka = 9.8;
int bulat = (int) angka;   // hasilnya 9</code></pre>

      <p>Casting ada dua macam:</p>
      <ul>
        <li><b>Implicit</b> (otomatis) → komputer melakukannya tanpa kamu suruh, misalnya int ke float.</li>
        <li><b>Explicit</b> (manual) → kamu memaksa konversi dengan cara seperti <code>(int)</code> atau <code>(float)</code>.</li>
      </ul>
    `,
  },

  {
    title: "Bab 2.6",
    subtitle: "Operasi Dasar dengan Variabel",
    html: `
      <p>Variabel bisa dipakai untuk berbagai operasi dasar:</p>

      <h4>1. Operasi Aritmatika</h4>
      <pre><code>int a = 10, b = 3;
cout &lt;&lt; a + b; // penjumlahan
cout &lt;&lt; a - b; // pengurangan
cout &lt;&lt; a * b; // perkalian
cout &lt;&lt; a / b; // pembagian
cout &lt;&lt; a % b; // sisa bagi</code></pre>

      <h4>2. Operasi Perbandingan</h4>
      <p>Untuk membandingkan nilai variabel.</p>
      <pre><code>cout &lt;&lt; (a == b); // sama dengan?
cout &lt;&lt; (a != b); // tidak sama dengan?
cout &lt;&lt; (a &gt; b);  // lebih besar?
cout &lt;&lt; (a &lt; b);  // lebih kecil?</code></pre>

      <h4>3. Operasi Logika</h4>
      <p>Biasa digunakan dengan tipe <code>bool</code>.</p>
      <pre><code>bool x = true, y = false;
cout &lt;&lt; (x && y); // AND
cout &lt;&lt; (x || y); // OR
cout &lt;&lt; (!x);     // NOT</code></pre>
    `,
  },

  {
    title: "Bab 2.7",
    subtitle: "Latihan Bab 2",
    html: `
      <ol>
        <li>Buat program yang menyimpan nama, umur, dan nilai ujian seorang siswa lalu menampilkannya ke layar.</li>
        <li>Coba buat konstanta untuk menyimpan nilai PI, lalu hitung luas lingkaran dengan jari-jari tertentu.</li>
        <li>Tulis program untuk mengonversi suhu dari Celcius ke Fahrenheit dengan rumus: F = (C × 9/5) + 32.</li>
        <li>Gunakan operasi perbandingan untuk mengecek apakah umur pengguna lebih besar dari 17.</li>
      </ol>
      <p>Latihan ini akan membuat kamu terbiasa bekerja dengan variabel, konstanta, dan operasi dasar.</p>
    `,
  },
];

let idxCpp2 = 0;

function renderMateriCppBab2() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab2[idxCpp2];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp2 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp2 === materiCppBab2.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp2 > 0) {
    idxCpp2--;
    renderMateriCppBab2();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp2 < materiCppBab2.length - 1) {
    idxCpp2++;
    renderMateriCppBab2();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab2();
