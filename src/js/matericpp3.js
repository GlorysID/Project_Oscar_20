const materiCppBab3 = [
  {
    title: "Bab 3",
    subtitle: "Operator & Ekspresi <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu memahami apa itu operator dalam C++ dan bagaimana cara kerjanya.</li>
        <li>Kamu bisa menggunakan operator aritmatika, perbandingan, logika, dan assignment.</li>
        <li>Kamu mengerti cara memakai operator khusus seperti increment, decrement, dan ternary.</li>
        <li>Kamu mampu menyusun ekspresi untuk melakukan perhitungan maupun logika dalam programmu.</li>
      </ul>
      <p>Kalau variabel itu kotaknya, maka <b>operator adalah alat</b> untuk mengutak-atik isi kotak tersebut.
      Jadi di bab ini kamu akan belajar berbagai alat penting yang dipakai setiap hari saat ngoding C++.</p>
    `,
  },

  {
    title: "Bab 3.1",
    subtitle: "Operator Aritmatika",
    html: `
      <p>Operator aritmatika dipakai untuk perhitungan angka.</p>
      <ul>
        <li><code>+</code> → penjumlahan</li>
        <li><code>-</code> → pengurangan</li>
        <li><code>*</code> → perkalian</li>
        <li><code>/</code> → pembagian</li>
        <li><code>%</code> → sisa bagi</li>
      </ul>
      <pre><code>int a = 10, b = 3;
cout &lt;&lt; a + b; // 13
cout &lt;&lt; a - b; // 7
cout &lt;&lt; a * b; // 30
cout &lt;&lt; a / b; // 3
cout &lt;&lt; a % b; // 1</code></pre>
      <p>Pembagian bilangan bulat akan membuang desimal. Kalau butuh hasil pecahan, gunakan tipe <code>float</code> atau <code>double</code>.</p>
    `,
  },

  {
    title: "Bab 3.2",
    subtitle: "Operator Relasi / Perbandingan",
    html: `
      <p>Operator ini dipakai untuk membandingkan dua nilai, hasilnya berupa <code>true</code> atau <code>false</code>.</p>
      <ul>
        <li><code>==</code> → sama dengan</li>
        <li><code>!=</code> → tidak sama dengan</li>
        <li><code>&lt;</code> → lebih kecil</li>
        <li><code>&gt;</code> → lebih besar</li>
        <li><code>&lt;=</code> → lebih kecil sama dengan</li>
        <li><code>&gt;=</code> → lebih besar sama dengan</li>
      </ul>
      <pre><code>int x = 5, y = 8;
cout &lt;&lt; (x == y); // false
cout &lt;&lt; (x != y); // true
cout &lt;&lt; (x &lt; y);  // true
cout &lt;&lt; (x &gt;= 5); // true</code></pre>
    `,
  },

  {
    title: "Bab 3.3",
    subtitle: "Operator Logika",
    html: `
      <p>Digunakan untuk menggabungkan ekspresi logika, biasanya dengan tipe <code>bool</code>.</p>
      <ul>
        <li><code>&&</code> → AND (benar jika keduanya benar)</li>
        <li><code>||</code> → OR (benar jika salah satu benar)</li>
        <li><code>!</code> → NOT (membalikkan nilai logika)</li>
      </ul>
      <pre><code>bool a = true, b = false;
cout &lt;&lt; (a && b); // false
cout &lt;&lt; (a || b); // true
cout &lt;&lt; (!a);     // false</code></pre>
    `,
  },

  {
    title: "Bab 3.4",
    subtitle: "Operator Assignment",
    html: `
      <p>Operator assignment dipakai untuk memberi nilai ke variabel. Ada bentuk singkatnya agar lebih praktis.</p>
      <ul>
        <li><code>=</code> → memberi nilai</li>
        <li><code>+=</code> → menambahkan lalu simpan</li>
        <li><code>-=</code> → mengurangi lalu simpan</li>
        <li><code>*=</code> → mengalikan lalu simpan</li>
        <li><code>/=</code> → membagi lalu simpan</li>
        <li><code>%=</code> → modulus lalu simpan</li>
      </ul>
      <pre><code>int n = 10;
n += 5; // sekarang n = 15
n -= 3; // sekarang n = 12
n *= 2; // sekarang n = 24</code></pre>
    `,
  },

  {
    title: "Bab 3.5",
    subtitle: "Operator Increment & Decrement",
    html: `
      <p>Operator ini menambah atau mengurangi nilai variabel sebanyak 1.</p>
      <ul>
        <li><code>++</code> → increment (tambah 1)</li>
        <li><code>--</code> → decrement (kurang 1)</li>
      </ul>
      <pre><code>int x = 5;
x++; // sekarang x = 6
x--; // sekarang x = 5 lagi</code></pre>
      <p>Ada dua bentuk: <b>prefix</b> (<code>++x</code>) dan <b>postfix</b> (<code>x++</code>).
      Bedanya: prefix menambah dulu baru dipakai, postfix dipakai dulu baru ditambah.</p>
    `,
  },

  {
    title: "Bab 3.6",
    subtitle: "Operator Ternary",
    html: `
      <p>Operator ternary adalah cara singkat untuk membuat if-else sederhana.</p>
      <pre><code>int umur = 18;
string status = (umur &gt;= 17) ? "Dewasa" : "Anak-anak";
cout &lt;&lt; status; // Dewasa</code></pre>
      <p>Bentuknya: <code>(kondisi) ? nilai_jika_benar : nilai_jika_salah</code>.</p>
    `,
  },

  {
    title: "Bab 3.7",
    subtitle: "Latihan Bab 3",
    html: `
      <ol>
        <li>Buat program untuk menghitung luas persegi panjang menggunakan operator aritmatika.</li>
        <li>Coba bandingkan dua angka yang dimasukkan pengguna, tampilkan apakah sama, lebih besar, atau lebih kecil.</li>
        <li>Buat program yang mengecek apakah seseorang lulus (nilai >= 70) menggunakan operator logika.</li>
        <li>Pakai operator assignment untuk memperbarui nilai sebuah variabel dalam perhitungan.</li>
        <li>Coba gunakan operator ternary untuk menentukan status "Genap" atau "Ganjil" dari sebuah angka.</li>
      </ol>
    `,
  },
];

let idxCpp3 = 0;

function renderMateriCppBab3() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab3[idxCpp3];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp3 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp3 === materiCppBab3.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp3 > 0) {
    idxCpp3--;
    renderMateriCppBab3();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp3 < materiCppBab3.length - 1) {
    idxCpp3++;
    renderMateriCppBab3();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab3();
