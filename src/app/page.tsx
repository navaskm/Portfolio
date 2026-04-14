"use client";

import NavBar from '@/component/NavBar';
import Header from '@/component/Header';
import About from '@/component/About';
import Work from '@/component/Work';
import Contact from '@/component/Contact';
import Footer from '@/component/Footer';

export default function Home() {

  return (
    <>
      <NavBar/>
      <Header/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
};