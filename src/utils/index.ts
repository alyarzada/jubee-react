import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// formatDate utility with day.js or others..
// formatPrice utility with day.js or others..
// absoluteUrl.. with env
// isArrayOfFile
// truncate...
// slugify, unslugify