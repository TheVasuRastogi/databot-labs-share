import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaCogs, FaRobot, FaTools, FaCode, 
  FaChartLine, FaShieldAlt, FaMicrochip, FaBox, FaRuler, FaBolt, 
  FaWrench, FaCloudDownloadAlt, FaGithub } from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('specs');

  const products = {
    '1': {
      name: 'Robotic Arm on Linear Rail',
      category: 'Industrial',
      price: '€8,999',
      image: '/images/industrial-robot.jpg',
      rating: 5.0,
      description: 'High-precision robotic arm mounted on a linear rail system, combining versatility with extended reach capabilities.',
      specs: {
        arm: {
          title: 'Robotic Arm Specifications',
          items: [
            { label: 'Arm Length', value: '1.04 meters' },
            { label: 'Weight', value: '17 kg' },
            { label: 'Frame', value: 'Aluminum alloy + steel reinforcement' },
            { label: 'Joints', value: 'Hardened bearings (angular/crossed roller)' },
            { label: 'Actuators', value: 'NEMA 17/23 closed-loop steppers' },
            { label: 'End Effector', value: 'ISO 9409-1 compatible steel flange' }
          ]
        },
        rail: {
          title: 'Linear Rail System',
          items: [
            { label: 'Standard Length', value: '1 meter' },
            { label: 'Extended Length', value: 'Up to 2.5 meters' },
            { label: 'Guide Type', value: 'HIWIN heavy-duty profile' },
            { label: 'Drive', value: 'NEMA 23 stepper/servo' },
            { label: 'Accuracy', value: '±0.05 mm with encoder' },
            { label: 'Base', value: 'Rigid aluminum/steel plate' }
          ]
        },
        combined: {
          title: 'Combined System Features',
          items: [
            { label: 'Total Reach (1m)', value: '~2.04 meters' },
            { label: 'Total Reach (2.5m)', value: '~3.54 meters' },
            { label: 'Arm Payload', value: '~5 kg' },
            { label: 'Rail Speed', value: '0.5–1 m/s' },
            { label: 'System Repeatability', value: '±0.1 mm' },
            { label: 'Control System', value: 'TMC5160 + STM32F466RET6' }
          ]
        }
      },
      features: [
        {
          title: 'Extended Reach',
          icon: <FaRuler />,
          description: 'Up to 3.54m total reach with extended rail'
        },
        {
          title: 'High Precision',
          icon: <FaCogs />,
          description: '±0.1 mm system repeatability'
        },
        {
          title: 'Advanced Control',
          icon: <FaMicrochip />,
          description: 'Integrated TMC5160 and STM32F466RET6'
        }
      ],
      technical: {
        construction: [
          'Aluminum alloy frame with steel reinforcement',
          'Hardened bearings for minimal backlash',
          'HIWIN profile guide rail system',
          'Preloaded ball bearings carriage',
          'Rigid mounting system',
          'Integrated cable management'
        ],
        control: [
          'TMC5160 motor drivers',
          'STM32F466RET6 controller',
          'Closed-loop stepper control',
          'Encoder feedback system',
          'Custom G-code support',
          'ROS2 Moveit2 integration'
        ],
        software: [
          'ROS 2 (Humble/Iron) compatible',
          'MoveIt 2 motion planning',
          'Custom path planning',
          'Real-time monitoring',
          'Advanced safety features',
          'Cloud integration ready'
        ]
      }
    },
    '2': {
      name: 'Goliath Mobile',
      category: 'Mobile Robotics',
      price: '€12,999',
      image: '/images/industrial-robot.jpg',
      rating: 4.9,
      description: 'Advanced mobile robotic platform with all-terrain capabilities and modular design.',
      specs: {
        physical: {
          title: 'Physical Specifications',
          items: [
            { label: 'Dimensions', value: '68×42×30 cm (L×W×H)' },
            { label: 'Weight', value: '35 kg' },
            { label: 'Frame', value: 'Aluminum + Carbon Fiber' },
            { label: 'Suspension', value: 'Independent/Rigid Axle' },
            { label: 'Wheels', value: 'All-terrain/Mecanum' },
            { label: 'Construction', value: 'Hybrid chassis design' }
          ]
        },
        drive: {
          title: 'Drive System',
          items: [
            { label: 'Motors', value: '4× 80W BLDC/Stepper' },
            { label: 'Transmission', value: 'Direct/Planetary' },
            { label: 'Battery', value: '24V/48V Li-ion/LiFePO₄' },
            { label: 'Controller', value: 'CAN UART/ROS-compatible' },
            { label: 'Voltage', value: '42 volt system' },
            { label: 'Drive Type', value: 'Independent wheel control' }
          ]
        },
        sensors: {
          title: 'Sensor Suite',
          items: [
            { label: 'Navigation', value: 'Wheel Encoders + IMU' },
            { label: 'Mapping', value: 'LIDAR system' },
            { label: 'Stabilization', value: 'Integrated IMU' },
            { label: 'Autonomy', value: 'LIDAR-based' },
            { label: 'Feedback', value: 'Multi-sensor fusion' },
            { label: 'Positioning', value: 'Odometry + IMU' }
          ]
        }
      },
      features: [
        {
          title: 'All-Terrain',
          icon: <FaRobot />,
          description: 'Capable of navigating various surfaces'
        },
        {
          title: 'Modular Design',
          icon: <FaBox />,
          description: 'Customizable configuration options'
        },
        {
          title: 'Advanced Control',
          icon: <FaBolt />,
          description: '42V system with BLDC motors'
        }
      ],
      technical: {
        chassis: [
          'Hybrid aluminum-carbon fiber frame',
          'Independent/rigid axle options',
          'All-terrain wheel configurations',
          'Modular mounting system',
          'Integrated cable management',
          'Weather-resistant design'
        ],
        electronics: [
          '80W BLDC hub motors',
          'CAN UART control system',
          'Advanced battery management',
          'Sensor integration hub',
          'Real-time monitoring',
          'Power distribution system'
        ],
        software: [
          'ROS 2 navigation stack',
          'Autonomous operation',
          'Sensor fusion',
          'Path planning',
          'Obstacle avoidance',
          'Remote monitoring'
        ]
      }
    }
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>

          {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-[#141416] border border-white/10"
          >
                  <img
                    src={product.image}
                    alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      {product.name}
                  </h1>
              <p className="text-gray-400 text-lg mb-4">{product.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-white">
                  {product.price}
                  </span>
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                  {product.category}
                  </span>
                <Link
                  to="/preorder"
                  state={{ product: product.name }}
                  className="ml-4 px-6 py-2 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 min-w-[150px] text-center"
                >
                  Pre-order Now
                </Link>
              </div>
          </div>

            {/* Quick Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#141416] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
                >
                  <div className="text-blue-400 text-xl mb-2">{feature.icon}</div>
                  <h3 className="font-semibold mb-1 text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
                  </div>

            {/* Open Source Badge */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#141416] border border-white/10">
              <FaGithub className="text-2xl text-white" />
                  <div>
                <h3 className="font-semibold text-white">Open Source Project</h3>
                <p className="text-sm text-gray-400">Available on GitHub with ROS2 support</p>
              </div>
              <Link
                to="https://github.com/your-repo"
                className="ml-auto px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                target="_blank"
              >
                View Code
              </Link>
                  </div>
          </motion.div>
                  </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-4 border-b border-white/10">
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'specs'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'technical'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('technical')}
            >
              Technical Details
            </button>
                  </div>
                </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {activeTab === 'specs' ? (
            // Specifications Content
            Object.entries(product.specs).map(([key, section]) => (
              <div
                key={key}
                className="p-6 rounded-2xl bg-[#141416] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-400">{item.label}</span>
                      <span className="font-medium text-white">{item.value}</span>
                  </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // Technical Details Content
            Object.entries(product.technical).map(([key, items]) => (
              <div
                key={key}
                className="p-6 rounded-2xl bg-[#141416] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {key}
                </h3>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheckCircle className="text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
              </div>
            ))
          )}
          </div>

        {/* ROS 2 Integration Section */}
        <div className="mt-16 p-8 rounded-2xl bg-[#141416] border border-white/10">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            ROS 2 Integration
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <FaCode className="text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Modern Stack</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  ROS 2 (Humble/Iron)
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  MoveIt 2 Integration
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Nav2 Compatible
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <FaCloudDownloadAlt className="text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Ready to Use</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Pre-configured Packages
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Example Applications
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Documentation
                </li>
                </ul>
              </div>
            <div className="space-y-4">
              <FaWrench className="text-3xl text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Customizable</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Modular Design
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Extensible Architecture
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  Custom Plugin Support
                </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
