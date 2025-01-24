import React from "react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from React Icons
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FreeEbook from "./FreeEbook";
import Faq from "./Faq";
import Conversation from "./Conversation";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="w-full h-[120vh] bg-[#fce300] text-black font-leagueSpartan">
      <Navbar />
      <HeroSection />
      <FreeEbook />
      <Conversation />
      <Testimonials />
      <Faq />
      <Footer />

      {/* Sticky WhatsApp Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/9958626705?text=Hello,%20I%20need%20assistance"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-3xl" /> {/* WhatsApp Icon */}
        </a>
      </div>
    </div>
  );
};

export default Main;
