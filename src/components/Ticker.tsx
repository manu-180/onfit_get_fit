"use client";

import type { CSSProperties } from "react";

type TickerProps = {
  items: readonly string[] | string[];
  speed?: number;
  reverse?: boolean;
  lime?: boolean;
  sep?: "dot" | "star";
};

export default function Ticker({
  items,
  speed = 28,
  reverse = false,
  lime = false,
  sep = "dot",
}: TickerProps) {
  const doubled = [...items, ...items];
  const tickerStyle = { "--spd": `${speed}s` } as CSSProperties;

  return (
    <div className={`TK ${lime ? "lm" : ""}`}>
      <div className={`TK-t ${reverse ? "rv" : ""}`} style={tickerStyle}>
        {doubled.map((t, i) => (
          <div key={i} className="ti">
            {sep === "star" ? (
              <span className="tst">✦</span>
            ) : (
              <span className="ts" />
            )}
            <span className="tt">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
