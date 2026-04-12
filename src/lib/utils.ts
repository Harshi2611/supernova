import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getDriveFileId(url: string) {
  const match = url.match(/[-\w]{25,}/);
  return match ? match[0] : null;
}