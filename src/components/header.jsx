import React, { useEffect, useState } from "react";
import { Menu, X, Phone, Download } from "lucide-react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Logo from "/images/rishita-logo.png";
import brochure1 from "/images/Mulberry-brochure.pdf";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const reraHeight = 10;
      setIsScrolled(window.scrollY > reraHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "#" },
    { name: "Overview", href: "#overview" },
    { name: "Features", href: "#features" },
    { name: "Floor Plan", href: "#floorplan" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const handleDownloadClick = () => {
    setShowEnquiryModal(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const { name, email, mobile } = form;

    const entry = {
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      timestamp: Date.now(),
      source: "header_form",
    };

    try {
      // ✅ Save to Firebase
      await push(ref(database, "popupEnquiries"), entry);
      await push(ref(database, "allEnquiries"), entry);

      toast.success("Form submitted successfully!");

      setShowEnquiryModal(false);
      setForm({ name: "", email: "", mobile: "" });

      // ✅ Start brochure download
      const link = document.createElement("a");
      link.href = brochure1;
      link.download = "Mulberry-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // ✅ Redirect to thank you page
      setTimeout(() => {
        navigate("/thanks");
      }, 500);
    } catch (error) {
      console.error("Error while submitting:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  const closeModal = () => {
    setShowEnquiryModal(false);
    setForm({ name: "", email: "", mobile: "" });
  };

  return (
    <>
      {/* RERA section */}
      <div className="bg-orange-500 flex items-center justify-between px-4 py-2 text-xs sm:text-sm text-white">
        <span className="lg:text-md md:text-md text-sm">
          Rera no: UPRERAAGT17933
        </span>
        <a
          href="tel:+918750488908"
          className="bg-white text-orange-500 px-3 py-1 rounded-full flex items-center gap-2"
        >
          <Phone size={16} />
          <span>+91 8750488908</span>
        </a>
      </div>

      {/* Header */}
      <header
        className={`fixed left-0 right-0 bg-white shadow-sm z-50 border-b border-gray-100 transition-all duration-300 ${
          isScrolled ? "top-0" : "top-11"
        }`}
      >
        <div className="max-w-7xl py-2 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <img src={Logo} alt="Logo" className="h-32 w-32 object-contain" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-md font-serif text-gray-900 hover:text-orange-500 focus:text-orange-400 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Download Button (Desktop) */}
            <div className="hidden lg:flex">
              <button
                onClick={handleDownloadClick}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Download size={16} />
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-orange-500 p-2 rounded-md"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100">
              <div className="py-2 space-y-1 bg-white">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-orange-500 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="px-4 py-3">
                  <button
                    onClick={() => {
                      handleDownloadClick();
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center justify-center space-x-2 w-full shadow-lg"
                  >
                    <Download size={16} />
                    <span>Download Brochure</span>
                  </button>
                </div>

                <div className="px-4 py-3">
                  <a
                    href="tel:+917234008553"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center justify-center space-x-2 w-full"
                  >
                    <Phone size={16} />
                    <span>+91 7234008553</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enquiry Modal */}
      {showEnquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 backdrop-blur-[6px] bg-black/50"
            onClick={closeModal}
          ></div>

          <div className="relative bg-white shadow-2xl p-6 rounded-xl w-[400px] mx-auto border-2 border-orange-400">
            <div className="flex justify-center mb-4">
              <img src={Logo} alt="Logo" className="h-12 w-auto" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-orange-600">
                DOWNLOAD BROCHURE
              </h2>
              <button onClick={closeModal}>
                <X className="text-red-600 absolute top-2 right-2 cursor-pointer w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile*"
                className="w-full mb-4 p-3 border border-orange-300 rounded bg-orange-50 placeholder-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded flex items-center justify-center space-x-2"
              >
                <Download size={18} />
                <span>DOWNLOAD BROCHURE</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
