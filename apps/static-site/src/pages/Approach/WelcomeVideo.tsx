import { useState, useRef, useEffect } from 'react';

interface WelcomeVideoProps {
  videoUrl: string;
}

export default function WelcomeVideo({ videoUrl }: WelcomeVideoProps) {
  const [canPlay, setCanPlay] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setFadeOut(true);
      setTimeout(() => setCanPlay(true), 600);
    };
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
    };
  }, []);

  return (
    <section className="approach-hero-container">
      <div className="approach-hero-overlay" />
      {!canPlay && (
        <div 
          className="approach-hero" 
          style={{ 
            backgroundImage: 'url("/assets/img/approach/bg-approach.png")',
            opacity: fadeOut ? 0 : 1
          }} 
        />
      )}
      <video
        ref={videoRef}
        className="approach-hero"
        style={{ 
          display: canPlay ? 'block' : 'none',
          opacity: canPlay ? 1 : 0
        }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </section>
  );
}
