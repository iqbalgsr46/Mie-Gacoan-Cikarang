import React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-gacoan-black text-white",
    red: "bg-gacoan-red text-white",
    orange: "bg-gacoan-orange text-white",
    yellow: "bg-gacoan-yellow text-gacoan-black border border-gacoan-black",
    outline: "bg-transparent border-2 border-gacoan-black text-gacoan-black",
    stamp: "border-2 border-dashed border-gacoan-black bg-white/90 text-gacoan-black font-black uppercase rotate-[-3deg]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide uppercase shadow-sm select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
