// Kept in sync with the résumés: same titles, dates, and numbers.
const experience = [
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
    copy: 'First-author paper accepted at IEEE ETECOM 2026: four rule-based sentiment classifiers on 25,000 IMDb reviews, raising accuracy from 72.40% to 73.72%.'
  }
];

const projects = [
  {
    kicker: 'In development · B2B AI',
    title: 'VERA',
    featured: true,
    copy: 'A B2B AI platform for fashion brands. VERA ingests a brand’s full product catalog and turns it into an intelligent discovery layer for the brand’s own storefront.',
    points: [
      'Conversational and visual search, so shoppers can describe or show what they want instead of guessing filters',
      'Outfit pairing and recommendations built from the brand’s own catalog',
      'Size and fit guidance to help shoppers choose with confidence',
      'Demand analytics over catalog and search data, showing brands what their customers are looking for'
    ],
    tech: 'Python · LLMs · Semantic search · Catalog ingestion'
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
    kicker: 'Research · IEEE ETECOM 2026',
    title: 'Linguistic Heuristics in Sentiment Analysis',
    copy: 'First-author paper (accepted) measuring how much each rule adds to an interpretable sentiment classifier: accuracy rose from 72.40% to 73.72% on 25,000 IMDb reviews (McNemar, p < 0.001).',
    tech: 'Python · NLTK · NumPy · Statistical testing'
  },
  {
    kicker: 'Backend engineering',
    title: 'MealMate',
    copy: 'A microservices REST API for recipe search and meal planning over 10K+ recipes, deployed with CI/CD at 99.9% uptime.',
    tech: 'Java · Spring Boot · MongoDB · AWS',
    href: 'https://github.com/dhruhisheth/meal-mate',
    cta: 'View source'
  },
  {
    kicker: 'AI agent',
    title: 'LangGraph Stylist Agent',
    copy: 'An AI agent that turns natural-language prompts into curated outfit recommendations, improving relevance by 25% and engagement by 30%.',
    tech: 'Python · FastAPI · LangGraph · Streamlit',
    href: 'https://github.com/dhruhisheth/langgraph-ai-agent',
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
          <h1>I build <em>data</em>, AI, and software that people rely on.</h1>
          <div className="hero-grid">
            <p className="lede">I’m Dhruhi Sheth — a computer science student and engineer working across data engineering, AI, software development, and product.</p>
            <div className="hero-side">
              <p>NYC is my first choice. I’m also open to relocating anywhere in the U.S.</p>
              <div className="hero-actions">
                <a className="button primary" href="#work">View selected work</a>
                <a className="button ghost" href="mailto:shethdhruhi05@gmail.com">Email me</a>
              </div>
            </div>
          </div>
          <div className="signal-row" aria-label="Career focus">
            <span>Software engineering</span><span>Data engineering & analytics</span><span>AI & machine learning</span><span>Product</span>
          </div>
        </section>

        <section className="statement-band">
          <p>Research accepted at <strong>IEEE ETECOM 2026</strong> · Currently building <strong>VERA</strong></p>
        </section>

        <section id="work" className="section-pad">
          <div className="section-head">
            <div><div className="eyebrow">01 · Selected work</div><h2>Built end to end.</h2></div>
            <p>Products, systems, and research across software engineering, data, and AI.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => {
              const Card = p.href ? 'a' : 'article';
              const linkProps = p.href ? { href: p.href, target: '_blank', rel: 'noreferrer' } : {};
              return (
                <Card className={'project-card' + (p.featured ? ' featured' : '')} key={p.title} {...linkProps}>
                  <div className="project-index">0{i + 1}</div>
                  <div className="project-kicker">{p.kicker}</div>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                  {p.points && <ul className="project-points">{p.points.map(x => <li key={x}>{x}</li>)}</ul>}
                  <div className="project-tech">{p.tech}</div>
                  {p.href && <span className="project-link">{p.cta} ↗</span>}
                </Card>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section-pad contrast">
          <div className="section-head light">
            <div><div className="eyebrow">02 · Experience</div><h2>From pipelines to product.</h2></div>
            <p>Hands-on work across data engineering, AI, software development, and product execution.</p>
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
              <h2>Strong foundations, real-world range.</h2>
            </div>
            <div className="about-copy">
              <p>I study Computer Science at San José State University and graduate in May 2027. My experience spans data engineering, AI, software development, and product work.</p>
              <p>I’m drawn to roles where engineering and analytics directly shape user experience and business decisions, whether that means building reliable data pipelines, shipping AI features, or scoping a product with its users.</p>
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
          <p>Open to May 2027 full-time opportunities in software engineering, data, AI, and product.</p>
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
