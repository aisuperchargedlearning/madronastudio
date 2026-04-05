/**
 * ScrollContext - Held-state scroll tracking with stable thresholds
 *
 * Detects which section should be "held" as active based on scroll position.
 * Uses position-based thresholds to prevent flickering and create cinematic pauses.
 *
 * Behavior:
 * - Each section becomes active when it reaches 25% from top
 * - Stays active until 75% scrolled through (creating a held state)
 * - Stable hysteresis prevents rapid state changes
 */

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

interface ScrollContextValue {
  activeSection: number;
  setActiveSection: (index: number) => void;
  showNavigation: boolean;
}

const ScrollContext = createContext<ScrollContextValue>({
  activeSection: 0,
  setActiveSection: () => {},
  showNavigation: false,
});

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSectionState] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const setActiveSection = useCallback((index: number) => {
    setActiveSectionState(index);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        const storyMapSection = document.querySelector('.story-map-section');
        const sections = Array.from(document.querySelectorAll('.location-section'));
        if (sections.length === 0) return;

        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
        lastScrollY.current = scrollY;

        // Show navigation only after scrolling past the story map section (section 3)
        const mapStageContainer = document.querySelector('.map-stage-container');
        if (mapStageContainer) {
          const mapRect = mapStageContainer.getBoundingClientRect();
          setShowNavigation(mapRect.bottom <= 0);
        }

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i] as HTMLElement;
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;

          const scrolledIntoSection = -sectionTop;
          const percentScrolled = scrolledIntoSection / sectionHeight;

          if (scrollDirection === 'down') {
            if (percentScrolled >= 0.25 && percentScrolled < 0.75 && i !== activeSection) {
              setActiveSectionState(i);
              break;
            }
          } else {
            if (percentScrolled >= 0.15 && percentScrolled < 0.85 && i !== activeSection) {
              setActiveSectionState(i);
              break;
            }
          }
        }
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeSection]);

  return (
    <ScrollContext.Provider value={{ activeSection, setActiveSection, showNavigation }}>
      {children}
    </ScrollContext.Provider>
  );
};
