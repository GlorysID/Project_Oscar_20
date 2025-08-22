const materiCppBab6 = [
  {
    title: "Bab 6",
    subtitle: "Fungsi (Function) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu paham kenapa fungsi itu ada dan kenapa kita perlu pakai.</li>
        <li>Kamu bisa bikin dan manggil fungsi sendiri.</li>
        <li>Kamu bisa kirim data ke fungsi pakai parameter.</li>
        <li>Kamu bisa ambil hasil dari fungsi lewat return value.</li>
        <li>Kamu ngerti fungsi dengan default parameter.</li>
        <li>Kamu bisa bikin fungsi void, rekursif, bahkan overloading.</li>
      </ul>

      <p>Coba bayangin kamu punya 100 baris kode yang dipakai di banyak tempat. 
      Kalau kamu nggak pakai fungsi, setiap kali butuh ya kamu copy-paste. 
      Capek kan? Dan kalau ada error, kamu harus benerin di 100 tempat. 
      Nah, fungsi itu solusi biar kode kamu jadi lebih rapi, efisien, 
      dan gampang dirawat.</p>
    `,
  },

  {
    title: "Bab 6.1",
    subtitle: "Definisi & Pemanggilan Fungsi",
    html: `
      <p>Fungsi itu kayak mesin kecil di dalam program. Kamu masukin sesuatu (opsional), 
      dia ngolah, lalu kasih hasil (opsional). Bentuk dasar fungsi di C++:</p>

      <pre><code>tipe_data namaFungsi(parameter) {
    // isi fungsi
    return nilai; // kalau ada return
}</code></pre>

      <p>Contoh sederhana:</p>
      <pre><code>int tambah(int a, int b) {
    return a + b;
}

int main() {
    cout &lt;&lt; tambah(3, 4); // output: 7
    return 0;
}</code></pre>

      <p>Di sini aku bikin fungsi <code>tambah</code>, terus aku panggil di <code>main()</code>.</p>
    `,
  },

  {
    title: "Bab 6.2",
    subtitle: "Parameter & Return Value",
    html: `
      <p>Parameter itu kayak "pintu masuk" buat data ke fungsi. Return value itu "pintu keluar" 
      buat hasil dari fungsi.</p>

      <pre><code>int kali(int x, int y) {
    return x * y; // return hasil perkalian
}

int main() {
    int hasil = kali(5, 6);
    cout &lt;&lt; "Hasil = " &lt;&lt; hasil;
    return 0;
}</code></pre>

      <p>Kalau fungsi butuh input → pakai parameter. Kalau fungsi punya hasil → pakai return.</p>
    `,
  },

  {
    title: "Bab 6.3",
    subtitle: "Fungsi dengan Default Parameter",
    html: `
      <p>Default parameter artinya kalau kamu nggak ngisi, dia pakai nilai bawaan. 
      Ini bikin fungsi lebih fleksibel.</p>

      <pre><code>int hitungLuasPersegiPanjang(int p, int l = 5) {
    return p * l;
}

int main() {
    cout &lt;&lt; hitungLuasPersegiPanjang(10);    // l otomatis = 5
    cout &lt;&lt; hitungLuasPersegiPanjang(10, 3); // l = 3
    return 0;
}</code></pre>

      <p>Kalau kamu isi semua parameter → dipakai. Kalau ada yang kosong → pakai default.</p>
    `,
  },

  {
    title: "Bab 6.4",
    subtitle: "Fungsi Void (Tanpa Return)",
    html: `
      <p>Fungsi void artinya dia cuma melakukan aksi, tapi nggak balikin nilai.</p>

      <pre><code>void sapa(string nama) {
    cout &lt;&lt; "Halo, " &lt;&lt; nama &lt;&lt; "!" &lt;&lt; endl;
}

int main() {
    sapa("Ani");
    sapa("Budi");
    return 0;
}</code></pre>

      <p>Dipakai kalau kamu cuma butuh jalanin instruksi, nggak perlu hasil balik.</p>
    `,
  },

  {
    title: "Bab 6.5",
    subtitle: "Fungsi Rekursif",
    html: `
      <p>Rekursif itu fungsi yang manggil dirinya sendiri. 
      Biasanya dipakai buat masalah yang bisa dipecah jadi masalah lebih kecil.</p>

      <pre><code>int faktorial(int n) {
    if (n == 1) return 1;
    else return n * faktorial(n - 1);
}

int main() {
    cout &lt;&lt; faktorial(5); // output: 120
    return 0;
}</code></pre>

      <p>Di sini <code>faktorial(5)</code> akan manggil <code>faktorial(4)</code>, 
      lalu <code>faktorial(3)</code>, terus sampai 1. Jadi kayak menyelesaikan puzzle step by step.</p>
    `,
  },

  {
    title: "Bab 6.6",
    subtitle: "Overloading Fungsi",
    html: `
      <p>Overloading artinya kamu bisa bikin fungsi dengan nama sama, 
      tapi parameter beda. Kompilernya bisa bedain berdasarkan tipe atau jumlah parameter.</p>

      <pre><code>int luas(int sisi) {
    return sisi * sisi;
}

int luas(int p, int l) {
    return p * l;
}

int main() {
    cout &lt;&lt; luas(5);      // panggil fungsi luas(int sisi)
    cout &lt;&lt; luas(4, 6);   // panggil fungsi luas(int p, int l)
    return 0;
}</code></pre>

      <p>Ini bikin kode lebih rapi, karena kamu nggak perlu bikin nama fungsi berbeda 
      kayak <code>luasPersegi()</code> atau <code>luasPersegiPanjang()</code>. 
      Cukup satu nama: <code>luas()</code>.</p>
    `,
  },

  {
    title: "Bab 6.7",
    subtitle: "Latihan Bab 6",
    html: `
      <ol>
        <li>Buat fungsi untuk menghitung luas lingkaran (pakai parameter jari-jari, return double).</li>
        <li>Buat fungsi void untuk menampilkan bilangan genap dari 1 sampai N.</li>
        <li>Buat fungsi rekursif untuk menghitung bilangan Fibonacci ke-n.</li>
        <li>Buat fungsi overloading "max" untuk mencari nilai terbesar dari 2 bilangan dan 3 bilangan.</li>
        <li>Gabungkan beberapa fungsi di atas jadi program mini kalkulator.</li>
      </ol>
    `,
  },
];

let idxCpp6 = 0;

function renderMateriCppBab6() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab6[idxCpp6];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp6 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp6 === materiCppBab6.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp6 > 0) {
    idxCpp6--;
    renderMateriCppBab6();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp6 < materiCppBab6.length - 1) {
    idxCpp6++;
    renderMateriCppBab6();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab6();
