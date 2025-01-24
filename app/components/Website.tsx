import React from "react";

const Website = () => {
  return (
    <div className="bg-white py-20 px-4 text-center">
      <h2 className="text-4xl font-bold text-[#fce300] mb-8">
        Create Your Perfect Website with Us
      </h2>

      <div className="max-w-7xl mx-auto text-left space-y-8">
        {/* Introduction */}
        <section>
          <p className="text-xl text-gray-700 mb-8">
            At [Your Company Name], we build stunning, functional websites
            tailored to your business needs. Whether you’re looking for a sleek
            portfolio, a full-scale e-commerce platform, or a personal blog, we
            craft websites that captivate and convert.
          </p>
        </section>

        {/* Website Types Cards */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Website Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Portfolio Websites
            </h3>
            <p className="text-gray-600 mb-4">
              Showcase your work with a beautifully designed portfolio website.
              Perfect for artists, photographers, and professionals looking to
              make a statement.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Responsive Design</li>
              <li>Easy to Update</li>
              <li>Modern Layouts</li>
            </ul>
          </div>

          {/* E-commerce Website Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              E-Commerce Websites
            </h3>
            <p className="text-gray-600 mb-4">
              Take your business online with a custom e-commerce platform. From
              product listings to secure payment gateways, we create seamless
              shopping experiences.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Fully Integrated Store</li>
              <li>Secure Payment Processing</li>
              <li>SEO Optimized</li>
            </ul>
          </div>

          {/* Blog Website Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Blog Websites
            </h3>
            <p className="text-gray-600 mb-4">
              Share your thoughts with the world through a clean, customizable
              blog website. Ideal for writers, influencers, and thought leaders.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Customizable Themes</li>
              <li>Content Management</li>
              <li>Fast Loading Speed</li>
            </ul>
          </div>

          {/* Business Website Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Business Websites
            </h3>
            <p className="text-gray-600 mb-4">
              Establish your online presence with a professional business
              website. We design websites that reflect your brand and convert
              visitors into clients.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Custom Branding</li>
              <li>Lead Generation Forms</li>
              <li>Mobile Friendly</li>
            </ul>
          </div>

          {/* Educational Website Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Educational Websites
            </h3>
            <p className="text-gray-600 mb-4">
              Build a platform for your courses, tutorials, or educational
              content. We create interactive and engaging websites for learning
              institutions and individuals.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Learning Management System (LMS)</li>
              <li>Course Catalog</li>
              <li>Quiz & Certification Integration</li>
            </ul>
          </div>

          {/* Nonprofit Website Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Nonprofit Websites
            </h3>
            <p className="text-gray-600 mb-4">
              Help your cause stand out with a nonprofit website designed to
              engage supporters and drive donations.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>Donation Integration</li>
              <li>Volunteer Sign-Ups</li>
              <li>Event Management</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12">
          <p className="text-lg text-gray-700 mb-4">
            Ready to create a website that reflects your brand and helps you
            succeed? Let’s start your project today!
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#fce300] text-black py-3 px-8 rounded-lg mt-4 hover:bg-yellow-400 transition-colors"
          >
            Get In Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default Website;
