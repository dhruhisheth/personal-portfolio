import { ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/content";

const fieldClass =
  "w-full rounded-lg border border-line bg-background px-4 py-3 text-[15px] placeholder:text-muted/70 focus:outline-none focus:border-accent transition-colors";

export const ContactSection = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/myzpyddw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(response.statusText);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="container grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <p className="eyebrow">05 / Contact</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
            Let's build something.
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-md">
            I'm looking for 2027 new-grad roles in software, data, and AI engineering. The fastest way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block font-serif text-2xl md:text-3xl text-accent underline decoration-accent/30 underline-offset-8 hover:decoration-accent transition-colors break-all"
          >
            {profile.email}
          </a>
          <ul className="mt-8 space-y-2 text-sm">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-foreground">
                LinkedIn <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-foreground">
                GitHub <ArrowUpRight size={14} />
              </a>
            </li>
            <li>
              <a href={profile.phoneHref} className="text-muted hover:text-foreground">{profile.phone}</a>
            </li>
            <li className="text-muted">{profile.location}</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-surface p-6 md:p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" required rows={5} className={`${fieldClass} resize-none`} placeholder="What would you like to talk about?" />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"} <Send size={15} />
          </button>
          <p aria-live="polite" className="text-sm min-h-5">
            {status === "sent" && <span className="text-emerald-600 dark:text-emerald-400">Thanks, your message is on its way. I'll reply soon.</span>}
            {status === "error" && <span className="text-red-600 dark:text-red-400">That didn't send. Please email me directly instead.</span>}
          </p>
        </form>
      </div>
    </section>
  );
};
