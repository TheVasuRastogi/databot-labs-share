import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title = 'DataBot-Labs - The Future of Robotics',
      description = 'Discover cutting-edge robotic solutions from DataBot-Labs, combining advanced AI, precision engineering, and intuitive design. Explore industrial, domestic, educational, and entertainment robots.',
  keywords = 'robots, AI, automation, industrial robots, domestic robots, educational robots, entertainment robots',
  canonicalUrl = window.location.href
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/robot-banner.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/images/robot-banner.jpg" />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DataBot-Labs" />
    </Helmet>
  );
};

export default SEOHelmet; 