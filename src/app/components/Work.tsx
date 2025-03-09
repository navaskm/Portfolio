import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { assets, workData } from '../../../assets/assets';

const Work = () => {

  const { resolvedTheme } = useTheme() as {resolvedTheme : 'dark'|'light'};

  const handleProject = () => {
    window.open('https://e-commerce-app-henna-nu.vercel.app', '_blank');
  };
  

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="work"
    className="w-full px-[12%] py-10 scroll-mt-20">

      <motion.h4 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      className="text-center mb-2 text-lg">My portfolio</motion.h4>

      <motion.h2
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
       className="text-center text-5xl">My latest work</motion.h2>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.7}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.9}}
      className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 ${resolvedTheme === 'dark'?'text-black':''}`}>
        {
          workData.map((project,index)=>(
            <motion.div 
              whileHover={{scale:1.05}}
              transition={{duration:0.3}}
              key={index} 
              style={{backgroundImage:`url(${project.bgImage})`}}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              onClick={handleProject}
            >

              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>

                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='' className='w-5'/>
                </div>
              </div>

            </motion.div>
          ))
        }
      </motion.div>

      <motion.a 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:1.1}}
        href="https://github.com/navaskm" 
        target='_blank'
        className={`w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 duration-500 ${resolvedTheme==='dark'?'text-white border-white hover:bg-[#0a2c23]':'hover:bg-white'}`}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(7, 172, 108, 0.774)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        Show more 
        <Image 
          src={resolvedTheme === 'dark'?assets.right_arrow_bold_dark:assets.right_arrow_bold}
          alt=''
          className='w-4'
        />
      </motion.a>

    </motion.div>
  )
}

export default Work