import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router"; // Use this if you're using React Router

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full flex items-center justify-center mb-7">
      <Link
        to={"/"}
        className="w-[90vw] sm:w-[50vw] flex items-center bg-white shadow-xl rounded-2xl justify-between mt-6 p-4"
      >
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-16 sm:w-20 m-0 p-0" />
        <p className="text-sm sm:text-base font-bold">+91 73035 56175</p>
        {/* Menu Button */}
        <p
          className="font-bold font-leagueSpartan text-sm sm:text-xl cursor-pointer"
          onClick={toggleMenu}
        >
          <RiMenu3Line />
        </p>
      </Link>

      {/* Menu Content */}
      {menuOpen && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-6 rounded-lg w-[90vw] sm:w-[50vw] mt-4">
          <ul className="space-y-4 text-lg font-semibold">
            <li>
              <Link
                to="/"
                className="cursor-pointer hover:text-[#fce300]"
                onClick={() => setMenuOpen(false)} // Close the menu on link click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="cursor-pointer hover:text-[#fce300]"
                onClick={() => setMenuOpen(false)} // Close the menu on link click
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="cursor-pointer hover:text-[#fce300]"
                onClick={() => setMenuOpen(false)} // Close the menu on link click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="cursor-pointer hover:text-[#fce300]"
                onClick={() => setMenuOpen(false)} // Close the menu on link click
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
