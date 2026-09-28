import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/content";

const navItems = [
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// A floating pill that reads on both the navy hero and the paper sections.
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onDark = !isScrolled && !isMenuOpen;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:pt-4">
      <div
        className={cn(
          "mx-auto max-w-5xl rounded-2xl border px-4 py-2.5 transition-all duration-300 md:px-5",
          onDark
            ? "border-ink-line bg-ink/40 text-ink-fg backdrop-blur-md"
            : "border-line bg-surface/85 text-foreground shadow-[0_10px_40px_-20px_rgba(13,22,51,0.45)] backdrop-blur-xl"
        )}
      >
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-highlight font-serif text-sm italic text-[#141a2e]">
              ds
            </span>
            <span className="font-serif text-lg tracking-tight">{profile.name}</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn("text-sm transition-colors", onDark ? "text-ink-muted hover:text-ink-fg" : "text-muted hover:text-foreground")}
              >
                {item.name}
              </a>
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-highlight !px-4 !py-1.5">
              Resume
            </a>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col pt-3 pb-1 md:hidden">
            {[...navItems, { name: "Resume", href: profile.resume }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-line py-3 font-serif text-xl last:border-0"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
