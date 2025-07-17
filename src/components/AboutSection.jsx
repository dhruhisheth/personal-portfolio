import { useState } from "react";
import { Briefcase, Users, BookOpen, Award } from "lucide-react";

const aboutData = {
  work: [
    {
      title: "Climbing Wall Attendant",
      organization: "Spartan Recreation and Aquatic Center, San Jose State University",
      location: "San Jose, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/San_Jose_State_University_seal.svg",
      summary: "Ensured climber safety and supported recreational activities at SJSU's climbing wall.",
      details: [
        "Ensure the safety of climbers at the SJSU Climbing Wall by monitoring activities and enforcing safety protocols",
        "Belay climbers, provide support and guidance to ensure a secure and enjoyable climbing experience",
        "Conduct belaying classes to educate students on proper techniques and safety measures",
        "Administer exams to certify students for the yellow tag, allowing them to belay others",
        "Participate in and help organize events, contributing to a vibrant and engaging campus recreation environment"
      ],
      date: "Aug 2024 – Present"
    },
    {
      title: "iSucceed Peer Mentor",
      organization: "San Jose State University",
      location: "San Jose, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/San_Jose_State_University_seal.svg",
      summary: "Mentored international students to help them acclimate to SJSU.",
      details: [
        "Provide mentorship and guidance to international students, helping them acclimate to life at SJSU and navigate academic and cultural challenges",
        "Assist students with understanding university resources, policies, and procedures",
        "Facilitate workshops and events to promote student engagement and community building among international students",
        "Offer support on academic, social, and personal matters, fostering a welcoming and inclusive environment"
      ],
      date: "Aug 2024 – May 2025"
    },
    {
      title: "Peer Health Educator",
      organization: "Student Wellness Center, San Jose State University",
      location: "San Jose, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/San_Jose_State_University_seal.svg",
      summary: "Promoted student wellness through education and outreach.",
      details: [
        "Design and deliver 15+ health‐education programs, including workshops, digital campaigns, and outreach on mental health and wellness, engaging 500+ students",
        "Utilize data analytics to refine session formats and scheduling, resulting in a 25% increase in attendance and a 30% improvement in satisfaction",
        "Manage Wellness Lounge operations, including Narcan distribution and massage chairs, ensuring 100% HIPAA compliance and supporting 150 students weekly"
      ],
      date: "Aug 2025 – Present"
    },
    {
      title: "Software Engineering Intern",
      organization: "Lucrisma Inc.",
      location: "Remote",
      logo: "https://media.licdn.com/dms/image/C560BAQFQw6QwQwQwQw/company-logo_200_200/0/1631360000000?e=2147483647&v=beta&t=logo",
      summary: "Developed an AI-powered financial assistant and optimized backend APIs.",
      details: [
        "Engineered an AI-powered financial assistant using LangGraph, LangChain, Python, and FastAPI, enabling users to ask natural language questions about accounts, loans, and alerts, reducing support requests by 30 per week",
        "Designed and deployed RESTful APIs to aggregate data from 12,000+ banks and 300+ crypto wallets into a unified dashboard, supporting full portfolio visibility, removing the need for third-party services, and saving the company $4,000 annually",
        "Optimized API performance to improve sync speed by 40% and reduce request latency by 35%, enhancing real-time responsiveness for 1,000+ users"
      ],
      date: "May 2025 – July 2025"
    },
    {
      title: "Software Engineer Intern",
      organization: "ContCentric IT Services Pvt Ltd",
      location: "Delaware, DE",
      logo: "https://contcentric.com/wp-content/uploads/2021/01/contcentric-logo.png",
      summary: "Worked on drone imagery pipelines and real-time hazard detection.",
      details: [
        "Led data collection and annotation pipeline for drone-captured imagery, labeling 8,000+ frames to enable supervised training for real-time environmental hazard detection",
        "Trained and fine-tuned a YOLOv8 object detection model to identify waste, waterlogging, and safety threats, achieving a 35% boost in detection accuracy and enabling scalable deployment",
        "Programmed a Flask-based API with automated geolocation tagging and Google Maps integration, reducing report generation time by 60% and cutting post-processing effort by 40%"
      ],
      date: "May 2024 – Aug 2024"
    }
  ],
  leadership: [
    {
      title: "Mentorship Chair",
      organization: "Society of Women Engineers, SJSU",
      location: "San Jose, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/San_Jose_State_University_seal.svg",
      summary: "Led mentorship initiatives to foster community and professional growth.",
      details: [
        "Facilitated SWE’s mentorship program for 50+ students by coordinating mentor-mentee pairings, managing check-ins and event logistics via Google Sheets and Canva, leading to a 90% satisfaction rate and a 40% increase in engagement through community events and tech-driven initiatives"
      ],
      date: "Aug 2024 – Present"
    },
    {
      title: "Fellow",
      organization: "Break Through Tech",
      location: "New York, NY",
      logo: "https://breakthroughtech.org/wp-content/uploads/2020/09/btt-logo.png",
      summary: "Participated in a selective, year-long AI program with industry mentorship.",
      details: [
        "Selected from 3000+ applicants for the Break Through Tech AI program",
        "Completed ML coursework with Cornell faculty and engaged in experiential learning"
      ],
      date: "May 2024 – Present"
    }
  ],
  research: [
    {
      title: "Undergraduate Researcher",
      organization: "SJSU College of Engineering",
      location: "San Jose, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/San_Jose_State_University_seal.svg",
      summary: "Researched NLP techniques for large-scale sentiment analysis.",
      details: [
        "Conducted an NLP research project to classify 25,000 IMDB movie reviews using a custom heuristic model with 72% accuracy, built a scalable Python pipeline for text preprocessing, and benchmarked results against machine learning models and BERT for potential publication"
      ],
      date: "Aug 2024 – May 2025"
    },
    {
      title: "Publication: Predicting stock market using machine learning",
      organization: "International Journal of System Assurance Engineering and Management",
      location: "Springer",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Springer_Science%2BBusiness_Media_logo.svg",
      summary: "Published research on stock market prediction using ML techniques.",
      details: [
        "Sheth, D., & Shah, M. (2023). Predicting stock market using machine learning: Best and accurate way to know future stock prices",
        "https://doi.org/10.1007/s13198-022-01811-1"
      ],
      date: "2023"
    }
  ],
  honors: [
    {
      title: "Exercising Leadership (HarvardX)",
      organization: "HarvardX",
      location: "Online",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Harvard_shield_wreath.svg",
      summary: "Completed Exercising Leadership certification from HarvardX",
      details: [],
      date: "Jun 2025",
      link: "https://courses.edx.org/certificates/75ea07334a5045ba88d6cbbeb572981e?_gl=1*1ctoi20*_ga*MTc4NjQ4ODYyNS4xNzAzNDk5OTA2*_ga_D3KS4KMDT0*MTcwMzQ5OTkwOS4xLjEuMTcwMzUwMDE1Ny42MC4wLjA."
    },
    {
      title: "Machine Learning Foundations e-Certificate",
      organization: "Cornell University",
      location: "Online",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Cornell_University_seal.svg",
      summary: "Completed ML Foundations e-Certificate, Break Through Tech",
      details: [],
      date: "May 2025"
    },
    {
      title: "AWS Fundamentals",
      organization: "Amazon Web Services",
      location: "Online",
      logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",
      summary: "Completed AWS Fundamentals certification",
      details: [],
      date: "Apr 2025",
      link: "https://coursera.org/share/ebb92cad570d2bae96096e6382211032"
    },
    {
      title: "President’s Scholar",
      organization: "San Jose State University",
      location: "San Jose, CA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/San_Jose_State_University_seal.svg",
      summary: "Recognized for academic excellence at SJSU",
      details: [],
      date: "May 2024",
      link: "/projects/Sheth,Dhruhi_President-College of Science.pdf"
    },
    {
      title: "A.S. Advocacy Award",
      organization: "Associated Students, SJSU",
      location: "San Jose, CA",
      logo: "https://www.sjsu.edu/associatedstudents/docs/AS%20Logo%20Blue%20Gold%20Transparent.png",
      summary: "Awarded for outstanding student advocacy",
      details: [],
      date: "Apr 2024"
    }
  ]
};

