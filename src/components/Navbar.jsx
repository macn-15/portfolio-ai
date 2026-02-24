import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null); // reference to navbar

  const sections = ["hero", "about", "education", "projects", "chat", "contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && navRef.current) {
      const navbarHeight = navRef.current.offsetHeight; // get height dynamically
      const topPos = element.offsetTop - navbarHeight;
      window.scrollTo({ top: topPos, behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  // Track scrolling to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + (navRef.current?.offsetHeight || 0) + window.innerHeight / 2;

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
    <nav
      ref={navRef}
      className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-md"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Name */}
        <div className="text-lg font-bold text-blue-400">Portfolio</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
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

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-200 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 flex flex-col px-6 pb-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="py-2 text-left text-gray-200 hover:text-blue-400"
            >
              {section === "hero"
                ? "Home"
                : section === "education"
                ? "Education/Skills"
                : section === "chat"
                ? "AI Chat"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;