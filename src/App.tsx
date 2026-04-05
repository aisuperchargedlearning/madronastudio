/**
 * App Component
 *
 * Main application shell for the story-driven historical map experience.
 *
 * Structure:
 * 1. HeroVideoSection - Top hero area for video content
 * 2. StoryMapSection - Interactive map with LeftRail interface
 * 3. LocationSections - Long-scroll chapter sections for each location
 *
 * This single-page application is designed for AWS Amplify deployment
 * and provides a responsive experience across desktop and mobile devices.
 */

import { HeroVideoSection } from './components/HeroVideoSection/HeroVideoSection';
import { VideoSection } from './components/VideoSection/VideoSection';
import { StoryMapSection } from './components/StoryMapSection/StoryMapSection';
import { LocationSections } from './components/LocationSections/LocationSections';
import { ScrollProvider } from './contexts/ScrollContext';
import './App.css';

function App() {
  return (
    <ScrollProvider>
      <div className="app">
        {/* Hero section reserved for video content */}
        <HeroVideoSection videoUrl="https://ik.imagekit.io/a7tech/madronastudio/Madronalogoreveal3.mp4?updatedAt=1774564499652" />

        {/* Full viewport video section */}
        <VideoSection videoUrl="https://ik.imagekit.io/a7tech/madronastudio/Fullframerender3.mp4" />

        {/* Animated map video section with still image fade-in */}
        <StoryMapSection
          videoUrl="https://ik.imagekit.io/a7tech/Animatedmap/Finalmapvideo2.mp4"
          stillImageUrl="https://ik.imagekit.io/a7tech/Animatedmap/Navmapstill.jpg"
        />

        {/* Long-scroll story sections for each location */}
        <LocationSections />
      </div>
    </ScrollProvider>
  );
}

export default App;
