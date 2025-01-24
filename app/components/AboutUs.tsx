import { FaUserTie, FaCode, FaCogs } from "react-icons/fa"; // Importing React Icons
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "About Page", content: "Welcome to About Page!" },
  ];
}

const AboutUs = () => {
  return (
    <div className="bg-[#fce300] text-black py-20 px-6">
      <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
        About Us
      </h2>

      <p className="text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
        We are a team of passionate professionals dedicated to delivering the
        best solutions. Our team consists of three partners, each bringing
        unique skills and experience to the table. Together, we make sure that
        our company continues to grow, innovate, and provide top-notch solutions
        to our clients.
      </p>

      <div className="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Partner 1 */}
        <div className="bg-gradient-to-r from-[#fffbcc] to-[#ffde6b] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="flex justify-center items-center mb-6">
            <FaUserTie className="text-6xl text-gray-800" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Aditya Singh Rawat
          </h3>
          <p className="text-xl text-gray-600 mb-6 text-center">Role: CEO</p>
          <p className="text-lg text-gray-600 text-center">
            Aditya is the visionary behind our company. With a strong background
            in leadership and business strategy, they drive the direction of our
            operations and help us stay ahead of industry trends.
          </p>
        </div>

        {/* Partner 2 */}
        <div className="bg-gradient-to-r from-[#fffbcc] to-[#ffde6b] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="flex justify-center items-center mb-6">
            <FaCode className="text-6xl text-gray-800" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Anurag Singh Rawat
          </h3>
          <p className="text-xl text-gray-600 mb-6 text-center">Role: CTO</p>
          <p className="text-lg text-gray-600 text-center">
            Anurag is the technical mastermind behind our innovative solutions.
            With a passion for technology and a background in software
            engineering, they lead our technical teams to deliver cutting-edge
            products.
          </p>
        </div>

        {/* Partner 3 */}
        <div className="bg-gradient-to-r from-[#fffbcc] to-[#ffde6b] p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <div className="flex justify-center items-center mb-6">
            <FaCogs className="text-6xl text-gray-800" />
          </div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Nitin Singh Rawat
          </h3>
          <p className="text-xl text-gray-600 mb-6 text-center">Role: CMO</p>
          <p className="text-lg text-gray-600 text-center">
            Nitin oversees our operations and ensures everything runs smoothly.
            Their background in business management allows them to streamline
            processes, optimize efficiency, and enhance customer satisfaction.
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
