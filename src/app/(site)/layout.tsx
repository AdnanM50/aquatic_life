import type { Metadata } from "next";

import "../../../src/app/globals.css";
import Header from "@/components/siteLayout/header";
import Footer from "@/components/siteLayout/footer";



export const metadata: Metadata = {
  title: "Aquatic Life",
  description: "Explore the wonders of aquatic ecosystems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={` antialiased`}
      >
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
