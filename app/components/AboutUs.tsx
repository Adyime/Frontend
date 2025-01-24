import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-5xl font-bold text-[#fce300] text-center mb-12">
        About Us
      </h2>

      <p className="text-xl text-gray-600 text-center mb-12">
        We are a team of passionate professionals dedicated to delivering the
        best solutions. Our team consists of three partners, each bringing
        unique skills and experience to the table.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Partner 1 */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/partner1.jpg"
            alt="Partner 1"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Partner 1
          </h3>
          <p className="text-xl text-gray-600 mb-6">Role: CEO</p>
          <p className="text-lg text-gray-600">
            Partner 1 is the visionary behind our company. With a strong
            background in leadership and business strategy, they drive the
            direction of our operations and help us stay ahead of industry
            trends.
          </p>
        </div>

        {/* Partner 2 */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/partner2.jpg"
            alt="Partner 2"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Partner 2
          </h3>
          <p className="text-xl text-gray-600 mb-6">Role: CTO</p>
          <p className="text-lg text-gray-600">
            Partner 2 is the technical mastermind behind our innovative
            solutions. With a passion for technology and a background in
            software engineering, they lead our technical teams to deliver
            cutting-edge products.
          </p>
        </div>

        {/* Partner 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <img
            src="/partner3.jpg"
            alt="Partner 3"
            className="w-32 h-32 rounded-full mx-auto mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Partner 3
          </h3>
          <p className="text-xl text-gray-600 mb-6">Role: COO</p>
          <p className="text-lg text-gray-600">
            Partner 3 oversees our operations and ensures everything runs
            smoothly. Their background in business management allows them to
            streamline processes, optimize efficiency, and enhance customer
            satisfaction.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xl text-gray-700 mb-6">
          Together, we make sure that our company continues to grow, innovate,
          and provide top-notch solutions to our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
