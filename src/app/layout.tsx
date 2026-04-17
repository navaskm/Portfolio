import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Navas KM | Web Developer & Designer",
  description: "I am a passionate web developer specializing in modern front-end and back-end technologies. Explore my projects, skills, and experience in building scalable and user-friendly applications.",
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