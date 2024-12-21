import type { Metadata } from "next";
import "./globals.css";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";


export const metadata: Metadata = {
  title: "Final Project Barunastra",
  description: "Sponsorship proposal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scrollbar">
        <Navbarr/>
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
