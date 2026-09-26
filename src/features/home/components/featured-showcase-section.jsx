"use client";

import React from "react";
import Image from "next/image";
import { highlightCards } from "@/data/restaurant-data";

export function FeaturedShowcaseSection({ onOpenOrder }) {
  return (
    <section
      id="highlight"
      className="relative w-full bg-gacoan-yellow py-14 sm:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Statement Besar Sesuai Referensi CRISPR (media_1790311555742.png) */}
        <div className="relative text-center max-w-4xl mx-auto mb-14 sm:mb-20 flex flex-col items-center">
          
          {/* ILUSTRASI DOODLE MELEDAK DI BELAKANG TEKS (PERSIS REFERENSI) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] w-[320px] h-[340px] sm:w-[480px] sm:h-[460px] md:w-[600px] md:h-[520px] pointer-events-none -z-10 flex items-center justify-center transform -rotate-[2.5deg]" aria-hidden="true">
            <svg
              className="w-full h-full text-red-600/65"
              viewBox="0 0 600 520"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* 1. BAGIAN ATAS: CABAI RAWIT MERAH PEDAS MELAYANG & SUMPIT ANGKAT MIE */}
              <g transform="translate(0, 10)">
                {/* Cabai rawit melayang di atas */}
                <path d="M 270 42 C 285 22, 315 18, 335 28 C 320 48, 305 62, 270 42 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M 335 28 C 345 18, 355 20, 360 25" strokeWidth="3" />
                <circle cx="280" cy="36" r="2.5" fill="currentColor" />
                
                {/* Percikan api / sparks */}
                <path d="M 350 45 L 356 35 L 362 45 L 372 51 L 362 57 L 356 67 L 350 57 L 340 51 Z" fill="currentColor" opacity="0.8" />
                <path d="M 240 35 L 244 28 L 248 35 L 255 39 L 248 43 L 244 50 L 240 43 L 233 39 Z" fill="currentColor" opacity="0.8" />

                {/* Sumpit kayu mengangkat untaian mie */}
                <line x1="205" y1="75" x2="385" y2="52" strokeWidth="3.2" />
                <line x1="210" y1="83" x2="390" y2="60" strokeWidth="3.2" />
                <path d="M 255 76 Q 275 120, 290 92 T 325 130 T 355 98" strokeWidth="2.6" />
                <path d="M 270 82 Q 290 135, 305 102 T 340 140" strokeWidth="2.4" />
              </g>

              {/* 2. BAGIAN TENGAH: PANGSIT MEKAR & TABURAN AYAM / DAUN BAWANG */}
              <g transform="translate(0, 150)">
                {/* Pangsit goreng mekar sisi kiri */}
                <path d="M 120 40 C 105 60, 95 80, 90 100 C 105 90, 115 100, 125 90 C 135 100, 145 90, 155 100 C 150 80, 135 60, 120 40 Z" fill="currentColor" fillOpacity="0.18" />
                <path d="M 120 40 L 115 85" strokeWidth="2.2" />
                <path d="M 120 40 L 132 85" strokeWidth="2.2" />

                {/* Pangsit goreng mekar sisi kanan */}
                <path d="M 480 40 C 465 60, 455 80, 450 100 C 465 90, 475 100, 485 90 C 495 100, 505 90, 515 100 C 510 80, 495 60, 480 40 Z" fill="currentColor" fillOpacity="0.18" />
                <path d="M 480 40 L 475 85" strokeWidth="2.2" />
                <path d="M 480 40 L 492 85" strokeWidth="2.2" />

                {/* Irisan daun bawang bulat */}
                <circle cx="170" cy="18" r="5.5" strokeWidth="2.5" />
                <circle cx="430" cy="18" r="5.5" strokeWidth="2.5" />
                <circle cx="195" cy="85" r="4.5" strokeWidth="2.5" />
                <circle cx="405" cy="85" r="4.5" strokeWidth="2.5" />

                {/* Taburan ayam halus & biji wijen pedas */}
                <circle cx="215" cy="30" r="2.5" fill="currentColor" />
                <circle cx="385" cy="30" r="2.5" fill="currentColor" />
                <circle cx="150" cy="110" r="2.5" fill="currentColor" />
                <circle cx="450" cy="110" r="2.5" fill="currentColor" />
              </g>

              {/* 3. BAGIAN BAWAH: MANGKOK MIE GACOAN DENGAN UAP PANAS BERGELOMBANG */}
              <g transform="translate(0, 310)">
                {/* Uap panas meliuk-liuk */}
                <path d="M 260 25 C 265 10, 255 5, 260 -10" strokeDasharray="4 4" strokeWidth="2.2" />
                <path d="M 300 20 C 305 5, 295 0, 300 -15" strokeDasharray="4 4" strokeWidth="2.2" />
                <path d="M 340 25 C 345 10, 335 5, 340 -10" strokeDasharray="4 4" strokeWidth="2.2" />

                {/* Garis bibir mangkok */}
                <path d="M 180 35 C 260 28, 340 28, 420 35" strokeWidth="3.4" />
                {/* Badan mangkok */}
                <path d="M 190 35 C 205 110, 395 110, 410 35 Z" fill="currentColor" fillOpacity="0.14" strokeWidth="3.2" />
                {/* Kaki mangkok */}
                <path d="M 235 108 L 365 108" strokeWidth="3.2" />

                {/* Gelombang mie di bibir mangkok */}
                <path d="M 215 32 Q 235 18, 255 32 T 295 32 T 335 32 T 375 32" strokeWidth="2.5" />
              </g>
            </svg>
          </div>

          {/* JUDUL UTAMA 3 BARIS: FONT FREDOKA BOLD, TEKS HITAM SOLID & MIRING PERSIS REFERENSI (media_1790312504163.png) */}
          <h2
            style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
            className="font-bold text-[30px] min-[360px]:text-[34px] min-[400px]:text-[38px] sm:text-[52px] md:text-[64px] lg:text-[76px] uppercase text-black leading-[0.88] tracking-tight select-none z-10 transform -rotate-[4.2deg] sm:-rotate-[4.8deg]"
          >
            <span className="block whitespace-nowrap">SIZZLING PEDAS TO</span>
            <span className="block whitespace-nowrap">MIE GACOAN CIKARANG</span>
            <span className="block whitespace-nowrap">BRINGS ART</span>
          </h2>

          {/* SUB-JUDUL FREDOKA DUA BARIS & DESKRIPSI (PERSIS REFERENSI media_1790313146025.png) */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center">
            <h3
              style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
              className="font-bold text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-black leading-tight text-center"
            >
              BOLD FLAVORS, FRESH <br />
              CREATIONS
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm md:text-base font-semibold text-neutral-800 max-w-lg leading-relaxed px-4 text-center">
              Spicy, rich, or fresh — our noodles are packed with flavor.
            </p>
          </div>
        </div>

        {/* 3 Featured Product Cards Persis Referensi CRISPR (media_1790413582346.png & media_1790313049356.png) */}
        <div className="relative max-w-[820px] mx-auto px-2 min-[380px]:px-3 sm:px-6">
          {/* Floating Doodle Gelas Es di Sisi Kiri Sesuai Referensi */}
          <div className="absolute -left-6 sm:-left-12 md:-left-16 -top-12 sm:-top-16 w-20 sm:w-28 md:w-32 pointer-events-none -z-10 text-neutral-900/60 hidden sm:block" aria-hidden="true">
            <svg viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full transform -rotate-12">
              <path d="M 25 35 L 35 110 C 36 116, 68 116, 69 110 L 79 35 Z" />
              <path d="M 20 35 C 50 30, 60 30, 84 35" strokeWidth="3" />
              <path d="M 30 35 C 32 15, 72 15, 74 35" strokeWidth="2.5" />
              <line x1="52" y1="20" x2="68" y2="-5" strokeWidth="3.2" />
              <circle cx="42" cy="55" r="3" fill="currentColor" opacity="0.7" />
              <circle cx="62" cy="70" r="3.5" fill="currentColor" opacity="0.7" />
              <circle cx="48" cy="85" r="3" fill="currentColor" opacity="0.7" />
            </svg>
          </div>

          {/* Floating Doodle Dimsum di Sisi Kanan Sesuai Referensi */}
          <div className="absolute -right-4 sm:-right-10 md:-right-14 -bottom-8 sm:-bottom-10 w-20 sm:w-26 md:w-30 pointer-events-none -z-10 text-neutral-900/60 hidden sm:block" aria-hidden="true">
            <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full transform rotate-12">
              <path d="M 15 45 C 18 15, 82 15, 85 45 Z" strokeWidth="2.8" />
              <path d="M 10 45 C 50 42, 60 42, 90 45" strokeWidth="3" />
              <path d="M 20 48 C 22 72, 78 72, 80 48" strokeWidth="2.6" />
              <circle cx="35" cy="30" r="2.5" fill="currentColor" />
              <circle cx="50" cy="26" r="2.5" fill="currentColor" />
              <circle cx="65" cy="30" r="2.5" fill="currentColor" />
            </svg>
          </div>

          {/* 3 Kolom Sejajar Langsung (Kesamping) Baik di Mobile Maupun Desktop */}
          <div className="grid grid-cols-3 gap-2 min-[380px]:gap-2.5 sm:gap-4 md:gap-5">
            {highlightCards.map((card) => (
              <div
                key={card.id}
                onClick={onOpenOrder}
                className="group relative bg-[#FF5412] rounded-[18px] min-[360px]:rounded-[22px] min-[400px]:rounded-[26px] sm:rounded-[40px] md:rounded-[44px] p-1.5 min-[360px]:p-2 min-[400px]:p-2.5 sm:p-4 pt-2 min-[360px]:pt-2.5 min-[400px]:pt-3.5 sm:pt-5 pb-0 flex flex-col items-center justify-between overflow-hidden shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer aspect-[1/1.14] select-none"
              >
                {/* Sticker Pop Bubble di Bagian Atas Card (Persis media_1790413582346.png) */}
                <div className="z-10 w-full flex justify-center">
                  <div className="bg-white rounded-full px-1.5 min-[360px]:px-2 min-[400px]:px-2.5 sm:px-4.5 md:px-5 py-0.5 min-[360px]:py-1 sm:py-2 shadow-[0_2px_4px_rgba(0,0,0,0.06)] transform group-hover:scale-105 transition-transform duration-300 inline-flex flex-col items-center justify-center text-center max-w-[96%]">
                    <span
                      style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
                      className="font-bold sm:font-black text-[10px] min-[360px]:text-[11.5px] min-[400px]:text-[13px] sm:text-2xl md:text-[25px] text-[#FF2E00] uppercase tracking-tight leading-none block select-none"
                    >
                      {card.title}
                    </span>
                    <span
                      style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
                      className="font-bold text-[5px] min-[360px]:text-[5.5px] min-[400px]:text-[6.5px] sm:text-[9.5px] md:text-[10px] text-[#FF2E00] uppercase tracking-wider leading-none mt-0.5 sm:mt-1.2 block select-none whitespace-nowrap"
                    >
                      {card.subtitle}
                    </span>
                  </div>
                </div>

                {/* Gambar Makanan di Bawah Card (Persis media_1790413582346.png) */}
                <div className="relative w-full h-[65%] sm:h-[70%] mt-auto flex items-end justify-center pointer-events-none">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain object-bottom scale-110 sm:scale-115 md:scale-120 drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)] sm:drop-shadow-[0_10px_16px_rgba(0,0,0,0.22)] group-hover:scale-125 transition-transform duration-500"
                    sizes="(max-width: 640px) 33vw, 260px"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Single Centered Pill Button (GRAB A BITE) Persis Cloning Referensi CRISPR (media_1790424005136.png & media_1790424021642.png) */}
        <div className="mt-6 min-[400px]:mt-7 sm:mt-8 md:mt-9 flex justify-center items-center">
          <button
            type="button"
            onClick={onOpenOrder}
            style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
            className="inline-flex items-center justify-center rounded-full bg-[#FF380C] hover:bg-[#E52E06] text-white font-bold text-[11px] min-[360px]:text-[12px] sm:text-[13px] md:text-sm px-5 min-[360px]:px-5.5 sm:px-6.5 md:px-7 py-2 min-[360px]:py-2.5 sm:py-2.5 md:py-3 uppercase tracking-normal leading-none select-none border-0 border-none shadow-none hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF380C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFC903]"
          >
            GRAB A BITE
          </button>
        </div>
      </div>
    </section>
  );
}
