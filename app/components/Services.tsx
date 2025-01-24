import React from "react";
import { Link } from "react-router";

const Services = () => {
  return (
    <section className="bg-gray-50 py-24 px-5 md:px-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Our Expert Services
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          From sleek websites to results-driven digital marketing strategies, we
          offer a full range of services to grow your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Website Development */}
        <div className="bg-white p-8 shadow-2xl rounded-xl transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-6">
            <svg
              className="w-16 h-16 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm0 18a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Website Development
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Building fast, responsive, and visually stunning websites. From
            landing pages to e-commerce stores, we design with the user in mind.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Custom Designs
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> E-commerce
              Solutions
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> SEO Integration
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Mobile
              Optimization
            </li>
          </ul>
        </div>

        {/* Digital Marketing */}
        <div className="bg-white p-8 shadow-2xl rounded-xl transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-6">
            <svg
              className="w-16 h-16 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm0 18a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Digital Marketing
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Reach a wider audience with our data-driven marketing strategies.
            From paid ads to content marketing, we help you stand out in a
            crowded market.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Social Media
              Campaigns
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Paid Ad Management
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Content Creation
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Organic Growth
              Strategies
            </li>
          </ul>
        </div>

        {/* Branding & Strategy */}
        <div className="bg-white p-8 shadow-2xl rounded-xl transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-center mb-6">
            <svg
              className="w-16 h-16 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zm0 18a8 8 0 100-16 8 8 0 000 16zm0-4a4 4 0 100-8 4 4 0 000 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-4">
            Branding & Strategy
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Build a strong, memorable brand with our strategy services. We help
            you create a compelling narrative and a powerful visual identity.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Brand Positioning
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Visual Identity
              Design
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Market Research &
              Analysis
            </li>
            <li className="flex items-center text-gray-600">
              <span className="text-yellow-500 mr-2">✔</span> Growth Strategy
            </li>
          </ul>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="mt-20 text-center">
        <p className="text-lg text-gray-700 mb-8">
          Take your business to the next level with our expert services. Let's
          get started today!
        </p>
        <Link
          to="/contact" // Replace with actual contact page
          className="inline-block bg-yellow-500 text-white py-4 px-10 rounded-full text-xl font-semibold shadow-lg hover:bg-yellow-600 transform transition duration-300 hover:scale-105"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default Services;
