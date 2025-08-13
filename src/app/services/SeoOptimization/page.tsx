"use client";
import { motion } from "framer-motion";

const SeoOptimizationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6 sm:px-12 py-16 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-green-600 dark:text-green-400">
          SEO Optimization Services
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Boost your website&apos;s visibility and ranking with proven SEO strategies
          that drive traffic and grow your online presence.
        </p>
      </motion.div>

      {/* Services / Features Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center"
        >
          Key SEO Services
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoServices.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mt-16 max-w-6xl mx-auto px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center"
        >
          Why SEO Optimization Matters
        </motion.h2>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="mt-16 max-w-6xl mx-auto px-6 sm:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-center"
        >
          Tools & Technologies We Use
        </motion.h2>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {seoTools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-md shadow-md bg-white dark:bg-gray-800"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-16 text-center px-6">
        <h2 className="text-3xl font-bold text-green-600 dark:text-green-400">
          Let&apos;s Improve Your Rankings!
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Ready to take your website to the next level? Contact me for a tailored
          SEO strategy.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Contact Me
        </motion.a>
      </section>

      {/* Footer */}
      <div className="mt-20 text-center text-gray-500 dark:text-gray-400">
        <p>© 2025 Your Portfolio. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SeoOptimizationPage;

// Data
const seoServices = [
  { title: "Keyword Research", description: "Finding the right keywords to target for your business niche." },
  { title: "On-Page SEO", description: "Optimizing your website’s content, meta tags, and structure." },
  { title: "Off-Page SEO", description: "Building high-quality backlinks to improve authority." },
  { title: "Technical SEO", description: "Enhancing site speed, security, and indexing for better performance." },
  { title: "Local SEO", description: "Optimizing your business for local searches and Google Maps." },
  { title: "Content Optimization", description: "Improving content readability and keyword placement." },
];

const seoBenefits = [
  { title: "Increased Traffic", description: "More visitors from search engines to your website." },
  { title: "Better User Experience", description: "SEO improvements also enhance website usability." },
  { title: "Higher Conversion Rates", description: "Attracting relevant audiences who are ready to convert." },
  { title: "Brand Credibility", description: "Ranking high builds trust and authority with customers." },
  { title: "Cost-Effective Marketing", description: "Long-term ROI compared to paid ads." },
  { title: "Competitive Advantage", description: "Stay ahead of competitors with continuous SEO efforts." },
];

const seoTools = [
  "Google Analytics",
  "Google Search Console",
  "SEMrush",
  "Ahrefs",
  "Yoast SEO",
  "Screaming Frog",
  "Ubersuggest",
  "GTmetrix",
];