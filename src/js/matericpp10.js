const materiCppBab10 = [
  {
    title: "Bab 10",
    subtitle: "File Handling & Mini Project <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu bisa membaca & menulis file menggunakan <code>ifstream</code>, <code>ofstream</code>, dan <code>fstream</code>.</li>
        <li>Kamu paham mode file: input, output, append.</li>
        <li>Kamu bisa melakukan error handling sederhana saat bekerja dengan file.</li>
        <li>Kamu bisa bikin mini project nyata dengan file handling.</li>
      </ul>
    `,
  },

  {
    title: "Bab 10.1",
    subtitle: "Membaca & Menulis File",
    html: `
      <p>Di C++, kita pakai library <code>&lt;fstream&gt;</code> buat mainan file.</p>
      <ul>
        <li><code>ofstream</code>: nulis file.</li>
        <li><code>ifstream</code>: baca file.</li>
        <li><code>fstream</code>: bisa buat baca & tulis.</li>
      </ul>

      <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
using namespace std;

int main() {
    // Menulis file
    ofstream myFile("data.txt");
    myFile &lt;&lt; "Halo dunia!" &lt;&lt; endl;
    myFile.close();

    // Membaca file
    ifstream bacaFile("data.txt");
    string isi;
    getline(bacaFile, isi);
    cout &lt;&lt; "Isi file: " &lt;&lt; isi &lt;&lt; endl;

    bacaFile.close();
}</code></pre>
    `,
  },

  {
    title: "Bab 10.2",
    subtitle: "Mode File: Input, Output, Append",
    html: `
      <p>Saat buka file, kita bisa tentuin mode:</p>
      <ul>
        <li><code>ios::in</code> → input (baca).</li>
        <li><code>ios::out</code> → output (nulis, <b>overwrite</b> isi lama).</li>
        <li><code>ios::app</code> → append (nambah ke akhir file, isi lama aman).</li>
      </ul>

      <pre><code>ofstream file("catatan.txt", ios::app);
file &lt;&lt; "Tambah catatan baru." &lt;&lt; endl;
file.close();</code></pre>
    `,
  },

  {
    title: "Bab 10.3",
    subtitle: "Error Handling Sederhana",
    html: `
      <p>Kadang file nggak bisa dibuka (misalnya karena nggak ada, atau permission ditolak).  
      Kita bisa cek dengan <code>is_open()</code>.</p>

      <pre><code>ifstream file("tidakada.txt");
if (!file.is_open()) {
    cout &lt;&lt; "File gagal dibuka!" &lt;&lt; endl;
} else {
    cout &lt;&lt; "File berhasil dibuka." &lt;&lt; endl;
}</code></pre>
    `,
  },

  {
    title: "Bab 10.4",
    subtitle: "Mini Project 1: Kalkulator Sederhana",
    html: `
      <p>Kita bikin kalkulator yang hasilnya disimpan ke file.</p>

      <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
using namespace std;

int main() {
    double a, b;
    char op;
    cout &lt;&lt; "Masukkan angka pertama: "; cin &gt;&gt; a;
    cout &lt;&lt; "Masukkan operator (+ - * /): "; cin &gt;&gt; op;
    cout &lt;&lt; "Masukkan angka kedua: "; cin &gt;&gt; b;

    double hasil;
    switch(op) {
        case '+': hasil = a + b; break;
        case '-': hasil = a - b; break;
        case '*': hasil = a * b; break;
        case '/': hasil = b != 0 ? a / b : 0; break;
        default: cout &lt;&lt; "Operator salah!" &lt;&lt; endl; return 0;
    }

    cout &lt;&lt; "Hasil: " &lt;&lt; hasil &lt;&lt; endl;

    ofstream file("hasil_kalkulator.txt", ios::app);
    file &lt;&lt; a &lt;&lt; " " &lt;&lt; op &lt;&lt; " " &lt;&lt; b &lt;&lt; " = " &lt;&lt; hasil &lt;&lt; endl;
    file.close();
}</code></pre>
    `,
  },

  {
    title: "Bab 10.5",
    subtitle: "Mini Project 2: Program Catatan Belanja",
    html: `
      <p>Kamu bisa nyatet daftar belanja ke file biar gak lupa.</p>

      <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
using namespace std;

int main() {
    ofstream file("belanja.txt", ios::app);
    string barang;
    cout &lt;&lt; "Masukkan barang belanja (ketik 'selesai' untuk stop): " &lt;&lt; endl;
    while (true) {
        cin &gt;&gt; barang;
        if (barang == "selesai") break;
        file &lt;&lt; barang &lt;&lt; endl;
    }
    file.close();

    // Baca ulang daftar belanja
    ifstream baca("belanja.txt");
    string isi;
    cout &lt;&lt; "\\nDaftar Belanja:" &lt;&lt; endl;
    while (getline(baca, isi)) {
        cout &lt;&lt; "- " &lt;&lt; isi &lt;&lt; endl;
    }
    baca.close();
}</code></pre>
    `,
  },

  {
    title: "Bab 10.6",
    subtitle: "Mini Project 3: Sistem Login Sederhana",
    html: `
      <p>Username & password disimpan di file. Program bisa login dan register.</p>

      <pre><code>#include &lt;iostream&gt;
#include &lt;fstream&gt;
using namespace std;

int main() {
    int pilih;
    cout &lt;&lt; "1. Register\\n2. Login\\nPilih: ";
    cin &gt;&gt; pilih;

    if (pilih == 1) {
        string user, pass;
        cout &lt;&lt; "Username: "; cin &gt;&gt; user;
        cout &lt;&lt; "Password: "; cin &gt;&gt; pass;

        ofstream file("akun.txt", ios::app);
        file &lt;&lt; user &lt;&lt; " " &lt;&lt; pass &lt;&lt; endl;
        file.close();
        cout &lt;&lt; "Akun berhasil dibuat!" &lt;&lt; endl;

    } else if (pilih == 2) {
        string user, pass, u, p;
        cout &lt;&lt; "Username: "; cin &gt;&gt; user;
        cout &lt;&lt; "Password: "; cin &gt;&gt; pass;

        ifstream file("akun.txt");
        bool login = false;
        while (file &gt;&gt; u &gt;&gt; p) {
            if (u == user && p == pass) {
                login = true;
                break;
            }
        }
        file.close();

        if (login) cout &lt;&lt; "Login berhasil!" &lt;&lt; endl;
        else cout &lt;&lt; "Login gagal, coba lagi." &lt;&lt; endl;
    }
}</code></pre>
    `,
  },

  {
    title: "Bab 10.7",
    subtitle: "Latihan Bab 10",
    html: `
      <ol>
        <li>Buat program yang nulis biodata ke file, lalu bacanya lagi.</li>
        <li>Modifikasi program catatan belanja supaya ada total harga barang.</li>
        <li>Buat sistem login yang membatasi percobaan login maksimal 3 kali.</li>
        <li>Coba gabungkan konsep file handling dengan OOP (contoh: class Mahasiswa yang datanya disimpan ke file).</li>
      </ol>
    `,
  },
];

let idxCpp10 = 0;

function renderMateriCppBab10() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab10[idxCpp10];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp10 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp10 === materiCppBab10.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp10 > 0) {
    idxCpp10--;
    renderMateriCppBab10();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp10 < materiCppBab10.length - 1) {
    idxCpp10++;
    renderMateriCppBab10();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab10();
