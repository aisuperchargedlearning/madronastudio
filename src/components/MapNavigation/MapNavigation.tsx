/**
 * MapNavigation Component
 *
 * Purpose: Thin horizontal navigation menu that overlays the still map image.
 * Allows users to navigate to upcoming location sections.
 *
 * Architecture:
 * - Positioned absolutely over the still map image
 * - Horizontal layout with location numbers and names
 * - Smooth scroll navigation to corresponding sections
 * - Elegant minimal design with hover effects
 */

import React from 'react';
import './MapNavigation.css';
import { locations } from '../../data/locations';

export const MapNavigation: React.FC = () => {
  const handleNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="map-navigation">
      <div className="map-nav-container">
        {locations.map((location) => (
          <button
            key={location.id}
            className="map-nav-item"
            onClick={() => handleNavigate(location.sectionId)}
            aria-label={`Navigate to ${location.city}`}
          >
            <span className="map-nav-number">{location.number}</span>
            <span className="map-nav-city">{location.city}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
