 import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRobot, FaUsers, FaLightbulb, FaChartLine, FaLinkedin, FaGithub, 
  FaMapMarkerAlt, FaCalendarAlt, FaMedal, FaHandshake, FaGlobeEurope } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: "Bart van der Hangen",
      role: "Founder and CEO",
      image: "/images/team/bart.jpg", // Use a placeholder or add this image
      bio: "Visionary founder and CEO, leading the company with a passion for robotics and innovation.",
      linkedin: "#", // Add real link if available
      github: "#" // Add real link if available
    },
    {
      name: "Vasu Rastogi",
      role: "Web Dev",
      image: "/images/team/vasu.jpg", // Use a placeholder or add this image
      bio: "Web developer dedicated to building seamless and engaging user experiences for the robotics platform.",
      linkedin: "https://linkedin.com/in/vasurastogi/", // Add real link if available
      github: "https://github.com/bvdhaagen/goliath"
    }
  ];

  const milestones = [
    {
      year: "2025",
      title: "Foundation",
      description: "DataBot-Labs founded in Amsterdam Innovation District"
    },
    {
      year: "2025 Q2",
      title: "First Patent",
      description: "Filed patent for our innovative robotic control system"
    },
    {
      year: "2025 Q3",
      title: "Second Patent",
      description: "Filed patent for AI-driven motion planning algorithm"
    },
    {
      year: "2025 Q4",
      title: "Product Development",
      description: "Initiated development of our flagship industrial robot"
    }
  ];

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      <Helmet>
        <title>DataBot-Labs | Innovative Dutch Robotics Startup in Amsterdam</title>
        <meta name="description" content="DataBot-Labs, founded in 2025, is an emerging robotics startup in Amsterdam revolutionizing industrial automation with AI-powered robotic solutions." />
        <meta name="keywords" content="robotics startup amsterdam, dutch robotics company, industrial automation netherlands, DataBot-Labs, AI robotics, robotic automation startup 2025, innovative robotics company amsterdam" />
        <meta property="og:title" content="DataBot-Labs | Next-Gen Robotics Innovation in Amsterdam" />
        <meta property="og:description" content="Founded in 2025, DataBot-Labs is Amsterdam's newest robotics innovator, combining Dutch engineering excellence with cutting-edge AI technology." />
        <meta property="og:image" content="/images/databot-labs-office.jpg" />
        <meta property="og:url" content="https://databotlabs.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DataBot-Labs | Dutch Robotics Innovation" />
        <meta name="twitter:description" content="Emerging robotics startup in Amsterdam, founded 2025. Pioneering accessible industrial automation solutions." />
        <meta name="twitter:image" content="/images/databot-labs-office.jpg" />
        <link rel="canonical" href="https://databotlabs.com/about" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DataBot-Labs" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DataBot-Labs",
              "url": "https://databotlabs.com",
              "logo": "https://databotlabs.com/images/logo.png",
              "foundingDate": "2025",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Dr. Sophie van der Berg"
                },
                {
                  "@type": "Person",
                  "name": "Lars Janssen"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amsterdam",
                "addressCountry": "NL"
              },
              "description": "Innovative robotics startup specializing in AI-powered industrial automation solutions",
              "sameAs": [
                "https://linkedin.com/company/databotlabs",
                "https://github.com/bvdhaagen/goliath"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium">
                Founded in 2025
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                The Future of Robotics Starts Here
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
                A new force in robotics innovation, born in Amsterdam's Innovation District. We're making advanced industrial automation accessible through AI-powered solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Founded in early 2025, DataBot-Labs emerged from a vision to democratize industrial robotics. Our founders combined their expertise in robotics engineering and AI to create next-generation automation solutions.
                </p>
                <p className="text-gray-300 mb-6">
                  Based in Amsterdam's thriving tech ecosystem, we're developing intelligent robotic systems that are both powerful and accessible to businesses of all sizes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-400">2</div>
                    <div className="text-sm text-gray-400">Team Members</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-400">2</div>
                    <div className="text-sm text-gray-400">Patents Filed</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-400">1</div>
                    <div className="text-sm text-gray-400">Robot Prototype</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-2xl font-bold text-indigo-400">1</div>
                    <div className="text-sm text-gray-400">Office</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/images/office-amsterdam.jpg" 
                  alt="DataBot-Labs Amsterdam Innovation District Office" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white px-6 py-3 rounded-lg">
                  <FaMapMarkerAlt className="inline-block mr-2" />
                  Amsterdam, NL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-16 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                  <FaLightbulb className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-gray-300">
                  Pushing boundaries in AI-driven robotics and automation.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <FaHandshake className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-300">
                  Making advanced robotics solutions accessible to all businesses.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <FaGlobeEurope className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dutch Innovation</h3>
                <p className="text-gray-300">
                  Combining Dutch engineering excellence with cutting-edge AI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-indigo-400 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaLinkedin className="w-5 h-5" />
                      </a>
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-16 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-500/30"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center mb-4">
                          <FaCalendarAlt className="w-5 h-5 text-indigo-400 mr-2" />
                          <span className="text-indigo-400 font-semibold">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Highlight */}
        <div className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer"></div>
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Our First Robot</h2>
                  <p className="text-white/80 text-lg max-w-2xl">
                    Currently developing our flagship industrial robot, combining advanced AI with intuitive controls. Join our waiting list to be among the first to experience the future of automation.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Join Waiting List
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 