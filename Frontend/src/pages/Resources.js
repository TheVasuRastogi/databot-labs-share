import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaBook, FaVideo, FaHeadset, 
  FaUsers, FaDownload, FaQuestionCircle,
  FaDiscord, FaGithub, FaLinkedin, FaTwitter,
  FaRocket, FaClock
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Resources = () => {
  const resourceSections = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API documentation.",
      icon: <FaBook className="w-8 h-8" />,
      buttonText: "Coming Soon",
      buttonLink: "#",
      comingSoon: true,
      eta: "Q2 2025",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides for all skill levels.",
      icon: <FaVideo className="w-8 h-8" />,
      buttonText: "Coming Soon",
      buttonLink: "#",
      comingSoon: true,
      eta: "Q3 2025",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Technical Support",
      description: "24/7 expert support for all your questions.",
      icon: <FaHeadset className="w-8 h-8" />,
      buttonText: "Contact Us",
      buttonLink: "/contact",
      comingSoon: false,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Community Forum",
      description: "Join our community of robot enthusiasts.",
      icon: <FaUsers className="w-8 h-8" />,
      buttonText: "Coming Soon",
      buttonLink: "#",
      comingSoon: true,
      eta: "Q2 2025",
      gradient: "from-fuchsia-500 to-pink-500"
    },
    {
      title: "Downloads",
      description: "Software updates and additional resources.",
      icon: <FaDownload className="w-8 h-8" />,
      buttonText: "Coming Soon",
      buttonLink: "#",
      comingSoon: true,
      eta: "Q4 2025",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "FAQ",
      description: "Frequently asked questions and answers.",
      icon: <FaQuestionCircle className="w-8 h-8" />,
      buttonText: "View FAQ",
      buttonLink: "/faq",
      comingSoon: false,
      gradient: "from-violet-500 to-fuchsia-500"
    }
  ];

  const socialLinks = [
    {
      name: "Discord Community",
      icon: <FaDiscord className="w-6 h-6" />,
      link: "https://discord.gg/databotlabs",
      description: "Join our Discord for real-time discussions",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/databotlabs",
      description: "Follow our open-source projects",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      link: "https://linkedin.com/company/databotlabs",
      description: "Connect with us professionally",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      link: "https://twitter.com/databotlabs",
      description: "Stay updated with our latest news",
      gradient: "from-blue-400 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      <Helmet>
        <title>Support & Resources | DataBot-Labs - Coming Soon</title>
        <meta name="description" content="Access comprehensive robotics resources, documentation, and support from DataBot-Labs. Join our community and stay updated with our upcoming features launching in 2025." />
        <meta name="keywords" content="robotics support, robot documentation, technical support, robotics community, DataBot-Labs resources, robotics tutorials, industrial automation help" />
        <meta property="og:title" content="Support & Resources | DataBot-Labs" />
        <meta property="og:description" content="Comprehensive robotics support and resources coming soon. Join our community to stay updated with launches throughout 2025." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://databotlabs.com/resources" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Support & Resources | DataBot-Labs" />
        <meta name="twitter:description" content="Join the future of robotics. Access comprehensive support and resources, launching throughout 2025." />
        <link rel="canonical" href="https://databotlabs.com/resources" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Support & Resources",
              "description": "Access comprehensive robotics resources and support from DataBot-Labs",
              "provider": {
                "@type": "Organization",
                "name": "DataBot-Labs",
                "url": "https://databotlabs.com"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Dark theme background with grid */}
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:50px_50px]" />
        
        {/* Gradient orbs with increased visibility */}
        <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full filter blur-[120px]" />
        <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] bg-blue-500/40 rounded-full filter blur-[120px]" />
        
        {/* Grid overlay with increased contrast */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Additional ambient light */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 via-transparent to-blue-500/5" />
      </div>

      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <div className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-20 animate-pulse"></div>
              <h1 className="relative text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
                Support & Resources
              </h1>
            </div>
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-10"></div>
              <p className="relative text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We're building comprehensive resources to support your robotics journey.
                <br />
                <span className="text-purple-400">Stay connected as we launch new features throughout 2025.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modern Resource Grid */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceSections.map((section, index) => (
              <div key={index} className="group relative">
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                
                {/* Glass Card */}
                <div className="relative h-full bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/[0.1]">
                  <div className="flex flex-col h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.gradient} p-0.5`}>
                      <div className="w-full h-full bg-[#0A0118] rounded-[10px] flex items-center justify-center">
                        <div className="text-transparent bg-gradient-to-r bg-clip-text from-white/80 to-white/40">
                          {section.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-6 flex-grow">
                      <h2 className="text-2xl font-semibold mb-3 text-white/90">{section.title}</h2>
                      <p className="text-gray-400 mb-6 text-lg">{section.description}</p>
                    </div>

                    {/* Button Area */}
                    <div className="mt-auto">
                      {section.comingSoon ? (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-purple-400">
                            <FaClock className="w-4 h-4" />
                            <span className="font-medium">Coming {section.eta}</span>
                          </div>
                          <div className={`w-full px-6 py-3 bg-gradient-to-r ${section.gradient} rounded-lg opacity-30 cursor-not-allowed`}>
                            <span className="font-medium text-white">Coming Soon</span>
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={section.buttonLink}
                          className={`block w-full px-6 py-3 bg-gradient-to-r ${section.gradient} rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20`}
                        >
                          <span className="font-medium text-white">{section.buttonText}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Early Access Section */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]" />
            
            {/* Glass Overlay */}
            <div className="relative backdrop-blur-sm bg-white/5 p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Get Early Access
                  </h2>
                  <p className="text-xl text-white/90 max-w-2xl">
                    Join our waiting list to be among the first to access our documentation, tutorials, and community features.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-semibold text-lg">
                    <FaRocket className="inline mr-2 text-violet-600 transform group-hover:translate-x-1 transition-transform duration-300" />
                    Join Waiting List
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Connect With Us Section */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="relative inline-block mb-12 w-full text-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-20"></div>
            <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Connect With Us
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
                
                {/* Glass Card */}
                <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-6 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/[0.1] h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`text-transparent bg-gradient-to-r ${social.gradient} bg-clip-text transition-colors duration-300`}>
                      {social.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{social.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 