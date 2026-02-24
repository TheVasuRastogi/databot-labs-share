import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaClock,
  FaCogs,
  FaCrown,
  FaEuroSign,
  FaCheckCircle,
  FaRobot,
  FaSpinner,
  FaMicrochip,
  FaCode,
  FaEye,
  FaBolt,
} from 'react-icons/fa';
import SEOHelmet from '../components/common/SEOHelmet';

const SPLINE_SCENE_URL = 'https://prod.spline.design/2mDF77eks5-m3PtF/scene.splinecode';

const featuredProducts = [
  {
    id: '1',
    name: 'Goliath ShowRobot - Advanced',
    category: 'Retailautomatisering',
    image: '/images/goliath_alum.jpg',
    shortDesc: '24/7 inzetbaar met programmeerbare intelligentie en precisie-automatisering.',
  },
  {
    id: '2',
    name: 'Goliath - Mobiele Assistent',
    category: 'Automatisering',
    image: '/images/goliath_mobile.jpg',
    shortDesc: 'Geavanceerd mobiel systeem met robotarm en programmeerbare intelligentie.',
  },
  {
    id: '3',
    name: 'Goliath Linear Railed',
    category: 'Automatisering',
    image: '/images/goliath_linear.jpg',
    shortDesc: 'Krachtige retailautomatisering met 24/7 inzet.',
  },
];

const keyPoints = [
  { title: '24/7 inzetbaar', stat: 'Uptime', icon: FaClock },
  { title: 'Programmeerbaar', stat: 'Intelligent', icon: FaCogs },
  { title: 'Toonaangevend', stat: 'Technologie', icon: FaCrown },
  { title: 'Kosteneffectief', stat: 'ROI', icon: FaEuroSign },
];

const technologies = [
  { name: 'ROS / ROS2', desc: 'Robot Operating System', icon: FaCogs },
  { name: 'MoveIt 2', desc: 'Motion planning', icon: FaRobot },
  { name: 'AI & Vision', desc: 'Perception & recognition', icon: FaEye },
  { name: 'Python / C++', desc: 'Control & integration', icon: FaCode },
  { name: 'LIDAR & Sensors', desc: 'Navigation & safety', icon: FaMicrochip },
  { name: 'Industrial IoT', desc: 'Connectivity & monitoring', icon: FaBolt },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 * i },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const [splineReady, setSplineReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.SplineViewer) {
      setSplineReady(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.32/build/spline-viewer.js';
    script.type = 'module';
    script.async = true;
    script.onload = () => setSplineReady(true);
    script.onerror = () => setSplineReady(false);
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-black overflow-x-hidden">
      <SEOHelmet
        title="DataBot Labs - Robotics & Automation"
        description="DataBot Labs delivers advanced robotics and automation for retail and industry. 24/7 operation, programmable intelligence, and precision engineering."
        keywords="DataBot Labs, robotics, automation, retail, industry, AI, ROS, 24/7"
      />

      {/* Hero: center layout, enough top padding so navbar is always visible */}
      <section className="relative pt-24 lg:pt-28 pb-12 flex flex-col items-center text-center gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 overflow-visible min-h-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:64px_64px] pointer-events-none" />

        {/* Centered copy */}
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center py-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-medium text-black/80 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            DataBot Labs
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-4 leading-[1.1]"
          >
            Robotica &<br />
            <span className="text-gray-600">Automatisering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-xl mb-8"
          >
            Geavanceerde robotica-oplossingen voor retail en industrie. 24/7 inzetbaar, programmeerbare intelligentie en precisie-engineering uit Nederland.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              Bekijk producten
              <FaArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-black/20 text-black font-semibold rounded-xl hover:bg-black/5 transition-colors"
            >
              Neem contact op
            </Link>
          </motion.div>
        </div>

        {/* Centered 3D robot viewer — capped height so navbar + hero text stay visible */}
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-200 shadow-xl"
            style={{
              minHeight: 240,
              height: 'clamp(240px, 42vh, 420px)',
            }}
          >
            {splineReady ? (
              <spline-viewer
                hint
                loading-anim-type="spinner-small-light"
                url={SPLINE_SCENE_URL}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                <FaSpinner className="w-10 h-10 animate-spin mb-3" />
                <FaRobot className="w-14 h-14 opacity-50" />
                <span className="text-sm mt-2">3D-model laden...</span>
              </div>
            )}
          </motion.div>
          <p className="text-sm text-gray-500 mt-3">
            Interact met het 3D-model
          </p>
        </div>
      </section>

      {/* Product preview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Onze producten
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ontdek ons aanbod retail- en industriële automatisering.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredProducts.map((product, index) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Link
                  to={`/products/${product.id}`}
                  className="group block h-full bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-black mt-1 mb-2 group-hover:text-gray-700">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {product.shortDesc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-black group-hover:gap-2 transition-all">
                      Bekijk details
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-black font-semibold hover:gap-3 transition-all"
            >
              Alle producten bekijken
              <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key points strip */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-gray-700">
                  <point.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-black">{point.title}</div>
                  <div className="text-sm text-gray-600">{point.stat}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-black mb-3">
              Technologies we use
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our solutions are built on industry-standard frameworks and tools for reliable, scalable robotics and automation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-gray-200 bg-gray-50/50 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-black/5 flex items-center justify-center text-gray-700">
                  <tech.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-black">{tech.name}</div>
                  <div className="text-sm text-gray-600">{tech.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gray-50 border border-gray-200 p-10 sm:p-14"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
              Klaar om te automatiseren?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Neem contact op voor een demo of een offerte op maat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                Neem contact op
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-black font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                Bekijk producten
              </Link>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
              {keyPoints.map((p) => (
                <span key={p.title} className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {p.title}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
