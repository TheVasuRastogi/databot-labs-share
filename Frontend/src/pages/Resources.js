import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBook, FaVideo, FaHeadset, FaUsers, FaDownload, FaQuestionCircle, FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaRocket, FaEnvelope, FaCheckCircle, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How do I get started with your robotics platform?',
    answer: 'Visit our Getting Started section below for step-by-step onboarding, or contact support for personalized help.'
  },
  {
    question: 'Where can I find documentation and tutorials?',
    answer: 'All official documentation and video tutorials are available in the Resources grid above. More content is added regularly.'
  },
  {
    question: 'How do I join the community or get support?',
    answer: 'Join our Discord, follow us on GitHub, or use the Contact page for direct support. Community links are at the bottom of this page.'
  },
  {
    question: 'Can I contribute to your open-source projects?',
    answer: 'Absolutely! Visit our GitHub to see open issues, contribute code, or suggest features.'
  }
];

const resourceSections = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides, API docs, and integration manuals.',
    icon: <FaBook className="w-8 h-8" />,
    buttonText: 'View Docs',
    buttonLink: '#',
    comingSoon: false,
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for all skill levels.',
    icon: <FaVideo className="w-8 h-8" />,
    buttonText: 'Watch Videos',
    buttonLink: '#',
    comingSoon: false,
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    title: 'Technical Support',
    description: '24/7 expert support for all your questions.',
    icon: <FaHeadset className="w-8 h-8" />,
    buttonText: 'Contact Support',
    buttonLink: '/contact',
    comingSoon: false,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Community Forum',
    description: 'Join our community of robot enthusiasts.',
    icon: <FaUsers className="w-8 h-8" />,
    buttonText: 'Join Forum',
    buttonLink: '#',
    comingSoon: true,
    eta: 'Q2 2025',
    gradient: 'from-fuchsia-500 to-pink-500'
  },
  {
    title: 'Downloads',
    description: 'Software updates and additional resources.',
    icon: <FaDownload className="w-8 h-8" />,
    buttonText: 'Download',
    buttonLink: '#',
    comingSoon: true,
    eta: 'Q4 2025',
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions and answers.',
    icon: <FaQuestionCircle className="w-8 h-8" />,
    buttonText: 'View FAQ',
    buttonLink: '/faq',
    comingSoon: false,
    gradient: 'from-violet-500 to-fuchsia-500'
  }
];

const socialLinks = [
  {
    name: 'Discord Community',
    icon: <FaDiscord className="w-6 h-6" />,
    link: 'https://discord.gg/databotlabs',
    description: 'Join our Discord for real-time discussions',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'GitHub',
    icon: <FaGithub className="w-6 h-6" />,
    link: 'https://github.com/bvdhaagen/goliath',
    description: 'Follow our open-source projects',
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-6 h-6" />,
    link: 'https://linkedin.com/company/databotlabs',
    description: 'Connect with us professionally',
    gradient: 'from-blue-600 to-blue-800'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="w-6 h-6" />,
    link: 'https://twitter.com/databotlabs',
    description: 'Stay updated with our latest news',
    gradient: 'from-blue-400 to-blue-600'
  }
];

const Resources = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      <Helmet>
        <title>Robotics Resources & Support | DataBot-Labs</title>
        <meta name="description" content="Access comprehensive robotics resources, documentation, tutorials, and 24/7 support from DataBot-Labs. Join our community and accelerate your robotics journey." />
        <meta name="keywords" content="robotics resources, robot documentation, technical support, robotics tutorials, community, DataBot-Labs, industrial automation help" />
        <meta property="og:title" content="Robotics Resources & Support | DataBot-Labs" />
        <meta property="og:description" content="Comprehensive robotics resources, documentation, tutorials, and support. Join our community and accelerate your robotics journey." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://databotlabs.com/resources" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Robotics Resources & Support | DataBot-Labs" />
        <meta name="twitter:description" content="Access comprehensive robotics resources, documentation, tutorials, and support from DataBot-Labs." />
        <link rel="canonical" href="https://databotlabs.com/resources" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Robotics Resources & Support",
            "description": "Access comprehensive robotics resources, documentation, tutorials, and support from DataBot-Labs.",
            "provider": {
              "@type": "Organization",
              "name": "DataBot-Labs",
              "url": "https://databotlabs.com"
            }
          }
        `}</script>
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

      {/* Hero Section */}
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-20 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              Robotics Resources & Support
            </h1>
          </div>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-lg blur opacity-10"></div>
            <p className="relative text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to build, deploy, and support your robotics solutions. <span className="text-purple-400">Explore, learn, and connect with our global community.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Resource Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceSections.map((section, index) => (
            <div key={index} className="group relative">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${section.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
              <div className="relative h-full bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/[0.1]">
                <div className="flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.gradient} p-0.5`}>
                    <div className="w-full h-full bg-[#0A0118] rounded-[10px] flex items-center justify-center">
                      <div className="text-transparent bg-gradient-to-r bg-clip-text from-white/80 to-white/40">
                        {section.icon}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex-grow">
                    <h2 className="text-2xl font-semibold mb-3 text-white/90">{section.title}</h2>
                    <p className="text-gray-400 mb-6 text-lg">{section.description}</p>
                  </div>
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

      {/* Getting Started Section */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.05] p-10 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white/90">Getting Started</h2>
          <p className="text-lg text-gray-300 mb-6">New to DataBot-Labs? Follow our quick start guide to set up your first robot, access documentation, and join the community.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="#" className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300">Read Quick Start Guide</Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">Contact Support</Link>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse"></div>
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-lg text-white/90 mb-6">Subscribe to our newsletter for the latest resources, tutorials, and community news.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input type="email" required placeholder="Your email address" className="px-6 py-3 rounded-lg border-none focus:ring-2 focus:ring-purple-400 w-full md:w-2/3 text-black" />
            <button type="submit" className="px-8 py-3 bg-white text-violet-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
              <FaEnvelope className="w-5 h-5" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.05] p-10">
          <h2 className="text-3xl font-bold mb-8 text-white/90 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-white/10 pb-4">
                <button
                  className="flex items-center justify-between w-full text-lg text-left text-white/80 font-medium focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  aria-expanded={openFAQ === idx}
                >
                  <span>{faq.question}</span>
                  <span className="ml-4">{openFAQ === idx ? '-' : '+'}</span>
                </button>
                {openFAQ === idx && (
                  <div className="mt-2 text-gray-300 text-base animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social/Community Section */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="relative inline-block mb-12 w-full text-center">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-20"></div>
          <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
            Connect With Our Community
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
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.gradient} rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
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
  );
};

export default Resources; 