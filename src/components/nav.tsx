"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { BOOKING_URL } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240 && !open);
  });

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-6 py-5 text-white mix-blend-difference md:px-10"
      >
        <a href="#top" className="font-display text-xl tracking-tight">
          Blush
        </a>

        <nav className="hidden gap-9 text-[11px] uppercase tracking-[0.25em] md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-opacity hover:opacity-50">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full border border-white px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-plum md:block"
        >
          Book now
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-[11px] uppercase tracking-[0.25em] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </motion.header>

      <AnimatePresenceMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function AnimatePresenceMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        clipPath: open
          ? "circle(150% at 100% 0%)"
          : "circle(0% at 100% 0%)",
      }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[150] flex flex-col items-center justify-center gap-7 bg-plum text-cream md:hidden"
      style={{ pointerEvents: open ? "auto" : "none" }}
    >
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="font-display text-4xl"
        >
          {l.label}
        </a>
      ))}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noreferrer"
        onClick={onClose}
        className="mt-4 rounded-full border border-cream px-7 py-3 text-xs uppercase tracking-[0.25em]"
      >
        Book now
      </a>
    </motion.div>
  );
}
