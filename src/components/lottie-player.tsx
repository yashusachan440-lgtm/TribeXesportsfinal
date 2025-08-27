
'use client';

import { DotLottiePlayer, PlayerEvents } from '@dotlottie/react-player';
import type { DotLottiePlayerProps } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { useEffect, useState } from 'react';

export default function LottiePlayer(
  props: Omit<DotLottiePlayerProps, 'children'>
) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <DotLottiePlayer {...props} />
  );
}
