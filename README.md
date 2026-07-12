# 🍽️ Restaurant Page

Website restoran dinamis yang dirender sepenuhnya menggunakan JavaScript. Proyek ini dibangun sebagai bagian dari kurikulum [The Odin Project](https://www.theodinproject.com/).

Proyek ini mendemonstrasikan kekuatan manipulasi DOM menggunakan **Vanilla JavaScript** serta kegunaan **Webpack** untuk mem-_bundle_ aset dan menggunakan arsitektur JavaScript modular modern.

## 🌟 Live Preview

*https://bimbdevp.github.io/restaurant-page/*

## ✨ Fitur Utama

- **Rendering Dinamis:** Seluruh antarmuka pengguna (UI), termasuk header, navigasi, dan semua halaman konten, dihasilkan secara dinamis menggunakan JavaScript (`document.createElement`).
- **Logika Tab-Switching:** Navigasi perpindahan antar halaman **Home**, **Menu**, dan **About** berjalan sangat mulus tanpa perlu me-_reload_ browser.
- **ES6 Modules:** Kode dalam proyek ini dipecah menjadi modul-modul terpisah untuk mematuhi prinsip _Separation of Concerns_. Setiap halaman/tab memiliki file modulnya masing-masing.
- **Webpack Bundling:** Konfigurasi Webpack yang efisien untuk menyatukan file JavaScript, stylesheet CSS (`css-loader`, `style-loader`), dan aset gambar (`asset/resource`).
- **UI/UX Modern:** Desain antarmuka dibuat dari nol menggunakan CSS Flexbox dan Grid. Dilengkapi dengan font kustom, efek animasi _hover_, sentuhan _glassmorphism_, dan desain _card_ yang responsif.

## 🛠️ Dibangun Menggunakan

- HTML5 & CSS3 (Flexbox & Grid)
- Vanilla JavaScript (ES6)
- [Webpack 5](https://webpack.js.org/)
- npm

## 📁 Struktur Proyek

```text
src/
├── index.js      # Titik masuk (Entry point) & logika perpindahan tab
├── home.js       # Modul untuk menghasilkan DOM halaman Home
├── menu.js       # Modul untuk menghasilkan DOM halaman Menu
├── about.js      # Modul untuk menghasilkan DOM halaman About
├── style.css     # Gaya CSS global & layout
├── template.html # Kerangka HTML minimalis (untuk html-webpack-plugin)
├── fonts/        # Aset font lokal
└── image/        # Aset gambar yang di-bundle melalui Webpack
```

## 🚀 Cara Menjalankan Secara Lokal

Ikuti langkah-langkah mudah berikut untuk menjalankan proyek ini di komputer Anda.

### Prasyarat

Pastikan Anda sudah menginstal Node.js dan npm di komputer Anda.

### Instalasi

1. _Clone_ repositori ini
   ```sh
   git clone https://github.com/BimbDevp/restaurant-page.git
   ```
2. Masuk ke dalam direktori proyek
   ```sh
   cd restaurant-page
   ```
3. Instal semua paket NPM yang dibutuhkan
   ```sh
   npm install
   ```

### Penggunaan

- Untuk menjalankan _development server_ Webpack (dengan fitur _hot-reloading_):

  ```sh
  npm run start
  ```

  _(Catatan: Anda mungkin perlu mengonfigurasi script 'start' di package.json untuk menggunakan webpack-dev-server)_

- Untuk mem-_bundle_ file ke tahap produksi (menghasilkan folder `dist/`):
  ```sh
  npm run build
  ```

## 🌐 Cara Deploy ke GitHub Pages

Proyek ini menggunakan paket npm `gh-pages` untuk mempermudah proses _deployment_.

1. Pastikan file `package.json` Anda memiliki script _deploy_:
   ```json
   "scripts": {
     "build": "webpack",
     "deploy": "gh-pages -d dist"
   }
   ```
2. Lakukan _build_ untuk file produksi:
   ```sh
   npm run build
   ```
3. Deploy ke branch `gh-pages` secara otomatis dengan menjalankan:
   ```sh
   npm run deploy
   ```
4. Buka Pengaturan Repositori GitHub Anda (Settings > Pages), dan pastikan sumbernya (_source_) diatur ke branch `gh-pages`.

## 💡 Pelajaran yang Didapat (_Lessons Learned_)

- Bagaimana cara mengonfigurasi Webpack dari awal untuk menangani CSS dan aset gambar statis.
- Pentingnya ES6 Modules dalam menjaga agar kode tidak berulang (DRY - _Don't Repeat Yourself_) dan tetap terorganisir.
- Pemahaman yang lebih dalam mengenai DOM, khususnya menghindari penggunaan `innerHTML` dan membiasakan diri menggunakan metode yang lebih aman seperti `.appendChild()`.
- Menyusun tata letak (_layout_) CSS Grid dan Flexbox di seputar elemen DOM yang dihasilkan secara dinamis.

---

_Proyek ini adalah bagian dari Kurikulum Full Stack JavaScript di The Odin Project._
