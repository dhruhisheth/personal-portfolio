import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { experience, leadership, publication } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { trackSpotlight } from "@/hooks/useReveal";

export const ExperienceSection = () => {
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading index="01" eyebrow="Experience" title={<>Where I've <em className="text-accent">shipped</em> things.</>}>
          Three engineering internships across data, AI, and computer vision, plus a product role at an early-stage startup.
        </SectionHeading>

        {/* Desktop: company switcher + detail panel. Mobile: every role stacked. */}
        <div className="reveal hidden gap-6 md:grid md:grid-cols-[18rem_1fr]">
          <div role="tablist" aria-orientation="vertical" className="flex flex-col">
            {experience.map((j, i) => (
              <button
                key={j.org}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "group relative border-l-2 py-4 pl-5 pr-3 text-left transition-colors",
                  i === active ? "border-highlight" : "border-line hover:border-muted"
                )}
              >
                <span className="block font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{j.date}</span>
                <span className={cn("mt-1 block font-serif text-2xl transition-colors", i === active ? "text-foreground" : "text-muted group-hover:text-foreground")}>
                  {j.org}
                </span>
              </button>
            ))}
          </div>

          <article
            key={active}
            role="tabpanel"
            onPointerMove={trackSpotlight}
            className="spotlight rise relative overflow-hidden rounded-3xl border border-line bg-surface p-10"
          >
            <JobBody job={job} />
            <span
              className="pointer-events-none absolute -right-4 -bottom-10 select-none font-serif text-[10rem] italic leading-none text-accent/[0.06]"
              aria-hidden
            >
              {job.date.match(/\d{4}/)?.[0]}
            </span>
          </article>
        </div>

        <div className="space-y-5 md:hidden">
          {experience.map((j) => (
            <article key={j.org} className="reveal rounded-2xl border border-line bg-surface p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{j.date}</p>
              <JobBody job={j} compact />
            </article>
          ))}
        </div>

        {/* Leadership & research */}
        <div className="mt-24">
          <p className="reveal eyebrow mb-8">
            <span className="text-highlight-ink">01.5</span> — Leadership & research
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={publication.href}
              target="_blank"
              rel="noopener noreferrer"
              onPointerMove={trackSpotlight}
              className="spotlight reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-7 text-ink-fg"
            >
              <div className="blueprint absolute inset-0 opacity-60" aria-hidden />
              <div className="relative">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-highlight">Published · Springer · {publication.year}</p>
                <p className="mt-5 font-serif text-3xl leading-tight">
                  Predicting stock market using <em className="text-highlight">machine learning</em>
                </p>
              </div>
              <p className="relative mt-10 flex items-end justify-between gap-4 text-sm text-ink-muted">
                <span>{publication.authors} {publication.venue}</span>
                <ArrowUpRight className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-highlight" />
              </p>
            </a>

            {leadership.map((item, i) => (
              <div
                key={item.role + item.org}
                onPointerMove={trackSpotlight}
                className="spotlight reveal rounded-3xl border border-line bg-surface p-6"
                style={{ "--d": `${(i % 3) * 80}ms` }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{item.date}</p>
                <p className="mt-3 font-serif text-xl leading-snug">{item.role}</p>
                <p className="text-sm text-accent">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const JobBody = ({ job, compact }) => (
  <div className="relative">
    <h3 className={cn("font-serif leading-tight", compact ? "mt-2 text-2xl" : "text-4xl")}>{job.role}</h3>
    <p className="mt-1 text-muted">
      <span className="text-accent">{job.org}</span>
      {job.location && <> · {job.location}</>}
    </p>
    <ul className={cn("space-y-3 leading-relaxed text-foreground/85", compact ? "mt-5 text-[15px]" : "mt-8 text-[16px]")}>
      {job.bullets.map((b, i) => (
        <li key={b} className="grid grid-cols-[2rem_1fr]">
          <span className="pt-1 font-mono text-xs text-highlight-ink">0{i + 1}</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
    <div className="mt-7 flex flex-wrap gap-1.5">
      {job.tags.map((t) => (
        <span key={t} className="tag">{t}</span>
      ))}
    </div>
  </div>
);
