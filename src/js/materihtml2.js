const materiHTMLBab2 = [
  {
    title: "Bab 2",
    subtitle: "Teks & Paragraf di HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Menggunakan elemen untuk menulis teks dan paragraf.</li>
        <li>Membedakan heading (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>).</li>
        <li>Menggunakan format teks (bold, italic, underline, dll).</li>
        <li>Mengenal elemen pemisah teks seperti <code>&lt;br&gt;</code> dan <code>&lt;hr&gt;</code>.</li>
      </ul>
      <p><b>Kenapa penting?</b> Hampir semua halaman web punya teks. HTML memberi kita cara untuk menata teks agar lebih terstruktur, mudah dibaca, dan bermakna.</p>
    `,
  },
  {
    title: "Bab 2.1",
    subtitle: "Heading (Judul Tingkat 1–6)",
    html: `
      <p>Heading adalah judul atau subjudul. Ada 6 tingkat: <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>
      <pre><code>&lt;h1&gt;Judul Utama&lt;/h1&gt;
&lt;h2&gt;Subjudul&lt;/h2&gt;
&lt;h3&gt;Sub-subjudul&lt;/h3&gt;</code></pre>
      <p><b>Tips:</b> Gunakan hanya satu <code>&lt;h1&gt;</code> per halaman untuk SEO & aksesibilitas. Turunkan level sesuai hierarki konten.</p>
    `,
  },
  {
    title: "Bab 2.2",
    subtitle: "Paragraf & Line Break",
    html: `
      <p><code>&lt;p&gt;</code> digunakan untuk paragraf. HTML otomatis memberi spasi antar paragraf.</p>
      <pre><code>&lt;p&gt;Ini paragraf pertama.&lt;/p&gt;
&lt;p&gt;Ini paragraf kedua.&lt;/p&gt;</code></pre>
      <p>Kalau mau pindah baris <i>tanpa</i> paragraf baru, gunakan <code>&lt;br&gt;</code> (line break).</p>
      <pre><code>Baris pertama&lt;br&gt;
Baris kedua</code></pre>
    `,
  },
  {
    title: "Bab 2.3",
    subtitle: "Teks Tebal, Miring, dan Garis Bawah",
    html: `
      <ul>
        <li><code>&lt;b&gt;</code> → teks tebal (visual).</li>
        <li><code>&lt;strong&gt;</code> → teks penting (tebal + makna semantik).</li>
        <li><code>&lt;i&gt;</code> → teks miring (visual).</li>
        <li><code>&lt;em&gt;</code> → teks ditekankan (miring + makna semantik).</li>
        <li><code>&lt;u&gt;</code> → garis bawah.</li>
        <li><code>&lt;mark&gt;</code> → highlight kuning.</li>
        <li><code>&lt;small&gt;</code> → teks kecil.</li>
      </ul>
      <pre><code>&lt;p&gt;Tulisan &lt;b&gt;tebal&lt;/b&gt;, &lt;i&gt;miring&lt;/i&gt;, &lt;u&gt;garis bawah&lt;/u&gt;.&lt;/p&gt;
&lt;p&gt;Teks &lt;strong&gt;penting&lt;/strong&gt; dan &lt;em&gt;bermakna&lt;/em&gt;.&lt;/p&gt;
&lt;p&gt;Ini &lt;mark&gt;disorot&lt;/mark&gt; dan ini &lt;small&gt;keterangan kecil&lt;/small&gt;.&lt;/p&gt;</code></pre>
    `,
  },
  {
    title: "Bab 2.4",
    subtitle: "Garis Pemisah (Horizontal Rule)",
    html: `
      <p><code>&lt;hr&gt;</code> digunakan untuk membuat garis pemisah horizontal antar bagian.</p>
      <pre><code>&lt;p&gt;Bagian atas&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Bagian bawah&lt;/p&gt;</code></pre>
    `,
  },
  {
    title: "Bab 2.5",
    subtitle: "Teks Khusus: Kutipan & Preformat",
    html: `
      <p><code>&lt;blockquote&gt;</code> untuk kutipan panjang, biasanya ditampilkan menjorok ke dalam.</p>
      <pre><code>&lt;blockquote&gt;
  "Belajar tanpa berpikir itu sia-sia, 
   tapi berpikir tanpa belajar itu berbahaya."
&lt;/blockquote&gt;</code></pre>
      <p><code>&lt;pre&gt;</code> menjaga spasi dan baris apa adanya, cocok untuk kode program.</p>
      <pre><code>&lt;pre&gt;
for (let i = 0; i &lt; 3; i++) {
  console.log("Hello");
}
&lt;/pre&gt;</code></pre>
    `,
  },
  {
    title: "Bab 2.6",
    subtitle: "Latihan Mini & Checklist",
    html: `
      <b>Latihan:</b>
      <ol>
        <li>Buat judul halaman dengan <code>&lt;h1&gt;</code>.</li>
        <li>Tulis 2 paragraf perkenalan tentang dirimu.</li>
        <li>Gunakan <code>&lt;strong&gt;</code> untuk menandai kata penting.</li>
        <li>Sisipkan line break di salah satu paragraf.</li>
        <li>Tambahkan kutipan favoritmu dengan <code>&lt;blockquote&gt;</code>.</li>
      </ol>
      <b>Checklist:</b>
      <ul>
        <li>Aku bisa membuat heading & subheading.</li>
        <li>Aku bisa menulis paragraf dan memformat teks.</li>
        <li>Aku tahu bedanya <code>&lt;b&gt;</code> vs <code>&lt;strong&gt;</code>, <code>&lt;i&gt;</code> vs <code>&lt;em&gt;</code>.</li>
        <li>Aku bisa membuat garis pemisah & kutipan.</li>
      </ul>
      <p>Kalau latihan ini sudah selesai, kamu bisa ke Bab selanjutnya.</p>
    `,
  },
];

let idx2 = 0;

function renderMateri2() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab2[idx2];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx2 === 0;
  document.getElementById("nextBtn").disabled =
    idx2 === materiHTMLBab2.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx2 > 0) {
    idx2--;
    renderMateri2();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx2 < materiHTMLBab2.length - 1) {
    idx2++;
    renderMateri2();
  }
};

// Inisialisasi pertama kali
renderMateri2();
