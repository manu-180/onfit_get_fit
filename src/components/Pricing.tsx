"use client";

import { useState } from "react";
import { useReveal } from "@/lib/hooks";
import { formatARS, pricingGuarantees, pricingPlans } from "@/lib/data";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [headRef, headVis] = useReveal();
  const [gridRef, gridVis] = useReveal(0.05);
  const [guaranteeRef, guaranteeVis] = useReveal();

  return (
    <section className="PP" id="planes">
      <div className="po po1" />
      <div className="po po2" />
      <div className="SC" style={{ maxWidth: 1200 }}>
        <div ref={headRef} className={`pp-h rv ${headVis ? "v" : ""}`}>
          <div className="ey">
            <span className="eyl" />
            Planes & Precios
            <span className="eyl" />
          </div>
          <h2 className="st">
            INVERTÍ EN
            <br />
            <span>VOS</span>
          </h2>
          <p className="pp-sub">
            Planes flexibles. Sin contratos. Cancelá cuando quieras.
          </p>
        </div>
        <div className="bl">
          <span className={`bll ${!yearly ? "on" : ""}`}>Mensual</span>
          <div
            className={`tg ${yearly ? "yr" : ""}`}
            onClick={() => setYearly(!yearly)}
          >
            <div className="tgt" />
          </div>
          <span className={`bll ${yearly ? "on" : ""}`}>Anual</span>
          <span className={`blb ${yearly ? "on" : ""}`}>Hasta 20% OFF</span>
        </div>
        <div ref={gridRef} className="ppg">
          {pricingPlans.map((p, i) => {
            const pr = yearly ? p.yr : p.mo;
            const sv = yearly ? Math.round((1 - p.yr / p.mo) * 100) : 0;
            return (
              <div
                key={p.name}
                className={`ppc ${p.feat ? "ft" : "bs"}`}
                style={{
                  opacity: gridVis ? 1 : 0,
                  transform: gridVis ? "translateY(0)" : "translateY(40px)",
                  transition: `all .7s var(--eo) ${gridVis ? i * 0.12 : 0}s`,
                }}
              >
                {p.feat && <div className="ppb">Recomendado</div>}
                <div className="ppt">{p.tier}</div>
                <h3 className="ppn">{p.name}</h3>
                <p className="ppd">{p.desc}</p>
                <div className="ppp">
                  <span className="ppc2">$</span>
                  <span className="ppa">{formatARS(pr)}</span>
                  <span className="pper">/mes</span>
                </div>
                <div className="ppor">
                  {yearly ? (
                    <>
                      <span style={{ textDecoration: "line-through" }}>
                        ${formatARS(p.mo)}
                      </span>
                      <span
                        style={{
                          marginLeft: ".4rem",
                          color: "var(--lm)",
                          fontWeight: 700,
                          textDecoration: "none",
                          fontSize: ".65rem",
                        }}
                      >
                        Ahorrás {sv}%
                      </span>
                    </>
                  ) : (
                    "\u00A0"
                  )}
                </div>
                <div className="ppdv" />
                <ul className="ppfl">
                  {p.fts.map((f, j) => (
                    <li key={j} className={`ppf ${f.y ? "" : "off"}`}>
                      <span className={`fck ${f.y ? "y" : "n"}`}>
                        {f.y ? "✓" : "—"}
                      </span>
                      {f.t}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`ppct ${p.feat ? "pri" : "ol"}`}
                >
                  {p.feat ? "Empezar Ahora" : "Elegir Plan"}
                </button>
              </div>
            );
          })}
        </div>
        <div
          ref={guaranteeRef}
          className={`gu rv ${guaranteeVis ? "v" : ""}`}
        >
          {pricingGuarantees.map(([ic, tx], i) => (
            <div key={i} className="gui">
              <span>{ic}</span>
              <span>{tx}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
