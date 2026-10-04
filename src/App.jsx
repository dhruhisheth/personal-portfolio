import { useEffect, useRef, useState } from 'react';

// Kept in sync with the résumés: same titles, dates, and numbers.
const roles = ['data pipelines', 'AI products', 'reliable software', 'things people use'];

const stats = [
  { value: 5, suffix: '+', label: 'businesses using my inventory system' },
  { value: 12000, suffix: '+', label: 'banks integrated' },
  { value: 25000, suffix: '', label: 'reviews in published research' },
  { value: 50, suffix: '+', label: 'students mentored' }
];

const veraTabs = [
  { id: 'ask', label: 'Ask', title: 'Semantic search', blurb: 'Shoppers describe what they want. VERA parses intent and ranks the catalog.' },
  { id: 'show', label: 'Show', title: 'Visual search', blurb: 'Upload a photo. CLIP embeddings find the closest matches in a vector index.' },
  { id: 'style', label: 'Style', title: 'Outfit generation', blurb: 'LLM reasoning plus recommendation logic builds complete looks from one item.' },
  { id: 'insights', label: 'Insights', title: 'Brand analytics', blurb: 'Brands see what customers search for and which products they engage with.' }
];

const GH = 'https://github.com/dhruhisheth/';

// Every public project on GitHub (private and in-progress hackathon repos excluded).
const featured = [
  {
    tag: 'Product · 5+ businesses',
    title: 'Inventory Management System',
    line: 'A stock register for small businesses: inward/outward entries, low-stock alerts, team roles, and a real Excel file they own.',
    tech: ['FastAPI', 'React', 'Redis', 'Excel'],
    live: 'https://inventory.dhruvishahitech.com'
  },
  {
    tag: 'Research · IEEE ETECOM 2026',
    title: 'Linguistic Heuristics in Sentiment Analysis',
    line: 'First-author paper with Prof. Maryam Khazaei: 72.40% → 73.72% accuracy on 25,000 IMDb reviews.',
    tech: ['Python', 'NLTK', 'Statistics'],
    repo: GH + 'movie-reviews-sentiment-analysis'
  }
];

const projects = [
  { cat: 'Full-stack', title: 'AMC Tracker', line: 'Replaces an Excel workbook for HVAC maintenance contracts with dashboards, alerts, and multi-user access.', tech: ['TypeScript', 'Next.js'], repo: GH + 'amc-software', live: 'https://amc-software-omega.vercel.app' },
  { cat: 'Hackathon', title: 'RightsLine', line: 'Voice-first know-your-rights assistant in 12 languages. LexHack 2026.', tech: ['TypeScript', 'Voice AI'], repo: GH + 'rightsline' },
  { cat: 'Hackathon', title: 'Rewind', line: 'An undo button for crypto payments with trust-sized rewind windows. 3rd-Web-Hack 2026.', tech: ['Solidity', 'JavaScript'], repo: GH + 'rewind' },
  { cat: 'AI / ML', title: 'Amazon Review Insights', line: 'Feature-level sentiment and clustering over Amazon reviews to guide product roadmaps. Break Through Tech AI Studio.', tech: ['Python', 'NLP', 'Clustering'], repo: GH + 'amazon-sentiment-dashboard' },
  { cat: 'AI / ML', title: 'LangGraph Stylist Agent', line: 'Prompt-to-outfit agent with web search: +25% relevance, +30% engagement.', tech: ['LangGraph', 'FastAPI', 'Streamlit'], repo: GH + 'langgraph-ai-agent', live: 'https://langgraph-ai-agent-1.onrender.com' },
  { cat: 'AI / ML', title: 'Find My Fit AI', line: 'Voice-activated multimodal stylist that analyzes outfits and talks back.', tech: ['Whisper', 'LLaMA', 'ElevenLabs'], repo: GH + 'find-my-fit-ai', live: 'https://find-my-fit-ai.onrender.com' },
  { cat: 'AI / ML', title: 'NYC Airbnb Price Prediction', line: 'Predicts listing prices from property, host, and booking features.', tech: ['Python', 'scikit-learn'], repo: GH + 'nyc-airbnb-price-prediction' },
  { cat: 'AI / ML', title: 'Physical Therapy Activity Classification', line: 'Time-series sensor pipeline with filtering, feature extraction, and LOSO validation.', tech: ['Python', 'Signal processing'], repo: GH + 'physical-therapy-activity-classification' },
  { cat: 'AI / ML', title: 'Wheel Detector', line: 'Real-time wheel detection with a YOLOv8 training and video inference pipeline.', tech: ['YOLOv8', 'Python'], repo: GH + 'wheel-detector' },
  { cat: 'Backend', title: 'MealMate', line: 'Microservices REST API over 10K+ recipes at 99.9% uptime.', tech: ['Spring Boot', 'MongoDB', 'AWS'], repo: GH + 'meal-mate' },
  { cat: 'Backend', title: 'Job Listing API', line: 'Spring Boot API for creating, searching, and filtering job listings.', tech: ['Spring Boot', 'MongoDB'], repo: GH + 'job-listing' },
  { cat: 'Full-stack', title: 'SkillSwap Campus', line: 'Team web app where students trade skills instead of money. CS 157A.', tech: ['Java'], repo: GH + 'CS157A-S1-S2-team-16' },
  { cat: 'Full-stack', title: 'Faculty Office Hours Manager', line: 'JavaFX desktop app for scheduling office hours, built with MVC and SQLite.', tech: ['Java', 'JavaFX', 'SQLite'], repo: GH + 'faculty-s-office-hours-manager' },
  { cat: 'Full-stack', title: 'Shrimp Wizard', line: 'Team-built Python game for CS 122.', tech: ['Python'], repo: GH + 'Shrimp-Wizard' }
];

