"use client";

import Image from "next/image";
import { useReveal } from "@/lib/hooks";
import { footerContact, footerNav, footerPrograms } from "@/lib/data";

export default function Footer() {
  const [ref, visible] = useReveal(0.05);

  return (
    <footer className="FT">
      <div ref={ref} className={`rv ${visible ? "v" : ""}`}>
        <div className="FT-m">
          <div>
            <div className="FT-logo">
              <Image
                src="/logo.png"
                alt="Onfit"
                width={35}
                height={35}
                className="FT-logo-img"
              />
              ONFIT <span style={{ color: "var(--lm)" }}>GET FIT</span>
            </div>
            <p className="FT-d">
              Gym boutique premium en Buenos Aires. Entrenamiento de élite,
              comunidad real, resultados medibles.
            </p>
          </div>
          <div>
            <h4 className="FT-ct">Navegación</h4>
            <ul className="FT-l">
              {footerNav.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="FT-lk">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="FT-ct">Programas</h4>
            <ul className="FT-l">
              {footerPrograms.map((p) => (
                <li key={p}>
                  <a href="#programas" className="FT-lk">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="FT-ct">Contacto</h4>
            {footerContact.map(([ic, tx], i) => (
              <div key={i} className="FT-ci">
                <span className="FT-cic">{ic}</span>
                <span className="FT-cit" style={{ whiteSpace: "pre-line" }}>
                  {tx}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="FT-b">
          <span className="FT-cp">
            © 2024 ONFIT GET FIT. Todos los derechos reservados.
          </span>
          <div className="FT-bl">
            {["Términos", "Privacidad", "Cookies"].map((l) => (
              <a key={l} href="#" className="FT-blk">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
