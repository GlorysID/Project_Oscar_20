const materiCppBab8 = [
  {
    title: "Bab 8",
    subtitle: "Pointer & Referensi <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu ngerti apa itu alamat memori, pointer, dan simbol <code>*</code> & <code>&</code>.</li>
        <li>Kamu bisa bikin pointer yang menunjuk ke variabel.</li>
        <li>Kamu bisa pakai pointer ke array & fungsi.</li>
        <li>Kamu ngerti perbedaan pointer dengan reference.</li>
        <li>Kamu bisa bikin program nyata, misalnya swap nilai pakai pointer/reference.</li>
      </ul>

      <p>Singkatnya: pointer itu kayak "alamat rumah" dari sebuah data, bukan datanya langsung. 
      Sedangkan reference itu kayak "nama panggilan lain" dari variabel.</p>
    `,
  },

  {
    title: "Bab 8.1",
    subtitle: "Konsep Memory Address & Pointer",
    html: `
      <p>Setiap variabel yang kamu buat di C++ sebenarnya disimpan di RAM, 
      dan punya alamat memori tertentu. Kayak rumah punya alamat jalan.</p>

      <pre><code>int x = 10;

cout &lt;&lt; x;   // nilai variabel → 10
cout &lt;&lt; &amp;x;  // alamat memori variabel (misal: 0x61ff08)</code></pre>

      <p>Simbol <code>&amp;</code> dipakai buat ambil alamat memori.</p>

      <p>Nah, pointer itu variabel khusus yang nyimpen "alamat rumah" variabel lain.</p>

      <pre><code>int x = 10;
int *ptr = &amp;x;  // pointer ptr nyimpen alamat x

cout &lt;&lt; ptr;   // tampilkan alamat
cout &lt;&lt; *ptr;  // tampilkan nilai yang ada di alamat tsb → 10</code></pre>

      <p>Simbol <code>*</code> dipakai buat "dereference", artinya buka isi dari alamat itu.</p>
    `,
  },

  {
    title: "Bab 8.2",
    subtitle: "Pointer ke Variabel",
    html: `
      <p>Pointer bisa dipakai buat akses dan ubah isi variabel yang dia tunjuk.</p>

      <pre><code>int x = 5;
int *p = &amp;x;

*p = 20;  // ubah nilai x lewat pointer

cout &lt;&lt; x;  // hasilnya 20
</code></pre>

      <p>Jadi, pointer bisa dipakai buat "remote control" variabel dari jauh.</p>
    `,
  },

  {
    title: "Bab 8.3",
    subtitle: "Pointer ke Array",
    html: `
      <p>Array itu spesial: nama array sebenernya adalah pointer ke elemen pertama.</p>

      <pre><code>int angka[3] = {10, 20, 30};

cout &lt;&lt; angka;     // alamat elemen pertama
cout &lt;&lt; *angka;    // nilai elemen pertama → 10
cout &lt;&lt; *(angka+1); // elemen kedua → 20
</code></pre>

      <p>Pointer bisa dipakai kayak index, cuma bentuknya pakai operasi <code>+1</code> ke alamat.</p>
    `,
  },

  {
    title: "Bab 8.4",
    subtitle: "Pointer ke Fungsi",
    html: `
      <p>Di C++, bahkan fungsi punya alamat. Kita bisa bikin pointer yang nunjuk ke fungsi.</p>

      <pre><code>void sapa() {
    cout &lt;&lt; "Halo!" &lt;&lt; endl;
}

int main() {
    void (*fp)() = &amp;sapa; // pointer ke fungsi
    fp();  // panggil fungsi lewat pointer
    return 0;
}</code></pre>

      <p>Ini sering dipakai di callback function atau event handling.</p>
    `,
  },

  {
    title: "Bab 8.5",
    subtitle: "Referensi (&) vs Pointer (*)",
    html: `
      <p>Reference itu "alias" dari variabel. Bedanya dengan pointer: 
      reference harus langsung diinisialisasi, dan nggak bisa diganti-ganti tujuannya.</p>

      <pre><code>int x = 10;
int &amp;ref = x; // ref jadi nama lain dari x

ref = 20;     // otomatis x juga jadi 20
cout &lt;&lt; x;   // output: 20
</code></pre>

      <p>Jadi, pointer = alamat yang bisa pindah-pindah.  
      Reference = julukan tetap untuk variabel.</p>
    `,
  },

  {
    title: "Bab 8.6",
    subtitle: "Studi Kasus: Swap Nilai",
    html: `
      <p>Kita bandingkan swap nilai pakai pointer dan reference.</p>

      <pre><code>// Versi pointer
void swapPointer(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Versi reference
void swapReference(int &amp;a, int &amp;b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 20;

    swapPointer(&amp;x, &amp;y);
    cout &lt;&lt; "Setelah swap pointer: x=" &lt;&lt; x &lt;&lt; ", y=" &lt;&lt; y &lt;&lt; endl;

    swapReference(x, y);
    cout &lt;&lt; "Setelah swap reference: x=" &lt;&lt; x &lt;&lt; ", y=" &lt;&lt; y &lt;&lt; endl;

    return 0;
}</code></pre>

      <p>Keduanya bisa tukar nilai, cuma gaya penulisan reference lebih simple.</p>
    `,
  },

  {
    title: "Bab 8.7",
    subtitle: "Latihan Bab 8",
    html: `
      <ol>
        <li>Buat variabel int, tampilkan nilainya &amp; alamat memorinya.</li>
        <li>Buat pointer ke variabel, ubah nilainya lewat pointer.</li>
        <li>Buat array 5 angka, cetak semua elemennya pakai pointer aritmatika.</li>
        <li>Buat fungsi sederhana lalu panggil lewat pointer fungsi.</li>
        <li>Coba buat program swap nilai dengan pointer dan reference, bandingkan hasilnya.</li>
      </ol>
    `,
  },
];

let idxCpp8 = 0;

function renderMateriCppBab8() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab8[idxCpp8];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp8 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp8 === materiCppBab8.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp8 > 0) {
    idxCpp8--;
    renderMateriCppBab8();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp8 < materiCppBab8.length - 1) {
    idxCpp8++;
    renderMateriCppBab8();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab8();
