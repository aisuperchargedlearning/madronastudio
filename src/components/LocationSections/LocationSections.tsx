/**
 * LocationSections Component
 *
 * Purpose: Long-scroll chapter sections with sticky runway behavior.
 * Each section uses 200vh height with sticky content to create a "held" state.
 *
 * Architecture:
 * - 200vh outer container provides scroll runway
 * - Sticky inner container (100vh) holds content in place
 * - Hysteresis-based state changes prevent flickering
 * - Subtle parallax depth on transitions
 */

import React from 'react';
import './LocationSections.css';
import { locations } from '../../data/locations';
import { useScroll } from '../../contexts/ScrollContext';
import { LeftRail } from '../LeftRail/LeftRail';
import { KenBurnsImage } from '../KenBurnsImage/KenBurnsImage';

export const LocationSections: React.FC = () => {
  const { activeSection } = useScroll();

  return (
    <>
      <LeftRail />
      <div className="location-sections">
        {locations.map((location, index) => (
        <section
          key={location.id}
          className={`location-section ${index === activeSection ? 'active' : ''} ${
            index < activeSection ? 'passed' : ''
          }`}
          id={location.sectionId}
          data-location={location.id}
          data-index={index}
        >
          <div className="section-sticky-container">
            <div className="section-content">
              {index === 0 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG1.jpg"
                    alt="Naples Chapter 1"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 1 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG2.jpg"
                    alt="Chapter 2"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 2 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG3.jpg"
                    alt="Chapter 3"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 3 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG4.jpg"
                    alt="Chapter 4"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 4 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG5.jpg"
                    alt="Chapter 5"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 5 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG6.jpg"
                    alt="Chapter 6"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 6 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG7.jpg"
                    alt="Chapter 7"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 7 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG8.jpg"
                    alt="Chapter 8"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 8 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG9.jpg"
                    alt="Chapter 9"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 9 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG10.jpg"
                    alt="Chapter 10"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 10 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG10.jpg"
                    alt="Chapter 11"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 11 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG12.jpg"
                    alt="Chapter 12"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 12 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG13Resizesaturation.jpg"
                    alt="Chapter 13"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 13 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG14.jpg"
                    alt="Chapter 14"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 14 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG15.jpg"
                    alt="Chapter 15"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 15 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG16.jpg?updatedAt=1775336689395"
                    alt="Chapter 16"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 16 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG17.jpg?updatedAt=1775336689104"
                    alt="Chapter 17"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 17 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG18.jpg?updatedAt=1775336689625"
                    alt="Chapter 18"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 18 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG19.jpg?updatedAt=1775336686507"
                    alt="Chapter 19"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 19 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG20.jpg?updatedAt=1775336689117"
                    alt="Chapter 20"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 20 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG21.jpg?updatedAt=1775336689102"
                    alt="Chapter 21"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 21 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG22.jpg?updatedAt=1775336689246"
                    alt="Chapter 22"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 22 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG23.jpg?updatedAt=1775336688887"
                    alt="Chapter 23"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 23 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/IMG24.jpg?updatedAt=1775336689510"
                    alt="Chapter 24"
                    className="chapter-image"
                  />
                </div>
              )}
              {index === 24 && (
                <div className="chapter-image-container">
                  <img
                    src="https://ik.imagekit.io/a7tech/Webappmadronaimages/Epilogue1.jpg"
                    alt="Epilogue"
                    className="chapter-image"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        ))}
      </div>
    </>
  );
};
