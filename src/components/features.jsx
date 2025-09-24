import React from "react";
import {
  Users,
  ShieldCheck,
  Power,
  Car,
  TreeDeciduous,
  Wifi,
  CheckCircle,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Club",
      description: "House High End Club house with modern facilities",
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Security System",
      description:
        "Gated Community, Access Control at entrance, CCTV surveillance",
      icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Power Back-up",
      description: "24/7 electricity backup for common and residential areas",
      icon: <Power className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Ample Parking",
      description: "Basement / Open Car Parking",
      icon: <Car className="w-10 h-10 text-yellow-500" />,
    },
    {
      title: "Landscape",
      description:
        "Lush Green Parks with Jogging Tracks / Fountains / Water Bodies",
      icon: <TreeDeciduous className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Connectivity",
      description: "Wi-Fi enabled Campus",
      icon: <Wifi className="w-10 h-10 text-orange-500" />,
    },
  ];

  return (
    <section
      className="relative py-20 px-4"
      id="features"
    >
      {/* ✅ Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/rishita1.jpg" // yaha apna background image daalna
          alt="Features Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-orange-900/70"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <header className="mb-12 flex justify-center">
          <div className="inline-flex items-center bg-white/90 text-orange-600 px-8 py-3 rounded-full text-2xl font-bold shadow-lg">
            <CheckCircle className="w-6 h-6 mr-2" />
            Our Features
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white/90 border border-orange-100 rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
