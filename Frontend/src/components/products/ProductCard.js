import React from "react";
import { FaCheckCircle, FaRobot } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({
  title,
  name,
  category,
  rating,
  description,
  features,
  specs,
  cta,
  highlight,
}) => (
  <div
    className={`relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(80,80,255,0.25)] hover:ring-2 hover:ring-blue-400 hover:-rotate-1 group overflow-hidden ${
      highlight ? "ring-2 ring-blue-500" : ""
    }`}
    style={{ minHeight: 420 }}
  >
    {/* Animated Gradient Glow Overlay */}
    <div className="absolute inset-0 rounded-3xl pointer-events-none z-0 bg-gradient-to-br from-purple-500/10 via-blue-400/10 to-blue-300/10 blur-2xl opacity-80 group-hover:opacity-100 transition-all duration-500 animate-gradient-slow" />
    {/* Product Image */}
    {image && (
      <div className="mb-4 relative z-10">
        <img src={image} alt={title || name} className="rounded-xl w-full aspect-[16/10] h-64 object-cover shadow-lg border border-white/10" />
      </div>
    )}
    {/* Special icon for Arm Only */}
    {title === 'Arm Only' && (
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
          <FaRobot className="text-4xl text-white drop-shadow-lg" />
        </span>
      </div>
    )}
    {highlight && (
      <span className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow">
        Most Popular
      </span>
    )}
    {/* Title */}
    <h3 className="text-2xl font-extrabold text-white mb-1 z-10">{title || name}</h3>
    {/* Category */}
    {category && <div className="text-sm text-blue-200 mb-1 z-10 italic font-mono">{category}</div>}
    {/* Rating */}
    {rating && (
      <div className="flex items-center gap-1 text-yellow-400 mb-2 z-10">
        <span className="text-lg">★</span>
        <span className="text-white text-base font-semibold">{rating}</span>
      </div>
    )}
    {/* Description */}
    {description && <p className="text-white/80 mb-4 z-10">{description}</p>}
    {/* Features */}
    {features && features.length > 0 && (
      <div className="z-10">
        <h4 className="text-blue-300 font-semibold mb-1">Key Features</h4>
        <ul className="mb-4 space-y-1">
          {features.map((f, i) => (
            <li key={i} className="flex items-center text-white/90">
              <FaCheckCircle className="text-blue-400 mr-2" /> {f}
            </li>
          ))}
        </ul>
      </div>
    )}
    {/* Specs */}
    {specs && Object.keys(specs).length > 0 && (
      <div className="z-10">
        <h4 className="text-blue-300 font-semibold mb-1">Technical Specs</h4>
        <ul className="text-white/80 text-sm grid grid-cols-2 gap-x-4 gap-y-1 mb-6">
          {Object.entries(specs).map(([k, v]) => (
            <li key={k}>
              <span className="font-semibold">{k}:</span> {v}
            </li>
          ))}
        </ul>
      </div>
    )}
    {/* CTA Button */}
    <div className="mt-auto pt-4 z-10">
      <Link
        to={cta && cta.link ? cta.link : "#"}
        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-lg group/button"
      >
        View Details
        <span className="ml-2 transition-transform group-hover/button:translate-x-1">→</span>
      </Link>
    </div>
  </div>
);

export default ProductCard; 