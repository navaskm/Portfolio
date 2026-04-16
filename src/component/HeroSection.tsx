import { motion } from "motion/react";
import Image from "next/image";

const HeroSection = () => {

  return (
    <section className="w-full bg-[rgba(15,22,65,1)] mt-16 md:mt-18 lg:mt-22" aria-label="Introduction about Navas KM">
      <div className="w-11/12 max-w-3xl text-center mx-auto min-h-[calc(100vh-800px)] flex flex-col items-center justify-center gap-4 py-10">

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
          className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        >
          Hi I&apos;m Navas KM
          <Image
            src='/header/hand-icon.png'
            width={20}
            height={20}
            alt='Navas KM Nilambur Frontend Developer'
            className="w-6"
          />
        </motion.h1>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl sm:text-6xl lg:text-[66px]"
        >frontend web developer based in India.</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >I am a passionate frontend developer from Kerala, India, dedicated to building modern and user-friendly web applications.</motion.p>

        <div className="flex flex-row items-center gap-4 mt-4">

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            aria-label="Contact Navas KM"
            className="px-6 py-2 md:px-10 md:py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me
            <Image
              src='/header/right-arrow-bold.png'
              width={20}
              height={20}
              alt='Navas KM Nilambur Frontend Developer'
              className="w-4"
            />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            href="/Navas-KM-Frontend-Developer-Resume.pdf"
            download
            aria-label="Download Navas KM resume"
            className="px-6 py-2 md:px-10 md:py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image
              src='/header/download-icon.png'
              width={20}
              height={20}
              alt='Navas KM Nilambur Frontend Developer'
              className="w-4"
            />
          </motion.a>

        </div>

      </div>
    </section>
  )
}

export default HeroSection;