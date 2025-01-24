import React from "react";
import { Link } from "react-router";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services" },
    { name: "Service Page", content: "Welcome to Service Page!" },
  ];
} // Correct import for React Router

const Services = () => {
  return (
    <div className=" bg-[#fce300] py-36 px-6">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Website Development Service */}
        <div className="bg-gradient-to-r from-[#fffbcc] to-[#ffde6b] p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-left">
            Website Development
          </h3>
          <p className="text-lg text-gray-700 mb-6 text-left leading-relaxed">
            We specialize in creating stunning, responsive websites that are
            built to scale. From custom designs to seamless user experiences, we
            ensure your website stands out in the digital world. We offer
            various types of websites:
          </p>
          <ul className="text-lg text-gray-700 mb-6 list-none text-left space-y-2">
            <li>✅ Portfolio Websites</li>
            <li>✅ E-commerce Websites</li>
            <li>✅ Business Websites</li>
            <li>✅ Blog Websites</li>
            <li>✅ Nonprofit Websites</li>
          </ul>
        </div>

        {/* Digital Marketing Service */}
        <div className="bg-gradient-to-r from-[#fffbcc] to-[#ffde6b] p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-left">
            Digital Marketing
          </h3>
          <p className="text-lg text-gray-700 mb-6 text-left leading-relaxed">
            Elevate your brand's online presence with our expert digital
            marketing services. From SEO to social media management, we help you
            reach and engage your target audience effectively. Our marketing
            services include:
          </p>
          <ul className="text-lg text-gray-700 mb-6 list-none  text-left space-y-2">
            <li>✅ Search Engine Optimization</li>
            <li>✅ Pay-Per-Click Advertising</li>
            <li>✅ Social Media Marketing</li>
            <li>✅ Email Marketing</li>
            <li>✅ Content Creation & Management</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
          Ready to take your business to the next level?{" "}
          <strong>Contact us</strong> today, and let's discuss how we can help
          you achieve your goals with our expert services.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-black py-3 px-8 rounded-full mt-4 hover:bg-yellow-400 transition-colors text-lg font-bold transform hover:scale-110"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Services;
