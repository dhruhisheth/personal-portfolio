import { skills, education, honors } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 border-t border-line">
      <div className="container">
        <SectionHeading index="03" title="Skills">
          The tools I reach for, grouped the way I use them.
        </SectionHeading>

        <dl className="divide-y divide-line border-y border-line">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-3 py-5 md:grid-cols-[10rem_1fr] md:gap-8">
              <dt className="font-medium text-sm pt-1">{s.group}</dt>
              <dd className="flex flex-wrap gap-x-2 gap-y-2">
                {s.items.map((item) => (
                  <span key={item} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-line">
      <div className="container">
        <SectionHeading index="04" title="Education" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="font-mono text-xs text-muted">{education.date}</p>
            <h3 className="mt-2 font-serif text-3xl">{education.school}</h3>
            <p className="mt-1 text-lg">{education.degree}</p>
            <p className="mt-1 text-muted">GPA {education.gpa}</p>

            <p className="eyebrow mt-8 mb-3">Relevant coursework</p>
            <ul className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <li key={c} className="rounded-full border border-line bg-surface px-3 py-1 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Honors & certifications</p>
            <ul className="divide-y divide-line border-y border-line">
              {honors.map((h) => {
                const body = (
                  <>
                    <span className="font-medium">{h.title}</span>
                    <span className="text-sm text-muted">{h.org}</span>
                  </>
                );
                return (
                  <li key={h.title}>
                    {h.href ? (
                      <a
                        href={h.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 py-4 hover:text-accent transition-colors"
                      >
                        <span className="flex flex-col">{body}</span>
                        <ArrowUpRight size={16} className="text-muted group-hover:text-accent shrink-0" />
                      </a>
                    ) : (
                      <div className="flex flex-col py-4">{body}</div>
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
