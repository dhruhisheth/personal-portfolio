// Kept in sync with the résumés: same titles, dates, and numbers.
const experience = [
  {
    role: 'Co-founder · Product Manager & Frontend Developer',
    org: 'REFRM',
    when: 'May 2026 — Present',
    where: 'Remote',
    summary: 'Co-building VERA, an AI fashion-discovery platform, while shipping client product work from scope through frontend.',
    highlights: [
      'Building VERA, which ingests a brand’s full catalog to power conversational search, outfit pairing, and size/fit guidance',
      'Owned Phase 1 scope for Bado, a 4-product cafe delivery platform: 189 features defined, 22 deferred to Phase 2 for a lean v1',
      'Drove an unserved-demand capture feature that logs out-of-zone orders into a locality dataset for franchise planning',
      'Ran the client mockup walkthrough and sign-off, then built the cross-platform customer frontend'
    ],
    details: ['Product scope', 'Frontend development', 'Fashion AI']
  },
  {
    role: 'Product & Outreach Associate',
    org: 'Girls Girls Club',
    when: 'Aug 2026 — Present',
    where: 'New York, NY · Remote · Unpaid internship',
    summary: 'Supporting app development with the founding team and leading member, partner, and brand outreach.',
    highlights: [
      'Support end-to-end development of the club’s app, turning community needs into launch features',
      'Lead outreach to members, partners, and brands, managing daily communication and follow-ups',
      'Design branded Canva marketing assets: social posts, event flyers, and promotional visuals'
    ],
    details: ['Product execution', 'Partner outreach', 'Canva']
  },
  {
    role: 'Data Engineering Intern',
    org: 'RAAPID Inc.',
    when: 'May 2026 — Jul 2026',
    where: 'Louisville, KY · Remote',
    summary: 'Built a clinical data-ingestion pipeline on Microsoft Fabric / OneLake using Medallion Architecture.',
    highlights: [
      'Ingested 5 hospital document types into a Bronze layer with zero data loss',
      'Engineered MD5 deduplication, size-based batching, and JSON manifests for idempotent, auditable daily runs',
      'Implemented fault-tolerant uploads (3x retry, size verification) and a dead-letter system for corrupted files'
    ],
    details: ['Python', 'Microsoft Fabric', 'OneLake', 'Medallion Architecture']
  },
  {
    role: 'AI Intern',
    org: 'Lucrisma Inc.',
    when: 'May 2025 — Jul 2025',
    where: 'Remote',
    summary: 'Built an AI-powered financial assistant and portfolio-data APIs.',
    highlights: [
      'Built an AI financial assistant (LangGraph, LangChain, FastAPI), reducing support requests by 30/week',
      'Designed REST APIs aggregating 12,000+ banks and 300+ crypto wallets, saving the company $4,000 annually',
      'Optimized API performance for 1,000+ users: 40% faster sync and 35% lower latency'
    ],
    details: ['Python', 'FastAPI', 'LangGraph', 'REST APIs']
  },
  {
    role: 'Software Developer Intern',
    org: 'ContCentric IT Services',
    when: 'May 2024 — Aug 2024',
    where: 'Delaware, DE',
    summary: 'Worked on computer-vision data pipelines and automated geospatial reporting.',
    highlights: [
      'Annotated 8,000+ drone images and fine-tuned YOLOv8, driving a ~20% uplift in hazard-detection accuracy',
      'Built an async Flask API automating geospatial PDF reports, reducing processing time by ~15%'
    ],
    details: ['Python', 'YOLOv8', 'Flask', 'Computer Vision']
  }
];

const leadership = [
  {
    role: 'Peer Academic Success Coach',
    org: 'San José State University',
    when: 'Aug 2026 — Present',
    copy: 'Coach students on coursework, study strategies, and academic skills to help them meet their academic goals.'
  },
  {
    role: 'Mentorship Director',
    org: 'Society of Women Engineers, SJSU',
    when: 'Aug 2025 — Present',
    copy: 'Run the mentorship program for 50+ students; streamlined logistics and content, boosting participation by 20%.'
  },
  {
    role: 'Undergraduate Researcher',
    org: 'SJSU College of Engineering',
    when: 'Aug 2024 — May 2025',
    copy: 'Built an NLP pipeline classifying 25,000 IMDB reviews at 72% accuracy, benchmarked against ML baselines and BERT.'
  }
];

const projects = [
  {
    kicker: 'Fashion tech · Current',
    title: 'VERA / REFRM',
    copy: 'An AI fashion-discovery platform that ingests brand catalogs to power conversational search, outfit pairing, and size/fit guidance.',
    tech: 'Product strategy · AI · Semantic search · Frontend',
    href: 'https://github.com/dhruhisheth/refrm-landing',
    cta: 'View landing page code'
  },
  {
    kicker: 'Data product',
    title: 'Warehouse AI',
    copy: 'An AI-assisted inventory system with an auditable lock → mutate → audit → backup → upload pipeline, preview-before-commit imports, and version history.',
    tech: 'FastAPI · React · TypeScript · Redis',
    href: 'https://warehouse-ai.vercel.app',
    cta: 'Open live site'
  },
  {
    kicker: 'Fashion AI',
    title: 'LangGraph Fashion Stylist',
    copy: 'An AI stylist that turns natural-language prompts into curated outfits, improving stylistic relevance by 25% and engagement by 30%.',
    tech: 'Python · FastAPI · LangGraph · Streamlit',
    href: 'https://github.com/dhruhisheth/langgraph-ai-agent',
    cta: 'View source'
  },
  {
    kicker: 'Backend engineering',
    title: 'MealMate',
    copy: 'A microservices REST API for recipe search and meal planning over 10K+ recipes, deployed with CI/CD at 99.9% uptime.',
    tech: 'Java · Spring Boot · MongoDB · AWS',
    href: 'https://github.com/dhruhisheth/meal-mate',
    cta: 'View source'
  }
];

