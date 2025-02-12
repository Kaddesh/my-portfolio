import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const offset = 120;
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
  
    window.scrollTo({
       top: top,  behavior: "smooth"
    });
    if (window.innerWidth < 768) {
      setNavVisible(false);
    }
  };
  

  return (
    <section className="px-6 lg:px-0">
      <header id="home" className={` fixed top-0 left-0 w-[100vw] z-50 bg-black opacity-95 overflow-x-hidden md:px-20 ${
            navVisible ? "border-b-2 border-white w-[100vw]" : ""
          }`}>
        <div
          className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-3 pb-3"
        >
          <button
            id="open-button"
            onClick={toggleNav}
            className="text-white hover:text-black bg-none hover:bg-[#ADEFD1FF]"
          >
            <HiOutlineMenuAlt1 size={30} className="" />
          </button>

          <nav className={` ${navVisible ? "block" : "hidden"} transition-all duration-700`}>
          <div className="flex flex-col md:flex-row gap-5 px-auto my-10 md:my-0 items-center lg:justify-end">
            <a href="#about" onClick={() => scrollToSection("section2")}>About</a>
            <a href="#portfolio" onClick={() => scrollToSection("section4")}>Projects</a>
            <a href="#contact" onClick={() => scrollToSection("section6")}>Contact</a>
            <a href="./assets/O_IJ..CV.pdf" download className="border px-6 py-4 border-[#42EADDFF]">Resume</a>
          </div>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default Header;
