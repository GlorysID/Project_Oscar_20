const materiJSBab9 = [
  {
    title: "Bab 9",
    subtitle: "DOM (Document Object Model) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Ngerti apa itu DOM dan kenapa penting.</li>
        <li>Bisa ngambil elemen HTML pakai <code>getElementById</code> & <code>querySelector</code>.</li>
        <li>Bisa ubah isi HTML & gaya CSS lewat JavaScript.</li>
        <li>Bisa bikin halaman lebih interaktif dengan event listener.</li>
      </ul>
      <p>DOM itu kayak <b>remote control</b> buat halaman web. Tanpa DOM, JavaScript cuma bengong aja, nggak bisa nyentuh tulisan, tombol, atau warna di layar.</p>
    `,
  },

  {
    title: "Bab 9.1",
    subtitle: "Mengambil Elemen HTML",
    html: `
      <p>Kalau mau ngedit sesuatu di HTML, ya harus <b>nemuin dulu</b> elemennya.</p>

      <h4>1) getElementById</h4>
      <pre><code>&lt;h1 id="judul"&gt;Halo Dunia!&lt;/h1&gt;

const judul = document.getElementById("judul");
console.log(judul.textContent); // "Halo Dunia!"</code></pre>

      <h4>2) querySelector</h4>
      <pre><code>&lt;p class="teks"&gt;Belajar DOM itu asik!&lt;/p&gt;

const paragraf = document.querySelector(".teks");
console.log(paragraf.textContent); // "Belajar DOM itu asik!"</code></pre>

      <p><b>querySelector</b> lebih fleksibel karena bisa pakai selector CSS (#id, .class, tag).</p>
    `,
  },

  {
    title: "Bab 9.2",
    subtitle: "Manipulasi HTML & CSS",
    html: `
      <p>Setelah elemennya ketemu, kita bisa ubah isi atau stylenya.</p>

      <h4>Ubah isi teks</h4>
      <pre><code>judul.textContent = "Selamat Datang!";
judul.innerHTML = "&lt;span style='color:red'&gt;Teks Merah&lt;/span&gt;";</code></pre>

      <h4>Ubah gaya (CSS)</h4>
      <pre><code>judul.style.color = "blue";
judul.style.fontSize = "30px";
judul.style.textAlign = "center";</code></pre>

      <p>Gampangnya: <b>JavaScript = tukang dekor</b>, bisa ganti warna, ukuran, posisi elemen.</p>
    `,
  },

  {
    title: "Bab 9.3",
    subtitle: "Event Listener: Bikin Halaman Hidup",
    html: `
      <p>Event = kejadian. Misalnya tombol diklik, teks diketik, atau form dikirim.</p>
      <p>Pakai <code>addEventListener</code> buat nangkep kejadian itu.</p>

      <h4>1) Click</h4>
      <pre><code>&lt;button id="tombol"&gt;Klik Aku!&lt;/button&gt;
&lt;p id="pesan"&gt;&lt;/p&gt;

const tombol = document.getElementById("tombol");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", () =&gt; {
  pesan.textContent = "Tombol sudah diklik!";
});</code></pre>

      <h4>2) Input</h4>
      <pre><code>&lt;input id="nama" placeholder="Ketik namamu"&gt;
&lt;p id="output"&gt;&lt;/p&gt;

const namaInput = document.getElementById("nama");
const output = document.getElementById("output");

namaInput.addEventListener("input", () =&gt; {
  output.textContent = "Halo, " + namaInput.value;
});</code></pre>
    `,
  },

  {
    title: "Bab 9.4",
    subtitle: "Event Submit (Form)",
    html: `
      <p>Form biasanya reload halaman pas dikirim. Supaya bisa kita atur sendiri, pakai <code>event.preventDefault()</code>.</p>

      <pre><code>&lt;form id="form"&gt;
  &lt;input id="username" placeholder="Username"&gt;
  &lt;button type="submit"&gt;Kirim&lt;/button&gt;
&lt;/form&gt;
&lt;p id="hasil"&gt;&lt;/p&gt;

const form = document.getElementById("form");
const username = document.getElementById("username");
const hasil = document.getElementById("hasil");

form.addEventListener("submit", (event) =&gt; {
  event.preventDefault();
  hasil.textContent = "Form dikirim! Username: " + username.value;
});</code></pre>
    `,
  },

  {
    title: "Bab 9.5",
    subtitle: "Latihan Mini Bab 9",
    html: `
      <ol>
        <li>Buat tombol "Ganti Warna" → saat diklik, ubah background halaman.</li>
        <li>Buat input teks → setiap ketik, hasilnya muncul di bawah.</li>
        <li>Buat form login sederhana → kalau username kosong, tampilkan pesan error.</li>
      </ol>
      <p>Checklist ✔: Kamu bisa ambil elemen, ubah isi/gaya, dan pasang event listener.</p>
    `,
  },
];

let idxJS9 = 0;

function renderMateriJS9() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab9[idxJS9];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS9 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS9 === materiJSBab9.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS9 > 0) {
    idxJS9--;
    renderMateriJS9();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS9 < materiJSBab9.length - 1) {
    idxJS9++;
    renderMateriJS9();
  }
};

// Inisialisasi pertama kali
renderMateriJS9();
