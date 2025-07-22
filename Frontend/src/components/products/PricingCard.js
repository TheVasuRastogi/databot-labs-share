import React from "react";
import { FaRobot, FaMapMarkedAlt, FaArrowsAltH, FaHandRock, FaCheckCircle } from "react-icons/fa";

const iconMap = {
  "Arm Only": <FaRobot className="text-4xl text-white" />,
  "Mobile SLAM Base": <FaMapMarkedAlt className="text-4xl text-white" />,
  "Linear Slider Rail": <FaArrowsAltH className="text-4xl text-white" />,
  "Gripper": <FaHandRock className="text-4xl text-white" />,
};

const badgeMap = {
  "Arm Only": { text: "Most Popular", color: "from-blue-500 to-purple-500" },
  "Mobile SLAM Base": { text: "Best Seller", color: "from-yellow-400 to-pink-500" },
};

export default function PricingCard({ product }) {
  const badge = badgeMap[product.title];
  return (
    <div
      className={`relative bg-gradient-to-br from-black/60 to-gray-900/80 border border-white/20 rounded-3xl shadow-xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
        badge ? "ring-2 ring-blue-400/60" : ""
      }`}
      tabIndex={0}
      aria-label={product.title}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`absolute top-4 right-4 bg-gradient-to-r ${badge.color} text-white text-xs px-3 py-1 rounded-full font-bold shadow transition-all duration-300`}
        >
          {badge.text}
        </span>
      )}
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
          {iconMap[product.title]}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
      <div className="text-3xl font-extrabold text-blue-400 mb-2">{product.price}</div>
      <p className="text-white/80 mb-4">{product.description}</p>
      <h4 className="text-blue-300 font-semibold mb-1">Key Features</h4>
      <ul className="mb-4 space-y-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center text-white/90">
            <FaCheckCircle className="text-blue-400 mr-2" /> {f}
          </li>
        ))}
      </ul>
      <h4 className="text-blue-300 font-semibold mb-1">Technical Specs</h4>
      <ul className="text-white/80 text-sm grid grid-cols-2 gap-x-4 gap-y-1 mb-6">
        {Object.entries(product.specs).map(([k, v]) => (
          <li key={k}>
            <span className="font-semibold">{k}:</span> {v}
          </li>
        ))}
      </ul>
      <button
        className="mt-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 rounded-full text-center shadow hover:from-blue-600 hover:to-purple-600 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => window.location.href = product.link}
        aria-label={`Learn more about ${product.title}`}
      >
        Learn More
      </button>
    </div>
  );
} 