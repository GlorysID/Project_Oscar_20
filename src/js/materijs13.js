const materiJSBab13 = [
  {
    title: "Bab 13",
    subtitle: "Mini Project JavaScript <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menggabungkan pengetahuan dari bab sebelumnya ke proyek nyata.</li>
        <li>Melatih logika pemrograman sambil bikin aplikasi kecil.</li>
        <li>Merasakan gimana JavaScript bisa bikin halaman web jadi hidup.</li>
      </ul>
      <p>Belajar coding itu kayak belajar masak. Teori bumbu dan resep doang nggak cukup.  
      Harus praktek bikin masakan beneran biar ngerasain hasilnya.  
      Nah, proyek kecil ini adalah "masakan" pertama kita di dunia JavaScript. 🍳</p>
    `,
  },

  {
    title: "Bab 13.1",
    subtitle: "Kalkulator Sederhana",
    html: `
      <p>Pertama, kita bikin kalkulator sederhana: bisa tambah, kurang, kali, bagi.  
      Konsepnya simpel: ambil angka dari input, lalu hitung pas tombol ditekan.</p>

      <pre><code>// HTML (contoh singkat)
&lt;input id="angka1" type="number" placeholder="Angka pertama"&gt;
&lt;input id="angka2" type="number" placeholder="Angka kedua"&gt;
&lt;button onclick="tambah()">+</button&gt;
&lt;button onclick="kurang()">-</button&gt;
&lt;p id="hasil"></p&gt;

// JavaScript
function tambah() {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  document.getElementById("hasil").innerText = "Hasil: " + (a + b);
}

function kurang() {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  document.getElementById("hasil").innerText = "Hasil: " + (a - b);
}</code></pre>

      <p>Kalau mau lengkap bisa ditambah tombol kali (×) dan bagi (÷).  
      Intinya kita udah belajar manipulasi DOM + event click → sekarang kepake!</p>
    `,
  },

  {
    title: "Bab 13.2",
    subtitle: "To-Do List",
    html: `
      <p>Siapa sih yang nggak pernah bikin catatan tugas? Nah, to-do list ini bisa jadi aplikasi kecil untuk mencatat hal-hal yang harus kita lakukan.</p>

      <pre><code>// HTML
&lt;input id="inputTodo" placeholder="Tulis kegiatan..."&gt;
&lt;button onclick="tambahTodo()">Tambah</button&gt;
&lt;ul id="listTodo"></ul&gt;

// JavaScript
function tambahTodo() {
  const input = document.getElementById("inputTodo");
  const teks = input.value;

  if (teks.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = teks;
    document.getElementById("listTodo").appendChild(li);
    input.value = ""; // reset input
  }
}</code></pre>

      <p>Tiap kali kita nulis teks lalu klik "Tambah", item baru muncul di daftar.  
      Bisa dikembangin: item bisa dicoret kalau udah selesai, atau dihapus pakai tombol ❌.</p>
    `,
  },

  {
    title: "Bab 13.3",
    subtitle: "Quiz Interaktif",
    html: `
      <p>Sekarang bikin yang lebih seru: <b>Quiz Interaktif</b>.  
      Konsepnya: tampilkan pertanyaan → user pilih jawaban → cek benar/salah → kasih feedback.</p>

      <pre><code>// HTML
&lt;p id="pertanyaan"&gt;Apa ibu kota Indonesia?&lt;/p&gt;
&lt;button onclick="jawab('Jakarta')"&gt;Jakarta&lt;/button&gt;
&lt;button onclick="jawab('Bandung')"&gt;Bandung&lt;/button&gt;
&lt;p id="feedback"&gt;&lt;/p&gt;

// JavaScript
function jawab(pilihan) {
  const feedback = document.getElementById("feedback");
  if (pilihan === "Jakarta") {
    feedback.innerText = "Benar! 🎉";
  } else {
    feedback.innerText = "Salah, coba lagi 😅";
  }
}</code></pre>

      <p>Dari sini, quiz bisa dikembangin jadi lebih panjang: ada banyak soal, skor dihitung, dan akhirnya tampil "Nilai kamu sekian!".</p>
    `,
  },

  {
    title: "Bab 13.4",
    subtitle: "Latihan Mini Bab 13",
    html: `
      <ol>
        <li>Kembangkan kalkulator supaya bisa menghitung pangkat (misal: 2³).</li>
        <li>Buat to-do list yang bisa hapus item dengan klik 2x (double click).</li>
        <li>Bikin quiz dengan 3 soal, lalu kasih skor akhir setelah semua soal dijawab.</li>
      </ol>
      <p>Checklist paham ✔: Kamu udah bisa gabungin HTML + CSS + JavaScript buat bikin aplikasi kecil yang nyata.</p>
    `,
  },
];

let idxJS13 = 0;

function renderMateriJS13() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab13[idxJS13];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS13 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS13 === materiJSBab13.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS13 > 0) {
    idxJS13--;
    renderMateriJS13();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS13 < materiJSBab13.length - 1) {
    idxJS13++;
    renderMateriJS13();
  }
};

// Inisialisasi pertama kali
renderMateriJS13();
