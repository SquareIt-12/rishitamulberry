import React from "react";
import { CheckCircle } from "lucide-react"; // Step 1: import icon (optional)

export default function OverviewSection() {
  return (
    <section
      className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      id="overview"
    >
      <div className="max-w-6xl mx-auto">
        {/* Overview Heading with background & icon */}
        <div className="text-center mb-8">
          <div className="px-6 py-2">
            <div className="inline-flex items-center bg-orange-500 text-white/90 px-8 py-3 rounded-full text-2xl font-semibold shadow-lg">
              <CheckCircle className="w-6 h-6 mr-2" />
              Rishita Mulberry Heights Overview
            </div>
          </div>
        </div>

        {/* Content Text */}
        <div className="max-w-5xl mx-auto">
          <p className="text-black text-base sm:text-md leading-relaxed text-justify  tracking-wide">
            Mulberry Heights is envisioned as a future-ready residential
            community that combines modern living with serene surroundings,
            offering a perfect blend of comfort, luxury, and sustainability.
            Designed with long -term livability in mind, the township features
            thoughtfully planned residential towers surrounded by expansive
            green spaces, landscaped gardens, and well-laid internal roads. Over
            the years, Mulberry Heights is set to evolve into a self-sufficient
            micro-township that caters to every aspect of urban lifestyle—be it
            recreation, fitness, community living, or security. With
            state-of-the-art amenities such as a clubhouse, fitness zones,
            children's play areas, and walking tracks, the project ensures a
            holistic living experience for families across generations. The
            strategic location, likely in a rapidly developing corridor,
            promises strong connectivity, appreciation in property value, and
            accessibility to schools, healthcare, and commercial hubs. As urban
            living continues to grow in complexity, Mulberry Heights offers a
            long-term vision of a peaceful, well-connected, and vibrant
            community where residents can thrive for years to come.
          </p>
        </div>
      </div>
    </section>
  );
}
