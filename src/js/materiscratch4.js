const materiBab4 = [
  {
    title: "Bab 4",
    subtitle: "Membuat Game Sederhana di Scratch",
    html: `
      Pada bab ini, kamu akan belajar membuat game sederhana di Scratch, mulai dari konsep, membuat karakter, menambah musuh, hingga sistem skor.<br><br>
      <b>Sub-bab:</b>
      <ul>
        <li>4.1 Konsep Game Sederhana</li>
        <li>4.2 Membuat Karakter Utama</li>
        <li>4.3 Menambah Musuh atau Rintangan</li>
        <li>4.4 Sistem Skor</li>
        <li>4.5 Menambah Efek Suara & Animasi</li>
        <li>4.6 Menyelesaikan Game</li>
      </ul>
      <b>Yuk, mulai membuat game pertamamu!</b>
    `,
  },
  {
    title: "Bab 4.1",
    subtitle: "Konsep Game Sederhana",
    html: `
      <b>Apa itu game sederhana?</b><br>
      Game sederhana biasanya punya satu tujuan utama, misal: mengumpulkan skor, menghindari musuh, atau mencapai garis finish.<br><br>
      <b>Langkah awal:</b>
      <ul>
        <li>Tentukan tujuan game (misal: skor tertinggi, bertahan hidup, dsb).</li>
        <li>Pilih sprite utama (karakter pemain).</li>
        <li>Pilih musuh/rintangan.</li>
        <li>Siapkan sistem skor atau kondisi menang/kalah.</li>
      </ul>
      <i>Contoh game sederhana: menangkap bola, menghindari rintangan, dsb.</i>
    `,
  },
  {
    title: "Bab 4.2",
    subtitle: "Membuat Karakter Utama",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Klik ikon kucing di pojok kanan bawah untuk menambah sprite.</li>
        <li>Pilih karakter yang kamu suka sebagai pemain utama.</li>
        <li>Atur posisi awal sprite di panggung.</li>
      </ol>
      <span class="scratch-block scratch-motion">go to x: 0 y: -100</span>
      <br><br>
      <b>Tips:</b> Kamu bisa mengganti kostum sprite agar lebih menarik!
    `,
  },
  {
    title: "Bab 4.3",
    subtitle: "Menambah Musuh atau Rintangan",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Tambah sprite baru sebagai musuh/rintangan.</li>
        <li>Atur posisi awal musuh di sisi panggung.</li>
        <li>Gunakan blok Motion untuk menggerakkan musuh ke arah pemain.</li>
      </ol>
      <span class="scratch-block scratch-motion">go to x: 200 y: 0</span>
      <span class="scratch-block scratch-motion">move -5 steps</span>
      <br><br>
      <b>Tips:</b> Ubah arah dan kecepatan musuh agar game lebih menantang!
    `,
  },
  {
    title: "Bab 4.4",
    subtitle: "Sistem Skor",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Buat variabel baru, misal: <b>score</b>.</li>
        <li>Set skor ke 0 di awal game.</li>
        <li>Tambah skor setiap kali pemain berhasil (misal: menangkap bola).</li>
      </ol>
      <span class="scratch-block scratch-variables">set score to 0</span>
      <span class="scratch-block scratch-variables">change score by 1</span>
      <br><br>
      <b>Tips:</b> Tampilkan skor di layar agar pemain semangat!
    `,
  },
  {
    title: "Bab 4.5",
    subtitle: "Menambah Efek Suara & Animasi",
    html: `
      <b>Suara:</b> Tambahkan suara saat skor bertambah atau saat kalah.<br>
      <span class="scratch-block scratch-sound">play sound Pop</span>
      <br><br>
      <b>Animasi:</b> Ganti kostum sprite saat bergerak atau terkena musuh.<br>
      <span class="scratch-block scratch-looks">next costume</span>
      <br><br>
      <b>Tips:</b> Efek suara dan animasi membuat game lebih seru!
    `,
  },
  {
    title: "Bab 4.6",
    subtitle: "Menyelesaikan Game",
    html: `
      <b>Kondisi Menang/Kalah:</b>
      <ul>
        <li>Gunakan blok <span class="scratch-block scratch-control">if ... then</span> untuk mengecek skor atau tabrakan.</li>
        <li>Tampilkan pesan saat menang/kalah.</li>
      </ul>
      <span class="scratch-block scratch-looks">say "Game Over!"</span>
      <br><br>
      <b>Tips:</b> Setelah selesai, klik <b>Share</b> untuk membagikan game-mu ke komunitas Scratch!
    `,
  },
];

let idx = 0;

function renderMateri4() {
  const container = document.getElementById("materi-content-container");
  const m = materiBab4[idx];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      <p>${m.html}</p>
    </div>
  `;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === materiBab4.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx > 0) {
    idx--;
    renderMateri4();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx < materiBab4.length - 1) {
    idx++;
    renderMateri4();
  }
};

// Inisialisasi pertama kali
renderMateri4();
