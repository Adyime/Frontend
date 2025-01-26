import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"; // React Icon for close button
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Enquiry" },
    { name: "Enquiry Page", content: "Welcome to Enquiry Page!" },
  ];
}

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [step, setStep] = useState(1);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    "Step 1: Name",
    "Step 2: Email",
    "Step 3: Phone",
    "Step 4: Message",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage("");
    setResponseMessage("");
  };

  const validateField = (): boolean => {
    const { name, email, phoneNumber, message } = formData;

    switch (step) {
      case 1:
        if (!name.trim()) {
          setErrorMessage("Name is required!");
          return false;
        }
        break;
      case 2:
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
          setErrorMessage("Please enter a valid email address!");
          return false;
        }
        break;
      case 3:
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
          setErrorMessage("Please enter a valid 10-digit phone number!");
          return false;
        }
        break;
      case 4:
        if (!message.trim()) {
          setErrorMessage("Message is required!");
          return false;
        }
        break;
      default:
        break;
    }

    setErrorMessage("");
    return true;
  };

  const handleNextStep = () => {
    if (validateField()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateField()) {
      try {
        const res = await fetch("https://www.website.adyime.com/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setResponseMessage("Your enquiry has been submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
          setStep(1);
          setTimeout(() => {
            setIsModalOpen(false); // Close the modal after 3 seconds
          }, 3000);
        } else {
          setResponseMessage("There was an error submitting your enquiry.");
        }
      } catch (error) {
        setResponseMessage("There was an error submitting your enquiry.");
      }
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        );
      case 2:
        return (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        );
      case 3:
        return (
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
        );
      case 4:
        return (
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-md shadow-sm"
              rows={4}
              required
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  // Emoji change logic based on step
  const getEmoji = () => {
    if (step === 1) return "😞"; // Sad emoji at the start
    if (step === 2) return "😐"; // Neutral emoji
    if (step === 3) return "😊"; // Happy emoji at 3rd step
    return "😁"; // Very happy emoji at final step
  };

  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#fce300] p-4 md:p-6 lg:p-8 rounded-lg shadow-md w-[80vw] max-w-md sm:max-w-lg md:max-w-xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold mb-6">Yes I want a Website</h2>
              <AiOutlineClose
                onClick={() => setIsModalOpen(false)}
                className="text-xl text-gray-500 cursor-pointer"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                {/* Progress Line */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="h-2.5 bg-green-600 rounded-full"
                    style={{ width: `${(step / steps.length) * 100}%` }}
                  ></div>
                </div>

                {/* Display the emoji */}
                <div className="text-center text-4xl mb-4">{getEmoji()}</div>

                {renderStepContent()}
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}

              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    className="py-2 px-4 bg-gray-300 text-black rounded-md"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </button>
                )}
                {step < steps.length ? (
                  <button
                    type="button"
                    className="py-2 px-4 bg-black text-white rounded-md hover:bg-black"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
            {responseMessage && (
              <p className="mt-4 text-center text-lg">{responseMessage}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InquiryForm;
