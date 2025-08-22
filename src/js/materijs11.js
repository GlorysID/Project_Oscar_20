const materiJSBab11 = [
  {
    title: "Bab 11",
    subtitle: "Form Validation & Interaksi User <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Ngerti apa itu validasi form dan kenapa penting.</li>
        <li>Bisa ambil nilai (value) dari input di form.</li>
        <li>Bisa kasih <b>feedback visual</b> ke user biar interaksinya enak.</li>
      </ul>
      <p>Form itu kayak <b>gerbang utama</b> masuk data ke aplikasi. Misalnya form login, register, atau isi alamat. 
      Nah, kita harus pastiin data yang masuk itu <i>valid</i> (nggak kosong, format benar, dll). 
      Bayangin kalau semua orang bisa isi email asal-asalan kayak "abc@xyz" → sistemmu bisa jadi error atau nggak berguna.</p>
    `,
  },

  {
    title: "Bab 11.1",
    subtitle: "Validasi Input Sederhana",
    html: `
      <p>Validasi artinya <b>ngecek apakah input sudah sesuai aturan</b>. Misalnya: nama nggak boleh kosong, email harus ada @, umur harus angka.</p>
      
      <pre><code>const form = document.getElementById("myForm");
const inputNama = document.getElementById("nama");

form.addEventListener("submit", function(event) {
  if (inputNama.value === "") {
    alert("Nama tidak boleh kosong!");
    event.preventDefault(); // cegah form terkirim
  }
});</code></pre>

      <p>Di sini kita cek: kalau nama kosong → tampilkan pesan + cegah submit.</p>
      <p>⚠ Kalau lupa validasi, nanti data aneh-aneh bisa masuk ke sistemmu.</p>
    `,
  },

  {
    title: "Bab 11.2",
    subtitle: "Menangkap Value Form",
    html: `
      <p>Setiap input di form punya <b>value</b>. Nah, buat ngambilnya tinggal pakai <code>.value</code>.</p>

      <pre><code>const inputEmail = document.getElementById("email");
console.log("Isi email:", inputEmail.value);</code></pre>

      <p>Contoh di form login:</p>
      <pre><code>form.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = inputEmail.value;
  const password = document.getElementById("password").value;
  console.log("Email:", email, "Password:", password);
});</code></pre>

      <p>Dengan begini, kita bisa ambil semua data yang diisi user.</p>
    `,
  },

  {
    title: "Bab 11.3",
    subtitle: "Memberikan Feedback Visual ke User",
    html: `
      <p>User suka yang jelas. Kalau ada error, kasih tahu dengan <b>visual</b>, jangan cuma diam. 
      Contoh: warna merah kalau salah, warna hijau kalau benar.</p>

      <pre><code>inputEmail.addEventListener("input", function() {
  if (inputEmail.value.includes("@")) {
    inputEmail.style.borderColor = "green"; // valid
  } else {
    inputEmail.style.borderColor = "red";   // tidak valid
  }
});</code></pre>

      <p>Dengan begini, user langsung tahu apakah inputnya oke atau belum, tanpa harus submit dulu.</p>

      <p>Tips:</p>
      <ul>
        <li>Gunakan warna (merah/hijau).</li>
        <li>Tambahkan pesan kecil di bawah input (misalnya "Email tidak valid").</li>
        <li>Biarin interaksi terasa ramah dan jelas.</li>
      </ul>
    `,
  },

  {
    title: "Bab 11.4",
    subtitle: "Latihan Mini Bab 11",
    html: `
      <ol>
        <li>Bikin form sederhana dengan input <code>nama</code> dan <code>email</code>. 
        Validasi: nama tidak boleh kosong, email harus mengandung <code>@</code>.</li>
        <li>Tampilkan pesan error di bawah input jika salah.</li>
        <li>Kalau input sudah valid, border jadi hijau dan tampilkan pesan "OK!".</li>
        <li>Ambil semua value form dan tampilkan di console saat submit (jangan lupa preventDefault biar nggak reload).</li>
      </ol>

      <p>Checklist paham ✔: Kamu bisa validasi input, ambil value form, dan kasih feedback visual supaya user tahu harus ngapain.</p>
    `,
  },
];

let idxJS11 = 0;

function renderMateriJS11() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab11[idxJS11];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS11 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS11 === materiJSBab11.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS11 > 0) {
    idxJS11--;
    renderMateriJS11();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS11 < materiJSBab11.length - 1) {
    idxJS11++;
    renderMateriJS11();
  }
};

// Inisialisasi pertama kali
renderMateriJS11();
