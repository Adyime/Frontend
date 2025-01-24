import React from "react";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PrivacyPolicy" },
    { name: "PrivacyPolicy Page", content: "Welcome to PrivacyPolicy Page!" },
  ];
} // Correct import for React Router

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-[#fce300] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-slate-100">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Privacy Policy
        </h1>

        <div className="space-y-12 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-lg leading-relaxed">
              Welcome to Adyime! We value your privacy and are committed to
              protecting your personal data. This Privacy Policy explains how we
              collect, use, disclose, and protect your information when you
              visit our website, use our services, or interact with us in other
              ways.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Information We Collect
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We may collect personal information in various ways, including
              when you visit our website, request services, or interact with us.
              The types of information we collect include:
            </p>
            <ul className="list-disc pl-8 text-lg space-y-3">
              <li>
                Contact Information (e.g., name, email address, phone number)
              </li>
              <li>
                Account Information (e.g., username, password, billing
                information)
              </li>
              <li>
                Website Usage Data (e.g., IP address, browser type, device
                information, and usage statistics)
              </li>
              <li>
                Payment Information (if applicable, for purchases or
                subscriptions)
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How We Use Your Information
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We use the information we collect to provide and improve our
              services, as well as to communicate with you. Specifically, we may
              use your information for:
            </p>
            <ul className="list-disc pl-8 text-lg space-y-3">
              <li>Providing services and support</li>
              <li>Personalizing your experience on our website</li>
              <li>Processing transactions and managing payments</li>
              <li>Improving website functionality and user experience</li>
              <li>
                Sending updates, newsletters, and promotional content (if you've
                opted in)
              </li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          {/* How We Protect Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              How We Protect Your Information
            </h2>
            <p className="text-lg leading-relaxed">
              We implement a variety of security measures to ensure the
              protection of your personal information, including encryption,
              firewalls, and secure servers. However, please note that no method
              of transmission over the internet or method of electronic storage
              is 100% secure.
            </p>
          </section>

          {/* Sharing Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Sharing Your Information
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information in the following
              circumstances:
            </p>
            <ul className="list-disc pl-8 text-lg space-y-3">
              <li>
                With service providers who assist us in delivering our services
                (e.g., payment processors, email marketing platforms)
              </li>
              <li>If required by law, regulation, or legal process</li>
              <li>
                To protect our rights, property, and safety, and the rights,
                property, and safety of others
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-lg leading-relaxed">
              Our website may use cookies, web beacons, and other tracking
              technologies to enhance your browsing experience, analyze website
              traffic, and personalize content. You can adjust your browser
              settings to block cookies, but this may affect your ability to use
              certain features of the website.
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Rights and Choices
            </h2>
            <p className="text-lg leading-relaxed">
              You have the right to access, correct, or delete your personal
              information. You may also opt-out of receiving marketing
              communications at any time. To exercise these rights or if you
              have any concerns about how we handle your information, please
              contact us at [your contact email or phone number].
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Third-Party Links
            </h2>
            <p className="text-lg leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these third-party sites.
              We encourage you to review the privacy policies of any external
              websites before providing your personal information.
            </p>
          </section>

          {/* Changes to This Privacy Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Changes to This Privacy Policy
            </h2>
            <p className="text-lg leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. Any updates will
              be posted on this page, and the effective date of the changes will
              be noted at the top of the policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Us
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or
              how we handle your personal information, please contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:support@example.com" className="text-yellow-500">
                contact.adyime@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+1234567890" className="text-yellow-500">
                +91 73035 56175{" "}
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
