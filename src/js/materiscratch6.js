const materiBab6 = [
  {
    title: "Bab 6",
    subtitle: "Penutup: Refleksi dan Langkah Selanjutnya",
    html: `
      <b>Selamat!</b> Kamu telah menyelesaikan seluruh materi tentang Scratch.<br><br>
      <b>Sub-bab:</b>
      <ul>
        <li>6.1 Refleksi Pembelajaran</li>
        <li>6.2 Langkah Selanjutnya</li>
        <li>6.3 Inspirasi Proyek Scratch</li>
      </ul>
      <b>Yuk, kita bahas satu per satu!</b>
    `,
  },
  {
    title: "Bab 6.1",
    subtitle: "Refleksi Pembelajaran",
    html: `
      <b>Refleksi:</b>
      <ul>
        <li>Apakah kamu sudah memahami dasar-dasar Scratch?</li>
        <li>Apakah kamu bisa membuat animasi, interaksi, dan proyek sederhana?</li>
        <li>Proyek apa yang paling kamu sukai selama belajar?</li>
      </ul>
      <p>Refleksi ini penting untuk mengetahui sejauh mana kamu telah memahami materi dan apa yang perlu ditingkatkan.</p>
    `,
  },
  {
    title: "Bab 6.2",
    subtitle: "Langkah Selanjutnya",
    html: `
      <b>Langkah Selanjutnya:</b>
      <ol>
        <li>Eksplorasi lebih banyak fitur Scratch, seperti variabel, daftar, dan blok custom.</li>
        <li>Coba buat proyek yang lebih kompleks, seperti game atau cerita interaktif.</li>
        <li>Bergabung dengan komunitas Scratch untuk berbagi dan belajar dari proyek orang lain.</li>
        <li>Jangan lupa untuk terus berlatih dan mengembangkan kreativitasmu!</li>
      </ol>
      <p>Dengan langkah-langkah ini, kamu bisa terus berkembang dan menjadi lebih mahir dalam menggunakan Scratch.</p>
    `,
  },
  {
    title: "Bab 6.3",
    subtitle: "Inspirasi Proyek Scratch",
    html: `
      <b>Inspirasi Proyek:</b>
      <ul>
        <li>Buat game sederhana seperti <i>Flappy Bird</i> atau <i>Maze Runner</i>.</li>
        <li>Ciptakan cerita interaktif dengan karakter yang bisa berbicara dan bergerak.</li>
        <li>Buat animasi edukasi untuk menjelaskan konsep tertentu, seperti siklus air atau tata surya.</li>
        <li>Eksperimen dengan musik dan suara untuk membuat proyek yang kreatif.</li>
      </ul>
      <p>Jangan takut untuk mencoba ide-ide baru dan bereksperimen dengan fitur Scratch!</p>
    `,
  },
];

let idx = 0;

function renderMateri6() {
  const container = document.getElementById("materi-content-container");
  const m = materiBab6[idx];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      <p>${m.html}</p>
    </div>
  `;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === materiBab6.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx > 0) {
    idx--;
    renderMateri6();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx < materiBab6.length - 1) {
    idx++;
    renderMateri6();
  }
};

// Inisialisasi pertama kali
renderMateri6();
