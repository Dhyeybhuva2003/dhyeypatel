// app/components/helper/animation-lottie.jsx

'use client';

import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width }}
    />
  );
};

export default AnimationLottie;
