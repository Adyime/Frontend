import React, { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const duration = 2000; // Duration in milliseconds
  const end1 = 5; // Years of Excellence
  const end2 = 100; // Projects Done
  const end3 = 98; // Success Rate
  const end4 = 5; // Professional Team

  // Custom counter logic
  const startCounting = (setCount, end) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1); // Ensures the counter stops at 'end'
      setCount(Math.floor(progress * end));

      if (progress === 1) {
        clearInterval(timer); // Stop the timer when the counter reaches 'end'
      }
    }, 10); // Updates every 10ms
  };

  useEffect(() => {
    startCounting(setCount1, end1);
    startCounting(setCount2, end2);
    startCounting(setCount3, end3);
    startCounting(setCount4, end4);
  }, []);

  return (
    <section className="py-20 px-5 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Why Choose Us?
        </h2>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-semibold text-[#fce300] mb-4">
              {count1}
            </h3>
            <p className="text-xl font-medium text-gray-600">
              Years of Excellence
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-semibold text-[#fce300] mb-4">
              {count2.toLocaleString()}+
            </h3>
            <p className="text-xl font-medium text-gray-600">Projects Done</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-semibold text-[#fce300] mb-4">
              {count3}%
            </h3>
            <p className="text-xl font-medium text-gray-600">Success Rate</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-semibold text-[#fce300] mb-4">
              {count4}
            </h3>
            <p className="text-xl font-medium text-gray-600">
              Professional Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
