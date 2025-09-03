import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaDownload, FaCode, FaMobile, FaRobot, FaTools, 
  FaLaptopCode, FaAndroid, FaApple, FaWindows, FaLinux, FaMicrochip,
  FaCodeBranch, FaStar, FaEye, FaBug, FaBook, FaCogs, FaClock, FaCrown,
  FaEuroSign, FaShieldAlt, FaRocket, FaGlobe, FaPlay, FaCheckCircle,
  FaArrowRight, FaCloud, FaDatabase, FaNetworkWired, FaCog } from 'react-icons/fa';
import SEOHelmet from '../components/common/SEOHelmet';

const Software = () => {
  const [activeTab, setActiveTab] = useState('control');

  // ShowRobot Netherlands Software Solutions
  const softwareSolutions = {
    control: {
      code: `#include <ros/ros.h>
#include <showrobot_msgs/RetailAutomation.h>
#include <showrobot_core/RetailController.h>

class ShowRobotController {
private:
    ros::NodeHandle nh_;
    showrobot::RetailController retail_controller_;
    ros::Publisher automation_pub_;
    
public:
    ShowRobotController() {
        automation_pub_ = nh_.advertise<showrobot_msgs::RetailAutomation>("/showrobot/automation", 10);
        setup24_7Operation();
    }

    bool executeRetailTask(const showrobot_msgs::RetailTask& task) {
        // 24/7 retail automation with programmable intelligence
        if (retail_controller_.validateTask(task)) {
            return retail_controller_.executeWithIntelligence(task);
        }
        return false;
    }

    void setup24_7Operation() {
        // Configure continuous retail automation
        retail_controller_.enableContinuousMode();
        retail_controller_.setExclusiveTechnology();
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "showrobot_retail_controller");
    ShowRobotController controller;
    ros::spin();
    return 0;
}`,
      features: [
        "24/7 retail automation operation with zero downtime",
        "Programmable intelligence for custom retail tasks",
        "Exclusive ShowRobot Netherlands technology integration",
        "Real-time retail environment monitoring",
        "Affordable pricing with flexible deployment options"
      ],
      docs: [
        "ShowRobot Netherlands API Reference",
        "24/7 Operation Configuration Guide",
        "Programmable Intelligence Documentation",
        "Retail Automation Setup Manual"
      ]
    },
    ide: {
      code: `#include <ros/ros.h>
#include <showrobot_ide/VisualRetailProgramming.h>
#include <showrobot_core/RetailSimulation.h>

class ShowRobotIDE {
private:
    ros::NodeHandle nh_;
    std::unique_ptr<showrobot::VisualRetailProgrammer> programmer_;
    ros::ServiceServer compile_service_;
    ros::Publisher retail_sim_pub_;

public:
    ShowRobotIDE() {
        programmer_ = std::make_unique<showrobot::VisualRetailProgrammer>();
        compile_service_ = nh_.advertiseService("/showrobot/compile", 
            &ShowRobotIDE::compileRetailProgram, this);
        retail_sim_pub_ = nh_.advertise<showrobot_msgs::RetailSimulation>("/showrobot/simulation", 10);
    }

    bool compileAndSimulateRetail(const std::string& retail_program) {
        // Programmable intelligence for retail automation
        auto compiled_program = programmer_->compileRetailAutomation(retail_program);
        if (compiled_program) {
            return runRetailSimulation(compiled_program);
        }
        return false;
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "showrobot_retail_ide");
    ShowRobotIDE ide;
    ros::spin();
    return 0;
}`,
      features: [
        "Visual retail automation programming interface",
        "24/7 operation simulation and testing",
        "Programmable intelligence configuration",
        "Exclusive ShowRobot Netherlands technology integration",
        "Drag-and-drop retail automation workflows"
      ],
      docs: [
        "ShowRobot Netherlands Visual Programming Guide",
        "24/7 Operation Configuration",
        "Programmable Intelligence Setup",
        "Retail Automation Simulation Manual"
      ]
    },
    mobile: {
      code: `#include <ros/ros.h>
#include <websocketpp/server.hpp>
#include <nlohmann/json.hpp>
#include <showrobot_msgs/RetailCommand.h>

using json = nlohmann::json;

class ShowRobotMobileInterface {
private:
    ros::NodeHandle nh_;
    websocketpp::server<websocketpp::config::asio> server_;
    ros::Publisher retail_cmd_pub_;
    
public:
    ShowRobotMobileInterface() {
        retail_cmd_pub_ = nh_.advertise<showrobot_msgs::RetailCommand>("/showrobot/retail_cmd", 10);
        setupSecureWebSocket();
    }

    void handleRetailCommand(const std::string& message) {
        auto json_msg = json::parse(message);
        showrobot_msgs::RetailCommand cmd;
        cmd.automation_type = json_msg["automation_type"];
        cmd.retail_parameters = json_msg["retail_params"];
        cmd.priority = json_msg["priority"]; // 24/7 operation priority
        retail_cmd_pub_.publish(cmd);
    }

    void run() {
        // Secure retail automation interface
        server_.listen(9002);
        server_.start_accept();
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "showrobot_mobile_interface");
    ShowRobotMobileInterface interface;
    interface.run();
    ros::spin();
    return 0;
}`,
      features: [
        "24/7 retail automation mobile control",
        "Secure ShowRobot Netherlands protocol",
        "Cross-platform retail management compatibility",
        "Programmable intelligence mobile configuration",
        "Real-time retail operation monitoring"
      ],
      docs: [
        "ShowRobot Netherlands Mobile API",
        "24/7 Operation Mobile Guide",
        "Programmable Intelligence Mobile Setup",
        "Retail Automation Mobile Integration"
      ]
    }
  };

  // ShowRobot Netherlands Software Features
  const softwareFeatures = [
    {
      title: "24/7 Operation",
      description: "Continuous retail automation with zero downtime, ensuring your ShowRobot Netherlands systems operate around the clock",
      icon: <FaClock />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programmable Intelligence",
      description: "Advanced AI programming capabilities for custom retail automation tasks and intelligent decision making",
      icon: <FaCogs />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Exclusive Technology",
      description: "Proprietary ShowRobot Netherlands technology with cutting-edge retail automation capabilities",
      icon: <FaCrown />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Affordable Pricing",
      description: "Competitive pricing with flexible rental, purchase, and service contract options for all business sizes",
      icon: <FaEuroSign />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      <SEOHelmet 
        title="ShowRobot Netherlands - Software Solutions | Retail Automation Software"
        description="Discover ShowRobot Netherlands advanced software solutions for retail automation. 24/7 operation, programmable intelligence, and exclusive technology for modern retail environments."
        keywords="ShowRobot Netherlands, software solutions, retail automation software, 24/7 operation, programmable intelligence, exclusive technology, Netherlands robotics, retail automation platform"
      />
      
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-6 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
            >
              <span className="text-blue-400 font-semibold">ShowRobot Netherlands</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight"
            >
              Advanced Software
              <span className="block mt-2">Solutions</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-3xl text-xl leading-8 text-gray-300 mb-12"
            >
              Powerful ShowRobot Netherlands software solutions for retail automation with 24/7 operation, programmable intelligence, and exclusive technology for modern retail environments.
            </motion.p>

            {/* Software Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {softwareFeatures.map((feature, index) => (
                <div key={index} className="group">
                  <div className="relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-2xl">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Software Showcase Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              ShowRobot Netherlands Software Suite
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive software solutions for retail automation with 24/7 operation, programmable intelligence, and exclusive technology
            </p>
          </motion.div>

          {/* Software Demo Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-5xl mx-auto mb-16"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6 mx-auto">
                    <FaPlay className="text-white text-3xl ml-1 opacity-60" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coming Soon</h3>
                  <p className="text-gray-300">Our software demo video is in production. Stay tuned!</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse"></div>
            
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Retail Operations?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Experience ShowRobot Netherlands software solutions with 24/7 operation, programmable intelligence, and exclusive technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg"
                >
                  <FaRobot className="mr-3" />
                  Explore Solutions
                </a>
                <a
                  href="https://github.com/bvdhaagen/goliath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                >
                  <FaGithub className="mr-3" />
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Software Tabs */}
          <div className="flex flex-col items-center space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto p-1 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              {['control', 'ide', 'mobile'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  } px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 capitalize flex-1 sm:flex-initial ${
                    tab !== 'control' && 'mt-1 sm:mt-0 sm:ml-1'
                  }`}
                >
                  {tab === 'ide' ? 'Visual IDE' : `ShowRobot ${tab}`}
                </button>
              ))}
            </motion.div>

            {/* Software Details */}
            <div className="grid lg:grid-cols-3 gap-8 w-full">
              <div className="lg:col-span-2 space-y-6">
                {/* Code Example */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden border-2 border-blue-500 shadow-2xl"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-[#252525] border-b border-blue-500 gap-2 sm:gap-0">
                    <div className="flex items-center space-x-3">
                      <FaCode className="text-blue-400 w-5 h-5" />
                      <span className="text-sm font-medium text-white">
                        {activeTab === 'control' && 'showrobot_retail_controller.cpp'}
                        {activeTab === 'ide' && 'showrobot_retail_ide.cpp'}
                        {activeTab === 'mobile' && 'showrobot_mobile_interface.cpp'}
                      </span>
                      <span className="text-xs font-medium text-blue-400 bg-blue-900 px-3 py-1 rounded-full">
                        ShowRobot Netherlands
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-white">C++17</span>
                      <a
                        href={`https://github.com/bvdhaagen/goliath`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition-colors duration-300"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>View on GitHub</span>
                      </a>
                    </div>
                  </div>

                  {/* Dependencies */}
                  <div className="flex flex-wrap items-center gap-2 px-6 py-3 bg-[#252525] text-xs">
                    <span className="text-gray-500 font-medium">Dependencies:</span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-[#333333] rounded-full text-white">roscpp</span>
                      {activeTab === 'control' && (
                        <>
                          <span className="px-3 py-1 bg-[#333333] rounded-full text-white">showrobot_msgs</span>
                          <span className="px-3 py-1 bg-[#333333] rounded-full text-white">showrobot_core</span>
                        </>
                      )}
                      {activeTab === 'ide' && (
                        <>
                          <span className="px-3 py-1 bg-[#333333] rounded-full text-white">showrobot_ide</span>
                          <span className="px-3 py-1 bg-[#333333] rounded-full text-white">showrobot_core</span>
                        </>
                      )}
                      {activeTab === 'mobile' && (
                        <>
                          <span className="px-3 py-1 bg-[#333333] rounded-full text-white">websocketpp</span>
                          <span className="px-3 py-1 bg-[#333333] rounded-full text-white">showrobot_msgs</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Code Block */}
                  <pre className="relative p-6 text-sm leading-6 text-white bg-[#1e1e1e] rounded-b-2xl overflow-x-auto font-mono shadow-inner">
                    <code className="language-cpp" style={{color: '#d4d4d4', textShadow: 'none'}}>
                      {softwareSolutions[activeTab].code}
                    </code>
                  </pre>

                  {/* Build Command */}
                  <div className="px-6 py-3 bg-[#252525] border-t border-blue-500">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white font-medium">Build:</span>
                      <code className="text-xs font-mono px-3 py-1 bg-[#333333] rounded-lg text-white">
                        catkin_make --pkg showrobot_{activeTab}
                      </code>
                    </div>
                  </div>
                </motion.div>
                {/* Build Instructions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <FaTools className="w-5 h-5 mr-3 text-blue-400" />
                    Build & Run Instructions
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">1. System Requirements Check</h4>
                      <pre className="bg-black/30 p-4 rounded-xl text-sm overflow-x-auto">
                        <code>{`# Check ROS version
rosversion -d

# Check Python version
python3 --version

# Check ShowRobot Netherlands dependencies
rosdep check --from-paths src`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">2. Setup ShowRobot Workspace</h4>
                      <pre className="bg-black/30 p-4 rounded-xl text-sm overflow-x-auto">
                        <code>{`# Create and initialize workspace
mkdir -p ~/showrobot_ws/src
cd ~/showrobot_ws/src
git clone https://github.com/bvdhaagen/goliath.git

# Install ShowRobot Netherlands dependencies
rosdep install --from-paths src --ignore-src -r -y

# Build workspace
cd ..
catkin_make`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">3. Source & Launch</h4>
                      <pre className="bg-black/30 p-4 rounded-xl text-sm overflow-x-auto">
                        <code>{`# Source workspace
source ~/showrobot_ws/devel/setup.bash

# Launch ShowRobot Netherlands application
roslaunch showrobot_${activeTab} ${activeTab}_node.launch`}</code>
                      </pre>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-3">4. Contact Support</h4>
                      <div className="bg-black/30 p-4 rounded-xl text-sm">
                        <p className="text-white/80 mb-2">If you encounter any issues during setup or need assistance:</p>
                        <ul className="list-disc list-inside space-y-1 text-white/70">
                          <li>Open an issue on <a href="https://github.com/bvdhaagen/goliath/issues" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">GitHub Issues</a></li>
                          <li>Contact our support team at <a href="mailto:support@showrobot-netherlands.com" className="text-blue-400 hover:text-blue-300">support@showrobot-netherlands.com</a></li>
                          <li>Check our <a href="/resources" className="text-blue-400 hover:text-blue-300">Documentation</a> for troubleshooting guides</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-6">
                {/* System Requirements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-green-500/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <FaMicrochip className="w-5 h-5 mr-3 text-green-400" />
                    System Requirements
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-300">
                      <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      Ubuntu 20.04 LTS
                    </li>
                    <li className="flex items-center text-gray-300">
                      <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      ROS Noetic
                    </li>
                    <li className="flex items-center text-gray-300">
                      <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      C++17 or higher
                    </li>
                    <li className="flex items-center text-gray-300">
                      <FaCheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      CMake 3.10+
                    </li>
                  </ul>
                </motion.div>
                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-purple-500/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <FaStar className="w-5 h-5 mr-3 text-purple-400" />
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {softwareSolutions[activeTab].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <FaCheckCircle className="w-4 h-4 text-purple-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                {/* Documentation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <FaBook className="w-5 h-5 mr-3 text-blue-400" />
                    Documentation
                  </h3>
                  <ul className="space-y-4">
                    {softwareSolutions[activeTab].docs.map((doc, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <FaArrowRight className="w-4 h-4 text-blue-400 mr-3" />
                          {doc}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software; 