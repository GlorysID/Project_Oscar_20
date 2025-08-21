const materiCSSBab8 = [
  {
    title: "Bab 8",
    subtitle: "Grid Layout <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami konsep <b>grid container</b> dan item.</li>
        <li>Menggunakan <code>grid-template-columns</code> & <code>grid-template-rows</code> untuk membuat baris & kolom.</li>
        <li>Mengatur jarak antar elemen dengan <code>gap</code> dan menyusun elemen dengan <b>grid area</b>.</li>
        <li>Membedakan kapan pakai <b>Grid</b> vs <b>Flexbox</b>.</li>
      </ul>
      <p>Grid itu ibarat “Excel-nya CSS”. Dengan Grid, kita bisa bikin layout kompleks (dua dimensi) dengan rapi tanpa pusing mikir float atau margin manual. 🚀</p>
    `,
  },

  {
    title: "Bab 8.1",
    subtitle: "Konsep Grid Container",
    html: `
      <p><b>Grid</b> bekerja saat kita jadikan sebuah kontainer sebagai <i>grid container</i>.</p>
      <pre><code>.container {
  display: grid; /* aktifkan grid */
}</code></pre>

      <p>Begitu kita set <code>display: grid;</code>, semua anak di dalamnya otomatis menjadi <b>grid items</b>.  
      Anggap kontainer ini seperti papan catur, dan item-itemnya jadi bidak yang bisa kita atur posisi dengan leluasa.</p>
    `,
  },

  {
    title: "Bab 8.2",
    subtitle: "Grid-template-columns & rows",
    html: `
      <p>Dengan <code>grid-template-columns</code> & <code>grid-template-rows</code>, kita bisa mendesain seberapa banyak kolom/baris, beserta ukurannya.</p>

      <pre><code>.container {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* 3 kolom */
  grid-template-rows: 100px 100px; /* 2 baris */
}</code></pre>

      <div style="display:grid;grid-template-columns:200px 200px 200px;grid-template-rows:100px 100px;gap:8px;margin:12px 0;">
        <div style="background:#a0d6ff;display:flex;align-items:center;justify-content:center;">1</div>
        <div style="background:#ffc1a0;display:flex;align-items:center;justify-content:center;">2</div>
        <div style="background:#c1ffa0;display:flex;align-items:center;justify-content:center;">3</div>
        <div style="background:#f6a0ff;display:flex;align-items:center;justify-content:center;">4</div>
        <div style="background:#ffd6a0;display:flex;align-items:center;justify-content:center;">5</div>
        <div style="background:#a0ffd6;display:flex;align-items:center;justify-content:center;">6</div>
      </div>

      <p><b>Tips cepat:</b></p>
      <ul>
        <li><code>fr</code> = fraction, bagian fleksibel. Misalnya <code>1fr 2fr</code> artinya kolom pertama 1 bagian, kolom kedua 2 bagian.</li>
        <li><code>repeat()</code> = singkatan. Misalnya <code>repeat(3, 1fr)</code> artinya 3 kolom sama rata.</li>
      </ul>
    `,
  },

  {
    title: "Bab 8.3",
    subtitle: "Gap & Area",
    html: `
      <p><b>Gap</b> = jarak antar grid item, seperti <code>margin</code> otomatis tapi hanya antar item.</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* jarak antar item */
}</code></pre>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:12px 0;">
        <div style="background:#a0d6ff;height:60px;display:flex;align-items:center;justify-content:center;">A</div>
        <div style="background:#ffc1a0;height:60px;display:flex;align-items:center;justify-content:center;">B</div>
        <div style="background:#c1ffa0;height:60px;display:flex;align-items:center;justify-content:center;">C</div>
      </div>

      <p><b>Grid Area</b> = cara menaruh item di posisi tertentu (seperti nyebut koordinat).</p>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 100px;
}

.item1 {
  grid-column: 1 / 3; /* span dari kolom 1 sampai sebelum 3 */
  grid-row: 1 / 2;    /* baris pertama */
}</code></pre>

      <p>Dengan area ini, kita bisa bikin layout majalah, dashboard, atau template halaman kompleks tanpa repot.</p>
    `,
  },

  {
    title: "Bab 8.4",
    subtitle: "Perbedaan Grid vs Flexbox",
    html: `
      <p><b>Flexbox</b> cocok untuk <u>1 dimensi</u> (barisan horizontal atau vertikal).</p>
      <p><b>Grid</b> cocok untuk <u>2 dimensi</u> (baris dan kolom sekaligus).</p>

      <ul>
        <li>Kalau bikin navbar dengan item sejajar → <b>Flexbox</b>.</li>
        <li>Kalau bikin layout halaman (header, sidebar, main, footer) → <b>Grid</b>.</li>
      </ul>

      <p>Ibaratnya:</p>
      <ul>
        <li><b>Flexbox</b> = barisan orang antre (1 dimensi).</li>
        <li><b>Grid</b> = penonton di stadion (baris + kolom, 2 dimensi).</li>
      </ul>
    `,
  },

  {
    title: "Bab 8.5",
    subtitle: "Latihan Mini Bab 8",
    html: `
      <ol>
        <li>Buat kontainer dengan 3 kolom sama lebar (<code>repeat(3, 1fr)</code>) dan isi 6 kotak.</li>
        <li>Tambahkan <code>gap</code> 15px antar item.</li>
        <li>Coba atur salah satu item agar melebar ke 2 kolom (<code>grid-column</code>).</li>
        <li>Buat layout sederhana: header (1 baris full), sidebar (kolom kiri), main (kolom kanan lebih lebar), footer (full).</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa menjelaskan konsep grid container, mengatur kolom/baris, memberi jarak dengan gap, menaruh item dengan area, dan tau bedanya Grid vs Flexbox.</p>
    `,
  },
];

let idxCSS8 = 0;

function renderMateriCSS8() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab8[idxCSS8];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS8 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS8 === materiCSSBab8.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS8 > 0) {
    idxCSS8--;
    renderMateriCSS8();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS8 < materiCSSBab8.length - 1) {
    idxCSS8++;
    renderMateriCSS8();
  }
};

// Inisialisasi pertama kali
renderMateriCSS8();
