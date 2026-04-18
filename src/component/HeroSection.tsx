import { motion } from "motion/react";
import Image from "next/image";

const HeroSection = () => {

  return (
    <section className="w-full bg-[rgba(15,22,65,1)] mt-16 md:mt-18 lg:mt-22" aria-label="Introduction about Navas KM">
      <div className="w-11/12 max-w-5xl text-center mx-auto min-h-[calc(100vh-800px)] flex flex-col items-center justify-center gap-4 py-10">

        {/* my profile photo */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src='/header/profile-img.png'
            width={128}
            height={128}
            priority
            alt='Navas KM Nilambur Frontend Developer'
            className="rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="flex items-center gap-2 text-sm md:text-base text-white/70 font-medium tracking-wide mb-2"
        >
          Hi I&apos;m
          <span className="text-white font-semibold">Navas KM</span>
          <span className="wave-hand inline-block">
            <Image
              src='/header/hand-icon.png'
              width={20}
              height={20}
              alt='Navas KM Nilambur Frontend Developer'
              className="w-5"
            />
          </span>
        </motion.h1>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-5xl lg:text-[64px] font-bold leading-tight"
        >
          <span className="shine-text">
            Self-Taught
          </span>

          <span className="text-white"> Frontend Developer</span>
          <span className="text-white/80"> based in Nilambur, Kerala</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto text-white/60 text-sm md:text-base leading-relaxed font-light"
        >
          I’m Navas KM, a passionate frontend developer from Nilambur, Kerala, specializing in building modern, responsive, and user-friendly web applications using React, Next.js, and Tailwind CSS. I focus on creating clean UI designs and seamless user experiences.
        </motion.p>

        <div className="flex flex-row items-center gap-4 mt-4">

          {/* Contact Button */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            href="#contact"
            aria-label="Contact Navas KM"
            className="group px-6 py-2 md:px-10 md:py-3 rounded-full 
            border border-white text-white flex items-center gap-2
            transition-all duration-300
            hover:border-white/60 hover:bg-white/10"
          >
            contact me
            <Image
              src='/header/right-arrow-bold-dark.png'
              width={20}
              height={20}
              alt='arrow icon'
              className="w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>

          {/* Resume Button */}
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
            href="/Navas-KM-Frontend-Developer-Resume.pdf"
            download
            aria-label="Download Navas KM resume"
            className="group px-6 py-2 md:px-10 md:py-3 rounded-full 
            bg-white text-black border border-white flex items-center gap-2
            transition-all duration-300
            hover:bg-gray-200"
          >
            my resume
            <Image
              src='/header/download-icon.png'
              width={20}
              height={20}
              alt='download icon'
              className="w-4 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </motion.a>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;