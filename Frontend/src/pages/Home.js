import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaIndustry, FaHome, FaGraduationCap, FaGamepad, FaArrowRight, FaShieldAlt, FaCogs, 
  FaMicrochip, FaStar, FaNewspaper, FaEnvelope, FaArrowDown, FaCheckCircle, FaMapMarkedAlt, 
  FaArrowsAltH, FaHandRock, FaLightbulb, FaUsers, FaHeadset, FaAward, FaExpand, FaCompress, FaPlay, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEOHelmet from '../components/common/SEOHelmet';
import PricingCard from '../components/products/PricingCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function NexBotModel(props) {
  return (
    <iframe
      src="https://my.spline.design/nexbotrobotcharacterconcept-7cRbIonQXCZted6D2E9tBfFP/"
      title="NexBot 3D Model"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '1rem',
        background: 'transparent'
      }}
      {...props}
    />
  );
}

const VideoPlayer = ({ src, poster, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
      if (video) {
        video.currentTime = 0;
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full bg-[#0a0a0a] rounded-xl overflow-hidden group"
    >
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        onClick={handlePlayPause}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-sm mt-1">{description}</p>
      </div>

      {/* Center Play Button */}
      <div className={`absolute inset-0 flex items-center justify-center ${isPlaying ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <button
          onClick={handlePlayPause}
          className="w-20 h-20 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 flex items-center justify-center group/play"
        >
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
            <FaPlay className="text-white text-3xl ml-2 group-hover/play:scale-110 transition-transform duration-300" />
          </div>
        </button>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Progress Bar */}
        <div 
          ref={progressBarRef}
          className="relative h-1 bg-white/20 cursor-pointer group/progress"
          onClick={handleProgressClick}
        >
          <div 
            className="absolute left-0 top-0 h-full bg-blue-500 transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 h-3 w-3 bg-blue-500 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-200"
            style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
          />
        </div>

        {/* Bottom Controls */}
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={handlePlayPause}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              {isPlaying ? (
                <FaPause className="text-white text-sm" />
              ) : (
                <FaPlay className="text-white text-sm ml-0.5" />
              )}
            </button>
            <span className="text-white text-sm">
              {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'} / {formatTime(duration)}
            </span>
          </div>

          <button
            onClick={handleFullscreen}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
          >
            {isFullscreen ? (
              <FaCompress className="text-white text-sm" />
            ) : (
              <FaExpand className="text-white text-sm" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const categories = [
    {
      icon: <FaIndustry className="text-4xl" />,
      title: 'Industrial',
      description: 'Advanced automation solutions for manufacturing and industry',
      link: '/products?category=industrial'
    },
    {
      icon: <FaHome className="text-4xl" />,
      title: 'Domestic',
      description: 'Smart home robots for everyday assistance',
      link: '/products?category=domestic'
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: 'Educational',
      description: 'Learning companions for students of all ages',
      link: '/products?category=educational'
    },
    {
      icon: <FaGamepad className="text-4xl" />,
      title: 'Entertainment',
      description: 'Interactive robots for fun and entertainment',
      link: '/products?category=entertainment'
    }
  ];

  const features = [
    {
      title: 'Advanced Security',
      description: 'State-of-the-art security protocols ensuring safe operation',
      icon: <FaShieldAlt className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-blue-500 to-purple-500',
      link: '#',
    },
    {
      title: 'Smart Automation',
      description: 'Intelligent systems that learn and adapt to your needs',
      icon: <FaCogs className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-green-400 to-blue-400',
      link: '#',
    },
    {
      title: 'Neural Processing',
      description: 'Advanced AI capabilities for complex decision making',
      icon: <FaMicrochip className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-pink-400 to-purple-400',
      link: '#',
    },
  ];

  // Replace featuredProducts with products from Products.js
  const featuredProducts = [
    {
      id: '1',
      name: 'Robotic Arm on Linear Rail',
      category: 'Industrial',
      image: '/images/industrial-robot.svg',
      rating: 5.0,
      shortDesc: 'High-precision robotic arm with linear rail system',
      highlights: [
        'Arm Length: 1.04m',
        'Total Reach: up to 3.54m',
        'Precision: ±0.1mm',
        'ROS2 Compatible'
      ],
      specs: {
        arm: {
          length: '1.04 meters',
          weight: '17 kg',
          payload: '5 kg'
        },
        rail: {
          length: '1-2.5 meters',
          accuracy: '±0.05 mm'
        }
      },
      tags: ['industrial', 'automation', 'precision']
    },
    {
      id: '2',
      name: 'Robotic Joint Assembly',
      category: 'Mobile Robotics',
      image: '/images/20250616_110627.svg',
      rating: 4.9,
      shortDesc: 'Advanced mobile robotic platform with all-terrain capabilities',
      highlights: [
        'Size: 68×42×30 cm',
        'Weight: 35 kg',
        '4× 80W BLDC Motors',
        'LIDAR Navigation'
      ],
      specs: {
        physical: {
          dimensions: '68×42×30 cm',
          weight: '35 kg'
        },
        drive: {
          motors: '4× 80W BLDC',
          battery: '24V/48V'
        }
      },
      tags: ['mobile', 'autonomous', 'all-terrain']
    },
    {
      id: '3',
      name: 'Goliath Arm (Fixed)',
      category: 'Industrial',
      image: '/images/arm.svg',
      rating: 4.8,
      shortDesc: 'High-strength industrial robotic arm for automation',
      highlights: [
        'Length: 1.04m',
        'Weight: 17 kg',
        'Industrial Grade',
        'High Precision'
      ],
      specs: {
        physical: {
          length: '1.04 meters',
          weight: '17 kg'
        },
        construction: {
          frame: 'Aluminum + Steel',
          mount: 'ISO 9409-1'
        }
      },
      tags: ['industrial', 'fixed', 'automation']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Factory Manager',
      company: 'TechManufacturing Inc.',
      content: 'The industrial robots have increased our production efficiency by 300%. Best investment we have made.',
      image: '/images/testimonials/john.jpg'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'School Principal',
      company: 'Future Academy',
      content: 'Our students love learning with the EduBots. They make complex concepts simple and engaging.',
      image: '/images/testimonials/sarah.jpg'
    },
    {
      id: 3,
      name: 'Mike Chen',
      role: 'Home Automation Expert',
      company: 'SmartHome Solutions',
      content: 'These robots integrate seamlessly with existing smart home systems. The AI capabilities are impressive.',
      image: '/images/testimonials/mike.jpg'
    }
  ];

  const stats = [
    { label: 'Robots Deployed', value: '10,000+' },
    { label: 'Happy Customers', value: '5,000+' },
    { label: 'Countries Served', value: '50+' },
    { label: 'Success Rate', value: '99.9%' }
  ];

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setIsSubscribed(true);
    setEmail('');
  };

  const products = [
    {
      title: "Arm Only",
      description: "Complete robotic arm solution with advanced control system",
      features: [
        "6-axis precision control",
        "2.5m maximum reach",
        "10kg payload capacity",
        "0.1mm repeatability",
        "Built-in force sensing",
      ],
      specs: {
        weight: "32kg",
        power: "220V AC",
        interface: "Ethernet/USB",
      },
      link: "#",
    },
    {
      title: "Mobile SLAM Base",
      description: "Autonomous navigation platform with SLAM capabilities",
      features: [
        "Real-time mapping",
        "Obstacle avoidance",
        "Multi-floor navigation",
        "8-hour battery life",
        "Auto-charging dock",
      ],
      specs: {
        speed: "1.5 m/s",
        payload: "100kg",
        sensors: "LiDAR + Cameras",
      },
      link: "#",
    },
    {
      title: "Linear Slider Rail",
      description: "Precision linear motion system for extended reach",
      features: [
        "2m travel length",
        "Servo-driven control",
        "Low backlash design",
        "Integrated cable management",
        "Easy mounting system",
      ],
      specs: {
        accuracy: "±0.05mm",
        speed: "1m/s",
        load: "25kg max",
      },
      link: "#",
    },
    {
      title: "Gripper",
      description: "Versatile end-effector for precise manipulation",
      features: [
        "Adaptive grip force",
        "Quick-change mount",
        "Various finger options",
        "Position feedback",
        "Integrated sensors",
      ],
      specs: {
        stroke: "100mm",
        force: "60N",
        weight: "0.8kg",
      },
      link: "#",
    },
  ];

  const whyChooseUs = [
    {
      title: 'Innovation First',
      description: 'Cutting-edge technology and continuous innovation in robotics',
      icon: <FaLightbulb className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-orange-400 to-pink-500',
    },
    {
      title: 'Expert Team',
      description: 'Dedicated professionals with years of robotics experience',
      icon: <FaUsers className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      icon: <FaHeadset className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-green-400 to-blue-400',
    },
    {
      title: 'Quality Assured',
      description: 'ISO certified manufacturing and rigorous testing',
      icon: <FaAward className="text-3xl text-white drop-shadow-lg" />, 
      gradient: 'from-pink-400 to-purple-400',
    },
  ];

  // Refs for 3D blobs
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const blob3 = useRef(null);
  // Refs for featured section
  const featuredHeader = useRef(null);
  const productCards = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // Parallax for blobs
    [blob1, blob2, blob3].forEach((blob, i) => {
      if (blob.current) {
        gsap.to(blob.current, {
          y: (i + 1) * 80,
          scrollTrigger: {
            trigger: blob.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
          ease: 'none',
        });
      }
    });
    // Featured header animation
    if (featuredHeader.current) {
      gsap.fromTo(
        featuredHeader.current,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: featuredHeader.current,
            start: 'top 80%',
          },
        }
      );
    }
    // Product cards animation
    productCards.current.forEach((card, idx) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95, rotateY: 10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            delay: idx * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      }
    });
  }, []);

  const renderProductCard = (product, index) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={el => productCards.current[index] = el}
    >
      <div className="group relative">
        {/* Mirror Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-2xl backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)] transition-all duration-500 hover:scale-105 hover:-rotate-2"></div>
        
        {/* Product Card Content */}
        <div className="relative p-6 rounded-2xl overflow-hidden h-full">
          {/* Image Container */}
          <div className="relative aspect-[16/9] mb-6 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 mix-blend-overlay"></div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400">{product.category}</p>
              </div>
              <div className="flex items-center bg-white/10 px-2 py-1 rounded-full">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-white">{product.rating}</span>
              </div>
            </div>

            {/* Key Specifications */}
            <div className="space-y-2">
              {(product.highlights || []).map((spec, i) => (
                <div key={i} className="flex items-center text-sm text-gray-300">
                  <FaCheckCircle className="text-blue-400 mr-2" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {product.price}
                </span>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Link
                    to={`/products/${product.id}`}
                    className="relative overflow-hidden px-4 sm:px-6 py-2 rounded-full group/button w-full sm:w-auto text-center"
                  >
                    {/* Button Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-75 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                    {/* Button Content */}
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      View Details
                      <FaArrowRight className="group-hover/button:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Link>
                  <Link
                    to="/preorder"
                    state={{ product: product.name }}
                    className="relative overflow-hidden px-4 sm:px-6 py-2 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 w-full sm:w-auto text-center"
                  >
                    Pre-order Now
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <SEOHelmet />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Footer-style background overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        </div>
        {/* 3D Animated Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-purple-500 via-blue-400 to-blue-300 opacity-60 rounded-full blur-3xl animate-blob3d1" ref={blob1} />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-blue-500 via-purple-400 to-pink-400 opacity-50 rounded-full blur-3xl animate-blob3d2" ref={blob2} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-tl from-pink-400 via-purple-400 to-blue-400 opacity-40 rounded-full blur-2xl animate-blob3d3" style={{transform: 'translate(-50%, -50%)'}} ref={blob3} />
        </div>
        {/* End 3D Blobs */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Welcome to the Future
                </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight"
              >
                Next Generation
                <span className="block mt-2 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Robotics
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
              >
               Modular 6-DOF Semi-Industrial Robot Arm – Customizable for Any Task
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/products"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2 text-lg font-semibold">
                    Explore Products
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/5 backdrop-blur-sm rounded-full text-white hover:bg-white/10 transition-all duration-300 text-lg font-semibold border border-white/10 hover:border-white/20"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <div className="flex-1 relative flex items-center justify-center min-h-[400px]">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative w-full max-w-xl aspect-square mx-auto"
              >
                {/* Hero Image */}
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="/images/hero-robot.jpg" 
                    alt="Advanced Robotics Technology" 
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-blue-900/30"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl -z-10"></div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex justify-center w-full"
          >
            <button
              aria-label="Scroll to explore"
              onClick={() => {
                const section = document.getElementById('featured-products');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 shadow-sm text-white font-medium text-[11px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ minWidth: '70px', minHeight: '30px' }}
            >
              <span className="leading-tight">Scroll to explore</span>
              <FaArrowDown className="text-xs animate-bounce mt-0.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* From Code to Motion Section */}
      <section className="py-32 bg-gradient-to-br from-black via-blue-900/30 to-purple-900/30 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight animate-fade-in-up">
              From Code to Motion: How Our Robots Operate
            </h2>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
              See the seamless journey from programming to real-world robotic action.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Video Frame 1 - Placeholder */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border-2 border-transparent hover:border-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-500 group">
              <div className="aspect-video w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <FaRobot className="text-2xl text-white/80" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Programming & Control</h3>
                    <p className="text-blue-200 text-sm">Video coming soon</p>
                  </div>
                </div>
                <img 
                  src="/images/industrial-robot.jpg"
                  alt="Programming & Control"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Video Frame 2 - Active Video */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border-2 border-transparent hover:border-gradient-to-r hover:from-pink-400 hover:to-blue-400 transition-all duration-500 group">
              <VideoPlayer
                src="/videos/robot-motion.mp4"
                poster="/images/educational-robot.jpg"
                title="Real-World Application"
                description="See our robots in action performing complex tasks"
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced Programming</h3>
              <p className="text-gray-300">Our robots are powered by sophisticated algorithms and AI, enabling them to adapt and learn.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Precision Control</h3>
              <p className="text-gray-300">Achieve submillimeter accuracy with our advanced motion control systems.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Monitoring</h3>
              <p className="text-gray-300">Monitor and adjust robot performance in real-time with our advanced dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-32 bg-black text-white overflow-hidden relative">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
            ref={featuredHeader}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block italic font-mono bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto italic font-mono">
              Discover our most popular and innovative robotic solutions
            </p>
          </motion.div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => renderProductCard(product, index))}
          </div>
          {/* View More Button */}
          <div className="flex justify-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:from-purple-600 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg group"
              aria-label="View More Products"
            >
              View More
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Pricing Transparency
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect robotic solution for your needs. Transparent pricing, no hidden fees, and best-in-class features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p) => (
              <PricingCard key={p.title} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 relative overflow-hidden bg-black text-white">
        {/* Hero-style background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white relative z-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group relative p-6 sm:p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl outline-none cursor-pointer"
                tabIndex={0}
                aria-label={item.title}
              >
                <span className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg group-hover:animate-pulse group-focus:animate-pulse`}>
                  {item.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white text-center">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden bg-black text-white">
        {/* Hero-style background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl outline-none cursor-pointer"
                tabIndex={0}
                aria-label={item.title}
              >
                <span className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg group-hover:animate-pulse group-focus:animate-pulse`}>
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white text-center">{item.title}</h3>
                <p className="text-gray-300 text-center mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Hero-style background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 animate-gradient-slow"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex justify-center">
          <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-lg border-2 border-transparent bg-clip-padding shadow-xl flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl ring-1 ring-blue-400/30">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-slow">
              Ready to Get Started?
            </h2>
            <p className="text-gray-200 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Join the future of robotics and discover how our solutions can transform your life.
            </p>
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-base sm:text-lg group"
              aria-label="Browse Our Collection"
            >
              Browse Our Collection
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
