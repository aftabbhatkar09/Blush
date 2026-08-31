"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { gallery } from "@/lib/data";
import Reveal from "./reveal";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const up = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const down = useTransform(scrollYProgress, [0, 1], ["-12%", "14%"]);

  const cols = [gallery.slice(0, 2), gallery.slice(2, 4), gallery.slice(4, 6)];

  return (
    <section
      id="gallery"
      ref={ref}
      className="overflow-hidden bg-plum py-24 text-cream md:py-40"
    >
      <div className="px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-rose">
            The room
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-4 font-display text-5xl md:text-8xl">
            Come see it
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
            A calm, spotless studio in the heart of Byculla — built for the kind
            of afternoon you don&apos;t want to end.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-4 px-4 md:grid-cols-3 md:gap-6 md:px-10">
        {cols.map((col, ci) => (
          <motion.div
            key={ci}
            style={{ y: ci === 1 ? down : up }}
            className={`flex flex-col gap-4 md:gap-6 ${
              ci === 2 ? "hidden md:flex" : ""
            }`}
          >
            {col.map((src, i) => (
              <div
                key={i}
                data-cursor
                className="relative aspect-[3/4] overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