const projectCats = ['All', 'AI / ML', 'Full-stack', 'Backend', 'Hackathon'];

const experience = [
  {
    role: 'Product & Outreach Associate',
    org: 'Girls Girls Club',
    social: { instagram: 'https://www.instagram.com/girlsgirlsclubnyc/', website: 'https://girlsgirlsclub.co' },
    when: 'Aug 2026 — Present',
    where: 'New York, NY · Remote',
    points: [
      'Support development of the club’s iOS app (SwiftUI, Firebase) for a NYC women’s lifestyle brand: memberships and event RSVPs',
      'Lead outreach to members, partners, and brands; the app’s initial launch increased event and member engagement by 15%',
      'Design branded campaign assets in Canva with a consistent brand identity'
    ]
  },
  {
    role: 'Data Engineering Intern',
    org: 'RAAPID Inc.',
    social: { linkedin: 'https://www.linkedin.com/company/raapid/' },
    when: 'May 2026 — Jul 2026',
    where: 'Louisville, KY · Remote',
    points: [
      'Medallion Architecture pipeline on Microsoft Fabric / OneLake: 5 hospital document types, zero data loss',
      'MD5 deduplication, 50MB / 20-file batching, and JSON manifests for idempotent, auditable runs',
      '7 Python utility modules run by 4 notebooks, with 3x retry uploads and a dead-letter system'
    ]
  },
  {
    role: 'AI Intern',
    org: 'Lucrisma Inc.',
    social: { linkedin: 'https://www.linkedin.com/company/lucrisma/' },
    when: 'May 2025 — Jul 2025',
    where: 'Sugar Land, TX · Remote',
    points: [
      'AI financial assistant (LangGraph, FastAPI), reducing support requests by 30/week',
      'APIs aggregating 12,000+ banks and 300+ crypto wallets, saving $4,000 annually',
      '40% faster sync and 35% lower latency for 1,000+ users'
    ]
  },
  {
    role: 'Software Developer Intern',
    org: 'ContCentric IT Services',
    social: { linkedin: 'https://www.linkedin.com/company/contcentric-it-services-private-limited/' },
    when: 'May 2024 — Aug 2024',
    where: 'Delaware, DE',
    points: [
      'Annotated 8,000+ drone images and fine-tuned YOLOv8: 20% accuracy uplift',
      'Async Flask API automating geospatial PDF reports: 15% faster processing'
    ]
  }
];

