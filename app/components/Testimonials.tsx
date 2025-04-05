import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO at TechCorp",
    testimonial:
      "This service helped us grow our business exponentially. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager at BrandX",
    testimonial:
      "A game changer for our marketing strategy. Their support and solutions are top-notch.",
    rating: 4,
  },
  {
    name: "Alice Johnson",
    title: "Founder at StartupHub",
    testimonial:
      "The team went above and beyond. They transformed our vision into a reality.",
    rating: 5,
  },
  {
    name: "Bob Brown",
    title: "CMO at Madmen",
    testimonial:
      "Incredible support, we saw major improvements in our workflow",
    rating: 5,
  },
  {
    name: "Charlie Green",
    title: "Product Manager at AppWorks",
    testimonial:
      "This service made our project launch smooth and successful. Couldn't ask for more!",
    rating: 4,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "#fce300" : "gray"}
          viewBox="0 0 24 24"
          width="20"
          height="20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
          whileHover={{ scale: 1.2, rotate: i % 2 === 0 ? 10 : -10 }}
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03 5.45-4.73-7.19-.61-2.62-6.62-2.62 6.62-7.19.61 5.45 4.73-1.64 7.03L12 17.27z" />
        </motion.svg>
      );
    }
    return stars;
  };

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

  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gray-100 opacity-50"
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
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gray-100 opacity-50"
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
        className="max-w-7xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 relative inline-block"
          variants={itemVariants}
        >
          What Our Clients Say
          <motion.span
            className="absolute -bottom-2 left-0 right-0 h-1 bg-[#fce300]"
            initial={{ width: 0, left: "50%" }}
            animate={isInView ? { width: "100%", left: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.h2>

        <motion.div variants={itemVariants}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 1000, // Time in ms before transitioning to the next slide
              disableOnInteraction: false, // Ensure autoplay continues even after user interaction
            }}
            modules={[Autoplay]} // Ensure Autoplay module is used
            className="testimonial-swiper !overflow-visible"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-8 m-8 rounded-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 relative z-10 overflow-hidden group"
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

                  <div className="mb-4 flex-grow relative z-10">
                    {/* Render stars based on the rating */}
                    <div className="flex justify-center mb-2">
                      {renderStars(testimonial.rating)}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute -top-4 -left-4 text-6xl text-[#fce300] opacity-20 font-serif"
                    >
                      "
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="absolute -bottom-8 -right-4 text-6xl text-[#fce300] opacity-20 font-serif"
                    >
                      "
                    </motion.div>
                  </div>

                  <motion.p
                    className="text-lg font-medium text-gray-900 mb-4 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    "{testimonial.testimonial}"
                  </motion.p>

                  <div className="relative z-10">
                    <motion.h4
                      className="text-xl font-semibold text-gray-900"
                      whileHover={{ color: "#fce300" }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.name}
                    </motion.h4>

                    <motion.p
                      className="text-sm text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {testimonial.title}
                    </motion.p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12">
          <motion.button
            className="bg-[#fce300] text-black py-3 px-8 rounded-full font-semibold"
            whileHover={{ scale: 1.05, backgroundColor: "#ffde6b" }}
            whileTap={{ scale: 0.95 }}
          >
            Testimonials
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
