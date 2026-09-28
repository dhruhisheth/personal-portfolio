// All portfolio copy lives here, so updating the site after a resume change
// means editing this one file.

export const profile = {
  name: "Dhruhi Sheth",
  fullName: "Dhruhi Dharmesh Sheth",
  headline: "I build data pipelines, AI agents, and the full-stack products around them.",
  intro:
    "Computer Science student at San José State, graduating May 2027. This summer I built a clinical data-ingestion pipeline on Microsoft Fabric at RAAPID. Before that I shipped an AI financial assistant at Lucrisma and trained a hazard-detection model on drone imagery at ContCentric.",
  status: "Open to 2027 new-grad roles in software, data, and AI engineering",
  location: "San Jose, CA",
  email: "shethdhruhi05@gmail.com",
  phone: "+1 (408) 819-8122",
  phoneHref: "tel:+14088198122",
  github: "https://github.com/dhruhisheth",
  linkedin: "https://www.linkedin.com/in/dhruhisheth/",
  resume: "/Dhruhi_Sheth_Resume.pdf",
  photo: "/profile.jpg",
};

export const roles = ["data pipelines", "AI agents", "full-stack apps", "ML models"];

export const stats = [
  { value: 3, decimals: 0, label: "engineering internships" },
  { value: 3.78, decimals: 2, label: "GPA · President's Scholar" },
  { value: 12000, decimals: 0, suffix: "+", label: "banks integrated at Lucrisma" },
];

export const experience = [
  {
    role: "Product & Outreach Associate",
    org: "Girls Girls Club",
    location: "",
    date: "Aug 2026 – Present",
    bullets: [
      "Support end-to-end development of the club's app with the founding team, turning community needs into features and tracking deliverables toward launch",
      "Lead outreach to members, partners, and brands, managing daily communication and follow-ups to keep collaborations on schedule",
      "Design branded marketing assets in Canva with a consistent visual identity",
    ],
    tags: ["Product", "Outreach", "Canva"],
  },
  {
    role: "Data Engineering Intern",
    org: "RAAPID Inc.",
    location: "Louisville, KY · Remote",
    date: "May 2026 – Jul 2026",
    bullets: [
      "Built a Medallion Architecture ingestion pipeline in Microsoft Fabric and OneLake, landing 5 categories of hospital PDFs into a Bronze layer with zero data loss",
      "Wrote a modular Python pipeline (7 utility modules, orchestrated by 4 notebooks) with MD5-based deduplication, batching, and JSON manifests for idempotent, auditable daily runs",
      "Made uploads fault-tolerant with 3× retry, post-upload size verification, and a dead-letter system that isolates corrupted files into structured logs",
    ],
    tags: ["Python", "Microsoft Fabric", "OneLake", "Medallion Architecture"],
  },
  {
    role: "AI Intern",
    org: "Lucrisma Inc.",
    location: "Remote",
    date: "May 2025 – Jul 2025",
    bullets: [
      "Engineered an end-to-end AI financial assistant with LangGraph, LangChain, and FastAPI that answers natural-language questions, cutting support requests by 30 per week",
      "Designed and deployed REST APIs aggregating data from 12,000+ banks and 300+ crypto wallets into one portfolio view, saving $4,000 a year in third-party services",
      "Optimized API performance for 1,000+ users, improving sync speed by 40% and reducing latency by 35%",
    ],
    tags: ["LangGraph", "LangChain", "FastAPI", "REST"],
  },
  {
    role: "Software Developer Intern",
    org: "ContCentric IT Services",
    location: "Delaware, DE",
    date: "May 2024 – Aug 2024",
    bullets: [
      "Built a data annotation pipeline for 8,000+ drone images using LabelImg and Python scripts",
      "Fine-tuned a YOLOv8 object detection model with data augmentation, lifting hazard detection accuracy by ~20%",
      "Developed an asynchronous Flask API with Google Maps geocoding and WeasyPrint to automate geospatial PDF reports, cutting processing time by ~15%",
    ],
    tags: ["YOLOv8", "Python", "Flask", "Computer Vision"],
  },
];

