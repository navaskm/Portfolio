"use client";

import NavBar from '@/component/NavBar';
import HeroSection from '@/component/HeroSection';
import About from '@/component/About';
import Work from '@/component/Work';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';

export default function Home() {

  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
};