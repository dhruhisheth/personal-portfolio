import { skills } from "@/data/content";

// Continuous ticker of every skill, sitting between the hero and the paper sections.
export const Marquee = () => {
  const items = skills.flatMap((s) => s.items);
  const row = [...items, ...items];

  return (
    <div className="marquee-wrap relative overflow-hidden border-y border-ink-line bg-ink-2 py-4 text-ink-fg" aria-label="Skills">
      <div className="marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap font-serif text-xl italic" aria-hidden={i >= items.length}>
            {item}
            <span className="text-sm not-italic text-highlight">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-2 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-2 to-transparent" />
    </div>
  );
};
