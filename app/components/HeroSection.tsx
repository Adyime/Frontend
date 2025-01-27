import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="py-20 px-5 md:px-20 flex items-center justify-center">
      <div className="max-w-7xl w-full text-center">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl md:text-9xl font-bold leading-tight text-black">
            Website at <span className="text-green-600">₹1999</span>
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <p className="text-lg md:text-xl text-black font-semibold">
              ✵ E-Commerce
            </p>
            <p className="text-lg md:text-xl text-black font-semibold">
              ✵ Portfolio
            </p>
            <p className="text-lg md:text-xl text-black font-semibold">
              ✵ Landing Page
            </p>
            <p className="text-lg md:text-xl text-black font-semibold">
              ✵ Informative Sites
            </p>
            <p className="text-lg md:text-xl text-black font-semibold">
              ✵ Many More
            </p>
          </div>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="bg-black text-white hover:text-black hover:bg-white transition-all duration-300 py-3 px-6 rounded-lg text-lg font-semibold"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
