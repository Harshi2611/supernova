import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Footer from "../features/Footer";
import InquiryModal from "../features/InquiryModal";
import Navbar from "../features/Navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperNova Academy",
  description: "SuperNova Learning Center",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <InquiryModal />

        <main className="flex flex-col gap-16 lg:gap-24 flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
