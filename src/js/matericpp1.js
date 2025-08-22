const materiCppBab1 = [
  {
    title: "Bab 1",
    subtitle: "Pengenalan C++ <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami sejarah, karakteristik, dan kegunaan bahasa C++.</li>
        <li>Mengenal struktur dasar program C++ yang baik.</li>
        <li>Mampu menulis, meng-compile, dan menjalankan program sederhana.</li>
        <li>Mengenal konsep dasar input-output dengan <code>cout</code> dan <code>cin</code>.</li>
      </ul>
      <p>Pada bab ini, aku akan mengajak kamu mengenal C++ dari dasar, sehingga kamu bisa langsung
      menulis program pertamamu dengan percaya diri.</p>
    `,
  },

  {
    title: "Bab 1.1",
    subtitle: "Apa itu C++?",
    html: `
      <p>C++ adalah bahasa pemrograman yang dikembangkan oleh <b>Bjarne Stroustrup</b> pada tahun 1980-an
      sebagai pengembangan dari bahasa C. C++ mendukung <i>paradigma prosedural</i> dan juga
      <i>object-oriented programming (OOP)</i>, sehingga fleksibel digunakan untuk berbagai jenis proyek.</p>

      <p>Kamu bisa menemukan C++ digunakan di banyak bidang, misalnya:</p>
      <ul>
        <li>Pengembangan game (Unreal Engine menggunakan C++).</li>
        <li>Sistem operasi dan software performa tinggi.</li>
        <li>Aplikasi desktop, IoT, hingga simulasi ilmiah.</li>
      </ul>

      <p>Dengan mempelajari C++, kamu akan terbiasa berpikir logis, terstruktur,
      dan efisien dalam menulis program.</p>
    `,
  },

  {
    title: "Bab 1.2",
    subtitle: "Struktur Program Dasar C++",
    html: `
      <p>Setiap program C++ memiliki struktur dasar yang mirip. Berikut contoh program paling sederhana:</p>

      <pre><code>#include &lt;iostream&gt;   // Library untuk input-output
using namespace std;   // Agar tidak perlu menulis std:: setiap kali

int main() {
    cout &lt;&lt; "Hello, World!" &lt;&lt; endl; // Output teks
    return 0; // Mengembalikan nilai 0 ke sistem (tanda program sukses)
}</code></pre>

      <p>Penjelasan:</p>
      <ul>
        <li><code>#include &lt;iostream&gt;</code>: memasukkan library input-output standar.</li>
        <li><code>using namespace std;</code>: agar kita bisa langsung pakai <code>cout</code> dan <code>cin</code>.</li>
        <li><code>int main()</code>: fungsi utama tempat program C++ dimulai.</li>
        <li><code>return 0;</code>: menandakan program selesai dengan baik.</li>
      </ul>
    `,
  },

  {
    title: "Bab 1.3",
    subtitle: "Input & Output di C++",
    html: `
      <p>Di C++, untuk menampilkan teks ke layar, kamu menggunakan <code>cout</code>.
      Sedangkan untuk menerima input dari pengguna, kamu menggunakan <code>cin</code>.</p>

      <pre><code>#include &lt;iostream&gt;
using namespace std;

int main() {
    string nama;
    int umur;

    cout &lt;&lt; "Masukkan nama kamu: ";
    cin &gt;&gt; nama;

    cout &lt;&lt; "Masukkan umur kamu: ";
    cin &gt;&gt; umur;

    cout &lt;&lt; "Halo " &lt;&lt; nama &lt;&lt; ", umur kamu " &lt;&lt; umur &lt;&lt; " tahun." &lt;&lt; endl;

    return 0;
}</code></pre>

      <p>Dengan program ini, kamu bisa berinteraksi dengan pengguna secara langsung.</p>
    `,
  },

  {
    title: "Bab 1.4",
    subtitle: "Latihan Bab 1",
    html: `
      <p>Untuk mengasah pemahamanmu, coba kerjakan latihan berikut:</p>
      <ol>
        <li>Tulis program untuk menampilkan nama lengkapmu dengan <code>cout</code>.</li>
        <li>Buat program yang meminta input umur, lalu menghitung tahun lahirmu (asumsikan tahun sekarang 2025).</li>
        <li>Modifikasi program agar menampilkan pesan personal, misalnya "Halo, aku [nama], lahir tahun [tahun]".</li>
        <li>Tambahkan komentar di setiap baris program agar lebih mudah dipahami.</li>
      </ol>
      <p><i>Tips:</i> Jangan takut salah, error itu bagian dari belajar. 😉</p>
    `,
  },
];

let idxCpp1 = 0;

function renderMateriCpp1() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab1[idxCpp1];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp1 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp1 === materiCppBab1.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp1 > 0) {
    idxCpp1--;
    renderMateriCpp1();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp1 < materiCppBab1.length - 1) {
    idxCpp1++;
    renderMateriCpp1();
  }
};

// Inisialisasi pertama kali
renderMateriCpp1();
