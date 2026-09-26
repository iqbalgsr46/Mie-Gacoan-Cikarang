"use client";

import React from "react";
import { Flame } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative w-full bg-gacoan-yellow pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8 px-5 sm:px-8 md:px-10 select-none">
      {/* 1. Baris Atas: Slogan Kiri (Fredoka Bold) & 3 Kolom Tautan Navigasi Kanan (Persis Referensi CRISPR) */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10">
        {/* Slogan Kiri */}
        <div className="max-w-xs sm:max-w-sm">
          <h2
            style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
            className="font-bold text-2xl sm:text-3xl md:text-[34px] uppercase tracking-[-0.015em] text-black leading-[0.95]"
          >
            PEDAS GURIH, SENSASI <br />
            JUARA, SETIAP SAAT.
          </h2>
          <p className="mt-3 text-xs font-semibold text-neutral-800 leading-relaxed">
            Sensasi kuliner mie pedas nomor satu di Indonesia. Diracik segar dengan level pedas legendaris dan pangsit mekar renyah di Cikarang.
          </p>
        </div>

        {/* 3 Kolom Links Navigasi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full md:w-auto">
          {/* Kolom 1: Menu Favorit */}
          <div className="flex flex-col space-y-2 text-xs sm:text-sm font-bold text-black">
            <a href="#highlight" className="hover:text-red-600 transition-colors">Mie Gacoan</a>
            <a href="#highlight" className="hover:text-red-600 transition-colors">Mie Hompimpa</a>
            <a href="#menu" className="hover:text-red-600 transition-colors">Udang Keju</a>
            <a href="#menu" className="hover:text-red-600 transition-colors">Pangsit Mekar</a>
            <a href="#menu" className="hover:text-red-600 transition-colors">Es Gobak Sodor</a>
          </div>

          {/* Kolom 2: Informasi & Outlet */}
          <div className="flex flex-col space-y-2 text-xs sm:text-sm font-bold text-black">
            <a href="#story" className="hover:text-red-600 transition-colors">Tentang Kami</a>
            <a href="#outlets" className="hover:text-red-600 transition-colors">Outlet Cikarang</a>
            <a href="#hero" className="hover:text-red-600 transition-colors">100% Halal MUI</a>
            <a href="#hero" className="hover:text-red-600 transition-colors">Syarat & Ketentuan</a>
            <a href="#hero" className="hover:text-red-600 transition-colors">Kebijakan Privasi</a>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div className="flex flex-col space-y-2 text-xs sm:text-sm font-bold text-black col-span-2 sm:col-span-1">
            <a href="https://instagram.com/mie.gacoan" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Facebook</a>
            <a href="https://instagram.com/mie.gacoan" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Instagram</a>
            <a href="https://twitter.com/mie_gacoan" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">Twitter (X)</a>
            <a href="https://tiktok.com/@mie.gacoan" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">TikTok</a>
          </div>
        </div>
      </div>

      {/* 2. Baris Bawah: Typography Raksasa Wordmark "GACOAN" + Ikon Hitam Solid Sesuai Referensi CRISPR */}
      <div className="mt-8 sm:mt-12 md:mt-16 flex items-center gap-3 sm:gap-6 w-full overflow-hidden">
        {/* Solid Black Icon persis referensi CRISPR */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl sm:rounded-3xl bg-black flex items-center justify-center shrink-0 shadow-pop">
          <Flame className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 fill-white text-white" />
        </div>

        {/* Wordmark Raksasa GACOAN */}
        <h1
          style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
          className="font-bold text-[52px] sm:text-[80px] md:text-[102px] lg:text-[118px] uppercase text-black leading-none tracking-tight select-none"
        >
          GACOAN
        </h1>
      </div>
    </footer>
  );
}
