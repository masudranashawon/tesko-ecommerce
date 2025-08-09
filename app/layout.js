import "./globals.css";
import "./responsive.css";
import { Rubik } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ["serif"],
});

export const metadata = {
  title: "Tesko | A Multi-Vendor E-Commerce platform",
  description:
    "A multi-vendor e-commerce platform built with Next.js 15 and Tailwind CSS v4. by Spinner Tech. Developed by Masud Rana Shawon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
