const experience = [
  {
    role: 'Co-founder · Product Manager & Frontend Developer',
    org: 'REFRM',
    when: 'May 2026 — Present',
    where: 'Remote / India',
    summary: 'Co-building VERA, an AI fashion-discovery product, while shipping client-facing product work from scope through frontend implementation.',
    details: ['Product scope & requirements', 'Frontend development', 'Fashion discovery & AI']
  },
  {
    role: 'Product & Outreach Associate',
    org: 'Girls Girls Club',
    when: 'Aug 2026 — Present',
    where: 'Unpaid internship',
    summary: 'Supporting app development with the founding team, coordinating partner and brand outreach, and keeping launch work organized.',
    details: ['Product execution', 'Partner outreach', 'Brand communication']
  },
  {
    role: 'Data Engineering Intern',
    org: 'RAAPID Inc.',
    when: 'May 2026 — Jul 2026',
    where: 'Remote',
    summary: 'Built a clinical ingestion workflow in Microsoft Fabric / OneLake with validation, deduplication, manifests, retry logic, and structured error handling.',
    details: ['Python', 'Microsoft Fabric', 'OneLake', 'Medallion Architecture']
  },
  {
    role: 'AI Intern',
    org: 'Lucrisma Inc.',
    when: 'May 2025 — Jul 2025',
    where: 'Remote',
    summary: 'Built an AI-powered financial assistant and API integrations for portfolio data using Python, FastAPI, LangGraph, and LangChain.',
    details: ['Python', 'FastAPI', 'LangGraph', 'REST APIs']
  },
  {
    role: 'Software Developer Intern',
    org: 'ContCentric IT Services',
    when: 'May 2024 — Aug 2024',
    where: 'Delaware, DE',
    summary: 'Worked on computer-vision data pipelines, YOLOv8 model improvement, and automated geospatial PDF reporting.',
    details: ['Python', 'YOLOv8', 'Flask', 'Computer Vision']
  }
];

const projects = [
  {
    kicker: 'Fashion tech · Current',
    title: 'VERA / REFRM',
    copy: 'An AI fashion-discovery platform designed to ingest brand catalogs and support conversational search, outfit pairing, and product discovery.',
    tech: 'Product strategy · AI · Semantic search · Frontend',
    href: 'https://github.com/dhruhisheth'
  },
  {
    kicker: 'Data product',
    title: 'Warehouse AI',
    copy: 'An AI-assisted inventory system with auditable changes, human review before commits, access controls, and version history.',
    tech: 'FastAPI · React · TypeScript · Redis',
    href: 'https://github.com/dhruhisheth'
  },
  {
    kicker: 'Fashion AI',
    title: 'LangGraph Fashion Stylist',
    copy: 'A fashion-focused AI agent that turns natural-language style prompts into curated outfit recommendations through an interactive interface.',
    tech: 'Python · FastAPI · LangGraph · Streamlit',
    href: 'https://github.com/dhruhisheth/langgraph-ai-agent'
  },
  {
    kicker: 'Backend engineering',
    title: 'MealMate',
    copy: 'A recipe search and meal-planning backend built around REST APIs, MongoDB aggregation, testing, and cloud deployment.',
    tech: 'Java · Spring Boot · MongoDB · AWS',
    href: 'https://github.com/dhruhisheth'
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
                <span className="project-link">Open project ↗</span>
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
                  <div className="chips">{item.details.map(x => <span key={x}>{x}</span>)}</div>
                </div>
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
