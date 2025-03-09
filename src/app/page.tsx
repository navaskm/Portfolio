"use client";

import NavBar from '@/app/components/NavBar';
import Header from '@/app/components/Header';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Work from '@/app/components/Work';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {

  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}