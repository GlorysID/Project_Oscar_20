const materiPyBab8 = [
  {
    title: "Bab 8",
    subtitle: "File Handling & Error Handling <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami cara membuka, membaca, dan menulis file dengan Python.</li>
        <li>Belajar mode file: <code>r</code>, <code>w</code>, <code>a</code>.</li>
        <li>Menangani error menggunakan <b>try-except-finally</b>.</li>
        <li>Mencegah program berhenti tiba-tiba karena kesalahan.</li>
      </ul>
      <p>Bayangkan file sebagai buku catatan. Kamu bisa membuka, membaca isinya, menulis halaman baru,  
      atau menambahkan catatan tambahan. Tapi kalau salah buka, bisa muncul error. Di sinilah error handling membantu.</p>
    `,
  },

  {
    title: "Bab 8.1",
    subtitle: "Membuka & Membaca File",
    html: `
      <p>Di Python, file dibuka dengan fungsi <code>open()</code>. Mode dasarnya adalah:</p>
      <ul>
        <li><code>r</code> → read (baca).</li>
        <li><code>w</code> → write (tulis baru, hapus isi lama).</li>
        <li><code>a</code> → append (tambah di akhir file).</li>
      </ul>

      <pre><code># Membaca isi file
f = open("data.txt", "r")
isi = f.read()
print(isi)
f.close()
</code></pre>

      <p>Kalau file tidak ditemukan, Python akan memberikan error. Nanti kita atasi dengan try-except.</p>
    `,
  },

  {
    title: "Bab 8.2",
    subtitle: "Menulis & Menambahkan File",
    html: `
      <p>Kalau ingin menulis data ke file, gunakan mode <code>w</code> atau <code>a</code>.</p>

      <pre><code># Menulis (overwrite)
f = open("data.txt", "w")
f.write("Halo, ini data baru!")
f.close()

# Menambahkan (append)
f = open("data.txt", "a")
f.write("\\nBaris tambahan.")
f.close()
</code></pre>

      <p><b>Mode "w"</b> akan menghapus isi lama.  
      <b>Mode "a"</b> hanya menambahkan data di akhir tanpa menghapus isi sebelumnya.</p>
    `,
  },

  {
    title: "Bab 8.3",
    subtitle: "with open (Cara Aman)",
    html: `
      <p>Ada cara praktis agar file otomatis tertutup setelah digunakan, yaitu <b>with open()</b>.</p>

      <pre><code>with open("data.txt", "r") as f:
    print(f.read())

with open("data.txt", "w") as f:
    f.write("Tulis data dengan cara aman")
</code></pre>

      <p>Dengan cara ini, Python akan menutup file secara otomatis tanpa harus memanggil <code>close()</code>.</p>
    `,
  },

  {
    title: "Bab 8.4",
    subtitle: "Error Handling (try-except-finally)",
    html: `
      <p>Ketika ada kesalahan (misalnya file tidak ditemukan), program biasanya berhenti.  
      Supaya lebih aman, gunakan <b>try-except</b>.</p>

      <pre><code>try:
    f = open("tidak_ada.txt", "r")
    print(f.read())
except FileNotFoundError:
    print("File tidak ditemukan, pastikan nama file benar!")
finally:
    print("Bagian ini tetap jalan, meskipun ada error.")
</code></pre>

      <ul>
        <li><code>try</code> → bagian yang ingin dijalankan.</li>
        <li><code>except</code> → apa yang dilakukan kalau ada error.</li>
        <li><code>finally</code> → bagian yang selalu dijalankan (misalnya menutup file).</li>
      </ul>

      <p>Error handling membuat program lebih tahan banting, tidak mudah crash hanya karena kesalahan kecil. 🛡️</p>
    `,
  },

  {
    title: "Bab 8.5",
    subtitle: "Latihan Bab 8",
    html: `
      <ol>
        <li>Buat file "catatan.txt", tulis kalimat bebas di dalamnya.</li>
        <li>Baca kembali isi file tersebut dan tampilkan ke layar.</li>
        <li>Tambahkan 2 baris baru ke file yang sama.</li>
        <li>Coba buka file dengan nama yang salah, lalu tangani error-nya dengan try-except.</li>
        <li>Buat program yang menulis daftar belanja ke file, lalu membacanya kembali.</li>
      </ol>
    `,
  },
];

let idxPy8 = 0;

function renderMateriPy8() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab8[idxPy8];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy8 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy8 === materiPyBab8.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy8 > 0) {
    idxPy8--;
    renderMateriPy8();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy8 < materiPyBab8.length - 1) {
    idxPy8++;
    renderMateriPy8();
  }
};

// Inisialisasi pertama kali
renderMateriPy8();
