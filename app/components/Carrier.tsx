import React from "react";
import { Link } from "react-router"; // or use 'next/link' if you're using Next.js

const Carrier = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#fce300] text-black py-16">
      <h1 className="text-5xl font-bold text-center mb-6">We're Hiring!</h1>
      <p className="text-xl md:text-2xl text-center mb-6">
        Our careers page is coming soon. Stay tuned for exciting opportunities.
      </p>
      <div className="flex items-center space-x-4">
        <span className="text-4xl">⏳</span>
        <p className="text-xl">Coming Soon...</p>
      </div>
      <div className="mt-8">
        <p className="text-lg text-center">
          In the meantime, feel free to reach out to us at{" "}
          <a
            href="mailto:careers@example.com"
            className="text-black font-semibold hover:underline"
          >
            contact.adyime@gmail.com
          </a>
        </p>
      </div>

      {/* Link to homepage */}
      <div className="mt-6">
        <Link
          to="/"
          className="text-lg font-semibold text-black hover:underline"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default Carrier;
