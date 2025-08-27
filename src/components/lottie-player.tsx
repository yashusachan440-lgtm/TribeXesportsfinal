
'use client';

import Lottie from 'lottie-react';
import type { LottieComponentProps } from 'lottie-react';

export default function LottiePlayer(
  props: Omit<LottieComponentProps, 'animationData'> & {
    animationData: any;
  }
) {
  const { animationData, ...rest } = props;
  const isUrl = typeof animationData === 'string';

  return <Lottie {...rest} animationData={isUrl ? undefined : animationData} src={isUrl ? animationData : undefined} />;
}
