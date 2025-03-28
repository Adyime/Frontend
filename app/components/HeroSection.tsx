import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.98 },
  };

  const services = [
    "E-Commerce",
    "Portfolio",
    "Landing Page",
    "Informative Sites",
    "Many More",
  ];

  return (
    <section className="py-20 px-5 md:px-20 flex items-center justify-center min-h-[80vh] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-black"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-green-600"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-full text-center z-10"
      >
        {/* Text Section */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-8xl font-bold leading-tight text-black"
          >
            Website that{" "}
            <motion.span
              initial={{ color: "#000" }}
              animate={{ color: "#16a34a" }}
              transition={{ duration: 1, delay: 1 }}
              className="relative inline-block"
            >
              <span className="text-green-600">Speaks</span>
              <motion.span
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-2 left-0 h-1 bg-green-600"
              />
            </motion.span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {services.map((service, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-lg md:text-xl text-black font-semibold flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  className="inline-block mr-2"
                >
                  ✵
                </motion.span>
                {service}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-12 flex justify-center">
            <motion.div
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="relative"
            >
              <Link
                to="/contact"
                className="bg-black text-white hover:text-black hover:bg-white transition-all duration-300 py-4 px-8 rounded-lg text-lg font-semibold border-2 border-black z-10 relative block"
              >
                Contact Now
              </Link>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 2 }}
                className="absolute -bottom-2 -right-2 w-full h-full bg-green-600 rounded-lg -z-10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
