import { motion } from "motion/react";

const plans = [
  {
    title: "Backend Development",
    status: "Learning",
    description: "Currently learning Node.js and Express.js to expand my skills into backend development and build full-stack web applications.",
    icon: "⚙️",
    color: "from-green-400 to-green-600"
  },
  {
    title: "Database Technologies",
    status: "Upcoming",
    description: "Planning to learn database technologies such as SQL and NoSQL to manage data effectively in full-stack applications.",
    icon: "🗄️",
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Full-Stack Development",
    status: "Goal",
    description: "Aiming to become a full-stack developer by combining frontend and backend skills to build complete and scalable web applications.",
    icon: "🚀",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "AI & Machine Learning",
    status: "Long-Term Goal",
    description: "Highly interested in Artificial Intelligence and planning to explore how AI and Machine Learning work after becoming a full-stack developer.",
    icon: "🤖",
    color: "from-pink-400 to-pink-600"
  }
];

const FuturePlan = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="future-plan"
      aria-labelledby="Future planing of Navas KM"
      className="w-full py-20 scroll-mt-20 bg-[rgba(10,16,48,1)] text-white"
    >
      <div className="max-w-[1500px] mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg text-gray-300"
        >
          My Journey
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-4xl lg:text-5xl mb-16"
        >
          Future Plans
        </motion.h3>

        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500/20 rounded-full"></div>

          <div className="space-y-12 lg:space-y-0">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center justify-between w-full ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Empty div for spacing on one side of timeline */}
                <div className="hidden lg:block w-5/12"></div>

                {/* Center icons */}
                <div className="relative z-10 flex items-center justify-center 
                  w-14 h-14 rounded-full 
                  bg-[rgba(15,22,65,1)] 
                  border-4 border-[rgba(10,16,48,1)] 
                  shadow-[0_0_15px_rgba(96,165,250,0.5)] 
                  mb-4 lg:mb-0 float-icon"
                >
                  <span className="text-2xl">{plan.icon}</span>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full lg:w-5/12"
                >
                  <div className="relative p-[1px] rounded-2xl group overflow-hidden">
                    <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}></span>
                    <div className="relative h-full bg-[rgba(15,22,65,1)] p-6 rounded-2xl z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/20 whitespace-nowrap ml-2">
                          {plan.status}
                        </span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FuturePlan;
