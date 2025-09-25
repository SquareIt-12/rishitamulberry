import React, { useState } from "react";
import { Download } from "lucide-react";
import banner from "/images/rishita1.webp";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    const entry = {
      name: name.trim(),
      email: email.trim(),
      mobile: phone.trim(),
      timestamp: Date.now(),
      source: "hero_form",
    };

    try {
      await push(ref(database, "popupEnquiries"), entry);
      await push(ref(database, "allEnquiries"), entry);

      // brochure download
      const link = document.createElement("a");
      link.href = "/images/Serenity-brochure.pdf"; // ✅ apna path
      link.download = "Serenity-brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      navigate("/thanks");
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="hero" class="relative h-[90vh] flex items-center">
      <img
        src="/images/rishita1.webp"
        alt="Hero"
        fetchpriority="high"
        decoding="async"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative w-full h-full">
        <div className="absolute bottom-2 lg:flex lg:flex-col hidden lg:left-16 z-10 bg-black/50 px-10 py-2 rounded-lg shadow-lg">
          <h1 className="text-1xl font-bold text-white mb-2">
            RISHITA MULBERRY HEIGHTS
          </h1>
          <p className="text-base text-white mt-2">
            PREMIUM 2 & 3 BHK APARTMENTS
          </p>
          <p className="text-base text-white mt-2">PRICE: ON REQUEST</p>

          <div className="mt-3">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-medium flex items-center space-x-2 shadow-lg"
            >
              <Download size={18} />
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-gray-700">
              Enquiry Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-500 text-white rounded"
                >
                  Submit & Download
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
