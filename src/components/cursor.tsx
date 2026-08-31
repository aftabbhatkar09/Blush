"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/** Trailing ring + dot cursor. Grows over links, buttons and [data-cursor]. */
export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const xTo = gsap.quickTo(ring.current, "x", { duration: 0.45, ease: "power3" });
    const yTo = gsap.quickTo(ring.current, "y", { duration: 0.45, ease: "power3" });
    const dxTo = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power3" });
    const dyTo = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power3" });

    const move = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      dxTo(e.clientX);
      dyTo(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const hit = (e.target as HTMLElement)?.closest?.("a, button, [data-cursor]");
      gsap.to(ring.current, { scale: hit ? 2.4 : 1, duration: 0.3, ease: "power2" });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      root.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    >
      <div
        ref={ring}
        className="absolute left-0 top-0 -ml-4 -mt-4 h-8 w-8 rounded-full border border-rose-deep mix-blend-difference"
      />
      <div
        ref={dot}
        className="absolute left-0 top-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-rose-deep"
      />
    </div>
  );
}
