import { type RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function safeParseCookie(cookie: RequestCookie | undefined) {
  try {
    return JSON.parse(cookie!.value);
  } catch (e) {
    return undefined;
  }
}
