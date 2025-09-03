import React, { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaCogs, FaRobot, FaTools, FaCode, 
  FaChartLine, FaShieldAlt, FaMicrochip, FaBox, FaRuler, FaBolt, 
  FaWrench, FaCloudDownloadAlt, FaGithub, FaShoppingCart, FaPlus, FaMinus,
  FaClock, FaPlay, FaEuroSign, FaHandshake, FaCrown, FaStar, FaUsers,
  FaGlobe, FaAward, FaHeadset, FaCog, FaMobile, FaDesktop } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import SEOHelmet from '../components/common/SEOHelmet';

const ProductDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('features');
  const [quantity, setQuantity] = useState(1);
  const [showVideo, setShowVideo] = useState(false);
  const { addToCart } = useContext(CartContext);
  const { isAuthenticated } = useContext(AuthContext);
  const [addingToCart, setAddingToCart] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }

    try {
      setAddingToCart(true);
      await addToCart(id, quantity, { isPreorder: product?.isPreorder });
      toast.success(product?.isPreorder ? 'Added to cart as pre-order!' : 'Added to cart successfully!');
    } catch (error) {
      toast.error(error.message || error.response?.data?.message || 'Failed to add to cart');
    } finally {
      setAddingToCart(false);
    }
  };

  const products = {
    '1': {
      name: 'ShowRobot Netherlands - Advanced Retail Automation System',
      category: 'Retail Automation',
      image: '/images/industrial-robot.svg',
      video: '/videos/robot-motion.mp4',
      rating: 5.0,
      price: 25999,
      stock: 5,
      isPreorder: false,
      description: 'Revolutionary retail automation solution from ShowRobot Netherlands, featuring 24/7 operation, programmable intelligence, and exclusive technology for modern retail environments.',
      seoTitle: 'ShowRobot Netherlands - Advanced Retail Automation | DataBot Labs',
      seoDescription: 'Discover ShowRobot Netherlands cutting-edge retail automation solutions. 24/7 operation, programmable intelligence, and exclusive technology for modern retail environments.',
      seoKeywords: 'ShowRobot Netherlands, retail automation, 24/7 operation, programmable robots, exclusive technology, Netherlands robotics, retail solutions',
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
          title: '24/7 Operation',
          icon: <FaClock />,
          description: 'Continuous retail automation with zero downtime, perfect for ShowRobot Netherlands retail environments'
        },
        {
          title: 'Programmable Intelligence',
          icon: <FaCogs />,
          description: 'Advanced AI programming for custom retail automation tasks and customer interaction'
        },
        {
          title: 'Exclusive Technology',
          icon: <FaCrown />,
          description: 'Proprietary ShowRobot Netherlands technology with cutting-edge retail automation capabilities'
        },
        {
          title: 'Affordable Pricing',
          icon: <FaEuroSign />,
          description: 'Competitive pricing with flexible rental, purchase, and service contract options'
        }
      ],
      pricing: {
        rental: {
          title: 'Rental Option',
          price: '€2,999',
          period: 'per month',
          features: [
            'Full system access',
            '24/7 technical support',
            'Regular maintenance included',
            'Upgrade options available',
            'Flexible contract terms'
          ],
          popular: false
        },
        purchase: {
          title: 'Purchase',
          price: '€25,999',
          period: 'one-time',
          features: [
            'Complete ownership',
            'Lifetime warranty',
            'Free software updates',
            'Training included',
            'Custom configuration'
          ],
          popular: true
        },
        service: {
          title: 'Service Contract',
          price: '€1,999',
          period: 'per month',
          features: [
            'Full maintenance service',
            'Priority support',
            'Performance optimization',
            'Remote monitoring',
            'Emergency response'
          ],
          popular: false
        }
      },
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
      name: 'ShowRobot Netherlands - Mobile Retail Assistant',
      category: 'Retail Automation',
      image: '/images/20250616_110627.svg',
      video: '/videos/robot-motion.mp4',
      rating: 4.9,
      price: 18999,
      stock: 0,
      isPreorder: true,
      description: 'Advanced mobile retail automation system from ShowRobot Netherlands, featuring 24/7 customer service, programmable navigation, and exclusive retail technology.',
      seoTitle: 'ShowRobot Netherlands - Mobile Retail Assistant | DataBot Labs',
      seoDescription: 'Experience ShowRobot Netherlands mobile retail automation with 24/7 operation, programmable intelligence, and exclusive technology for retail environments.',
      seoKeywords: 'ShowRobot Netherlands, mobile retail automation, 24/7 operation, programmable robots, retail assistant, Netherlands robotics',
  specs: {
        physical: {
          title: 'Physical Specifications',
          items: [
            { label: 'Dimensions', value: '12×12×8 cm (L×W×H)' },
            { label: 'Weight', value: '2.5 kg' },
            { label: 'Material', value: 'Anodized Aluminum + Hardened Steel' },
            { label: 'Mounting', value: 'Standard ISO flange or customizable adapter' },
            { label: 'Rotation Range', value: '±180 degrees' },
            { label: 'Sealing', value: 'IP65-rated housing' }
          ]
        },
        drive: {
          title: 'Drive System',
          items: [
            { label: 'Motor Type', value: 'High-torque BLDC/Servo motor' },
            { label: 'Gearbox', value: 'Precision Harmonic Drive' },
            { label: 'Torque', value: 'Up to 75 Nm continuous' },
            { label: 'Encoder', value: 'Absolute rotary encoder' },
            { label: 'Controller', value: 'Integrated CANopen/RS485' },
            { label: 'Voltage', value: '24V/48V compatible' }
          ]
        },
        sensors: {
          title: 'Sensor Suite',
          items: [
            { label: 'Position Feedback', value: 'High-resolution encoder' },
            { label: 'Torque Sensing', value: 'Optional integrated torque sensor' },
            { label: 'Temperature', value: 'Internal thermal monitoring' },
            { label: 'Vibration', value: 'Built-in vibration detection' },
            { label: 'Limit Detection', value: 'Programmable electronic limits' },
            { label: 'Health Monitoring', value: 'Real-time diagnostics' }
          ]
        }
      },
      features: [
        {
          title: '24/7 Operation',
          icon: <FaClock />,
          description: 'Continuous mobile retail automation with zero downtime for ShowRobot Netherlands environments'
        },
        {
          title: 'Programmable Intelligence',
          icon: <FaCogs />,
          description: 'Advanced AI programming for custom retail automation and customer interaction tasks'
        },
        {
          title: 'Exclusive Technology',
          icon: <FaCrown />,
          description: 'Proprietary ShowRobot Netherlands mobile technology with cutting-edge retail capabilities'
        },
        {
          title: 'Affordable Pricing',
          icon: <FaEuroSign />,
          description: 'Competitive pricing with flexible rental, purchase, and service contract options'
        }
      ],
      pricing: {
        rental: {
          title: 'Rental Option',
          price: '€1,999',
          period: 'per month',
          features: [
            'Full mobile system access',
            '24/7 technical support',
            'Regular maintenance included',
            'Upgrade options available',
            'Flexible contract terms'
          ],
          popular: false
        },
        purchase: {
          title: 'Purchase',
          price: '€18,999',
          period: 'one-time',
          features: [
            'Complete ownership',
            'Lifetime warranty',
            'Free software updates',
            'Training included',
            'Custom configuration'
          ],
          popular: true
        },
        service: {
          title: 'Service Contract',
          price: '€1,299',
          period: 'per month',
          features: [
            'Full maintenance service',
            'Priority support',
            'Performance optimization',
            'Remote monitoring',
            'Emergency response'
          ],
          popular: false
        }
      },
      technical: {
        chassis: [
          'Compact and robust harmonic gearbox',
      'Low backlash for precise movement',
      'ISO standard mounting flange',
      'Integrated cable routing',
      'IP65-sealed housing for dust and moisture protection'
        ],
        electronics: [
         'High-resolution absolute encoder',
      'Integrated motor driver with safety features',
      'Temperature and vibration sensors',
      'CANopen and RS485 communication interfaces',
      'Optional torque sensing module'
        ],
        software: [
         'Compatible with ROS and industrial PLCs',
      'Supports trajectory planning',
      'Real-time feedback and diagnostics',
      'Torque and speed control modes',
      'Programmable soft limits'
        ]
      }
    },
    '3': {
      name: 'ShowRobot Netherlands - Fixed Retail Automation',
      category: 'Retail Automation',
      image: '/images/arm.svg',
      video: '/videos/robot-motion.mp4',
      rating: 4.8,
      price: 22999,
      stock: 3,
      isPreorder: false,
      description: 'High-strength retail automation system from ShowRobot Netherlands, built for 24/7 operation, programmable intelligence, and exclusive retail technology.',
      seoTitle: 'ShowRobot Netherlands - Fixed Retail Automation | DataBot Labs',
      seoDescription: 'Discover ShowRobot Netherlands fixed retail automation with 24/7 operation, programmable intelligence, and exclusive technology for retail environments.',
      seoKeywords: 'ShowRobot Netherlands, fixed retail automation, 24/7 operation, programmable robots, retail technology, Netherlands robotics',
      specs: {
        physical: {
          title: 'Physical Specifications',
          items: [
            { label: 'Length', value: '1.04 meters' },
            { label: 'Weight', value: '17 kg' },
            { label: 'Frame', value: 'Aluminum + Steel' },
            { label: 'Mount', value: 'ISO 9409-1' },
            { label: 'Payload', value: '5 kg' },
            { label: 'Precision', value: 'High accuracy' }
          ]
        },
        motors: {
          title: 'Motor & Control',
          items: [
            { label: 'Motors', value: 'Industrial-grade, closed-loop' },
            { label: 'Control', value: 'Closed-loop stepper/servo' },
            { label: 'Feedback', value: 'Encoder feedback' }
          ]
        }
      },
      features: [
        {
          title: '24/7 Operation',
          icon: <FaClock />,
          description: 'Continuous fixed retail automation with zero downtime for ShowRobot Netherlands environments'
        },
        {
          title: 'Programmable Intelligence',
          icon: <FaCogs />,
          description: 'Advanced AI programming for custom retail automation and precision tasks'
        },
        {
          title: 'Exclusive Technology',
          icon: <FaCrown />,
          description: 'Proprietary ShowRobot Netherlands fixed automation technology with cutting-edge capabilities'
        },
        {
          title: 'Affordable Pricing',
          icon: <FaEuroSign />,
          description: 'Competitive pricing with flexible rental, purchase, and service contract options'
        }
      ],
      pricing: {
        rental: {
          title: 'Rental Option',
          price: '€2,299',
          period: 'per month',
          features: [
            'Full fixed system access',
            '24/7 technical support',
            'Regular maintenance included',
            'Upgrade options available',
            'Flexible contract terms'
          ],
          popular: false
        },
        purchase: {
          title: 'Purchase',
          price: '€22,999',
          period: 'one-time',
          features: [
            'Complete ownership',
            'Lifetime warranty',
            'Free software updates',
            'Training included',
            'Custom configuration'
          ],
          popular: true
        },
        service: {
          title: 'Service Contract',
          price: '€1,499',
          period: 'per month',
          features: [
            'Full maintenance service',
            'Priority support',
            'Performance optimization',
            'Remote monitoring',
            'Emergency response'
          ],
          popular: false
        }
      },
      technical: {
        construction: [
          'Aluminum and steel frame',
          'ISO 9409-1 mounting flange',
          'Industrial-grade bearings',
          'Low maintenance design'
        ],
        electronics: [
          'Closed-loop stepper/servo motors',
          'Encoder feedback system',
          'Industrial control interface'
        ],
        software: [
          'Compatible with ROS and industrial PLCs',
          'Supports trajectory planning',
          'Real-time feedback and diagnostics'
        ]
      }
    },
    '4': {
      name: 'Coming Soon Product 1',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '5': {
      name: 'Coming Soon Product 2',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '6': {
      name: 'Coming Soon Product 3',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '7': {
      name: 'Coming Soon Product 4',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '8': {
      name: 'Coming Soon Product 5',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '9': {
      name: 'Coming Soon Product 6',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '10': {
      name: 'Coming Soon Product 7',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '11': {
      name: 'Coming Soon Product 8',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '12': {
      name: 'Coming Soon Product 9',
      category: 'Industrial',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
    },
    '13': {
      name: 'Coming Soon Product 10',
      category: 'Mobile Robotics',
      image: '',
      rating: 0,
      description: 'Coming soon',
      specs: {},
      features: [],
      technical: {}
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
    <div className="min-h-screen bg-[#0A0A0B] text-white relative">
      <SEOHelmet 
        title={product?.seoTitle || `${product?.name} | DataBot Labs`}
        description={product?.seoDescription || product?.description}
        keywords={product?.seoKeywords || 'robots, AI, automation, retail automation, ShowRobot Netherlands'}
      />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link
            to="/products"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                {product.features.slice(0, 4).map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-blue-400 text-xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  <FaPlay />
                  Watch Demo
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={addingToCart}
                  className="flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
                >
                  <FaShoppingCart />
                  {addingToCart ? 'Adding...' : 'Get Quote'}
                </button>
              </div>
            </motion.div>

            {/* Hero Image/Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#141416] border border-white/10">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* Pricing Table Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Flexible Pricing Options
            </h2>
            <p className="text-xl text-gray-400">
              Choose the perfect solution for your ShowRobot Netherlands retail automation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(product.pricing).map(([key, plan]) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              See ShowRobot Netherlands in Action
            </h2>
            <p className="text-xl text-gray-400">
              Watch our retail automation system demonstrate its capabilities
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#141416] border border-white/10">
              <img
                src={product.image}
                alt="ShowRobot Netherlands Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent"></div>
              
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <FaPlay className="text-white text-3xl ml-1" />
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose ShowRobot Netherlands?
            </h2>
            <p className="text-xl text-gray-400">
              Advanced retail automation technology designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="text-4xl text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tabs Section */}
        <section>
          <div className="flex space-x-4 border-b border-white/10 mb-8">
            <button
              className={`px-6 py-3 font-medium transition-colors duration-200 ${
                activeTab === 'features'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
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

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activeTab === 'specs' ? (
              // Specifications Content
              Object.entries(product.specs).map(([key, section]) => (
                <div
                  key={key}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
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
            ) : activeTab === 'technical' ? (
              // Technical Details Content
              Object.entries(product.technical).map(([key, items]) => (
                <div
                  key={key}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
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
            ) : (
              // Features Content
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl text-blue-400 flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <video
                src={product.video}
                controls
                autoPlay
                className="w-full h-full"
              >
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
