import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your web development agency offer?",
      answer:
        "We offer a range of services including custom website development, e-commerce solutions, mobile app development, UI/UX design, and website maintenance.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "The timeline depends on the complexity and requirements of the project. A simple website may take 2-4 weeks, while a more complex project can take 6-12 weeks or longer.",
    },
    {
      question: "Do you provide website maintenance after development?",
      answer:
        "Yes, we offer ongoing maintenance and support packages to ensure your website stays up-to-date, secure, and fully functional.",
    },
    {
      question: "Can you help with redesigning an existing website?",
      answer:
        "Absolutely! We specialize in modernizing and improving existing websites to enhance their design, functionality, and performance.",
    },
    {
      question: "What platforms and technologies do you use?",
      answer:
        "We work with a variety of technologies including React, Next.js, Node.js, WordPress, Shopify, and more. Our stack is tailored to meet the specific needs of each project.",
    },
  ];

  return (
    <div className="faq-container px-4 sm:px-6 lg:px-8 py-12 bg-[#fce300]">
      <h2 className="text-3xl sm:text-5xl font-extrabold text-center text-black mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-6 bg-white hover:bg-gray-100 text-left"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg sm:text-xl font-medium text-gray-800">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* This div will be toggled */}
            <div
              className={`${
                openIndex === index ? "block" : "hidden"
              } transition-all duration-300 p-6 bg-white`}
            >
              <p className="text-black text-base sm:text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
