import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FindMyFit.AI",
    description: "A multimodal, voice-activated AI stylist that analyzes outfit images and provides conversational feedback using Whisper v3 and LLaMA-4.",
    image: "/projects/project1.png",
    tags: ["Python", "GROQ", "Gradio", "Whisper", "LLaMA-4"],
    demoUrl: "https://find-my-fit-ai.onrender.com",
    githubUrl: "https://github.com/dhruhisheth/find-my-fit-ai",
  },
  {
    id: 2,
    title: "LangGraph AI Agent",
    description: "An interactive AI-powered fashion stylist built with LangGraph, Groq/OpenAI models, and Tavily web search. Features a FastAPI backend and Streamlit UI for smart, trend-aware outfit suggestions.",
    image: "/projects/project2.png",
    tags: ["LangGraph", "FastAPI", "Streamlit", "Groq", "OpenAI"],
    demoUrl: "#",
    githubUrl: "https://github.com/dhruhisheth/langgraph-ai-agent",
  },
  {
    id: 3,
    title: "Wheel Detector",
    description: "Real-time wheel detection using YOLOv8 with data splitting, training, and video inference pipeline. Built with Python and Ultralytics for computer vision applications.",
    image: "/projects/project3.png",
    tags: ["YOLOv8", "Python", "Ultralytics", "Computer Vision"],
    demoUrl: "#",
    githubUrl: "https://github.com/dhruhisheth/wheel-detector",
  },
  {
    id: 4,
    title: "Physical Therapy Activity Classification",
    description: "A complete end-to-end machine learning pipeline for classifying physical therapy exercises using time-series sensor data with signal filtering, feature extraction, and model evaluation.",
    image: "/projects/project4.png",
    tags: ["Machine Learning", "Time Series", "Signal Processing", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/dhruhisheth/physical-therapy-activity-classification",
  },
  {
    id: 5,
    title: "Movie Reviews Sentiment Analysis",
    description: "Lexicon-based sentiment analysis of movie reviews using NLTK, with visualization and heuristic-based classification for natural language processing.",
    image: "/projects/project5.png",
    tags: ["NLTK", "Sentiment Analysis", "NLP", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/dhruhisheth/movie-reviews-sentiment-analysis",
  },
  {
    id: 6,
    title: "Faculty Office Hours Manager",
    description: "A user-friendly JavaFX desktop application designed to help faculty efficiently schedule and manage office hours using SQLite database with MVC architecture.",
    image: "/projects/project6.png",
    tags: ["JavaFX", "SQLite", "MVC", "Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/dhruhisheth/faculty-s-office-hours-manager",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center pop-heading group hover:scale-105">
          FEATURED <span className="text-primary"> PROJECTS </span>
        </h2>
        <p className="text-center text-muted-foreground mb-10 text-lg font-medium">
          Here are some projects highlighting my skills in AI/ML, full-stack development, and software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex-1" />
                <div className="flex flex-row gap-4 items-center mt-2 pt-2">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium relative transition-all duration-300 group/link"
                      title="Live Demo"
                    >
                      <span className="inline-block group-hover/link:scale-105 group-hover/link:text-pink-500 transition-transform duration-300">Live Demo</span>
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover/link:w-full"></span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium relative transition-all duration-300 group/link"
                    title="Source Code"
                  >
                    <span className="inline-block group-hover/link:scale-105 group-hover/link:text-pink-500 transition-transform duration-300">Source Code</span>
                    <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-pink-300 transition-all duration-300 group-hover/link:w-full"></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/dhruhisheth"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
