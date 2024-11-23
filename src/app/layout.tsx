import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Changed from local font to Inter
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
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-16 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Header</h1>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
