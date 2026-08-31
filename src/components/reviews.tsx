import { reviews, salon } from "@/lib/data";
import Reveal from "./reveal";

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} out of 5`} className="text-sm tracking-widest">
      <span className="text-rose-deep">{"★".repeat(n)}</span>
      <span className="text-ink/15">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Reviews() {
  return (
    <section className="bg-cream px-6 pb-24 pt-20 md:px-10 md:pb-40 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/15 pb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-rose-deep">
                Word of mouth
              </p>
              <h2 className="mt-4 font-display text-5xl md:text-7xl">
                What guests say
              </h2>
            </div>
            <p className="font-display text-2xl md:text-3xl">
              {salon.rating}
              <span className="text-rose-deep"> &#9733;</span>
              <span className="ml-3 align-middle text-xs uppercase tracking-widest text-ink/50">
                {salon.reviewCount} Google reviews
              </span>
            </p>
          </div>
        </Reveal>

        <div className="mt-12 gap-5 md:mt-16 md:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={(i % 3) * 0.08}
              className="mb-5 break-inside-avoid"
            >
              <figure
                data-cursor
                className="rounded-2xl border border-ink/12 bg-white/60 p-7 transition-colors duration-300 hover:border-rose-deep/50 hover:bg-white"
              >
                <Stars n={r.rating} />
                <blockquote className="mt-4 font-display text-xl leading-snug md:text-2xl">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-ink/55">
                  {r.name} &mdash; {r.detail}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={salon.googleUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-block border-b border-ink pb-1 text-sm uppercase tracking-[0.2em] transition-colors hover:border-rose-deep hover:text-rose-deep"
          >
            Read all {salon.reviewCount} on Google
          </a>
        </Reveal>
      </div>
    </section>
  );
}
