
'use client';

import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';
import { UnmuteButton } from './unmute-button';

interface VideoBackgroundProps {
  videoId: string;
}

const VideoBackground = ({ videoId }: VideoBackgroundProps) => {
  const isMobile = useIsMobile();
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // On desktop, we attempt to play with sound. On mobile, we start muted.
    setIsMuted(isMobile);
  }, [isMobile]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&autohide=1&playsinline=1&mute=${isMuted ? 1 : 0}`;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden bg-black">
        <iframe
          id="youtube-background-video"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 w-full h-full min-w-[177.77vh] min-h-[100vw] object-cover"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      {isMobile && <UnmuteButton isMuted={isMuted} onClick={toggleMute} />}
    </>
  );
};

export default VideoBackground;
