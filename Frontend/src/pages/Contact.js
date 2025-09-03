import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDiscord, FaGithub, FaLinkedin, FaTwitter, FaCheckCircle, FaUserShield, FaHeadset, FaRocket, FaStar, FaUsers } from 'react-icons/fa';

const faqs = [
  {
    question: 'How quickly will I get a response?',
    answer: 'Our support team responds to most inquiries within 24 hours, Monday to Friday.'
  },
  {
    question: 'Can I get technical help with my robot?',
    answer: 'Absolutely! Our technical support covers setup, troubleshooting, and advanced integrations.'
  },
  {
    question: 'How do I request a feature or report a bug?',
    answer: 'You can use the contact form below or open an issue on our GitHub. We value your feedback!'
  },
  {
    question: 'Is there a community for peer support?',
    answer: 'Yes! Join our Discord or LinkedIn community to connect with other robotics enthusiasts.'
  }
];

const valueProps = [
  {
    icon: <FaUserShield className="w-8 h-8 text-blue-400" />,
    title: 'Expert Guidance',
    desc: 'Get help from robotics professionals with years of experience.'
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-purple-400" />,
    title: '24/7 Support',
    desc: 'We’re here for you around the clock, whenever you need us.'
  },
  {
    icon: <FaRocket className="w-8 h-8 text-pink-400" />,
    title: 'Fast Response',
    desc: 'Most questions are answered within 24 hours.'
  }
];

const socialLinks = [
  { name: 'Discord', icon: <FaDiscord className="w-6 h-6" />, link: 'https://discord.gg/databotlabs', color: 'hover:text-indigo-500' },
  { name: 'GitHub', icon: <FaGithub className="w-6 h-6" />, link: 'https://github.com/bvdhaagen/goliath', color: 'hover:text-gray-500' },
  { name: 'LinkedIn', icon: <FaLinkedin className="w-6 h-6" />, link: 'https://linkedin.com/company/databotlabs', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: <FaTwitter className="w-6 h-6" />, link: 'https://twitter.com/databotlabs', color: 'hover:text-sky-500' }
];

const officeInfo = {
  address: 'Amsterdam, Netherlands',
  email: 'b.vanderhaagen76@gmail.com',
  phone: '+31 6 43465990',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM CET'
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white relative overflow-hidden">
      <Helmet>
        <title>Contact Support | DataBot-Labs Robotics</title>
        <meta name="description" content="Contact DataBot-Labs for expert robotics support, fast response, and 24/7 help. Get in touch with our team or join our community." />
        <link rel="canonical" href="https://databotlabs.com/contact" />
      </Helmet>

      {/* Hero */}
      <div className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20 animate-pulse"></div>
            <h1 className="relative text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Contact Support
            </h1>
          </div>
          <p className="relative text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Need help? Our robotics experts are here for you 24/7. Reach out for technical support, business inquiries, or community connections.
          </p>
        </div>
      </div>

      {/* Value Props */}
      <div className="max-w-5xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.05] p-8 text-center flex flex-col items-center">
              <div className="mb-4">{prop.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white/90">{prop.title}</h3>
              <p className="text-gray-400">{prop.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form & Info (map removed) */}
      <div className="max-w-7xl mx-auto px-4 mb-24 grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.05] p-10 relative">
          <h2 className="text-2xl font-bold mb-6 text-white/90">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 text-white" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 text-white" placeholder="john@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 text-white" placeholder="How can we help?" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.1] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 text-white resize-none" placeholder="Your message..." />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-pink-600 text-white rounded-lg hover:from-blue-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 font-medium text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
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
        {/* Contact Info (map and testimonials removed) */}
        <div className="space-y-10">
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.05] p-10">
            <h2 className="text-2xl font-bold mb-6 text-white/90">Our Office</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">{officeInfo.address}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="w-6 h-6 text-blue-400" />
                <a href={`mailto:${officeInfo.email}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{officeInfo.email}</a>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="w-6 h-6 text-blue-400" />
                <a href={`tel:${officeInfo.phone}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">{officeInfo.phone}</a>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">{officeInfo.hours}</span>
              </div>
            </div>
          </div>
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
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
          <h2 className="relative text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Join Our Community
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 p-4 bg-white/[0.03] rounded-lg hover:bg-white/[0.08] transition-all duration-300 ${social.color}`}
            >
              <div>{social.icon}</div>
              <span className="font-medium">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;