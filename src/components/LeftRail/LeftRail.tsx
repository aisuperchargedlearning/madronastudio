/**
 * LeftRail Component
 *
 * Purpose: Chapter navigation positioned in the left margin.
 * Displays chapters 1-23 in circular markers on a dark background band.
 *
 * Architecture:
 * - Fixed position in left margin
 * - Dark vertical band with chapter numbers
 * - Scrollable chapter list from top to bottom
 * - Persistent across all sections
 * - Consumes ScrollContext for active chapter tracking
 */

import React from 'react';
import './LeftRail.css';
import { useScroll } from '../../contexts/ScrollContext';

const TOTAL_CHAPTERS = 23;

export const LeftRail: React.FC = () => {
  const { activeSection, setActiveSection, showNavigation } = useScroll();

  const scrollToChapter = (chapterIndex: number) => {
    const sections = document.querySelectorAll('.location-section');
    if (sections[chapterIndex]) {
      setActiveSection(chapterIndex);
      sections[chapterIndex].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`left-rail ${showNavigation ? 'visible' : ''}`}>
      <div className="dark-band" />
      <ul className="chapter-markers">
        {Array.from({ length: TOTAL_CHAPTERS }, (_, index) => (
          <li
            key={index}
            className={`marker-item ${index === activeSection ? 'active' : ''}`}
          >
            <button
              className="marker-button"
              onClick={() => scrollToChapter(index)}
              aria-label={`Go to Chapter ${index + 1}`}
            >
              <span className="marker-number">{index + 1}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
