import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Importing autoplay CSS
import { Autoplay } from "swiper/modules"; // Importing Autoplay module

const testimonials = [
  {
    name: "Aditya",
    title: "CEO at TechCorp",
    testimonial:
      "This service helped us grow our business exponentially. Highly recommended!",
    rating: 5,
  },
  {
    name: "Nitin",
    title: "Marketing Manager at BrandX",
    testimonial:
      "A game changer for our marketing strategy. Their support and solutions are top-notch.",
    rating: 4,
  },
  {
    name: "Anurag Rawat",
    title: "Founder at StartupHub",
    testimonial:
      "The team went above and beyond. They transformed our vision into a reality.",
    rating: 5,
  },
  {
    name: "Nilesh Gupta",
    title: "CMO at Madmen",
    testimonial:
      "Incredible support, we saw major improvements in our workflow",
    rating: 5,
  },
  {
    name: "Rahul",
    title: "Product Manager at AppWorks",
    testimonial:
      "This service made our project launch smooth and successful. Couldn't ask for more!",
    rating: 4,
  },
];

const Testimonials = () => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "#fce300" : "gray"}
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M12 17.27l6.18 3.73-1.64-7.03 5.45-4.73-7.19-.61-2.62-6.62-2.62 6.62-7.19.61 5.45 4.73-1.64 7.03L12 17.27z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12">
          What Our Clients Say
        </h2>
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
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 m-8 rounded-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 transform hover:scale-105">
                <div className="mb-4 flex-grow">
                  {/* Render stars based on the rating */}
                  <div className="flex justify-center mb-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  “{testimonial.testimonial}”
                </p>
                <h4 className="text-xl font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
