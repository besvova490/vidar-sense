import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vidar Sense",
  description: "System for Intelligence Data Collection and Processing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {/* Header */}
        <Header />

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
