
'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

interface UnmuteButtonProps {
  isMuted: boolean;
  onClick: () => void;
}

export function UnmuteButton({ isMuted, onClick }: UnmuteButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="icon"
      className="absolute bottom-4 right-4 text-white bg-black/20 hover:bg-black/50 hover:text-white z-20"
    >
      {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
      <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
    </Button>
  );
}
