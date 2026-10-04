import { useEffect, useRef, useState } from 'react';

// Kept in sync with the résumés: same titles, dates, and numbers.
const roles = ['data pipelines', 'AI products', 'reliable software', 'things people use'];

const stats = [
  { value: 12000, suffix: '+', label: 'banks integrated' },
  { value: 25000, suffix: '', label: 'reviews in published research' },
  { value: 50, suffix: '+', label: 'students mentored' },
  { value: 99.9, suffix: '%', label: 'uptime shipped', decimals: 1 }
];

const veraTabs = [
  { id: 'ask', label: 'Ask', title: 'Semantic search', blurb: 'Shoppers describe what they want. VERA parses intent and ranks the catalog.' },
  { id: 'show', label: 'Show', title: 'Visual search', blurb: 'Upload a photo. CLIP embeddings find the closest matches in a vector index.' },
  { id: 'style', label: 'Style', title: 'Outfit generation', blurb: 'LLM reasoning plus recommendation logic builds complete looks from one item.' },
  { id: 'insights', label: 'Insights', title: 'Brand analytics', blurb: 'Brands see what customers search for and which products they engage with.' }
];

const projects = [
  {
    tag: 'Data product',
    title: 'Warehouse AI',
    line: 'AI-assisted inventory with auditable edits and version history.',
    tech: ['FastAPI', 'React', 'Redis'],
    href: 'https://warehouse-ai.vercel.app'
  },
  {
    tag: 'Research · IEEE ETECOM 2026',
    title: 'Linguistic Heuristics in Sentiment Analysis',
    line: 'First-author paper: 72.40% → 73.72% accuracy on 25,000 IMDb reviews.',
    tech: ['Python', 'NLTK', 'Statistics']
  },
  {
    tag: 'Backend',
    title: 'MealMate',
    line: 'Microservices REST API over 10K+ recipes at 99.9% uptime.',
    tech: ['Spring Boot', 'MongoDB', 'AWS'],
    href: 'https://github.com/dhruhisheth/meal-mate'
  },
  {
    tag: 'AI agent',
    title: 'LangGraph Stylist Agent',
    line: 'Prompt-to-outfit agent: +25% relevance, +30% engagement.',
    tech: ['LangGraph', 'FastAPI', 'Streamlit'],
    href: 'https://github.com/dhruhisheth/langgraph-ai-agent'
  }
];

const experience = [
  {
    role: 'Product & Outreach Associate',
    org: 'Girls Girls Club',
    when: 'Aug 2026 — Present',
    where: 'New York, NY · Remote',
    points: [
      'Support end-to-end development of the club’s app with the founding team',
      'Lead outreach to members, partners, and brands',
      'Design branded marketing assets in Canva'
    ]
  },
  {
    role: 'Data Engineering Intern',
    org: 'RAAPID Inc.',
    when: 'May 2026 — Jul 2026',
    where: 'Louisville, KY · Remote',
    points: [
      'Medallion Architecture pipeline on Microsoft Fabric / OneLake: 5 hospital document types, zero data loss',
      'MD5 deduplication, batching, and JSON manifests for auditable daily runs',
      'Fault-tolerant uploads with 3x retry and a dead-letter system'
    ]
  },
  {
    role: 'AI Intern',
    org: 'Lucrisma Inc.',
    when: 'May 2025 — Jul 2025',
    where: 'Remote',
    points: [
      'AI financial assistant (LangGraph, FastAPI), reducing support requests by 30/week',
      'APIs aggregating 12,000+ banks and 300+ crypto wallets, saving $4,000 annually',
      '40% faster sync and 35% lower latency for 1,000+ users'
    ]
  },
  {
    role: 'Software Developer Intern',
    org: 'ContCentric IT Services',
    when: 'May 2024 — Aug 2024',
    where: 'Delaware, DE',
    points: [
      'Annotated 8,000+ drone images and fine-tuned YOLOv8: ~20% accuracy uplift',
      'Async Flask API automating geospatial PDF reports: ~15% faster processing'
    ]
  }
];

const beyond = [
  { title: 'Peer Academic Success Coach', org: 'San José State University', when: 'Aug 2026 — Present' },
  { title: 'Mentorship Director', org: 'Society of Women Engineers, SJSU', when: 'Aug 2025 — Present' },
  { title: 'Undergraduate Researcher', org: 'SJSU · IEEE ETECOM 2026 paper', when: 'Aug 2024 — May 2025' }
];

