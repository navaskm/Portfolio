'use client';
import { motion } from "framer-motion";

const UiDevelopment = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h1 className="text-4xl font-bold">Frontend UI Development</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Crafting visually appealing and responsive user interfaces with modern technologies.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-2xl font-semibold text-center"
        >
          Key Features of UI Development
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-5xl mx-auto mt-16 px-6 sm:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-2xl font-semibold text-center"
        >
          Technologies Used
        </motion.h2>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              className="px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md shadow-md"
            >
              {tech}
            </motion.div>
          ))}
        </div>
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

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 dark:text-gray-400">
        <p>© 2025 Your Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default UiDevelopment;

const features = [
  { title: "Responsive Design", description: "Ensuring seamless experience on all devices."},
  { title: "Interactive UI", description: "Enhancing engagement with dynamic elements."},
  { title: "Optimized Performance", description: "Fast-loading and high-performance UI components."},
  { title: "Accessibility", description: "Making UI usable for everyone, including those with disabilities."},
  { title: "Scalability", description: "Easily maintainable and scalable frontend architecture."},
  { title: "Modern Design", description: "Following latest design trends for an attractive UI."},
];

// Technologies Used
const technologies = [
  "HTML", "CSS", "JavaScript", "React.js", "Next.js", "TypeScript", "TanStack Query", "Framer Motion", "Tailwind CSS", "SCSS", "Bootstrap", "jQuery"
];