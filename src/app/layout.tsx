import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const urbanist = localFont({
  src: [
    { path: "../../fonts/urbanist/static/Urbanist-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/urbanist/static/Urbanist-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/urbanist/static/Urbanist-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../fonts/urbanist/static/Urbanist-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-urbanist",
  display: "swap",
});

const lufga = localFont({
  src: [
    { path: "../../fonts/lufga/LufgaLight.ttf", weight: "300", style: "normal" },
    { path: "../../fonts/lufga/LufgaRegular.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/lufga/LufgaMedium.ttf", weight: "500", style: "normal" },
    { path: "../../fonts/lufga/LufgaSemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GenAI Data Scientist · Portfolio",
  description:
    "Portfolio of a GenAI-focused data scientist: projects, demos and photography.",
  metadataBase: new URL("http://archit-mishra.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${urbanist.variable} ${lufga.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
