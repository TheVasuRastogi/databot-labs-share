import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCogs,
  FaCrown,
  FaEuroSign,
  FaPlay,
  FaStar,
  FaTimes,
} from 'react-icons/fa';
import SEOHelmet from '../components/common/SEOHelmet';
import { getProductImage } from '../utils/productImages';

const CONTENT_WIDTH = 'max-w-6xl';

const detailTabs = [
  { id: 'features', label: 'Features' },
  { id: 'specs', label: 'Specifications' },
  { id: 'technical', label: 'Technical details' },
];

const products = {
  '1': {
    name: 'Goliath ShowRobot - Advanced',
    category: 'Retail Automation',
    image: getProductImage('1'),
    video: '/videos/robot-motion.mp4',
    rating: 5.0,
    highlights: ['Armlengte: 1,04 m', 'Totale reikwijdte: 84 m', 'Precisie: ±0,1 mm', 'ROS2-compatibel'],
    description:
      'Revolutionary retail automation solution from ShowRobot Netherlands, featuring 24/7 operation, programmable intelligence, and exclusive technology for modern retail environments.',
    seoTitle: 'ShowRobot Netherlands - Advanced Retail Automation | DataBot Labs',
    seoDescription:
      'Discover ShowRobot Netherlands cutting-edge retail automation solutions. 24/7 operation, programmable intelligence, and exclusive technology for modern retail environments.',
    seoKeywords:
      'ShowRobot Netherlands, retail automation, 24/7 operation, programmable robots, exclusive technology, Netherlands robotics, retail solutions',
    specs: {
      arm: {
        title: 'Robotic Arm Specifications',
        items: [
          { label: 'Arm Length', value: '1.04 meters' },
          { label: 'Weight', value: '17 kg' },
          { label: 'Frame', value: 'Aluminum alloy + steel reinforcement' },
          { label: 'Joints', value: 'Hardened bearings (angular/crossed roller)' },
          { label: 'Actuators', value: 'NEMA 17/23 closed-loop steppers' },
          { label: 'End Effector', value: 'ISO 9409-1 compatible steel flange' },
        ],
      },
      rail: {
        title: 'Linear Rail System',
        items: [
          { label: 'Standard Length', value: '1 meter' },
          { label: 'Extended Length', value: 'Up to 2.5 meters' },
          { label: 'Guide Type', value: 'HIWIN heavy-duty profile' },
          { label: 'Drive', value: 'NEMA 23 stepper/servo' },
          { label: 'Accuracy', value: '±0.05 mm with encoder' },
          { label: 'Base', value: 'Rigid aluminum/steel plate' },
        ],
      },
      combined: {
        title: 'Combined System Features',
        items: [
          { label: 'Total Reach (1m)', value: '~2.04 meters' },
          { label: 'Total Reach (2.5m)', value: '~3.54 meters' },
          { label: 'Arm Payload', value: '~5 kg' },
          { label: 'Rail Speed', value: '0.5–1 m/s' },
          { label: 'System Repeatability', value: '±0.1 mm' },
          { label: 'Control System', value: 'TMC5160 + STM32F466RET6' },
        ],
      },
    },
    features: [
      {
        title: '24/7 Operation',
        icon: FaClock,
        description:
          'Continuous retail automation with zero downtime, perfect for ShowRobot Netherlands retail environments.',
      },
      {
        title: 'Programmable Intelligence',
        icon: FaCogs,
        description: 'Advanced AI programming for custom retail automation tasks and customer interaction.',
      },
      {
        title: 'Exclusive Technology',
        icon: FaCrown,
        description: 'Proprietary ShowRobot Netherlands technology with cutting-edge retail automation capabilities.',
      },
      {
        title: 'Flexible commercial options',
        icon: FaEuroSign,
        description: 'Rental, purchase, and service contract options — contact us for pricing.',
      },
    ],
    pricing: {
      rental: {
        title: 'Rental Option',
        features: [
          'Full system access',
          '24/7 technical support',
          'Regular maintenance included',
          'Upgrade options available',
          'Flexible contract terms',
        ],
        popular: false,
      },
      purchase: {
        title: 'Purchase',
        features: [
          'Complete ownership',
          'Lifetime warranty',
          'Free software updates',
          'Training included',
          'Custom configuration',
        ],
        popular: true,
      },
      service: {
        title: 'Service Contract',
        features: [
          'Full maintenance service',
          'Priority support',
          'Performance optimization',
          'Remote monitoring',
          'Emergency response',
        ],
        popular: false,
      },
    },
    technical: {
      construction: [
        'Aluminum alloy frame with steel reinforcement',
        'Hardened bearings for minimal backlash',
        'HIWIN profile guide rail system',
        'Preloaded ball bearings carriage',
        'Rigid mounting system',
        'Integrated cable management',
      ],
      control: [
        'TMC5160 motor drivers',
        'STM32F466RET6 controller',
        'Closed-loop stepper control',
        'Encoder feedback system',
        'Custom G-code support',
        'ROS2 Moveit2 integration',
      ],
      software: [
        'ROS 2 (Humble/Iron) compatible',
        'MoveIt 2 motion planning',
        'Custom path planning',
        'Real-time monitoring',
        'Advanced safety features',
        'Cloud integration ready',
      ],
    },
  },
  '2': {
    name: 'Goliath - Mobiele Assistent',
    category: 'Automation',
    image: getProductImage('2'),
    video: '/videos/robot-motion.mp4',
    rating: 4.9,
    highlights: ['Afmetingen: 68×42×30 cm', 'Gewicht: 35 kg', '4× 80W BLDC-motoren', 'LIDAR-navigatie'],
    description:
      'Advanced mobile retail automation system from ShowRobot Netherlands, featuring 24/7 customer service, programmable navigation, and exclusive retail technology.',
    seoTitle: 'ShowRobot Netherlands - Mobile Retail Assistant | DataBot Labs',
    seoDescription:
      'Experience ShowRobot Netherlands mobile retail automation with 24/7 operation, programmable intelligence, and exclusive technology for retail environments.',
    seoKeywords:
      'ShowRobot Netherlands, mobile retail automation, 24/7 operation, programmable robots, retail assistant, Netherlands robotics',
    specs: {
      physical: {
        title: 'Physical Specifications',
        items: [
          { label: 'Dimensions', value: '12×12×8 cm (L×W×H)' },
          { label: 'Weight', value: '2.5 kg' },
          { label: 'Material', value: 'Anodized Aluminum + Hardened Steel' },
          { label: 'Mounting', value: 'Standard ISO flange or customizable adapter' },
          { label: 'Rotation Range', value: '±180 degrees' },
          { label: 'Sealing', value: 'IP65-rated housing' },
        ],
      },
      drive: {
        title: 'Drive System',
        items: [
          { label: 'Motor Type', value: 'High-torque BLDC/Servo motor' },
          { label: 'Gearbox', value: 'Precision Harmonic Drive' },
          { label: 'Torque', value: 'Up to 75 Nm continuous' },
          { label: 'Encoder', value: 'Absolute rotary encoder' },
          { label: 'Controller', value: 'Integrated CANopen/RS485' },
          { label: 'Voltage', value: '24V/48V compatible' },
        ],
      },
      sensors: {
        title: 'Sensor Suite',
        items: [
          { label: 'Position Feedback', value: 'High-resolution encoder' },
          { label: 'Torque Sensing', value: 'Optional integrated torque sensor' },
          { label: 'Temperature', value: 'Internal thermal monitoring' },
          { label: 'Vibration', value: 'Built-in vibration detection' },
          { label: 'Limit Detection', value: 'Programmable electronic limits' },
          { label: 'Health Monitoring', value: 'Real-time diagnostics' },
        ],
      },
    },
    features: [
      {
        title: '24/7 Operation',
        icon: FaClock,
        description:
          'Continuous mobile retail automation with zero downtime for ShowRobot Netherlands environments.',
      },
      {
        title: 'Programmable Intelligence',
        icon: FaCogs,
        description: 'Advanced AI programming for custom retail automation and customer interaction tasks.',
      },
      {
        title: 'Exclusive Technology',
        icon: FaCrown,
        description: 'Proprietary ShowRobot Netherlands mobile technology with cutting-edge retail capabilities.',
      },
      {
        title: 'Flexible commercial options',
        icon: FaEuroSign,
        description: 'Rental, purchase, and service contract options — contact us for pricing.',
      },
    ],
    pricing: {
      rental: {
        title: 'Rental Option',
        features: [
          'Full mobile system access',
          '24/7 technical support',
          'Regular maintenance included',
          'Upgrade options available',
          'Flexible contract terms',
        ],
        popular: false,
      },
      purchase: {
        title: 'Purchase',
        features: [
          'Complete ownership',
          'Lifetime warranty',
          'Free software updates',
          'Training included',
          'Custom configuration',
        ],
        popular: true,
      },
      service: {
        title: 'Service Contract',
        features: [
          'Full maintenance service',
          'Priority support',
          'Performance optimization',
          'Remote monitoring',
          'Emergency response',
        ],
        popular: false,
      },
    },
    technical: {
      chassis: [
        'Compact and robust harmonic gearbox',
        'Low backlash for precise movement',
        'ISO standard mounting flange',
        'Integrated cable routing',
        'IP65-sealed housing for dust and moisture protection',
      ],
      electronics: [
        'High-resolution absolute encoder',
        'Integrated motor driver with safety features',
        'Temperature and vibration sensors',
        'CANopen and RS485 communication interfaces',
        'Optional torque sensing module',
      ],
      software: [
        'Compatible with ROS and industrial PLCs',
        'Supports trajectory planning',
        'Real-time feedback and diagnostics',
        'Torque and speed control modes',
        'Programmable soft limits',
      ],
    },
  },
  '3': {
    name: 'Goliath Linear Railed',
    category: 'Automation',
    image: getProductImage('3'),
    video: '/videos/robot-motion.mp4',
    rating: 4.8,
    highlights: ['Lengte: 1,04 m', 'Gewicht: 17 kg', 'Industriekwaliteit', 'Hoge precisie'],
    description:
      'High-strength retail automation system from ShowRobot Netherlands, built for 24/7 operation, programmable intelligence, and exclusive retail technology.',
    seoTitle: 'ShowRobot Netherlands - Fixed Retail Automation | DataBot Labs',
    seoDescription:
      'Discover ShowRobot Netherlands fixed retail automation with 24/7 operation, programmable intelligence, and exclusive technology for retail environments.',
    seoKeywords:
      'ShowRobot Netherlands, fixed retail automation, 24/7 operation, programmable robots, retail technology, Netherlands robotics',
    specs: {
      physical: {
        title: 'Physical Specifications',
        items: [
          { label: 'Length', value: '1.04 meters' },
          { label: 'Weight', value: '17 kg' },
          { label: 'Frame', value: 'Aluminum + Steel' },
          { label: 'Mount', value: 'ISO 9409-1' },
          { label: 'Payload', value: '5 kg' },
          { label: 'Precision', value: 'High accuracy' },
        ],
      },
      motors: {
        title: 'Motor & Control',
        items: [
          { label: 'Motors', value: 'Industrial-grade, closed-loop' },
          { label: 'Control', value: 'Closed-loop stepper/servo' },
          { label: 'Feedback', value: 'Encoder feedback' },
        ],
      },
    },
    features: [
      {
        title: '24/7 Operation',
        icon: FaClock,
        description:
          'Continuous fixed retail automation with zero downtime for ShowRobot Netherlands environments.',
      },
      {
        title: 'Programmable Intelligence',
        icon: FaCogs,
        description: 'Advanced AI programming for custom retail automation and precision tasks.',
      },
      {
        title: 'Exclusive Technology',
        icon: FaCrown,
        description: 'Proprietary ShowRobot Netherlands fixed automation technology with cutting-edge capabilities.',
      },
      {
        title: 'Flexible commercial options',
        icon: FaEuroSign,
        description: 'Rental, purchase, and service contract options — contact us for pricing.',
      },
    ],
    pricing: {
      rental: {
        title: 'Rental Option',
        features: [
          'Full fixed system access',
          '24/7 technical support',
          'Regular maintenance included',
          'Upgrade options available',
          'Flexible contract terms',
        ],
        popular: false,
      },
      purchase: {
        title: 'Purchase',
        features: [
          'Complete ownership',
          'Lifetime warranty',
          'Free software updates',
          'Training included',
          'Custom configuration',
        ],
        popular: true,
      },
      service: {
        title: 'Service Contract',
        features: [
          'Full maintenance service',
          'Priority support',
          'Performance optimization',
          'Remote monitoring',
          'Emergency response',
        ],
        popular: false,
      },
    },
    technical: {
      construction: [
        'Aluminum and steel frame',
        'ISO 9409-1 mounting flange',
        'Industrial-grade bearings',
        'Low maintenance design',
      ],
      electronics: [
        'Closed-loop stepper/servo motors',
        'Encoder feedback system',
        'Industrial control interface',
      ],
      software: [
        'Compatible with ROS and industrial PLCs',
        'Supports trajectory planning',
        'Real-time feedback and diagnostics',
      ],
    },
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('features');
  const [showVideo, setShowVideo] = useState(false);

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen w-full bg-[#f7f8fa] text-[#1a1a1a] flex items-center justify-center px-4 pt-24">
        <div className="max-w-md rounded-2xl border border-[#e8eaed] bg-white p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <h1 className="text-2xl font-bold text-[#1a1a1a]">Product not found</h1>
          <p className="mt-2 text-sm text-[#525252]">This product is not available or the link may be outdated.</p>
          <Link
            to="/products"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f1419] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1a222d] transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#f7f8fa] text-[#1a1a1a]">
      <SEOHelmet
        title={product.seoTitle || `${product.name} | DataBot Labs`}
        description={product.seoDescription || product.description}
        keywords={product.seoKeywords || 'robots, AI, automation, retail automation, DataBot Labs'}
      />

      <section className="relative overflow-hidden bg-[#0f1419] text-white pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#151c24] to-[#0f1419]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7f8fa] to-transparent pointer-events-none" />

        <div className={`container mx-auto px-4 sm:px-6 ${CONTENT_WIDTH} relative z-10`}>
          <nav className="flex flex-wrap items-center gap-2 text-sm text-white/65" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden>/</span>
            <Link to="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white">{product.name}</span>
          </nav>

          <Link
            to="/products"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 hover:text-white transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back to products
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {product.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <FaStar className="text-amber-400" />
                  {product.rating}
                </span>
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/75">
                {product.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0f1419] hover:bg-white/90 transition-colors"
              >
                Request a quote
                <FaArrowRight className="text-xs" />
              </Link>
              {product.video && (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors"
                >
                  <FaPlay className="text-xs" />
                  Watch demo
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={`container mx-auto px-4 sm:px-6 ${CONTENT_WIDTH} -mt-10 relative z-10 pb-12 sm:pb-16`}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-[#e8eaed] bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-[#eef0f2] via-[#f5f6f8] to-white">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
              {product.video && (
                <button
                  type="button"
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center bg-[#0f1419]/10 transition-colors hover:bg-[#0f1419]/20"
                  aria-label="Play product demo"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0f1419] shadow-lg">
                    <FaPlay className="ml-1" />
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-[#e8eaed] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#737373]">Pricing</p>
              <p className="mt-2 text-2xl sm:text-3xl font-bold text-[#1a1a1a]">Contact for pricing</p>
              <p className="mt-3 text-sm leading-relaxed text-[#525252]">
                Flexible rental, purchase, and service contract options are available. Contact us for a tailored quote.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f1419] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1a222d] transition-colors"
              >
                Contact for pricing
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {product.features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-xl border border-[#e8eaed] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f1419]/8 text-[#0f1419]">
                      <Icon className="text-base" />
                    </div>
                    <h2 className="mt-3 text-sm font-semibold text-[#1a1a1a]">{feature.title}</h2>
                    <p className="mt-1 text-xs leading-relaxed text-[#525252]">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8eaed] bg-white">
        <div className={`container mx-auto px-4 sm:px-6 ${CONTENT_WIDTH} py-12 sm:py-16`}>
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">Deployment options</h2>
            <p className="mt-2 text-sm sm:text-base text-[#525252] leading-relaxed">
              Choose the model that fits your rollout and support needs. Contact us for pricing on each option.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {Object.entries(product.pricing).map(([key, plan]) => (
              <div
                key={key}
                className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ${
                  plan.popular ? 'border-[#0f1419] bg-[#f7f8fa]' : 'border-[#e8eaed] bg-white'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-6 rounded-full bg-[#0f1419] px-3 py-1 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-[#1a1a1a]">{plan.title}</h3>
                <p className="mt-3 text-lg font-semibold text-[#1a1a1a]">Contact for pricing</p>
                <ul className="mt-5 space-y-3 text-sm text-[#525252]">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-[#0f1419]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-[#0f1419] text-white hover:bg-[#1a222d]'
                      : 'border border-[#e8eaed] bg-white text-[#1a1a1a] hover:bg-[#f7f8fa]'
                  }`}
                >
                  Contact for pricing
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8eaed] bg-[#f7f8fa]">
        <div className={`container mx-auto px-4 sm:px-6 ${CONTENT_WIDTH} py-12 sm:py-16`}>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">Product details</h2>
              <p className="mt-2 text-sm sm:text-base text-[#525252]">
                Review features, specifications, and technical details for this platform.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {detailTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-[#0f1419] text-white'
                      : 'border border-[#e8eaed] bg-white text-[#525252] hover:border-[#dfe1e4] hover:text-[#1a1a1a]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'specs' && (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Object.entries(product.specs).map(([key, section]) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-[#e8eaed] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="text-lg font-semibold text-[#1a1a1a]">{section.title}</h3>
                    <dl className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-start justify-between gap-4 border-b border-[#f0f1f3] pb-3 last:border-b-0 last:pb-0"
                        >
                          <dt className="text-sm text-[#525252]">{item.label}</dt>
                          <dd className="text-sm font-medium text-[#1a1a1a] text-right">{item.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Object.entries(product.technical).map(([key, items]) => (
                  <div
                    key={key}
                    className="rounded-2xl border border-[#e8eaed] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                  >
                    <h3 className="text-lg font-semibold capitalize text-[#1a1a1a]">{key}</h3>
                    <ul className="mt-4 space-y-3 text-sm text-[#525252]">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <FaCheckCircle className="mt-0.5 shrink-0 text-[#0f1419]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'features' && (
              <div className="grid gap-6 md:grid-cols-2">
                {product.features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-[#e8eaed] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f1419]/8 text-[#0f1419]">
                          <Icon className="text-lg" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#1a1a1a]">{feature.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#525252]">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-[#e8eaed] bg-white">
        <div className={`container mx-auto px-4 sm:px-6 ${CONTENT_WIDTH} py-12 sm:py-16`}>
          <div className="rounded-2xl border border-[#e8eaed] bg-[#f7f8fa] p-8 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">Ready to evaluate {product.name}?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-[#525252]">
              Contact DataBot Labs for demos, tailored specifications, integration support, and deployment planning.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f1419] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1a222d] transition-colors"
              >
                Contact our team
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8eaed] bg-white px-6 py-3 text-sm font-semibold text-[#1a1a1a] hover:bg-[#f7f8fa] transition-colors"
              >
                Browse more products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showVideo && product.video && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              aria-label="Close demo video"
            >
              <FaTimes />
            </button>
            <div className="overflow-hidden rounded-2xl bg-black">
              <video src={product.video} controls autoPlay className="aspect-video w-full">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
