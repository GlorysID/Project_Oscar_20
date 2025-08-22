const materiPyBab6 = [
  {
    title: "Bab 6",
    subtitle: "Struktur Data <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Mengenal berbagai struktur data di Python.</li>
        <li>Memahami penggunaan List, Tuple, Set, dan Dictionary.</li>
        <li>Belajar operasi dasar seperti menambah, menghapus, dan mengakses data.</li>
        <li>Melatih cara memilih struktur data yang tepat sesuai kebutuhan.</li>
      </ul>
      <p>Struktur data itu ibarat lemari penyimpanan di rumah.  
      Ada lemari fleksibel (List), lemari terkunci rapat (Tuple),  
      keranjang anti-duplikat (Set), dan lemari dengan label (Dictionary). 🗄️</p>
    `,
  },

  {
    title: "Bab 6.1",
    subtitle: "List (Daftar Data)",
    html: `
      <p><b>List</b> adalah struktur data yang bisa menampung banyak nilai sekaligus,  
      dan isinya bisa diubah (mutable).</p>

      <pre><code># Membuat list
buah = ["apel", "jeruk", "mangga"]

# Menambah item
buah.append("pisang")

# Menghapus item
buah.remove("jeruk")

# Mengurutkan list
buah.sort()

print(buah)  # ['apel', 'mangga', 'pisang']
</code></pre>

      <p>List cocok dipakai kalau kamu butuh kumpulan data yang sering berubah. 🔄</p>
    `,
  },

  {
    title: "Bab 6.2",
    subtitle: "Tuple (Data Tetap)",
    html: `
      <p><b>Tuple</b> mirip list, tapi datanya tidak bisa diubah (immutable).  
      Jadi lebih aman untuk data yang sifatnya tetap.</p>

      <pre><code># Membuat tuple
koordinat = (10, 20)

print(koordinat[0])  # 10
print(koordinat[1])  # 20

# koordinat[0] = 15  ❌ (akan error, karena tuple tidak bisa diubah)
</code></pre>

      <p>Tuple biasanya dipakai untuk data posisi, konfigurasi, atau data konstan lain. 🔒</p>
    `,
  },

  {
    title: "Bab 6.3",
    subtitle: "Set (Data Unik)",
    html: `
      <p><b>Set</b> adalah kumpulan data unik (tidak bisa ada duplikat).  
      Urutannya tidak dijamin, tapi sangat berguna untuk operasi himpunan.</p>

      <pre><code># Membuat set
angka = {1, 2, 3, 3, 4}

print(angka)  # {1, 2, 3, 4} → otomatis hilang duplikat

# Menambah & menghapus
angka.add(5)
angka.remove(2)

# Operasi himpunan
ganjil = {1, 3, 5, 7}
genap = {2, 4, 6, 8}

print(ganjil | genap)  # Union
print(ganjil & angka) # Irisan
</code></pre>

      <p>Set cocok kalau kamu ingin memastikan data tidak ada duplikat. ✅</p>
    `,
  },

  {
    title: "Bab 6.4",
    subtitle: "Dictionary (Key–Value Pair)",
    html: `
      <p><b>Dictionary</b> menyimpan data dalam bentuk pasangan <code>key: value</code>.  
      Cocok untuk data yang butuh label.</p>

      <pre><code># Membuat dictionary
mahasiswa = {
    "nama": "Budi",
    "umur": 20,
    "jurusan": "Informatika"
}

# Akses data
print(mahasiswa["nama"])   # Budi

# Menambah data
mahasiswa["angkatan"] = 2023

# Mengambil semua keys & values
print(mahasiswa.keys())    # dict_keys(['nama','umur','jurusan','angkatan'])
print(mahasiswa.values())  # dict_values(['Budi', 20, 'Informatika', 2023])
</code></pre>

      <p>Dictionary sering dipakai untuk menyimpan data berlabel, misalnya biodata, konfigurasi, atau hasil API. 🏷️</p>
    `,
  },

  {
    title: "Bab 6.5",
    subtitle: "Perbandingan Struktur Data",
    html: `
      <p>Biar lebih jelas, berikut perbedaan singkatnya:</p>

      <table border="1" cellpadding="6">
        <tr><th>Struktur</th><th>Bisa diubah?</th><th>Duplikat?</th><th>Contoh</th></tr>
        <tr><td>List</td><td>Ya</td><td>Ya</td><td>["apel", "pisang"]</td></tr>
        <tr><td>Tuple</td><td>Tidak</td><td>Ya</td><td>(10, 20)</td></tr>
        <tr><td>Set</td><td>Ya</td><td>Tidak</td><td>{1, 2, 3}</td></tr>
        <tr><td>Dictionary</td><td>Ya</td><td>Key unik</td><td>{"nama":"Budi"}</td></tr>
      </table>

      <p>Pilih struktur data sesuai kebutuhan:  
      <ul>
        <li>List → data fleksibel, sering berubah.</li>
        <li>Tuple → data konstan, tidak boleh diubah.</li>
        <li>Set → data unik, operasi himpunan.</li>
        <li>Dictionary → data berlabel dengan key–value.</li>
      </ul>
    `,
  },

  {
    title: "Bab 6.6",
    subtitle: "Latihan Bab 6",
    html: `
      <ol>
        <li>Buat list berisi 5 nama temanmu, lalu urutkan secara alfabet.</li>
        <li>Buat tuple berisi koordinat GPS (x,y), lalu coba akses nilainya.</li>
        <li>Buat set angka 1–10 lalu tambahkan angka 5 (cek hasilnya).</li>
        <li>Buat dictionary data diri (nama, umur, hobi), lalu tampilkan semua key dan value.</li>
        <li>Gabungkan: simpan daftar mahasiswa dalam bentuk list of dictionary.</li>
      </ol>
      <p>Dengan latihan ini, kamu akan terbiasa memilih lemari penyimpanan data yang tepat sesuai situasi. 🗂️</p>
    `,
  },
];

let idxPy6 = 0;

function renderMateriPy6() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab6[idxPy6];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy6 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy6 === materiPyBab6.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy6 > 0) {
    idxPy6--;
    renderMateriPy6();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy6 < materiPyBab6.length - 1) {
    idxPy6++;
    renderMateriPy6();
  }
};

// Inisialisasi pertama kali
renderMateriPy6();
