/**
 * KenBurnsImage Component
 *
 * Purpose: Cinematic 5-second Ken Burns effect for ImageKit.io images
 * Triggers on section activation, providing slow pan-and-zoom
 *
 * Props:
 * - src: ImageKit.io URL
 * - alt: Image alt text
 * - isActive: Triggers animation when true
 */

import React, { useEffect, useState } from 'react';
import './KenBurnsImage.css';

interface KenBurnsImageProps {
  src: string;
  alt: string;
  isActive: boolean;
}

export const KenBurnsImage: React.FC<KenBurnsImageProps> = ({ src, alt, isActive }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Optimize ImageKit URL with high quality and sharpening for text readability
  const optimizedSrc = src.includes('?')
    ? `${src}&tr=w-1600,q-95,oi-sharp`
    : `${src}?tr=w-1600,q-95,oi-sharp`;

  useEffect(() => {
    if (isActive) {
      // Small delay to ensure CSS is ready
      setTimeout(() => {
        setShouldAnimate(true);
      }, 50);
    } else {
      setShouldAnimate(false);
    }
  }, [isActive]);

  return (
    <div className="ken-burns-container">
      <img
        src={optimizedSrc}
        alt={alt}
        className={`ken-burns-image ${shouldAnimate ? 'animate' : ''}`}
      />
    </div>
  );
};
