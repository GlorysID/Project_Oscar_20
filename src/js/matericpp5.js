const materiCppBab5 = [
  {
    title: "Bab 5",
    subtitle: "Perulangan (Looping) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu bisa memahami kenapa looping itu penting dalam pemrograman.</li>
        <li>Kamu bisa pakai for, while, dan do...while dengan percaya diri.</li>
        <li>Kamu paham cara menghentikan perulangan dengan <code>break</code> dan <code>continue</code>.</li>
        <li>Kamu bisa bikin nested loop untuk kasus yang lebih kompleks.</li>
        <li>Kamu bisa mengerjakan studi kasus seperti tabel perkalian atau pola bintang.</li>
      </ul>

      <p>Bayangin kamu disuruh nulis "Aku cinta C++" sebanyak 100 kali. Kalau pakai cara manual, 
      kamu bakal ngetik 100 baris kode <code>cout</code>. Tapi dengan perulangan, cukup 3-4 baris, 
      komputer yang akan ngulangin buat kamu. Jadi, looping itu kayak <b>mesin pengulang otomatis</b>.</p>
    `,
  },

  {
    title: "Bab 5.1",
    subtitle: "For Loop",
    html: `
      <p><code>for</code> digunakan kalau kamu tahu persis berapa kali perulangan dilakukan.
      Bentuknya ada 3 bagian: inisialisasi, kondisi, dan increment/decrement.</p>

      <pre><code>for (int i = 1; i &lt;= 5; i++) {
    cout &lt;&lt; "Perulangan ke-" &lt;&lt; i &lt;&lt; endl;
}</code></pre>

      <p>Logika di atas: mulai dari <code>i = 1</code>, jalankan kalau <code>i &lt;= 5</code>, 
      lalu tiap putaran <code>i</code> bertambah 1. Jadi hasilnya tampil 5 baris.</p>

      <p>Kamu pakai <code>for</code> kalau jumlah perulangannya fix atau bisa diprediksi.</p>
    `,
  },

  {
    title: "Bab 5.2",
    subtitle: "While Loop",
    html: `
      <p><code>while</code> digunakan kalau kamu nggak tahu pasti berapa kali harus ngulang, 
      tapi tahu syarat berhentinya.</p>

      <pre><code>int i = 1;

while (i &lt;= 5) {
    cout &lt;&lt; "Perulangan ke-" &lt;&lt; i &lt;&lt; endl;
    i++;
}</code></pre>

      <p>Di sini, selama kondisi <code>i &lt;= 5</code> bernilai benar, perulangan jalan terus.
      Kalau kondisinya salah, loop berhenti. Jadi <b>syarat</b> adalah kuncinya.</p>
    `,
  },

  {
    title: "Bab 5.3",
    subtitle: "Do...While Loop",
    html: `
      <p><code>do...while</code> hampir sama dengan <code>while</code>, 
      tapi bedanya: perintah di dalamnya dijalankan dulu minimal 1 kali, 
      baru setelah itu dicek kondisinya.</p>

      <pre><code>int i = 1;

do {
    cout &lt;&lt; "Perulangan ke-" &lt;&lt; i &lt;&lt; endl;
    i++;
} while (i &lt;= 5);</code></pre>

      <p>Kalau pakai <code>do...while</code>, meskipun kondisi salah dari awal, 
      perintah tetap dijalankan sekali.</p>
    `,
  },

  {
    title: "Bab 5.4",
    subtitle: "Break & Continue",
    html: `
      <p><b>Break</b> dipakai buat menghentikan loop secara paksa, 
      sedangkan <b>continue</b> dipakai buat melewati 1 putaran dan lanjut ke putaran berikutnya.</p>

      <pre><code>// Contoh break
for (int i = 1; i &lt;= 10; i++) {
    if (i == 6) break; // hentikan loop kalau i == 6
    cout &lt;&lt; i &lt;&lt; " ";
}

// Contoh continue
for (int i = 1; i &lt;= 10; i++) {
    if (i % 2 == 0) continue; // lewati angka genap
    cout &lt;&lt; i &lt;&lt; " ";
}</code></pre>

      <p>Gunakan <code>break</code> kalau kamu butuh stop total, 
      gunakan <code>continue</code> kalau hanya mau skip kondisi tertentu.</p>
    `,
  },

  {
    title: "Bab 5.5",
    subtitle: "Nested Loop (Perulangan Bersarang)",
    html: `
      <p>Nested loop itu artinya loop di dalam loop. Ini sering dipakai buat kasus 
      yang melibatkan tabel, matriks, atau pola.</p>

      <pre><code>// Contoh tabel perkalian
for (int i = 1; i &lt;= 3; i++) {
    for (int j = 1; j &lt;= 3; j++) {
        cout &lt;&lt; i * j &lt;&lt; " ";
    }
    cout &lt;&lt; endl;
}</code></pre>

      <p>Pada contoh di atas, setiap 1 perulangan <code>i</code>, 
      perulangan <code>j</code> akan berjalan penuh. Jadi hasilnya seperti tabel.</p>
    `,
  },

  {
    title: "Bab 5.6",
    subtitle: "Studi Kasus Looping",
    html: `
      <p>Sekarang ayo praktek langsung dengan beberapa kasus nyata:</p>

      <b>1. Tabel Perkalian</b>
      <pre><code>for (int i = 1; i &lt;= 10; i++) {
    for (int j = 1; j &lt;= 10; j++) {
        cout &lt;&lt; i * j &lt;&lt; "\\t";
    }
    cout &lt;&lt; endl;
}</code></pre>

      <b>2. Pola Segitiga Bintang</b>
      <pre><code>for (int i = 1; i &lt;= 5; i++) {
    for (int j = 1; j &lt;= i; j++) {
        cout &lt;&lt; "* ";
    }
    cout &lt;&lt; endl;
}</code></pre>

      <b>3. Pola Segitiga Terbalik</b>
      <pre><code>for (int i = 5; i &gt;= 1; i--) {
    for (int j = 1; j &lt;= i; j++) {
        cout &lt;&lt; "* ";
    }
    cout &lt;&lt; endl;
}</code></pre>

      <p>Dari sini, kamu bisa lihat kalau nested loop itu bisa dipakai buat banyak hal,
      bahkan bikin pola seni dari bintang sekalipun.</p>
    `,
  },

  {
    title: "Bab 5.7",
    subtitle: "Latihan Bab 5",
    html: `
      <ol>
        <li>Buat program yang menampilkan semua angka ganjil dari 1 sampai 50.</li>
        <li>Buat program hitung mundur dari 10 ke 1.</li>
        <li>Buat pola segitiga siku-siku dari bintang dengan tinggi sesuai input pengguna.</li>
        <li>Buat program yang hanya menampilkan angka kelipatan 3 dari 1 sampai 30.</li>
        <li>Kembangkan tabel perkalian agar pengguna bisa pilih ukuran tabel (misalnya 1-12).</li>
      </ol>
    `,
  },
];

let idxCpp5 = 0;

function renderMateriCppBab5() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab5[idxCpp5];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp5 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp5 === materiCppBab5.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp5 > 0) {
    idxCpp5--;
    renderMateriCppBab5();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp5 < materiCppBab5.length - 1) {
    idxCpp5++;
    renderMateriCppBab5();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab5();
