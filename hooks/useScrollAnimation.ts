import { useState, useEffect, useRef, RefObject } from 'react';

interface AnimationOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useScrollAnimation = <T extends HTMLElement>(options?: AnimationOptions): [RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options?.triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else {
          if (!options?.triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        rootMargin: options?.rootMargin || '0px',
        threshold: options?.threshold || 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isVisible];
};
