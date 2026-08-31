"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { services } from "@/lib/data";
import Reveal from "./reveal";

export default function Services() {
  const floatRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const onMove = (e: React.MouseEvent) => {
    if (!floatRef.current) return;
    gsap.to(floatRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.7,
      ease: "power3",
    });
  };

  return (
    <section
      id="services"
      onMouseMove={onMove}
      className="relative bg-cream px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-rose-deep">
            The menu
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl md:text-8xl">Services</h2>
        </Reveal>

        <ul className="mt-14 border-t border-ink/15">
          {services.map((s, i) => (
            <li
              key={s.name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              data-cursor
              className="group flex items-baseline gap-4 border-b border-ink/15 px-2 py-6 transition-colors duration-300 hover:bg-ink hover:text-cream md:gap-6 md:px-4 md:py-8"
            >
              <span className="w-8 shrink-0 text-xs tabular-nums opacity-40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 font-display text-2xl md:text-5xl">
                {s.name}
              </span>
              <span className="hidden max-w-[18rem] text-sm opacity-60 lg:block">
                {s.desc}
              </span>
              <span className="shrink-0 text-xs uppercase tracking-widest opacity-70 md:text-sm">
                {s.price}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* cursor-following preview */}
      <div
        ref={floatRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      >
        {services.map((s, i) => (
          <div
            key={s.name}
            className={`absolute -left-28 -top-36 h-72 w-56 overflow-hidden rounded-2xl transition-all duration-300 ${
              active === i
                ? "scale-100 opacity-100"
                : "scale-90 opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.name}
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
