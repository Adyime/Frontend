import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { Link } from "react-router";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const services = [
    {
      title: "Website Development",
      description:
        "We specialize in creating stunning, responsive websites that are built to scale. From custom designs to seamless user experiences, we ensure your website stands out in the digital world. We offer various types of websites:",
      items: [
        "Portfolio Websites",
        "E-commerce Websites",
        "Business Websites",
        "Blog Websites",
        "Nonprofit Websites",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Digital Marketing",
      description:
        "Elevate your brand's online presence with our expert digital marketing services. From SEO to social media management, we help you reach and engage your target audience effectively. Our marketing services include:",
      items: [
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Social Media Marketing",
        "Email Marketing",
        "Content Creation ",
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#fce300] py-36 px-6 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white opacity-10"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white opacity-10"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10"
      >
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-800 mb-12 relative inline-block mx-auto w-full"
          variants={itemVariants}
        >
          <span className="relative inline-block">
            Our Services
            <motion.span
              className="absolute -bottom-3 left-0 right-0 h-1 bg-white"
              initial={{ width: 0, left: "50%" }}
              animate={isInView ? { width: "30%", left: "35%" } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-[#fffbcc] to-[#ffde6b] p-8 rounded-3xl shadow-2xl transition-all duration-300 relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <motion.div
                className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-white opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <div className="flex items-start gap-4 mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="flex-shrink-0"
                >
                  {service.icon}
                </motion.div>
                <motion.h3
                  className="text-3xl font-semibold text-gray-800 mb-6 text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
              </div>

              <motion.p
                className="text-lg text-gray-700 mb-6 text-left leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
              >
                {service.description}
              </motion.p>

              <motion.ul
                className="text-lg text-gray-700 mb-6 list-none text-left space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.3,
                          delay: 0.5 + i * 0.1 + index * 0.2,
                        },
                      },
                    }}
                    className="flex items-center"
                  >
                    <motion.span
                      className="text-green-600 mr-2 inline-block"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✅
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" variants={itemVariants}>
          <motion.p
            className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Ready to take your business to the next level?{" "}
            <strong>Contact us</strong> today, and let's discuss how we can help
            you achieve your goals with our expert services.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block bg-white text-black py-3 px-8 rounded-full mt-4 hover:bg-yellow-400 transition-colors text-lg font-bold relative overflow-hidden group"
            >
              <motion.span className="absolute inset-0 bg-gray-800 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Get In Touch
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
