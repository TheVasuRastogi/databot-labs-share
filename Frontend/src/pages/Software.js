import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGithub, FaDownload, FaCode, FaMobile, FaRobot, FaTools, 
  FaLaptopCode, FaAndroid, FaApple, FaWindows, FaLinux, FaMicrochip,
  FaCodeBranch, FaStar, FaEye, FaBug, FaBook } from 'react-icons/fa';

const Software = () => {
  const [activeTab, setActiveTab] = useState('control');

  // Example code snippets
  const codeExamples = {
    control: {
      code: `#include <ros/ros.h>
#include <moveit/move_group_interface/move_group_interface.h>
#include <robotech_msgs/RobotState.h>

class RobotController {
private:
    ros::NodeHandle nh_;
    moveit::planning_interface::MoveGroupInterface move_group_;
    ros::Publisher state_pub_;
    
public:
    RobotController() : move_group_("manipulator") {
        state_pub_ = nh_.advertise<robotech_msgs::RobotState>("/robot/state", 10);
        setupCollisionAvoidance();
    }

    bool planAndExecute(const geometry_msgs::Pose& target) {
        move_group_.setPoseTarget(target);
        moveit::planning_interface::MoveGroupInterface::Plan plan;
        
        if (move_group_.plan(plan) == moveit::planning_interface::MoveItErrorCode::SUCCESS) {
            return move_group_.execute(plan) == moveit::planning_interface::MoveItErrorCode::SUCCESS;
        }
        return false;
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "robot_controller");
    RobotController controller;
    ros::spin();
    return 0;
}`,
      features: [
        "Real-time trajectory planning with MoveIt!",
        "Collision avoidance and safety constraints",
        "Dynamic motion control with feedback",
        "Custom ROS message types for state management",
        "Integration with industrial robot controllers"
      ],
      docs: [
        "Robot Controller API Reference",
        "Motion Planning Guide",
        "Safety System Documentation",
        "Hardware Integration Manual"
      ]
    },
    ide: {
      code: `#include <ros/ros.h>
#include <gazebo_ros/gazebo_ros_api_plugin.h>
#include <robotech_core/VisualProgramming.h>

class VisualProgrammingIDE {
private:
    ros::NodeHandle nh_;
    std::unique_ptr<robotech::VisualProgrammer> programmer_;
    ros::ServiceServer compile_service_;
    ros::Publisher simulation_pub_;

public:
    VisualProgrammingIDE() {
        programmer_ = std::make_unique<robotech::VisualProgrammer>();
        compile_service_ = nh_.advertiseService("/ide/compile", 
            &VisualProgrammingIDE::compileCallback, this);
        simulation_pub_ = nh_.advertise<gazebo_msgs::ModelState>("/gazebo/set_model_state", 10);
    }

    bool compileAndSimulate(const std::string& program_data) {
        auto compiled_program = programmer_->compile(program_data);
        if (compiled_program) {
            return runSimulation(compiled_program);
        }
        return false;
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "visual_programming_ide");
    VisualProgrammingIDE ide;
    ros::spin();
    return 0;
}`,
      features: [
        "Visual block-based programming interface",
        "Real-time code compilation and validation",
        "Gazebo simulation integration",
        "Custom robot behavior programming",
        "Drag-and-drop motion sequence creation"
      ],
      docs: [
        "Visual Programming Guide",
        "Block Reference Documentation",
        "Simulation Environment Setup",
        "Custom Block Development"
      ]
    },
    mobile: {
      code: `#include <ros/ros.h>
#include <websocketpp/server.hpp>
#include <nlohmann/json.hpp>
#include <robotech_msgs/RobotCommand.h>

using json = nlohmann::json;

class MobileInterface {
private:
    ros::NodeHandle nh_;
    websocketpp::server<websocketpp::config::asio> server_;
    ros::Publisher cmd_pub_;
    
public:
    MobileInterface() {
        cmd_pub_ = nh_.advertise<robotech_msgs::RobotCommand>("/robot/cmd", 10);
        setupWebSocket();
    }

    void handleCommand(const std::string& message) {
        auto json_msg = json::parse(message);
        robotech_msgs::RobotCommand cmd;
        cmd.type = json_msg["type"];
        cmd.parameters = json_msg["params"];
        cmd_pub_.publish(cmd);
    }

    void run() {
        server_.listen(9002);
        server_.start_accept();
    }
};

int main(int argc, char** argv) {
    ros::init(argc, argv, "mobile_interface");
    MobileInterface interface;
    interface.run();
    ros::spin();
    return 0;
}`,
      features: [
        "WebSocket-based real-time communication",
        "Secure robot control protocol",
        "Cross-platform mobile compatibility",
        "Custom command serialization",
        "Real-time status monitoring"
      ],
      docs: [
        "Mobile Interface API",
        "WebSocket Protocol Specification",
        "Security Implementation Guide",
        "Mobile App Integration Guide"
      ]
    }
  };

  // Add NexBotModel 3D robot iframe component
  function NexBotModel(props) {
    return (
      <iframe
        src="https://my.spline.design/robotarm-zIspNEkHSEN5ICkmM9WVsGRR/"
        title="NexBot 3D Model"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '1rem',
          background: 'none', // transparent background
          backgroundColor: 'transparent'
        }}
        allowTransparency="true"
        {...props}
      />
    );
  }

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      {/* Footer-style background overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        {/* Hero Content */}
        <div className="relative px-6 py-24 sm:px-6 sm:py-32 lg:px-8 z-10">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-6xl">
              Software & Applications
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300/80">
              Powerful tools and applications to control, program, and maximize your robot's potential.
            </p>
          </div>
        </div>
      </div>

      {/* 3D Robot Model Section */}
      <div className="relative flex justify-center items-center py-12 px-4 z-10">
        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-700/30 to-blue-700/30 border border-white/10">
          <NexBotModel />
        </div>
      </div>

      {/* Pre-order Banner */}
      <div className="relative mx-auto max-w-7xl px-6 mb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-10 overflow-hidden relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Coming Soon! Be the First to Experience</h2>
              <p className="text-white/80 text-lg">
                Our advanced robotics software suite is in final development. Pre-order now to get early access and exclusive benefits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 min-w-[200px] text-center"
              >
                Pre-order Now
              </a>
              <a
                href="https://github.com/robotech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-black/20 text-white font-semibold rounded-xl hover:bg-black/30 transition-all duration-300 min-w-[200px] gap-2"
              >
                <FaGithub className="w-5 h-5" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8 z-10">
        {/* Software Tabs */}
        <div className="flex flex-col items-center space-y-12">
          <div className="flex items-center p-1 bg-gray-800/30 backdrop-blur-sm rounded-2xl">
            {['control', 'ide', 'mobile'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                } px-8 py-3 rounded-xl text-sm font-medium transition-all duration-300 capitalize`}
              >
                {tab === 'ide' ? 'Visual IDE' : `${tab} Software`}
              </button>
            ))}
          </div>

          {/* Software Details */}
          <div className="grid lg:grid-cols-3 gap-8 w-full">
            {/* Software Preview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Code Example */}
              <div className="relative bg-[#1e1e1e] rounded-2xl overflow-hidden border-2 border-indigo-500 shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 bg-[#252525] border-b border-indigo-500">
                  <div className="flex items-center space-x-3">
                    <FaCode className="text-indigo-400 w-4 h-4" />
                    <span className="text-sm font-medium text-white">
                      {activeTab === 'control' && 'robot_controller.cpp'}
                      {activeTab === 'ide' && 'visual_programming.cpp'}
                      {activeTab === 'mobile' && 'mobile_interface.cpp'}
                    </span>
                    <span className="text-xs font-medium text-indigo-400 bg-indigo-900 px-2.5 py-0.5 rounded-full">
                      ROS Noetic
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-white">C++17</span>
                    <a
                      href={`https://github.com/robotech/${activeTab}-software`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Dependencies */}
                <div className="flex items-center space-x-2 px-6 py-2 bg-[#252525] text-xs">
                  <span className="text-gray-500 font-medium">Dependencies:</span>
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#333333] rounded-full text-white">roscpp</span>
                    {activeTab === 'control' && (
                      <>
                        <span className="px-2 py-1 bg-[#333333] rounded-full text-white">moveit_ros_planning_interface</span>
                        <span className="px-2 py-1 bg-[#333333] rounded-full text-white">robotech_msgs</span>
                      </>
                    )}
                    {activeTab === 'ide' && (
                      <>
                        <span className="px-2 py-1 bg-[#333333] rounded-full text-white">gazebo_ros</span>
                        <span className="px-2 py-1 bg-[#333333] rounded-full text-white">robotech_core</span>
                      </>
                    )}
                    {activeTab === 'mobile' && (
                      <>
                        <span className="px-2 py-1 bg-[#333333] rounded-full text-white">websocketpp</span>
                        <span className="px-2 py-1 bg-[#333333] rounded-full text-white">nlohmann_json</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Code Block */}
                <pre className="relative p-6 text-[15px] leading-6 text-white bg-[#1e1e1e] rounded-b-2xl overflow-x-auto font-mono shadow-inner" style={{opacity: 1}}>
                  <code className="language-cpp" style={{color: '#d4d4d4', textShadow: 'none'}}>
                    {codeExamples[activeTab].code}
                  </code>
                </pre>

                {/* Build Command */}
                <div className="px-6 py-3 bg-[#252525] border-t border-indigo-500">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-white font-medium">Build:</span>
                    <code className="text-xs font-mono px-2 py-1 bg-[#333333] rounded-lg text-white">
                      catkin_make --pkg robotech_{activeTab}
                    </code>
                  </div>
                </div>
              </div>

              {/* Build Instructions */}
              <div className="bg-gradient-to-br from-[#1A1A1C]/60 to-[#1A1A1C]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] transition-all duration-300 hover:border-indigo-500/20">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <FaTools className="w-5 h-5 mr-3 text-indigo-400" />
                  Build & Run Instructions
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">1. Setup ROS Workspace</h4>
                    <pre className="bg-black/30 p-4 rounded-xl text-sm overflow-x-auto">
                      <code>{`mkdir -p ~/robotech_ws/src
cd ~/robotech_ws/src
git clone https://github.com/robotech/${activeTab}-software.git
cd ..
catkin_make`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">2. Source Workspace</h4>
                    <pre className="bg-black/30 p-4 rounded-xl text-sm overflow-x-auto">
                      <code>source ~/robotech_ws/devel/setup.bash</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">3. Launch Application</h4>
                    <pre className="bg-black/30 p-4 rounded-xl text-sm overflow-x-auto">
                      <code>{`roslaunch robotech_${activeTab} ${activeTab}_node.launch`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Documentation */}
            <div className="space-y-8">
              {/* System Requirements */}
              <div className="bg-gradient-to-br from-[#1A1A1C]/60 to-[#1A1A1C]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] transition-all duration-300 hover:border-green-500/20">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <FaMicrochip className="w-5 h-5 mr-3 text-green-400" />
                  System Requirements
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3"></div>
                    Ubuntu 20.04 LTS
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3"></div>
                    ROS Noetic
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3"></div>
                    C++17 or higher
                  </li>
                  <li className="flex items-center text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-3"></div>
                    CMake 3.10+
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-[#1A1A1C]/60 to-[#1A1A1C]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] transition-all duration-300 hover:border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <FaStar className="w-5 h-5 mr-3 text-purple-400" />
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {codeExamples[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documentation */}
              <div className="bg-gradient-to-br from-[#1A1A1C]/60 to-[#1A1A1C]/40 backdrop-blur-sm rounded-2xl p-8 border border-white/[0.08] transition-all duration-300 hover:border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                  <FaBook className="w-5 h-5 mr-3 text-blue-400" />
                  Documentation
                </h3>
                <ul className="space-y-4">
                  {codeExamples[activeTab].docs.map((doc, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-3"></div>
                        {doc}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Software; 