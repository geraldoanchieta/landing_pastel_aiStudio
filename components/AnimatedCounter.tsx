import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    gsap: any;
  }
}

interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ endValue, duration = 2 }) => {
  const countRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (countRef.current) {
            observer.unobserve(countRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }
    observerRef.current = observer;

    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView && countRef.current) {
      const counter = { value: 0 };
      window.gsap.to(counter, {
        value: endValue,
        duration: duration,
        ease: 'power2.out',
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.round(counter.value).toString();
          }
        },
      });
    }
  }, [inView, endValue, duration]);

  return <span ref={countRef}>0</span>;
};
