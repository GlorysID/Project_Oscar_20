const materiBab2 = [
  {
    title: "Bab 2",
    subtitle: "Jenis-Jenis Blok di Scratch",
    html: `
      Scratch memiliki berbagai jenis blok yang berwarna-warni dan mudah dikenali. Setiap warna mewakili fungsi yang berbeda. Berikut penjelasan lengkapnya:
      <br><br>
      <b>1. Motion (Gerakan) <span style="color:#4C97FF;">🟦</span></b><br>
      Blok biru ini digunakan untuk menggerakkan sprite. Contohnya:<br>
      <span style="background:#e3f2fd; border-radius:6px; padding:2px 8px;">move 10 steps</span> (bergerak 10 langkah), 
      <span style="background:#e3f2fd; border-radius:6px; padding:2px 8px;">turn 15 degrees</span> (memutar 15 derajat).
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-motion">move 10 steps</span>
        <span class="scratch-block scratch-motion">turn 15 degrees</span>
      </div>
      <br><br>
      <b>2. Looks (Tampilan) <span style="color:#9966FF;">🟪</span></b><br>
      Blok ungu ini untuk mengubah tampilan sprite, seperti berbicara, mengganti kostum, atau mengubah warna.<br>
      Contoh: <span style="background:#ede7f6; border-radius:6px; padding:2px 8px;">say Hello!</span>, 
      <span style="background:#ede7f6; border-radius:6px; padding:2px 8px;">switch costume to ...</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-looks">say Hello!</span>
        <span class="scratch-block scratch-looks">switch costume to ...</span>
      </div>
      <br><br>
      <b>3. Sound (Suara) <span style="color:#D65CD6;">🟫</span></b><br>
      Blok pink ini digunakan untuk memainkan suara atau musik.<br>
      Contoh: <span style="background:#fce4ec; border-radius:6px; padding:2px 8px;">play sound Meow</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-sound">play sound Meow</span>
      </div>
      <br><br>
      <b>4. Events (Peristiwa) <span style="color:#FFD500;">🟨</span></b><br>
      Blok kuning ini untuk memulai aksi, seperti saat bendera hijau diklik atau tombol ditekan.<br>
      Contoh: <span style="background:#fff9c4; border-radius:6px; padding:2px 8px;">when green flag clicked</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-events">when green flag clicked</span>
        <span class="scratch-block scratch-events">when space key pressed</span>
      </div>
      <br><br>
      <b>5. Control (Kontrol) <span style="color:#FFAB19;">🟧</span></b><br>
      Blok oranye ini digunakan untuk mengatur alur program, seperti pengulangan (loop) dan percabangan (if).<br>
      Contoh: <span style="background:#ffe0b2; border-radius:6px; padding:2px 8px;">repeat 10</span>, 
      <span style="background:#ffe0b2; border-radius:6px; padding:2px 8px;">if ... then</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-control">repeat 10</span>
        <span class="scratch-block scratch-control">if ... then</span>
      </div>
      <br><br>
      <b>6. Sensing (Sensor) <span style="color:#5CB1D6;">🟦</span></b><br>
      Blok biru muda ini untuk mendeteksi sesuatu, seperti menyentuh warna, suara, atau posisi mouse.<br>
      Contoh: <span style="background:#e1f5fe; border-radius:6px; padding:2px 8px;">touching color?</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-sensing">touching color?</span>
      </div>
      <br><br>
      <b>7. Operators (Operator) <span style="color:#59C059;">🟩</span></b><br>
      Blok hijau ini digunakan untuk operasi matematika, perbandingan, dan logika.<br>
      Contoh: <span style="background:#e8f5e9; border-radius:6px; padding:2px 8px;">pick random 1 to 10</span>, 
      <span style="background:#e8f5e9; border-radius:6px; padding:2px 8px;">join apple banana</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-operators">pick random 1 to 10</span>
        <span class="scratch-block scratch-operators">join apple banana</span>
      </div>
      <br><br>
      <b>8. Variables (Variabel) <span style="color:#FF8C1A;">🟧</span></b><br>
      Blok oranye tua ini untuk membuat dan mengatur variabel, seperti skor atau nyawa.<br>
      Contoh: <span style="background:#ffe0b2; border-radius:6px; padding:2px 8px;">set score to 0</span>
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-variables">set score to 0</span>
      </div>
      <br><br>
      <b>9. My Blocks (Blok Buatan Sendiri) <span style="color:#FF6680;">🟥</span></b><br>
      Blok merah muda ini digunakan untuk membuat blok sendiri sesuai kebutuhan, agar kode lebih rapi dan mudah digunakan ulang.
      <div style="margin: 10px 0;">
        <span class="scratch-block scratch-myblocks">my custom block</span>
      </div>
      <br><br>
      <b>Tips:</b><br>
      <ul>
        <li>Setiap blok hanya bisa digunakan pada tempat yang sesuai (misal, blok Motion hanya untuk sprite).</li>
        <li>Blok-blok bisa digabungkan seperti puzzle untuk membuat program yang seru!</li>
        <li>Eksperimenlah dengan mengubah nilai pada blok untuk melihat efeknya.</li>
      </ul>
      <b>Yuk, coba susun blok-blok ini dan lihat apa yang terjadi pada sprite-mu!</b>
    `,
  },
  {
    title: "Bab 2.1",
    subtitle: "Motion (Gerakan)",
    html: `
      <b>Motion (Gerakan) <span style="color:#4C97FF;">🟦</span></b><br>
      Blok biru ini digunakan untuk menggerakkan sprite.<br>
      <span class="scratch-block scratch-motion">move 10 steps</span>
      <span class="scratch-block scratch-motion">turn 15 degrees</span>
      <br><br>
      <i>Contoh: Sprite bergerak ke kanan atau berputar.</i>
    `,
  },
  {
    title: "Bab 2.2",
    subtitle: "Looks (Tampilan)",
    html: `
      <b>Looks (Tampilan) <span style="color:#9966FF;">🟪</span></b><br>
      Blok ungu ini untuk mengubah tampilan sprite.<br>
      <span class="scratch-block scratch-looks">say Hello!</span>
      <span class="scratch-block scratch-looks">switch costume to ...</span>
      <br><br>
      <i>Contoh: Sprite berbicara atau ganti kostum.</i>
    `,
  },
  {
    title: "Bab 2.3",
    subtitle: "Sound (Suara)",
    html: `
      <b>Sound (Suara) <span style="color:#D65CD6;">🟫</span></b><br>
      Blok pink ini digunakan untuk memainkan suara.<br>
      <span class="scratch-block scratch-sound">play sound Meow</span>
      <br><br>
      <i>Contoh: Sprite mengeluarkan suara.</i>
    `,
  },
  {
    title: "Bab 2.4",
    subtitle: "Events (Peristiwa)",
    html: `
      <b>Events (Peristiwa) <span style="color:#FFD500;">🟨</span></b><br>
      Blok kuning ini untuk memulai aksi.<br>
      <span class="scratch-block scratch-events">when green flag clicked</span>
      <span class="scratch-block scratch-events">when space key pressed</span>
      <br><br>
      <i>Contoh: Program mulai saat bendera hijau diklik.</i>
    `,
  },
  {
    title: "Bab 2.5",
    subtitle: "Control (Kontrol)",
    html: `
      <b>Control (Kontrol) <span style="color:#FFAB19;">🟧</span></b><br>
      Blok oranye ini untuk pengulangan dan percabangan.<br>
      <span class="scratch-block scratch-control">repeat 10</span>
      <span class="scratch-block scratch-control">if ... then</span>
      <br><br>
      <i>Contoh: Mengulang aksi atau membuat keputusan.</i>
    `,
  },
  {
    title: "Bab 2.6",
    subtitle: "Sensing (Sensor)",
    html: `
      <b>Sensing (Sensor) <span style="color:#5CB1D6;">🟦</span></b><br>
      Blok biru muda ini untuk mendeteksi sesuatu.<br>
      <span class="scratch-block scratch-sensing">touching color?</span>
      <br><br>
      <i>Contoh: Deteksi sentuhan warna atau posisi mouse.</i>
    `,
  },
  {
    title: "Bab 2.7",
    subtitle: "Operators (Operator)",
    html: `
      <b>Operators (Operator) <span style="color:#59C059;">🟩</span></b><br>
      Blok hijau ini untuk operasi matematika dan logika.<br>
      <span class="scratch-block scratch-operators">pick random 1 to 10</span>
      <span class="scratch-block scratch-operators">join apple banana</span>
      <br><br>
      <i>Contoh: Mengacak angka atau menggabungkan teks.</i>
    `,
  },
  {
    title: "Bab 2.8",
    subtitle: "Variables (Variabel)",
    html: `
      <b>Variables (Variabel) <span style="color:#FF8C1A;">🟧</span></b><br>
      Blok oranye tua ini untuk membuat dan mengatur variabel.<br>
      <span class="scratch-block scratch-variables">set score to 0</span>
      <br><br>
      <i>Contoh: Menyimpan skor atau data lain.</i>
    `,
  },
  {
    title: "Bab 2.9",
    subtitle: "My Blocks (Blok Buatan Sendiri)",
    html: `
      <b>My Blocks (Blok Buatan Sendiri) <span style="color:#FF6680;">🟥</span></b><br>
      Blok merah muda ini untuk membuat blok sendiri.<br>
      <span class="scratch-block scratch-myblocks">my custom block</span>
      <br><br>
      <i>Contoh: Membuat fungsi sendiri agar kode lebih rapi.</i>
    `,
  },
];

let idx = 0;

function renderMateri() {
  const container = document.getElementById("materi-content-container");
  const m = materiBab2[idx];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      <p>${m.html}</p>
    </div>
  `;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === materiBab2.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx > 0) {
    idx--;
    renderMateri();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx < materiBab2.length - 1) {
    idx++;
    renderMateri();
  }
};

// Inisialisasi pertama kali
renderMateri();
