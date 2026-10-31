import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

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
      className="h-full antialiased"
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#02040a] text-white selection:bg-cyan-500 selection:text-black font-jakarta"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
