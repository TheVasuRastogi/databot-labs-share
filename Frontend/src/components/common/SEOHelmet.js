import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title = 'DataBot-Labs - The Future of Robotics',
      description = 'Discover cutting-edge robotic solutions from DataBot-Labs, combining advanced AI, precision engineering, and intuitive design. Explore industrial, domestic, educational, and entertainment robots.',
  keywords = 'robots, AI, automation, industrial robots, domestic robots, educational robots, entertainment robots',
  canonicalUrl = typeof window !== 'undefined' ? window.location.href : '',
  openGraphImage = '/images/robot-banner.jpg'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Preconnects for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={openGraphImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={openGraphImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0A0A0B" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DataBot-Labs" />
    </Helmet>
  );
};

export default SEOHelmet; 