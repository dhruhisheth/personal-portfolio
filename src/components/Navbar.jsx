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

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "py-3 bg-background/85 backdrop-blur-md border-b border-line"
          : "py-5 border-b border-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl tracking-tight">
          {profile.name}
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost !py-1.5 !px-4">
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
        <div className="container md:hidden pt-4 pb-2 flex flex-col gap-1">
          {[...navItems, { name: "Resume", href: profile.resume }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-2.5 text-lg border-b border-line last:border-0"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
