import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

// Images
import gall1 from "/images/gall1.avif";
import gall2 from "/images/gall2.avif";
import gall3 from "/images/gall3.avif";
import gall4 from "/images/gall4.avif";
import gall5 from "/images/ris1.avif";
import gall6 from "/images/ris2.avif";
import gall8 from "/images/ris4.avif";
import gall9 from "/images/ris5.jpg";
import gall13 from "/images/ris9.jpg";
import gall14 from "/images/ris10.jpg";
import gall15 from "/images/ris11.jpg";

export default function GallerySection() {
  const allGalleryImages = [
    { src: gall1, alt: "Gallery 1" },
    { src: gall2, alt: "Gallery 2" },
    { src: gall3, alt: "Gallery 3" },
    { src: gall4, alt: "Gallery 4" },
    { src: gall5, alt: "Gallery 5" },
    { src: gall6, alt: "Gallery 6" },
    { src: gall8, alt: "Gallery 8" },
    { src: gall9, alt: "Gallery 9" },
    { src: gall13, alt: "Gallery 13" },
    { src: gall14, alt: "Gallery 14" },
    { src: gall15, alt: "Gallery 15" },
  ];

  const [popupIndex, setPopupIndex] = useState(null);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);
  const showPrev = () =>
    setPopupIndex((prevIndex) => (prevIndex - 1 + allGalleryImages.length) % allGalleryImages.length);
  const showNext = () =>
    setPopupIndex((prevIndex) => (prevIndex + 1) % allGalleryImages.length);

  return (
    <section id="gallery" className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-orange-500 text-white/90 px-8 py-3 rounded-full text-2xl font-semibold shadow-lg">
            <CheckCircle className="w-6 h-6 mr-2" />
            Gallery
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {allGalleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openPopup(index)}
              className="group overflow-hidden rounded-lg focus:outline-none"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-40 sm:h-44 md:h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {popupIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-90 p-4 sm:p-8"
          onClick={closePopup}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={allGalleryImages[popupIndex].src}
              alt={allGalleryImages[popupIndex].alt}
              className="w-full h-auto max-h-[85vh] rounded-lg object-contain shadow-xl"
            />
            {/* Controls */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 -translate-y-1/2">
              <button
                onClick={showPrev}
                className="bg-white/80 hover:bg-white text-black px-3 py-1 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-md"
              >
                Prev
              </button>
              <button
                onClick={showNext}
                className="bg-white/80 hover:bg-white text-black px-3 py-1 sm:px-5 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-md"
              >
                Next
              </button>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={closePopup}
            className="mt-4 text-white bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-medium"
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}
