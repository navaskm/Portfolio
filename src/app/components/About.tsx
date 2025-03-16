import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { assets, infoList, advancedLanguage } from '../../../assets/assets';

const About = () => {

  const { resolvedTheme } = useTheme() as { resolvedTheme: 'dark' | 'light' };

  const handleProject = (title:string)=>{
    if(title === 'Projects'){
      window.open("https://e-commerce-app-henna-nu.vercel.app/","_blank")
    }
  }

  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      id="about" 
      className="w-full px-[12%] py-10 scroll-mt-20"
    >

      <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
        className="text-center mb-2 text-lg"
      >Introduction</motion.h4>
      <motion.h2 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.5}}
        className="text-center text-5xl"
      >About me</motion.h2>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

        <motion.div 
        initial={{opacity:0,scale:0.9}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.6}}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image 
            src={assets.user_image} 
            alt=''
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.5,delay:0.8}}
          className="flex-1"
        >

          <p className="mb-10 max-w-2xl">As a frontend developer, I am constantly learning and evolving to build sleek, interactive, and user-friendly web applications. My journey in web development is driven by curiosity and a passion for creating seamless digital experiences.</p>

          <motion.ul
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8,delay:1}}
           className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {
              infoList.map((
                {icon,iconDark,title,description},index
              )=>(

                <motion.li 
                  whileHover={{scale:1.05}}
                  key={index} 
                  className={`border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 
                    ${resolvedTheme === 'dark'?'hover:bg-[#0a2c23]':'hover:bg-white'}`}
                  onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(7, 172, 108, 0.774)")}
                  onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  onClick={()=>handleProject(title)}
                >

                  <Image src={resolvedTheme === 'dark'?iconDark:icon} alt={title} className="w-7 mt-3"/>
                  <h3 className={`my-4 font-semibold text-gray-700 ${resolvedTheme === 'dark'?'text-white':''}`}>{title}</h3>
                  <p className={`text-gray-600 text-sm ${resolvedTheme === 'dark'?'text-white/80':''}`}>{description}</p>

                </motion.li>

              ))
            }
          </motion.ul>

          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className={`my-6 text-lg font-semibold text-gray-700 ${resolvedTheme === 'dark' ? 'text-white/80' : ''}`}>
            Advanced Technologies
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap justify-start gap-3 sm:gap-5">
            
            {advancedLanguage.map((language, index) => (
              <motion.li 
                whileHover={{ scale: 1.1 }}
                key={index} 
                className="flex items-center justify-center min-w-[80px] px-3 py-2 border border-gray-400 dark:border-white/30 
                          rounded-xl shadow-md cursor-pointer bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-white 
                          hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <h5 className="inline-block text-sm sm:text-base font-medium">{language}</h5>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>

      </motion.div>

    </motion.div>
  )
}

export default About