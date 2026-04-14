import { motion } from 'motion/react';

const workData = [
    {
        title: 'Frontend Project',
        description: 'E-commerce App with Next.js 15 and Clerk Auth',
        bgImage: '/work-3.png',
        link:'https://e-commerce-app-henna-nu.vercel.app'
    },{
        title: 'Employee Management System',
        description: 'Role-based task management app using Next.js and Redux',
        bgImage: '/work-4.png',
        link:'https://employee-management-system-three-theta.vercel.app/'
    },{
        title: 'Portfolio Project',
        description: 'Web Design Portfolio for Graphic Designer',
        bgImage: '/work-1.png',
        link:'https://anshin-ten.vercel.app'
    },{
        title: 'Bollinger Bands Indicator',
        description: 'Bollinger Bands chart built with Next.js and KLineCharts',
        bgImage: '/work-2.png',
        link:'https://bollinger-bands-sable.vercel.app/'
    },{
        title: 'Smart Expense Tracker',
        description: 'Created expense tracking app using Cursor AI.',
        bgImage: '/work-2.png',
        link:'https://navaskm.github.io/expence-traker/'
    }
]

const Work = () => {

  const handleProject = (Link:string) => {
    window.open(Link, '_blank');
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
      className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5 `}>
        {
          workData.map((project,index)=>(
            <motion.div 
              whileHover={{scale:1.05}}
              transition={{duration:0.3}}
              key={index} 
              style={{backgroundImage:`url(${project.bgImage})`}}
              className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
              onClick={()=>handleProject(project.link)}
            >

              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                <div>
                  <h2 className='font-semibold'>{project.title}</h2>
                  <p className='text-sm text-gray-700'>{project.description}</p>
                </div>

                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <img src="/work/send-icon.png" alt='' className='w-5'/>
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
        className={`w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 duration-500 `}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "4px 4px 12px rgba(7, 172, 108, 0.774)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
      >
        Show more 
        <img 
          src="/work/right-arrow-bold.png"
          alt=''
          className='w-4'
        />
      </motion.a>

    </motion.div>
  )
}

export default Work