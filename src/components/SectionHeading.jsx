export const SectionHeading = ({ index, title, children }) => (
  <div className="mb-10 md:mb-14 grid gap-3 md:grid-cols-[10rem_1fr] md:gap-8 items-baseline">
    <p className="eyebrow">
      {index} / {title}
    </p>
    {children && (
      <p className="font-serif text-2xl md:text-3xl leading-snug max-w-2xl">{children}</p>
    )}
  </div>
);
