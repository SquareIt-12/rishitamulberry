import { PhoneCall } from "lucide-react";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "/images/rishita-logo.png"; // Adjust the path as necessary

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center p-6 bg-white shadow-lg rounded-2xl border border-gray-200">
        {/* Logo */}
        <img
          className="mx-auto w-40 md:w-52 mb-6"
          src={Logo}
          alt="Rishita Logo"
        />

        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Thank <span className="text-orange-600">You!</span>
        </h3>
        <p className="text-lg text-gray-600 mt-4">
          Your submission has been received.
        </p>
        <p className="text-lg text-gray-600">
          We will get in touch with you shortly.
        </p>

        {/* Back Button */}
        <a
          href="/"
          className="inline-block mt-6 px-8 py-3 text-white font-semibold rounded-full bg-orange-500 shadow-md hover:bg-orange-600 transition-all duration-300"
        >
          Back To Home Page
        </a>

        {/* Contact Info */}
        <div className="mt-8 space-y-4">
          <div className="bg-yellow-400 border-2 border-yellow-500 rounded-md py-3 px-4 text-lg font-semibold text-gray-900">
            📞 Contact No:{" "}
            <a
              href="tel:+918808698649"
              className="text-white font-bold ml-2"
              style={{ textDecoration: "none" }}
            >
              +91 8808698649
            </a>
          </div>

          <div className="bg-green-600 border-2 border-green-700 rounded-md py-3 px-4 text-lg font-semibold text-white">
            ✉️ Email ID:{" "}
            <a
              href="mailto:mohanyadav8808@gmail.com"
              className="ml-2 text-white font-bold"
              style={{ textDecoration: "none" }}
            >
              mohanyadav8808@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Floating CTA Buttons */}
      <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+918808698649"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <PhoneCall className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/918808698649"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition duration-300"
        >
          <FaWhatsapp className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