const skills = [
  ['Languages', 'Python · Java · C/C++ · SQL · JavaScript / TypeScript'],
  ['Data & AI', 'Pandas · NumPy · scikit-learn · TensorFlow · LangGraph · LangChain · YOLOv8'],
  ['Backend & Web', 'FastAPI · Flask · Spring Boot · React · Next.js · REST APIs'],
  ['Cloud & Data Systems', 'Microsoft Fabric · OneLake · AWS · Docker · Redis · MySQL · MongoDB'],
  ['Product & Analytics', 'Figma · Jira · Confluence · Excel · Tableau · Power BI · A/B testing']
];

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top">DS</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a className="nav-cta" href="/Dhruhi_Sheth_Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="eyebrow">SJSU Computer Science · May 2027</div>
          <h1>I build where <em>fashion</em>, data, and product meet.</h1>
          <div className="hero-grid">
            <p className="lede">I’m Dhruhi Sheth — a computer science student, product builder, and engineer interested in technology that shapes how people discover, shop, decide, and interact.</p>
            <div className="hero-side">
              <p>NYC is my first choice. I’m also open to relocating anywhere in the U.S.</p>
              <div className="hero-actions">
                <a className="button primary" href="#work">View selected work</a>
                <a className="button ghost" href="mailto:shethdhruhi05@gmail.com">Email me</a>
              </div>
            </div>
          </div>
          <div className="signal-row" aria-label="Career focus">
            <span>Fashion & beauty tech</span><span>Data & analytics</span><span>Software engineering</span><span>Product</span>
          </div>
        </section>

        <section className="statement-band">
          <p>Currently co-building <strong>VERA at REFRM</strong>, an AI fashion-discovery product.</p>
        </section>

        <section id="work" className="section-pad">
          <div className="section-head">
            <div><div className="eyebrow">01 · Selected work</div><h2>Technical depth, consumer instinct.</h2></div>
            <p>Projects chosen to show the overlap between engineering, data, AI, and consumer product thinking.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <a className="project-card" href={p.href} target="_blank" rel="noreferrer" key={p.title}>
                <div className="project-index">0{i + 1}</div>
                <div className="project-kicker">{p.kicker}</div>
                <h3>{p.title}</h3>
                <p>{p.copy}</p>
                <div className="project-tech">{p.tech}</div>
                <span className="project-link">{p.cta} ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="experience" className="section-pad contrast">
          <div className="section-head light">
            <div><div className="eyebrow">02 · Experience</div><h2>From pipelines to product.</h2></div>
            <p>Hands-on work across data engineering, AI, software, product execution, and fashion-tech.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role + item.org}>
                <div className="time-meta"><span>{item.when}</span><span>{item.where}</span></div>
                <div className="time-body">
                  <h3>{item.role}</h3>
                  <div className="org">{item.org}</div>
                  <p>{item.summary}</p>
                  <ul className="highlights">{item.highlights.map(x => <li key={x}>{x}</li>)}</ul>
                  <div className="chips">{item.details.map(x => <span key={x}>{x}</span>)}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="section-head light leadership-head">
            <div><div className="eyebrow">Leadership & research</div><h3>Beyond the job title.</h3></div>
          </div>
          <div className="leadership-grid">
            {leadership.map((item) => (
              <article className="leadership-card" key={item.role}>
                <span>{item.when}</span>
                <h4>{item.role}</h4>
                <div className="org">{item.org}</div>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="about-grid">
            <div>
              <div className="eyebrow">03 · About</div>
              <h2>A technical foundation with a consumer lens.</h2>
            </div>
            <div className="about-copy">
              <p>I study Computer Science at San José State University and graduate in May 2027. My experience spans data engineering, AI, software development, and product work.</p>
              <p>I’m especially drawn to fashion, beauty, luxury, retail, and e-commerce technology — roles where engineering and analytics directly shape customer experience and business decisions.</p>
              <div className="education-card">
                <span>San José State University</span>
                <strong>B.S. Computer Science · GPA 3.78</strong>
                <small>Expected May 2027 · President’s Scholar</small>
              </div>
            </div>
          </div>

          <div className="skills-grid">
            {skills.map(([name, items]) => <div className="skill-row" key={name}><span>{name}</span><p>{items}</p></div>)}
          </div>
        </section>

        <section className="contact section-pad">
          <div className="eyebrow">04 · Contact</div>
          <h2>Let’s build something people actually want to use.</h2>
          <p>Open to May 2027 full-time opportunities across fashion-tech, data, analytics, software engineering, and product.</p>
          <div className="contact-links">
            <a href="mailto:shethdhruhi05@gmail.com">shethdhruhi05@gmail.com</a>
            <a href="https://www.linkedin.com/in/dhruhisheth" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/dhruhisheth" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>

      <footer><span>Dhruhi Sheth · 2027</span><span>San Jose, CA · Open to relocation</span></footer>
    </div>
  );
}

export default App;