const leadership = [
  {
    role: 'Peer Academic Success Coach',
    org: 'San José State University',
    social: { instagram: 'https://www.instagram.com/sjsu/', linkedin: 'https://www.linkedin.com/school/san-jose-state-university/' },
    when: 'Aug 2026 — Present',
    points: ['Coach students on coursework and study strategies', 'Lead workshops on time management and overcoming procrastination']
  },
  {
    role: 'Technical Developer',
    org: 'Girls Who Code, SJSU',
    social: { instagram: 'https://www.instagram.com/gwc_sjsu/', linkedin: 'https://www.linkedin.com/company/girls-who-code-sjsu/', website: 'https://girlswhocode-sjsu.github.io/' },
    when: 'Aug 2025 — May 2026',
    points: ['Ran technical workshops, including Intro to GitHub', 'Taught members to code and mentored their projects', 'Built and maintained the club website'],
    link: { href: GH + 'gwc-intro-to-github', label: 'Workshop repo' }
  },
  {
    role: 'Mentorship Director',
    org: 'Society of Women Engineers, SJSU',
    social: { instagram: 'https://www.instagram.com/swe.sjsu/', linkedin: 'https://www.linkedin.com/in/swe-at-sjsu/' },
    when: 'Aug 2024 — May 2026',
    points: ['Ran the mentorship program for 50+ students', 'Streamlined logistics and content, boosting participation by 20%']
  },
  {
    role: 'Undergraduate Researcher',
    org: 'SJSU · with Prof. Maryam Khazaei',
    when: 'Aug 2024 — May 2025',
    points: ['First-author paper accepted at IEEE ETECOM 2026', 'Four rule-based sentiment classifiers on 25,000 IMDb reviews: 72.40% → 73.72% accuracy (p < 0.001)'],
    link: { href: GH + 'movie-reviews-sentiment-analysis', label: 'Code' }
  }
];

const education = {
  school: 'San José State University',
  degree: 'B.S. Computer Science · GPA 3.78',
  when: 'Expected May 2027',
  honors: 'President’s Scholar · A.S. Advocacy Award',
  courses: ['Machine Learning', 'Artificial Intelligence', 'Big Data', 'Cybersecurity', 'Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems'],
  certs: ['Break Through Tech AI Studio (1-year program)', 'Machine Learning Foundations · Cornell', 'AWS Fundamentals · Coursera']
};

const skills = ['Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Spring Boot', 'SQL', 'Microsoft Fabric', 'AWS', 'Docker', 'Redis', 'MongoDB', 'LangGraph', 'TensorFlow', 'Pandas', 'Figma'];

const sections = ['vera', 'work', 'internships', 'leadership', 'contact'];
const sectionLabel = { vera: 'VERA', work: 'Work', internships: 'Internships', leadership: 'Leadership', contact: 'Contact' };

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


/* ---------- socials, projects, experience ---------- */

const icons = {
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z" />,
  instagram: <path d="M12 2.2c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85C2.42 3.92 3.94 2.37 7.15 2.22 8.42 2.21 8.8 2.2 12 2.2Zm0 4.86a4.94 4.94 0 1 0 0 9.88 4.94 4.94 0 0 0 0-9.88Zm0 8.15a3.21 3.21 0 1 1 0-6.42 3.21 3.21 0 0 1 0 6.42Zm5.14-9.5a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3Z" />,
  website: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.6 15.6 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14a7.9 7.9 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4H4.26Zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.99 7.99 0 0 1 5.07 16Zm2.95-8H5.07a7.99 7.99 0 0 1 4.33-3.56A15.6 15.6 0 0 0 8.02 8ZM12 19.96A14.1 14.1 0 0 1 10.09 16h3.82A14.1 14.1 0 0 1 12 19.96ZM14.34 14H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.5 16.5 0 0 0 0-4h3.38a7.9 7.9 0 0 1 0 4h-3.38Z" />
};
const socialName = { linkedin: 'LinkedIn', instagram: 'Instagram', website: 'Website' };

