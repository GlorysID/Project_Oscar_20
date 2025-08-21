const materiCSSBab6 = [
  {
    title: "Bab 6",
    subtitle: "Display & Position <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Membedakan perilaku <b>inline</b>, <b>block</b>, dan <b>inline-block</b>.</li>
        <li>Memahami <code>position</code>: <b>static</b>, <b>relative</b>, <b>absolute</b>, <b>fixed</b>, <b>sticky</b>.</li>
        <li>Menggunakan <code>z-index</code> untuk mengatur lapisan (layer) elemen.</li>
      </ul>
      <p>Bab ini inti dari <i>layouting</i>. Begitu paham, kamu bisa bikin navbar nempel, badge di pojok card, sampai modal yang nutup layar. 🚀</p>
    `,
  },

  {
    title: "Bab 6.1",
    subtitle: "Display: Inline vs Block vs Inline-Block",
    html: `
      <p><b>Display</b> menentukan <i>cara elemen berperilaku</i> pada baris & ruangnya.</p>
      <ul>
        <li><b>inline</b>: ikut aliran teks, <i>ga mulai baris baru</i>, <b>ga bisa atur width/height</b> (umumnya). Contoh: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>.</li>
        <li><b>block</b>: <i>selalu mulai baris baru</i>, lebar default 100% kontainer. Contoh: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>.</li>
        <li><b>inline-block</b>: tampil seperti inline (bisa sebelahan), <i>tapi</i> <b>bisa atur width/height</b>.</li>
      </ul>

      <pre><code>/* Demo cepat */
.inline  { display: inline;       background: #85622fff; padding: 6px; }
.block   { display: block;        background: #2974a9ff; padding: 6px; width: 240px; }
.inblock { display: inline-block; background: #85622fff; padding: 6px; width: 120px; }</code></pre>

      <div style="margin:10px 0;">
        <span class="inline" style="display:inline;background:#85622fff;padding:6px;">inline A</span>
        <span class="inline" style="display:inline;background:#85622fff;padding:6px;">inline B</span>
      </div>
      <div class="block" style="display:block;background:#2974a9ff;padding:6px;width:240px;margin:6px 0;">block (selalu baris baru)</div>
      <div style="margin:10px 0;">
        <span class="inblock" style="display:inline-block;background:#85622fff;padding:6px;width:120px;">inline-block 1</span>
        <span class="inblock" style="display:inline-block;background:#85622fff;padding:6px;width:120px;">inline-block 2</span>
      </div>

      <p><b>Kapan pakai apa?</b></p>
      <ul>
        <li>Inline: untuk potongan kecil di tengah teks (tag, label kecil).</li>
        <li>Block: bagian/section besar (card, article, container).</li>
        <li>Inline-block: butuh kotak berdampingan tapi tetap bisa atur ukuran (badge, tombol sejajar).</li>
      </ul>

      <p><i>Bonus singkat:</i> <code>display: none;</code> sembunyikan elemen & lepas dari flow (beda dengan <code>visibility: hidden;</code> yang tetap menyisakan ruang).</p>
    `,
  },

  {
    title: "Bab 6.2",
    subtitle: "Position: Gambaran Umum",
    html: `
      <p><code>position</code> mengatur <i>cara elemen diletakkan</i> relatif terhadap sesuatu (dokumen, parent, viewport).</p>
      <ul>
        <li><b>static</b> (default): ikut alur normal. Properti <code>top/right/bottom/left</code> <b>diabaikan</b>.</li>
        <li><b>relative</b>: tetap memakan ruang di flow, tapi bisa <i>geser sedikit</i> dengan <code>top/left/...</code>. Jadi semacam “nudge”.</li>
        <li><b>absolute</b>: lepas dari flow, diposisikan relatif ke <b>ancestor yang ber-position</b> (bukan static). Kalau gak ada, relatif ke halaman (viewport dokumen).</li>
        <li><b>fixed</b>: nempel ke <b>viewport</b> (layar), tetap di posisi yang sama saat scroll.</li>
        <li><b>sticky</b>: hybrid relative + fixed. Ikut flow dulu, lalu <b>menempel</b> saat menyentuh jarak yang ditentukan (mis. <code>top: 0</code>).</li>
      </ul>
    `,
  },

  {
    title: "Bab 6.3",
    subtitle: "Relative & Absolute (Pasangan Andalan)",
    html: `
      <p>Trik paling sering dipakai: <b>parent = relative</b>, <b>child = absolute</b>.  
      Ini bikin child bisa “nempel pojok” di dalam parent dengan rapi.</p>

      <pre><code>.card   { position: relative; width: 220px; padding: 16px; background: #000; border: 1px solid #ddd; }
.badge  { position: absolute; top: -8px; right: -8px; background: #ff5252; color:#000; padding: 6px 10px; border-radius: 999px; font-size: 12px; }</code></pre>

      <div style="position:relative;width:220px;padding:16px;background:#000;border:1px solid #ddd;display:inline-block;margin:6px 0;">
        <div style="position:absolute;top:-8px;right:-8px;background:#ff5252;color:#000;padding:6px 10px;border-radius:999px;font-size:12px;">
          NEW
        </div>
        <b>Card Produk</b><br>
        Deskripsi singkat barang. Badge merahnya nempel pojok.
      </div>

      <p><b>Catatan penting:</b> elemen <code>absolute</code> <i>tidak mengambil ruang</i> di flow, jadi elemen lain akan bertindak seolah dia tidak ada.</p>
    `,
  },

  {
    title: "Bab 6.4",
    subtitle: "Fixed & Sticky (Selalu Terlihat)",
    html: `
      <p><b>Fixed</b>: elemen nempel ke layar/viewport. Cocok untuk navbar, tombol “Back to Top”, atau chat bubble.</p>
      <pre><code>.backToTop {
  position: fixed;
  right: 16px;
  bottom: 16px;
  padding: 10px 14px;
  background: #333; color:#000; border-radius: 8px;
}</code></pre>
      <div class="backToTop" style="position:fixed;right:16px;bottom:16px;padding:10px 14px;background:#333;color:#000;border-radius:8px;z-index:1000;">
        ↑ Top
      </div>

      <p><b>Sticky</b>: mulai sebagai <i>relative</i>, lalu jadi <i>fixed</i> saat melewati offset. Wajib set misalnya <code>top: 0</code>, dan parent tidak boleh punya overflow tersembunyi yang menghalangi.</p>
      <pre><code>.stickyHeader { position: sticky; top: 0; background: white; border-bottom: 1px solid #000; }</code></pre>
      <div style="position:sticky;top:0;background:#000;border-bottom:1px solid #000;padding:8px;margin:8px 0;">Ini contoh header sticky — akan menempel di atas saat discroll (di halaman nyata).</div>

      <p><b>Tips:</b> di mobile, <code>position: fixed</code> kadang tricky (alamat bar muncul/hilang). Coba uji di device asli.</p>
    `,
  },

  {
    title: "Bab 6.5",
    subtitle: "Z-index (Ngatur Layer)",
    html: `
      <p><code>z-index</code> menentukan <i>siapa di atas siapa</i> saat elemen saling tumpuk.</p>
      <ul>
        <li>Bekerja pada elemen yang “<b>berposisi</b>” (umumnya <code>position</code> ≠ <code>static</code>).</li>
        <li>Angka lebih besar = di atas.</li>
        <li>“<b>Stacking context</b>” baru bisa tercipta oleh hal-hal seperti <code>position</code> + <code>z-index</code>, <code>opacity &lt; 1</code>, <code>transform</code>, <code>filter</code>, dll — ini mempengaruhi siapa bisa menindih siapa.</li>
      </ul>

      <pre><code>.boxA { position: relative; z-index: 10; background: #a0d6ff; }
.boxB { position: relative; z-index: 5;  background: #ffc1a0; }</code></pre>

      <div style="position:relative;height:70px;margin:10px 0;">
        <div style="position:absolute;left:20px;top:10px;width:160px;height:60px;background:#a0d6ff;z-index:10;display:flex;align-items:center;justify-content:center;">z-index:10</div>
        <div style="position:absolute;left:60px;top:25px;width:160px;height:60px;background:#ffc1a0;z-index:5;display:flex;align-items:center;justify-content:center;">z-index:5</div>
      </div>

      <p><b>Praktik aman:</b> kalau bingung kok <code>z-index</code> “ga ngaruh”, kasih <code>position: relative;</code> dulu pada elemen terkait.  
      <small>(Catatan: pada konteks tertentu seperti flex/grid item, <code>z-index</code> bisa bekerja walau non-positioned; tapi biar konsisten, biasakan pasang <code>position</code>.)</small></p>
    `,
  },

  {
    title: "Bab 6.6",
    subtitle: "Pola Umum (Cookbook)",
    html: `
      <p><b>1) Center absolute di tengah parent</b></p>
      <pre><code>.parent { position: relative; }
.center {
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
}</code></pre>

      <p><b>2) Overlay/Modal sederhana</b></p>
      <pre><code>.overlay {
  position: fixed; inset: 0;           /* top/right/bottom/left:0 */
  background: rgba(0,0,0,.5);
}
.modal {
  position: fixed; left:50%; top:50%;
  transform: translate(-50%,-50%);
  background: #000; padding: 16px; border-radius: 10px;
}</code></pre>

      <p><b>3) Badge/Label di pojok</b> (sudah dicontohkan di 6.3)</p>
    `,
  },

  {
    title: "Bab 6.7",
    subtitle: "Latihan Mini Bab 6",
    html: `
      <ol>
        <li>Buat 3 kotak: satu <code>inline</code>, satu <code>block</code>, satu <code>inline-block</code>. Amati perbedaan lebarnya.</li>
        <li>Buat card produk (parent <code>relative</code>) lalu pasang badge diskon di pojok kanan-atas (child <code>absolute</code>).</li>
        <li>Buat tombol “Back to Top” pakai <code>position: fixed</code> di kanan bawah.</li>
        <li>Buat header yang <code>sticky</code> di atas saat discroll.</li>
        <li>Tumpuk 2 kotak dan atur siapa di atas pakai <code>z-index</code>.</li>
      </ol>
      <p>Checklist paham ✔: Kamu bisa jelasin kapan pakai inline/block/inline-block, bedain relative vs absolute, dan bikin elemen nempel pakai fixed/sticky + atur layer dengan z-index.</p>
    `,
  },
];

let idxCSS6 = 0;

function renderMateriCSS6() {
  const container = document.getElementById("materi-content-container");
  const m = materiCSSBab6[idxCSS6];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCSS6 === 0;
  document.getElementById("nextBtn").disabled =
    idxCSS6 === materiCSSBab6.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCSS6 > 0) {
    idxCSS6--;
    renderMateriCSS6();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCSS6 < materiCSSBab6.length - 1) {
    idxCSS6++;
    renderMateriCSS6();
  }
};

// Inisialisasi pertama kali
renderMateriCSS6();
