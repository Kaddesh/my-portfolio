import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const sections = [
  { id: "section2", label: "About" },
  { id: "section4", label: "Projects" },
  { id: "section6", label: "Contact" },
];

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("section2");

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 120;
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: top, behavior: "smooth" });

    setActiveSection(id); // Update active section on click
    if (window.innerWidth < 768) {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "section2"; // Default active section
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-black opacity-95 z-50 px-6 md:px-20">
      <div className="flex items-center justify-between py-3">
        {/* Stylish Logo */}
        <div className="text-white text-xl font-bold tracking-wider bg-gradient-to-r from-[#42EADDFF] to-[#ADEFD1FF] text-transparent bg-clip-text">
          OI
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => scrollToSection(id)}
              className={`transition-colors text-sm duration-300 ${
                activeSection === id ? "text-[#42EADDFF] font-semibold" : "hover:text-gray-400"
              }`}
            >
              {label}
            </a>
          ))}
          <a href="./assets/O_IJ..CV.pdf" download className="border text-sm px-6 py-2 border-[#42EADDFF] text-white">
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleNav} className="text-white md:hidden">
          <HiOutlineMenuAlt1 size={30} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {navVisible && (
        <nav className="md:hidden flex flex-col items-center gap-5 py-4 bg-black">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => scrollToSection(id)}
              className={`transition-colors duration-300 ${
                activeSection === id ? "text-[#42EADDFF] font-semibold" : "hover:text-gray-400"
              }`}
            >
              {label}
            </a>
          ))}
          <a href="./assets/O_IJ..CV.pdf" download className="border px-6 py-2 border-[#42EADDFF] text-white">
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
