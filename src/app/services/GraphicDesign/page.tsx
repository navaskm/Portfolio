"use client";
import { motion } from 'framer-motion';

const GraphicDesign = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-red-800 dark:text-white text-center z-50"
      >
        Graphic Design Services
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 flex justify-center"
      >
        <img
          src='https://t4.ftcdn.net/jpg/10/28/12/61/360_F_1028126143_vh1YUJ2RA9dxfWle4TsRwiwmJ6pb4myu.jpg'
          alt="Graphic Design Banner" 
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-6 text-lg text-black dark:text-gray-300 text-center"
      >
        We provide high-quality graphic design services to enhance your brand&apos;s visual communication. From logos and branding to digital illustrations and marketing materials, we bring your ideas to life.
      </motion.p>
      
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div  
            whileHover={{ scale: 1.05 }} 
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
            key={index}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
              <img src={feature.icon} alt={feature.title} width={40} height={40} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <motion.a 
          whileHover={{ scale: 1.1 }} 
          href="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg"
        >
          Contact Me
        </motion.a>
      </div>

    </div>
  );
};

const features = [
  { icon: 'https://static.vecteezy.com/system/resources/previews/033/043/039/non_2x/graphic-design-icon-or-logo-design-isolated-sign-symbol-illustration-high-quality-black-outline-style-icon-collection-free-vector.jpg', title: 'Logo Design', description: 'Crafting unique and memorable logos for your brand.' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/7518/7518606.png', title: 'Brand Identity', description: 'Creating cohesive brand identities that stand out.' },
  { icon: 'https://cdn-icons-png.freepik.com/256/8777/8777233.png?semt=ais_hybrid', title: 'Illustrations', description: 'Custom illustrations for web, print, and social media.' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/1062/1062712.png', title: 'Marketing Materials', description: 'Designing brochures, posters, and social media graphics.' },
  { icon: 'https://cdn-icons-png.flaticon.com/512/1804/1804179.png', title: 'Web Graphics', description: 'High-quality visuals for websites and digital campaigns.' },
  { icon: 'https://cdn2.vectorstock.com/i/1000x1000/36/66/user-interface-or-software-design-icon-vector-12293666.jpg', title: 'UI Design', description: 'User-friendly interface designs for apps and websites.' }
];

export default GraphicDesign;