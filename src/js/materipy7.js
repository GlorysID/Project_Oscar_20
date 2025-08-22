const materiPyBab7 = [
  {
    title: "Bab 7",
    subtitle: "String & Manipulasi Data <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami bagaimana string disimpan dan bisa diakses per karakter.</li>
        <li>Belajar teknik memotong (slicing) bagian string.</li>
        <li>Mengenal method penting untuk memodifikasi string.</li>
        <li>Melakukan iterasi (perulangan) pada string.</li>
      </ul>
      <p>String di Python ibarat kalimat yang bisa kamu ambil per kata, per huruf, bahkan bisa disusun ulang.  
      Anggap saja string itu <i>puzzle</i> yang bisa kamu mainkan. 🧩</p>
    `,
  },

  {
    title: "Bab 7.1",
    subtitle: "Indexing & Slicing",
    html: `
      <p>Setiap huruf dalam string punya alamat (index).  
      Index dimulai dari 0 untuk huruf pertama.</p>

      <pre><code>teks = "Python"

print(teks[0])   # P (huruf pertama)
print(teks[3])   # h
print(teks[-1])  # n (huruf terakhir)
</code></pre>

      <p><b>Slicing</b> artinya mengambil potongan string dengan format <code>[awal:akhir]</code>.</p>

      <pre><code>print(teks[0:3])   # Pyt (huruf index 0 sampai 2)
print(teks[:4])    # Pyth (otomatis mulai dari awal)
print(teks[2:])    # thon (otomatis sampai akhir)
</code></pre>

      <p>Indexing = ambil 1 huruf.  
      Slicing = ambil beberapa huruf. ✂️</p>
    `,
  },

  {
    title: "Bab 7.2",
    subtitle: "Method Penting String",
    html: `
      <p>String punya banyak "alat bantu" bawaan yang disebut <b>method</b>.  
      Ini beberapa yang paling sering dipakai:</p>

      <pre><code>teks = "Belajar Python itu Asik"

print(teks.upper())    # BELAJAR PYTHON ITU ASIK
print(teks.lower())    # belajar python itu asik
print(teks.split())    # ['Belajar', 'Python', 'itu', 'Asik']
print("-".join(["A","B","C"]))  # A-B-C
print(teks.replace("Asik","Menyenangkan"))  
# Belajar Python itu Menyenangkan
</code></pre>

      <ul>
        <li><code>upper()</code> → ubah semua jadi huruf besar.</li>
        <li><code>lower()</code> → ubah semua jadi huruf kecil.</li>
        <li><code>split()</code> → potong string jadi list.</li>
        <li><code>join()</code> → gabungkan list jadi string.</li>
        <li><code>replace()</code> → ganti kata/karakter tertentu.</li>
      </ul>
    `,
  },

  {
    title: "Bab 7.3",
    subtitle: "Iterasi String",
    html: `
      <p>Karena string terdiri dari banyak huruf, kita bisa melakukan perulangan huruf demi huruf.</p>

      <pre><code>teks = "Python"

for huruf in teks:
    print(huruf)
</code></pre>

      <p>Hasilnya:</p>
      <pre><code>P
y
t
h
o
n
</code></pre>

      <p>Iterasi string sering dipakai untuk menghitung jumlah huruf tertentu, memfilter teks,  
      atau sekadar mengecek karakter satu per satu. 🔍</p>
    `,
  },

  {
    title: "Bab 7.4",
    subtitle: "Latihan Bab 7",
    html: `
      <ol>
        <li>Buat string nama lengkapmu, lalu tampilkan hanya nama depan dengan slicing.</li>
        <li>Ubah string "belajar python" menjadi huruf besar semua.</li>
        <li>Pisahkan kalimat "saya suka koding python" menjadi list kata.</li>
        <li>Gabungkan list ["aku","kamu","dia"] menjadi "aku-kamu-dia".</li>
        <li>Buat program untuk menghitung berapa banyak huruf "a" dalam sebuah string.</li>
      </ol>
    `,
  },
];

let idxPy7 = 0;

function renderMateriPy7() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab7[idxPy7];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy7 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy7 === materiPyBab7.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy7 > 0) {
    idxPy7--;
    renderMateriPy7();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy7 < materiPyBab7.length - 1) {
    idxPy7++;
    renderMateriPy7();
  }
};

// Inisialisasi pertama kali
renderMateriPy7();
