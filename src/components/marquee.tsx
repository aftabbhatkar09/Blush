"use client";

import { motion } from "motion/react";

export default function Marquee({
  items,
  speed = 26,
  className = "",
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`flex select-none overflow-hidden whitespace-nowrap ${className}`}>
      {[0, 1].map((k) => (
        <motion.div
          key={k}
          className="flex shrink-0"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
          {items.map((item, i) => (
            <span
              key={`${k}-${i}`}
              className="mx-6 flex items-center gap-6 font-display text-3xl md:mx-10 md:text-5xl"
            >
              {item}
              <span className="text-rose-deep">&#10022;</span>
            </span>
          ))}
        </motion.div>
      ))}
    </div>
  );
}
