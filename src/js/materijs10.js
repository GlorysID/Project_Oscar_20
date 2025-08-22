const materiJSBab10 = [
  {
    title: "Bab 10",
    subtitle: "Event Handling <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Ngerti apa itu <b>event</b> di halaman web.</li>
        <li>Bisa pakai event bawaan seperti <code>onclick</code> dan <code>onchange</code>.</li>
        <li>Bisa pakai <code>addEventListener</code> biar lebih fleksibel.</li>
        <li>Paham cara pakai event object dan <code>preventDefault()</code> untuk kontrol aksi default.</li>
      </ul>
      <p>Event itu kayak <b>pemicu kejadian</b>. Misalnya kamu klik tombol → ada aksi. Kamu ngetik di input → ada aksi. Semua interaksi user di web sebenarnya bisa kita "tangkap" pakai event ini.</p>
    `,
  },

  {
    title: "Bab 10.1",
    subtitle: "Event Bawaan (onclick, onchange, dst)",
    html: `
      <p>Cara paling dasar pakai event adalah langsung nempelin ke elemen HTML.</p>
      
      <pre><code>&lt;button onclick="alert('Tombol diklik!')"&gt;Klik Aku&lt;/button&gt;

&lt;input type="text" onchange="alert('Isi input berubah!')" /&gt;</code></pre>

      <p><b>onclick</b> → jalan ketika tombol diklik.</p>
      <p><b>onchange</b> → jalan ketika isi input berubah lalu keluar fokus.</p>

      <p>⚠ Tapi cara ini ada kekurangan: kodenya campur sama HTML, jadi kurang rapi. Makanya ada cara lain yang lebih cakep: <code>addEventListener</code>.</p>
    `,
  },

  {
    title: "Bab 10.2",
    subtitle: "addEventListener",
    html: `
      <p><code>addEventListener</code> dipakai buat "nempelin" event ke elemen, tapi dengan cara lebih bersih.</p>

      <pre><code>const tombol = document.getElementById("btn");

tombol.addEventListener("click", function() {
  alert("Tombol diklik dengan addEventListener!");
});</code></pre>

      <p>Bedanya dengan <code>onclick</code>?</p>
      <ul>
        <li><b>Bisa lebih dari satu event</b> di elemen yang sama.</li>
        <li>Kodenya lebih rapi, nggak nyampur sama HTML.</li>
        <li>Lebih fleksibel kalau aplikasimu makin besar.</li>
      </ul>
    `,
  },

  {
    title: "Bab 10.3",
    subtitle: "Event Object",
    html: `
      <p>Setiap event yang terjadi bawa "oleh-oleh" berupa <b>event object</b>. Isinya info tentang kejadian itu: tombol apa yang diklik, elemen mana yang kena, posisi mouse, dll.</p>

      <pre><code>const tombol = document.getElementById("btn");

tombol.addEventListener("click", function(event) {
  console.log(event); // Lihat isi object event
  console.log("Yang diklik:", event.target);
});</code></pre>

      <p>Contoh: kalau kamu klik tombol, <code>event.target</code> bakal kasih tau elemen mana yang diklik.</p>
    `,
  },

  {
    title: "Bab 10.4",
    subtitle: "preventDefault()",
    html: `
      <p>Beberapa elemen punya <b>aksi default</b>. Misalnya:</p>
      <ul>
        <li>Link (<code>&lt;a&gt;</code>) → otomatis pindah halaman.</li>
        <li>Form → otomatis reload halaman setelah submit.</li>
      </ul>

      <p>Kalau kamu nggak mau aksi default itu jalan, kita bisa pakai <code>event.preventDefault()</code>.</p>

      <pre><code>const link = document.getElementById("mylink");

link.addEventListener("click", function(event) {
  event.preventDefault(); // cegah pindah halaman
  alert("Link diklik, tapi nggak pindah!");
});</code></pre>

      <p>Dengan begini, kita bisa kontrol penuh apa yang mau terjadi.</p>
    `,
  },

  {
    title: "Bab 10.5",
    subtitle: "Latihan Mini Bab 10",
    html: `
      <ol>
        <li>Buat tombol yang kalau diklik menampilkan pesan "Halo dunia!".</li>
        <li>Buat input teks yang kalau isinya berubah, tampilkan isi baru di console.</li>
        <li>Buat link palsu yang kalau diklik tidak pindah halaman, tapi menampilkan alert.</li>
        <li>Coba tampilkan isi <code>event</code> di console biar tahu informasi apa aja yang bisa dipakai.</li>
      </ol>

      <p>Checklist paham ✔: Kamu ngerti bedanya pakai <code>onclick</code> langsung vs <code>addEventListener</code>, tahu apa itu <b>event object</b>, dan bisa mencegah aksi default.</p>
    `,
  },
];

let idxJS10 = 0;

function renderMateriJS10() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab10[idxJS10];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS10 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS10 === materiJSBab10.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS10 > 0) {
    idxJS10--;
    renderMateriJS10();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS10 < materiJSBab10.length - 1) {
    idxJS10++;
    renderMateriJS10();
  }
};

// Inisialisasi pertama kali
renderMateriJS10();
