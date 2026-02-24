import { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = ["hero", "about", "education", "projects", "chat", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Track scrolling to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-md">
      <div className="max-w-5xl mx-auto flex justify-center space-x-8 py-4">
        {sections.map((section) => {
          const label =
            section === "hero"
              ? "Home"
              : section === "education"
              ? "Education/Skills"
              : section === "chat"
              ? "AI Chat"
              : section.charAt(0).toUpperCase() + section.slice(1);

          const isActive = section === activeSection;

          return (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`relative px-3 py-1 rounded-md transition-colors duration-200
                          ${isActive ? "text-blue-400 font-semibold" : "text-gray-200 hover:text-blue-400"}
                          before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:bg-blue-400 before:transition-all before:duration-300
                          ${isActive ? "before:w-full" : "before:w-0 hover:before:w-full"}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;