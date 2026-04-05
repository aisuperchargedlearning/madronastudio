/**
 * MapStage Component
 *
 * Purpose: The main map display area that shows the historical map image.
 * This component provides the visual foundation for the story, with the map
 * as a background element that other UI components (like LeftRail) overlay.
 *
 * Architecture:
 * - Uses background image for the map
 * - Maintains aspect ratio while being responsive
 * - Provides positioning context for overlaid UI elements
 * - Left side reserved as "ocean space" for interface elements
 */

import React, { useEffect, useRef, useState } from 'react';
import './MapStage.css';
import { MapNavigation } from '../MapNavigation/MapNavigation';

interface MapStageProps {
  mapImageUrl?: string;
  videoUrl?: string;
  stillImageUrl?: string;
}

export const MapStage: React.FC<MapStageProps> = ({ mapImageUrl, videoUrl, stillImageUrl }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showStillImage, setShowStillImage] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!container) return;

    const handleVideoEnd = () => {
      setShowStillImage(true);
    };

    if (video && stillImageUrl) {
      video.addEventListener('ended', handleVideoEnd);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (entry.intersectionRatio >= 0.75 && !hasPlayed && video) {
              video.play().catch((error) => {
                console.log('Video autoplay prevented:', error);
              });
              setHasPlayed(true);
            }
          }
        });
      },
      { threshold: [0.3, 0.75] }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (video && stillImageUrl) {
        video.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [hasPlayed, stillImageUrl]);

  return (
    <div className="map-stage-container" ref={containerRef}>
      <div
        className={`map-stage ${isVisible ? 'visible' : ''}`}
        style={
          mapImageUrl
            ? {
                backgroundImage: `url(${mapImageUrl})`,
              }
            : videoUrl
            ? { backgroundColor: '#000' }
            : undefined
        }
      >
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              muted
              playsInline
              className={`map-video ${showStillImage ? 'fade-out' : ''}`}
              src={videoUrl}
            />
            {stillImageUrl && (
              <div
                className={`map-still-image ${showStillImage ? 'fade-in' : ''}`}
                style={{ backgroundImage: `url(${stillImageUrl})` }}
              >
                <MapNavigation />
              </div>
            )}
          </>
        ) : !mapImageUrl && (
          <div className="map-placeholder">
            <p>Historical Map Background</p>
            <span className="map-note">Map image will be placed here as background</span>
          </div>
        )}
      </div>
    </div>
  );
};
