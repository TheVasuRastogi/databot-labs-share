import React, { useState } from 'react';

const Image = ({ src, alt, className, fallback = '/images/databot-logo.svg', ...props }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={error ? fallback : src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        {...props}
      />
      {!loaded && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse rounded-lg" />
      )}
    </div>
  );
};

export default Image;
