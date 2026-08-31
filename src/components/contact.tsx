"use client";

import { BOOKING_URL, salon } from "@/lib/data";
import Marquee from "./marquee";
import Reveal from "./reveal";

export default function Contact() {
  const { address } = salon;

  return (
    <footer id="visit" className="bg-plum text-cream">
      <div className="border-b border-cream/15 py-8">
        <Marquee
          items={["Book your seat", "Byculla, Mumbai", "087792 98271"]}
          speed={30}
        />
      </div>

      <div className="grid gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <Reveal>
            <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Come to
              <br />
              Blush.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-xs uppercase tracking-[0.25em] text-plum transition-transform hover:-translate-y-0.5"
            >
              Book an appointment
              <span aria-hidden>&#8599;</span>
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-xs text-cream/50">
              Prefer to talk?{" "}
              <a href={salon.phoneHref} className="underline">
                {salon.phoneDisplay}
              </a>
            </p>
          </Reveal>

          <dl className="mt-14 space-y-6 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.25em] text-cream/40">
                Address
              </dt>
              <dd className="mt-2 leading-relaxed text-cream/80">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.city}, {address.state} {address.zip}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.25em] text-cream/40">
                Hours
              </dt>
              <dd className="mt-2 text-cream/80">{salon.hours}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.25em] text-cream/40">
                Elsewhere
              </dt>
              <dd className="mt-2 flex gap-5 text-cream/80">
                <a href={salon.instagramUrl} target="_blank" rel="noreferrer" className="underline">
                  Instagram
                </a>
                <a href={salon.googleUrl} target="_blank" rel="noreferrer" className="underline">
                  Google
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <Reveal delay={0.1} className="h-full">
          <div className="h-[320px] overflow-hidden rounded-2xl md:h-full md:min-h-[460px]">
            <iframe
              title="Map to Blush by Bushra Imtiyaz"
              src={salon.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale"
            />
          </div>
        </Reveal>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/15 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-cream/40 md:flex-row md:px-10">
        <span>&copy; {new Date().getFullYear()} {salon.name}</span>
        <span>Byculla · Mumbai · 400010</span>
      </div>
    </footer>
  );
}
