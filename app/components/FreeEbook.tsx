import { useState } from "react";
import { motion } from "framer-motion";
import { useRouteError } from "react-router";

const FreeEbook = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouteError();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://www.website.adyime.com/send-ebook-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        // Redirect after a delay
        setTimeout(() => {
          router.push("/services"); // Replace with your service page URL
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <section className="bg-white py-20 px-5 md:px-20 flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1 }}
        className="absolute -left-20 top-0 w-40 h-40 rounded-full bg-[#fce300]"
      />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute -right-20 bottom-0 w-60 h-60 rounded-full bg-[#fce300]"
      />

      <motion.div
        className="w-full md:w-[50vw] text-left z-10 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-black"
          variants={itemVariants}
        >
          Get Your Free Ebook:{" "}
          <motion.span
            className="text-[#fce300] relative inline-block"
            initial={{ textShadow: "0px 0px 0px rgba(252, 227, 0, 0)" }}
            animate={{ textShadow: "0px 0px 8px rgba(252, 227, 0, 0.3)" }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            How to Skyrocket Your Sales
          </motion.span>
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700"
          variants={itemVariants}
        >
          Unlock the secrets to boosting your business with our exclusive
          10-page guide. Learn actionable strategies to drive sales and grow
          your brand.
        </motion.p>

        {isSubmitted ? (
          <motion.div
            className="mt-8 p-6 bg-green-50 border border-green-100 rounded-lg"
            variants={successVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-green-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </motion.div>
            <motion.p
              className="text-lg text-center text-green-700 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Thank you for subscribing!
            </motion.p>
            <motion.p
              className="text-center text-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Check your email for the ebook. Redirecting you shortly...
            </motion.p>
          </motion.div>
        ) : (
          <motion.form
            className="mt-8 flex flex-col md:flex-row items-center gap-4"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            <motion.div
              className="w-full md:w-2/3 relative"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#fce300]"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-[#fce300]"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full md:w-auto bg-[#fce300] text-black hover:bg-yellow-400 transition-all duration-300 py-3 px-6 rounded-lg text-lg font-semibold relative overflow-hidden"
              disabled={isLoading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    className="inline-block h-4 w-4 mr-2 rounded-full border-2 border-t-transparent border-black"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </span>
              ) : (
                <>
                  <motion.span
                    className="absolute inset-0 bg-yellow-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Download Now</span>
                </>
              )}
            </motion.button>
          </motion.form>
        )}

        {error && (
          <motion.p
            className="mt-4 text-red-500 bg-red-50 p-3 rounded-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.p>
        )}

        <motion.div className="mt-6 flex items-center" variants={itemVariants}>
          <motion.div
            className="flex items-center mr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#fce300]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
          <motion.p
            className="text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            No spam, unsubscribe anytime
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FreeEbook;
