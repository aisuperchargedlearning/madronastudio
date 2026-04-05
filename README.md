# Historical Map Experience

A story-driven single-page website showcasing a journey through Italian history using an interactive map interface.

## Architecture Overview

This is a React + TypeScript + Vite application designed for AWS Amplify deployment. The application uses a single responsive codebase that adapts to both desktop and mobile devices.

### Core Design Principles

1. **Simple and Organized** - No over-engineering, clean component structure
2. **Visual Hierarchy** - Hero video → Interactive map → Story sections
3. **Non-obstructive Interface** - UI elements positioned in the map's left "ocean space"
4. **Progressive Enhancement** - Built as a foundation ready for incremental feature additions

## Project Structure

```
src/
├── components/
│   ├── HeroVideoSection/
│   │   ├── HeroVideoSection.tsx      # Top hero section for video
│   │   └── HeroVideoSection.css
│   ├── StoryMapSection/
│   │   └── StoryMapSection.tsx       # Container for map + interface
│   ├── MapStage/
│   │   ├── MapStage.tsx              # Main map display with background image
│   │   └── MapStage.css
│   ├── LeftRail/
│   │   ├── LeftRail.tsx              # Persistent UI panel on map's left side
│   │   └── LeftRail.css
│   └── LocationSections/
│       ├── LocationSections.tsx      # Long-scroll chapter sections
│       └── LocationSections.css
├── data/
│   └── locations.ts              # Location data (Naples, Rome, etc.)
├── types/
│   └── location.ts               # TypeScript type definitions
├── styles/
│   └── globals.css               # Global styles and resets
├── App.tsx                       # Main app shell
├── App.css
└── main.tsx
```

## Component Responsibilities

### HeroVideoSection
- Purpose: Top-of-page video hero
- Fixed height with responsive scaling
- Currently shows placeholder; ready for video URL

### StoryMapSection
- Purpose: Combines MapStage + LeftRail
- Creates the main interactive experience

### MapStage
- Purpose: Displays the historical map as a background image
- Provides positioning context for overlaid UI
- Shows location markers based on coordinate data
- Left side reserved as interface zone

### LeftRail
- Purpose: Primary navigation and control panel
- Positioned absolutely over map's left side
- Contains location navigation
- Responsive: becomes full-width bar on mobile

### LocationSections
- Purpose: Long-scroll story chapters below the map
- Each location gets a full-height section
- Placeholder content ready for rich media

## Data Structure

Location type definition is in `src/types/location.ts` and data is centralized in `src/data/locations.ts`:

```typescript
interface Location {
  id: string;
  name: string;
  coordinates: { x: number; y: number }; // Percentage positioning
  description: string;
  yearRange?: string;
}
```

This separation of types and data allows for better code organization and reusability.

Current locations:
- Naples (1400-1500)
- Rome (1500-1600)
- Brescia (1600-1700)
- Modena (1700-1800)
- Maranello (1900-Present)

## Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## Next Steps for Enhancement

This scaffold is ready for:

1. **Video Integration** - Add hero video file and update HeroVideoSection
2. **Map Image** - Replace placeholder with actual historical map image
3. **Rich Content** - Populate LocationSections with stories, images, timelines
4. **Interactions** - Add click handlers for location navigation
5. **Scroll Animations** - Add progressive reveal effects
6. **Mobile Refinements** - Fine-tune responsive breakpoints
7. **Router (optional)** - Add if deep-linking to locations is needed

## Design Notes

- Left side of map (0-30% width) is designated "ocean space" for UI
- Main map content (30-100% width) should remain visually clear
- All persistent controls live in LeftRail
- Color scheme uses neutral blues and grays to complement historical maps
- Typography emphasizes readability and hierarchy
- No animation libraries yet - ready for custom animations when needed
