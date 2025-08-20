const materiBab5 = [
  {
    title: "Bab 5",
    subtitle: "Animasi dan Interaksi di Scratch",
    html: `
      Pada bab ini, kamu akan belajar membuat animasi dan interaksi sederhana di Scratch. Materi ini cocok untuk semua usia, baik pemula maupun yang sudah pernah mencoba Scratch.<br><br>
      <b>Sub-bab:</b>
      <ul>
        <li>5.1 Apa itu Animasi?</li>
        <li>5.2 Membuat Sprite Bergerak</li>
        <li>5.3 Menambah Suara pada Animasi</li>
        <li>5.4 Membuat Sprite Berbicara</li>
        <li>5.5 Interaksi: Menggerakkan Sprite dengan Keyboard</li>
        <li>5.6 Proyek Mini: Animasi Cerita Sederhana</li>
      </ul>
      <b>Yuk, kita mulai belajar animasi dan interaksi di Scratch!</b>
    `,
  },
  {
    title: "Bab 5.1",
    subtitle: "Apa itu Animasi?",
    html: `
      <b>Animasi</b> adalah gambar yang bergerak. Di Scratch, kamu bisa membuat animasi dengan mengubah posisi, kostum, atau efek pada sprite.<br><br>
      <b>Contoh animasi:</b>
      <ul>
        <li>Bola memantul</li>
        <li>Kucing berjalan</li>
        <li>Karakter melambaikan tangan</li>
      </ul>
      <i>Animasi membuat cerita atau game jadi lebih hidup!</i>
    `,
  },
  {
    title: "Bab 5.2",
    subtitle: "Membuat Sprite Bergerak",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Pilih sprite yang ingin digerakkan.</li>
        <li>Gunakan blok Motion untuk mengubah posisi sprite.</li>
        <li>Coba blok <span class="scratch-block scratch-motion">move 10 steps</span> untuk membuat sprite maju.</li>
        <li>Gunakan blok <span class="scratch-block scratch-control">repeat 10</span> agar sprite bergerak berkali-kali.</li>
      </ol>
      <b>Tips:</b> Gabungkan beberapa blok untuk membuat gerakan lebih menarik!
    `,
  },
  {
    title: "Bab 5.3",
    subtitle: "Menambah Suara pada Animasi",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Pilih sprite yang ingin diberi suara.</li>
        <li>Buka tab <b>Sounds</b> dan pilih suara yang kamu suka.</li>
        <li>Gunakan blok <span class="scratch-block scratch-sound">play sound Meow</span> di script animasi.</li>
      </ol>
      <b>Tips:</b> Suara membuat animasi jadi lebih seru dan lucu!
    `,
  },
  {
    title: "Bab 5.4",
    subtitle: "Membuat Sprite Berbicara",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Pilih sprite yang ingin berbicara.</li>
        <li>Gunakan blok <span class="scratch-block scratch-looks">say "Halo!" for 2 seconds</span> untuk membuat sprite berbicara di layar.</li>
        <li>Kamu bisa mengganti teks dan lama waktu bicara sesuai keinginan.</li>
      </ol>
      <b>Tips:</b> Gunakan fitur ini untuk membuat dialog antar karakter!
    `,
  },
  {
    title: "Bab 5.5",
    subtitle: "Interaksi: Menggerakkan Sprite dengan Keyboard",
    html: `
      <b>Langkah-langkah:</b>
      <ol>
        <li>Pilih sprite yang ingin digerakkan.</li>
        <li>Gunakan blok <span class="scratch-block scratch-events">when [right arrow] key pressed</span> untuk mendeteksi tombol keyboard.</li>
        <li>Gabungkan dengan blok <span class="scratch-block scratch-motion">change x by 10</span> agar sprite bergerak ke kanan.</li>
        <li>Buat juga untuk tombol kiri, atas, dan bawah agar sprite bisa bergerak ke semua arah.</li>
      </ol>
      <b>Tips:</b> Dengan interaksi, animasi jadi lebih seru karena bisa dikendalikan!
    `,
  },
  {
    title: "Bab 5.6",
    subtitle: "Proyek Mini: Animasi Cerita Sederhana",
    html: `
      <b>Yuk, coba buat animasi cerita sendiri!</b><br>
      <ol>
        <li>Buat 2 sprite (misal: kucing dan anjing).</li>
        <li>Buat kucing berjalan ke anjing dengan blok <span class="scratch-block scratch-motion">move 10 steps</span> dan <span class="scratch-block scratch-control">repeat</span>.</li>
        <li>Setelah sampai, kucing dan anjing bisa saling menyapa dengan blok <span class="scratch-block scratch-looks">say</span>.</li>
        <li>Tambahkan suara agar lebih hidup.</li>
      </ol>
      <b>Tips:</b> Kamu bisa menambahkan latar belakang, suara, dan efek lain sesuai kreativitasmu!
      <br><br>
      <i>Selamat mencoba! Jangan takut bereksperimen dengan animasi dan interaksi di Scratch.</i>
    `,
  },
];

let idx = 0;

function renderMateri5() {
  const container = document.getElementById("materi-content-container");
  const m = materiBab5[idx];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      <p>${m.html}</p>
    </div>
  `;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === materiBab5.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx > 0) {
    idx--;
    renderMateri5();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx < materiBab5.length - 1) {
    idx++;
    renderMateri5();
  }
};

// Inisialisasi pertama kali
renderMateri5();
