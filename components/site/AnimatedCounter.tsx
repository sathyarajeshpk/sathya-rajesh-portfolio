"use client";

import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  value: number;
  duration?: number;
};

export default function AnimatedCounter({ value, duration = 2.5 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * value);

      if (element.textContent !== String(current)) {
        element.textContent = String(current);
      }

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return <span ref={ref}>0</span>;
}
