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
    <div className="">
      <HeroSection />
      <FreeEbook />
      <Work />
      <WhyChooseUs />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Main;
