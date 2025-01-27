import React, { useState, useEffect } from "react";

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
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

  const validateFields = (): boolean => {
    const { name, email, phoneNumber, message } = formData;

    if (!name.trim()) {
      setErrorMessage("Name is required!");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address!");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
      setErrorMessage("Please enter a valid 10-digit phone number!");
      return false;
    }

    if (!message.trim()) {
      setErrorMessage("Message is required!");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateFields()) {
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
            message: "",
          });
          // Close the modal after successful submission
          setTimeout(() => {
            setIsModalOpen(false);
          }, 1500);
        } else {
          setResponseMessage("There was an error sending your message.");
        }
      } catch (error) {
        setResponseMessage("There was an error sending your message.");
      }
    }
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 md:p-10 rounded-lg shadow-md w-full max-w-lg mx-4 sm:mx-6 lg:mx-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Yes I want a Website!
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
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

              <div className="mb-4">
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

              <div className="mb-4">
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

              <div className="mb-4">
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
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                  rows={4}
                  required
                ></textarea>
              </div>

              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}

              <button
                type="submit"
                className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </form>

            {responseMessage && (
              <p className="mt-4 text-center text-lg">{responseMessage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InquiryForm;