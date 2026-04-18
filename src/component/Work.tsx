import { motion } from 'motion/react';
import Image from 'next/image';

const workData = [
  {
    title: 'Frontend Project',
    description: 'E-commerce App with Next.js 15 and Clerk Auth',
    bgImage: '/work-3.png',
    link: 'https://e-commerce-app-henna-nu.vercel.app'
  }, {
    title: 'Employee Management System',
    description: 'Role-based task management app using Next.js and Redux',
    bgImage: '/work-4.png',
    link: 'https://employee-management-system-three-theta.vercel.app/'
  }, {
    title: 'Portfolio Project',
    description: 'Web Design Portfolio for Graphic Designer',
    bgImage: '/work-1.png',
    link: 'https://anshin-ten.vercel.app'
  }, {
    title: 'Bollinger Bands Indicator',
    description: 'Bollinger Bands chart built with Next.js and KLineCharts',
    bgImage: '/work-2.png',
    link: 'https://bollinger-bands-sable.vercel.app/'
  }, {
    title: 'Smart Expense Tracker',
    description: 'Created expense tracking app using Cursor AI.',
    bgImage: '/work-2.png',
    link: 'https://navaskm.github.io/expence-traker/'
  }
]

const Work = () => {

  const handleProject = (Link: string) => {
    window.open(Link, '_blank');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      aria-labelledby="Work's of Navas KM Nilambur Frontend Developer"
      className="w-full pt-20 pb-1 scroll-mt-20 bg-[rgba(6,10,32,1)]"
    >

      <div className='max-w-[1500px] mx-auto px-5 lg:px-8'>
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg">My portfolio</motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl">My latest work</motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12">
          Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={`grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] my-10 gap-5 `}>
          {
            workData.map((project, index) => (
              <motion.article
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={index}
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-xl relative cursor-pointer group overflow-hidden'
                onClick={() => handleProject(project.link)}
              >

                {/* Hidden SEO Image */}
                <Image
                  height={30}
                  width={30}
                  src={project.bgImage}
                  alt={`${project.title} project by Navas KM`}
                  className="hidden"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[rgba(10,16,48,1)]/60 group-hover:bg-[rgba(10,16,48,1)]/70 transition duration-300"></div>

                {/* Content */}
                <div className='absolute inset-0 z-10 p-4 flex flex-col justify-end'>

                  {/* text */}
                  <div className="max-w-full">
                    <h2 className='font-semibold text-white text-sm sm:text-base truncate'>
                      {project.title}
                    </h2>

                    <p className='text-xs sm:text-sm text-gray-300 group-hover:text-white line-clamp-2'>
                      {project.description}
                    </p>
                  </div>

                  {/* button */}
                  <div className='mt-3 flex justify-end'>
                    <div className='rounded-full w-9 aspect-square flex items-center justify-center 
                      transition-all duration-300 bg-white/40 group-hover:bg-white'>
                      <Image
                        height={30}
                        width={30}
                        src="/work/send-icon.png"
                        alt={`${project.title} project by Navas KM`}
                        className='w-4'
                      />
                    </div>
                  </div>
                </div>

              </motion.article>
            ))
          }
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          href="https://github.com/navaskm"
          target='_blank'
          rel="noopener noreferrer"
          aria-label="Visit Navas KM GitHub profile"
          className="w-max flex items-center justify-center gap-2 text-white border-[0.5px] border-white rounded-full py-3 px-10 mx-auto my-20 duration-500"
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(96,165,250,0.4)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          Show more
          <img
            src="/work/right-arrow-bold-dark.png"
            alt='arrow icon'
            className='w-4'
          />
        </motion.a>
      </div>

    </motion.section>
  )
}

export default Work