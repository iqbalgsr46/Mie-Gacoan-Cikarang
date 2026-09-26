"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, ArrowUpRight, Flame, MapPin, Phone } from "lucide-react";
import { navLinks, restaurantInfo } from "@/data/restaurant-data";
import { OrderModal } from "@/components/ui/order-modal";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 select-none ${
          isScrolled
            ? "bg-gacoan-yellow/95 backdrop-blur-md shadow-sm py-3.5"
            : "bg-gacoan-yellow py-4 sm:py-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* SISI KIRI: Brand Logo (Ikon Solid Hitam + Teks Bold Hitam persis seperti CRISPR) */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Mie Gacoan Cikarang - Beranda"
          >
            {/* Siluet Ikon Minimalis Hitam Khas Gacoan (Mangkok & Sumpit / Burger-style icon) */}
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-black transition-transform group-hover:scale-105"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              {/* Tutup / Bun Atas / Uap Mie */}
              <path d="M6 14C6 9.58 9.58 6 16 6C22.42 6 26 9.58 26 14H6Z" />
              {/* Garis Tengah Isian Gurih */}
              <rect x="5" y="16" width="22" height="2.5" rx="1.25" />
              {/* Bagian Bawah / Mangkok */}
              <rect x="7" y="20.5" width="18" height="3" rx="1.5" />
            </svg>

            {/* Nama Brand Bold All-Caps */}
            <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-black leading-none uppercase">
              GACOAN
            </span>
          </Link>

          {/* SISI TENGAH: Kosong Bersih Sesuai Referensi Visual */}

          {/* SISI KANAN: Dua Tombol Pill Outline Hitam Sesuai Referensi CRISPR */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Tombol ORDER (Kapsul Border Tipis Hitam) */}
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-black text-black bg-transparent hover:bg-black hover:text-white transition-all duration-200 text-xs sm:text-sm font-bold tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Buka Menu Pemesanan Online"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              <span>ORDER</span>
            </button>

            {/* Tombol MENU (Kapsul Border Tipis Hitam) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-black text-black transition-all duration-200 text-xs sm:text-sm font-bold tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-black ${
                menuOpen ? "bg-black text-white" : "bg-transparent hover:bg-black hover:text-white"
              }`}
              aria-label={menuOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              ) : (
                <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
              )}
              <span>MENU</span>
            </button>
          </div>
        </div>

        {/* Panel Menu Overlay / Drawer Saat Tombol MENU Diklik */}
        {menuOpen && (
          <div className="fixed inset-x-0 top-[60px] sm:top-[70px] z-50 bg-gacoan-yellow border-b-2 border-black shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Kolom Daftar Navigasi Section */}
                <div className="md:col-span-8 flex flex-col gap-2">
                  <span className="text-xs font-black uppercase tracking-widest text-neutral-800 mb-2">
                    Eksplorasi Halaman
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {navLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-center justify-between p-3.5 rounded-2xl border border-black bg-white hover:bg-black hover:text-white transition-all text-sm font-black uppercase tracking-wider text-black shadow-sm"
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight className="w-4 h-4 text-black group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Kolom Info Cepat & Pemesanan */}
                <div className="md:col-span-4 flex flex-col justify-between p-5 rounded-2xl border border-black bg-white/70 backdrop-blur-sm">
                  <div>
                    <span className="inline-block px-3 py-1 bg-black text-gacoan-yellow text-[10px] font-black uppercase tracking-wider rounded-full mb-3">
                      Mie Gacoan Cikarang
                    </span>
                    <h4 className="font-display font-black text-xl uppercase tracking-tight text-black">
                      Sensasi Pedas No. 1
                    </h4>
                    <p className="text-xs font-bold text-neutral-700 mt-1">
                      Buka Setiap Hari: 09.00 - 23.00 WIB
                    </p>
                    <p className="text-xs font-medium text-neutral-600 mt-1">
                      Outlet Jababeka (Cikarang Utara) & Lippo Cikarang (Cikarang Selatan).
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-300">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        setIsOrderModalOpen(true);
                      }}
                      className="w-full py-3 rounded-full bg-black text-white hover:bg-gacoan-red text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Pesan Online Sekarang</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modal Dialog Pemesanan Online */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </>
  );
}
