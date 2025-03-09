"use client";
import { motion } from "framer-motion";

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-6 sm:px-12 py-16">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-teal-600 dark:text-teal-400"
        >
          Web Development Services
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          I specialize in building fast, responsive, and modern websites using the latest web technologies.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Responsive Design", description: "Websites that look great on all devices." },
          { title: "Next.js & React", description: "Powerful frontend development with Next.js & React." },
          { title: "Performance Optimized", description: "Fast and SEO-friendly web applications." },
          { title: "E-Commerce Solutions", description: "Custom e-commerce platforms with secure payment gateways." },
          { title: "API Integration", description: "Seamless integration with third-party APIs." },
          { title: "Custom Web Apps", description: "Building tailored web applications for businesses." },
        ].map((feature, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">{feature.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400">My Experience</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
          I have built multiple projects using technologies like Next.js, React, Tailwind, Firebase, and more.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "E-Commerce Website", description: "Built a fully functional online store with Next.js." },
            { title: "Portfolio Website", description: "Developed a personal portfolio with Framer Motion animations." },
            { title: "Admin Dashboard", description: "Created a custom dashboard with React and Tailwind CSS." },
          ].map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">{project.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400">Let&apos;s Build Something Amazing!</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Ready to start a project? Contact me today and let&apos;s bring your ideas to life.
        </p>
        <motion.a 
          href="/"
          whileHover={{ scale: 1.1 }}
          className="mt-6 inline-block px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition"
        >
          Contact Me
        </motion.a>
      </section>

    </div>
  );
};

export default WebDevelopmentPage;