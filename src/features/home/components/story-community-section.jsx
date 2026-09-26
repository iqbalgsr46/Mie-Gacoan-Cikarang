"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Quote, MessageCircle } from "lucide-react";
import { storyCards } from "@/data/restaurant-data";

export function StoryCommunitySection() {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  return (
    <section
      id="stories"
      className="relative w-full bg-gacoan-yellow bg-doodle-pattern py-16 sm:py-24 border-b-2 border-gacoan-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline Sesuai Referensi "EVERY BURGER TELLS A STORY" */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-gacoan-black text-gacoan-yellow text-xs font-black uppercase tracking-widest mb-3">
            SUARA PELANGGAN SETIA CIKARANG
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-gacoan-black leading-[0.95] select-none">
            CERITA SERU <br />
            <span className="text-gacoan-red">DI TIAP SUAPAN</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base font-extrabold text-neutral-800">
            Dari anak kampus, pekerja kawasan industri Jababeka & MM2100, hingga momen santai akhir pekan bersama keluarga tercinta.
          </p>
        </div>

        {/* 3 Vertical Portrait Cards Sesuai Referensi CRISPR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {storyCards.map((story, idx) => (
            <div
              key={story.id}
              className="group bg-white rounded-3xl border-4 border-gacoan-black shadow-pop-lg overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300"
            >
              {/* Foto Potret Vertikal (Squircle Cropping) */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-200">
                <Image
                  src={story.image}
                  alt={story.author}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tagline di Dalam Foto */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <h3 className="font-display font-black text-lg sm:text-xl uppercase leading-tight text-white drop-shadow-sm">
                    {story.tagline}
                  </h3>
                </div>
              </div>

              {/* Ulasan & Identitas */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-gacoan-surface">
                <div className="relative">
                  <Quote className="w-6 h-6 text-gacoan-yellow mb-2 fill-gacoan-yellow" />
                  <p className="text-xs sm:text-sm font-bold text-neutral-800 leading-relaxed italic">
                    &ldquo;{story.review}&rdquo;
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t-2 border-neutral-200 flex items-center justify-between">
                  <span className="font-black text-xs sm:text-sm uppercase text-gacoan-black">
                    {story.author}
                  </span>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-gacoan-yellow text-gacoan-black border border-gacoan-black">
                    Verified Customer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Dots Sesuai Referensi CRISPR */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="w-8 h-2.5 rounded-full bg-gacoan-black" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-400 hover:bg-neutral-600 transition-colors cursor-pointer" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-400 hover:bg-neutral-600 transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
