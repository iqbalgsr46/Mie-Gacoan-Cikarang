import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Menggabungkan nama kelas CSS dengan tailwind-merge dan clsx secara bersih
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Format angka ke format mata uang Rupiah (IDR)
 */
export function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
}
