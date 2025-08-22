const materiPyBab1 = [
  {
    title: "Bab 1",
    subtitle: "Pengenalan Python <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kenalan dengan bahasa Python dan kenapa populer banget.</li>
        <li>Tau kegunaan Python di dunia nyata (data, web, AI, otomasi).</li>
        <li>Bisa bikin program Python pertama: <b>Hello World!</b></li>
      </ul>
      <p>Python itu kayak bahasa manusia tapi buat komputer 🐍.  
      Gak ribet, gampang dibaca, gampang ditulis.  
      Makanya banyak pemula dan profesional suka banget pake Python.</p>
    `,
  },

  {
    title: "Bab 1.1",
    subtitle: "Apa itu Python?",
    html: `
      <p>Python adalah bahasa pemrograman yang <b>sederhana dan serba guna</b>.  
      Kalau bahasa lain itu suka ribet banyak tanda aneh, Python tuh clean dan to the point.</p>

      <p>Python bisa dipakai buat banyak hal:</p>
      <ul>
        <li><b>Data Science & AI</b> – ngolah data, bikin AI, machine learning.</li>
        <li><b>Web Development</b> – bikin website pakai Django atau Flask.</li>
        <li><b>Otomasi</b> – biar kerjaan kantor yang berulang bisa otomatis.</li>
        <li><b>Game & IoT</b> – bahkan bisa dipakai buat bikin game atau robot kecil.</li>
      </ul>
      <p>Ibarat Swiss Army Knife, Python itu serba bisa! 🔧</p>
    `,
  },

  {
    title: "Bab 1.2",
    subtitle: "Kenapa Harus Python?",
    html: `
      <p>Alasan banyak orang jatuh hati sama Python:</p>
      <ul>
        <li><b>Mudah dipelajari</b> – cocok buat pemula yang baru mulai ngoding.</li>
        <li><b>Sintaks sederhana</b> – mirip bahasa Inggris sehari-hari.</li>
        <li><b>Banyak library</b> – tinggal pakai, gak usah bikin dari nol.</li>
        <li><b>Komunitas besar</b> – kalau bingung, banyak yang bisa bantu.</li>
      </ul>

      <pre><code># Bandingin deh:
# Python: cetak hello world
print("Hello, World!")

# Bahasa lain: bisa lebih ribet, pake tanda kurung & titik koma
</code></pre>

      <p>Lihat kan? Python keliatan lebih enak dibaca.  
      Kayak ngobrol aja sama komputer. 🖥️</p>
    `,
  },

  {
    title: "Bab 1.3",
    subtitle: "Program Pertama: Hello World",
    html: `
      <p>Tradisi di dunia programming: bikin program pertama yang nulis <b>"Hello World"</b>.  
      Di Python, gampang banget:</p>

      <pre><code># hello.py
print("Hello, World!")
</code></pre>

      <p>Kalau dijalankan, hasilnya:</p>
      <pre><code>Hello, World!</code></pre>

      <p>Udah deh, kamu resmi jadi “programmer Python” 🎉</p>
    `,
  },

  {
    title: "Bab 1.4",
    subtitle: "Latihan Bab 1",
    html: `
      <ol>
        <li>Install Python di laptop (download di python.org).</li>
        <li>Bikin file baru <code>hello.py</code>.</li>
        <li>Tulis program <code>print("Halo, Aku lagi belajar Python!")</code>.</li>
        <li>Jalankan programnya → nikmati hasilnya ✅</li>
      </ol>
      <p>Kalau udah bisa jalanin program pertama, artinya kamu udah berhasil buka pintu dunia Python. 🚪🐍</p>
    `,
  },
];

let idxPy1 = 0;

function renderMateriPy1() {
  const container = document.getElementById("materi-content-container");
  const m = materiPyBab1[idxPy1];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxPy1 === 0;
  document.getElementById("nextBtn").disabled =
    idxPy1 === materiPyBab1.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxPy1 > 0) {
    idxPy1--;
    renderMateriPy1();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxPy1 < materiPyBab1.length - 1) {
    idxPy1++;
    renderMateriPy1();
  }
};

// Inisialisasi pertama kali
renderMateriPy1();