export const leadership = [
  {
    role: "Mentorship Director",
    org: "Society of Women Engineers, SJSU",
    date: "Aug 2025 – Present",
    detail:
      "Run SWE's mentorship program for 50+ students, managing mentee meetings and events; streamlined logistics and content, boosting participation by 20%.",
  },
  {
    role: "Technical Workshop Leader",
    org: "Girls Who Code, SJSU",
    date: "Aug 2025 – Present",
    detail:
      "Lead weekly coding workshops in Python, JavaScript, and web fundamentals for 30+ students; 85% completed their first project.",
  },
  {
    role: "Undergraduate Researcher",
    org: "SJSU College of Engineering",
    date: "Aug 2024 – May 2025",
    detail:
      "Built an NLP pipeline that classifies 25,000 IMDB reviews with 72% accuracy using heuristics, benchmarked against ML models and BERT.",
  },
  {
    role: "AI Fellow",
    org: "Break Through Tech",
    date: "May 2024 – Present",
    detail:
      "Selected from 3,000+ applicants; completed machine learning coursework with Cornell faculty.",
  },
  {
    role: "Peer Health Educator",
    org: "SJSU Student Wellness Center",
    date: "Aug 2025 – Present",
    detail:
      "Deliver 15+ health-education programs reaching 500+ students; used attendance data to lift turnout by 25%.",
  },
];

export const publication = {
  title: "Predicting stock market using machine learning: best and accurate way to know future stock prices",
  authors: "Sheth, D., & Shah, M.",
  venue: "International Journal of System Assurance Engineering and Management (Springer)",
  year: "2023",
  href: "https://doi.org/10.1007/s13198-022-01811-1",
};

export const featuredProjects = [
  {
    title: "Warehouse AI",
    cover: ["with redis.lock(\"inventory\"):", "    wb = r2.download(\"stock.xlsx\")", "    apply(edit); audit.log(edit)", "    backup(wb); r2.upload(wb)  # ✓ committed"],
    blurb:
      "An AI-assisted inventory system that keeps Excel as the source of truth while making every edit safe and auditable.",
    bullets: [
      "Lock → download → mutate → audit → backup → upload pipeline keeps data consistent across concurrent writes",
      "bcrypt auth with httpOnly sessions, preview-before-commit imports, and full version history",
    ],
    tags: ["FastAPI", "React", "TypeScript", "Redis", "Cloudflare R2"],
    demo: "https://warehouse-ai.vercel.app",
    source: "https://github.com/dhruhisheth/warehouse-ai",
  },
  {
    title: "LangGraph AI Agent",
    cover: ["graph = StateGraph(StylistState)", "graph.add_node(\"search\", tavily)", "graph.add_node(\"style\", llm)", "agent.invoke(\"outfit for a rainy gala\")"],
    blurb:
      "A trend-aware AI fashion stylist built as a LangGraph agent with web search.",
    bullets: [
      "FastAPI backend with LangChain LLMs and Tavily search, improving stylistic relevance by 25%",
      "Streamlit UI with real-time interaction and custom prompts, raising engagement by 30%",
    ],
    tags: ["LangGraph", "FastAPI", "Streamlit", "Groq"],
    demo: "https://langgraph-ai-agent-1.onrender.com",
    source: "https://github.com/dhruhisheth/langgraph-ai-agent",
  },
  {
    title: "MealMate",
    cover: ["GET /api/recipes?diet=vegan", "@GetMapping(\"/recipes\")", "mongo.aggregate(pipeline)", "200 OK · 10,000+ recipes · 99.9% up"],
    blurb:
      "A microservices REST API for recipe search, dietary filters, and meal planning.",
    bullets: [
      "Processes 10K+ recipes with MongoDB Atlas search and aggregation pipelines",
      "Deployed on AWS Elastic Beanstalk with CI/CD at 99.9% uptime, tested with TDD and Postman",
    ],
    tags: ["Java", "Spring Boot", "MongoDB", "AWS"],
    demo: "http://mealmate-env.eba-bxefbmdv.us-east-1.elasticbeanstalk.com/swagger-ui/index.html",
    source: "https://github.com/dhruhisheth/meal-mate",
  },
  {
    title: "FindMyFit.AI",
    cover: ["audio = whisper.transcribe(mic)", "img = camera.capture()", "reply = llama4.chat(img, audio)", "speak(reply)  # \"Swap the shoes.\""],
    blurb:
      "A multimodal, voice-activated stylist that looks at an outfit photo and talks back.",
    bullets: [
      "Whisper v3 for speech, LLaMA-4 for image understanding and conversational feedback",
      "Served through Gradio on Groq for low-latency responses",
    ],
    tags: ["Python", "Whisper", "LLaMA-4", "Gradio"],
    demo: "https://find-my-fit-ai.onrender.com",
    source: "https://github.com/dhruhisheth/find-my-fit-ai",
  },
];

