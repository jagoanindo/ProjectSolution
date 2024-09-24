GitHub adalah platform berbasis web yang digunakan untuk mengelola dan berbagi kode sumber dalam proyek pengembangan perangkat lunak. GitHub mendukung sistem kontrol versi Git, yang memungkinkan banyak pengembang untuk bekerja bersama secara kolaboratif pada proyek yang sama. 

### Fitur Utama GitHub:
1. **Repositori (Repository)**: Tempat penyimpanan kode sumber dari suatu proyek. Setiap repositori menyimpan semua file yang terkait dengan proyek tersebut serta riwayat perubahan file tersebut.

2. **Branching dan Merging**: Pengembang dapat membuat cabang (branch) baru dari repositori utama untuk mengembangkan fitur baru atau memperbaiki bug tanpa mengganggu kode sumber yang stabil. Setelah perubahan selesai dan diuji, cabang tersebut bisa digabungkan (merge) kembali ke cabang utama.

3. **Pull Request**: Fitur yang memungkinkan pengembang untuk mengusulkan perubahan pada kode dalam repositori. Pengembang lain bisa meninjau, berdiskusi, dan memberikan masukan sebelum perubahan diterima dan digabungkan ke dalam proyek.

4. **Issue Tracking**: Fitur untuk melacak bug, permintaan fitur, atau tugas lain yang terkait dengan pengembangan proyek.

5. **Wiki dan Dokumentasi**: Setiap repositori bisa memiliki wiki yang berisi dokumentasi lengkap tentang proyek, seperti panduan penggunaan, petunjuk instalasi, atau informasi lainnya.

6. **Actions dan CI/CD**: GitHub menyediakan GitHub Actions untuk mengotomatisasi alur kerja seperti pengujian kode, penerapan ke server, atau tugas lainnya, mendukung praktik Continuous Integration/Continuous Deployment (CI/CD).

7. **GitHub Pages**: Fitur yang memungkinkan pengguna untuk membuat dan mempublikasikan situs web dari repositori mereka.

8. **Kolaborasi Sosial**: Pengguna dapat mengikuti repositori lain, memberikan "star" sebagai bentuk apresiasi, dan berkolaborasi dengan komunitas pengembang yang luas di seluruh dunia.

### Penggunaan GitHub
GitHub sangat populer di kalangan pengembang perangkat lunak, baik untuk proyek open-source maupun proyek pribadi atau perusahaan. Selain sebagai platform kolaborasi, GitHub juga berfungsi sebagai portofolio digital untuk pengembang yang ingin menunjukkan karya mereka kepada calon pemberi kerja atau komunitas.

GitHub juga sering digunakan dalam penelitian untuk berbagi dan mengelola kode analisis data, skrip otomatisasi, atau proyek lain yang memerlukan kontrol versi dan kolaborasi.

Berikut adalah langkah-langkah untuk membuat proyek baru di GitHub menggunakan Visual Studio Code (VS Code):

### Prasyarat:
1. **Visual Studio Code** sudah terpasang.
2. **Git** terpasang dan dikonfigurasi di komputer.
3. **Akun GitHub** dan telah membuat atau mengakses token akses pribadi GitHub untuk autentikasi (jika perlu).

### Langkah-Langkah:

#### 1. **Buat Proyek Baru di VS Code**
   - Buka Visual Studio Code.
   - Pilih `File` > `Open Folder...`, lalu buat folder baru di lokasi yang diinginkan. Ini akan menjadi direktori proyek Anda.
   - Pilih folder tersebut, lalu klik `Select Folder`.
   - Di dalam VS Code, Anda sekarang berada di dalam direktori proyek baru. Buat file pertama Anda, misalnya `index.html` atau `main.py`, tergantung pada jenis proyek.

#### 2. **Inisialisasi Repositori Git**
   - Buka terminal di VS Code (Ctrl + ` atau `View` > `Terminal`).
   - Jalankan perintah berikut untuk menginisialisasi repositori Git baru:
     ```bash
     git init
     ```
   - Tambahkan semua file yang ada di direktori ke repositori Git:
     ```bash
     git add .
     ```
   - Buat commit awal:
     ```bash
     git commit -m "Initial commit"
     ```

#### 3. **Hubungkan Proyek ke GitHub**
   - Buka GitHub di peramban dan buat repositori baru.
   - Setelah membuat repositori baru di GitHub, Anda akan diberikan URL repositori, biasanya seperti `https://github.com/username/repository-name.git`.
   - Kembali ke VS Code dan tambahkan URL repositori sebagai remote origin:
     ```bash
     git remote add origin https://github.com/username/repository-name.git
     ```
   - Push commit lokal Anda ke GitHub:
     ```bash
     git push -u origin master
     ```

#### 4. **Kelola Proyek Anda di GitHub**
   - Setelah push berhasil, repositori Anda sekarang tersedia di GitHub. Anda bisa mengelola proyek ini dari GitHub dan melanjutkan pengembangan dari VS Code.
   - Setiap perubahan yang Anda buat bisa di-commit dan di-push ke GitHub:
     ```bash
     git add .
     git commit -m "Deskripsi perubahan"
     git push
     ```

#### 5. **Menambahkan README.md dan .gitignore (Opsional)**
   - Tambahkan file `README.md` untuk memberikan deskripsi proyek:
     ```markdown
     # Nama Proyek
     
     Deskripsi singkat tentang proyek ini.
     ```
   - Tambahkan file `.gitignore` untuk mengecualikan file atau direktori tertentu dari repositori:
     ```
     # Contoh .gitignore untuk proyek Python
     __pycache__/
     *.pyc
     ```

### Contoh Kasus:
Misalnya, Anda membuat proyek aplikasi Python sederhana yang menampilkan "Hello, World!" di terminal. Anda bisa membuat file `main.py` di VS Code dengan konten berikut:

```python
print("Hello, World!")
```

Setelah mengikuti langkah-langkah di atas, Anda sekarang memiliki proyek Python yang siap untuk dikembangkan lebih lanjut dan diunggah ke GitHub.