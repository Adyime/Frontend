import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from React Icons
import { FiPhone } from "react-icons/fi"; // Import Phone icon from React Icons
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FreeEbook from "./FreeEbook";
import Faq from "./Faq";
import Conversation from "./Conversation";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Services from "./Services";
import Work from "./Work";
import WhyChooseUs from "./WhyChooseUs";

const Main = () => {
  return (
    <div className="w-full h-[120vh] bg-[#fce300] text-black font-leagueSpartan">
      <Navbar />
      <HeroSection />
      <FreeEbook />
      <Work />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Faq />
      <Footer />

      {/* Sticky WhatsApp Icon */}
      <div className="fixed bottom-16 right-6 z-50">
        <a
          href="https://wa.me/7303556175?text=Hello,%20I%20need%20assistance"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-3xl" /> {/* WhatsApp Icon */}
        </a>
      </div>

      {/* Sticky Call Icon */}
      <div className="fixed bottom-36 right-6 z-50">
        <a
          href="tel:+91 7303556175"
          className="inline-flex items-center justify-center bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          <FiPhone className="text-3xl" /> {/* Phone Icon */}
        </a>
      </div>
    </div>
  );
};

export default Main;