export const moreProjects = [
  {
    title: "NYC Airbnb Price Prediction",
    blurb: "End-to-end ML pipeline with ensemble models and hyperparameter tuning.",
    tags: ["scikit-learn", "Pandas"],
    source: "https://github.com/dhruhisheth/nyc-airbnb-price-prediction",
  },
  {
    title: "Physical Therapy Activity Classification",
    blurb: "Classifies exercises from time-series sensor data with signal filtering and feature extraction.",
    tags: ["Time series", "Signal processing"],
    source: "https://github.com/dhruhisheth/physical-therapy-activity-classification",
  },
  {
    title: "Wheel Detector",
    blurb: "Real-time wheel detection with a YOLOv8 training and video-inference pipeline.",
    tags: ["YOLOv8", "Ultralytics"],
    source: "https://github.com/dhruhisheth/wheel-detector",
  },
  {
    title: "Movie Review Sentiment Analysis",
    blurb: "Lexicon-based sentiment classification with NLTK and visualizations.",
    tags: ["NLTK", "NLP"],
    source: "https://github.com/dhruhisheth/movie-reviews-sentiment-analysis",
  },
  {
    title: "Faculty Office Hours Manager",
    blurb: "JavaFX desktop app for scheduling office hours, MVC over SQLite.",
    tags: ["JavaFX", "SQLite"],
    source: "https://github.com/dhruhisheth/faculty-s-office-hours-manager",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "Java", "C/C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"] },
  { group: "AI & ML", items: ["LangGraph", "LangChain", "TensorFlow", "Keras", "scikit-learn", "spaCy", "YOLOv8", "Pandas", "NumPy"] },
  { group: "Backend & Web", items: ["FastAPI", "Spring Boot", "Flask", "Node.js", "React", "Next.js", "Tailwind CSS", "GraphQL"] },
  { group: "Data & Cloud", items: ["Microsoft Fabric", "OneLake", "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Redis", "MySQL", "MongoDB", "Supabase"] },
  { group: "Practices & Tools", items: ["CI/CD", "Microservices", "Git", "Linux", "Jest", "Postman", "Figma"] },
];

export const education = {
  school: "San José State University",
  degree: "B.S. Computer Science",
  date: "Expected May 2027",
  gpa: "3.78",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management Systems",
    "Server-Side Programming",
    "Object-Oriented Paradigms",
    "Computer Organization & Architecture",
    "Advanced Python",
    "Discrete Mathematics",
  ],
};

export const honors = [
  { title: "President's Scholar", org: "SJSU · Spring 2024, Fall 2025", href: "/projects/Sheth,Dhruhi_President-College of Science.pdf" },
  { title: "A.S. Advocacy Award", org: "Associated Students, SJSU · 2024" },
  { title: "Machine Learning Foundations", org: "Cornell University · 2025", href: "/projects/MachineLearningCertificate.pdf" },
  { title: "AWS Fundamentals", org: "Coursera · 2025", href: "https://coursera.org/share/ebb92cad570d2bae96096e6382211032" },
  { title: "Exercising Leadership", org: "HarvardX · 2025", href: "https://courses.edx.org/certificates/75ea07334a5045ba88d6cbbeb572981e" },
];
