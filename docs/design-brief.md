# Design Brief & Visual Analysis: Redesign Mie Gacoan Cikarang

Dokumen ini mendokumentasikan analisis visual komparatif dari referensi desain yang diberikan (landing page restoran bertema fast food/bold fast-casual bernama "CRISPR") serta keputusan desain untuk implementasi website **Mie Gacoan Cikarang**.

---

## 1. Analisis Visual Referensi ("CRISPR")

### 1.1 Susunan Section & Hierarki Informasi
1. **Top Bar / Header**: 
   - Logo di kiri (ikon minimal + wordmark tebal all-caps).
   - Aksi navigasi di kanan dalam bentuk *pill button* ("ORDER" & ikon "MENU").
   - Transparan dengan latar belakang yang menyatu dengan kanvas hero (warna dasar kuning hangat).
2. **Hero Section**:
   - Headline display raksasa all-caps di bagian atas (`text-5xl` s/d `text-7xl`, font ultra-bold/grotesk).
   - Foto produk *hero center-piece* masif beresolusi tajam, dengan efek *floating* dan *soft drop-shadow* realistis, tumpang tindih (*layer overlap*) secara berani dengan teks judul di belakangnya (rasio visual 60% gambar, 40% teks).
   - Latar belakang kuning berenergi tinggi dengan *doodle outline* monokromatik halus (ilustrasi kentang goreng, minuman, burger) sebagai penambah kedalaman grafis tanpa membuat distraksi.
   - Badge stamp sirkular (misal: "FRESHLY CRAFTED" / "100% HALAL").
3. **Infinite Marquee Ticker (Running Banner)**:
   - Pita strip hitam pekat (`bg-black` / `bg-neutral-900`) selebar layar penuh (`w-full`) dengan teks tebal kontras putih yang bergerak konstan ("BITE INTO HAPPINESS 🍔").
   - Berfungsi sebagai jeda visual ritmis dan transisi dinamis antar section.
4. **Statement & 3-Column Product Showcase**:
   - Headline punchy: *"SIZZLING BEEF TO SPICY CHICKEN CRISPR BRINGS ART"*, disusul sub-headline *"BOLD FLAVORS, FRESH CREATIONS"*.
   - 3 Feature Cards sejajar (3 kolom pada desktop, horizontal carousel/stacked pada mobile):
     - Latar kartu oranye-hangat (`bg-orange-500` / `bg-amber-500`) dengan *rounded corners* besar (`rounded-2xl` / `rounded-3xl`).
     - Teks judul badge kartu berkontur tebal di atas foto burger close-up.
     - Call-to-action pill button oranye/merah di bawah kartu ("EXPLORE MENU").
5. **Indulgence Highlight Section**:
   - Judul monumental berukuran masif: *"YOUR FAVORITE INDULGENCE"*.
   - Komposisi foto produk ganda bertingkat (paket kombo hidangan utama + cemilan pendamping) melayang dengan *depth of field* tajam.
   - Strip running marquee kedua di bawahnya untuk konsistensi ritme visual.
6. **Social Proof & Community Stories**:
   - Headline: *"EVERY BURGER TELLS A STORY"*.
   - Grid 3 kartu foto potret vertikal (*squircle / rounded-3xl*) yang menampilkan konsumen menikmati makanan dengan ekspresi riang dan berenergi.
7. **Mega Footer**:
   - Tagline ringkas di kiri atas: *"JUICY BITES, BOLD FLAVORS, EVERY TIME."*
   - Navigasi link 3 kolom (Company, Explore, Socials).
   - Wordmark tipografi raksasa (*mega typography*) memenuhi lebar kontainer di bagian bawah (logo teks masif "CRISPR" dengan ikon).
   - Copyright bar kecil di bagian paling dasar.

---

## 2. Adaptasi Desain untuk Mie Gacoan Cikarang

