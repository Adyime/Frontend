import React from "react";

const Conversation = () => {
  return (
    <div className="bg-white w-full py-6 sm:py-8 lg:py-10">
      <div className="conversation-container p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-[#fce300] to-[#fce300] rounded-xl shadow-2xl max-w-3xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-16 sm:px-6 px-4">
        <h2 className="text-3xl font-extrabold text-center text-black mb-8 sm:mb-10 animate__animated animate__fadeIn sm:text-2xl">
          Why You Need a Website for Your Business
        </h2>
        <div className="conversation space-y-6 sm:space-y-8">
          {/* Customer's First Message */}
          <div className="customer-message flex justify-start animate__animated animate__fadeIn">
            <div className="bg-white text-black-800 rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-500">Customer:</span> Why do I even
                need a website for my business?
              </p>
            </div>
          </div>

          {/* Business's Response */}
          <div className="business-message flex justify-end animate__animated animate__fadeIn animate__delay-1s">
            <div className="bg-black text-white rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-400">Business:</span> A website is
                essential in today’s digital age. It's a 24/7 online presence
                for your business, allowing you to reach customers globally and
                build trust with your audience.
              </p>
            </div>
          </div>

          {/* Customer's Next Question */}
          <div className="customer-message flex justify-start animate__animated animate__fadeIn animate__delay-2s">
            <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-500">Customer:</span> But I already
                have social media accounts. Isn't that enough?
              </p>
            </div>
          </div>

          {/* Business's Explanation */}
          <div className="business-message flex justify-end animate__animated animate__fadeIn animate__delay-3s">
            <div className="bg-black text-white rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-400">Business:</span> While social
                media is great for engagement, a website gives you full control
                over your brand's narrative, design, and content. It's your
                long-term asset that you can build on.
              </p>
            </div>
          </div>

          {/* Customer's Follow-up */}
          <div className="customer-message flex justify-start animate__animated animate__fadeIn animate__delay-4s">
            <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-500">Customer:</span> But I don't
                know where to start.
              </p>
            </div>
          </div>

          {/* Business's Reassurance */}
          <div className="business-message flex justify-end animate__animated animate__fadeIn animate__delay-5s">
            <div className="bg-black text-white rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-400">Business:</span> Don't worry!
                We'll guide you every step of the way—from design to
                functionality. We ensure that the process is smooth, fast, and
                stress-free.
              </p>
            </div>
          </div>

          {/* Customer's Agreement */}
          <div className="customer-message flex justify-start animate__animated animate__fadeIn animate__delay-6s">
            <div className="bg-white text-gray-800 rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-500">Customer:</span> Okay, let's
                do it!
              </p>
            </div>
          </div>

          {/* Business's Final Words */}
          <div className="business-message flex justify-end animate__animated animate__fadeIn animate__delay-7s">
            <div className="bg-black text-white rounded-xl p-4 sm:p-6 shadow-lg max-w-[90%] sm:max-w-[75%] transform hover:scale-105 transition-all duration-300">
              <p className="text-sm sm:text-lg font-medium">
                <span className="text-yellow-400">Business:</span> Great! We're
                excited to help your business grow online. Let's get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
