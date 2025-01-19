import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center mb-7">
      <div className="w-[90vw] sm:w-[50vw] flex items-center bg-white shadow-xl rounded-2xl justify-between mt-6 p-4">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-16 sm:w-20 m-0 p-0" />
        <p className="text-sm sm:text-base font-bold">+91 73035 56175</p>
        {/* Menu Text */}
        <p className="font-bold font-leagueSpartan text-sm sm:text-xl cursor-pointer">
          <RiMenu3Line />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
