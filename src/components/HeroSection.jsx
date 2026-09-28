import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile, stats } from "@/data/content";

export const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 items-center">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {profile.status}
          </p>

          <h1 className="rise mt-6 font-serif text-5xl md:text-7xl tracking-tight leading-[1.02]" style={{ animationDelay: "80ms" }}>
            {profile.name}
          </h1>

          <p className="rise mt-5 font-serif text-2xl md:text-[1.7rem] leading-snug text-foreground/85 max-w-xl" style={{ animationDelay: "160ms" }}>
            {profile.headline}
          </p>

          <p className="rise mt-5 text-muted leading-relaxed max-w-xl" style={{ animationDelay: "240ms" }}>
            {profile.intro}
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
            <a href="#projects" className="btn-primary">
              See my work <ArrowRight size={16} />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <Download size={16} /> Resume
            </a>
            <div className="flex items-center gap-1 ml-1">
              <IconLink href={profile.github} label="GitHub"><Github size={18} /></IconLink>
              <IconLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></IconLink>
              <IconLink href={`mailto:${profile.email}`} label="Email"><Mail size={18} /></IconLink>
            </div>
          </div>

          <dl className="rise mt-12 grid grid-cols-3 gap-4 max-w-md border-t border-line pt-6" style={{ animationDelay: "400ms" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-serif text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-muted leading-snug">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rise mx-auto w-full max-w-[16rem] md:max-w-sm" style={{ animationDelay: "200ms" }}>
          <div className="relative">
            <div className="hidden md:block absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl bg-accent-soft" aria-hidden />
            <img
              src={profile.photo}
              alt="Dhruhi Sheth"
              width="900"
              height="1200"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover object-[50%_40%] border border-line"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    aria-label={label}
    className="p-2 rounded-full text-muted hover:text-accent hover:bg-accent-soft transition-colors"
  >
    {children}
  </a>
);
