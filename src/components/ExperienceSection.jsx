import { ArrowUpRight } from "lucide-react";
import { experience, leadership, publication } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-line">
      <div className="container">
        <SectionHeading index="01" title="Experience">
          Three engineering internships across data, AI, and computer vision, plus a product role at a startup.
        </SectionHeading>

        <ol className="divide-y divide-line border-y border-line">
          {experience.map((job) => (
            <li key={job.org} className="grid gap-3 py-8 md:grid-cols-[10rem_1fr] md:gap-8">
              <p className="font-mono text-xs text-muted pt-1.5">{job.date}</p>
              <div>
                <h3 className="text-lg font-medium">
                  {job.role} <span className="text-muted font-normal">· {job.org}</span>
                </h3>
                {job.location && <p className="text-sm text-muted mt-0.5">{job.location}</p>}
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-foreground/85">
                  {job.bullets.map((b) => (
                    <li key={b} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2.5 before:bg-muted">
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-3 md:grid-cols-[10rem_1fr] md:gap-8">
          <p className="eyebrow pt-1">Leadership & research</p>
          <div>
            <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {leadership.map((item) => (
                <li key={item.role + item.org}>
                  <p className="font-medium">{item.role}</p>
                  <p className="text-sm text-muted">
                    {item.org} · <span className="font-mono text-xs">{item.date}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">{item.detail}</p>
                </li>
              ))}
            </ul>

            <a
              href={publication.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 block rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent"
            >
              <p className="eyebrow">Publication · {publication.year}</p>
              <p className="mt-2 font-serif text-xl leading-snug group-hover:text-accent transition-colors">
                {publication.title}
                <ArrowUpRight size={18} className="inline ml-1 -mt-1" />
              </p>
              <p className="mt-2 text-sm text-muted">
                {publication.authors} {publication.venue}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
