import React from "react";
import floorPlanImg1 from "/images/floor3.jpg";
import floorPlanImg2 from "/images/floor2.jpg";
import Mulberry from "/images/Mulberry-brochure.pdf";
import Serenity from "/images/Serenity-brochure.pdf";
import { CheckCircle } from "lucide-react";

export default function FloorPlanSection() {
  const handleImageClick = () => {
    // You can implement image popup functionality here
    // For now, it will just open the image in a new tab
    window.open(floorPlanImg1, "_blank");
  };
  const handleImageClickOne = () => {
    // You can implement image popup functionality here
    // For now, it will just open the image in a new tab
    window.open(floorPlanImg2, "_blank");
  };
  const handleMulberry = () => {
    window.open(Mulberry, "_blank");
  };
  const handleSerenity = () => {
    window.open(Serenity, "_blank");
  };

  return (
    <section id="floorplan" className="block bg-gray-100 py-12 scroll-mt-20 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-orange-500 text-white/90 px-8 py-3 rounded-full text-2xl font-semibold shadow-lg">
            <CheckCircle className="w-6 h-6 mr-2" />
            Floor Plan
          </div>
        </div>

        <div className="w-full">
          <div className="property-wrapper">
            <div className="property">
              <button
                onClick={handleImageClick}
                className="image-popup block w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
              >
                <div className="image-wrapper">
                  <div className="text-center">
                    <img
                      src={floorPlanImg1}
                      loading="lazy"
                      alt="Mulberry Heights Floor Plan"
                      className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="property-wrapper">
            <div className="property">
              <button
                onClick={handleImageClickOne}
                className="image-popup block w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg overflow-hidden hover:opacity-90 transition-opacity duration-300"
              >
                <div className="image-wrapper">
                  <div className="text-center">
                    <img
                      src={floorPlanImg2}
                      loading="lazy"
                      alt="Mulberry Heights Floor Plan"
                      className="mx-auto max-w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-28 justify-between">
          <button
            onClick={handleMulberry}
            className="py-2 lg:p-3 bg-blue-300 lg:text-lg md:text-md text-xs font-semibold lg:w-full  text-black rounded-lg cursor-pointer mt-3 hover:bg-blue-400 "
          >
            Mulberry Heights Brochure
          </button>
          <button
            onClick={handleSerenity}
            className="py-2 lg:p-3 bg-blue-300 lg:text-lg md:text-md text-xs  text-black font-semibold rounded-lg lg:w-full cursor-pointer mt-3 hover:bg-blue-400 "
          >
            Serenity Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
