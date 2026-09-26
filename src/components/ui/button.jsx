import React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none select-none";

    const variants = {
      primary:
        "bg-gacoan-black text-white hover:bg-neutral-800 shadow-pop hover:shadow-pop-hover hover:translate-x-[2px] hover:translate-y-[2px]",
      yellow:
        "bg-gacoan-yellow text-gacoan-black border-2 border-gacoan-black hover:bg-gacoan-yellow-light shadow-pop hover:shadow-pop-hover hover:translate-x-[2px] hover:translate-y-[2px]",
      red:
        "bg-gacoan-red text-white hover:bg-gacoan-red-dark shadow-pop hover:shadow-pop-hover hover:translate-x-[2px] hover:translate-y-[2px]",
      orange:
        "bg-gacoan-orange text-white hover:bg-orange-700 shadow-pop hover:shadow-pop-hover hover:translate-x-[2px] hover:translate-y-[2px]",
      pill:
        "rounded-full border-2 border-gacoan-black bg-white text-gacoan-black hover:bg-gacoan-black hover:text-white font-black",
      pillDark:
        "rounded-full bg-gacoan-black text-white border-2 border-gacoan-black hover:bg-transparent hover:text-gacoan-black font-black",
      outline:
        "border-2 border-gacoan-black text-gacoan-black bg-transparent hover:bg-gacoan-black hover:text-white",
      ghost:
        "bg-transparent text-gacoan-black hover:bg-black/10",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 rounded-full",
      md: "text-sm px-5 py-2.5 rounded-full",
      lg: "text-base px-7 py-3.5 rounded-full",
      xl: "text-lg px-8 py-4 rounded-full font-black",
      icon: "h-10 w-10 p-0 rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
