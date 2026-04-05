/**
 * ImageSection Component
 *
 * Purpose: Full viewport image display section
 */

import React from 'react';
import './ImageSection.css';

interface ImageSectionProps {
  imageUrl: string;
  alt?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, alt = '' }) => {
  return (
    <section className="image-section">
      <img
        src={imageUrl}
        alt={alt}
        className="image-section-img"
      />
    </section>
  );
};
