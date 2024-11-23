import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from local font to Inter
import { Header } from "@/components/Header/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Map Application", // Updated title
  description: "Interactive map application with satellite view", // Updated description
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
