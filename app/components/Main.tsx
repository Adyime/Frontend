import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FreeEbook from "./FreeEbook";

const Main = () => {
  return (
    <div className="w-full min-h-screen bg-[#fce300] text-black font-leagueSpartan">
      <Navbar />
      <HeroSection />
      <FreeEbook />
    </div>
  );
};

export default Main;
