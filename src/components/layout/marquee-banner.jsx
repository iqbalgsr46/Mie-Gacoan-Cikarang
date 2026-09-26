"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function MarqueeBanner({
  items = [],
  reverse = false,
  className = "",
  speed = "normal",
  tilt = false,
  imageSrc = null,
}) {
  // Duplikasi item untuk seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={cn(
        "relative w-full select-none z-10",
        tilt ? "py-6 sm:py-8 overflow-visible -my-2 sm:-my-3" : "overflow-hidden py-1.5"
      )}
    >
      <div
        className={cn(
          "w-full bg-black py-2.5 sm:py-3.5 border-y-2 border-black overflow-hidden shadow-lg",
          tilt && "w-[130%] -ml-[15%] transform -rotate-[5.2deg] sm:-rotate-[5.8deg] shadow-xl",
          className
        )}
      >
        <div
          className={cn(
            "flex whitespace-nowrap will-change-transform items-center",
            reverse ? "animate-marquee-reverse" : "animate-marquee"
          )}
          style={{
            animationDuration: speed === "fast" ? "14s" : speed === "slow" ? "32s" : "22s",
          }}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 text-white font-black text-xs sm:text-sm md:text-base tracking-widest uppercase"
            >
              <span>{item}</span>
              {imageSrc ? (
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 shrink-0 flex items-center justify-center">
                  <Image
                    src={imageSrc}
                    alt="Mie Gacoan"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  />
                </div>
              ) : (
                <span className="inline-block w-2 h-2 rounded-full bg-gacoan-yellow shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
