const materiCSSBab7 = [
  {
    title: "Bab 7",
    subtitle: "Flexbox <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep <b>flex container</b> & <b>flex items</b>.</li>
        <li>Menentukan arah tata letak dengan <code>flex-direction</code>.</li>
        <li>Mengatur perataan (alignment) dengan <code>justify-content</code>, <code>align-items</code>, dan <code>align-self</code>.</li>
        <li>Menggunakan <code>gap</code> untuk memberi jarak antar elemen.</li>
      </ul>
      <p>Bab ini adalah inti dari layout modern di CSS. Dengan Flexbox, kamu bisa bikin navbar sejajar, card rapi dalam grid, bahkan tombol-tombol bisa <i>center</i> tanpa ribet. 🚀</p>
    `,
  },

  {
    title: "Bab 7.1",
    subtitle: "Flex Container & Flex Items",
    html: `
      <p>Flexbox bekerja dengan dua peran utama:</p>
      <ul>
        <li><b>Flex Container</b>: elemen pembungkus, diberi properti <code>display: flex;</code>.</li>
        <li><b>Flex Items</b>: elemen-anak di dalam container, otomatis mengikuti aturan flex.</li>
      </ul>

      <pre><code>.container {
  display: flex;
  border: 2px solid #000;
}
.item {
  background: #85622fff;
  padding: 10px;
  margin: 4px;
}</code></pre>

      <div style="display:flex;border:2px solid #000;margin:10px 0;">
        <div style="background:#85622fff;padding:10px;margin:4px;">Item 1</div>
        <div style="background:#85622fff;padding:10px;margin:4px;">Item 2</div>
        <div style="background:#85622fff;padding:10px;margin:4px;">Item 3</div>
      </div>

      <p><i>Kesimpulan:</i> Kalau mau pakai Flexbox, pastikan parent dikasih <code>display: flex;</code>. Anak-anaknya otomatis jadi “flex items”.</p>
    `,
  },

  {
    title: "Bab 7.2",
    subtitle: "Arah: Row & Column",
    html: `
      <p><code>flex-direction</code> menentukan arah utama (main axis):</p>
      <ul>
        <li><b>row</b> (default): anak-anak ditata <i>dari kiri ke kanan</i>.</li>
        <li><b>row-reverse</b>: anak-anak ditata dari kanan ke kiri.</li>
        <li><b>column</b>: anak-anak ditata <i>dari atas ke bawah</i>.</li>
        <li><b>column-reverse</b>: anak-anak ditata dari bawah ke atas.</li>
      </ul>

      <pre><code>.row    { display:flex; flex-direction: row; }
.column { display:flex; flex-direction: column; }</code></pre>

      <div style="display:flex;flex-direction:row;border:1px solid #000;margin:6px 0;">
        <div style="background:#2974a9ff;padding:6px;margin:2px;">A</div>
        <div style="background:#2974a9ff;padding:6px;margin:2px;">B</div>
        <div style="background:#2974a9ff;padding:6px;margin:2px;">C</div>
      </div>
      <div style="display:flex;flex-direction:column;border:1px solid #000;margin:6px 0;height:140px;">
        <div style="background:#2974a9ff;padding:6px;margin:2px;">A</div>
        <div style="background:#2974a9ff;padding:6px;margin:2px;">B</div>
        <div style="background:#2974a9ff;padding:6px;margin:2px;">C</div>
      </div>
    `,
  },

  {
    title: "Bab 7.3",
    subtitle: "Justify-Content (Sejajar di Main Axis)",
    html: `
      <p><code>justify-content</code> mengatur posisi item <i>di sepanjang main axis</i>:</p>
      <ul>
        <li><b>flex-start</b> (default): nempel ke awal.</li>
        <li><b>flex-end</b>: nempel ke akhir.</li>
        <li><b>center</b>: semua di tengah.</li>
        <li><b>space-between</b>: spasi rata, ujung kiri & kanan nempel.</li>
        <li><b>space-around</b>: spasi rata tapi ada jarak di pinggir.</li>
        <li><b>space-evenly</b>: spasi benar-benar rata, kiri & kanan sama.</li>
      </ul>
    `,
  },

  {
    title: "Bab 7.4",
    subtitle: "Align-Items & Align-Self (Cross Axis)",
    html: `
      <p><code>align-items</code> mengatur <i>posisi semua item</i> di cross axis (silang main axis).</p>
      <ul>
        <li><b>stretch</b> (default): item ditarik sepanjang cross axis.</li>
        <li><b>flex-start</b>: item nempel atas.</li>
        <li><b>flex-end</b>: item nempel bawah.</li>
        <li><b>center</b>: item di tengah secara vertikal (kalau main axis row).</li>
      </ul>

      <p><code>align-self</code>: mirip <code>align-items</code>, tapi khusus untuk <i>satu item tertentu</i>.</p>
    `,
  },

  {
    title: "Bab 7.5",
    subtitle: "Gap Antar Elemen",
    html: `
      <p><code>gap</code> adalah cara modern untuk memberi jarak antar item, tanpa perlu <code>margin</code> kiri-kanan manual.</p>
      <pre><code>.container {
  display: flex;
  gap: 16px;
}</code></pre>

      <div style="display:flex;gap:16px;border:1px solid #000;padding:6px;margin:10px 0;">
        <div style="background:#85622fff;padding:10px;">Box 1</div>
        <div style="background:#85622fff;padding:10px;">Box 2</div>
        <div style="background:#85622fff;padding:10px;">Box 3</div>
      </div>
      <p><b>Catatan:</b> <code>gap</code> dulunya hanya ada di CSS Grid, tapi sekarang sudah didukung Flexbox modern.</p>
    `,
  },

  {
    title: "Bab 7.6",
    subtitle: "Latihan Mini Bab 7",
    html: `
      <ol>
        <li>Buat 1 container dengan 3 kotak, lalu atur arah jadi <code>column</code>.</li>
        <li>Gunakan <code>justify-content: space-between</code> untuk meratakan kotak.</li>
        <li>Coba atur <code>align-items: center</code> agar semua kotak rata tengah.</li>
        <li>Beri jarak antar kotak pakai <code>gap</code> daripada margin manual.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa menjelaskan flex container & items, bedakan arah row/column, atur perataan dengan justify-content & align-items, serta manfaatkan gap dengan benar.</p>
    `,
  },
];

let idxCSS7 = 0;

function renderMateriCSS7() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab7[idxCSS7];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS7 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS7 === materiCSSBab7.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS7 > 0) {
    idxCSS7--;
    renderMateriCSS7();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS7 < materiCSSBab7.length - 1) {
    idxCSS7++;
    renderMateriCSS7();
  }
};

// Inisialisasi pertama kali
renderMateriCSS7();
