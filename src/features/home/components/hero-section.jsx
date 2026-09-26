"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full bg-gacoan-yellow overflow-visible pt-4 pb-0 sm:pb-2 flex flex-col items-center justify-center select-none"
    >
      {/* GARIS LENGKUNG KUBAH: DI DALAMNYA HANYA BERISI GAMBAR DOODLE MERAH (PERSIS REFERENSI) */}
      <div className="absolute inset-0 pointer-events-none flex items-start justify-center overflow-visible z-0" aria-hidden="true">
        {/* Kontainer Kubah: Lebar 860px, hanya menampung doodle merah */}
        <div className="w-[340px] sm:w-[540px] md:w-[720px] lg:w-[860px] rounded-t-full border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-b-0 border-orange-500/40 absolute top-3 sm:top-5 bottom-0 overflow-hidden">
          
          {/* SVG DOODLE MERAH PADAT DI DALAM KUBAH & TERPOTONG RAPI DI SEPANJANG GARIS KUBAH */}
          <svg
            className="w-full h-full text-red-600 opacity-60"
            viewBox="0 0 860 890"
            preserveAspectRatio="xMidYMin slice"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              {/* 1. DOODLE CABAI RAWIT MERAH PEDAS DENGAN LIDAH API */}
              <g id="gacoan-chili">
                <path d="M 12 58 C 22 42, 30 20, 62 14 C 50 32, 38 52, 12 58 Z" fill="currentColor" fillOpacity="0.18" />
                <path d="M 62 14 C 70 6, 80 4, 86 8" strokeWidth="3.2" />
                <path d="M 10 60 C 4 52, 6 44, 10 40 C 15 44, 18 36, 22 48 Z" fill="currentColor" />
                <circle cx="16" cy="44" r="2.2" fill="currentColor" />
                <circle cx="26" cy="64" r="2" fill="currentColor" />
              </g>

              {/* 2. DOODLE MANGKOK MIE GACOAN BERUAP + SUMPIT */}
              <g id="gacoan-noodle">
                <path d="M 16 42 C 22 75, 66 75, 72 42 Z" fill="currentColor" fillOpacity="0.14" />
                <path d="M 10 42 C 40 40, 52 40, 78 42" strokeWidth="3.2" />
                <path d="M 20 40 C 28 26, 34 46, 44 28 C 52 46, 60 26, 66 40" strokeWidth="2.8" />
                <path d="M 28 40 C 36 28, 42 42, 52 30" strokeWidth="2.5" />
                <line x1="28" y1="14" x2="80" y2="4" strokeWidth="3.2" />
                <line x1="30" y1="20" x2="82" y2="10" strokeWidth="3.2" />
                <path d="M 38 18 C 41 8, 33 6, 36 1" strokeDasharray="3 3" strokeWidth="2.2" />
                <path d="M 52 16 C 55 7, 47 5, 50 0" strokeDasharray="3 3" strokeWidth="2.2" />
              </g>

              {/* 3. DOODLE PANGSIT GORENG MEKAR (CRISPY WONTON) */}
              <g id="gacoan-wonton">
                <path d="M 40 10 C 26 30, 14 46, 8 62 C 20 54, 30 64, 40 56 C 50 64, 60 54, 72 62 C 66 46, 54 30, 40 10 Z" fill="currentColor" fillOpacity="0.2" />
                <path d="M 40 10 C 34 32, 28 44, 25 58" strokeWidth="2.8" />
                <path d="M 40 10 C 44 32, 50 44, 55 58" strokeWidth="2.8" />
                <circle cx="24" cy="46" r="2.2" fill="currentColor" />
                <circle cx="56" cy="46" r="2.2" fill="currentColor" />
              </g>

              {/* 4. DOODLE GELAS ES GASTONOMIS (ES GOBAK SODOR / ES TEKLEK) */}
              <g id="gacoan-drink">
                <path d="M 22 28 L 30 76 C 31 82, 57 82, 58 76 L 66 28 Z" fill="currentColor" fillOpacity="0.16" />
                <path d="M 18 28 C 40 25, 48 25, 70 28" strokeWidth="3.2" />
                <line x1="48" y1="28" x2="62" y2="6" strokeWidth="3.2" />
                <line x1="62" y1="6" x2="74" y2="10" strokeWidth="3.2" />
                <rect x="28" y="36" width="14" height="14" rx="3" strokeWidth="2.2" />
                <rect x="46" y="52" width="14" height="14" rx="3" strokeWidth="2.2" />
                <circle cx="38" cy="65" r="2.8" fill="currentColor" />
                <circle cx="56" cy="38" r="2.8" fill="currentColor" />
              </g>

              {/* 5. DOODLE DIMSUM UDANG KEJU / SIOMAY MONTOK */}
              <g id="gacoan-dimsum">
                <path d="M 18 36 C 20 14, 52 12, 64 28 C 76 44, 64 66, 48 66 C 28 66, 16 52, 18 36 Z" fill="currentColor" fillOpacity="0.16" />
                <path d="M 36 58 C 42 70, 50 70, 54 58" strokeWidth="3" />
                <circle cx="44" cy="28" r="2.8" fill="currentColor" />
                <circle cx="54" cy="38" r="2.5" fill="currentColor" />
                <circle cx="32" cy="42" r="2.2" fill="currentColor" />
              </g>

              {/* 6. DOODLE LIDAH API / FLAME LEVEL PEDAS */}
              <g id="gacoan-flame">
                <path d="M 28 68 C 14 52, 20 34, 26 26 C 30 36, 38 24, 44 12 C 52 26, 62 18, 58 38 C 66 32, 68 52, 56 62 C 48 68, 38 70, 28 68 Z" fill="currentColor" fillOpacity="0.2" />
                <circle cx="42" cy="44" r="2.5" fill="currentColor" />
              </g>

              {/* 7. DOODLE BINTANG KRIUK / SPARK PEDAS */}
              <g id="gacoan-spark">
                <path d="M 18 4 C 20 14, 25 16, 32 18 C 25 20, 20 22, 18 32 C 16 22, 11 20, 4 18 C 11 16, 16 14, 18 4 Z" fill="currentColor" opacity="0.9" />
              </g>

              <clipPath id="arch-clip">
                <path d="M 0 890 L 0 430 A 430 430 0 0 1 860 430 L 860 890 Z" />
              </clipPath>
            </defs>

            {/* HANYA DOODLE MERAH DI DALAM KUBAH & TERPOTONG OLEH GARIS BATAS KUBAH */}
            <g clipPath="url(#arch-clip)" className="text-red-600 opacity-60">
              {/* SISI KIRI - ELEMEN MENEMPEL & TERPOTONG GARIS */}
              <use href="#gacoan-chili" x="225" y="10" transform="rotate(-30 225 10) scale(1.0)" />
              <use href="#gacoan-noodle" x="145" y="55" transform="rotate(15 145 55) scale(1.0)" />
              <use href="#gacoan-wonton" x="65" y="125" transform="rotate(-20 65 125) scale(1.05)" />
              <use href="#gacoan-dimsum" x="10" y="210" transform="rotate(16 10 210) scale(1.0)" />
              <use href="#gacoan-drink" x="-18" y="290" transform="rotate(-12 -18 290) scale(1.05)" />
              <use href="#gacoan-chili" x="-22" y="370" transform="rotate(22 -22 370) scale(1.1)" />
              <use href="#gacoan-noodle" x="-25" y="450" transform="rotate(-10 -25 450) scale(1.05)" />
              <use href="#gacoan-wonton" x="-22" y="530" transform="rotate(18 -22 530) scale(1.1)" />
              <use href="#gacoan-dimsum" x="-20" y="610" transform="rotate(-15 -20 610) scale(1.05)" />
              <use href="#gacoan-drink" x="-22" y="690" transform="rotate(14 -22 690) scale(1.0)" />
              <use href="#gacoan-chili" x="-18" y="770" transform="rotate(-18 -18 770) scale(1.05)" />

              {/* SISI KIRI - LAPISAN DALAM */}
              <use href="#gacoan-spark" x="90" y="105" transform="scale(0.95)" />
              <use href="#gacoan-flame" x="75" y="175" transform="rotate(15 75 175) scale(0.9)" />
              <use href="#gacoan-spark" x="155" y="160" transform="scale(0.85)" />
              <use href="#gacoan-chili" x="80" y="250" transform="rotate(12 80 250) scale(0.95)" />
              <use href="#gacoan-spark" x="160" y="235" transform="scale(0.85)" />
              <use href="#gacoan-wonton" x="75" y="335" transform="rotate(-15 75 335) scale(0.95)" />
              <use href="#gacoan-chili" x="150" y="315" transform="rotate(20 150 315) scale(0.9)" />
              <use href="#gacoan-dimsum" x="80" y="415" transform="rotate(18 80 415) scale(0.9)" />
              <use href="#gacoan-flame" x="155" y="395" transform="rotate(-12 155 395) scale(0.85)" />
              <use href="#gacoan-drink" x="75" y="495" transform="rotate(-14 75 495) scale(0.95)" />
              <use href="#gacoan-spark" x="150" y="475" transform="scale(0.85)" />
              <use href="#gacoan-noodle" x="75" y="575" transform="rotate(12 75 575) scale(0.95)" />
              <use href="#gacoan-dimsum" x="145" y="555" transform="rotate(15 145 555) scale(0.85)" />
              <use href="#gacoan-chili" x="75" y="660" transform="rotate(-20 75 660) scale(1.0)" />
              <use href="#gacoan-wonton" x="150" y="635" transform="rotate(-16 150 635) scale(0.85)" />
              <use href="#gacoan-flame" x="75" y="740" transform="rotate(15 75 740) scale(0.9)" />
              <use href="#gacoan-noodle" x="145" y="715" transform="rotate(10 145 715) scale(0.85)" />
              <use href="#gacoan-spark" x="80" y="820" transform="scale(0.95)" />

              {/* SISI KANAN - ELEMEN MENEMPEL & TERPOTONG GARIS */}
              <use href="#gacoan-wonton" x="575" y="10" transform="rotate(25 575 10) scale(1.0)" />
              <use href="#gacoan-dimsum" x="655" y="55" transform="rotate(-15 655 55) scale(1.0)" />
              <use href="#gacoan-drink" x="730" y="125" transform="rotate(18 730 125) scale(1.05)" />
              <use href="#gacoan-chili" x="780" y="210" transform="rotate(-20 780 210) scale(1.1)" />
              <use href="#gacoan-noodle" x="810" y="290" transform="rotate(12 810 290) scale(1.05)" />
              <use href="#gacoan-wonton" x="820" y="370" transform="rotate(-16 820 370) scale(1.1)" />
              <use href="#gacoan-dimsum" x="820" y="450" transform="rotate(14 820 450) scale(1.05)" />
              <use href="#gacoan-drink" x="820" y="530" transform="rotate(-15 820 530) scale(1.0)" />
              <use href="#gacoan-chili" x="820" y="610" transform="rotate(22 820 610) scale(1.1)" />
              <use href="#gacoan-noodle" x="820" y="690" transform="rotate(-12 820 690) scale(1.05)" />
              <use href="#gacoan-wonton" x="820" y="770" transform="rotate(16 820 770) scale(1.05)" />

              {/* SISI KANAN - LAPISAN DALAM */}
              <use href="#gacoan-spark" x="715" y="105" transform="scale(0.95)" />
              <use href="#gacoan-flame" x="710" y="175" transform="rotate(-14 710 175) scale(0.9)" />
              <use href="#gacoan-spark" x="645" y="160" transform="scale(0.85)" />
              <use href="#gacoan-noodle" x="710" y="250" transform="rotate(-12 710 250) scale(0.95)" />
              <use href="#gacoan-spark" x="640" y="235" transform="scale(0.85)" />
              <use href="#gacoan-dimsum" x="715" y="335" transform="rotate(16 715 335) scale(0.9)" />
              <use href="#gacoan-flame" x="645" y="315" transform="rotate(-15 645 315) scale(0.85)" />
              <use href="#gacoan-chili" x="710" y="415" transform="rotate(-18 710 415) scale(0.95)" />
              <use href="#gacoan-spark" x="640" y="395" transform="scale(0.85)" />
              <use href="#gacoan-wonton" x="710" y="495" transform="rotate(15 710 495) scale(0.95)" />
              <use href="#gacoan-flame" x="645" y="475" transform="rotate(16 645 475) scale(0.85)" />
              <use href="#gacoan-flame" x="715" y="575" transform="rotate(-16 715 575) scale(0.9)" />
              <use href="#gacoan-chili" x="645" y="555" transform="rotate(-14 645 555) scale(0.85)" />
              <use href="#gacoan-drink" x="710" y="660" transform="rotate(14 710 660) scale(0.95)" />
              <use href="#gacoan-noodle" x="640" y="635" transform="rotate(12 640 635) scale(0.85)" />
              <use href="#gacoan-dimsum" x="710" y="740" transform="rotate(-12 710 740) scale(0.9)" />
              <use href="#gacoan-wonton" x="645" y="715" transform="rotate(-18 645 715) scale(0.85)" />
              <use href="#gacoan-spark" x="715" y="820" transform="scale(0.95)" />

              {/* PUNCAK KUBAH */}
              <use href="#gacoan-flame" x="395" y="-15" transform="rotate(10 395 -15) scale(1.1)" />
              <use href="#gacoan-chili" x="450" y="-12" transform="rotate(-15 450 -12) scale(1.05)" />
              <use href="#gacoan-wonton" x="330" y="15" transform="rotate(-18 330 15) scale(0.95)" />
              <use href="#gacoan-dimsum" x="490" y="18" transform="rotate(16 490 18) scale(0.95)" />
              <use href="#gacoan-spark" x="415" y="38" transform="scale(1.0)" />
              <use href="#gacoan-noodle" x="250" y="40" transform="rotate(14 250 40) scale(0.95)" />
              <use href="#gacoan-drink" x="565" y="35" transform="rotate(-12 565 35) scale(0.95)" />

              {/* TENGAH BELAKANG MAKANAN */}
              <use href="#gacoan-chili" x="210" y="85" transform="rotate(-20 210 85) scale(0.85)" />
              <use href="#gacoan-dimsum" x="285" y="80" transform="rotate(14 285 80) scale(0.85)" />
              <use href="#gacoan-spark" x="360" y="75" transform="scale(0.85)" />
              <use href="#gacoan-flame" x="425" y="72" transform="rotate(-12 425 72) scale(0.85)" />
              <use href="#gacoan-wonton" x="485" y="75" transform="rotate(18 485 75) scale(0.85)" />
              <use href="#gacoan-chili" x="560" y="80" transform="rotate(-15 560 80) scale(0.85)" />
              <use href="#gacoan-spark" x="625" y="85" transform="scale(0.85)" />

              <use href="#gacoan-spark" x="220" y="155" transform="scale(0.85)" />
              <use href="#gacoan-chili" x="285" y="145" transform="rotate(-12 285 145) scale(0.8)" />
              <use href="#gacoan-wonton" x="355" y="140" transform="rotate(18 355 140) scale(0.75)" />
              <use href="#gacoan-flame" x="425" y="135" transform="rotate(16 425 135) scale(0.8)" />
              <use href="#gacoan-dimsum" x="490" y="140" transform="rotate(-15 490 140) scale(0.8)" />
              <use href="#gacoan-chili" x="555" y="145" transform="rotate(14 555 145) scale(0.8)" />
              <use href="#gacoan-spark" x="620" y="155" transform="scale(0.85)" />

              {/* Biji Cabai Mikro */}
              <circle cx="120" cy="180" r="2.5" fill="currentColor" />
              <circle cx="120" cy="360" r="2.5" fill="currentColor" />
              <circle cx="120" cy="540" r="2.5" fill="currentColor" />
              <circle cx="120" cy="720" r="2.5" fill="currentColor" />
              <circle cx="675" cy="180" r="2.5" fill="currentColor" />
              <circle cx="675" cy="360" r="2.5" fill="currentColor" />
              <circle cx="675" cy="540" r="2.5" fill="currentColor" />
              <circle cx="675" cy="720" r="2.5" fill="currentColor" />
            </g>
          </svg>
        </div>
      </div>

      {/* Kontainer Utama Hero: DI LUAR GARIS & DI DEPAN DOODLE */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center z-10">
        
        {/* LAYER 1 (BELAKANG): TEKS DENGAN GAYA FONT FREDOKA ROUNDED - MELINTAS DI LUAR GARIS KUBAH */}
        <div className="relative w-full text-center z-10 pt-2 sm:pt-4 md:pt-6">
          <h1
            style={{ fontFamily: "var(--font-fredoka), 'Fredoka', cursive, sans-serif" }}
            className="font-bold text-[28px] min-[360px]:text-[32px] min-[400px]:text-[35px] sm:text-[62px] md:text-[86px] lg:text-[112px] uppercase tracking-tight text-black leading-[0.88] select-none"
          >
            <span className="block whitespace-nowrap">PEDAS GURIH, CRISPY</span>
            <span className="block whitespace-nowrap">MIE GACOAN MENU</span>
          </h1>
        </div>

        {/* LAYER 2 (DEPAN): FOTO PIRING MIE GACOAN - NAIK TINGGI MENUTUPI BARIS KEDUA TEKS MENU */}
        <div className="relative w-full max-w-sm min-[400px]:max-w-md sm:max-w-3xl md:max-w-4xl lg:max-w-[920px] aspect-square -mt-[85px] min-[375px]:-mt-[95px] min-[410px]:-mt-[110px] sm:-mt-[180px] md:-mt-[250px] lg:-mt-[330px] z-20 flex items-center justify-center">
          
          {/* Bayangan Halus Realistis di Bawah Piring */}
          <div
            className="absolute bottom-4 sm:bottom-8 lg:bottom-12 w-[85%] h-12 sm:h-18 lg:h-24 bg-black/35 rounded-full blur-2xl transform rotate-[-2deg] -z-10"
            aria-hidden="true"
          />

          {/* Gambar Piring Mie Gacoan Naik Menutupi Sebagian Teks Menu (Persis Burger di Referensi) */}
          <div className="relative w-full h-full flex items-center justify-center scale-110 min-[400px]:scale-115 sm:scale-120 md:scale-125 lg:scale-125 hover:scale-[1.28] transition-transform duration-500">
            <Image
              src="/images/gacoan-hero.png"
              alt="Mie Gacoan Cikarang Komplit dengan Pangsit Goreng Mekar"
              fill
              priority
              quality={100}
              className="object-contain object-center drop-shadow-[0_28px_35px_rgba(0,0,0,0.38)]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1000px"
            />
          </div>

          {/* STEMPEL MEDALI HITAM-EMAS DI SAMPING KANAN PIRING (PERSIS SEPERTI REFERENSI) */}
          <div className="absolute top-[22%] min-[400px]:top-[24%] sm:top-[27%] md:top-[30%] right-1.5 min-[400px]:right-2 sm:right-6 md:right-8 z-30 w-16 h-16 min-[400px]:w-[68px] min-[400px]:h-[68px] sm:w-[84px] sm:h-[84px] md:w-24 md:h-24 rounded-full bg-black text-[#FFC903] border-[2.5px] sm:border-[3.5px] border-[#FFC903] shadow-pop flex flex-col items-center justify-center p-1 sm:p-1.5 text-center rotate-12 hover:rotate-0 transition-transform cursor-pointer">
            <div className="flex items-center gap-0.5 text-amber-300">
              <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-amber-300" />
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-300" />
              <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-amber-300" />
            </div>
            <span className="text-[6.5px] min-[400px]:text-[7px] sm:text-[8px] font-black uppercase tracking-wider text-white leading-none mt-0.5 sm:mt-1">
              100% RESMI
            </span>
            <span className="text-[8.5px] min-[400px]:text-[9.5px] sm:text-[11px] font-black uppercase text-[#FFC903] leading-tight font-display">
              HALAL MUI
            </span>
            <span className="text-[5.5px] min-[400px]:text-[6px] sm:text-[7px] font-extrabold uppercase text-neutral-300 tracking-tighter">
              LEVEL 0 - 8
            </span>
          </div>
        </div>

        {/* Tombol aksi di bawah hero sudah dihapus sesuai instruksi */}
      </div>
    </section>
  );
}
