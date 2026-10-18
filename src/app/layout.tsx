import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Explore The Ocean — Aquatic Life",
  description: "Discover the amazing depths and beauty of marine life that hides our world's oceans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#02040a] text-white selection:bg-cyan-500 selection:text-black"
      >
        {children}
      </body>
    </html>
  );
}
