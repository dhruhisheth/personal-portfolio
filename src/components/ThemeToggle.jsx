import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-3 rounded-full transition-all duration-300",
        "bg-card/80 backdrop-blur-md border border-border shadow-lg",
        "hover:bg-card hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50",
        "max-sm:bottom-4 max-sm:right-4 max-sm:p-2"
      )}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400 max-sm:h-4 max-sm:w-4" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600 max-sm:h-4 max-sm:w-4" />
      )}
    </button>
  );
};
