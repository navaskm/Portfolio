import type { Metadata } from "next";
import { Outfit,Ovo } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight:["400"]
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}