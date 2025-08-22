const materiJSBab14 = [
  {
    title: "Bab 14",
    subtitle: "Final Project JavaScript <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Melatih kemampuan integrasi JavaScript dalam satu website utuh.</li>
        <li>Membuat website e-learning mini jadi lebih interaktif dan seru.</li>
        <li>Menambahkan navigasi, validasi form, serta animasi ringan.</li>
      </ul>
      <p>Kalau bab-bab sebelumnya itu latihan otot kecil 💪,  
      sekarang kita latihan full body workout 🏋️.  
      Jadi semua yang udah dipelajari: DOM, event, array, function,  
      semua bakal dipakai di proyek ini.</p>
    `,
  },

  {
    title: "Bab 14.1",
    subtitle: "Integrasi JavaScript ke Website",
    html: `
      <p>Langkah pertama: **sambungkan JavaScript ke halaman e-learning kita**.  
      Misalnya ada halaman home, halaman materi, dan halaman kontak.  
      Dengan JavaScript, kita bisa:</p>

      <ul>
        <li>Bikin tombol navigasi (Home → Materi → Contact) bisa berpindah tanpa reload halaman.</li>
        <li>Munculin konten materi secara dinamis (misalnya bab 1, bab 2, dst).</li>
        <li>Kasih highlight di menu navbar yang aktif.</li>
      </ul>

      <pre><code>// Contoh: pindah halaman
function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach(p => p.style.display = "none");

  document.getElementById(pageId).style.display = "block";
}

// Tombol navigasi
document.getElementById("btnMateri").onclick = () => showPage("materiPage");
document.getElementById("btnHome").onclick = () => showPage("homePage");
</code></pre>

      <p>Dengan logika ini, kita bisa bikin web terasa “single page app” sederhana.  
      Jadi lebih mulus, gak harus reload terus tiap klik menu. 🚀</p>
    `,
  },

  {
    title: "Bab 14.2",
    subtitle: "Interaksi Materi & Navigasi",
    html: `
      <p>Kita bisa bikin navigasi antar bab materi jadi interaktif.  
      Misalnya ada tombol <b>Next</b> dan <b>Prev</b> untuk ganti bab.</p>

      <pre><code>let currentBab = 1;

function tampilkanBab(nomor) {
  document.getElementById("materiContent").innerText = "Ini adalah Bab " + nomor;
}

document.getElementById("nextBtn").onclick = () => {
  currentBab++;
  tampilkanBab(currentBab);
};

document.getElementById("prevBtn").onclick = () => {
  currentBab--;
  tampilkanBab(currentBab);
};
</code></pre>

      <p>Dengan cara ini, user bisa “jelajah materi” kayak baca buku digital 📖.  
      Jadi lebih nyaman dibanding harus buka halaman baru tiap bab.</p>
    `,
  },

  {
    title: "Bab 14.3",
    subtitle: "Validasi Form Kontak",
    html: `
      <p>Di halaman contact, biasanya ada form: nama, email, pesan.  
      Nah, biar gak kosong doang dikirim, kita pake <b>validasi</b>.</p>

      <pre><code>function validasiForm() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (nama === "" || email === "" || pesan === "") {
    alert("Semua field wajib diisi!");
    return false;
  }

  if (!email.includes("@")) {
    alert("Email tidak valid!");
    return false;
  }

  alert("Form berhasil dikirim 🎉");
  return true;
}
</code></pre>

      <p>Jadi user gak bisa asal kirim form kosong.  
      Ini bikin website terasa lebih profesional, gak “asal jadi”. ✅</p>
    `,
  },

  {
    title: "Bab 14.4",
    subtitle: "Animasi Sederhana & Feedback Pengguna",
    html: `
      <p>Website yang enak dipakai biasanya kasih **feedback visual**.  
      Contoh: kalau tombol diklik → warnanya berubah sebentar,  
      atau kalau form sukses → muncul animasi teks "Terkirim!".</p>

      <pre><code>// Contoh: animasi tombol
const btn = document.getElementById("btnKirim");

btn.addEventListener("click", () => {
  btn.classList.add("active");
  setTimeout(() => {
    btn.classList.remove("active");
  }, 300);
});
</code></pre>

      <p>Atau bisa bikin <b>notifikasi popup</b> muncul:</p>

      <pre><code>function showNotif(pesan) {
  const notif = document.createElement("div");
  notif.className = "notif";
  notif.innerText = pesan;
  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 2000);
}
</code></pre>

      <p>Dengan hal-hal kecil ini, user jadi merasa dihargai:  
      setiap aksi ada respon balik, gak “kosong” aja. 🙌</p>
    `,
  },

  {
    title: "Bab 14.5",
    subtitle: "Latihan Final Project",
    html: `
      <ol>
        <li>Tambahkan fitur navigasi antar halaman dengan JavaScript (tanpa reload).</li>
        <li>Bikin tombol "Next" dan "Prev" di halaman materi.</li>
        <li>Validasi form: nama & pesan wajib diisi, email harus valid.</li>
        <li>Kasih animasi/feedback sederhana pas tombol diklik atau form berhasil dikirim.</li>
      </ol>
      <p>Kalau semua ini berhasil kamu bikin → artinya kamu udah bisa bikin website e-learning mini yang beneran interaktif. 🎓</p>
    `,
  },
];

let idxJS14 = 0;

function renderMateriJS14() {
  const container = document.getElementById("materi-content-container");
  const m = materiJSBab14[idxJS14];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxJS14 === 0;
  document.getElementById("nextBtn").disabled =
    idxJS14 === materiJSBab14.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxJS14 > 0) {
    idxJS14--;
    renderMateriJS14();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxJS14 < materiJSBab14.length - 1) {
    idxJS14++;
    renderMateriJS14();
  }
};

// Inisialisasi pertama kali
renderMateriJS14();