const aboutTabs = [
  { key: "work", label: "Work Experience", icon: Briefcase },
  { key: "leadership", label: "Leadership", icon: Users },
  { key: "research", label: "Research & Publications", icon: BookOpen },
  { key: "honors", label: "Honors & Certifications", icon: Award }
];

const fallbackLogo = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("work");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setHoveredIdx(null);
  };

  // Sort by most recent (descending)
  const sortedData = [...aboutData[activeTab]].sort((a, b) => {
    // Handle "Present" as the most recent
    if (a.date.includes('Present')) return -1;
    if (b.date.includes('Present')) return 1;
    
    // Extract year and month for comparison
    const getDateValue = (dateStr) => {
      const year = dateStr.match(/\d{4}/)?.[0];
      const month = dateStr.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/)?.[0];
      const monthMap = {
        'Jan': 1, 'Feb': 2, 'Mar': 3, 'Apr': 4, 'May': 5, 'Jun': 6,
        'Jul': 7, 'Aug': 8, 'Sep': 9, 'Oct': 10, 'Nov': 11, 'Dec': 12
      };
      return year ? parseInt(year) * 100 + (monthMap[month] || 0) : 0;
    };
    
    return getDateValue(b.date) - getDateValue(a.date);
  });

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Main heading centered */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center pop-heading group hover:scale-105 uppercase">
          ABOUT <span className="text-primary">ME</span>
        </h2>
        {/* Tagline/description directly below heading */}
        <p className="text-center text-muted-foreground mb-8 text-lg font-medium max-w-2xl mx-auto">
          A snapshot of my journey in engineering, leadership, research, and recognition.
        </p>
        {/* Tabs in a single horizontal row, centered and compact */}
        <div className="flex flex-nowrap justify-center gap-2 mb-4 mt-6 flex-row items-center">
          {aboutTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`px-3 py-2 rounded-full transition-all duration-300 capitalize flex items-center gap-2 text-sm font-semibold shadow-sm whitespace-nowrap ${isActive ? 'bg-primary text-primary-foreground scale-105 shadow-md' : 'bg-secondary/70 text-foreground hover:bg-secondary'}`}
                style={{ minWidth: 120 }}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                {tab.label}
              </button>
            );
          })}
            </div>
        {/* Timeline left-aligned */}
        <div className="relative min-h-[320px]">
          <div className="timeline relative border-l-2 border-primary/30 ml-6">
            {sortedData.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-start mb-12 relative group transition-all duration-300 ${hoveredIdx === idx ? 'z-10' : ''} ${idx === 0 ? 'mt-16' : ''}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Timeline dot (hollow/outlined) */}
                <span className="absolute -left-3 top-2 w-5 h-5 rounded-full border-2 border-primary bg-primary z-10"></span>
                {/* Left: Org, location, date */}
                <div className="w-1/3 pr-6 flex flex-col items-start text-left" style={{marginLeft: '1.5rem'}}>
                  <span className="font-semibold text-lg mb-2">{item.organization}</span>
                  <span className="text-sm text-muted-foreground italic">{item.location}</span>
                  <span className="text-xs text-muted-foreground mt-1 italic">{item.date}</span>
                </div>
                {/* Right: Title, summary, dropdown */}
                <div className="w-2/3 pl-12 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-bold text-primary text-lg underline hover:text-primary/80 transition-colors duration-300">
                        {item.title}
                      </a>
                    ) : (
                      <span className="font-bold text-primary text-lg">{item.title}</span>
                    )}
                </div>
                  <p className="text-muted-foreground text-base mb-1 italic">{item.summary}</p>
                  {/* Dropdown details on hover */}
                  {item.details && item.details.length > 0 && (
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-visible ${hoveredIdx === idx ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                      style={hoveredIdx === idx ? {height: 'auto'} : {height: 0, overflow: 'hidden'}}
                    >
                      <ul className="list-disc pl-6 space-y-1 text-left text-base">
                        {item.details
                          .filter(point => point !== "Publication: 'Predicting stock market using machine learning' in International Journal of System Assurance Engineering and Management.")
                          .map((point, i) => {
                            // If this is the Springer DOI link, make it a hyperlink
                            if (typeof point === 'string' && point.startsWith('http')) {
                              return (
                                <li key={i}>
                                  <a href={point} target="_blank" rel="noopener noreferrer" className="text-primary underline">{point}</a>
                                </li>
                              );
                            }
                            return <li key={i}>{point}</li>;
                          })}
                      </ul>
              </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* LinkedIn and Get In Touch buttons at the end */}
        <div className="flex gap-4 pt-8 justify-center">
          <a href="#contact" className="cosmic-button">
            Get In Touch
          </a>
          <a
            href="https://linkedin.com/in/dhruhisheth"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
