import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaMapMarkerAlt, FaEnvelope, FaPhone, 
  FaDiscord, FaGithub, FaLinkedin, FaTwitter,
  FaClock, FaCheckCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { contactAPI } from '../utils/api';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting contact form:', formData);
      const response = await contactAPI.submitContact(formData);
      console.log('Contact form response:', response.data);

      setIsSubmitted(true);
      toast.success('Message sent successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error(error.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const officeInfo = {
    address: "Science Park 400, 1098 XH Amsterdam, Netherlands",
    email: "contact@databot-labs.com",
    phone: "+31 (0)20 123 4567",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM CET"
  };

  const socialLinks = [
    {
      name: "Discord",
      icon: <FaDiscord className="w-6 h-6" />,
      link: "https://discord.gg/databotlabs",
      color: "hover:text-indigo-500"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
      link: "https://github.com/bvdhaagen/goliath",
      color: "hover:text-gray-500"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-6 h-6" />,
      link: "https://linkedin.com/company/databotlabs",
      color: "hover:text-blue-500"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-6 h-6" />,
      link: "https://twitter.com/databotlabs",
      color: "hover:text-sky-500"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      <Helmet>
        <title>Contact Us | DataBot-Labs - Robotics Innovation</title>
        <meta name="description" content="Get in touch with DataBot-Labs for inquiries about our robotics solutions, partnerships, or support. We're here to help shape the future of robotics together." />
      </Helmet>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#030014]" />
        <div className="absolute inset-0 bg-grid-white/[0.08] bg-[length:50px_50px]" />
        <div className="absolute -top-[500px] -left-[500px] w-[1000px] h-[1000px] bg-purple-500/40 rounded-full filter blur-[120px]" />
        <div className="absolute -bottom-[500px] -right-[500px] w-[1000px] h-[1000px] bg-blue-500/40 rounded-full filter blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#4f4f4f30_1px,transparent_1px)] bg-[size:100px_100px]" />
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
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Have questions about our robotics solutions?
                <br className="hidden sm:block" />
                We're here to help shape the future together.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8">
                <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-300 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-300 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-300 text-white"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors duration-300 text-white resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 font-medium text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <FaCheckCircle className="w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Office Information */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8">
                  <h2 className="text-2xl font-semibold mb-6">Visit Our Office</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <FaMapMarkerAlt className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-200">Address</h3>
                        <p className="text-gray-400">{officeInfo.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <FaEnvelope className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-200">Email</h3>
                        <a href={`mailto:${officeInfo.email}`} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                          {officeInfo.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <FaPhone className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-200">Phone</h3>
                        <a href={`tel:${officeInfo.phone}`} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                          {officeInfo.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/[0.03] rounded-lg">
                        <FaClock className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-gray-200">Business Hours</h3>
                        <p className="text-gray-400">{officeInfo.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-xl border border-white/[0.05] p-8">
                  <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 p-4 bg-white/[0.03] rounded-lg hover:bg-white/[0.08] transition-all duration-300"
                      >
                        <div className={`text-gray-400 transition-colors duration-300 ${social.color}`}>
                          {social.icon}
                        </div>
                        <span className="font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;