const materiCSSBab10 = [
  {
    title: "Bab 10 CSS",
    subtitle: "Transition & Animation <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami <b>transition</b> untuk efek perubahan halus.</li>
        <li>Menggunakan <b>transform</b> untuk merubah ukuran, posisi, atau rotasi elemen.</li>
        <li>Membuat animasi dengan <b>@keyframes</b>.</li>
      </ul>
      <p>Dengan ini, web kita tidak cuma statis, tapi punya efek yang menarik dan interaktif. 🎨</p>
    `,
  },

  {
    title: "Bab 10.1",
    subtitle: "Transition",
    html: `
      <p><b>Transition</b> memungkinkan elemen berubah secara halus dari satu state ke state lain.</p>
      <ul>
        <li><b>property</b>: properti CSS yang akan diubah (misal: background-color).</li>
        <li><b>duration</b>: berapa lama efek berlangsung (misal: 0.5s).</li>
        <li><b>timing-function</b>: percepatan efek (linear, ease, ease-in, ease-out).</li>
      </ul>
      <pre><code>.box {
  background-color: red;
  transition: background-color 0.5s ease;
}

.box:hover {
  background-color: blue;
}</code></pre>
      <p>Jadi saat mouse hover, kotak akan berubah warna secara halus, bukan tiba-tiba.</p>
    `,
  },

  {
    title: "Bab 10.2",
    subtitle: "Transform",
    html: `
      <p><b>Transform</b> memungkinkan kita mengubah bentuk atau posisi elemen:</p>
      <ul>
        <li><b>scale(x, y)</b>: memperbesar/memperkecil elemen.</li>
        <li><b>rotate(deg)</b>: memutar elemen.</li>
        <li><b>translate(x, y)</b>: menggeser posisi elemen.</li>
      </ul>
      <pre><code>.box:hover {
  transform: scale(1.2) rotate(15deg) translate(10px, 5px);
}</code></pre>
      <p>Dengan transform, elemen bisa lebih hidup dan interaktif.</p>
    `,
  },

  {
    title: "Bab 10.3",
    subtitle: "Animation dengan @keyframes",
    html: `
      <p>Kalau transition hanya untuk perubahan state, <b>animation</b> bisa bikin pergerakan berulang.</p>
      <pre><code>@keyframes bergerak {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

.box {
  animation: bergerak 2s infinite;
}</code></pre>
      <p>Box akan bergerak bolak-balik terus menerus. Bisa diatur durasi, delay, dan jumlah iterasi.</p>
    `,
  },

  {
    title: "Bab 10.4",
    subtitle: "Tips Praktis Transition & Animation",
    html: `
      <ul>
        <li>Gunakan transition untuk efek hover sederhana.</li>
        <li>Gunakan animation untuk efek kompleks atau loop.</li>
        <li>Gabungkan transform dengan transition/animation supaya gerakan lebih smooth.</li>
        <li>Jangan berlebihan, efek banyak tapi lambat bikin user pusing.</li>
      </ul>
      <p>Ingat, tujuan animasi di web: bikin interaksi lebih menarik tapi tetap nyaman dilihat. 😎</p>
    `,
  },

  {
    title: "Bab 10.5",
    subtitle: "Latihan Mini Bab 10",
    html: `
      <ol>
        <li>Buat kotak merah 100x100px, lalu beri efek hover berubah warna biru dengan transition 0.5s.</li>
        <li>Tambahkan transform: scale(1.2) saat hover.</li>
        <li>Buat animasi @keyframes supaya kotak bergerak bolak-balik horizontal.</li>
        <li>Eksperimen durasi, delay, dan timing-function untuk melihat efek berbeda.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa pakai transition, transform, animation, dan kombinasi semuanya untuk web lebih interaktif.</p>
    `,
  },
];

let idxCSS10 = 0;

function renderMateriCSS10() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab10[idxCSS10];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS10 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS10 === materiCSSBab10.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS10 > 0) {
    idxCSS10--;
    renderMateriCSS10();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS10 < materiCSSBab10.length - 1) {
    idxCSS10++;
    renderMateriCSS10();
  }
};

// Inisialisasi pertama kali
renderMateriCSS10();
