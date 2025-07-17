import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = ["AI/ML enthusiast", "Backend developer", "Frontend Developer", "Software Engineer"];

  useEffect(() => {
    const currentRoleText = roles[roleIndex];
    
    if (!isDeleting) {
      // Typing animation
      if (charIndex < currentRoleText.length) {
        const timeout = setTimeout(() => {
          setCurrentRole(currentRoleText.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Start deleting after a pause
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting animation
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentRole(currentRoleText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setCharIndex(0);
      }
    }
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center flex flex-col justify-center h-full">
            <div className="mb-2">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-black welcome-glow opacity-0 animate-fade-in whitespace-nowrap">
                Welcome to my Portfolio!
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary opacity-0 animate-fade-in-delay-1 whitespace-nowrap mt-8">
              This is Dhruhi Sheth
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-2">
              <span>I'm a </span>
              <span className="text-primary font-semibold">
                {currentRole}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-2 text-center text-justify max-w-4xl mx-auto">
              A Computer Science student at SJSU crafting intelligent, end-to-end software, from AI voice assistants and vision models to sleek full-stack web apps. Blending research, creativity, and code to turn bold ideas into impactful, user-driven experiences.
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2">
            <div className="relative">
              {/* Main photo container with rotating border */}
              <div className="w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-2 border-primary/30 relative overflow-hidden group hover:scale-105 transition-all duration-700">
                {/* Rotating gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-pink-300 to-primary animate-spin-slow opacity-30"></div>
                <div className="absolute inset-1 rounded-full bg-background"></div>
                
                {/* Multiple rotating layers for more dynamic effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-primary to-purple-400 animate-spin-reverse opacity-20"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-300 to-orange-400 animate-spin-slow opacity-15"></div>
                
                {/* Enhanced pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse-ring"></div>
                <div className="absolute inset-0 rounded-full border-2 border-pink-300/20 animate-pulse-ring-delayed"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-400/15 animate-pulse-ring-slow"></div>
                
                {/* Wave effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-pink-300/10 animate-wave"></div>
                
                {/* Photo placeholder with enhanced hover effects */}
                <div className="relative z-10 w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                  <img 
                    src={"/projects/profile1.png"} 
                    alt="Dhruhi Sheth" 
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Enhanced floating particles */}
                <div className="absolute top-6 left-6 w-3 h-3 bg-primary rounded-full animate-float-slow shadow-lg"></div>
                <div className="absolute top-12 right-12 w-2 h-2 bg-pink-300 rounded-full animate-float-delayed shadow-lg"></div>
                <div className="absolute bottom-8 left-8 w-2.5 h-2.5 bg-secondary rounded-full animate-float-slow-delayed shadow-lg"></div>
                <div className="absolute bottom-12 right-6 w-1.5 h-1.5 bg-primary/60 rounded-full animate-float shadow-lg"></div>
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-slow shadow-lg"></div>
                <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float-delayed shadow-lg"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-float-slow-delayed shadow-lg"></div>
                <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-float shadow-lg"></div>
                
                {/* Enhanced sparkles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle shadow-lg"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle-delayed shadow-lg"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-sparkle-slow shadow-lg"></div>
                <div className="absolute top-1/2 right-4 w-1 h-1 bg-green-400 rounded-full animate-sparkle-slow-delayed shadow-lg"></div>
                <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-sparkle shadow-lg"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-sparkle-delayed shadow-lg"></div>
                
                {/* Gradient background instead of orbiting elements */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100/30 via-blue-50/20 to-pink-50/30 animate-pulse-slow"></div>
                
                {/* Energy field effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-transparent to-pink-300/5 animate-energy-field"></div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/50 rounded-full animate-pulse delay-1000 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-pink-300/40 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-primary/60 rounded-full animate-bounce delay-700"></div>
              
              {/* Additional floating elements */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400/60 rounded-full animate-float-slow-delayed"></div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-float-delayed"></div>
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-1 h-1 bg-pink-400/70 rounded-full animate-float-slow"></div>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-1.5 h-1.5 bg-green-400/40 rounded-full animate-float"></div>
              
              {/* Connecting lines */}
              <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-r from-transparent to-primary/30 animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-l from-transparent to-primary/30 animate-pulse delay-300"></div>
              
              {/* Corner accents */}
              <div className="absolute -top-8 -right-8 w-4 h-4 border-t-2 border-r-2 border-primary/40 rounded-tr-lg animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-4 h-4 border-b-2 border-l-2 border-pink-300/40 rounded-bl-lg animate-pulse delay-500"></div>
              <div className="absolute -top-8 -left-8 w-4 h-4 border-t-2 border-l-2 border-secondary/40 rounded-tl-lg animate-pulse delay-300"></div>
              <div className="absolute -bottom-8 -right-8 w-4 h-4 border-b-2 border-r-2 border-primary/30 rounded-br-lg animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
      <style jsx>{`
        .welcome-glow {
          text-shadow:
            0 0 8px #fbcfe8,
            0 0 16px #fbcfe8,
            0 0 2px #fbcfe8;
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.2); }
        }
        
        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-180deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1s;
        }
        
        .animate-float-slow-delayed {
          animation: float-slow-delayed 5s ease-in-out infinite 2s;
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes pulse-ring-delayed {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.3; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes wave {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes sparkle-delayed {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(-180deg); }
        }
        
        @keyframes sparkle-slow {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.5) rotate(90deg); }
        }
        
        @keyframes sparkle-slow-delayed {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.3) rotate(-90deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }
        
        .animate-pulse-ring-delayed {
          animation: pulse-ring-delayed 4s ease-in-out infinite 1s;
        }
        
        .animate-wave {
          animation: wave 12s linear infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .animate-sparkle-delayed {
          animation: sparkle-delayed 2.5s ease-in-out infinite 0.5s;
        }
        
        .animate-sparkle-slow {
          animation: sparkle-slow 3s ease-in-out infinite 1s;
        }
        
        .animate-sparkle-slow-delayed {
          animation: sparkle-slow-delayed 3.5s ease-in-out infinite 1.5s;
        }
        
        .animate-energy-field {
          animation: energy-field 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
