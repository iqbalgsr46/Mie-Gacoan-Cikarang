"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Inisialisasi Lenis dengan inertia & momentum gliding persis seperti di smartphone
    const lenis = new Lenis({
      duration: 1.25, // Durasi glide / gliding momentum
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing eksponensial khas inersia smartphone (smooth decay)
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05, // Responsif saat di-scroll dengan wheel/trackpad
      touchMultiplier: 1.6, // Sensitivitas gliding saat touch
      syncTouch: true, // Momentum gliding untuk touch device
      syncTouchLerp: 0.08,
      touchInertiaExponent: 1.7,
      autoRaf: true, // Loop otomatis requestAnimationFrame
      anchors: true, // Navigasi klik tautan menu (#highlight, dll.) meluncur dengan halus
    });

    lenisRef.current = lenis;

    // Pasang instance di window agar bisa diakses global jika diperlukan
    if (typeof window !== "undefined") {
      window.__lenis = lenis;
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        delete window.__lenis;
      }
    };
  }, []);

  return <>{children}</>;
}
