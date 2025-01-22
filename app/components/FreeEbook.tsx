import React, { useState } from "react";
import { useNavigate } from "react-router";

const FreeEbook = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/send-ebook-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Redirect after a delay
        setTimeout(() => {
          navigate("/services"); // Replace with your service page URL
        }, 3000);
      } else {
        // Handle error
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Error: " + error.message);
    } finally {
      setIsLoading(false); // Hide loading after the API call finishes
    }
  };

  return (
    <section className="bg-white py-20 px-5 md:px-20 flex items-center justify-center">
      <div className="w-full md:w-[50vw] text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          Get Your Free Ebook:{" "}
          <span className="text-[#fce300]">How to Skyrocket Your Sales</span>
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          Unlock the secrets to boosting your business with our exclusive
          10-page guide. Learn actionable strategies to drive sales and grow
          your brand.
        </p>

        {isSubmitted ? (
          <div className="mt-8 text-lg text-green-500">
            <p>Thank you for subscribing! Check your email for the ebook.</p>
          </div>
        ) : (
          <form
            className="mt-8 flex flex-col md:flex-row items-center gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 py-3 px-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#fce300] text-black hover:bg-yellow-600 transition-all duration-300 py-3 px-6 rounded-lg text-lg font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Download Now"}
            </button>
          </form>
        )}

        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default FreeEbook;
