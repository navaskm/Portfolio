import { motion } from "motion/react";
import Image from "next/image";

const infoList = [
  { icon: '/about/code-icon.png', title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js, Redux toolkit' },
  { icon: '/about/edu-icon.png', title: 'Education', description: '+2 in Computer Commerce' },
  { icon: '/about/project-icon.png', title: 'GitHub', description: 'Showcasing my coding work, personal projects, and development journey on GitHub.' },
  { icon: '/about/project-icon.png', title: 'GitHub', description: 'Showcasing my coding work, personal projects, and development journey on GitHub.' }
];

export const advancedLanguage = [
  'TypeScript', 'TanStack Query', 'jQuery', 'Tailwind', 'SCSS', 'Framer Motion',
];

const About = () => {

  const handleProject = (title: string) => {
    if (title === 'GitHub') {
      window.open("https://github.com/navaskm", "_blank")
    };
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full py-20 scroll-mt-20 bg-[rgba(10,16,48,1)]"
      aria-labelledby="About Navas KM Nilambur Frontend Developer"
    >
      <div className="max-w-[1500px] mx-auto px-5 lg:px-8">
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg"
        >Introduction</motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl"
        >About me</motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 mt-20"
        >

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 sm:w-80 rounded-3xl max-w-none border"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/about/user-image.png"
                alt="Navas KM Frontend Developer from Nilambur Kerala"
                fill
                className="rounded-3xl object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex-1"
          >

            <p className="mb-10">
              Hi, I'm <strong>Navas KM</strong>, a passionate frontend developer based in Nilambur, Kerala.
              I specialize in building modern, responsive, and user-friendly web applications using
              React, Next.js, and Tailwind CSS. I enjoy creating seamless digital experiences and
              continuously improving my skills in web development.
            </p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              {
                infoList.map((
                  { icon, title, description }, index
                ) => (

                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    className="border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500"
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(7, 172, 108, 0.774)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                    onClick={() => handleProject(title)}
                  >

                    <img src={icon} alt={title} className="w-7 mt-3" />
                    <h3 className="my-4 font-semibold text-white">{title}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>

                  </motion.li>

                ))
              }
            </motion.ul>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="my-6 text-lg font-semibold text-white">
              Advanced Technologies
            </motion.h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="flex flex-wrap justify-start gap-3 sm:gap-5">

              {advancedLanguage.map((language, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="flex items-center justify-center min-w-[80px] px-3 py-2 border border-white/30 
                            rounded-xl shadow-md cursor-pointer bg-white/10 text-white 
                            hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                  <h5 className="inline-block text-sm sm:text-base font-medium">{language}</h5>
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default About