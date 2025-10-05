import { useState, useEffect, useRef } from 'react';

// Easing function for a smooth animation
const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export const useCountUp = (end: number, duration: number = 2000, startAnimation: boolean): number => {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Only start the animation when the component is visible
    if (!startAnimation) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const easedProgress = easeOutExpo(Math.min(progress / duration, 1));
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends on the exact final number
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup function to cancel animation frame if component unmounts
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      startTimeRef.current = null;
    };
  }, [end, duration, startAnimation]);

  return count;
};