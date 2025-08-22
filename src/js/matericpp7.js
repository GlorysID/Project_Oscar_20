const materiCppBab7 = [
  {
    title: "Bab 7",
    subtitle: "Array & String <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu bisa bikin dan pakai array untuk nyimpan banyak data sekaligus.</li>
        <li>Kamu ngerti cara akses array pakai index.</li>
        <li>Kamu bisa bikin array 2 dimensi (kayak tabel).</li>
        <li>Kamu bisa looping isi array dengan for/while.</li>
        <li>Kamu bisa pakai fungsi dasar string kayak <code>length()</code>, <code>substr()</code>, <code>find()</code>.</li>
        <li>Kamu bisa bikin program sederhana yang pakai array & string.</li>
      </ul>

      <p>Intinya, array itu kayak rak sepatu: ada banyak kotak yang tiap kotaknya bisa nyimpen data. 
      Sedangkan string itu kayak kalimat atau kata, yang sebenernya juga array tapi isinya huruf.</p>
    `,
  },

  {
    title: "Bab 7.1",
    subtitle: "Membuat & Mengakses Array",
    html: `
      <p>Array itu tempat nyimpen banyak data dengan tipe yang sama. 
      Kalau variabel biasa cuma nyimpen 1 nilai, array bisa banyak.</p>

      <pre><code>int angka[5] = {10, 20, 30, 40, 50};

int main() {
    cout &lt;&lt; angka[0]; // akses elemen pertama → 10
    cout &lt;&lt; angka[3]; // akses elemen ke-4 → 40
    return 0;
}</code></pre>

      <p>Index array dimulai dari 0. Jadi elemen ke-1 ada di index 0, elemen ke-2 ada di index 1, dst.</p>
    `,
  },

  {
    title: "Bab 7.2",
    subtitle: "Array Multidimensi",
    html: `
      <p>Array multidimensi itu kayak tabel. Contoh 2 dimensi:</p>

      <pre><code>int matriks[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

int main() {
    cout &lt;&lt; matriks[0][1]; // baris 1 kolom 2 → 2
    cout &lt;&lt; matriks[1][2]; // baris 2 kolom 3 → 6
    return 0;
}</code></pre>

      <p>Pakai baris dan kolom buat akses data. Index tetap mulai dari 0.</p>
    `,
  },

  {
    title: "Bab 7.3",
    subtitle: "Iterasi Array dengan Loop",
    html: `
      <p>Daripada akses manual satu-satu, mending pakai loop buat baca semua elemen array.</p>

      <pre><code>int angka[5] = {10, 20, 30, 40, 50};

int main() {
    for (int i = 0; i &lt; 5; i++) {
        cout &lt;&lt; angka[i] &lt;&lt; " ";
    }
    return 0;
}</code></pre>

      <p>Output: <code>10 20 30 40 50</code></p>
    `,
  },

  {
    title: "Bab 7.4",
    subtitle: "Manipulasi String Dasar",
    html: `
      <p>String di C++ bisa dianggap array karakter. Ada method bawaan buat olah string.</p>

      <pre><code>#include &lt;string&gt;

int main() {
    string teks = "Halo Dunia";

    cout &lt;&lt; teks.length();       // panjang string → 10
    cout &lt;&lt; teks.substr(0, 4);   // ambil substring → "Halo"
    cout &lt;&lt; teks.find("Dunia");  // cari kata → index 5
    return 0;
}</code></pre>

      <p>Metode <code>length()</code> buat panjang string, <code>substr()</code> buat ambil potongan, 
      <code>find()</code> buat cari posisi kata/karakter.</p>
    `,
  },

  {
    title: "Bab 7.5",
    subtitle: "Studi Kasus: Program Pencarian Nilai",
    html: `
      <p>Sekarang kita coba studi kasus: cari nilai tertentu di dalam array.</p>

      <pre><code>int main() {
    int nilai[5] = {70, 85, 90, 60, 100};
    int cari;
    bool ketemu = false;

    cout &lt;&lt; "Masukkan nilai yang dicari: ";
    cin &gt;&gt; cari;

    for (int i = 0; i &lt; 5; i++) {
        if (nilai[i] == cari) {
            cout &lt;&lt; "Nilai ditemukan di index ke-" &lt;&lt; i &lt;&lt; endl;
            ketemu = true;
            break;
        }
    }

    if (!ketemu) {
        cout &lt;&lt; "Nilai tidak ditemukan" &lt;&lt; endl;
    }

    return 0;
}</code></pre>

      <p>Dengan looping, kamu bisa cek setiap elemen array buat nyari data yang cocok. 
      Ini dasar dari algoritma pencarian (searching).</p>
    `,
  },

  {
    title: "Bab 7.6",
    subtitle: "Latihan Bab 7",
    html: `
      <ol>
        <li>Buat array berisi 10 angka, lalu cetak semua angkanya.</li>
        <li>Buat array 2 dimensi 3x3, lalu cetak dalam bentuk tabel.</li>
        <li>Buat program yang minta input nama, lalu tampilkan panjang nama kamu.</li>
        <li>Coba ambil 3 huruf pertama dari nama kamu pakai <code>substr()</code>.</li>
        <li>Buat program pencarian kata dalam sebuah string.</li>
      </ol>
    `,
  },
];

let idxCpp7 = 0;

function renderMateriCppBab7() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab7[idxCpp7];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp7 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp7 === materiCppBab7.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp7 > 0) {
    idxCpp7--;
    renderMateriCppBab7();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp7 < materiCppBab7.length - 1) {
    idxCpp7++;
    renderMateriCppBab7();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab7();
