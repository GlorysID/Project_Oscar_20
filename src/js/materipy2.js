const materiPyBab2 = [
  {
    title: "Bab 2",
    subtitle: "Dasar-Dasar Python <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kenalan sama cara nulis kode Python yang rapih.</li>
        <li>Belajar variabel, tipe data, dan operator.</li>
        <li>Bisa bikin hitungan dan nyimpen data di program.</li>
      </ul>
      <p>Kalau Bab 1 itu perkenalan, nah di Bab 2 ini kita mulai olahraga ringan 🏃.  
      Python tuh enaknya: gak banyak aturan ribet. Jadi tinggal nulis kode, langsung jalan.</p>
    `,
  },

  {
    title: "Bab 2.1",
    subtitle: "Variabel di Python",
    html: `
      <p>Variabel itu kayak <b>kotak penyimpanan</b> di program.  
      Mau simpan angka, tulisan, atau apapun, tinggal masukin ke variabel.</p>

      <pre><code># Simpan data ke variabel
nama = "Budi"
umur = 20
tinggi = 170.5

print(nama, umur, tinggi)
</code></pre>

      <p>Bedanya sama matematika, variabel di Python bisa fleksibel banget.  
      Hari ini nyimpen angka, besok bisa simpen teks. 📦</p>
    `,
  },

  {
    title: "Bab 2.2",
    subtitle: "Tipe Data di Python",
    html: `
      <p>Ada beberapa jenis data utama di Python:</p>
      <ul>
        <li><b>int</b> → bilangan bulat (contoh: 10, 42)</li>
        <li><b>float</b> → bilangan desimal (contoh: 3.14, 99.9)</li>
        <li><b>str</b> → teks/string (contoh: "Halo Dunia")</li>
        <li><b>bool</b> → nilai logika (True / False)</li>
      </ul>

      <pre><code># Contoh tipe data
x = 10       # int
y = 3.14     # float
nama = "Ani" # str
aktif = True # bool

print(type(x), type(y), type(nama), type(aktif))
</code></pre>

      <p>Tipe data ini penting biar komputer tau “isi kotak” itu apa.  
      Kayak di rumah: kotak sepatu beda sama kotak makanan. 👟🍔</p>
    `,
  },

  {
    title: "Bab 2.3",
    subtitle: "Operator Python",
    html: `
      <p>Operator itu simbol buat ngelakuin perhitungan atau logika.  
      Ada beberapa kategori:</p>

      <ul>
        <li><b>Aritmatika</b> (+, -, *, /, %)</li>
        <li><b>Perbandingan</b> (==, !=, >, <, >=, <=)</li>
        <li><b>Logika</b> (and, or, not)</li>
      </ul>

      <pre><code># Aritmatika
a = 10
b = 3
print(a + b)  # 13
print(a % b)  # 1

# Perbandingan
print(a > b)  # True

# Logika
x = True
y = False
print(x and y)  # False
</code></pre>

      <p>Operator ini bakal sering dipake buat bikin keputusan dan hitungan di program lo. 🔢</p>
    `,
  },

  {
    title: "Bab 2.4",
    subtitle: "Latihan Bab 2",
    html: `
      <ol>
        <li>Bikin variabel <code>nama</code>, <code>umur</code>, dan <code>hobi</code>.</li>
        <li>Tampilkan semua data itu pake <code>print()</code>.</li>
        <li>Coba hitung: 7 + 3 * 2 dan tampilkan hasilnya.</li>
        <li>Buat variabel boolean <code>isStudent</code> → isi True kalau lo lagi belajar, False kalau enggak.</li>
      </ol>
      <p>Kalau latihan ini lancar → kamu udah bisa mainan variabel, tipe data, dan operator dasar.  
      Ini fondasi penting banget sebelum lanjut ke logika dan looping. 🔑</p>
    `,
  },
];

let idxPy2 = 0;

function renderMateriPy2() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab2[idxPy2];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy2 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy2 === materiPyBab2.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy2 > 0) {
    idxPy2--;
    renderMateriPy2();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy2 < materiPyBab2.length - 1) {
    idxPy2++;
    renderMateriPy2();
  }
};

// Inisialisasi pertama kali
renderMateriPy2();
