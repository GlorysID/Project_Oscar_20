const materiPyBab4 = [
  {
    title: "Bab 4",
    subtitle: "Perulangan (Looping) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu bisa membuat program melakukan hal yang sama berulang-ulang tanpa harus menulis kode berkali-kali.</li>
        <li>Kamu belajar perbedaan for loop dan while loop.</li>
        <li>Kamu mengenal fungsi range() untuk mengontrol jumlah perulangan.</li>
        <li>Kamu memahami cara menghentikan atau melompati perulangan dengan break dan continue.</li>
      </ul>
      <p>Kalau sebelumnya programmu cuma bisa jalan lurus atau bercabang,  
      sekarang kamu belajar bikin program yang bisa “muter” atau mengulang pekerjaan otomatis. 🔁</p>
    `,
  },

  {
    title: "Bab 4.1",
    subtitle: "For & While Loop",
    html: `
      <p><b>For loop</b> dipakai saat kamu tahu berapa kali pengulangan dilakukan.  
      Contohnya menghitung angka dari 1 sampai 5.</p>

      <pre><code># For loop
for i in range(1, 6):
    print("Angka:", i)
</code></pre>

      <p><b>While loop</b> dipakai kalau kamu belum tahu pasti berapa kali pengulangan,  
      tapi akan terus berulang selama syaratnya masih benar.</p>

      <pre><code># While loop
x = 1
while x <= 5:
    print("Angka:", x)
    x += 1
</code></pre>

      <p>Perbedaan utamanya:  
      <ul>
        <li>For → cocok untuk pengulangan yang jelas jumlahnya.</li>
        <li>While → cocok untuk pengulangan berdasarkan kondisi.</li>
      </ul></p>
    `,
  },

  {
    title: "Bab 4.2",
    subtitle: "Range & Iterasi List",
    html: `
      <p><code>range()</code> sering dipakai di for loop untuk menentukan awal, akhir, dan langkah.</p>

      <pre><code># range(start, stop, step)
for i in range(0, 10, 2):
    print(i)   # 0, 2, 4, 6, 8
</code></pre>

      <p>Kamu juga bisa pakai for loop langsung ke <b>list</b> untuk membaca setiap elemennya.</p>

      <pre><code># Iterasi list
buah = ["apel", "mangga", "jeruk"]

for item in buah:
    print("Saya suka", item)
</code></pre>

      <p>Dengan cara ini, kamu bisa memproses isi list satu per satu dengan mudah.</p>
    `,
  },

  {
    title: "Bab 4.3",
    subtitle: "Break & Continue",
    html: `
      <p><b>Break</b> dipakai untuk menghentikan perulangan sebelum waktunya.</p>

      <pre><code># Contoh break
for i in range(1, 10):
    if i == 5:
        break
    print(i)   # berhenti di angka 4
</code></pre>

      <p><b>Continue</b> dipakai untuk melewati satu iterasi dan langsung lanjut ke berikutnya.</p>

      <pre><code># Contoh continue
for i in range(1, 6):
    if i == 3:
        continue
    print(i)   # angka 3 dilewati
</code></pre>

      <p>Break = keluar dari loop ⛔,  
      Continue = lompat ke iterasi selanjutnya ⏩.</p>
    `,
  },

  {
    title: "Bab 4.4",
    subtitle: "Latihan Bab 4",
    html: `
      <ol>
        <li>Buat for loop untuk menampilkan angka 1 sampai 20.</li>
        <li>Buat while loop yang terus jalan sampai user memasukkan angka 0.</li>
        <li>Pakai continue untuk melewati angka kelipatan 3 dari 1–15.</li>
        <li>Pakai break untuk berhenti kalau menemukan angka 7.</li>
      </ol>
      <p>Dengan latihan ini, kamu akan terbiasa mengendalikan pengulangan  
      sesuai kebutuhan programmu.</p>
    `,
  },
];

let idxPy4 = 0;

function renderMateriPy4() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab4[idxPy4];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy4 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy4 === materiPyBab4.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy4 > 0) {
    idxPy4--;
    renderMateriPy4();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy4 < materiPyBab4.length - 1) {
    idxPy4++;
    renderMateriPy4();
  }
};

// Inisialisasi pertama kali
renderMateriPy4();
