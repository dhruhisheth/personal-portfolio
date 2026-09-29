import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, roles, stats, experience } from "@/data/content";
import { useCountUp } from "@/hooks/useReveal";

export const HeroSection = () => {
  const current = experience[0];
  const recent = experience[1];

  return (
    <section id="hero" className="relative overflow-hidden bg-ink text-ink-fg">
      <div className="blueprint absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #2c4bb8 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-48 -left-32 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--highlight) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <p className="rise font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
              <span className="text-highlight">●</span>&nbsp; {profile.status}
            </p>

            <h1
              className="rise mt-6 font-serif text-[clamp(3.4rem,10vw,7.5rem)] leading-[0.92] tracking-[-0.02em]"
              style={{ animationDelay: "80ms" }}
            >
              Dhruhi
              <br />
              <em className="text-highlight">Sheth</em>
              <span className="text-highlight">.</span>
            </h1>

            <p
              className="rise mt-8 font-serif text-2xl md:text-3xl leading-snug max-w-xl"
              style={{ animationDelay: "180ms" }}
            >
              I engineer <RotatingWord words={roles} />
              <br className="hidden sm:block" /> that hold up in production.
            </p>

            <p className="rise mt-5 max-w-xl leading-relaxed text-ink-muted" style={{ animationDelay: "260ms" }}>
              {profile.intro}
            </p>

            <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "340ms" }}>
              <a href="#projects" className="btn-highlight">
                See my work <ArrowRight size={16} />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-ink-line text-ink-fg hover:border-highlight hover:text-highlight"
              >
                <Download size={16} /> Resume
              </a>
              <div className="ml-1 flex items-center gap-1">
                <IconLink href={profile.github} label="GitHub"><Github size={18} /></IconLink>
                <IconLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></IconLink>
                <IconLink href={`mailto:${profile.email}`} label="Email"><Mail size={18} /></IconLink>
              </div>
            </div>
          </div>

          {/* Portrait: arched frame, rotating badge, and "now" chips that overlap the edge */}
          <div className="rise relative mx-auto w-full max-w-[19rem] sm:max-w-sm" style={{ animationDelay: "220ms" }}>
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl border border-highlight/60" aria-hidden />
            <img
              src={profile.photo}
              alt="Dhruhi Sheth"
              width="900"
              height="1200"
              className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl object-cover object-[50%_35%] saturate-[0.9]"
            />

            <Badge className="absolute -left-10 top-6 hidden sm:block" />

            <div className="absolute -right-3 top-10 max-w-[15rem] sm:right-auto sm:top-auto sm:bottom-20 rounded-2xl border border-ink-line bg-ink-2/90 px-4 py-3 shadow-2xl backdrop-blur-md sm:-left-16">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-highlight">Now</p>
              <p className="mt-1 text-sm leading-snug">
                {current.role}, <span className="text-ink-muted">{current.org}</span>
              </p>
            </div>
            <div className="absolute -right-4 -bottom-6 max-w-[15rem] rounded-2xl border border-ink-line bg-ink-2/90 px-4 py-3 shadow-2xl backdrop-blur-md sm:-right-10">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-highlight">Summer ’26</p>
              <p className="mt-1 text-sm leading-snug">
                {recent.role}, <span className="text-ink-muted">{recent.org}</span>
              </p>
            </div>
          </div>
        </div>

        <dl className="rise mt-20 grid grid-cols-1 gap-y-6 border-t border-ink-line pt-8 sm:grid-cols-3" style={{ animationDelay: "420ms" }}>
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} className={i > 0 ? "sm:border-l sm:border-ink-line sm:pl-8" : ""} />
          ))}
        </dl>

        <a
          href="#experience"
          className="mt-12 hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted hover:text-highlight md:inline-flex"
        >
          <ArrowDown size={14} /> Scroll
        </a>
      </div>
    </section>
  );
};

const Stat = ({ value, decimals, suffix = "", label, className }) => {
  const n = useCountUp(value);
  return (
    <div className={className}>
      <dd className="font-serif text-5xl tabular-nums">
        {n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        <span className="text-highlight">{suffix}</span>
      </dd>
      <dt className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{label}</dt>
    </div>
  );
};

const RotatingWord = ({ words }) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-grid align-bottom" aria-live="polite">
      {words.map((w, n) => (
        <em
          key={w}
          className="col-start-1 row-start-1 whitespace-nowrap text-highlight transition-all duration-500"
          style={{
            opacity: n === i ? 1 : 0,
            transform: n === i ? "none" : "translateY(0.4em)",
            filter: n === i ? "none" : "blur(4px)",
          }}
          aria-hidden={n !== i}
        >
          {w}
        </em>
      ))}
    </span>
  );
};

const Badge = ({ className }) => (
  <div className={`h-28 w-28 rounded-full bg-highlight text-[#141a2e] shadow-xl ${className}`}>
    <svg viewBox="0 0 100 100" className="spin-slow h-full w-full" aria-hidden>
      <defs>
        <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
      </defs>
      {/* textLength = circumference (2π·37 ≈ 232.5) so the text closes the loop exactly */}
      <text className="font-mono" fontSize="8.4" fill="currentColor">
        <textPath href="#badge-circle" textLength="231" lengthAdjust="spacing">
          SJSU · COMPUTER SCIENCE · CLASS OF 2027 ·
        </textPath>
      </text>
    </svg>
    <span className="absolute inset-0 grid place-items-center font-serif text-2xl italic">’27</span>
  </div>
);

const IconLink = ({ href, label, children }) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    aria-label={label}
    className="rounded-full p-2 text-ink-muted transition-colors hover:bg-white/5 hover:text-highlight"
  >
    {children}
  </a>
);
