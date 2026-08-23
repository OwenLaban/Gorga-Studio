# Gorga Studio 🎨

Website jasa pembuatan website profesional untuk UMKM & bisnis Indonesia. Single-page statis (HTML + CSS + JS) dengan dua tema yang bisa diubah lewat tombol mengambang.

Kunjungi site livenya : https://gorgastudio.netlify.app

## ✨ Fitur

- **Single page** lengkap: Hero, Fitur, Paket harga, FAQ, Kontak, Footer.
- **Dua tema**: Terang (pastel oranye lembut ala Anthropic) & Gelap (hitam + merah + oranye).
- **Tombol tema mengambang** di kiri bawah, selalu terlihat, pilihan tersimpan di `localStorage`.
- **Font Prociono** untuk kesan elegan & mudah dibaca.
- **Form kontak** yang langsung meneruskan pesan ke WhatsApp.
- **Responsif** di HP, tablet, dan desktop.
- Tanpa dependency/build step — tinggal buka di browser.

## 📁 Struktur

```
Gorga Studio/
├── index.html      # Struktur halaman
├── styles.css      # Gaya & variabel tema (light/dark)
├── script.js       # Toggle tema, tema FAB, form WhatsApp, menu mobile
├── logo.png        # Logo brand
└── README.md
```

## 🚀 Cara menjalankan di lokal

Buka terminal di folder proyek, lalu jalankan salah satu:

**Python:**
```bash
python -m http.server 8000
```
Buka: http://localhost:8000

**Atau cukup buka** `index.html` langsung di browser (beberapa fitur seperti `localStorage` lebih baik via server).

## 🎨 Kustomisasi tema

Semua warna diatur via CSS variables di `styles.css`:
- `:root` → tema **Terang** (default).
- `[data-theme="dark"]` → tema **Gelap**.

Ubah nilai variabel (mis. `--primary`, `--bg`, `--text`) untuk menyesuaikan warna tanpa menyentuh tiap elemen.

## 📱 Form WhatsApp

Edit nomor tujuan di `script.js` (cari `WA_NUMBER`):
```js
const WA_NUMBER = "6281234567890"; // format 62xxxx tanpa +
```

## 📦 Deploy

Proyek ini static — bisa di-deploy ke Netlify, Vercel, GitHub Pages, atau hosting apa pun:
- Netlify: drag & drop folder ini, atau hubungkan repo GitHub.
- GitHub Pages: push ke branch `main`, aktifkan Pages di pengaturan repo.

## 📝 Catatan

- Logo berada di `logo.png`. Kalau mengganti gambar, perbarui juga `src` di `index.html` (tambahkan `?v=2` agar browser mengambil yang baru).
- File CSS/JS menggunakan cache-busting (`?v=`) di `<link>`/`<script>` untuk memaksa pembaruan saat ada perubahan.
