const materiHTMLBab5 = [
  {
    title: "Bab 5",
    subtitle: "List (Daftar) di HTML <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Memahami jenis-jenis list di HTML.</li>
        <li>Menggunakan <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, dan <code>&lt;dl&gt;</code>.</li>
        <li>Membuat list bersarang (nested list).</li>
        <li>Mengetahui kapan sebaiknya menggunakan jenis list tertentu.</li>
      </ul>
      <p>List membantu menyusun informasi agar lebih terstruktur dan mudah dibaca 📋.</p>
    `,
  },
  {
    title: "Bab 5.1",
    subtitle: "Unordered List (<code>&lt;ul&gt;</code>)",
    html: `
      <p>Unordered list adalah daftar tanpa urutan angka, biasanya ditandai dengan bullet (titik).</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;HTML&lt;/li&gt;
  &lt;li&gt;CSS&lt;/li&gt;
  &lt;li&gt;JavaScript&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <p>Hasil:</p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    `,
  },
  {
    title: "Bab 5.2",
    subtitle: "Ordered List (<code>&lt;ol&gt;</code>)",
    html: `
      <p>Ordered list menampilkan daftar dengan urutan angka atau huruf.</p>
      <pre><code>&lt;ol&gt;
  &lt;li&gt;Buka browser&lt;/li&gt;
  &lt;li&gt;Ketik alamat website&lt;/li&gt;
  &lt;li&gt;Tekan Enter&lt;/li&gt;
&lt;/ol&gt;</code></pre>
      <p>Hasil:</p>
      <ol>
        <li>Buka browser</li>
        <li>Ketik alamat website</li>
        <li>Tekan Enter</li>
      </ol>
      <p>Kamu juga bisa mengganti jenis penomoran dengan atribut <code>type</code> (1, A, a, I, i).</p>
    `,
  },
  {
    title: "Bab 5.3",
    subtitle: "Description List (<code>&lt;dl&gt;</code>)",
    html: `
      <p>Description list digunakan untuk menampilkan daftar dengan deskripsi.</p>
      <pre><code>&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Bahasa markup untuk membuat struktur halaman web.&lt;/dd&gt;
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;Bahasa untuk mempercantik tampilan halaman web.&lt;/dd&gt;
&lt;/dl&gt;</code></pre>
      <p>Hasil:</p>
      <dl>
        <dt>HTML</dt>
        <dd>Bahasa markup untuk membuat struktur halaman web.</dd>
        <dt>CSS</dt>
        <dd>Bahasa untuk mempercantik tampilan halaman web.</dd>
      </dl>
    `,
  },
  {
    title: "Bab 5.4",
    subtitle: "List Bersarang (Nested List)",
    html: `
      <p>List bisa ditaruh di dalam list lain, contohnya menu dengan sub-menu:</p>
      <pre><code>&lt;ul&gt;
  &lt;li&gt;Frontend
    &lt;ul&gt;
      &lt;li&gt;HTML&lt;/li&gt;
      &lt;li&gt;CSS&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Backend
    &lt;ul&gt;
      &lt;li&gt;PHP&lt;/li&gt;
      &lt;li&gt;Node.js&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <p>Hasil:</p>
      <ul>
        <li>Frontend
          <ul>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </li>
        <li>Backend
          <ul>
            <li>PHP</li>
            <li>Node.js</li>
          </ul>
        </li>
      </ul>
    `,
  },
  {
    title: "Bab 5.5",
    subtitle: "Latihan Mini Bab 5",
    html: `
      <b>Tugas:</b>
      <ol>
        <li>Buat daftar belanja menggunakan <code>&lt;ul&gt;</code>.</li>
        <li>Buat langkah-langkah memasak mie instan menggunakan <code>&lt;ol&gt;</code>.</li>
        <li>Buat description list untuk menjelaskan minimal 2 bahasa pemrograman.</li>
        <li>Buat nested list untuk kategori hobi (misalnya: Olahraga, Musik, Game).</li>
      </ol>
      <p>Dengan list, websitemu akan terlihat lebih rapi dan terstruktur ✅.</p>
    `,
  },
];

let idx5 = 0;

function renderMateri5() {
  const container = document.getElementById("materi-content-container");
  const m = materiHTMLBab5[idx5];
  container.innerHTML = `
  <div class="materi-content">
    <h1 class="Bab">${m.title}</h1>
    <h2>${m.subtitle}</h2>
    ${m.html}
  </div>
`;

  document.getElementById("prevBtn").disabled = idx5 === 0;
  document.getElementById("nextBtn").disabled =
    idx5 === materiHTMLBab5.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idx5 > 0) {
    idx5--;
    renderMateri5();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idx5 < materiHTMLBab5.length - 1) {
    idx5++;
    renderMateri5();
  }
};

// Inisialisasi pertama kali
renderMateri5();
