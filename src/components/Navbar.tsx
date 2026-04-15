"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`N ${scrolled ? "sc" : ""}`}>
        <a href="#" className="N-logo">
          <Image
            src="/logo.png"
            alt="Onfit"
            width={38}
            height={38}
            className="N-logo-img"
          />
          ONFIT
        </a>
        <ul className="NL">
          {navItems.map((i) => (
            <li key={i.label}>
              <a href={i.href} className="nl">
                {i.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#join" className="nc">
              Empezar
            </a>
          </li>
        </ul>
        <button
          type="button"
          className={`BG ${open ? "op" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`MM ${open ? "op" : ""}`}>
        <ul className="ML">
          {navItems.map((x, i) => (
            <li key={x.label} className="MI">
              <a
                href={x.href}
                className="ml"
                style={{ transitionDelay: open ? `${i * 0.07}s` : "0s" }}
                onClick={() => setOpen(false)}
              >
                {x.label}
                <span className="ln">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="MF">
          <a href="#join" className="mc" onClick={() => setOpen(false)}>
            Reservá Tu Clase Gratis
          </a>
          <div className="mi">
            <span>Buenos Aires, ARG</span>
            <span>@onfitgetfit</span>
          </div>
        </div>
      </div>
    </>
  );
}
