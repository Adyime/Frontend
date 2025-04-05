import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion, useInView, useAnimation } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Work = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const projects = [
    {
      title: "Educational Website",
      description:
        "We created a fully optimized educational website for our client to help them reach more students.",
      img: "/Ecom.png", // Replace with actual image path
      link: "https://shrijiedu.com/",
    },

    {
      title: "Portfolio Website",
      description:
        "A beautifully designed portfolio website showcasing the work and expertise of our client.",
      img: "/Portfolio.png", // Replace with actual image path
      link: "https://sylfaen.in/",
    },
    {
      title: "Landing Page",
      description:
        "A high-converting landing page designed to drive engagement and conversions for our client.",
      img: "/Port.png", // Replace with actual image path
      link: "https://www.linedrafters.com/",
    },
    {
      title: "Business Website",
      description:
        "A modern and sleek website for a corporate business to showcase services and attract clients.",
      img: "/ar.png", // Replace with actual image path
      link: "https://arhightechsolutions.com/",
    },
    {
      title: "Portfolio Website",
      description:
        "A beautifully designed portfolio website showcasing the work and expertise of our client.",
      img: "/Blog.png",
      link: "https://liquorsecrets.in/",
    },
    {
      title: "Informative Website",
      description:
        "A professional informative website to showcase product features and drive subscriptions.",
      img: "/Saas.png", // Replace with actual image path
      link: "https://questnestsolutions.com/",
    },

    {
      title: "Informative Website",
      description:
        "A professional informative website to showcase events and drive subscriptions.",
      img: "/ev.png", // Replace with actual image path
      link: "https://dabasev.in/",
    },

    {
      title: "Informative Website",
      description: "A  Blog website to showcase events.",
      img: "/law.png", // Replace with actual image path
      link: "https://lexjudis.com/",
    },
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-5 md:px-20 overflow-hidden" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          variants={itemVariants}
        >
          <span className="relative inline-block">
            Our Work
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-black"
              initial={{ width: 0, left: "50%" }}
              animate={isInView ? { width: "100%", left: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12"
          variants={itemVariants}
        >
          Check out some of our amazing projects we've worked on to help
          businesses grow.
        </motion.p>

        {/* Swiper Carousel */}
        <motion.div variants={itemVariants}>
          <Swiper
            slidesPerView={1} // Default to 1 slide for small screens
            spaceBetween={10}
            autoplay={{
              delay: 2000, // 2 seconds
              disableOnInteraction: false, // Keeps autoplay active after user interaction
              pauseOnMouseEnter: true, // This is the key setting to pause on hover
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1, // Ensure only 1 card on smaller screens
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2, // 2 cards on medium screens
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, // 3 cards on larger screens
                spaceBetween: 30,
              },
            }}
            className="!overflow-visible"
            onSwiper={setSwiperInstance}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-6 m-10 rounded-lg shadow-lg group relative"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden rounded-lg mb-4 relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={project.img || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={224}
                        className="w-full h-56 object-cover rounded-lg"
                      />
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.link}
                        className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </motion.a>
                    </motion.div>
                  </div>
                  <motion.h3
                    className="text-2xl font-semibold text-black mb-4"
                    whileHover={{ color: "#3B82F6" }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <motion.a
                    href={project.link}
                    className="text-blue-600 hover:underline font-semibold inline-flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </motion.a>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
