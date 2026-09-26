"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Utensils, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function IndulgenceComboSection({ onOpenOrder }) {
  const comboHighlights = [
    {
      title: "Mie Pedas Pilihan (Gacoan / Hompimpa)",
      desc: "Tentukan level pedasmu dari santai Lv 1 hingga membakar Lv 8.",
    },
    {
      title: "Dimsum Udang Keju / Rambutan",
      desc: "Krispi di luar dengan keju mozzarella lumer yang gurih.",
    },
    {
      title: "Es Buah Segar Khas Gacoan",
      desc: "Penawar rasa pedas instan dengan buah tropis dan selasih manis.",
    },
  ];

  return (
    <section
      id="indulgence"
      className="relative w-full bg-gacoan-yellow bg-doodle-pattern py-16 sm:py-24 border-b-2 border-gacoan-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Monumental Raksasa Sesuai Referensi "YOUR FAVORITE INDULGENCE" */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-gacoan-black text-gacoan-yellow text-xs font-black uppercase tracking-widest mb-3">
            BEST VALUE COMBO EXPERIENCE
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-gacoan-black leading-[0.92] select-none">
            KOMBO PALING DIBURU <br />
            <span className="text-white drop-shadow-[3px_3px_0px_#0A0A0A]">
              DI CIKARANG
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg font-extrabold text-neutral-800 max-w-2xl mx-auto">
            Sensasi makan paling lengkap dan memuaskan. Mie pedas membakar, kriuknya dimsum keju lumer, disempurnakan tegukan es buah dingin yang menyegarkan.
          </p>
        </div>

        {/* Visual Komposisi & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Kolom Visual Makanan Kombo Porsi Besar (7 Kolom) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl border-4 border-gacoan-black bg-white overflow-hidden shadow-pop-lg">
              <Image
                src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80"
                alt="Kombo Mie Gacoan dan Dimsum Cikarang"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Float Pill Tag */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 bg-gacoan-red text-white text-xs font-black uppercase tracking-wider rounded-full shadow-pop">
                  Paket Kombo Mantap
                </span>
              </div>

              {/* Info Bottom Floating */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase font-bold text-gacoan-yellow block">
                    Kenyang Maksimal
                  </span>
                  <span className="text-lg sm:text-xl font-black">
                    Mie + Dimsum + Minuman Es
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-neutral-300 block">
                    Mulai Dari
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-gacoan-yellow">
                    Rp 28.000,-
                  </span>
                </div>
              </div>
            </div>

            {/* Inset Badge Floating */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-gacoan-black text-gacoan-yellow rounded-2xl border-2 border-gacoan-yellow p-4 shadow-pop flex-col items-center rotate-3">
              <Sparkles className="w-6 h-6 fill-gacoan-yellow text-gacoan-yellow mb-1" />
              <span className="text-xs font-black uppercase">Paling Hemat</span>
              <span className="text-sm font-black text-white">Favorit Warga</span>
            </div>
          </div>

          {/* Kolom Informasi & Keunggulan Kombo (5 Kolom) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-white rounded-3xl border-4 border-gacoan-black p-6 sm:p-7 shadow-pop-lg flex flex-col gap-4">
              <h3 className="font-display font-black text-2xl uppercase tracking-tight text-gacoan-black">
                Kenapa Wajib Coba Kombo Ini?
              </h3>

              <div className="flex flex-col gap-4">
                {comboHighlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-gacoan-yellow border-2 border-gacoan-black flex items-center justify-center flex-shrink-0 mt-0.5 text-gacoan-black font-black text-xs shadow-pop-hover">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase text-gacoan-black">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 font-bold mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t-2 border-neutral-200 mt-1">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full text-xs sm:text-sm font-black uppercase tracking-wider py-3.5 rounded-full"
                  onClick={onOpenOrder}
                >
                  Pesan Paket Kombo Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
