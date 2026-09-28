import { skills, education, honors } from "@/data/content";
import { ArrowUpRight, Award, BrainCircuit, Code2, Database, Server, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { trackSpotlight } from "@/hooks/useReveal";

const icons = {
  Languages: Code2,
  "AI & ML": BrainCircuit,
  "Backend & Web": Server,
  "Data & Cloud": Database,
  "Practices & Tools": Wrench,
};

// Bento layout: wider tiles for the groups with the most tools.
const spans = {
  Languages: "lg:col-span-2",
  "AI & ML": "lg:col-span-2",
  "Backend & Web": "lg:col-span-2",
  "Data & Cloud": "lg:col-span-3",
  "Practices & Tools": "lg:col-span-3",
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="border-t border-line py-24 md:py-32">
      <div className="container">
        <SectionHeading index="03" eyebrow="Toolkit" title={<>The tools I <em className="text-accent">reach for</em>.</>}>
          Grouped the way I actually use them on a project.
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skills.map((s, i) => {
            const Icon = icons[s.group] ?? Code2;
            return (
              <div
                key={s.group}
                onPointerMove={trackSpotlight}
                className={cn("spotlight reveal rounded-3xl border border-line bg-surface p-6", spans[s.group])}
                style={{ "--d": `${(i % 3) * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Icon size={19} />
                  </span>
                  <span className="font-mono text-xs text-muted">{String(s.items.length).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-background px-3 py-1 text-sm transition-colors hover:border-highlight hover:text-highlight-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" className="border-t border-line py-24 md:py-32">
      <div className="container">
        <SectionHeading index="04" eyebrow="Education" title={<>San José State, <em className="text-accent">class of ’27</em>.</>} />

        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="reveal relative overflow-hidden rounded-3xl bg-ink p-8 text-ink-fg md:p-10">
            <div className="blueprint absolute inset-0 opacity-60" aria-hidden />
            <div className="relative grid gap-8 sm:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-highlight">{education.date}</p>
                <h3 className="mt-3 font-serif text-4xl leading-tight">{education.school}</h3>
                <p className="mt-1 text-lg text-ink-muted">{education.degree}</p>
              </div>
              <div className="sm:text-right">
                <p className="font-serif text-7xl leading-none text-highlight">{education.gpa}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">GPA</p>
              </div>
            </div>
            <p className="relative mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">Relevant coursework</p>
            <ul className="relative mt-3 flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <li key={c} className="rounded-full border border-ink-line px-3 py-1 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-line bg-surface p-8" style={{ "--d": "100ms" }}>
            <p className="eyebrow flex items-center gap-2">
              <Award size={14} className="text-highlight-ink" /> Honors & certifications
            </p>
            <ul className="mt-4">
              {honors.map((h) => {
                const body = (
                  <>
                    <span>
                      <span className="block font-serif text-xl">{h.title}</span>
                      <span className="text-sm text-muted">{h.org}</span>
                    </span>
                    {h.href && (
                      <ArrowUpRight size={17} className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight-ink" />
                    )}
                  </>
                );
                const cls = "group flex items-center justify-between gap-4 border-b border-line py-4 last:border-0";
                return (
                  <li key={h.title}>
                    {h.href ? (
                      <a href={h.href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
                    ) : (
                      <div className={cls}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
