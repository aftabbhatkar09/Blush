"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { about, salon } from "@/lib/data";
import Reveal from "./reveal";

const stats = [
  { value: "4.6", label: "Google rating" },
  { value: "323", label: "reviews" },
  { value: "8", label: "service menus" },
  { value: "10pm", label: "open daily till" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yA = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["-14%", "10%"]);

  return (
    <section id="about" className="bg-cream px-6 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-20">
        <div ref={ref} className="relative order-2 md:order-1">
          <motion.div
            style={{ y: yA }}
            className="relative aspect-[3/4] w-3/4 overflow-hidden rounded-2xl"
          >
            <Image
              src={about.images[0]}
              alt="Styling at Blush"
              fill
              sizes="(max-width: 768px) 60vw, 30vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: yB }}
            className="absolute right-0 top-1/3 aspect-[3/4] w-1/2 overflow-hidden rounded-2xl ring-8 ring-cream"
          >
            <Image
              src={about.images[1]}
              alt="A guest at Blush"
              fill
              sizes="(max-width: 768px) 40vw, 20vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-rose-deep">
              About the studio
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              Careful hands, a calm room, no rush.
            </h2>
          </Reveal>
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
                {p}
              </p>
            </Reveal>
          ))}

          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink/15 pt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <p className="font-display text-4xl md:text-5xl">{s.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink/50">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <a
              href={salon.googleUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block border-b border-ink pb-1 text-sm uppercase tracking-[0.2em] transition-colors hover:border-rose-deep hover:text-rose-deep"
            >
              Read the reviews
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
