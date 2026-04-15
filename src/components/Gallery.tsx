"use client";

import Image from "next/image";
import { useReveal } from "@/lib/hooks";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  const [headRef, headVis] = useReveal();
  const [gridRef, gridVis] = useReveal(0.05);

  return (
    <section className="GA">
      <div className="SC">
        <div ref={headRef} className={`GA-h rv ${headVis ? "v" : ""}`}>
          <div className="ey">
            <span className="eyl" />
            Nuestro Espacio
            <span className="eyl" />
          </div>
          <h2 className="st">
            CONOCÉ EL
            <br />
            <span>AMBIENTE</span>
          </h2>
        </div>
        <div ref={gridRef} className="GA-g">
          {galleryItems.map((g, i) => (
            <div
              key={i}
              className={`gi ${g.sp}`}
              style={{
                opacity: gridVis ? 1 : 0,
                transform: gridVis ? "scale(1)" : "scale(.97)",
                transition: `all .6s var(--eo) ${gridVis ? i * 0.07 : 0}s`,
              }}
            >
              <Image
                src={g.src}
                alt={g.lb}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
                unoptimized
                loading="lazy"
              />
              <div className="gi-o">
                <span className="gi-l">{g.lb}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
