import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Navas KM | Frontend Developer in Nilambur, Kerala",
  description: "Portfolio of Navas KM, a self-taught frontend developer from Nilambur, Kerala, India. Specializing in React, Next.js, and Tailwind CSS to build modern and responsive web applications.",
  keywords: [
    "Navas KM",
    "Navas KM Nilambur",
    "Frontend Developer Nilambur",
    "Frontend Developer Malappuram",
    "Frontend Developer Kerala",
    "React Developer Nilambur",
    "React Developer Malappuram",
    "React Developer Kerala",
    "N.extjs Developer Nilambur",
    "Next.js Developer Malappuram",
    "Next.js Developer Kerala",
    "Self Taught Developer Nilambur",
    "Self Taught Developer Malappuram",
    "Self Taught Developer Kerala",
    "Frontend Developer Portfolio"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
};