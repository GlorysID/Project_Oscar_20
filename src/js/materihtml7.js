const materiHTMLBab7 = [
  {
    title: "Bab 7",
    subtitle: "Formulir di HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami fungsi formulir di HTML.</li>
        <li>Mengenal elemen-elemen form seperti input, textarea, select, checkbox, radio button, dan button.</li>
        <li>Menggunakan atribut penting pada form.</li>
        <li>Membuat formulir sederhana dengan validasi dasar.</li>
      </ul>
      <p>Formulir adalah sarana untuk mengumpulkan data dari pengguna 👩‍💻👨‍💻.  
      Misalnya: form login, pendaftaran, survey, dan pencarian.</p>
    `,
  },
  {
    title: "Bab 7.1",
    subtitle: "Struktur Dasar Formulir",
    html: `
      <p>Struktur form selalu dibungkus dengan tag <code>&lt;form&gt;</code>.</p>
      <pre><code>&lt;form action="proses.php" method="post"&gt;
  &lt;label&gt;Nama:&lt;/label&gt;
  &lt;input type="text" name="nama"&gt;
  &lt;input type="submit" value="Kirim"&gt;
&lt;/form&gt;</code></pre>
      <p>Penjelasan atribut penting:</p>
      <ul>
        <li><code>action</code> → halaman tujuan setelah data dikirim.</li>
        <li><code>method</code> → cara pengiriman data: <b>GET</b> (terlihat di URL) atau <b>POST</b> (lebih aman).</li>
        <li><code>name</code> → identitas input, dipakai untuk memproses data di backend.</li>
      </ul>
    `,
  },
  {
    title: "Bab 7.2",
    subtitle: "Jenis-jenis Input pada Form",
    html: `
      <p>HTML menyediakan banyak jenis input:</p>
      <ul>
        <li><code>type="text"</code> → input teks biasa</li>
        <li><code>type="password"</code> → input password (disamarkan)</li>
        <li><code>type="email"</code> → input email (validasi otomatis)</li>
        <li><code>type="number"</code> → input angka</li>
        <li><code>type="date"</code> → input tanggal</li>
        <li><code>type="file"</code> → upload file</li>
        <li><code>type="checkbox"</code> → pilihan ganda</li>
        <li><code>type="radio"</code> → pilihan tunggal</li>
        <li><code>type="submit"</code> → tombol kirim</li>
      </ul>
      <pre><code>&lt;form&gt;
  Nama: &lt;input type="text"&gt;&lt;br&gt;
  Password: &lt;input type="password"&gt;&lt;br&gt;
  Email: &lt;input type="email"&gt;&lt;br&gt;
  Umur: &lt;input type="number"&gt;&lt;br&gt;
  Tanggal Lahir: &lt;input type="date"&gt;&lt;br&gt;
  Upload Foto: &lt;input type="file"&gt;&lt;br&gt;
  Hobi: 
  &lt;input type="checkbox" name="hobi" value="membaca"&gt; Membaca
  &lt;input type="checkbox" name="hobi" value="olahraga"&gt; Olahraga &lt;br&gt;
  Jenis Kelamin: 
  &lt;input type="radio" name="jk" value="L"&gt; Laki-laki
  &lt;input type="radio" name="jk" value="P"&gt; Perempuan &lt;br&gt;
  &lt;input type="submit" value="Kirim"&gt;
&lt;/form&gt;</code></pre>
    `,
  },
  {
    title: "Bab 7.3",
    subtitle: "Textarea & Select",
    html: `
      <p><b>Textarea</b> digunakan untuk input teks panjang (misalnya komentar).</p>
      <pre><code>&lt;textarea name="pesan" rows="4" cols="30"&gt;&lt;/textarea&gt;</code></pre>

      <p><b>Select</b> digunakan untuk dropdown pilihan.</p>
      <pre><code>&lt;select name="kota"&gt;
  &lt;option value="jakarta"&gt;Jakarta&lt;/option&gt;
  &lt;option value="bandung"&gt;Bandung&lt;/option&gt;
  &lt;option value="surabaya"&gt;Surabaya&lt;/option&gt;
&lt;/select&gt;</code></pre>
    `,
  },
  {
    title: "Bab 7.4",
    subtitle: "Atribut Penting pada Input",
    html: `
      <ul>
        <li><code>placeholder</code> → teks bayangan sebagai petunjuk.</li>
        <li><code>required</code> → wajib diisi.</li>
        <li><code>maxlength</code> → batas maksimal karakter.</li>
        <li><code>value</code> → nilai default.</li>
        <li><code>disabled</code> → input tidak bisa diubah.</li>
        <li><code>readonly</code> → hanya bisa dibaca.</li>
      </ul>
      <pre><code>&lt;input type="text" placeholder="Masukkan nama" required&gt;</code></pre>
    `,
  },
  {
    title: "Bab 7.5",
    subtitle: "Grouping dengan Fieldset & Legend",
    html: `
      <p>Untuk mengelompokkan input agar lebih rapi, gunakan <code>&lt;fieldset&gt;</code> dan <code>&lt;legend&gt;</code>.</p>
      <pre><code>&lt;form&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Data Pribadi&lt;/legend&gt;
    Nama: &lt;input type="text"&gt;&lt;br&gt;
    Umur: &lt;input type="number"&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code></pre>
    `,
  },
  {
    title: "Bab 7.6",
    subtitle: "Tombol (Button) di Form",
    html: `
      <p>Tombol di form bisa berupa:</p>
      <ul>
        <li><code>&lt;input type="submit"&gt;</code> → kirim data</li>
        <li><code>&lt;input type="reset"&gt;</code> → reset form</li>
        <li><code>&lt;button&gt;</code> → tombol fleksibel (bisa ditambah icon/JS)</li>
      </ul>
      <pre><code>&lt;form&gt;
  &lt;input type="submit" value="Kirim"&gt;
  &lt;input type="reset" value="Hapus"&gt;
  &lt;button type="button" onclick="alert('Halo!')"&gt;Klik Aku&lt;/button&gt;
&lt;/form&gt;</code></pre>
    `,
  },
  {
    title: "Bab 7.7",
    subtitle: "Contoh Formulir Lengkap",
    html: `
      <pre><code>&lt;form action="proses.php" method="post"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Form Pendaftaran&lt;/legend&gt;

    Nama Lengkap: 
    &lt;input type="text" name="nama" placeholder="Isi nama lengkap" required&gt;&lt;br&gt;&lt;br&gt;

    Email: 
    &lt;input type="email" name="email" required&gt;&lt;br&gt;&lt;br&gt;

    Password: 
    &lt;input type="password" name="pass" minlength="6" required&gt;&lt;br&gt;&lt;br&gt;

    Jenis Kelamin: 
    &lt;input type="radio" name="jk" value="L"&gt; Laki-laki
    &lt;input type="radio" name="jk" value="P"&gt; Perempuan&lt;br&gt;&lt;br&gt;

    Kota Asal:
    &lt;select name="kota"&gt;
      &lt;option value="jakarta"&gt;Jakarta&lt;/option&gt;
      &lt;option value="bandung"&gt;Bandung&lt;/option&gt;
      &lt;option value="surabaya"&gt;Surabaya&lt;/option&gt;
    &lt;/select&gt;&lt;br&gt;&lt;br&gt;

    Alamat: 
    &lt;textarea name="alamat" rows="3" cols="30"&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;

    &lt;input type="submit" value="Daftar"&gt;
    &lt;input type="reset" value="Reset"&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;</code></pre>
    `,
  },
  {
    title: "Bab 7.8",
    subtitle: "Latihan Mini Bab 7",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat form login berisi username & password.</li>
        <li>Buat form komentar dengan textarea dan input email.</li>
        <li>Buat form registrasi lengkap dengan checkbox hobi, radio button jenis kelamin, dan dropdown kota.</li>
      </ol>
      <p>🔥 Tips: Gunakan atribut <code>required</code> supaya form tidak bisa dikirim kosong.</p>
    `,
  },
];

let idx7 = 0;

function renderMateri7() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab7[idx7];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx7 === 0;
  document.getElementById("nextBtn").disabled =
    idx7 === materiHTMLBab7.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx7 > 0) {
    idx7--;
    renderMateri7();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx7 < materiHTMLBab7.length - 1) {
    idx7++;
    renderMateri7();
  }
};

// Inisialisasi pertama kali
renderMateri7();
