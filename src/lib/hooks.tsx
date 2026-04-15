"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useReveal(
  threshold = 0.15
): [RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

type AnimatedCounterProps = {
  end: number;
  s?: string;
  d?: number;
};

export function AnimatedCounter({
  end,
  s = "",
  d = 2200,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - t0) / d, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, d]);

  return (
    <span ref={spanRef}>
      {count}
      {s}
    </span>
  );
}
