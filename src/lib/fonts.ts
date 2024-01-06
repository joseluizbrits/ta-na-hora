import { Cormorant, Poppins } from "next/font/google";

export const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
