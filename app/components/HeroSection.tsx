import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <div className="text-black  w-full md:mt-10 md:min-h-screen flex items-center flex-col px-4 sm:px-8">
      <div className="text-left text-5xl tracking-wide font-bold  w-[90vw] md:text-7xl md:w-[50vw]">
        <h1 className="leading-tight sm:leading-normal ">Hi,</h1>
        <h1 className="leading-tight sm:leading-normal">We make</h1>
        <h1 className="leading-tight sm:leading-normal">Websites that</h1>
        <h1 className="leading-tight sm:leading-normal">Speaks</h1>
        <Link to={"/contact"}>
          <button className="mt-8 px-6 py-3 bg-white font-semibold text-lg rounded-md shadow-md animate-shake transition duration-300  hover:bg-black hover:text-[#fce300] hover:shadow-lg">
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
