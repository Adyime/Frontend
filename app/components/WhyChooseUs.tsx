import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const WhyChooseUs = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const duration = 2000; // Duration in milliseconds
  const end1 = 5; // Years of Excellence
  const end2 = 100; // Projects Done
  const end3 = 98; // Success Rate
  const end4 = 5; // Professional Team

  // Custom counter logic with easing
  const startCounting = (setCount, end) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Using easeOutExpo for a more natural counting effect
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * end));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 10);
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      startCounting(setCount1, end1);
      startCounting(setCount2, end2);
      startCounting(setCount3, end3);
      startCounting(setCount4, end4);
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const statItems = [
    {
      count: count1,
      label: "Years of Excellence",
      suffix: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fce300]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      count: count2,
      label: "Projects Done",
      suffix: "+",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fce300]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      count: count3,
      label: "Success Rate",
      suffix: "%",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fce300]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      count: count4,
      label: "Professional Team",
      suffix: "",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fce300]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-20 px-5 md:px-20 bg-white relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#fce300] opacity-5"
        animate={{
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#fce300] opacity-5"
        animate={{
          x: [0, -20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-8 relative inline-block"
          variants={itemVariants}
        >
          Why Choose Us?
          <motion.span
            className="absolute -bottom-2 left-0 right-0 h-1 bg-[#fce300]"
            initial={{ width: 0, left: "50%" }}
            animate={isInView ? { width: "100%", left: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {statItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center relative overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-50 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
              />

              <motion.div className="mb-4 flex justify-center relative z-10">
                {item.icon}
              </motion.div>

              <motion.h3
                className="text-4xl font-bold text-[#fce300] mb-4 relative z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0px 0px 0px rgba(252, 227, 0, 0)",
                      "0px 0px 10px rgba(252, 227, 0, 0.5)",
                      "0px 0px 0px rgba(252, 227, 0, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  {item.count.toLocaleString()}
                  {item.suffix}
                </motion.span>
              </motion.h3>

              <motion.p
                className="text-xl font-medium text-gray-600 relative z-10"
                whileHover={{ color: "#000" }}
              >
                {item.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
