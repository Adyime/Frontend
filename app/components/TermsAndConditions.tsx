import React from "react";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TermsAndConditions" },
    {
      name: "TermsAndConditions Page",
      content: "Welcome to TermsAndConditions Page!",
    },
  ];
}

const TermsAndConditions = () => {
  return (
    <section className="min-h-screen bg-[#fce300] py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto shadow-xl bg-white rounded-lg p-8 md:p-12">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-12">
          Terms and Conditions
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center">
          Welcome to <span className="font-bold">Adyime</span>. These Terms and
          Conditions outline the rules and regulations for the use of our
          services. By accessing or using our services, you agree to comply with
          these terms.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These Terms and Conditions govern the use of the services provided
              by <span className="font-bold">Adyime</span>. By accessing or
              using our services, you agree to these terms and conditions. If
              you do not agree, you may not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              2. Services Provided
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We offer web development, design, digital marketing, and other
              related services to help businesses grow online. A detailed
              description of our services can be found on our website.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              3. Payment Terms
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Payment for services must be made as per the terms mentioned in
              the individual contracts. All payments are non-refundable unless
              stated otherwise.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              4. Client Responsibilities
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a client, you are responsible for providing accurate and timely
              information required for the completion of services. Failure to do
              so may result in delays or additional charges.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              5. Privacy Policy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We value your privacy. Please refer to our Privacy Policy for
              information on how we collect, use, and protect your personal
              data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our liability is limited to the amount paid for the services. We
              are not liable for any indirect, incidental, or consequential
              damages arising out of the use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              7. Termination
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Either party may terminate the agreement with notice. Upon
              termination, you will be responsible for any unpaid charges for
              services rendered up to that point.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              8. Governing Law
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              These Terms and Conditions are governed by the laws of{" "}
              <span className="font-bold">[Your Country/State]</span>. Any
              disputes will be resolved in the jurisdiction of{" "}
              <span className="font-bold">[Your City/State]</span>.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We reserve the right to modify or update these Terms and
              Conditions at any time. Any changes will be communicated through
              our website or directly to clients.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              10. Contact Information
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Email:{" "}
              <a
                href="mailto:contact.adyime@gmail.com"
                className="text-blue-500 hover:underline"
              >
                contact.adyime@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
