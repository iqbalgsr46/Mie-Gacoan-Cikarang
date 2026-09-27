"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Menu,
  ChevronRight,
  ChevronUp,
  X,
  ArrowLeft,
  Check,
  CheckCircle2,
  Minus,
  Plus,
  Edit3,
  SquarePen,
  FileText,
  Maximize2,
  Store,
  Clock,
  Phone,
} from "lucide-react";
import { dineInInfo, dineInCategories } from "@/data/dinein-data";

function DineInOrderContent() {
  const searchParams = useSearchParams();
  const initialView =
    searchParams.get("view") === "checkout"
      ? "checkout"
      : searchParams.get("view") === "customize" || searchParams.get("customize")
      ? "customize"
      : "menu";

  // Views: 'menu' (katalog), 'customize' (layar penuh kustomisasi item), atau 'checkout' (layar ringkasan order)
  const [view, setView] = useState(initialView);
  const [previousView, setPreviousView] = useState("menu");

  const [activeTab, setActiveTab] = useState(dineInCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Cart state: diawali dengan 1 pesanan Combat A agar tampilan awal sesuai screenshot
  const [cart, setCart] = useState([
    {
      id: "init-item-1",
      itemId: "combat-a",
      name: "GACOAN COMBAT A",
      price: 50000,
      quantity: 1,
      image: "/images/dinein/combat-a-hero-clean.png",
      variants: [
        "2x MIE GACOAN LEVEL 1",
        "1x UDANG KEJU",
        "1x UDANG RAMBUTAN",
        "2x LEMON TEA - ICED",
      ],
      notes: "",
    },
  ]);

  // Data item yang sedang dikustomisasi di layar penuh
  const [customizingItem, setCustomizingItem] = useState(() => {
    return dineInCategories[0]?.items[0] || null;
  });
  const [editingCartId, setEditingCartId] = useState(null);

  // Pilihan di dalam layar kustomisasi
  const [selectedMie, setSelectedMie] = useState("MIE GACOAN LEVEL 1");
  const [mieQty, setMieQty] = useState(2);
  const [selectedDimsum1, setSelectedDimsum1] = useState("UDANG KEJU");
  const [selectedDimsum2, setSelectedDimsum2] = useState("UDANG RAMBUTAN");
  const [selectedBeverage, setSelectedBeverage] = useState("LEMON TEA - ICED");
  const [beverageQty, setBeverageQty] = useState(2);
  const [modalNotes, setModalNotes] = useState("");
  const [modalItemQty, setModalItemQty] = useState(1);
  const [selectedLevelSingle, setSelectedLevelSingle] = useState("Level 1");

  // Catatan tambahan di checkout
  const [extraNotes, setExtraNotes] = useState("");
  const [isEditingExtraNotes, setIsEditingExtraNotes] = useState(false);

  // Dialog sukses pembayaran
  const [isPaymentSuccessOpen, setIsPaymentSuccessOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const isUserClickingTabRef = useRef(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2200);
  };

  // Sync state dengan URL search params
  useEffect(() => {
    const v = searchParams.get("view");
    if (v === "checkout") {
      setView("checkout");
    } else if (v === "customize") {
      setView("customize");
    } else if (v === "menu") {
      setView("menu");
    }

    const c = searchParams.get("customize");
    if (c) {
      const item =
        dineInCategories.flatMap((cat) => cat.items).find((it) => it.id === c) ||
        dineInCategories[0]?.items[0];
      if (item) {
        handleOpenCustomize(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Scroll listener untuk tombol scroll-to-top dan active tab spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 250);

      if (isUserClickingTabRef.current || view !== "menu") return;

      // Update active tab based on scroll position
      for (const cat of dineInCategories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveTab(cat.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [view]);

  const handleTabClick = (catId) => {
    setActiveTab(catId);
    isUserClickingTabRef.current = true;

    const el = document.getElementById(catId);
    if (el) {
      const offset = 55;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isUserClickingTabRef.current = false;
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Buka Layar Kustomisasi Penuh saat klik 'Add' pada katalog
  const handleOpenCustomize = (item) => {
    setPreviousView(view);
    setCustomizingItem(item);
    setEditingCartId(null);
    setModalItemQty(1);
    setModalNotes("");
    setSelectedMie("MIE GACOAN LEVEL 1");
    setMieQty(2);
    setSelectedDimsum1("UDANG KEJU");
    setSelectedDimsum2("UDANG RAMBUTAN");
    setSelectedBeverage("LEMON TEA - ICED");
    setBeverageQty(2);
    setSelectedLevelSingle("Level 1");
    setView("customize");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Buka Layar Kustomisasi untuk mengedit item dari Checkout
  const handleEditCartItem = (cartItem) => {
    setPreviousView("checkout");
    const origItem =
      dineInCategories
        .flatMap((c) => c.items)
        .find((i) => i.id === cartItem.itemId) || {
        id: cartItem.itemId,
        name: cartItem.name,
        price: cartItem.price,
        image: cartItem.image,
        heroImage: cartItem.image,
        description:
          "2 Mie Gacoan Lv 1 , 1 Udang keju , 1 Udang Rambutan dan 2 Lemon Tea Ice",
        isCombo: true,
      };

    setCustomizingItem(origItem);
    setEditingCartId(cartItem.id);
    setModalItemQty(cartItem.quantity);
    setModalNotes(cartItem.notes || "");
    setView("customize");
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Simpan hasil kustomisasi ke keranjang dan kembali ke layar sebelumnya
  const handleSaveCustomization = () => {
    if (!customizingItem) return;

    let variants = [];
    if (customizingItem.isCombo) {
      variants = [
        `${mieQty}x ${selectedMie}`,
        `1x ${selectedDimsum1}`,
        `1x ${selectedDimsum2}`,
        `${beverageQty}x ${selectedBeverage}`,
      ];
    } else if (customizingItem.canCustomLevel) {
      variants = [`1x ${customizingItem.name} ${selectedLevelSingle}`];
    }

    if (editingCartId) {
      setCart((prev) =>
        prev.map((it) =>
          it.id === editingCartId
            ? {
                ...it,
                quantity: modalItemQty,
                variants,
                notes: modalNotes,
              }
            : it
        )
      );
      showToast(`✓ Pesanan ${customizingItem.name} diperbarui`);
    } else {
      const newCartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        itemId: customizingItem.id,
        name: customizingItem.name,
        price: customizingItem.price,
        quantity: modalItemQty,
        image:
          customizingItem.heroImage ||
          customizingItem.image ||
          "/images/dinein/combat-a-hero-clean.png",
        variants,
        notes: modalNotes,
      };
      setCart((prev) => [...prev, newCartItem]);
      showToast(`✓ ${customizingItem.name} ditambahkan`);
    }

    setView(previousView === "checkout" ? "checkout" : "menu");
    setEditingCartId(null);
  };

  // Tambah cepat dari Related Menu
  const handleQuickAddRelated = (item) => {
    const existing = cart.find((c) => c.itemId === item.id);
    if (existing) {
      setCart((prev) =>
        prev.map((c) =>
          c.id === existing.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      const newCartItem = {
        id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        itemId: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        variants: [`1x ${item.name}`],
        notes: "",
      };
      setCart((prev) => [...prev, newCartItem]);
    }
    showToast(`✓ ${item.name} ditambahkan`);
  };

  // Update kuantitas item di keranjang
  const handleUpdateCartQty = (cartId, delta) => {
    setCart((prev) =>
      prev
        .map((it) => {
          if (it.id === cartId) {
            const newQty = it.quantity + delta;
            return newQty > 0 ? { ...it, quantity: newQty } : null;
          }
          return it;
        })
        .filter(Boolean)
    );
  };

  // Filter menu berdasarkan pencarian
  const filteredCategories = dineInCategories
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  // Perhitungan Subtotal, Pajak, dan Total
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const otherFees = cart.length > 0 ? 5000 : 0;
  const totalPayment = subtotal + otherFees;

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#111111] antialiased">
      {/* Shell Aplikasi Mobile (Maksimal 440px di Desktop, 100% di Smartphone) */}
      <main
        style={{
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
        className="w-full max-w-[440px] mx-auto min-h-screen bg-[#F9F9F9] shadow-2xl relative flex flex-col pb-28 overflow-x-hidden selection:bg-[#FA55A8] selection:text-white"
      >
        {/* =========================================================================
            TAMPILAN 1: KATALOG MENU UTAMA DINE IN (view === 'menu')
           ========================================================================= */}
        {view === "menu" && (
          <>
            {/* 1. TOP BANNER MIE GACOAN */}
            <div className="relative w-full aspect-[530/226] bg-[#0A1128] overflow-hidden select-none">
              <Image
                src="/images/dinein/dinein_banner_clean.png"
                alt="Mie Gacoan Dine In"
                fill
                priority
                sizes="440px"
                className="object-cover object-top"
              />

              {/* Tombol Search & Menu di Kanan Atas */}
              <div className="absolute top-2.5 right-5 flex items-center gap-2 z-20">
                <button
                  onClick={() => setIsSearchOpen((prev) => !prev)}
                  aria-label="Cari menu"
                  className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center shadow-md active:scale-95 transition-all text-gray-800 hover:bg-gray-50 cursor-pointer"
                >
                  <Search className="w-4 h-4 stroke-[2.2]" />
                </button>
                <button
                  onClick={() => setIsMenuDrawerOpen(true)}
                  aria-label="Menu navigasi"
                  className="w-[33px] h-[33px] rounded-full bg-white flex items-center justify-center shadow-md active:scale-95 transition-all text-gray-800 hover:bg-gray-50 cursor-pointer"
                >
                  <Menu className="w-4 h-4 stroke-[2.2]" />
                </button>
              </div>
            </div>

            {/* Kotak Pencarian yang Dapat Dibuka/Tutup */}
            {isSearchOpen && (
              <div className="mx-3 mt-2.5 px-3 py-2 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-30">
                <Search className="w-4 h-4 text-gray-400 shrink-0" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari menu Dine In..."
                  className="w-full text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none bg-transparent"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="p-0.5 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}

            {/* 2. RESTAURANT INFO CARD: Mie Gacoan Cikarang - Thamrin */}
            <div className="mx-3 mt-3 bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold text-[14px] text-gray-900 tracking-tight leading-snug">
                  {dineInInfo.restaurantName}
                </h1>
                <p className="text-[12px] text-gray-400 font-normal mt-0.5">
                  {dineInInfo.openHours}
                </p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 stroke-[2]" />
            </div>

            {/* 3. TABLE NUMBER CAPSULE BOX: Table Number: 7 */}
            <div className="mx-3 mt-2.5 bg-[#FCF3E4] rounded-2xl py-2.5 px-4 text-center border border-[#F6E3D0]/60">
              <span className="font-medium text-[13px] text-gray-800 tracking-tight">
                {dineInInfo.tableNumber}
              </span>
            </div>

            {/* 4. TAB BAR HORIZONTAL KATEGORI STICKY */}
            <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-2xs mt-3">
              <div className="flex overflow-x-auto no-scrollbar whitespace-nowrap px-1 scroll-smooth">
                {dineInCategories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleTabClick(cat.id)}
                      className={`py-3 px-3 text-[11px] font-bold uppercase tracking-tight transition-all relative shrink-0 cursor-pointer ${
                        isActive
                          ? "text-[#1A1A1A]"
                          : "text-gray-500 hover:text-gray-800 font-semibold"
                      }`}
                    >
                      <span>{cat.title}</span>
                      {isActive && (
                        <span className="absolute bottom-0 inset-x-2.5 h-[2.5px] bg-[#FA55A8] rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 5. GRID MENU 2-KOLOM */}
            <div className="px-3 pt-3 flex flex-col gap-4">
              {filteredCategories.length === 0 ? (
                <div className="py-16 text-center text-gray-400">
                  <p className="text-xs font-semibold">Menu tidak ditemukan</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-2 text-xs font-bold text-[#FA55A8] hover:underline cursor-pointer"
                  >
                    Tampilkan semua menu
                  </button>
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <section key={category.id} id={category.id} className="scroll-mt-14">
                    <h2 className="font-bold text-[13.5px] uppercase tracking-tight text-gray-900 mb-2 px-0.5">
                      {category.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-2.5">
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow flex flex-col justify-between"
                        >
                          <div
                            onClick={() => handleOpenCustomize(item)}
                            className="w-full aspect-square rounded-xl bg-[#00A5CF] overflow-hidden relative shadow-2xs cursor-pointer active:scale-98 transition-transform"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="200px"
                              className="object-cover"
                            />
                          </div>

                          <div className="mt-2 flex-1 flex flex-col justify-between">
                            <div
                              onClick={() => handleOpenCustomize(item)}
                              className="cursor-pointer"
                            >
                              <h3 className="font-bold text-[12px] text-gray-950 uppercase tracking-tight leading-snug line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="font-bold text-[12.5px] text-gray-900 mt-1">
                                {item.formattedPrice}
                              </p>
                            </div>

                            <button
                              onClick={() => handleOpenCustomize(item)}
                              className="w-full py-1.5 mt-2 rounded-lg border border-[#FA55A8]/50 text-[#FA55A8] text-xs font-semibold hover:bg-[#FDF2F5] active:scale-95 transition-all text-center cursor-pointer shadow-2xs"
                            >
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                ))
              )}
            </div>

            {/* 6. TOMBOL FLOATING SCROLL-TO-TOP */}
            {showScrollTop && (
              <div className="fixed bottom-24 z-40 max-w-[440px] w-full pointer-events-none px-4 flex justify-end">
                <button
                  onClick={scrollToTop}
                  className="pointer-events-auto w-9 h-9 rounded-full bg-[#4A5568] hover:bg-gray-800 text-white flex items-center justify-center shadow-lg active:scale-90 transition-all cursor-pointer"
                  aria-label="Kembali ke atas"
                >
                  <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>
            )}

            {/* 7. FLOATING PINK CART BAR (Sesuai Gambar 3) */}
            {totalCartItems > 0 && (
              <div className="fixed bottom-4 max-w-[440px] w-full px-3 z-40 animate-in slide-in-from-bottom duration-200">
                <div
                  onClick={() => setView("checkout")}
                  className="flex items-center rounded-2xl shadow-xl overflow-hidden cursor-pointer select-none active:scale-[0.99] transition-transform"
                >
                  <div className="bg-white py-3 px-3.5 relative flex items-center justify-center border-r border-gray-100 shrink-0">
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#FA55A8] text-white flex items-center justify-center text-[10.5px] font-black shadow-xs">
                      {totalCartItems}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#FA55A8] stroke-current fill-none stroke-[2.2] stroke-linecap-round stroke-linejoin-round"
                    >
                      <path d="m5 11 4-7" />
                      <path d="m19 11-4-7" />
                      <path d="M2 11h20" />
                      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.6-7.4" />
                      <path d="M10 14v3" />
                      <path d="M14 14v3" />
                    </svg>
                  </div>

                  <div className="bg-[#FA55A8] hover:bg-[#E83D8E] flex-1 py-3 px-4 flex items-center justify-between text-white transition-colors">
                    <div>
                      <span className="text-[11px] text-pink-100 font-medium leading-none block">
                        Total
                      </span>
                      <span className="text-[15px] font-bold text-white tracking-tight leading-tight block mt-0.5">
                        Rp{subtotal.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <div className="text-[13.5px] font-extrabold uppercase tracking-wide flex items-center gap-1">
                      <span>CHECK OUT ({totalCartItems})</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        {/* =========================================================================
            TAMPILAN 2: LAYAR PENUH KUSTOMISASI MENU (view === 'customize')
            (FULL SCREEN, BUKAN POPUP, RAPIH & FLEKSIBEL)
           ========================================================================= */}
        {view === "customize" && customizingItem && (
          <div className="flex-1 flex flex-col bg-white animate-in fade-in duration-150">
            {/* 1. Header Gambar Makanan Lebar Penuh (Flush Top) */}
            <div className="relative w-full aspect-[530/250] bg-[#0A1128] overflow-hidden select-none">
              <Image
                src={
                  customizingItem.heroImage ||
                  customizingItem.image ||
                  "/images/dinein/combat-a-hero-clean.png"
                }
                alt={customizingItem.name}
                fill
                priority
                className="object-cover object-center"
              />

              {/* Tombol Tutup (X) Bulat Putih di Kanan Atas */}
              <button
                onClick={() =>
                  setView(previousView === "checkout" ? "checkout" : "menu")
                }
                aria-label="Kembali"
                className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 text-gray-800 shadow-md flex items-center justify-center hover:bg-white active:scale-90 transition-all cursor-pointer z-10"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Tombol Expand/Maximize di Kanan Bawah Gambar */}
              <button
                aria-label="Perbesar gambar"
                className="absolute bottom-3 right-3.5 w-7 h-7 rounded-full bg-white/95 text-gray-700 shadow-md flex items-center justify-center hover:bg-white active:scale-90 transition-all cursor-pointer z-10"
              >
                <Maximize2 className="w-3.5 h-3.5 stroke-[2]" />
              </button>
            </div>

            {/* 2. Informasi Nama Menu & Harga */}
            <div className="px-4 pt-4 pb-3.5 border-b border-gray-100">
              <h1 className="font-extrabold text-[17px] text-gray-950 uppercase tracking-tight">
                {customizingItem.name}
              </h1>
              <p className="font-bold text-[15px] text-gray-900 mt-0.5">
                {customizingItem.formattedPrice}
              </p>
              <p className="text-[12px] text-gray-500 font-normal mt-1 leading-relaxed">
                {customizingItem.description ||
                  "Menu spesial Mie Gacoan lezat dengan cita rasa gurih dan pedas mantap."}
              </p>
            </div>

            {/* 3. Section Pilihan Varian / Paket */}
            <div className="flex-1 px-4 divide-y divide-gray-100 pb-36">
              {customizingItem.isCombo ? (
                <>
                  {/* Section: MIE */}
                  <div className="py-3.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-bold text-[13px] uppercase tracking-tight text-gray-950">
                          MIE
                        </h2>
                        <p className="text-[11.5px] text-gray-400 font-normal">
                          Must be selected max. 2
                        </p>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-bold text-[12.5px] text-gray-900 uppercase">
                        {selectedMie}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setMieQty((q) => Math.max(1, q - 1))}
                          className="w-7 h-7 rounded-full border border-[#FA55A8] text-[#FA55A8] flex items-center justify-center hover:bg-pink-50 active:scale-90 transition-all cursor-pointer font-bold text-sm"
                        >
                          <Minus className="w-3 h-3 stroke-[2.5]" />
                        </button>
                        <span className="font-bold text-xs text-gray-900 min-w-3 text-center">
                          {mieQty}
                        </span>
                        <button
                          onClick={() => setMieQty((q) => Math.min(2, q + 1))}
                          className="w-7 h-7 rounded-full border border-[#FA55A8] text-[#FA55A8] flex items-center justify-center hover:bg-pink-50 active:scale-90 transition-all cursor-pointer font-bold text-sm"
                        >
                          <Plus className="w-3 h-3 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Section: DIMSUM */}
                  <div className="py-3.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-bold text-[13px] uppercase tracking-tight text-gray-950">
                          DIMSUM
                        </h2>
                        <p className="text-[11.5px] text-gray-400 font-normal">
                          Must be selected max. 1
                        </p>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-bold text-[12.5px] text-gray-900 uppercase">
                        {selectedDimsum1}
                      </span>
                      <div className="w-5 h-5 rounded-md bg-[#FA55A8] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>
                  </div>

                  {/* Section: DIMSUM 2 */}
                  <div className="py-3.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-bold text-[13px] uppercase tracking-tight text-gray-950">
                          DIMSUM 2
                        </h2>
                        <p className="text-[11.5px] text-gray-400 font-normal">
                          Must be selected max. 1
                        </p>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-bold text-[12.5px] text-gray-900 uppercase">
                        {selectedDimsum2}
                      </span>
                      <div className="w-5 h-5 rounded-md bg-[#FA55A8] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>
                  </div>

                  {/* Section: BEVERAGES */}
                  <div className="py-3.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-bold text-[13px] uppercase tracking-tight text-gray-950">
                          BEVERAGES
                        </h2>
                        <p className="text-[11.5px] text-gray-400 font-normal">
                          Must be selected max. 2
                        </p>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="font-bold text-[12.5px] text-gray-900 uppercase">
                        {selectedBeverage}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setBeverageQty((q) => Math.max(1, q - 1))}
                          className="w-7 h-7 rounded-full border border-[#FA55A8] text-[#FA55A8] flex items-center justify-center hover:bg-pink-50 active:scale-90 transition-all cursor-pointer font-bold text-sm"
                        >
                          <Minus className="w-3 h-3 stroke-[2.5]" />
                        </button>
                        <span className="font-bold text-xs text-gray-900 min-w-3 text-center">
                          {beverageQty}
                        </span>
                        <button
                          onClick={() => setBeverageQty((q) => Math.min(2, q + 1))}
                          className="w-7 h-7 rounded-full border border-[#FA55A8] text-[#FA55A8] flex items-center justify-center hover:bg-pink-50 active:scale-90 transition-all cursor-pointer font-bold text-sm"
                        >
                          <Plus className="w-3 h-3 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* KUSTOMISASI LEVEL UNTUK MENU SATUAN */
                customizingItem.canCustomLevel && (
                  <div className="py-3.5 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="font-bold text-[13px] uppercase tracking-tight text-gray-950">
                          PILIH LEVEL PEDAS
                        </h2>
                        <p className="text-[11.5px] text-gray-400 font-normal">
                          Pilih 1 tingkat kepedasan
                        </p>
                      </div>
                      <div className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-1">
                      {["Level 0", "Level 1", "Level 2", "Level 3", "Level 4", "Level 6", "Level 8"].map(
                        (lvl) => (
                          <button
                            key={lvl}
                            onClick={() => setSelectedLevelSingle(lvl)}
                            className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                              selectedLevelSingle === lvl
                                ? "bg-[#FA55A8] text-white border-[#FA55A8] shadow-sm"
                                : "bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400"
                            }`}
                          >
                            {lvl}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )
              )}

              {/* Section: Notes (Catatan Tambahan) */}
              <div className="py-3.5 flex flex-col gap-1.5 pb-8">
                <h2 className="font-bold text-[13px] text-gray-950">Notes</h2>
                <p className="text-[11.5px] text-gray-400 font-normal">Optional</p>
                <textarea
                  rows={2}
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="Example: Make my dish delicious!"
                  className="w-full mt-1.5 rounded-2xl border border-gray-200 p-3.5 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FA55A8] transition-colors resize-none bg-gray-50/40"
                />
              </div>
            </div>

            {/* 4. Bottom Action Bar (Fixed di Bagian Bawah Layar Penuh) */}
            <div className="fixed bottom-0 max-w-[440px] w-full bg-white border-t border-gray-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] z-30">
              <div className="flex items-center justify-between pb-3">
                <span className="font-bold text-[13.5px] text-gray-900">Total Order</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalItemQty((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 rounded-full border border-gray-900 text-gray-900 flex items-center justify-center font-bold text-xs hover:bg-gray-100 active:scale-90 transition-all cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                  <span className="font-bold text-sm text-gray-900 min-w-4 text-center">
                    {modalItemQty}
                  </span>
                  <button
                    onClick={() => setModalItemQty((q) => q + 1)}
                    className="w-7 h-7 rounded-full border border-gray-900 text-gray-900 flex items-center justify-center font-bold text-xs hover:bg-gray-100 active:scale-90 transition-all cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleSaveCustomization}
                className="w-full py-3.5 rounded-2xl bg-[#FA55A8] hover:bg-[#E83D8E] text-white font-bold text-[14px] text-center shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                Add Orders - Rp{(customizingItem.price * modalItemQty).toLocaleString("id-ID")}
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAMPILAN 3: HALAMAN ORDER / CHECKOUT (view === 'checkout')
            (PERSIS SESUAI GAMBAR 1)
           ========================================================================= */}
        {view === "checkout" && (
          <div className="flex-1 flex flex-col bg-[#FAFAFA] animate-in fade-in duration-150">
            {/* Header Order dengan Panah Kembali */}
            <div className="w-full bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-30">
              <button
                onClick={() => setView("menu")}
                className="p-1 -ml-1 text-gray-900 hover:text-black transition-colors rounded-full hover:bg-gray-50 cursor-pointer"
                aria-label="Kembali ke Menu"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
              </button>
              <h1 className="font-bold text-[15px] text-gray-900 tracking-tight">Order</h1>
              <div className="w-5" />
            </div>

            {/* Pill Order Type: Dine In */}
            <div className="mx-4 mt-3.5 bg-[#FDF2F5] border border-[#F5B8D0] rounded-xl px-4 py-2.5 flex items-center justify-between">
              <span className="text-gray-700 text-xs font-medium">Order Type</span>
              <div className="flex items-center gap-1.5 text-gray-900 font-bold text-xs">
                <span>Dine In</span>
                <CheckCircle2 className="w-4 h-4 text-gray-900 stroke-[2]" />
              </div>
            </div>

            {/* Section: Related Menu */}
            <div className="mt-4">
              <h2 className="font-bold text-[13.5px] text-gray-900 px-4 mb-2 tracking-tight">
                Related Menu
              </h2>
              <div className="flex overflow-x-auto no-scrollbar gap-2.5 px-4 pb-1">
                {/* Kartu 1: Mie Gacoan */}
                <div className="bg-white rounded-2xl border border-gray-100 p-2.5 flex items-center gap-2.5 shadow-2xs shrink-0 w-[200px]">
                  <div className="w-12 h-12 rounded-xl bg-[#00A5CF] overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src="/images/dinein/mie-gacoan.png"
                      alt="Mie Gacoan"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[11.5px] text-gray-950 uppercase truncate">
                      MIE GACOAN
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11.5px] font-bold text-gray-800">Rp10.455</span>
                      <button
                        onClick={() =>
                          handleQuickAddRelated({
                            id: "mie-gacoan",
                            name: "MIE GACOAN",
                            price: 10455,
                            image: "/images/dinein/mie-gacoan.png",
                          })
                        }
                        className="w-5 h-5 rounded-full border border-[#D97706] text-[#D97706] flex items-center justify-center font-bold text-xs hover:bg-amber-50 active:scale-95 transition-all cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Kartu 2: Udang Keju */}
                <div className="bg-white rounded-2xl border border-gray-100 p-2.5 flex items-center gap-2.5 shadow-2xs shrink-0 w-[200px]">
                  <div className="w-12 h-12 rounded-xl bg-[#00A5CF] overflow-hidden flex items-center justify-center shrink-0">
                    <Image
                      src="/images/dinein/udang-keju.png"
                      alt="Udang Keju"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[11.5px] text-gray-950 uppercase truncate">
                      UDANG KEJU
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11.5px] font-bold text-gray-800">Rp9.546</span>
                      <button
                        onClick={() =>
                          handleQuickAddRelated({
                            id: "udang-keju",
                            name: "UDANG KEJU",
                            price: 9546,
                            image: "/images/dinein/udang-keju.png",
                          })
                        }
                        className="w-5 h-5 rounded-full border border-[#D97706] text-[#D97706] flex items-center justify-center font-bold text-xs hover:bg-amber-50 active:scale-95 transition-all cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Ordered Items */}
            <div className="mt-4 px-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[13.5px] text-gray-900 tracking-tight">
                  Ordered Items ({totalCartItems})
                </h2>
                <button
                  onClick={() => setView("menu")}
                  className="border border-[#F5B8D0] text-[#FA55A8] text-xs font-semibold px-3 py-1 rounded-full hover:bg-pink-50 active:scale-95 transition-all cursor-pointer"
                >
                  + Add Item
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="bg-white rounded-2xl p-6 text-center text-gray-400 border border-gray-100">
                  <p className="text-xs font-semibold">Belum ada item pesanan.</p>
                  <button
                    onClick={() => setView("menu")}
                    className="mt-2 text-xs font-bold text-[#FA55A8] hover:underline cursor-pointer"
                  >
                    Pilih Menu Sekarang
                  </button>
                </div>
              ) : (
                cart.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="bg-white rounded-2xl p-4 border border-gray-100 shadow-2xs flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[13.5px] text-gray-950 uppercase tracking-tight">
                        {cartItem.name}
                      </h3>
                      <button
                        onClick={() => handleEditCartItem(cartItem)}
                        className="border border-gray-200 rounded-lg px-2.5 py-1 text-xs font-semibold text-gray-700 flex items-center gap-1 hover:bg-gray-50 active:scale-95 transition-all cursor-pointer"
                      >
                        <Edit3 className="w-3.5 h-3.5 text-gray-500" />
                        <span>Edit</span>
                      </button>
                    </div>

                    {cartItem.variants && cartItem.variants.length > 0 && (
                      <div className="flex flex-col gap-0.5 text-[12px] text-gray-600 font-normal">
                        {cartItem.variants.map((v, idx) => (
                          <span key={idx}>{v}</span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-[11.5px] text-gray-400 italic mt-0.5">
                      <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{cartItem.notes || "No notes yet"}</span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-50 mt-1">
                      <span className="font-bold text-[13.5px] text-gray-900">
                        Rp{(cartItem.price * cartItem.quantity).toLocaleString("id-ID")}
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleUpdateCartQty(cartItem.id, -1)}
                          className="w-6 h-6 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center font-bold text-xs hover:bg-gray-100 active:scale-90 transition-all cursor-pointer"
                        >
                          <Minus className="w-3 h-3 stroke-[3]" />
                        </button>
                        <span className="font-bold text-xs text-gray-900 min-w-4 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateCartQty(cartItem.id, 1)}
                          className="w-6 h-6 rounded-full border border-gray-800 text-gray-800 flex items-center justify-center font-bold text-xs hover:bg-gray-100 active:scale-90 transition-all cursor-pointer"
                        >
                          <Plus className="w-3 h-3 stroke-[3]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Input Add Another Notes */}
            <div className="mx-4 mt-3 flex items-center gap-2 text-xs">
              <span className="h-5 w-[3px] bg-[#FA55A8] rounded-full shrink-0" />
              <SquarePen className="w-4 h-4 text-gray-600 shrink-0" />
              {isEditingExtraNotes ? (
                <input
                  type="text"
                  autoFocus
                  value={extraNotes}
                  onChange={(e) => setExtraNotes(e.target.value)}
                  onBlur={() => setIsEditingExtraNotes(false)}
                  placeholder="Ketik catatan tambahan di sini..."
                  className="w-full text-xs text-gray-800 border-b border-[#FA55A8] pb-0.5 focus:outline-none bg-transparent"
                />
              ) : (
                <button
                  onClick={() => setIsEditingExtraNotes(true)}
                  className="text-gray-400 italic hover:text-gray-600 transition-colors text-left"
                >
                  {extraNotes ? extraNotes : "Add another notes"}
                </button>
              )}
            </div>

            {/* Section: Payment Details */}
            <div className="mx-4 mt-3 bg-white rounded-2xl border border-gray-200/80 p-4 shadow-2xs">
              <h2 className="font-bold text-[13.5px] text-gray-900 text-center mb-3">
                Payment Details
              </h2>

              <div className="flex flex-col gap-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">
                    Subtotal{" "}
                    <span className="text-gray-400 font-normal">({totalCartItems} menu)</span>
                  </span>
                  <span className="font-bold text-gray-900">
                    Rp{subtotal.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 flex items-center gap-1">
                    <span>Other fees</span>
                    <span className="text-[10px] text-gray-500">▼</span>
                  </span>
                  <span className="font-bold text-gray-900">
                    Rp{otherFees.toLocaleString("id-ID")}
                  </span>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-2 flex items-center justify-between">
                  <span className="font-bold text-gray-900">Total</span>
                  <span className="font-bold text-[14px] text-[#FA55A8]">
                    Rp{totalPayment.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Bar Checkout */}
            <div className="fixed bottom-0 max-w-[440px] w-full bg-white border-t border-gray-100 rounded-t-2xl shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-5 py-3.5 flex items-center justify-between z-40">
              <div>
                <span className="text-[11.5px] text-gray-500 font-normal block leading-tight">
                  Total Payment
                </span>
                <span className="text-[16.5px] font-black text-gray-950 block mt-0.5">
                  Rp{totalPayment.toLocaleString("id-ID")}
                </span>
              </div>

              <button
                onClick={() => setIsPaymentSuccessOpen(true)}
                disabled={cart.length === 0}
                className={`px-5 py-3 rounded-xl font-bold text-xs text-white shadow-md transition-all active:scale-95 cursor-pointer ${
                  cart.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-[#FA55A8] hover:bg-[#E83D8E]"
                }`}
              >
                Continue to Payment
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            SLIDE-OVER DRAWER MENU NAVIGASI
           ========================================================================= */}
        {isMenuDrawerOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
            <div className="w-full max-w-[320px] bg-white h-full p-5 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#FA55A8] flex items-center justify-center text-white font-black text-xs">
                      MG
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 leading-tight">Mie Gacoan</h3>
                      <p className="text-[11px] text-gray-500">Cikarang - Thamrin</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuDrawerOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-500 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-4 flex flex-col gap-2">
                  <Link
                    href="/"
                    onClick={() => setIsMenuDrawerOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-800 font-semibold text-xs transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#FA55A8]" />
                    <span>Kembali ke Halaman Utama</span>
                  </Link>
                  <button
                    onClick={() => {
                      setIsMenuDrawerOpen(false);
                      setView("checkout");
                    }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-gray-800 font-semibold text-xs transition-colors text-left"
                  >
                    <FileText className="w-4 h-4 text-[#FA55A8]" />
                    <span>Lihat Ringkasan Pesanan ({totalCartItems})</span>
                  </button>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FCF3E4] text-gray-800 font-semibold text-xs">
                    <Store className="w-4 h-4 text-[#FA55A8]" />
                    <span>Dine In (Meja 7)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl text-gray-500 text-xs">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Buka 24 Jam (00:00 - 23:59)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl text-gray-500 text-xs">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>Bantuan / Hubungi Kasir</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-[11px] text-gray-400">Mie Gacoan Dine In System v1.0</p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            DIALOG KONFIRMASI PEMBAYARAN SUKSES
           ========================================================================= */}
        {isPaymentSuccessOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="w-full max-w-[380px] bg-white rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="font-extrabold text-lg text-gray-900 tracking-tight">
                Pesanan Berhasil Diproses!
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Pesanan Anda telah diteruskan ke dapur Mie Gacoan Cikarang Thamrin untuk{" "}
                <span className="font-bold text-gray-800">Table Number: 7</span>.
              </p>
              <div className="w-full my-4 p-3 bg-gray-50 rounded-xl text-xs flex justify-between font-bold">
                <span className="text-gray-600">Total Pembayaran:</span>
                <span className="text-[#FA55A8]">Rp{totalPayment.toLocaleString("id-ID")}</span>
              </div>
              <button
                onClick={() => {
                  setIsPaymentSuccessOpen(false);
                  setView("menu");
                  setCart([]);
                  showToast("Pesanan selesai! Terima kasih!");
                }}
                className="w-full py-3 bg-[#FA55A8] hover:bg-[#E83D8E] text-white rounded-xl font-bold text-xs uppercase tracking-wider active:scale-95 transition-all shadow-md cursor-pointer"
              >
                Selesai / Pesan Lagi
              </button>
            </div>
          </div>
        )}

        {/* TOAST POPUP NOTIFICATION */}
        {toastMessage && (
          <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 bg-black/90 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg animate-in fade-in duration-150">
            {toastMessage}
          </div>
        )}
      </main>
    </div>
  );
}

export default function DineInOrderPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F0F2F5]" />}>
      <DineInOrderContent />
    </Suspense>
  );
}
