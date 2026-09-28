// Oversized outlined index number behind a serif title: the section signature.
export const SectionHeading = ({ index, eyebrow, title, children }) => (
  <header className="reveal relative mb-12 md:mb-16">
    <span
      className="pointer-events-none absolute -top-10 -left-2 select-none font-serif text-[9rem] leading-none text-transparent md:-top-16 md:text-[13rem]"
      style={{ WebkitTextStroke: "1px var(--line)" }}
      aria-hidden
    >
      {index}
    </span>
    <p className="eyebrow relative">
      <span className="text-highlight-ink">{index}</span> — {eyebrow}
    </p>
    <h2 className="relative mt-4 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight md:text-6xl">
      {title}
    </h2>
    {children && <p className="relative mt-5 max-w-2xl text-lg leading-relaxed text-muted">{children}</p>}
  </header>
);
