import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

export const Footer = () => {
  return (
    <footer className="border-t border-ink-line bg-ink py-8 text-ink-muted">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {profile.name} · Designed & built in San Jose
        </p>
        <a href="#hero" className="inline-flex items-center gap-1 transition-colors hover:text-highlight">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};
