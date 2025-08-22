const materiPyBab10 = [
  {
    title: "Bab 10",
    subtitle: "Project Python <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menggabungkan konsep dasar Python (variabel, fungsi, struktur kontrol, OOP, dll).</li>
        <li>Membuat program sederhana yang bisa langsung digunakan.</li>
        <li>Melatih logika berpikir terstruktur dalam menyelesaikan masalah.</li>
      </ul>
      <p>Proyek-proyek ini akan membantu kamu membiasakan diri menulis kode yang lebih panjang, 
      bukan hanya potongan kecil seperti pada bab sebelumnya.</p>
    `,
  },

  {
    title: "Bab 10.1",
    subtitle: "Mini Project 1: Kalkulator Sederhana",
    html: `
      <p>Kalkulator ini akan meminta dua angka dari pengguna, lalu menampilkan hasil operasi (+, -, *, /).</p>

      <pre><code>def kalkulator():
    print("=== Kalkulator Sederhana ===")
    a = float(input("Masukkan angka pertama: "))
    b = float(input("Masukkan angka kedua: "))
    
    print("Pilih operasi: +, -, *, /")
    op = input("Operasi: ")

    if op == "+":
        print("Hasil:", a + b)
    elif op == "-":
        print("Hasil:", a - b)
    elif op == "*":
        print("Hasil:", a * b)
    elif op == "/":
        if b != 0:
            print("Hasil:", a / b)
        else:
            print("Error: Pembagian dengan nol!")
    else:
        print("Operasi tidak dikenal.")

kalkulator()
</code></pre>
    `,
  },

  {
    title: "Bab 10.2",
    subtitle: "Mini Project 2: Daftar Belanja",
    html: `
      <p>Program ini akan menyimpan item belanja dalam list. Pengguna bisa menambah, menghapus, atau melihat daftar.</p>

      <pre><code>def daftar_belanja():
    belanja = []
    while True:
        print("\\n=== Menu Belanja ===")
        print("1. Tambah barang")
        print("2. Hapus barang")
        print("3. Lihat daftar")
        print("4. Keluar")

        pilihan = input("Pilih menu: ")

        if pilihan == "1":
            barang = input("Masukkan nama barang: ")
            belanja.append(barang)
            print(f"{barang} ditambahkan.")
        elif pilihan == "2":
            barang = input("Masukkan nama barang yang ingin dihapus: ")
            if barang in belanja:
                belanja.remove(barang)
                print(f"{barang} dihapus.")
            else:
                print("Barang tidak ada di daftar.")
        elif pilihan == "3":
            print("Daftar belanja:", belanja)
        elif pilihan == "4":
            print("Keluar dari program.")
            break
        else:
            print("Pilihan tidak valid.")

daftar_belanja()
</code></pre>
    `,
  },

  {
    title: "Bab 10.3",
    subtitle: "Mini Project 3: Konversi Suhu",
    html: `
      <p>Program ini akan mengubah suhu dari Celcius ke Fahrenheit atau sebaliknya.</p>

      <pre><code>def konversi_suhu():
    print("=== Konversi Suhu ===")
    print("1. Celcius ke Fahrenheit")
    print("2. Fahrenheit ke Celcius")

    pilihan = input("Pilih: ")
    if pilihan == "1":
        c = float(input("Masukkan suhu (°C): "))
        f = (c * 9/5) + 32
        print(f"Hasil: {f} °F")
    elif pilihan == "2":
        f = float(input("Masukkan suhu (°F): "))
        c = (f - 32) * 5/9
        print(f"Hasil: {c} °C")
    else:
        print("Pilihan tidak valid.")

konversi_suhu()
</code></pre>
    `,
  },

  {
    title: "Bab 10.4",
    subtitle: "Final Project: Sistem Login Sederhana",
    html: `
      <p>Program ini meniru sistem login sederhana di terminal. Data username dan password disimpan dalam dictionary.</p>

      <pre><code>def sistem_login():
    akun = {"admin": "1234", "user": "abcd"}
    
    print("=== Sistem Login ===")
    username = input("Masukkan username: ")
    password = input("Masukkan password: ")

    if username in akun and akun[username] == password:
        print(f"Selamat datang, {username}!")
    else:
        print("Username atau password salah!")

sistem_login()
</code></pre>
    `,
  },

  {
    title: "Bab 10.5",
    subtitle: "Final Project: Kuis Interaktif",
    html: `
      <p>Kuis ini akan menanyakan beberapa pertanyaan, lalu menghitung skor akhir.</p>

      <pre><code>def kuis():
    print("=== Kuis Interaktif ===")
    skor = 0
    
    q1 = input("Ibukota Indonesia? ")
    if q1.lower() == "jakarta":
        skor += 1
    
    q2 = input("2 + 5 = ? ")
    if q2 == "7":
        skor += 1
    
    q3 = input("Bahasa pemrograman Python diciptakan oleh siapa? ")
    if "guido" in q3.lower():
        skor += 1
    
    print(f"Skor akhir kamu: {skor}/3")

kuis()
</code></pre>
    `,
  },

  {
    title: "Bab 10.6",
    subtitle: "Latihan Bab 10",
    html: `
      <ol>
        <li>Tambahkan fitur "keluar" di kalkulator agar tidak langsung berhenti.</li>
        <li>Modifikasi daftar belanja agar bisa menghitung total harga.</li>
        <li>Tambahkan pilihan konversi suhu ke Kelvin.</li>
        <li>Buat sistem login yang bisa mendaftarkan user baru.</li>
        <li>Tambahkan minimal 5 pertanyaan baru pada kuis interaktif.</li>
      </ol>
    `,
  },
];

let idxPy10 = 0;

function renderMateriPy10() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab10[idxPy10];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy10 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy10 === materiPyBab10.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy10 > 0) {
    idxPy10--;
    renderMateriPy10();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy10 < materiPyBab10.length - 1) {
    idxPy10++;
    renderMateriPy10();
  }
};

// Inisialisasi pertama kali
renderMateriPy10();
