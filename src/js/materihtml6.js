const materiHTMLBab6 = [
  {
    title: "Bab 6",
    subtitle: "Tabel di HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami struktur tabel di HTML.</li>
        <li>Menggunakan tag <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code>, dan <code>&lt;td&gt;</code>.</li>
        <li>Mempelajari atribut penting pada tabel.</li>
        <li>Membuat tabel dengan border, penggabungan sel, dan header.</li>
      </ul>
      <p>Tabel digunakan untuk menampilkan data dalam bentuk baris dan kolom 📊.</p>
    `,
  },
  {
    title: "Bab 6.1",
    subtitle: "Struktur Dasar Tabel",
    html: `
      <p>Struktur dasar tabel terdiri dari:</p>
      <ul>
        <li><code>&lt;table&gt;</code> → elemen utama tabel</li>
        <li><code>&lt;tr&gt;</code> → table row (baris)</li>
        <li><code>&lt;th&gt;</code> → table header (judul kolom)</li>
        <li><code>&lt;td&gt;</code> → table data (isi sel)</li>
      </ul>
      <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th&gt;Nama&lt;/th&gt;
    &lt;th&gt;Umur&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Budi&lt;/td&gt;
    &lt;td&gt;20&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
      <p>Hasil:</p>
      <table border="1">
        <tr>
          <th>Nama</th>
          <th>Umur</th>
        </tr>
        <tr>
          <td>Budi</td>
          <td>20</td>
        </tr>
      </table>
    `,
  },
  {
    title: "Bab 6.2",
    subtitle: "Atribut pada Tabel",
    html: `
      <p>Atribut yang sering digunakan pada tabel:</p>
      <ul>
        <li><code>border</code> → menambahkan garis pada tabel.</li>
        <li><code>cellpadding</code> → jarak dalam sel.</li>
        <li><code>cellspacing</code> → jarak antar sel.</li>
        <li><code>width</code> → lebar tabel atau kolom.</li>
      </ul>
      <pre><code>&lt;table border="1" cellpadding="5" cellspacing="0" width="300"&gt;
  &lt;tr&gt;
    &lt;th&gt;Produk&lt;/th&gt;
    &lt;th&gt;Harga&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Keyboard&lt;/td&gt;
    &lt;td&gt;150.000&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
    `,
  },
  {
    title: "Bab 6.3",
    subtitle: "Menggabungkan Sel (Rowspan & Colspan)",
    html: `
      <p>Kita bisa menggabungkan beberapa sel menggunakan <code>rowspan</code> dan <code>colspan</code>.</p>
      <pre><code>&lt;table border="1"&gt;
  &lt;tr&gt;
    &lt;th rowspan="2"&gt;Nama&lt;/th&gt;
    &lt;th colspan="2"&gt;Nilai&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;th&gt;Math&lt;/th&gt;
    &lt;th&gt;Science&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Ani&lt;/td&gt;
    &lt;td&gt;90&lt;/td&gt;
    &lt;td&gt;85&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
      <p>Hasil:</p>
      <table border="1">
        <tr>
          <th rowspan="2">Nama</th>
          <th colspan="2">Nilai</th>
        </tr>
        <tr>
          <th>Math</th>
          <th>Science</th>
        </tr>
        <tr>
          <td>Ani</td>
          <td>90</td>
          <td>85</td>
        </tr>
      </table>
    `,
  },
  {
    title: "Bab 6.4",
    subtitle: "Header, Body, dan Footer pada Tabel",
    html: `
      <p>Tabel bisa dibagi menjadi 3 bagian:</p>
      <ul>
        <li><code>&lt;thead&gt;</code> → bagian header tabel</li>
        <li><code>&lt;tbody&gt;</code> → isi utama tabel</li>
        <li><code>&lt;tfoot&gt;</code> → bagian footer tabel</li>
      </ul>
      <pre><code>&lt;table border="1"&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Produk&lt;/th&gt;
      &lt;th&gt;Harga&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Mouse&lt;/td&gt;
      &lt;td&gt;100.000&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td colspan="2"&gt;Total Data: 1&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
&lt;/table&gt;</code></pre>
    `,
  },
  {
    title: "Bab 6.5",
    subtitle: "Latihan Mini Bab 6",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat tabel daftar siswa berisi: Nama, Umur, Alamat.</li>
        <li>Buat tabel nilai pelajaran dengan penggabungan sel (colspan / rowspan).</li>
        <li>Tambahkan <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, dan <code>&lt;tfoot&gt;</code> pada tabel.</li>
      </ol>
      <p>Dengan tabel, kamu bisa menampilkan data lebih terstruktur dan mudah dibaca ✅.</p>
    `,
  },
];

let idx6 = 0;

function renderMateri6() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab6[idx6];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx6 === 0;
  document.getElementById("nextBtn").disabled =
    idx6 === materiHTMLBab6.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx6 > 0) {
    idx6--;
    renderMateri6();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx6 < materiHTMLBab6.length - 1) {
    idx6++;
    renderMateri6();
  }
};

// Inisialisasi pertama kali
renderMateri6();
