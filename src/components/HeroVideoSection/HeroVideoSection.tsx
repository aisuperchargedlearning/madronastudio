/**
 * HeroVideoSection Component
 *
 * Purpose: Top-of-page hero section reserved exclusively for video content.
 * This component establishes the initial visual impact and sets the tone
 * for the story-driven experience.
 *
 * Features:
 * - Fixed height for consistent layout
 * - Responsive video container
 * - Placeholder state for development
 */

import React from 'react';
import './HeroVideoSection.css';

interface HeroVideoSectionProps {
  videoUrl?: string;
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({ videoUrl }) => {
  return (
    <section className="hero-video-section">
      {videoUrl ? (
        <>
          <video
            className="hero-video"
            src={videoUrl}
            autoPlay
            muted
            playsInline
          />
          <div className="hero-tm-badge">Madrona Studio&#8482;</div>
        </>
      ) : (
        <div className="hero-placeholder">
          <div className="hero-placeholder-content">
            <h1>Hero Video Section</h1>
            <p>Video content will be placed here</p>
          </div>
        </div>
      )}
    </section>
  );
};
