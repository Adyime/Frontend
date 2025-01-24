import React from "react";
import { Link } from "react-router"; // Correct import for React Router

const Services = () => {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-5xl font-bold text-[#fce300] text-center mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Website Development Service */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6 text-left">
            Website Development
          </h3>
          <p className="text-xl text-gray-600 mb-6 text-left">
            We specialize in creating stunning, responsive websites that are
            built to scale. From custom designs to seamless user experiences, we
            ensure your website stands out in the digital world. We offer
            various types of websites:
          </p>
          <ul className="text-xl text-gray-600 mb-6 list-none pl-6 text-left">
            <li>✅ Portfolio Websites</li>
            <li>✅ E-commerce Websites</li>
            <li>✅ Business Websites</li>
            <li>✅ Blog Websites</li>
            <li>✅ Nonprofit Websites</li>
          </ul>
        </div>

        {/* Digital Marketing Service */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h3 className="text-4xl font-semibold text-gray-800 mb-6 text-left">
            Digital Marketing
          </h3>
          <p className="text-xl text-gray-600 mb-6 text-left">
            Elevate your brand's online presence with our expert digital
            marketing services. From SEO to social media management, we help you
            reach and engage your target audience effectively. Our marketing
            services include:
          </p>
          <ul className="text-xl text-gray-600 mb-6 list-none pl-6 text-left">
            <li>✅ Search Engine Optimization (SEO)</li>
            <li>✅ Pay-Per-Click (PPC) Advertising</li>
            <li>✅ Social Media Marketing</li>
            <li>✅ Email Marketing</li>
            <li>✅ Content Creation & Management</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl text-gray-700 mb-6">
          Ready to take your business to the next level?{" "}
          <strong>Contact us</strong> today, and let's discuss how we can help
          you achieve your goals with our expert services.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#fce300] text-black py-3 px-8 rounded-lg mt-4 hover:bg-yellow-400 transition-colors"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
};

export default Services;
