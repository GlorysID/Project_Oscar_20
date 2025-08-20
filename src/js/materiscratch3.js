const materiBab3 = [
  {
    title: "Bab 3",
    subtitle: "Membuat Proyek Pertama di Scratch",
    html: `
      Pada bab ini, kamu akan belajar langkah demi langkah membuat proyek pertamamu di Scratch.  
      Mulai dari membuat sprite, menambahkan gerakan, suara, hingga menjalankan program.<br><br>
      <b>Sub-bab:</b>
      <ul>
        <li>3.1 Membuat Proyek Baru</li>
        <li>3.2 Menambah & Mengatur Sprite</li>
        <li>3.3 Membuat Sprite Bergerak</li>
        <li>3.4 Menambahkan Suara</li>
        <li>3.5 Menjalankan Program</li>
      </ul>
      <b>Yuk, mulai berkreasi dengan Scratch!</b>
    `,
  },
  {
    title: "Bab 3.1",
    subtitle: "Membuat Proyek Baru",
    html: `
      <b>Langkah 1:</b> Buka <a href="https://scratch.mit.edu" target="_blank">scratch.mit.edu</a> dan login.<br>
      <b>Langkah 2:</b> Klik tombol <b>"Create"</b> di pojok kiri atas.<br>
      <b>Langkah 3:</b> Kamu akan masuk ke editor Scratch.<br><br>
      <span class="scratch-block scratch-events">when green flag clicked</span><br>
      <i>Setiap proyek Scratch dimulai dengan blok ini!</i>
    `,
  },
  {
    title: "Bab 3.2",
    subtitle: "Menambah & Mengatur Sprite",
    html: `
      <b>Sprite</b> adalah karakter utama di proyekmu.<br>
      <b>Menambah Sprite:</b> Klik ikon kucing di pojok kanan bawah, lalu pilih sprite yang kamu suka.<br>
      <b>Mengatur Sprite:</b> Kamu bisa mengubah posisi, ukuran, dan kostum sprite.<br><br>
      <span class="scratch-block scratch-looks">switch costume to ...</span>
      <span class="scratch-block scratch-motion">go to x: 0 y: 0</span>
    `,
  },
  {
    title: "Bab 3.3",
    subtitle: "Membuat Sprite Bergerak",
    html: `
      <b>Gerakkan sprite dengan blok Motion:</b><br>
      <span class="scratch-block scratch-motion">move 10 steps</span>
      <span class="scratch-block scratch-motion">turn 15 degrees</span><br>
      <b>Tips:</b> Gabungkan dengan blok Events agar sprite bergerak saat bendera hijau diklik.<br>
      <span class="scratch-block scratch-events">when green flag clicked</span>
      <span class="scratch-block scratch-motion">move 10 steps</span>
    `,
  },
  {
    title: "Bab 3.4",
    subtitle: "Menambahkan Suara",
    html: `
      <b>Tambahkan suara agar proyekmu lebih hidup!</b><br>
      <span class="scratch-block scratch-sound">play sound Meow</span><br>
      <b>Cara menambah suara:</b> Klik tab "Sounds", lalu pilih atau upload suara.<br>
      <b>Tips:</b> Gabungkan dengan blok Events.<br>
      <span class="scratch-block scratch-events">when green flag clicked</span>
      <span class="scratch-block scratch-sound">play sound Meow</span>
    `,
  },
  {
    title: "Bab 3.5",
    subtitle: "Menjalankan Program",
    html: `
      <b>Untuk menjalankan program:</b><br>
      Klik <span class="scratch-block scratch-events">when green flag clicked</span> di atas panggung.<br>
      <b>Tips:</b> Coba gabungkan semua blok yang sudah kamu pelajari!<br><br>
      <span class="scratch-block scratch-events">when green flag clicked</span>
      <span class="scratch-block scratch-motion">move 10 steps</span>
      <span class="scratch-block scratch-sound">play sound Meow</span>
      <br><br>
      <b>Selamat! Kamu sudah membuat proyek Scratch pertamamu 🎉</b>
    `,
  },
];

let idx = 0;

function renderMateri3() {
  const container = document.getElementById("materi-content-container");
  const m = materiBab3[idx];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      <p>${m.html}</p>
    </div>
  `;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === materiBab3.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx > 0) {
    idx--;
    renderMateri3();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx < materiBab3.length - 1) {
    idx++;
    renderMateri3();
  }
};

// Inisialisasi pertama kali
renderMateri3();
