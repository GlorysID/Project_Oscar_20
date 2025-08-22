const materiCppBab9 = [
  {
    title: "Bab 9",
    subtitle: "Object-Oriented Programming (OOP) <br><br> Tujuan Bab:",
    html: `
      <ul>
        <li>Kamu ngerti apa itu class dan object.</li>
        <li>Kamu bisa bikin atribut (data) dan method (fungsi) di dalam class.</li>
        <li>Kamu ngerti constructor & destructor.</li>
        <li>Kamu bisa pakai access modifier (public, private, protected).</li>
        <li>Kamu ngerti konsep inheritance & polymorphism.</li>
        <li>Kamu paham encapsulation & abstraction dalam kehidupan nyata.</li>
        <li>Kamu bisa bikin program nyata dengan class (contoh: manajemen mahasiswa).</li>
      </ul>
    `,
  },

  {
    title: "Bab 9.1",
    subtitle: "Konsep Class & Object",
    html: `
      <p>Class itu kayak blueprint atau cetak biru. Object itu hasil nyata dari cetakannya.</p>

      <pre><code>class Mahasiswa {
public:
    string nama;
    int umur;

    void perkenalan() {
        cout &lt;&lt; "Halo, nama aku " &lt;&lt; nama 
             &lt;&lt; ", umur " &lt;&lt; umur &lt;&lt; " tahun." &lt;&lt; endl;
    }
};

int main() {
    Mahasiswa m1;     // object dari class Mahasiswa
    m1.nama = "Budi";
    m1.umur = 20;
    m1.perkenalan();

    return 0;
}</code></pre>

      <p>Class = blueprint. Object = produk nyata.</p>
    `,
  },

  {
    title: "Bab 9.2",
    subtitle: "Atribut & Method",
    html: `
      <p>Atribut itu data yang dimiliki object, method itu fungsi/perilaku object.</p>

      <pre><code>class Mobil {
public:
    string merk;
    int tahun;

    void info() {
        cout &lt;&lt; "Mobil " &lt;&lt; merk 
             &lt;&lt; " keluaran tahun " &lt;&lt; tahun &lt;&lt; endl;
    }
};

int main() {
    Mobil m;
    m.merk = "Toyota";
    m.tahun = 2020;
    m.info();

    return 0;
}</code></pre>
    `,
  },

  {
    title: "Bab 9.3",
    subtitle: "Constructor & Destructor",
    html: `
      <p>Constructor itu fungsi khusus yang otomatis jalan saat object dibuat.  
      Destructor otomatis jalan saat object dihancurkan.</p>

      <pre><code>class Mahasiswa {
public:
    string nama;

    // Constructor
    Mahasiswa(string n) {
        nama = n;
        cout &lt;&lt; "Object " &lt;&lt; nama &lt;&lt; " dibuat." &lt;&lt; endl;
    }

    // Destructor
    ~Mahasiswa() {
        cout &lt;&lt; "Object " &lt;&lt; nama &lt;&lt; " dihancurkan." &lt;&lt; endl;
    }
};

int main() {
    Mahasiswa m("Andi"); // constructor otomatis dipanggil
    return 0; // destructor otomatis dipanggil
}</code></pre>
    `,
  },

  {
    title: "Bab 9.4",
    subtitle: "Access Modifier (public, private, protected)",
    html: `
      <p>Access modifier menentukan siapa yang boleh akses atribut/method.</p>
      <ul>
        <li><b>public</b>: bisa diakses dari mana aja.</li>
        <li><b>private</b>: cuma bisa diakses dari dalam class itu sendiri.</li>
        <li><b>protected</b>: bisa diakses dari class itu & turunannya.</li>
      </ul>

      <pre><code>class Akun {
private:
    string password;

public:
    string username;

    void setPassword(string pass) {
        password = pass;
    }
};</code></pre>
    `,
  },

  {
    title: "Bab 9.5",
    subtitle: "Inheritance (Pewarisan Class)",
    html: `
      <p>Class bisa mewarisi sifat dari class lain. Kayak anak mewarisi sifat orang tua.</p>

      <pre><code>class Hewan {
public:
    void makan() {
        cout &lt;&lt; "Hewan sedang makan." &lt;&lt; endl;
    }
};

class Kucing : public Hewan {
public:
    void suara() {
        cout &lt;&lt; "Meong!" &lt;&lt; endl;
    }
};

int main() {
    Kucing k;
    k.makan(); // diwarisi dari Hewan
    k.suara(); // milik Kucing
}</code></pre>
    `,
  },

  {
    title: "Bab 9.6",
    subtitle: "Polymorphism (Overriding & Virtual Function)",
    html: `
      <p>Polymorphism artinya satu method bisa punya banyak bentuk. 
      Dalam C++ biasanya lewat <b>overriding</b> dan <b>virtual function</b>.</p>

      <pre><code>class Hewan {
public:
    virtual void suara() {
        cout &lt;&lt; "Hewan bersuara." &lt;&lt; endl;
    }
};

class Anjing : public Hewan {
public:
    void suara() override {
        cout &lt;&lt; "Guk guk!" &lt;&lt; endl;
    }
};

int main() {
    Hewan *h = new Anjing();
    h-&gt;suara();  // output: Guk guk!
}</code></pre>
    `,
  },

  {
    title: "Bab 9.7",
    subtitle: "Encapsulation & Abstraction",
    html: `
      <p><b>Encapsulation</b>: membungkus data & method biar lebih aman, akses dibatasi.  
      <b>Abstraction</b>: cuma nunjukin hal penting, detail internal disembunyikan.</p>

      <pre><code>class BankAccount {
private:
    int saldo;

public:
    BankAccount(int s) { saldo = s; }
    void setor(int jumlah) { saldo += jumlah; }
    void tarik(int jumlah) { if (saldo &gt;= jumlah) saldo -= jumlah; }
    int getSaldo() { return saldo; }
};</code></pre>
    `,
  },

  {
    title: "Bab 9.8",
    subtitle: "Studi Kasus: Program Manajemen Mahasiswa",
    html: `
      <pre><code>class Mahasiswa {
private:
    string nama;
    int umur;
    string nim;

public:
    Mahasiswa(string n, int u, string ni) {
        nama = n; umur = u; nim = ni;
    }

    void tampilkanData() {
        cout &lt;&lt; "Nama: " &lt;&lt; nama 
             &lt;&lt; ", Umur: " &lt;&lt; umur 
             &lt;&lt; ", NIM: " &lt;&lt; nim &lt;&lt; endl;
    }
};

int main() {
    Mahasiswa m("Andi", 20, "123456");
    m.tampilkanData();
}</code></pre>
    `,
  },

  {
    title: "Bab 9.9",
    subtitle: "Latihan Bab 9",
    html: `
      <ol>
        <li>Buat class sederhana (contoh: Buku) dengan atribut judul & pengarang, lalu buat objectnya.</li>
        <li>Buat class dengan constructor & destructor, amati outputnya.</li>
        <li>Buat program dengan inheritance: class Hewan → class Kucing & class Burung.</li>
        <li>Coba polymorphism dengan fungsi virtual.</li>
        <li>Buat program manajemen data mahasiswa sederhana.</li>
      </ol>
    `,
  },
];

let idxCpp9 = 0;

function renderMateriCppBab9() {
  const container = document.getElementById("materi-content-container");
  const m = materiCppBab9[idxCpp9];
  container.innerHTML = `
    <div class="materi-content">
      <h1 class="Bab">${m.title}</h1>
      <h2>${m.subtitle}</h2>
      ${m.html}
    </div>
  `;
  document.getElementById("prevBtn").disabled = idxCpp9 === 0;
  document.getElementById("nextBtn").disabled =
    idxCpp9 === materiCppBab9.length - 1;
}

document.getElementById("prevBtn").onclick = function () {
  if (idxCpp9 > 0) {
    idxCpp9--;
    renderMateriCppBab9();
  }
};
document.getElementById("nextBtn").onclick = function () {
  if (idxCpp9 < materiCppBab9.length - 1) {
    idxCpp9++;
    renderMateriCppBab9();
  }
};

// Inisialisasi pertama kali
renderMateriCppBab9();
