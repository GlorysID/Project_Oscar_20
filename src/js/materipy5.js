const materiPyBab5 = [
  {
    title: "Bab 5",
    subtitle: "Fungsi (Function) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep fungsi sebagai blok kode yang bisa dipakai ulang.</li>
        <li>Membuat dan memanggil fungsi sederhana.</li>
        <li>Menggunakan parameter dan return value untuk mengatur input–output.</li>
        <li>Mengenal lambda function untuk membuat fungsi singkat.</li>
      </ul>
      <p>Fungsi itu ibarat “mesin kecil” di dalam program.  
      Kamu kasih input, mesin bekerja, lalu hasilnya bisa dipakai lagi.  
      Dengan fungsi, kode jadi lebih rapi, hemat, dan gampang dirawat. ⚙️</p>
    `,
  },

  {
    title: "Bab 5.1",
    subtitle: "Membuat & Memanggil Fungsi",
    html: `
      <p>Fungsi dibuat dengan kata kunci <code>def</code> di Python.</p>

      <pre><code># Definisi fungsi
def sapa():
    print("Halo, selamat datang di Python!")

# Pemanggilan fungsi
sapa()
</code></pre>

      <p>Fungsi bisa dipanggil berkali-kali tanpa harus menulis ulang kodenya.  
      Ibarat punya remote control: sekali bikin, bisa dipakai terus. 📺</p>
    `,
  },

  {
    title: "Bab 5.2",
    subtitle: "Parameter (Input ke Fungsi)",
    html: `
      <p>Fungsi bisa menerima input berupa parameter.  
      Misalnya fungsi sapaan tapi namanya bisa diganti sesuai input.</p>

      <pre><code>def sapa(nama):
    print("Halo,", nama)

sapa("Andi")
sapa("Budi")
</code></pre>

      <p>Parameter = data yang kamu kirim ke fungsi agar hasilnya fleksibel.</p>
    `,
  },

  {
    title: "Bab 5.3",
    subtitle: "Return Value (Output dari Fungsi)",
    html: `
      <p>Tidak semua fungsi hanya mencetak teks.  
      Kadang kamu ingin fungsi menghasilkan nilai untuk dipakai lagi.</p>

      <pre><code>def tambah(a, b):
    return a + b

hasil = tambah(5, 3)
print("Hasil penjumlahan:", hasil)
</code></pre>

      <p><code>return</code> mengembalikan nilai ke pemanggil fungsi.  
      Jadi fungsi ini bisa dipakai di perhitungan lain juga.</p>
    `,
  },

  {
    title: "Bab 5.4",
    subtitle: "Lambda Function",
    html: `
      <p><b>Lambda function</b> adalah cara singkat untuk membuat fungsi sederhana,  
      biasanya untuk kebutuhan cepat.</p>

      <pre><code># Fungsi biasa
def kuadrat(x):
    return x * x

# Lambda function
kuadrat2 = lambda x: x * x

print(kuadrat(5))   # 25
print(kuadrat2(5))  # 25
</code></pre>

      <p>Lambda cocok dipakai saat kamu butuh fungsi kecil sekali jalan,  
      tanpa harus mendefinisikan fungsi panjang. ⚡</p>
    `,
  },

  {
    title: "Bab 5.5",
    subtitle: "Latihan Bab 5",
    html: `
      <ol>
        <li>Buat fungsi untuk menghitung luas segitiga dengan parameter alas dan tinggi.</li>
        <li>Buat fungsi untuk mengecek bilangan genap/ganjil dengan return value True/False.</li>
        <li>Buat lambda function untuk menghitung pangkat dua dari suatu angka.</li>
        <li>Gabungkan fungsi dan loop: buat fungsi yang menerima list angka lalu mengembalikan jumlah totalnya.</li>
      </ol>
      <p>Dengan latihan ini, kamu semakin terbiasa membagi program jadi bagian-bagian kecil  
      yang bisa dipakai ulang dengan fungsi. 🔄</p>
    `,
  },
];

let idxPy5 = 0;

function renderMateriPy5() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab5[idxPy5];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy5 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy5 === materiPyBab5.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy5 > 0) {
    idxPy5--;
    renderMateriPy5();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy5 < materiPyBab5.length - 1) {
    idxPy5++;
    renderMateriPy5();
  }
};

// Inisialisasi pertama kali
renderMateriPy5();
