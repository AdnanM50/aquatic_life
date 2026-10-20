import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQUAFY — Luxury Siamese Fighting Fish & Aquarium Atelier",
  description: "Discover rare captive-bred Betta splendens, award-winning lineage specimens, and luxury aquarium living.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased ${outfit.variable} ${plusJakartaSans.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#02040a] text-white selection:bg-cyan-500 selection:text-black font-jakarta"
      >
        {children}
      </body>
    </html>
  );
}
