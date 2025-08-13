import type { Metadata } from "next";
import "./globals.css";


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
        className={`antialiased`}
      >
     
        {children}
      </body>
    </html>
  );
}
