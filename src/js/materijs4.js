const materiJSBab4 = [
  {
    title: "Bab 4",
    subtitle: "Struktur Kontrol <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami bagaimana program bisa mengambil keputusan.</li>
        <li>Mengenal percabangan <code>if</code>, <code>else if</code>, dan <code>else</code>.</li>
        <li>Memahami cara menggunakan <code>switch</code> untuk kondisi banyak pilihan.</li>
        <li>Mengenal operator ternary sebagai versi singkat dari if-else.</li>
      </ul>
      <p>Struktur kontrol = "jalan bercabang" dalam program. 🚦</p>
    `,
  },

  {
    title: "Bab 4.1",
    subtitle: "Percabangan If, Else If, Else",
    html: `
      <p><b>if</b> dipakai untuk menjalankan kode jika kondisi benar (true).</p>
      <pre><code>let umur = 20;

if (umur >= 18) {
  console.log("Kamu sudah dewasa");
}</code></pre>

      <p><b>else</b> dipakai jika kondisi tidak terpenuhi.</p>
      <pre><code>let umur = 15;

if (umur >= 18) {
  console.log("Kamu sudah dewasa");
} else {
  console.log("Kamu masih anak-anak");
}</code></pre>

      <p><b>else if</b> dipakai kalau ada beberapa kondisi berbeda.</p>
      <pre><code>let nilai = 85;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else if (nilai >= 60) {
  console.log("C");
} else {
  console.log("D");
}</code></pre>

      <p>Dengan <b>if-else</b>, kita bisa bikin logika yang fleksibel sesuai kebutuhan. 🎯</p>
    `,
  },

  {
    title: "Bab 4.2",
    subtitle: "Switch Statement",
    html: `
      <p><b>switch</b> cocok untuk kondisi dengan banyak pilihan.</p>
      <pre><code>let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja dimulai");
    break;
  case "Sabtu":
    console.log("Waktunya liburan!");
    break;
  case "Minggu":
    console.log("Hari santai 😎");
    break;
  default:
    console.log("Hari biasa aja");
}</code></pre>

      <ul>
        <li><code>case</code> → pilihan kondisi.</li>
        <li><code>break</code> → keluar dari switch (wajib biar ga lanjut terus).</li>
        <li><code>default</code> → kondisi fallback kalau tidak ada yang cocok.</li>
      </ul>

      <p>Switch itu seperti "menu pilihan" → pilih salah satu yang cocok. 📋</p>
    `,
  },

  {
    title: "Bab 4.3",
    subtitle: "Ternary Operator",
    html: `
      <p>Operator ternary adalah versi singkat dari <code>if-else</code>.</p>
      <p>Struktur: <code>kondisi ? hasil_jika_true : hasil_jika_false</code></p>
      <pre><code>let umur = 20;

let status = umur >= 18 ? "Dewasa" : "Anak-anak";
console.log(status);  // Dewasa</code></pre>

      <p>Kalau kondisi panjang, lebih baik tetap pakai <code>if-else</code> supaya jelas.  
      Tapi kalau simpel → ternary bikin kode lebih ringkas. ✨</p>
    `,
  },

  {
    title: "Bab 4.4",
    subtitle: "Contoh Gabungan",
    html: `
      <p>Contoh: menentukan tiket bioskop.</p>
      <pre><code>let umur = 16;
let punyaKTM = true;

if (umur >= 18) {
  console.log("Boleh nonton film dewasa");
} else if (umur >= 13 && umur < 18) {
  console.log("Boleh nonton film remaja");
} else {
  console.log("Hanya boleh nonton film anak-anak");
}

// Pakai ternary untuk diskon mahasiswa
let harga = 50000;
let hargaAkhir = punyaKTM ? harga * 0.8 : harga;
console.log("Harga tiket: " + hargaAkhir);</code></pre>

      <p>Lihat? Gabungan if-else + ternary bikin logika makin dinamis. 🔥</p>
    `,
  },

  {
    title: "Bab 4.5",
    subtitle: "Tips Praktis Struktur Kontrol",
    html: `
      <ul>
        <li>Pakai <code>if-else</code> kalau kondisinya fleksibel.</li>
        <li>Pakai <code>switch</code> kalau pilihannya banyak dan tetap (misal hari, bulan, menu).</li>
        <li>Pakai <code>ternary</code> kalau kondisi singkat (biar lebih ringkas).</li>
        <li>Jangan lupa <code>break</code> di setiap <code>case</code> switch!</li>
      </ul>
      <p>Dengan struktur kontrol, programmu bisa berpikir dan memilih jalan. 🧠</p>
    `,
  },

  {
    title: "Bab 4.6",
    subtitle: "Latihan Bab 4",
    html: `
      <ol>
        <li>Buat program cek nilai mahasiswa (A, B, C, D) dengan <code>if-else if</code>.</li>
        <li>Buat program cek hari pakai <code>switch</code>, tampilkan pesan berbeda tiap hari.</li>
        <li>Buat variabel <code>umur</code>, lalu tentukan status "Dewasa" atau "Anak-anak" pakai ternary.</li>
        <li>Gabungkan logika if-else + ternary dalam satu kasus nyata (misalnya tiket, membership, dsb).</li>
      </ol>
      <p>Checklist paham ✔: Kamu sudah bisa bikin program yang bisa "memilih jalan" sendiri. 🎉</p>
    `,
  },
];

let idxJS4 = 0;

function renderMateriJS4() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab4[idxJS4];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS4 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS4 === materiJSBab4.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS4 > 0) {
    idxJS4--;
    renderMateriJS4();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS4 < materiJSBab4.length - 1) {
    idxJS4++;
    renderMateriJS4();
  }
};

// Inisialisasi pertama kali
renderMateriJS4();
