import "./globals.css";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";

// Impor Google Font dengan next/font
import { Inter } from "next/font/google";

// Konfigurasi font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"], // Gunakan berat font yang diperlukan
  display: "swap", // Optimalkan LCP dengan opsi swap
});

export const metadata = {
  title: "Final Project Barunastra",
  description: "Sponsorship proposal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="scrollbar">
        <Navbarr />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
