const materiPyBab3 = [
  {
    title: "Bab 3",
    subtitle: "Struktur Kontrol <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami bagaimana program dapat mengambil keputusan.</li>
        <li>Mempelajari penggunaan if, elif, dan else.</li>
        <li>Mengenal nested if dan ternary operator untuk kondisi lebih kompleks.</li>
      </ul>
      <p>Pada bab ini, program tidak hanya sekadar menjalankan perintah secara berurutan,  
      tetapi juga mampu memilih jalannya sendiri berdasarkan kondisi tertentu.  
      Dengan kata lain, program sudah mulai memiliki kemampuan "logika dasar".</p>
    `,
  },

  {
    title: "Bab 3.1",
    subtitle: "If, Elif, Else",
    html: `
      <p>Percabangan <code>if</code> digunakan ketika program harus memilih jalur  
      berdasarkan kondisi tertentu.</p>

      <pre><code># Contoh if, elif, else
umur = 18

if umur >= 18:
    print("Anda sudah dewasa.")
elif umur >= 13:
    print("Anda masih remaja.")
else:
    print("Anda masih anak-anak.")
</code></pre>

      <p>Pengecekan dilakukan dari atas ke bawah.  
      Begitu satu kondisi terpenuhi, maka blok kode tersebut dijalankan  
      dan kondisi di bawahnya akan dilewati.</p>
    `,
  },

  {
    title: "Bab 3.2",
    subtitle: "Nested If",
    html: `
      <p>Nested if adalah kondisi <code>if</code> di dalam <code>if</code> lain.  
      Hal ini digunakan ketika diperlukan pemeriksaan tambahan setelah syarat utama terpenuhi.</p>

      <pre><code># Nested if
nilai = 85

if nilai >= 70:
    print("Lulus.")
    if nilai >= 90:
        print("Nilai Anda A")
    else:
        print("Nilai Anda B")
else:
    print("Tidak lulus.")
</code></pre>

      <p>Dengan nested if, keputusan bisa lebih terperinci dan fleksibel.</p>
    `,
  },

  {
    title: "Bab 3.3",
    subtitle: "Ternary Operator Sederhana",
    html: `
      <p>Ternary operator adalah bentuk singkat dari <code>if-else</code>.  
      Biasanya digunakan untuk kondisi yang sederhana.</p>

      <pre><code># Ternary operator
umur = 20
status = "Dewasa" if umur >= 18 else "Belum Dewasa"

print(status)
</code></pre>

      <p>Penggunaan ternary operator membuat kode lebih ringkas dan mudah dibaca.</p>
    `,
  },

  {
    title: "Bab 3.4",
    subtitle: "Latihan Bab 3",
    html: `
      <ol>
        <li>Buat program yang meminta input usia, lalu cetak: "Anak", "Remaja", atau "Dewasa".</li>
        <li>Buat nested if untuk mengecek nilai ujian: jika >= 75 → "Lulus", dan jika >= 90 → "Lulus dengan nilai A".</li>
        <li>Coba gunakan ternary operator untuk menentukan variabel <code>status</code> → "Genap" jika angka genap, "Ganjil" jika angka ganjil.</li>
      </ol>
      <p>Setelah menyelesaikan latihan ini, Anda akan memahami bagaimana program  
      dapat membuat keputusan berdasarkan kondisi tertentu.</p>
    `,
  },
];

let idxPy3 = 0;

function renderMateriPy3() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab3[idxPy3];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy3 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy3 === materiPyBab3.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy3 > 0) {
    idxPy3--;
    renderMateriPy3();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy3 < materiPyBab3.length - 1) {
    idxPy3++;
    renderMateriPy3();
  }
};

// Inisialisasi pertama kali
renderMateriPy3();
