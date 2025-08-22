const materiPyBab9 = [
  {
    title: "Bab 9",
    subtitle: "Object-Oriented Programming (OOP) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep dasar OOP: class dan object.</li>
        <li>Menggunakan constructor <code>__init__</code> untuk inisialisasi data.</li>
        <li>Membuat method dan atribut dalam class.</li>
        <li>Mengerti konsep inheritance (pewarisan).</li>
      </ul>
      <p>Bayangkan class seperti blueprint atau cetak biru, dan object adalah hasil nyata dari cetak biru itu. 
      Misalnya, class "Mobil" mendefinisikan sifat umum mobil, lalu object "Avanza" atau "Tesla" adalah contoh nyata mobil.</p>
    `,
  },

  {
    title: "Bab 9.1",
    subtitle: "Class & Object",
    html: `
      <p>Class adalah cetak biru. Object adalah hasil nyata dari class tersebut.</p>

      <pre><code># Membuat class
class Mobil:
    def __init__(self, merk, warna):
        self.merk = merk
        self.warna = warna

# Membuat object dari class
mobil1 = Mobil("Toyota", "Hitam")
mobil2 = Mobil("Tesla", "Putih")

print(mobil1.merk)   # Toyota
print(mobil2.warna)  # Putih
</code></pre>

      <p>Dengan class, kita bisa membuat banyak object dengan sifat yang sama, tetapi data berbeda.</p>
    `,
  },

  {
    title: "Bab 9.2",
    subtitle: "Constructor (__init__)",
    html: `
      <p>Constructor adalah method khusus yang otomatis dijalankan ketika object dibuat. 
      Biasanya digunakan untuk mengisi data awal.</p>

      <pre><code>class Mahasiswa:
    def __init__(self, nama, jurusan):
        self.nama = nama
        self.jurusan = jurusan

m1 = Mahasiswa("Andi", "Informatika")
print(m1.nama)      # Andi
print(m1.jurusan)   # Informatika
</code></pre>
    `,
  },

  {
    title: "Bab 9.3",
    subtitle: "Method & Atribut",
    html: `
      <p><b>Atribut</b> adalah variabel yang melekat pada object.  
      <b>Method</b> adalah fungsi yang ada di dalam class.</p>

      <pre><code>class Hewan:
    def __init__(self, nama, jenis):
        self.nama = nama
        self.jenis = jenis
    
    def suara(self):
        print(f"{self.nama} bersuara...")

kucing = Hewan("Kitty", "Kucing")
kucing.suara()   # Kitty bersuara...
</code></pre>

      <p>Atribut = sifat (contoh: nama, jenis).  
      Method = perilaku (contoh: bersuara, berjalan).</p>
    `,
  },

  {
    title: "Bab 9.4",
    subtitle: "Inheritance (Pewarisan)",
    html: `
      <p>Inheritance memungkinkan sebuah class mewarisi sifat dan method dari class lain.  
      Hal ini membuat kode lebih ringkas dan mudah diperluas.</p>

      <pre><code>class Kendaraan:
    def __init__(self, merk):
        self.merk = merk

    def info(self):
        print(f"Ini adalah kendaraan merk {self.merk}")

# Class Mobil mewarisi dari Kendaraan
class Mobil(Kendaraan):
    def __init__(self, merk, jumlah_pintu):
        super().__init__(merk)      # Memanggil constructor class induk
        self.jumlah_pintu = jumlah_pintu

    def info(self):
        print(f"Mobil {self.merk} dengan {self.jumlah_pintu} pintu.")

m = Mobil("Toyota", 4)
m.info()   # Mobil Toyota dengan 4 pintu.
</code></pre>

      <p>Dengan inheritance, kita bisa membuat hierarki class seperti <i>Kendaraan → Mobil → Mobil Sport</i>, 
      tanpa menulis ulang kode yang sama.</p>
    `,
  },

  {
    title: "Bab 9.5",
    subtitle: "Latihan Bab 9",
    html: `
      <ol>
        <li>Buat class <code>Mahasiswa</code> dengan atribut <code>nama</code> dan <code>jurusan</code>.</li>
        <li>Tambahkan method untuk menampilkan biodata mahasiswa.</li>
        <li>Buat class <code>Dosen</code> yang mewarisi dari class <code>Mahasiswa</code>, 
        lalu tambahkan atribut baru <code>mata_kuliah</code>.</li>
        <li>Coba buat beberapa object mahasiswa dan dosen, lalu tampilkan datanya.</li>
        <li>Diskusikan: apa manfaat menggunakan class dibandingkan hanya variabel dan fungsi biasa?</li>
      </ol>
    `,
  },
];

let idxPy9 = 0;

function renderMateriPy9() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab9[idxPy9];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy9 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy9 === materiPyBab9.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy9 > 0) {
    idxPy9--;
    renderMateriPy9();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy9 < materiPyBab9.length - 1) {
    idxPy9++;
    renderMateriPy9();
  }
};

// Inisialisasi pertama kali
renderMateriPy9();
