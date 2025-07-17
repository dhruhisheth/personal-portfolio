import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "Python", category: "languages", summary: "A versatile, high-level programming language popular for AI, data science, and web development." },
  { name: "Java", category: "languages", summary: "A robust, object-oriented language widely used for enterprise, Android, and backend systems." },
  { name: "JavaScript", category: "languages", summary: "The language of the web, enabling interactive and dynamic web applications." },
  { name: "C", category: "languages", summary: "A foundational systems programming language known for performance and low-level memory control." },
  { name: "SQL", category: "languages", summary: "A domain-specific language for managing and querying relational databases." },
  { name: "HTML5/CSS", category: "languages", summary: "Core technologies for structuring and styling web content." },

  { name: "ReactJS", category: "frameworks", summary: "A popular JavaScript library for building user interfaces, especially single-page applications." },
  { name: "NextJS", category: "frameworks", summary: "A React framework for server-side rendering, static site generation, and full-stack web apps." },
  { name: "Spring Boot", category: "frameworks", summary: "A Java-based framework for building stand-alone, production-grade Spring applications." },
  { name: "FastAPI", category: "frameworks", summary: "A modern, fast Python web framework for building APIs with automatic docs and type hints." },
  { name: "Tailwind CSS", category: "frameworks", summary: "A utility-first CSS framework for rapidly building custom user interfaces." },
  { name: "NodeJS", category: "frameworks", summary: "A JavaScript runtime for building scalable server-side and networking applications." },
  { name: "Bootstrap", category: "frameworks", summary: "A popular CSS framework for developing responsive and mobile-first websites." },

  { name: "Supabase", category: "databases", summary: "An open-source backend-as-a-service platform providing a Postgres database, authentication, and more." },
  { name: "MongoDB", category: "databases", summary: "A NoSQL document database for modern, scalable applications." },
  { name: "MySQL", category: "databases", summary: "A widely-used open-source relational database management system." },

  { name: "TensorFlow", category: "ML", summary: "An open-source platform for machine learning and deep learning developed by Google." },
  { name: "scikit-learn", category: "ML", summary: "A Python library for classical machine learning algorithms and data analysis." },
  { name: "Pandas", category: "ML", summary: "A Python library for data manipulation and analysis, especially tabular data." },
  { name: "spaCy", category: "ML", summary: "A Python library for advanced natural language processing (NLP)." },
  { name: "NLTK", category: "ML", summary: "A leading platform for building Python programs to work with human language data." },
  { name: "Keras", category: "ML", summary: "A high-level neural networks API, running on top of TensorFlow." },

  { name: "Git/GitHub", category: "tools", summary: "Version control system and platform for collaborative software development." },
  { name: "AWS (EC2, S3, Lambda)", category: "tools", summary: "Amazon Web Services cloud computing products for scalable infrastructure and serverless apps." },
  { name: "Docker", category: "tools", summary: "A platform for developing, shipping, and running applications in containers." },
  { name: "Figma", category: "tools", summary: "A collaborative interface design tool for UI/UX design and prototyping." },
  { name: "Postman", category: "tools", summary: "A collaboration platform for API development, testing, and monitoring." },
];

const categories = [
  { key: "all", label: "All" },
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Frameworks" },
  { key: "databases", label: "Databases" },
  { key: "ML", label: "ML" },
  { key: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30 group">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center transition-all duration-300 group-hover:welcome-glow pop-heading">
          MY <span className="text-primary"> SKILLS</span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg font-medium">
          A toolkit for building, innovating, and solving real-world problems.
        </p>

        <div className="flex flex-nowrap justify-center gap-2 mb-12 mt-6 flex-row items-center">
          {categories.map((cat, key) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={cn(
                  "px-4 py-2 rounded-full border transition-all duration-300 capitalize flex items-center justify-center text-sm font-semibold shadow-sm whitespace-nowrap",
                  isActive ? "bg-primary text-primary-foreground border-primary scale-105 shadow-md" : "bg-secondary/70 text-foreground border-border hover:bg-secondary"
                )}
                style={{ minWidth: 120 }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={`bg-card p-6 rounded-lg shadow-xs card-hover relative overflow-hidden transition-all duration-500 border border-transparent cursor-pointer ${
                hoveredSkill === skill.name 
                  ? 'border-pink-300 scale-105 shadow-lg' 
                  : 'border-transparent'
              }`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative z-10">
                <div className="text-left mb-2 flex items-center justify-between transition-all duration-300">
                  <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                    hoveredSkill === skill.name ? 'welcome-glow text-black' : ''
                  }`}>
                    {skill.name}
                  </h3>
                </div>
                <div
                  className={`transition-all duration-500 ease-out mt-3 text-left text-muted-foreground text-sm pointer-events-none transform origin-top overflow-hidden ${
                    hoveredSkill === skill.name 
                      ? 'opacity-100 translate-y-0 max-h-32' 
                      : 'opacity-0 translate-y-6 max-h-0'
                  }`}
                >
                  {skill.summary}
                </div>
              </div>
              {/* Subtle glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r from-pink-300/0 via-pink-300/5 to-pink-300/0 transition-opacity duration-500 rounded-lg ${
                hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .welcome-glow {
          text-shadow:
            0 0 8px #fbcfe8,
            0 0 16px #fbcfe8,
            0 0 2px #fbcfe8;
        }
        .pop-heading {
          animation: popIn 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          display: inline-block;
          transition: transform 0.2s;
        }
        .group:hover .pop-heading {
          transform: scale(1.08);
        }
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          80% {
            opacity: 1;
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};
