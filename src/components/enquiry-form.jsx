import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import { database } from "../firebase";
import { ref, push } from "firebase/database";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function EnquiryFormPopup() {
  const [showForm, setShowForm] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile } = form;

    const entry = {
      name: name.trim(),
      email: email.trim(),
      mobile: mobile.trim(),
      timestamp: Date.now(),
      source: "floating_form",
    };

    try {
      await push(ref(database, "popupEnquiries"), entry);
      await push(ref(database, "allEnquiries"), entry);

      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", mobile: "" });

      navigate("/thanks"); // ✅ only redirect, no brochure
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed cursor-pointer bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4"
        title="Express Interest"
      >
        <Mail className="w-6 h-6" />
      </button>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 backdrop-blur-[6px] bg-black/50"
            onClick={() => setShowForm(false)}
          ></div>

          <div className="relative bg-white shadow-2xl p-6 rounded-xl w-[400px] mx-auto border-2 border-orange-400">
            <div className="flex justify-center mb-4">
              <img src="/images/rishita-logo.webp" alt="Logo" className="h-12 w-auto" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-orange-600">EXPRESS YOUR INTEREST</h2>
              <button onClick={() => setShowForm(false)}>
                <X className="text-red-600 absolute top-2 right-2 cursor-pointer w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name*"
                className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full mb-3 p-3 border border-orange-300 rounded bg-orange-50"
              />
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile*"
                className="w-full mb-4 p-3 border border-orange-300 rounded bg-orange-50"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}

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
