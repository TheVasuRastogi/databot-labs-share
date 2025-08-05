import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaMicrochip, 
  FaBrain, 
  FaCog, 
  FaEye, 
  FaHandRock,
  FaWifi,
  FaBatteryFull 
} from 'react-icons/fa';

const Technologies = () => {
  const technologies = [
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "Advanced AI algorithms for autonomous decision making and learning capabilities.",
      features: ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"]
    },
    {
      icon: <FaMicrochip className="w-8 h-8" />,
      title: "Advanced Processors",
      description: "High-performance computing units optimized for robotics applications.",
      features: ["ARM Cortex", "GPU Acceleration", "Edge Computing", "Real-time Processing"]
    },
    {
      icon: <FaEye className="w-8 h-8" />,
      title: "Vision Systems",
      description: "Sophisticated visual perception and image processing technologies.",
      features: ["3D Vision", "Object Recognition", "SLAM", "Depth Sensing"]
    },
    {
      icon: <FaHandRock className="w-8 h-8" />,
      title: "Manipulation",
      description: "Precise robotic manipulation and dexterous control systems.",
      features: ["Force Control", "Haptic Feedback", "Precision Gripping", "Multi-DOF Arms"]
    },
    {
      icon: <FaWifi className="w-8 h-8" />,
      title: "Connectivity",
      description: "Seamless communication and IoT integration capabilities.",
      features: ["5G Support", "WiFi 6", "Bluetooth", "IoT Protocols"]
    },
    {
      icon: <FaBatteryFull className="w-8 h-8" />,
      title: "Power Management",
      description: "Efficient energy systems for extended operational time.",
      features: ["Li-ion Batteries", "Fast Charging", "Power Optimization", "Solar Integration"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      <Helmet>
        <title>Technologies | DataBot-Labs - Advanced Robotics Solutions</title>
        <meta name="description" content="Explore the cutting-edge technologies powering DataBot-Labs robotics solutions - AI, vision systems, advanced processors, and more." />
      </Helmet>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:50px_50px]" />
        
        {/* Gradient orbs */}
        <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full filter blur-[120px]" />
        <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] bg-blue-500/40 rounded-full filter blur-[120px]" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Additional ambient light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Advanced Technologies
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover the cutting-edge technologies that power our robotics solutions.
                <br className="hidden sm:block" />
                From AI and machine learning to advanced sensors and actuators.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg text-white">
                      {tech.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{tech.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tech.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-200 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tech.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Innovation Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8 text-center">
              <FaRobot className="w-16 h-16 mx-auto mb-6 text-violet-400" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Innovation at the Core
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our commitment to technological excellence drives us to continuously push the boundaries 
                of what's possible in robotics. We combine proven technologies with innovative approaches 
                to create solutions that are both reliable and revolutionary.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;