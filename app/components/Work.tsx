import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Work = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "We created a fully optimized e-commerce website to help our client increase online sales.",
      img: "/Ecom.png", // Replace with actual image path
      link: "https://foreverbuy.in/",
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
      link: "https://clickerstudios.com/",
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
      link: "https://thevirtualguides.com/",
    },
    {
      title: "SaaS Website",
      description:
        "A professional SaaS landing page to showcase product features and drive subscriptions.",
      img: "/Saas.png", // Replace with actual image path
      link: "https://www.alux.com/",
    },
  ];

  return (
    <section className="py-20 px-5 md:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Our Work
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Check out some of our amazing projects we've worked on to help
          businesses grow.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1} // Default to 1 slide for small screens
          spaceBetween={10}
          autoplay={{
            delay: 1000, // 1 second
            disableOnInteraction: false, // Keeps autoplay active after manual navigation
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
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 m-10 rounded-lg shadow-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  View Project
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
