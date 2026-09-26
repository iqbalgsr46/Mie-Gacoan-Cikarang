# Redesign Website Mie Gacoan Cikarang

Proyek redesign modern, berenergi tinggi, dan responsif untuk website **Mie Gacoan Cikarang**, diterjemahkan langsung dari referensi visual landing page pop-diner/streetwear restaurant (*CRISPR*) dengan standar kualitas visual matang dan arsitektur kode frontend profesional.

---

## 🚀 Fitur Utama & Struktur Halaman

1. **Top Bar & Sticky Header**:
   - Logo ikonik Gacoan Cikarang dengan micro-animation hover.
   - Navigasi deskopt & responsif mobile drawer.
   - Tombol Pill CTA *"Pesan Online"*.

2. **Hero Section (Centerpiece Showcase)**:
   - Headline tipografi ultra-bold all-caps: *"PEDAS GURIH, CRISPY MIE GACOAN MENU"*.
   - Foto hero produk porsi komplit melayang (*floating depth effect*) dengan bayangan realistis.
   - Badge stempel sirkular 100% Halal MUI & Level 0-8.
   - Social proof metrik (Rating 4.8/5.0 dari 12.400+ ulasan).

3. **Infinite Running Marquee Tickers**:
   - Pita banner hitam pekat melintang dengan running text promo & slogan Gacoan.

4. **Featured 3-Column Showcase Cards**:
   - 3 menu pilar: *Mie Gacoan (Manis Gurih)*, *Mie Hompimpa (Asin Nampol)*, dan *Udang Keju Lumer*.
   - Kartu oranye-amber tebal dengan neo-brutalist pop shadows.

5. **Indulgence Combo Experience**:
   - Porsi besar kombo favorit (Mie + Dimsum Crispy + Es Gobak Sodor Dingin).

6. **Interactive Menu Catalog**:
   - Filter tab kategori (*Semua, Menu Mie, Dimsum, Minuman Es*).
   - Panduan Level Pedas (*Level 0 Suit hingga Level 8 Sultan*).

7. **Social Proof / Customer Stories**:
   - 3 kartu potret vertikal (*squircle 4:5*) dengan ulasan nyata pelanggan setia Cikarang.

8. **Outlet Resmi Cikarang**:
   - Informasi detail Outlet Jababeka (Cikarang Utara) & Outlet Lippo Cikarang (Cikarang Selatan).
   - Jam operasional, fasilitas, nomor telepon, dan rute Google Maps terverifikasi.

9. **Mega Typography Footer**:
   - Tagline *"PEDAS MAKSIMAL, HARGA BERSAHABAT, CIKARANG."*
   - Navigasi 3 kolom (Menu, Outlet, Socials).
   - Wordmark tipografi raksasa *"MIE GACOAN CIKARANG"*.

---

## 🛠️ Teknologi & Standar Kode

- **Framework**: Next.js 14 (App Router)
- **Bahasa**: JavaScript (`.jsx` untuk komponen React, `.js` untuk data dan utilitas)
- **Styling**: Tailwind CSS dengan kustomisasi tema Gacoan (Warna kuning hangat, aksen cabai merah, dan pop shadows)
- **Ikonografi**: Lucide React
- **Mobile First**: Diuji pada resolusi 360px, 390px, 768px, 1024px, hingga 1440px+

---

## 📦 Cara Menjalankan Proyek

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

2. **Build untuk Production**:
   ```bash
   npm run build
   npm run start
   ```

3. **Pemeriksaan Linter**:
   ```bash
   npm run lint
   ```

---

## 📁 Struktur Folder

```
src/
├── app/
│   ├── globals.css         # Styling global, custom font, dan utilitas marquee
│   ├── layout.jsx          # Root layout, Google Font Outfit, dan SEO Metadata
│   └── page.jsx            # Penyusun section halaman utama
├── components/
│   ├── layout/
│   │   ├── marquee-banner.jsx   # Banner teks berjalan tanpa henti
│   │   ├── site-footer.jsx      # Mega footer dengan brand wordmark
│   │   └── site-header.jsx      # Sticky navbar dan mobile drawer
│   └── ui/
│       ├── badge.jsx            # Komponen badge stempel / label status
│       ├── button.jsx           # Komponen pill button berdesain pop
│       └── order-modal.jsx      # Modal simulasi pemesanan online / outlet
├── data/
│   └── restaurant-data.js  # Data menu terpusat, outlet, ulasan, & mitra
├── features/
│   └── home/
│       └── components/
│           ├── featured-showcase-section.jsx
│           ├── hero-section.jsx
│           ├── indulgence-combo-section.jsx
│           ├── menu-catalog-section.jsx
│           ├── outlet-location-section.jsx
│           └── story-community-section.jsx
├── lib/
│   └── utils.js            # Fungsi helper format mata uang dan cn()
docs/
└── design-brief.md         # Analisis visual komparatif referensi desain
```
