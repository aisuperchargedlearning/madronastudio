import { useEffect, useRef, useState } from 'react';
import './VideoSection.css';

interface VideoSectionProps {
  videoUrl: string;
}

export const VideoSection = ({ videoUrl }: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [showCover, setShowCover] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleVideoEnd = () => {
      setShowCover(true);
    };

    video.addEventListener('ended', handleVideoEnd);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.75 && !hasPlayed) {
            video.play().catch((error) => {
              console.log('Video autoplay prevented:', error);
            });
            setHasPlayed(true);
          }
        });
      },
      {
        threshold: 0.75,
      }
    );

    observer.observe(section);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
      observer.disconnect();
    };
  }, [hasPlayed]);

  return (
    <section ref={sectionRef} className="video-section">
      <video
        ref={videoRef}
        className="video-section__video"
        src={videoUrl}
        muted
        playsInline
      />
      <div
        className={`video-section__cover ${showCover ? 'video-section__cover--visible' : ''}`}
        style={{ backgroundImage: 'url(https://ik.imagekit.io/a7tech/Madronastudiostillimages/Frontcoveraftervideo.jpg?updatedAt=1775017256789)' }}
      />
    </section>
  );
};
