import { ArrowUpRight, Github } from "lucide-react";
import { featuredProjects, moreProjects, profile } from "@/data/content";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { trackSpotlight } from "@/hooks/useReveal";

export const ProjectsSection = () => {
  const [lead, ...rest] = featuredProjects;

  return (
    <section id="projects" className="border-t border-line py-24 md:py-32">
      <div className="container">
        <SectionHeading index="02" eyebrow="Selected work" title={<>Built end to end, <em className="text-accent">deployed</em> for real.</>}>
          From the data model to the live URL. Each of these runs somewhere you can click.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          <ProjectCard project={lead} n={1} wide />
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} n={i + 2} delay={i * 90} />
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-[14rem_1fr] md:gap-10">
          <p className="reveal eyebrow pt-2">Also built</p>
          <ul className="reveal border-t border-line">
            {moreProjects.map((p) => (
              <li key={p.title} className="border-b border-line">
                <a
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-1 py-5 transition-[padding] duration-300 hover:pl-3 sm:grid-cols-[1fr_1.3fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span className="font-serif text-xl transition-colors group-hover:text-accent">{p.title}</span>
                  <span className="text-sm text-muted">{p.blurb}</span>
                  <ArrowUpRight size={18} className="hidden text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight-ink sm:block" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="reveal mt-10 text-sm text-muted md:pl-[16.5rem]">
          Everything else lives on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>.
        </p>
      </div>
    </section>
  );
};

const ProjectCard = ({ project: p, n, wide, delay = 0 }) => (
  <article
    onPointerMove={trackSpotlight}
    className={cn(
      "spotlight reveal group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/50",
      wide && "lg:col-span-3 lg:grid lg:grid-cols-[1.1fr_1fr]"
    )}
    style={{ "--d": `${delay}ms` }}
  >
    <CodeCover lines={p.cover} file={p.title} ext={p.tags.includes("Java") ? "java" : "py"} n={n} wide={wide} />

    <div className={cn("flex flex-1 flex-col p-7", wide && "lg:p-10")}>
      <div className="flex items-baseline justify-between gap-4">
        <h3 className={cn("font-serif leading-tight", wide ? "text-4xl" : "text-3xl")}>{p.title}</h3>
        <span className="font-mono text-xs text-muted">0{n}</span>
      </div>
      <p className="mt-3 leading-relaxed text-foreground/85">{p.blurb}</p>
      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted">
        {p.bullets.map((b) => (
          <li key={b} className="grid grid-cols-[1.1rem_1fr]">
            <span className="text-highlight-ink">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
      <div className="mt-auto flex gap-3 pt-7 text-sm font-medium">
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn-primary !px-4 !py-2">
            Live site <ArrowUpRight size={15} />
          </a>
        )}
        <a href={p.source} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2">
          <Github size={15} /> Source
        </a>
      </div>
    </div>
  </article>
);

// A stylised editor window generated from each project's code snippet.
const CodeCover = ({ lines, file, ext, n, wide }) => (
  <div className={cn("relative overflow-hidden bg-ink p-5 text-ink-fg", wide ? "min-h-64 lg:flex lg:min-h-full lg:flex-col lg:justify-center lg:p-10" : "min-h-52")}>
    <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
    <div
      className="absolute -right-16 -bottom-20 h-56 w-56 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
      style={{ background: n % 2 ? "var(--highlight)" : "#3b5bdb" }}
      aria-hidden
    />
    <div className="relative rounded-xl border border-ink-line bg-ink-2/80 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.02]">
      <div className="flex items-center gap-1.5 border-b border-ink-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-highlight/80" />
        <span className="ml-3 font-mono text-[11px] text-ink-muted">
          {file.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.{ext}
        </span>
      </div>
      <pre className="overflow-hidden px-4 py-4 font-mono text-[12px] leading-6" aria-hidden>
        {lines.map((line, i) => (
          <div key={i} className="flex gap-4 whitespace-pre">
            <span className="select-none text-ink-muted/50">{i + 1}</span>
            <Highlighted text={line} />
            {i === lines.length - 1 && <span className="caret -ml-3 text-highlight">▍</span>}
          </div>
        ))}
      </pre>
    </div>
  </div>
);

// Tiny highlighter: strings in marigold, comments dimmed, keywords in blue.
const Highlighted = ({ text }) => {
  const m = text.match(/^(.*?)(\s(?:\/\/|#)\s.*)?$/);
  const [code, comment] = [m[1], m[2]];
  const parts = code.split(/("[^"]*")/g);
  return (
    <span className="overflow-hidden text-ellipsis whitespace-pre">
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-highlight">{part}</span>
        ) : (
          <span key={i}>
            {part.split(/\b(with|GET|POST|200 OK)\b/g).map((w, j) =>
              /^(with|GET|POST|200 OK)$/.test(w) ? <span key={j} className="text-[#9fb4ff]">{w}</span> : w
            )}
          </span>
        )
      )}
      {comment && <span className="text-ink-muted/70">{comment}</span>}
    </span>
  );
};
