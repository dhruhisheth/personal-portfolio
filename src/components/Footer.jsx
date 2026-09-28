import { ArrowUp } from "lucide-react";
import { profile } from "@/data/content";

export const Footer = () => {
  return (
    <footer className="border-t border-line py-8">
      <div className="container flex items-center justify-between gap-4 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {profile.name} · Built with React & Tailwind
        </p>
        <a href="#hero" className="inline-flex items-center gap-1 hover:text-foreground transition-colors">
          Back to top <ArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
};
