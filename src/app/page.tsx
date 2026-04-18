"use client";

import NavBar from '@/component/NavBar';
import HeroSection from '@/component/HeroSection';
import About from '@/component/About';
import Work from '@/component/Work';
import FuturePlan from '@/component/FuturePlan';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';

export default function Home() {

  return (
    <main>
      <NavBar />
      <HeroSection />
      <About />
      <Work />
      <FuturePlan />
      <Contact />
      <Footer />
    </main>
  );
};