const materiCppBab4 = [
  {
    title: "Bab 4",
    subtitle: "Struktur Kontrol (Percabangan) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu memahami bagaimana program bisa mengambil keputusan.</li>
        <li>Kamu bisa menggunakan if-else untuk kondisi sederhana maupun bercabang.</li>
        <li>Kamu mengenal switch-case untuk pilihan yang lebih banyak.</li>
        <li>Kamu terbiasa memakai operator ternary sebagai jalan pintas.</li>
        <li>Kamu bisa membuat studi kasus seperti program cek kelulusan & grade nilai.</li>
      </ul>
      <p>Kalau di bab sebelumnya kita belajar soal <b>operator dan ekspresi</b>, sekarang kita masuk ke bagian seru:
      bagaimana caranya program bisa <b>mengambil keputusan</b>. Jadi bukan cuma jalan lurus aja, 
      tapi bisa belok kiri, kanan, atau bahkan muter balik, tergantung situasi.</p>
    `,
  },

  {
    title: "Bab 4.1",
    subtitle: "If, Else If, dan Else",
    html: `
      <p>Struktur <code>if</code> itu seperti pertanyaan "kalau... maka...". 
      Kalau kondisi benar, maka jalankan perintah tertentu. Kalau tidak, bisa ada alternatifnya.</p>

      <pre><code>int umur = 18;

if (umur &gt;= 17) {
    cout &lt;&lt; "Kamu sudah boleh buat KTP";
} else {
    cout &lt;&lt; "Kamu belum cukup umur";
}</code></pre>

      <p>Kamu juga bisa pakai <b>else if</b> kalau ada beberapa kondisi yang perlu dicek:</p>

      <pre><code>int nilai = 80;

if (nilai &gt;= 90) {
    cout &lt;&lt; "Nilaimu A";
} else if (nilai &gt;= 75) {
    cout &lt;&lt; "Nilaimu B";
} else if (nilai &gt;= 60) {
    cout &lt;&lt; "Nilaimu C";
} else {
    cout &lt;&lt; "Nilaimu D";
}</code></pre>
    `,
  },

  {
    title: "Bab 4.2",
    subtitle: "Nested If (If di dalam If)",
    html: `
      <p>Kadang kamu butuh cek kondisi di dalam kondisi lain. Nah, ini namanya <b>nested if</b>.</p>

      <pre><code>int umur = 20;
bool punyaSIM = true;

if (umur &gt;= 17) {
    if (punyaSIM) {
        cout &lt;&lt; "Kamu boleh mengemudi";
    } else {
        cout &lt;&lt; "Kamu harus buat SIM dulu";
    }
} else {
    cout &lt;&lt; "Kamu belum cukup umur untuk mengemudi";
}</code></pre>

      <p>Hati-hati kalau nested terlalu banyak, kodenya bisa jadi susah dibaca. 
      Biasanya kalau kondisinya kompleks, lebih baik gunakan <code>switch</code> atau logika lain.</p>
    `,
  },

  {
    title: "Bab 4.3",
    subtitle: "Switch-case",
    html: `
      <p><code>switch</code> itu cocok kalau kamu punya banyak pilihan tapi berdasarkan satu variabel saja. 
      Misalnya kamu mau bikin menu pilihan:</p>

      <pre><code>int pilihan;
cout &lt;&lt; "Menu Makanan:\\n";
cout &lt;&lt; "1. Nasi Goreng\\n";
cout &lt;&lt; "2. Mie Goreng\\n";
cout &lt;&lt; "3. Soto Ayam\\n";
cout &lt;&lt; "Pilih menu (1-3): ";
cin &gt;&gt; pilihan;

switch (pilihan) {
    case 1:
        cout &lt;&lt; "Kamu memilih Nasi Goreng";
        break;
    case 2:
        cout &lt;&lt; "Kamu memilih Mie Goreng";
        break;
    case 3:
        cout &lt;&lt; "Kamu memilih Soto Ayam";
        break;
    default:
        cout &lt;&lt; "Pilihan tidak valid";
}</code></pre>

      <p>Setiap <code>case</code> butuh <code>break</code> supaya program tidak lanjut ke case berikutnya.</p>
    `,
  },

  {
    title: "Bab 4.4",
    subtitle: "Ternary Operator (Lebih Lanjut)",
    html: `
      <p>Kalau percabangan cuma sederhana (hanya dua pilihan), kamu bisa pakai operator ternary <code>? :</code>.
      Bentuknya singkat tapi tetap jelas.</p>

      <pre><code>int umur = 20;
string status = (umur &gt;= 17) ? "Dewasa" : "Anak-anak";
cout &lt;&lt; status; // hasil: Dewasa</code></pre>

      <p>Ternary ini sering dipakai kalau kamu butuh hasil cepat, tapi jangan dipakai berlebihan
      karena bisa bikin kode susah dibaca.</p>
    `,
  },

  {
    title: "Bab 4.5",
    subtitle: "Studi Kasus: Cek Kelulusan & Grade Nilai",
    html: `
      <p>Sekarang ayo gabungkan semua yang sudah kita pelajari. 
      Misalnya kita mau bikin program sederhana untuk cek kelulusan dan grade nilai.</p>

      <pre><code>int nilai;
cout &lt;&lt; "Masukkan nilai ujian: ";
cin &gt;&gt; nilai;

if (nilai &gt;= 60) {
    cout &lt;&lt; "Kamu LULUS dengan grade: ";

    if (nilai &gt;= 90) {
        cout &lt;&lt; "A";
    } else if (nilai &gt;= 75) {
        cout &lt;&lt; "B";
    } else {
        cout &lt;&lt; "C";
    }
} else {
    cout &lt;&lt; "Kamu TIDAK LULUS dengan grade: D";
}</code></pre>

      <p>Dengan struktur kontrol, programmu jadi <b>lebih pintar</b> karena bisa menyesuaikan jalannya
      sesuai kondisi yang ada.</p>
    `,
  },

  {
    title: "Bab 4.6",
    subtitle: "Latihan Bab 4",
    html: `
      <ol>
        <li>Buat program untuk mengecek apakah sebuah angka ganjil atau genap.</li>
        <li>Buat program menu sederhana dengan switch-case (contoh: menu minuman).</li>
        <li>Pakai operator ternary untuk menentukan apakah seorang pengguna sudah dewasa (>=17 tahun).</li>
        <li>Kembangkan studi kasus cek kelulusan agar ada grade A, B, C, D, dan E.</li>
      </ol>
      <p>Latihan ini akan membuat kamu semakin terbiasa dengan percabangan di C++.</p>
    `,
  },
];

let idxCpp4 = 0;

function renderMateriCppBab4() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab4[idxCpp4];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp4 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp4 === materiCppBab4.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp4 > 0) {
    idxCpp4--;
    renderMateriCppBab4();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp4 < materiCppBab4.length - 1) {
    idxCpp4++;
    renderMateriCppBab4();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab4();
