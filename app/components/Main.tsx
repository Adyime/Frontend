import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Main = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat text-black font-leagueSpartan"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundColor: "#fce300",
      }}
    >
      <div className="  min-h-screen">
        <Navbar />
        <div className="flex justify-center items-center">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Main;
