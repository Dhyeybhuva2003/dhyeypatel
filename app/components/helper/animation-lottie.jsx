'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const AnimationLottie = ({ animationPath, width = '95%' }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch(animationPath)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load animation:', err));
  }, [animationPath]);

  if (!animationData) return null; // Or a loading spinner

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      style={{ width }}
    />
  );
};

export default AnimationLottie;
