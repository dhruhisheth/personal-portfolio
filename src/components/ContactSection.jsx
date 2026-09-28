import { ArrowUpRight, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/content";

const fieldClass =
  "w-full rounded-xl border border-ink-line bg-white/[0.04] px-4 py-3 text-[15px] text-ink-fg placeholder:text-ink-muted/60 focus:outline-none focus:border-highlight transition-colors";

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
    <section id="contact" className="relative overflow-hidden bg-ink py-24 text-ink-fg md:py-32">
      <div className="blueprint absolute inset-0" aria-hidden />
      <div
        className="absolute -right-40 top-10 h-[30rem] w-[30rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--highlight) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container relative grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div className="reveal">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
            <span className="text-highlight">05</span> — Contact
          </p>
          <h2 className="mt-5 font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight">
            Let's build <br />
            <em className="text-highlight">something.</em>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
            I'm looking for 2027 new-grad roles in software, data, and AI engineering. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-3 break-all font-serif text-2xl md:text-3xl"
          >
            <span className="bg-[linear-gradient(var(--highlight),var(--highlight))] bg-[length:0%_2px] bg-bottom-left bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
              {profile.email}
            </span>
            <ArrowUpRight className="shrink-0 text-highlight transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-highlight">GitHub ↗</a>
            <a href={profile.phoneHref} className="hover:text-highlight">{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="reveal space-y-5 rounded-3xl border border-ink-line bg-ink-2/70 p-6 backdrop-blur-md md:p-8"
          style={{ "--d": "120ms" }}
        >
          <p className="font-serif text-2xl">Or leave a note</p>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-ink-muted">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-ink-muted">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@company.com" />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm text-ink-muted">Message</label>
            <textarea id="message" name="message" required rows={4} className={`${fieldClass} resize-none`} placeholder="What would you like to talk about?" />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn-highlight w-full justify-center disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"} <Send size={15} />
          </button>
          <p aria-live="polite" className="min-h-5 text-sm">
            {status === "sent" && <span className="text-emerald-400">Thanks, your message is on its way. I'll reply soon.</span>}
            {status === "error" && <span className="text-red-400">That didn't send. Please email me directly instead.</span>}
          </p>
        </form>
      </div>
    </section>
  );
};
