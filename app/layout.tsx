import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit"
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"], variable: "--font-ovo"
});

export const metadata: Metadata = {
  title: "Ahmed Ali's Portfolio",
  description: "Portfolio of Ahmed Ali, a Software Developer specialising in React, Next.js and TypeScript.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <body className={`${outfit.className} ${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
