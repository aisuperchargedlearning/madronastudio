/**
 * Location Type Definition
 *
 * Defines the shape of location data used throughout the application.
 * Each location represents a chapter in the historical journey.
 */

export type LocationNode = {
  id: string;
  number: string;
  city: string;
  sectionId: string;
};
