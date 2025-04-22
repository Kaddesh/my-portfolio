import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt1, HiX } from "react-icons/hi";


const sections = [
  { id: "section2", label: "About" },
  { id: "section4", label: "Projects" },
  { id: "section6", label: "Contact" },
];

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("section2");
  const [mobileNavHeight, setMobileNavHeight] = useState("100vh");

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 120;
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: top, behavior: "smooth" });

    setActiveSection(id);
    if (window.innerWidth < 768) {
      setNavVisible(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "section2";
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

  useEffect(() => {
    // Set nav height dynamically for mobile
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      setMobileNavHeight(`${vh * 100}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    // Lock scroll when nav is open
    if (navVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [navVisible]);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a1c29] z-50 px-6 lg:px-20">
      <div className="flex items-center justify-between py-3">
        <div className=" text-2xl font-bold tracking-wider bg-gradient-to-r from-[#42EADDFF] to-[#ADEFD1FF] text-transparent bg-clip-text">
          OI
        </div>

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

       <button
  onClick={toggleNav}
  className="text-white hover:bg-black md:hidden transition-transform duration-300 transform hover:scale-110 hover:rotate-6"
>
  {navVisible ? <HiX size={30} /> : <HiOutlineMenuAlt1 size={30} />}
</button>

      </div>

      {/* Mobile Navigation */}
      {navVisible && (
        <nav
          style={{ height: mobileNavHeight }}
          className="md:hidden flex flex-col w-full items-center justify-center gap-10 py-4 bg-[#0a1623] rounded-sm"
        >
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
          <a href="./assets/O_IJ..CV.pdf" download className="border px-6 py-2 mt-10 border-[#42EADDFF] text-white">
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
