"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PreloaderProps = {
  onDone?: () => void;
};

export default function Preloader({ onDone }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const steps: [number, number][] = [
      [30, 200],
      [55, 500],
      [78, 900],
      [92, 1300],
      [100, 1600],
    ];
    const timers = steps.map(([target, delay]) =>
      setTimeout(() => setProgress(target), delay)
    );
    const finish = setTimeout(() => {
      setDone(true);
      setTimeout(() => onDone?.(), 600);
    }, 2200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finish);
    };
  }, [onDone]);

  return (
    <div className={`PL ${done ? "dn" : ""}`}>
      <Image
        src="/logo.png"
        alt="Onfit Get Fit"
        width={100}
        height={100}
        priority
        style={{
          width: "clamp(60px,12vw,100px)",
          height: "auto",
          marginBottom: "1.5rem",
          opacity: 0,
          animation: "fi .5s ease .2s forwards",
        }}
      />
      <div className="PL-logo">
        {"ONFIT".split("").map((c, i) => (
          <span
            key={`a${i}`}
            className="lt"
            style={{ animationDelay: `${i * 0.06}s`, color: "var(--wh)" }}
          >
            {c}
          </span>
        ))}
        <span style={{ display: "inline-block", width: ".3em" }} />
        {"GET FIT".split("").map((c, i) => (
          <span
            key={`b${i}`}
            className="lt"
            style={{
              animationDelay: `${(5 + i) * 0.06}s`,
              color: "var(--lm)",
            }}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </div>
      <div className="PL-bar">
        <div className="PL-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="PL-tag">Get Fit, Stay Strong</div>
    </div>
  );
}