const skills = ['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Spring Boot', 'SQL', 'Microsoft Fabric', 'AWS', 'Docker', 'Redis', 'MongoDB', 'LangGraph', 'TensorFlow', 'Pandas', 'Figma'];

const sections = ['vera', 'work', 'experience', 'contact'];

/* ---------- hooks ---------- */

// Adds .in to every [data-reveal] element once it scrolls into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState('');
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}

function useScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return p;
}

/* ---------- small components ---------- */

function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="rotator" aria-live="polite">
      <span key={i} className="rotator-word">{roles[i]}</span>
    </span>
  );
}

function CountUp({ value, suffix, decimals = 0 }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const dur = 1400;
      const tick = (t) => {
        const k = Math.min(1, (t - start) / dur);
        setN(value * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

function Typed({ text }) {
  const [shown, setShown] = useState('');
  useEffect(() => {
    let i = 0;
    setShown('');
    const t = setInterval(() => { i += 1; setShown(text.slice(0, i)); if (i >= text.length) clearInterval(t); }, 38);
    return () => clearInterval(t);
  }, [text]);
  return <>{shown}<span className="caret" /></>;
}

/* ---------- VERA demo panels (illustrative) ---------- */

function DemoAsk() {
  const items = [['Polka dot crop top', '98%'], ['Dotted tie-front top', '94%'], ['Black spot cami', '91%']];
  return (
    <div className="demo">
      <div className="demo-input"><span className="demo-icon">⌕</span><Typed text="black polka dot crop top under $40" /></div>
      <div className="demo-results">
        {items.map(([name, score], i) => (
          <div className="result" style={{ animationDelay: `${1.5 + i * 0.18}s` }} key={name}>
            <div className={`swatch s${i}`} /><span>{name}</span><b>{score}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoShow() {
  const steps = ['Photo', 'CLIP embedding', 'Vector search', 'Matches'];
  return (
    <div className="demo">
      <div className="pipeline">
        {steps.map((s, i) => (
          <div className="step" style={{ animationDelay: `${i * 0.35}s` }} key={s}>
            <div className="step-dot">{i + 1}</div><span>{s}</span>
          </div>
        ))}
      </div>
      <div className="vector-grid" aria-hidden="true">
        {Array.from({ length: 32 }).map((_, i) => <i key={i} style={{ animationDelay: `${(i % 8) * 0.06 + 1.2}s` }} className={[5, 13, 22].includes(i) ? 'hit' : ''} />)}
      </div>
    </div>
  );
}

function DemoStyle() {
  const pieces = ['Linen blazer', 'Silk camisole', 'Wide-leg trousers', 'Loafers'];
  return (
    <div className="demo">
      <div className="outfit">
        {pieces.map((p, i) => (
          <div className="piece" style={{ animationDelay: `${i * 0.22}s` }} key={p}>
            <div className={`piece-art a${i}`} /><span>{p}</span>
          </div>
        ))}
      </div>
      <div className="demo-note">Generated look · “Smart casual, office to dinner”</div>
    </div>
  );
}

function DemoInsights() {
  const bars = [['wide-leg denim', 92], ['linen sets', 74], ['ballet flats', 61], ['oversized blazer', 48]];
  return (
    <div className="demo">
      <div className="demo-note top">Top customer searches · last 7 days</div>
      <div className="bars">
        {bars.map(([k, v], i) => (
          <div className="bar-row" key={k}>
            <span>{k}</span>
            <div className="bar"><div className="bar-fill" style={{ '--w': `${v}%`, animationDelay: `${i * 0.12}s` }} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

const demos = { ask: DemoAsk, show: DemoShow, style: DemoStyle, insights: DemoInsights };

function Vera() {
  const [tab, setTab] = useState('ask');
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return undefined;
    const t = setInterval(() => setTab((cur) => veraTabs[(veraTabs.findIndex((x) => x.id === cur) + 1) % veraTabs.length].id), 6000);
    return () => clearInterval(t);
  }, [auto]);
  const current = veraTabs.find((t) => t.id === tab);
  const Demo = demos[tab];
  return (
    <section id="vera" className="vera">
      <div className="wrap vera-grid">
        <div className="vera-copy" data-reveal>
          <div className="eyebrow gold">Now building</div>
          <h2>VERA</h2>
          <p className="vera-lede">B2B AI discovery for fashion brands. Brands bring their catalog; VERA makes it searchable by meaning, image, and style.</p>
          <div className="tabs" role="tablist">
            {veraTabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} className={tab === t.id ? 'tab on' : 'tab'}
                onClick={() => { setTab(t.id); setAuto(false); }}>
                {t.label}
                {tab === t.id && auto && <span className="tab-timer" />}
              </button>
            ))}
          </div>
          <div className="tab-detail" key={tab}>
            <h3>{current.title}</h3>
            <p>{current.blurb}</p>
          </div>
          <div className="stack">
            {['Next.js', 'NestJS', 'PostgreSQL', 'Pinecone', 'CLIP', 'LLMs', 'AWS'].map((s) => <span key={s}>{s}</span>)}
          </div>
        </div>
        <div className="vera-stage" data-reveal>
          <div className="stage-bar"><i /><i /><i /><span>vera · {current.title.toLowerCase()}</span></div>
          <div className="stage-body" key={tab}><Demo /></div>
          <div className="stage-foot">Illustrative demo</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- page ---------- */

function App() {
  useReveal();
  const active = useActiveSection();
  const progress = useScrollProgress();
  const [open, setOpen] = useState(0);

  return (
    <div className="site">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top">DS</a>
          <div className="nav-links">
            {sections.map((id) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{id === 'vera' ? 'VERA' : id[0].toUpperCase() + id.slice(1)}</a>)}
            <a className="nav-cta" href="/Dhruhi_Sheth_Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <div className="eyebrow rise" style={{ animationDelay: '.05s' }}>Dhruhi Sheth · SJSU Computer Science · May 2027</div>
          <h1 className="rise" style={{ animationDelay: '.15s' }}>I build <RotatingWord /></h1>
          <p className="hero-sub rise" style={{ animationDelay: '.3s' }}>Software, data, and AI engineer. First-author research at IEEE ETECOM 2026.</p>
          <div className="hero-actions rise" style={{ animationDelay: '.45s' }}>
            <a className="button primary" href="#vera">See what I’m building</a>
            <a className="button ghost" href="mailto:shethdhruhi05@gmail.com">Email me</a>
          </div>
          <a className="scroll-cue" href="#vera" aria-label="Scroll down"><span /></a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...skills, ...skills].map((s, i) => <span key={i}>{s}</span>)}
          </div>
        </div>

        <section className="stats wrap">
          {stats.map((s, i) => (
            <div className="stat" data-reveal style={{ transitionDelay: `${i * 0.08}s` }} key={s.label}>
              <strong><CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        <Vera />

        <section id="work" className="wrap block">
          <div className="head" data-reveal><div className="eyebrow">Selected work</div><h2>Built end to end.</h2></div>
          <div className="cards">
            {projects.map((p, i) => {
              const Card = p.href ? 'a' : 'article';
              const linkProps = p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {};
              return (
                <Card className="card" data-reveal style={{ transitionDelay: `${i * 0.08}s` }} key={p.title} {...linkProps}>
                  <div className="card-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.line}</p>
                  <div className="card-foot">
                    <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                    {p.href && <span className="arrow">↗</span>}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        <section id="experience" className="wrap block">
          <div className="head" data-reveal><div className="eyebrow">Experience</div><h2>Where I’ve worked.</h2></div>
          <div className="accordion">
            {experience.map((e, i) => (
              <div className={open === i ? 'acc on' : 'acc'} data-reveal key={e.org}>
                <button className="acc-head" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="acc-role">{e.role}</span>
                  <span className="acc-org">{e.org}</span>
                  <span className="acc-when">{e.when}</span>
                  <span className="acc-plus" aria-hidden="true" />
                </button>
                <div className="acc-body"><div>
                  <div className="acc-where">{e.where}</div>
                  <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div></div>
              </div>
            ))}
          </div>
          <div className="beyond">
            {beyond.map((b, i) => (
              <div className="beyond-card" data-reveal style={{ transitionDelay: `${i * 0.08}s` }} key={b.title}>
                <span>{b.when}</span><h4>{b.title}</h4><p>{b.org}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact wrap">
          <div data-reveal>
            <div className="eyebrow">Contact</div>
            <h2>Let’s build something.</h2>
            <p>Open to May 2027 full-time roles in software, data, AI, and product. NYC first, open to relocating.</p>
            <div className="contact-links">
              <a className="button primary" href="mailto:shethdhruhi05@gmail.com">shethdhruhi05@gmail.com</a>
              <a className="button ghost" href="https://www.linkedin.com/in/dhruhisheth" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a className="button ghost" href="https://github.com/dhruhisheth" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap"><span>Dhruhi Sheth · 2027</span><span>San Jose, CA</span></footer>
    </div>
  );
}

export default App;
