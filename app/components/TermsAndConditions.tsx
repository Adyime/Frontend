import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-5 md:px-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Terms and Conditions
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Welcome to [Your Agency Name]. These Terms and Conditions outline the
          rules and regulations for the use of our services. By accessing or
          using our services, you agree to comply with these terms.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              1. Introduction
            </h2>
            <p className="text-lg text-gray-700">
              These Terms and Conditions govern the use of the services provided
              by [Your Agency Name]. By accessing or using our services, you
              agree to these terms and conditions. If you do not agree, you may
              not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              2. Services Provided
            </h2>
            <p className="text-lg text-gray-700">
              We offer web development, design, digital marketing, and other
              related services to help businesses grow online. A detailed
              description of our services can be found on our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              3. Payment Terms
            </h2>
            <p className="text-lg text-gray-700">
              Payment for services must be made as per the terms mentioned in
              the individual contracts. All payments are non-refundable unless
              stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              4. Client Responsibilities
            </h2>
            <p className="text-lg text-gray-700">
              As a client, you are responsible for providing accurate and timely
              information required for the completion of services. Failure to do
              so may result in delays or additional charges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              5. Privacy Policy
            </h2>
            <p className="text-lg text-gray-700">
              We value your privacy. Please refer to our Privacy Policy for
              information on how we collect, use, and protect your personal
              data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-lg text-gray-700">
              Our liability is limited to the amount paid for the services. We
              are not liable for any indirect, incidental, or consequential
              damages arising out of the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              7. Termination
            </h2>
            <p className="text-lg text-gray-700">
              Either party may terminate the agreement with notice. Upon
              termination, you will be responsible for any unpaid charges for
              services rendered up to that point.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              8. Governing Law
            </h2>
            <p className="text-lg text-gray-700">
              These Terms and Conditions are governed by the laws of [Your
              Country/State]. Any disputes will be resolved in the jurisdiction
              of [Your City/State].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-lg text-gray-700">
              We reserve the right to modify or update these Terms and
              Conditions at any time. Any changes will be communicated through
              our website or directly to clients.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">
              10. Contact Information
            </h2>
            <p className="text-lg text-gray-700">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Email:{" "}
              <a
                href="mailto:contact@youragency.com"
                className="text-blue-500 hover:underline"
              >
                contact.adyime@gmail.com{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
