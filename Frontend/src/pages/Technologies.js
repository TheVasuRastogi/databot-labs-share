import React from 'react';
import { FaRobot, FaMicrochip, FaBrain, FaCogs, FaShieldAlt, FaCode, FaCloud, FaMobile } from 'react-icons/fa';

const Technologies = () => {
  const technologies = [
    {
      icon: <FaBrain />,
      title: 'Artificial Intelligence',
      description: 'Advanced AI algorithms for intelligent decision-making and learning capabilities.'
    },
    {
      icon: <FaMicrochip />,
      title: 'Neural Processing',
      description: 'Custom neural processors for real-time data processing and analysis.'
    },
    {
      icon: <FaCogs />,
      title: 'Mechanical Systems',
      description: 'Precision-engineered components for optimal performance and reliability.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security Protocols',
      description: 'Multi-layer security systems to protect against unauthorized access.'
    },
    {
      icon: <FaCode />,
      title: 'Software Integration',
      description: 'Seamless integration with existing systems and infrastructure.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Computing',
      description: 'Cloud-based processing and storage for enhanced capabilities.'
    }
  ];

  const features = [
    {
      title: 'Advanced Sensors',
      items: ['Motion Detection', 'Environmental Analysis', 'Object Recognition', 'Spatial Mapping']
    },
    {
      title: 'Control Systems',
      items: ['Precise Movement', 'Balance Control', 'Force Feedback', 'Adaptive Response']
    },
    {
      title: 'Communication',
      items: ['Wi-Fi Connectivity', 'Bluetooth Integration', '5G Capability', 'Mesh Networking']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Technologies</h1>
            <p className="text-xl text-gray-300">
              Discover the cutting-edge technologies that power our robots and make them truly exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white border border-black/10 p-6 rounded-xl hover:bg-black/5 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-black/5 rounded-lg text-black text-2xl">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold ml-4">{tech.title}</h3>
                </div>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-center">{feature.title}</h3>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Innovation Process</h2>
            <p className="text-xl text-gray-600 mb-12">
              Our continuous innovation process ensures we stay at the forefront of robotics technology.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0">
            {['Research', 'Development', 'Testing', 'Implementation'].map((step, index) => (
              <div key={index} className="flex items-center group">
                <div className="text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{step}</h3>
                </div>
                {index < 3 && (
                  <div className="hidden md:block w-8 h-0.5 bg-black ml-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Experience Our Technology?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how our advanced robotics can transform your business or home.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies; 