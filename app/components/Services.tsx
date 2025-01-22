import React from "react";
import { Link } from "react-router";

const Services = () => {
  return (
    <section className="bg-[#fce300] py-20 px-5 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Our Services
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          We provide cutting-edge solutions to help your business grow online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Website Development */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-black">
            Website Development
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            We build responsive, user-friendly websites tailored to your
            business needs. Whether you need an e-commerce platform, a
            portfolio, or a corporate website, we’ve got you covered.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              Custom Website Design
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              E-commerce Development
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              SEO Optimization
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              Mobile-Responsive Layouts
            </li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-black">
            Digital Marketing
          </h3>
          <p className="mt-4 text-lg text-gray-700">
            Our digital marketing services are designed to drive traffic,
            increase conversions, and boost your online presence. From social
            media to paid ads, we handle it all.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              Social Media Marketing
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              Pay-Per-Click Advertising
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              Content Marketing & Strategy
            </li>
            <li className="flex items-center text-lg text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span>
              Search Engine Optimization (SEO)
            </li>
          </ul>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          Ready to take your business to the next level? Let’s get started
          today!
        </p>
        <Link
          to="/contact" // Replace with actual contact page
          className="mt-4 inline-block bg-yellow-500 text-black py-3 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Services;
