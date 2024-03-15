import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { ThemeProvider } from "@/components/main/ThemedButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Equator",
  description: "Looking forward to the arrival of a new era!",
  icons: {
    icon: "/FOCG_Logo.png",
    shortcut: "/FOCG_Logo.png",
    apple: "/FOCG_Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-scroll overflow-x-hidden`}
      >
        <ThemeProvider>
          <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-800 via-white to-cyan-200 dark:from-indigo-800 dark:via-gray-900 dark:to-cyan-800" />
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
