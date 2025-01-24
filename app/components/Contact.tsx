import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [step, setStep] = useState(1);
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const steps = ["Name", "Email", "Phone", "Subject"];

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
    const { name, email, phoneNumber, subject } = formData;

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
        if (!subject.trim()) {
          setErrorMessage("Subject is required!");
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
          setResponseMessage("Your message has been sent successfully!");
          setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            subject: "",
            message: "",
          });
          setStep(1);
        } else {
          setResponseMessage("There was an error sending your message.");
        }
      } catch (error) {
        setResponseMessage("There was an error sending your message.");
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
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
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
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
          </div>
        );
      case 4:
        return (
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              required
            />
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mt-4"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              rows={4}
              required
            ></textarea>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-cover bg-center bg-[#fce300] font-leagueSpartan font-bold w-full h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full p-2 text-left text-4xl leading-tight tracking-wide font-bold lg:w-[55vw] md:text-center md:text-5xl mb-10">
        <h1> Guaranteed Sales and Leads with Our Eye Catching Websites </h1>
      </div>
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>

        {/* Progress Bar */}
        <div className="relative flex items-center mb-6">
          {steps.map((label, index) => (
            <React.Fragment key={index}>
              <div
                className={`h-8 w-8 flex items-center justify-center rounded-full ${
                  index <= step - 1
                    ? "bg-green-600 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 transition-all duration-500 ${
                    index < step - 1 ? "bg-green-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">{renderStepContent()}</div>

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
                className="py-2 px-4 bg-black text-white rounded-md hover:bg-black "
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
  );
};

export default Contact;
