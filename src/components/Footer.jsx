import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Dhruhi Sheth. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Computer Science at SJSU
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/dhruhisheth" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              title="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/dhruhisheth" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:shethdhruhi05@gmail.com"
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
