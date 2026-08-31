"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { heroImage, salon } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTRO = 0.15; // small beat before the hero text animates in

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] overflow-hidden bg-plum text-cream"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Inside Blush by Bushra Imtiyaz"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* keep the photo rich on the right, deepen the left/bottom where the text sits */}
        <div className="absolute inset-0 bg-linear-to-b from-plum/25 via-plum/5 to-plum/90" />
        <div className="absolute inset-0 bg-linear-to-r from-plum/75 via-plum/20 to-transparent" />
        <div className="absolute inset-0 bg-rose-deep/8 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(21,13,12,0.45),transparent_42%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col justify-between px-6 pb-10 pt-28 md:px-10 md:pb-14"
      >
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "120%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: INTRO, ease: EASE }}
            className="text-[11px] uppercase tracking-[0.35em] text-rose [text-shadow:0_1px_20px_rgba(21,13,12,0.6)]"
          >
            {salon.tagline} — Est. Byculla
          </motion.p>
        </div>

        <div>
          <h1 className="font-display leading-[0.86] [text-shadow:0_2px_40px_rgba(21,13,12,0.45)]">
            {["Blush", "by Bushra"].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: INTRO + i * 0.12, ease: EASE }}
                  className="block text-[19vw] md:text-[13vw]"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: INTRO + 0.5 }}
            className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-cream/20 pt-5"
          >
            <p className="max-w-sm text-sm leading-relaxed text-cream/70">
              {salon.heroBlurb}
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-cream/60">
              {salon.rating} &#9733; · {salon.reviewCount} Google reviews
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
