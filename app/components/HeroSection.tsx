import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="py-20 px-5 md:px-20 flex items-center justify-center">
      <div className="max-w-7xl w-full md:w-[50vw] lg:w-1/2 text-center md:text-left">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight  text-black">
            Transforming Ideas Into Stunning{" "}
            <span className="text-red-600">Websites—</span>Effortlessly
          </h1>
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
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
          <div className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap">
            <Link
              to="/services"
              className="bg-white text-black hover:bg-black hover:text-white transition-all duration-300 py-3 px-6 rounded-lg text-lg font-semibold"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="bg-black text-white hover:bg-white-500 hover:text-black hover:bg-white transition-all duration-300 py-3 px-6 rounded-lg text-lg font-semibold"
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