function Socials({ social, org, dark }) {
  if (!social) return null;
  return (
    <div className={dark ? 'socials dark' : 'socials'}>
      {Object.entries(social).map(([k, href]) => (
        <a key={k} href={href} target="_blank" rel="noreferrer" aria-label={`${org} on ${socialName[k]}`} title={`${org} · ${socialName[k]}`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">{icons[k]}</svg><span>{socialName[k]}</span>
        </a>
      ))}
    </div>
  );
}

function LinkButtons({ repo, live }) {
  return (
    <div className="link-buttons">
      {live && <a className="lb live" href={live} target="_blank" rel="noreferrer">Live ↗</a>}
      {repo && <a className="lb" href={repo} target="_blank" rel="noreferrer">Code ↗</a>}
      {!repo && !live && <span className="lb muted">Private</span>}
    </div>
  );
}

function Projects() {
  const [cat, setCat] = useState('All');
  const shown = projects.filter((p) => cat === 'All' || p.cat === cat);
  return (
    <section id="work" className="wrap block">
      <div className="head" data-reveal><div className="eyebrow">Selected work</div><h2>Built end to end.</h2></div>
      <div className="featured-row">
        {featured.map((p, i) => (
          <article className="card feature" data-reveal style={{ transitionDelay: `${i * 0.08}s` }} key={p.title}>
            <div className="card-tag">{p.tag}</div>
            <h3>{p.title}</h3>
            <p>{p.line}</p>
            <div className="card-foot">
              <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
              <LinkButtons repo={p.repo} live={p.live} />
            </div>
          </article>
        ))}
      </div>
      <div className="filter-row" data-reveal>
        <span className="filter-label">All projects · {projects.length}</span>
        <div className="filters" role="tablist">
          {projectCats.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'filter on' : 'filter'} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
      </div>
      <div className="mini-grid" key={cat}>
        {shown.map((p, i) => (
          <article className="mini" style={{ animationDelay: `${i * 0.04}s` }} key={p.title}>
            <div className="mini-top"><span className="mini-cat">{p.cat}</span><LinkButtons repo={p.repo} live={p.live} /></div>
            <h4>{p.title}</h4>
            <p>{p.line}</p>
            <div className="chips">{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Internships() {
  const [i, setI] = useState(0);
  const e = experience[i];
  return (
    <section id="internships" className="wrap block">
      <div className="head" data-reveal><div className="eyebrow">Internships</div><h2>Where I’ve interned.</h2></div>
      <div className="xp" data-reveal>
        <div className="xp-list" role="tablist">
          {experience.map((x, n) => (
            <button key={x.org} role="tab" aria-selected={i === n} className={i === n ? 'xp-tab on' : 'xp-tab'} onClick={() => setI(n)}>
              <span className="xp-org">{x.org}</span>
              <span className="xp-when">{x.when}</span>
            </button>
          ))}
        </div>
        <div className="xp-panel" key={i}>
          <div className="xp-meta"><span>{e.when}</span><span>{e.where}</span></div>
          <h3>{e.role}</h3>
          <div className="xp-company">{e.org}</div>
          <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <Socials social={e.social} org={e.org} />
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="leadership">
      <div className="wrap">
        <div className="head light" data-reveal><div className="eyebrow gold">Leadership & research</div><h2>Beyond the internships.</h2></div>
        <div className="lead-grid">
          {leadership.map((l, n) => (
            <article className="lead-card" data-reveal style={{ transitionDelay: `${n * 0.08}s` }} key={l.role}>
              <span className="lead-when">{l.when}</span>
              <h3>{l.role}</h3>
              <div className="lead-org">{l.org}</div>
              <ul>{l.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <div className="lead-foot">
                <Socials social={l.social} org={l.org} dark />
                {l.link && <a className="lb dark" href={l.link.href} target="_blank" rel="noreferrer">{l.link.label} ↗</a>}
              </div>
            </article>
          ))}
        </div>
        <div className="edu" data-reveal>
          <div className="edu-main">
            <span className="lead-when">{education.when}</span>
            <h3>{education.school}</h3>
            <div className="lead-org">{education.degree}</div>
            <p>{education.honors}</p>
          </div>
          <div className="edu-side">
            <div className="edu-label">Coursework</div>
            <div className="chips dark">{education.courses.map((c) => <span key={c}>{c}</span>)}</div>
            <div className="edu-label">Certifications</div>
            <div className="chips dark">{education.certs.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
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

  return (
    <div className="site">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top">DS</a>
          <div className="nav-links">
            {sections.map((id) => <a key={id} href={`#${id}`} className={active === id ? 'on' : ''}>{sectionLabel[id]}</a>)}
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

        <Projects />

        <Internships />

        <Leadership />

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
