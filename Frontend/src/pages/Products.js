import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaStar, FaArrowRight, FaChevronDown, FaCog, FaShieldAlt, FaBolt } from 'react-icons/fa';
import SEOHelmet from '../components/common/SEOHelmet';

const faqs = [
  {
    q: 'Voor welke branches is Goliath geschikt?',
    a: 'Retailautomatisering, industriële productie, logistiek, onderwijs en onderzoek hebben allemaal baat bij onze modulaire robots en onderdelen.'
  },
  {
    q: 'Ondersteunen jullie robots ROS en moderne toolchains?',
    a: 'Ja. Onze platforms ondersteunen ROS/ROS2, gangbare SDK\'s en moderne toolchains voor snelle integratie en prototyping.'
  },
  {
    q: 'Hoe kan ik een product evalueren vóór aankoop?',
    a: 'Neem contact op via de Contactpagina. We bieden demo\'s, video\'s en specificaties op maat van uw toepassing.'
  },
  {
    q: 'Bieden jullie maatwerk modules of integraties?',
    a: 'Absoluut. We hebben diverse gereedschappen, grijpers en vision-systemen en passen modules en interfaces aan op uw wensen.'
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState(null);

  const renderSpecs = (specs) => {
    if (!specs || typeof specs !== 'object') return null;
    return (
      <ul className="space-y-1.5 list-disc list-inside text-[#525252] text-xs">
        {Object.entries(specs).slice(0, 3).map(([key, value]) => (
          <li key={key}>
            <span className="text-[#374151] font-medium capitalize">{key.replace(/_/g, ' ')}:</span>{' '}
            {typeof value === 'object' ? (
              <span className="text-[#525252]">{Object.values(value).slice(0, 2).join(', ')}</span>
            ) : (
              <span className="text-[#525252]">{String(value)}</span>
            )}
          </li>
        ))}
      </ul>
    );
  };

  const products = [
    {
      id: '1',
      name: 'Goliath ShowRobot - Advanced',
      category: 'Retail Automation',
      image: '/images/goliath_alum.jpg',
      rating: 5.0,
      shortDesc: 'Revolutionaire oplossing met 24/7 inzet en programmeerbare intelligentie',
      highlights: [
        'Armlengte: 1,04 m',
        'Totale reikwijdte: 84 m',
        'Precisie: ±0,1 mm',
        'ROS2-compatibel'
      ],
      specs: {
        arm: { length: '1.04 meters', weight: '17 kg', payload: '5 kg' },
        rail: { length: '1-2.5 meters', accuracy: '±0.05 mm' }
      },
      tags: ['industrial', 'automation', 'precision']
    },
    {
      id: '2',
      name: 'Goliath - Mobiele Assistent',
      category: 'Automation',
      image: '/images/goliath_mobile.jpg',
      rating: 4.9,
      shortDesc: 'Geavanceerd mobiel systeem met robotarm en programmeerbare intelligentie',
      highlights: [
        'Afmetingen: 68×42×30 cm',
        'Gewicht: 35 kg',
        '4× 80W BLDC-motoren',
        'LIDAR-navigatie'
      ],
      specs: {
        physical: { dimensions: '68×42×30 cm', weight: '35 kg' },
        drive: { motors: '4× 80W BLDC', battery: '24V/48V' }
      },
      tags: ['mobile', 'autonomous', 'all-terrain']
    },
    {
      id: '3',
      name: 'Goliath Linear Railed',
      category: 'Automation',
      image: '/images/goliath_linear.jpg',
      rating: 4.8,
      shortDesc: 'Krachtig retailautomatiseringssysteem met 24/7 inzet en programmeerbare intelligentie',
      highlights: [
        'Lengte: 1,04 m',
        'Gewicht: 17 kg',
        'Industriekwaliteit',
        'Hoge precisie'
      ],
      specs: {
        physical: { length: '1.04 meters', weight: '17 kg' },
        construction: { frame: 'Aluminum + Steel', mount: 'ISO 9409-1' }
      },
      tags: ['industrial', 'fixed', 'automation']
    }
  ];

  const categories = [
    { id: 'all', name: 'Alle producten' },
    { id: 'retail', name: 'Retailautomatisering' },
    { id: 'automation', name: 'Automatisering' }
  ];

  const filteredProducts = products.filter(product => {
    return selectedCategory === 'all' ||
      product.category.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: filteredProducts.map((p, i) => ({
      '@type': 'Product',
      position: i + 1,
      name: p.name,
      description: p.shortDesc,
      image: p.image,
      category: p.category,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: p.rating,
        reviewCount: 1
      }
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' }
    ]
  };

  const whyItems = [
    { icon: FaCog, title: 'Modulair & integreerbaar', desc: 'ROS/ROS2, SDK\'s en moderne toolchains voor snelle integratie.' },
    { icon: FaShieldAlt, title: 'Betrouwbaar & veilig', desc: 'Gebouwd voor 24/7 inzet met robuuste veiligheid en diagnostiek.' },
    { icon: FaBolt, title: 'Sneller inzetten', desc: 'Hardware- en software-ecosysteem om van prototype naar productie te schalen.' }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f7f8fa] text-[#1a1a1a]">
      <SEOHelmet
        title="Producten | DataBot Labs"
        description="Bekijk producten en onderdelen van DataBot Labs: specificaties, highlights en onderdelen voor retailautomatisering, mobiele robotica en AI-vision."
        keywords="DataBot Labs, retailautomatisering, robotica, specificaties, AI vision, mobiele robotica, collaborative robots, lineaire rail, grijper"
      />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbs)}</script>

      {/* Hero – premium dark with soft gradient into content */}
      <section className="relative overflow-hidden bg-[#0f1419] text-white pt-20 pb-20 sm:pt-24 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#151c24] to-[#0f1419]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.06]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7f8fa] to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
              Producten & onderdelen
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed">
              Specificaties, highlights en onderdelen voor retailautomatisering, mobiele robotica en AI-vision — alles op één plek.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-white text-[#0f1419] shadow-md'
                      : 'bg-white/12 text-white/85 border border-white/15 hover:bg-white/18 hover:border-white/25'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Product grid */}
      <section className="container mx-auto px-4 sm:px-6 py-14 sm:py-20 max-w-6xl -mt-2 relative z-10">
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProducts.map((product, idx) => (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group bg-white rounded-2xl border border-[#e8eaed] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:border-[#dfe1e4] transition-all duration-300 flex flex-col"
                >
                  <Link to={`/products/${product.id}`} className="block flex-1 flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f0f1f3]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/95 text-[#1a1a1a] backdrop-blur-sm shadow-sm">
                          {product.category}
                        </span>
                        <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-white/95 text-[#1a1a1a] backdrop-blur-sm shadow-sm">
                          <FaStar className="text-amber-500" /> {product.rating}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-end">
                        <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Bekijk details <FaArrowRight className="text-xs" />
                        </span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#0f1419] transition-colors line-clamp-2">
                        {product.name}
                      </h2>
                      <p className="text-[#525252] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                        {product.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.highlights.slice(0, 3).map((h, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-[#f0f1f3] text-[#525252] text-xs">
                            {h}
                          </span>
                        ))}
                      </div>
                      {product.specs && Object.keys(product.specs).length > 0 && (
                        <div className="mb-4 pt-3 border-t border-[#f0f1f3]">
                          {renderSpecs(product.specs)}
                        </div>
                      )}
                      <div className="mt-auto flex flex-wrap gap-2">
                        {product.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-[#f7f8fa] text-[#737373] text-xs capitalize">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-full gap-2 py-2.5 rounded-xl text-sm font-semibold bg-[#0f1419] text-white hover:bg-[#1a222d] transition-colors"
                    >
                      Neem contact op over dit product
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 sm:py-24"
            >
              <FaRobot className="text-5xl sm:text-6xl text-[#c4c8cc] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Geen producten gevonden</h3>
              <p className="text-[#525252]">Probeer een andere categorie.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Why Choose */}
      <section className="border-t border-[#e8eaed] bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] text-center mb-10">
            Waarom DataBot Labs
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {whyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#0f1419]/08 text-[#0f1419] mb-4">
                  <item.icon className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-[#525252] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[#525252] text-sm sm:text-base max-w-2xl mx-auto mt-10 leading-relaxed">
            Van retailarmen en mobiele platforms tot vision-systemen en lineaire rails — elk product is gebouwd voor betrouwbaarheid, modulariteit en snelle inzet. Neem contact op voor demo's, advies op maat en integratie-ondersteuning.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#e8eaed] bg-[#f7f8fa]">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] text-center mb-8">
            Veelgestelde vragen
          </h2>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#e8eaed] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
              >
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-[#1a1a1a] font-medium hover:bg-[#f7f8fa]/80 transition-colors"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  aria-expanded={openFAQ === i}
                >
                  <span>{f.q}</span>
                  <FaChevronDown className={`text-[#737373] flex-shrink-0 transition-transform ${openFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-4 text-[#525252] text-sm leading-relaxed"
                  >
                    {f.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
