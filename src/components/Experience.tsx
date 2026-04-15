"use client";

import { useEffect, useRef } from "react";
import { useReveal } from "@/lib/hooks";
import { experienceBgUrl, experiencePills, experienceStats } from "@/lib/data";

export default function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fn = () => {
      if (!sectionRef.current || !parallaxRef.current) return;
      const rc = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      if (rc.bottom < 0 || rc.top > wh) return;
      const p = (wh - rc.top) / (wh + rc.height);
      parallaxRef.current.style.transform = `translateY(${(p - 0.5) * 40}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const [contentRef, contentVis] = useReveal(0.1);

  return (
    <section className="EX" ref={sectionRef}>
      <div className="EX-bg">
        <div
          className="EX-img"
          ref={parallaxRef}
          style={{ backgroundImage: `url(${experienceBgUrl})` }}
        />
      </div>
      <div className="EX-ov" />
      <div ref={contentRef} className={`EX-ct rv ${contentVis ? "v" : ""}`}>
        <div>
          <div className="ey">
            <span className="eyl" />
            La Experiencia
          </div>
          <h2
            className="st"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            UN ESPACIO
            <br />
            DISEÑADO PARA
            <br />
            <span>RENDIR</span>
          </h2>
          <p className="EX-d">
            Cada detalle está pensado para potenciar tu entrenamiento. Acústica,
            temperatura, iluminación — todo calibrado.
          </p>
          <div className="EX-p">
            {experiencePills.map((f) => (
              <span key={f} className="ep">
                <span className="epd" />
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="EX-ss">
          {experienceStats.map(([ic, v, l], i) => (
            <div
              key={i}
              className="esc"
              style={{
                opacity: contentVis ? 1 : 0,
                transform: contentVis ? "translateY(0)" : "translateY(20px)",
                transition: `all .6s var(--eo) ${contentVis ? i * 0.1 : 0}s`,
              }}
            >
              <div
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
                  marginBottom: ".35rem",
                }}
              >
                {ic}
              </div>
              <div className="esv">{v}</div>
              <div className="esl">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
