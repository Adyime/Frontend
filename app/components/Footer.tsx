import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import the icons from react-icons
import companyLogo from "../../public/Footer.png"; // Import your logo here
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black   text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Logo and company info */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-6">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">
              Company
            </h4>
            <ul>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/carrier"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/privacyPolicy"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/termsAndConditions"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">
              Services
            </h4>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">
              Contact
            </h4>
            <ul>
              <li className="mb-2">
                <a
                  href="mailto:contact.adyime@gmail.com"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  contact.adyime@gmail.com info@adyime.com
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  +91 73035 56175
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  Plot No 395 S-1 Sector 5 Vaishali, Ghaziabad, India, Uttar
                  Pradesh
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold text-yellow-400 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/p/19JzvcoWLg/"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaFacebookF size={24} /> {/* React icon for Facebook */}
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaTwitter size={24} /> {/* React icon for Twitter */}
              </a>
              <a
                href="https://www.instagram.com/adyime__/"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaInstagram size={24} /> {/* React icon for Instagram */}
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                <FaLinkedinIn size={24} /> {/* React icon for LinkedIn */}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Adyime. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
