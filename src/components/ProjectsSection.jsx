import { ArrowUpRight, Github } from "lucide-react";
import { featuredProjects, moreProjects, profile } from "@/data/content";
import { SectionHeading } from "./SectionHeading";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-28 border-t border-line">
      <div className="container">
        <SectionHeading index="02" title="Projects">
          Things I've built end to end, from the data model to the deployed app.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6 md:p-7 transition-colors hover:border-accent/60"
            >
              <h3 className="font-serif text-2xl">{p.title}</h3>
              <p className="mt-2 text-foreground/85 leading-relaxed">{p.blurb}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted leading-relaxed">
                {p.bullets.map((b) => (
                  <li key={b} className="relative pl-4 before:absolute before:left-0 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-accent">
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="mt-auto pt-6 flex gap-5 text-sm font-medium">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent hover:underline underline-offset-4">
                    Live site <ArrowUpRight size={15} />
                  </a>
                )}
                <a href={p.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted hover:text-foreground">
                  <Github size={15} /> Source
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-[10rem_1fr] md:gap-8">
          <p className="eyebrow pt-1">More projects</p>
          <ul className="divide-y divide-line border-y border-line">
            {moreProjects.map((p) => (
              <li key={p.title}>
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-medium group-hover:text-accent transition-colors sm:w-72 shrink-0">
                    {p.title}
                  </span>
                  <span className="text-sm text-muted flex-1">{p.blurb}</span>
                  <ArrowUpRight size={16} className="hidden sm:block text-muted group-hover:text-accent shrink-0" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-sm text-muted md:pl-[12rem]">
          Everything else lives on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
};
