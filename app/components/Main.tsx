import React from "react";
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
    </div>
  );
};

export default Main;
