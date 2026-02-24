import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
  FaUserShield,
  FaHeadset,
  FaRocket,
  FaClock,
  FaChevronDown,
} from 'react-icons/fa';

const CONTENT_WIDTH = 'max-w-5xl';

const faqs = [
  {
    question: 'Hoe snel krijg ik een reactie?',
    answer:
      'Ons supportteam reageert op de meeste vragen binnen 24 uur, maandag tot vrijdag.',
  },
  {
    question: 'Kan ik technische hulp krijgen met mijn robot?',
    answer:
      'Absoluut! Onze technische ondersteuning omvat installatie, troubleshooting en geavanceerde integraties.',
  },
  {
    question: 'Hoe vraag ik een functie aan of meld ik een bug?',
    answer:
      'Gebruik het contactformulier hieronder of open een issue op onze GitHub. We waarderen uw feedback!',
  },
  {
    question: 'Is er een community voor ondersteuning?',
    answer:
      'Ja! Word lid van onze Discord- of LinkedIn-community om in contact te komen met andere robotica-enthousiastelingen.',
  },
];

const valueProps = [
  {
    icon: FaUserShield,
    title: 'Expertbegeleiding',
    desc: 'Krijg hulp van robotica-professionals met jarenlange ervaring.',
  },
  {
    icon: FaHeadset,
    title: '24/7 Ondersteuning',
    desc: 'We zijn er voor u, wanneer u ons nodig heeft.',
  },
  {
    icon: FaRocket,
    title: 'Snelle reactie',
    desc: 'De meeste vragen worden binnen 24 uur beantwoord.',
  },
];

const socialLinks = [
  {
    name: 'Discord',
    icon: FaDiscord,
    link: 'https://discord.gg/databotlabs',
    label: 'Word lid van Discord',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/bvdhaagen/goliath',
    label: 'Bekijk op GitHub',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com/company/databotlabs',
    label: 'Verbinden op LinkedIn',
  },
  {
    name: 'Twitter',
    icon: FaTwitter,
    link: 'https://twitter.com/databotlabs',
    label: 'Volg op Twitter',
  },
];

const officeInfo = {
  address: 'Grondzeilersplantsoen 53, 1333 BS Almere, Netherlands',
  email: 'b.vanderhaagen76@gmail.com',
  phone: '+31 6 43465990',
  hours: 'Maandag – Vrijdag: 9:00 – 18:00 CET',
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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
    <div className="min-h-screen w-full bg-white text-black">
      <Helmet>
        <title>Contact | DataBot Labs</title>
        <meta
          name="description"
          content="Neem contact op met DataBot-Labs voor robotica-ondersteuning, snelle reactie en 24/7 hulp. Bereik ons team of word lid van onze community."
        />
        <link rel="canonical" href="https://databotlabs.com/contact" />
      </Helmet>

      {/* Hero */}
      <section
        className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-10 sm:pb-12`}
        aria-labelledby="contact-heading"
      >
        <div className="border-b border-gray-200 pb-10">
          <h1
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-black tracking-tight"
          >
            Contact
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Hulp nodig? Onze robotica-experts staan voor u klaar. Neem contact op voor
            technische ondersteuning, zakelijke vragen of onze community.
          </p>
        </div>
      </section>

      {/* Value props */}
      <section
        className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 py-8`}
        aria-label="Why contact us"
      >
        <div className="grid sm:grid-cols-3 gap-6">
          {valueProps.map((prop, idx) => {
            const Icon = prop.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-6 rounded-xl border border-gray-200 bg-gray-50/80"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-200 text-gray-700">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-semibold text-black">
                  {prop.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                  {prop.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + Contact info */}
      <section
        className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 py-10 sm:py-14`}
        aria-label="Neem contact op"
      >
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-black">
                Stuur ons een bericht
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                We reageren binnen 24 uur.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-gray-800 mb-1.5"
                    >
                      Naam
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 transition-colors outline-none"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-gray-800 mb-1.5"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 transition-colors outline-none"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
className="block text-sm font-medium text-gray-800 mb-1.5"
                    >
                      Onderwerp
                    </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 transition-colors outline-none"
                    placeholder="Waar kunnen we bij helpen?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
className="block text-sm font-medium text-gray-800 mb-1.5"
                    >
                      Bericht
                    </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 focus:ring-offset-0 transition-colors outline-none resize-none"
                    placeholder="Uw bericht…"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[160px] px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                        aria-hidden
                      />
                      Versturen…
                    </>
                  ) : isSubmitted ? (
                    <>
                      <FaCheckCircle className="w-4 h-4 shrink-0" />
                      Bericht verzonden
                    </>
                  ) : (
                    'Verstuur bericht'
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Office & social */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-6">
              <h2 className="text-lg font-semibold text-black">
                Kantoor & openingstijden
              </h2>
              <ul className="mt-4 space-y-4" role="list">
                <li className="flex gap-3">
                  <FaMapMarkerAlt
                    className="w-5 h-5 text-gray-500 shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-sm text-gray-700">
                    {officeInfo.address}
                  </span>
                </li>
                <li className="flex gap-3">
                  <FaEnvelope
                    className="w-5 h-5 text-gray-500 shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <a
                    href={`mailto:${officeInfo.email}`}
                    className="text-sm text-gray-700 hover:text-black underline underline-offset-2 transition-colors"
                  >
                    {officeInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <FaPhone
                    className="w-5 h-5 text-gray-500 shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <a
                    href={`tel:${officeInfo.phone.replace(/\s/g, '')}`}
                    className="text-sm text-gray-700 hover:text-black underline underline-offset-2 transition-colors"
                  >
                    {officeInfo.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <FaClock
                    className="w-5 h-5 text-gray-500 shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-sm text-gray-700">
                    {officeInfo.hours}
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50/80 p-6">
              <h2 className="text-lg font-semibold text-black">
                Word lid van onze community
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Verbind en ontvang updates van het team.
              </p>
              <ul className="mt-4 flex flex-wrap gap-3" role="list">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-800 hover:bg-gray-100 hover:border-gray-300 transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4 text-gray-600" />
                        {social.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className={`${CONTENT_WIDTH} mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-gray-200`}
        aria-label="Veelgestelde vragen"
      >
        <h2 className="text-xl font-semibold text-black">FAQ</h2>
        <p className="mt-1 text-sm text-gray-600">
          Korte antwoorden op veelgestelde vragen.
        </p>
        <ul className="mt-6 divide-y divide-gray-200" role="list">
          {faqs.map((faq, idx) => (
            <li key={idx} className="py-4 first:pt-0">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-lg -m-2 p-2"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                aria-expanded={openFAQ === idx}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span className="text-base font-medium text-black">
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 flex items-center justify-center rounded border border-gray-300 text-gray-600 transition-transform ${
                    openFAQ === idx ? 'rotate-180' : ''
                  }`}
                  aria-hidden
                >
                  <FaChevronDown className="w-3 h-3" />
                </span>
              </button>
              <div
                id={`faq-answer-${idx}`}
                role="region"
                aria-labelledby={`faq-question-${idx}`}
                className={`overflow-hidden transition-all duration-200 ${
                  openFAQ === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="mt-2 pl-0 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Contact;
