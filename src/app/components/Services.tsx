import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { assets, serviceData } from '../../../assets/assets';

const Services = () => {

  const { resolvedTheme } = useTheme() as {resolvedTheme : 'light' | 'dark'};

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="services" 
    className="w-full px-[12%] py-10 scroll-mt-20">

      <motion.h4 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.3}}
      className="text-center mb-2 text-lg">What I offer</motion.h4>

      <motion.h2
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5,delay:0.5}}
      className="text-center text-5xl">My Services</motion.h2>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5,delay:0.7}}
       className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I specialize in building modern, responsive, and high-performance web applications. From front-end development to seamless user experiences, I bring your ideas to life with clean and efficient code.
      </motion.p>
      
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.9}}
      className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
        {
          serviceData.map((service,index)=>(
            <motion.div
              whileHover={{scale:1.05}}
              className={`border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 ${resolvedTheme === 'dark'?'hover:bg-[#0a2c23]':'hover:bg-white'}`}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(7, 172, 108, 0.774)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              key={index}
            >

              <Image src={service.icon} alt='' className='w-10'/>
              <h3 className={`text-lg my-4 text-gray-700 ${resolvedTheme === 'dark'?'text-white':''}`}>{service.title}</h3>
              <p className={`text-sm text-gray-600 leading-5 ${resolvedTheme === 'dark'?'text-white/80':''}`}>{service.description}</p>
              <a href={service.link} className='flex items-center gap-2 text-sm mt-5 cursor-pointer hover:text-blue-700'>
                Read more 
                <Image src={assets.right_arrow} alt='' className='w-4'/>
              </a>

            </motion.div>
          ))
        }
      </motion.div>

    </motion.div>
  )
}

export default Services