| Elemen Referensi | Implementasi Mie Gacoan Cikarang |
|---|---|
| **Karakter Brand** | Bold, playful, energik, pedas, ramah anak muda (Gen Z & keluarga). |
| **Headline Hero** | *"PEDAS GURIH, MIE GACOAN CIKARANG"* dengan subtitle *"Sensasi Pedas No. 1 di Cikarang, Dari Level 0 Sampai Level 8!"* |
| **Hero Image** | Semangkuk Mie Gacoan komplit dengan taburan ayam cincang gurih, pangsit goreng mekar renyah, dan cabai merah segar melayang bertekstur. |
| **Marquee Ticker** | *"MIE GACOAN CIKARANG 🔥 PEDASNYA BIKIN NAGIH 🔥 MIE HOMPIMPA 🔥 UDANG KEJU 🔥 ES GOBAK SODOR 🔥 HARGA BERSAHABAT 🔥"* |
| **Showcase 3 Kartu** | Tiga menu pilar utama: <br>1. **Mie Gacoan** (Manis Gurih Pedas Mantap) <br>2. **Mie Hompimpa** (Asin Gurih Pedas Nampol) <br>3. **Udang Keju & Rambutan** (Dimsum Crispy Lumer Favorit) |
| **Indulgence Section** | *"KOMBO PALING DIBURU DI CIKARANG"* (Porsi lengkap: Mie Level Pilihan + Dimsum Crispy + Es Gobak Sodor Dingin Segar). |
| **Community Section** | *"CERITA SERU DI TIAP SUAPAN"* (Momen nongkrong seru anak muda & keluarga di outlet Cikarang). |
| **Informasi Outlet Cikarang** | Alamat spesifik outlet Cikarang (Jl. Kasuari / Cikarang Baru / Jababeka & Lippo Cikarang), jam operasional 09.00 - 23.00, order online via GoFood, GrabFood, ShopeeFood, dan tombol reservasi/cek lokasi via Google Maps. |

---

## 3. Sistem Desain (Design Tokens)

### 3.1 Palet Warna
- **Gacoan Primary Yellow**: `#FDB813` (Warna latar dinamis, hangat, menggugah selera).
- **Gacoan Dark Yellow**: `#E5A000` (Hover & aksen batas).
- **Chili Red Accent**: `#E11D48` & `#DC2626` (Aksen pedas, tombol pesan, badge level pedas).
- **Flame Orange**: `#EA580C` (Warna kartu feature & highlight).
- **Obsidian Dark**: `#0A0A0A` & `#121212` (Teks judul, marquee running banner, footer contrast).
- **Pure Cream / Light Surface**: `#FFFDF5` (Latar belakang modal, kartu detail, dan popover).

### 3.2 Tipografi
- **Display / Heading Font**: Heavy Sans-Serif / Ultra-Bold Grotesk (bobot `font-black` / `font-extrabold` 800-900, `tracking-tight` atau `tracking-tighter`, all-caps pada judul utama).
- **Body & Label Font**: Clean, humanis, sangat mudah dibaca pada layar kecil (bobot 400, 500, 600).

### 3.3 Bentuk, Radius, & Bayangan
- **Radius**: `rounded-full` untuk tombol CTA dan badge; `rounded-2xl` hingga `rounded-3xl` untuk kartu menu dan foto komunitas.
- **Shadows**:
  - `shadow-float`: bayangan halus berlapis untuk elemen makanan melayang.
  - `shadow-pop`: bayangan tegas bergaya neo-brutal/pop-art khas restoran modern casual (`4px 4px 0 #000`).

---

## 4. Rencana Responsivitas
- **Mobile (< 640px / 360-390px)**:
  - Header dengan tombol Menu Drawer / Hamburger yang mulus.
  - Hero image ditempatkan proporsional tanpa terpotong (*responsive height & object-contain*).
  - Kartu 3 menu utama menjadi scrollable horizontal snap atau stacked vertikal yang nyaman di-tap jempol.
  - Padding samping `px-4` atau `px-5` agar tidak overflow horizontal.
- **Tablet (768px)**:
  - Kolom grid 2 atau 3 kolom proporsional.
  - Ukuran heading teks menyesuaikan (`text-4xl` s/d `text-5xl`).
- **Desktop (1024px - 1440px)**:
  - Tampilan penuh sesuai referensi: layout tumpang tindih presisi, mega footer wordmark, tombol navigasi sticky pill.
