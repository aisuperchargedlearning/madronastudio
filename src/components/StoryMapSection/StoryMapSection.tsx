/**
 * StoryMapSection Component
 *
 * Purpose: Container component that combines the MapStage and LeftRail.
 * This creates the main interactive map experience where users can
 * navigate between locations.
 *
 * Architecture:
 * - Wraps MapStage component
 * - Passes LeftRail as a child to MapStage for proper positioning
 * - Manages the relationship between map and interface elements
 */

import React from 'react';
import { MapStage } from '../MapStage/MapStage';

interface StoryMapSectionProps {
  mapImageUrl?: string;
  videoUrl?: string;
  stillImageUrl?: string;
}

export const StoryMapSection: React.FC<StoryMapSectionProps> = ({ mapImageUrl, videoUrl, stillImageUrl }) => {
  return <MapStage mapImageUrl={mapImageUrl} videoUrl={videoUrl} stillImageUrl={stillImageUrl} />;
};
