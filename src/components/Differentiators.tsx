"use client";

import { AnimatedCounter, useReveal } from "@/lib/hooks";
import { diffCards, diffCounterStats } from "@/lib/data";

export default function Differentiators() {
  const [headRef, headVis] = useReveal();
  const [gridRef, gridVis] = useReveal(0.1);
  const [cnRef, cnVis] = useReveal(0.2);

  return (
    <section className="DF" aria-labelledby="diff-heading">
      <div className="SC">
        <div ref={headRef} className={`rv ${headVis ? "v" : ""}`}>
          <div className="ey">
            <span className="eyl" />
            Por qué elegirnos
          </div>
          <h2 id="diff-heading" className="st" style={{ maxWidth: 650 }}>
            NO SOMOS UN GYM
            <br />
            <span>SOMOS TU VENTAJA</span>
          </h2>
        </div>
        <div ref={gridRef} className="dg">
          {diffCards.map((c, i) => (
            <article
              key={c.n}
              className="dc"
              style={{
                opacity: gridVis ? 1 : 0,
                transform: gridVis ? "translateY(0)" : "translateY(25px)",
                transition: `opacity .6s var(--eo) ${gridVis ? i * 0.08 : 0}s, transform .6s var(--eo) ${gridVis ? i * 0.08 : 0}s`,
              }}
            >
              <div className="dn" aria-hidden>
                {c.n}
              </div>
              <h3 className="dt">{c.t}</h3>
              <p className="dd">{c.d}</p>
            </article>
          ))}
        </div>
        <div ref={cnRef} className={`CN rv ${cnVis ? "v" : ""}`}>
          {diffCounterStats.map((c, i) => (
            <div key={i} className="cn">
              <div className="cv">
                {c.raw ?? <AnimatedCounter end={c.v} s={c.s} />}
              </div>
              <div className="cl">{c.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
