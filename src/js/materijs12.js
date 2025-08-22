const materiJSBab12 = [
  {
    title: "Bab 12",
    subtitle: "Timer & Interval <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Ngerti apa itu <code>setTimeout</code> dan kapan dipakai.</li>
        <li>Ngerti apa itu <code>setInterval</code> dan fungsinya.</li>
        <li>Bisa bikin <b>countdown sederhana</b> pakai interval.</li>
      </ul>
      <p>Bayangin kamu punya asisten pribadi. Kamu bilang: 
      "Eh, ingetin aku 5 detik lagi buat minum teh ya."  
      Nah, si asisten bakal ngingetin kamu pas waktunya.  
      Itulah <b>timer</b> di JavaScript: ngasih perintah ke "mesin waktu" biar jalanin sesuatu nanti, bukan langsung sekarang.</p>
    `,
  },

  {
    title: "Bab 12.1",
    subtitle: "setTimeout()",
    html: `
      <p><b>setTimeout</b> itu kayak alarm sekali bunyi.  
      Kamu bilang: "Jalankan ini setelah X detik (atau milidetik)".  
      Habis bunyi → selesai, nggak ngulang lagi.</p>

      <pre><code>console.log("Halo");
setTimeout(function() {
  console.log("Ini muncul setelah 2 detik");
}, 2000);
console.log("Apa kabar?");</code></pre>

      <p>Output-nya:</p>
      <pre><code>Halo
Apa kabar?
(2 detik kemudian...)
Ini muncul setelah 2 detik</code></pre>

      <p>Lihat? Kode setelahnya tetap jalan duluan, baru "alarm"-nya bunyi belakangan.</p>
    `,
  },

  {
    title: "Bab 12.2",
    subtitle: "setInterval()",
    html: `
      <p><b>setInterval</b> itu kayak jam weker yang bunyi terus tiap menit.  
      Jadi, bukan sekali aja kayak <code>setTimeout</code>, tapi berulang-ulang sesuai interval waktu yang ditentukan.</p>

      <pre><code>setInterval(function() {
  console.log("Halo lagi (tiap 1 detik)");
}, 1000);</code></pre>

      <p>Kode di atas bikin tulisan "Halo lagi" muncul terus tiap detik.  
      Tapi hati-hati, kalau nggak dihentikan bisa spam terus-terusan. 😅</p>

      <p>Untuk menghentikan, kita bisa pakai <code>clearInterval</code> (nanti dijelasin lebih lanjut di latihan).</p>
    `,
  },

  {
    title: "Bab 12.3",
    subtitle: "Membuat Countdown Sederhana",
    html: `
      <p>Sekarang kita bikin yang sering dipakai: <b>countdown</b>.  
      Misalnya: hitung mundur dari 5 sampai 0, terus muncul pesan "Waktu habis!".</p>

      <pre><code>let detik = 5;

const timer = setInterval(function() {
  console.log("Sisa waktu:", detik);
  detik--;

  if (detik < 0) {
    clearInterval(timer); // stop interval
    console.log("Waktu habis!");
  }
}, 1000);</code></pre>

      <p>Cara kerjanya:</p>
      <ul>
        <li>Mulai dari angka 5.</li>
        <li>Tiap 1 detik → angka berkurang 1.</li>
        <li>Kalau sudah lewat 0 → hentikan interval, tampilkan "Waktu habis!".</li>
      </ul>
    `,
  },

  {
    title: "Bab 12.4",
    subtitle: "Latihan Mini Bab 12",
    html: `
      <ol>
        <li>Pakai <code>setTimeout</code> untuk menampilkan pesan "Halo dunia" setelah 3 detik.</li>
        <li>Pakai <code>setInterval</code> untuk menampilkan jam (pakai <code>new Date().toLocaleTimeString()</code>) tiap detik.</li>
        <li>Bikin countdown dari 10 ke 0, lalu muncul pesan "Boom! 🚀".</li>
      </ol>

      <p>Checklist paham ✔: Kamu bisa bedain <b>setTimeout</b> (sekali jalan) dan <b>setInterval</b> (berulang), serta bikin countdown sederhana.</p>
    `,
  },
];

let idxJS12 = 0;

function renderMateriJS12() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab12[idxJS12];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS12 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS12 === materiJSBab12.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS12 > 0) {
    idxJS12--;
    renderMateriJS12();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS12 < materiJSBab12.length - 1) {
    idxJS12++;
    renderMateriJS12();
  }
};

// Inisialisasi pertama kali
renderMateriJS12();
