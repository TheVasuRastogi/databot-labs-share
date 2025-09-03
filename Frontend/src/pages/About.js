import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUsers, FaLightbulb, FaChartLine, FaLinkedin, FaGithub, 
  FaMapMarkerAlt, FaCalendarAlt, FaMedal, FaHandshake, FaGlobeEurope, FaAward,
  FaCogs, FaMicrochip, FaShieldAlt, FaRocket, FaStar, FaTrophy, FaIndustry,
  FaClock, FaEuroSign, FaCrown, FaGlobe, FaHeart, FaTarget } from 'react-icons/fa';
import SEOHelmet from '../components/common/SEOHelmet';

const About = () => {
  const teamMembers = [
    {
      name: "Bart van der Hangen",
      role: "Founder & CEO",
      image: "/images/team/bart.jpg",
      bio: "Visionary leader with 15+ years in robotics engineering, pioneering ShowRobot Netherlands retail automation solutions with cutting-edge AI technology.",
      linkedin: "#",
      github: "#",
      expertise: ["Robotics Engineering", "AI Development", "Strategic Leadership"]
    },
    {
      name: "Vasu Rastogi",
      role: "Lead Developer & CTO",
      image: "/images/team/vasu.jpg",
      bio: "Full-stack developer and technology architect, building the next generation of retail automation platforms with 24/7 operation capabilities.",
      linkedin: "https://linkedin.com/in/vasurastogi/",
      github: "https://github.com/bvdhaagen/goliath",
      expertise: ["Full-Stack Development", "AI Integration", "System Architecture"]
    }
  ];

  const milestones = [
    {
      year: "2025 Q1",
      title: "Company Foundation",
      description: "ShowRobot Netherlands founded in Amsterdam Innovation District with vision to revolutionize retail automation",
      icon: <FaRocket />
    },
    {
      year: "2025 Q2",
      title: "Technology Breakthrough",
      description: "Developed proprietary AI algorithms for 24/7 retail automation with programmable intelligence",
      icon: <FaMicrochip />
    },
    {
      year: "2025 Q3",
      title: "Product Launch",
      description: "Launched first ShowRobot Netherlands retail automation system with exclusive technology",
      icon: <FaRobot />
    },
    {
      year: "2025 Q4",
      title: "Market Expansion",
      description: "Expanded ShowRobot Netherlands solutions across European retail markets with affordable pricing",
      icon: <FaGlobe />
    },
    {
      year: "2026 Q1",
      title: "Innovation Award",
      description: "ShowRobot Netherlands recognized as leading retail automation innovator in Netherlands",
      icon: <FaTrophy />
    }
  ];

  const achievements = [
    {
      number: "50+",
      label: "Retail Partners",
      description: "ShowRobot Netherlands solutions deployed across Europe"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "24/7 operation reliability for retail automation"
    },
    {
      number: "€2M+",
      label: "Revenue",
      description: "Generated through ShowRobot Netherlands solutions"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock technical support for all clients"
    }
  ];

  const values = [
    {
      title: "24/7 Innovation",
      description: "Continuous advancement in retail automation technology with ShowRobot Netherlands exclusive solutions",
      icon: <FaClock />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Programmable Excellence",
      description: "Advanced AI programming capabilities for custom retail automation solutions",
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
      title: "Affordable Innovation",
      description: "Competitive pricing with flexible rental, purchase, and service contract options",
      icon: <FaEuroSign />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      <SEOHelmet 
        title="ShowRobot Netherlands - About Us | Leading Retail Automation Company"
        description="Learn about ShowRobot Netherlands, the leading retail automation company offering 24/7 operation, programmable intelligence, and exclusive technology solutions across Europe."
        keywords="ShowRobot Netherlands, about us, retail automation company, 24/7 operation, programmable robots, exclusive technology, Netherlands robotics, retail automation solutions, company history"
      />

      {/* Background Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:100px_100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10">
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
                Leading Retail Automation
                <span className="block mt-2">Innovation</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto max-w-3xl text-xl leading-8 text-gray-300 mb-12"
              >
                ShowRobot Netherlands is revolutionizing retail automation with 24/7 operation, programmable intelligence, and exclusive technology solutions. Founded in Amsterdam's Innovation District, we're setting new standards for retail automation across Europe.
              </motion.p>

              {/* Key Stats removed for startup messaging */}
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-300">
                  <p>
                    Founded in 2025, ShowRobot Netherlands emerged from a vision to revolutionize retail automation across Europe. Our founders combined decades of experience in robotics engineering and AI development to create next-generation retail automation solutions.
                  </p>
                  <p>
                    Based in Amsterdam's thriving Innovation District, we're developing intelligent retail automation systems that operate 24/7 with programmable intelligence and exclusive technology. Our solutions are designed to be both powerful and accessible to retail businesses of all sizes.
                  </p>
                  <p>
                    ShowRobot Netherlands has quickly become the leading provider of retail automation solutions, with our proprietary technology setting new standards for 24/7 operation, programmable intelligence, and affordable pricing across European markets.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8">
                  <img 
                    src="/images/office-amsterdam.jpg" 
                    alt="ShowRobot Netherlands Amsterdam Innovation District Office" 
                    className="rounded-xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-3" />
                      <div>
                        <div className="font-semibold">Amsterdam, NL</div>
                        <div className="text-sm opacity-90">Innovation District</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ShowRobot Netherlands is built on four fundamental principles that drive our innovation in retail automation
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white text-2xl">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
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
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The visionary leaders behind ShowRobot Netherlands retail automation innovation
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="object-cover w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <FaStar className="text-white text-sm" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                        <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((skill, skillIndex) => (
                              <span key={skillIndex} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-4">
                          <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                          >
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                          <a 
                            href={member.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                          >
                            <FaGithub className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ShowRobot Netherlands milestones in revolutionizing retail automation across Europe
              </p>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                      <div className="relative bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                            <div className="text-white text-lg">{milestone.icon}</div>
                          </div>
                          <div>
                            <div className="text-blue-400 font-semibold text-sm">{milestone.year}</div>
                            <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-black"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse"></div>
              
              <div className="relative text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Transform Your Retail Operations?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Join the retail automation revolution with ShowRobot Netherlands. Experience 24/7 operation, programmable intelligence, and exclusive technology solutions.
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
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                  >
                    <FaHandshake className="mr-3" />
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 