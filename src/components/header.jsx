import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
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
    <section className="h-screen px-5 lg:pl-20">
      <header id="home" className="fixed top-0 left-0 w-[100vw] z-50 bg-black opacity-95 overflow-hidden">
        <div
          className={`flex flex-col md:flex-row items-center justify-center md:justify-between pt-3 pb-3 ${
            navVisible ? "border-b-2 border-white" : ""
          }`}
        >
          <button
            id="open-button"
            onClick={toggleNav}
            className="text-white hover:text-black md:ml-10 bg-none hover:bg-[#ADEFD1FF]"
          >
            <HiOutlineMenuAlt1 size={30} className="" />
          </button>

          <nav
            className={`w-[70%] lg:w-auto h-[100%] lg:h-auto border mt-3 border-[#ADEFD1FF] md:border-none shadow-lg transform transition-transform duration-700 ${
              navVisible
                ? "block md:-translate-x-10 lg:-translate-x-40"
                : "hidden lg:-translate-y-60"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-5 px-auto my-10 md:my-0 items-center lg:justify-end text-base lg:text-lg xl:text-xl">
              <a
                href="index.html#about"
                className="nav-link flex items-center gap-2"
                onClick={() => scrollToSection("section2")}
              >
                <span>About</span>
              </a>
              <a
                href="index.html#home"
                className="nav-link flex items-center gap-2"
                onClick={() => scrollToSection("section3")}
              >
                <span>Experience</span>
              </a>
              <a
                href="index.html#portfolio"
                className="nav-link flex items-center gap-2"
                onClick={() => scrollToSection("section4")}
              >
                <span>Projects</span>
              </a>
              <a
                href="index.html#blog"
                className="nav-link flex items-center gap-2"
                onClick={() => scrollToSection("section5")}
              >
                <span>PQA</span>
              </a>
              <a
                href="index.html#contact"
                className="nav-link flex items-center gap-2"
                onClick={() => scrollToSection("section6")}
                
              >
                <span>Contact</span>
              </a>
              <a
                href="./assets/oludamolaijimade.pdf"
                className="nav-link flex items-center"
                download
              >
                <span className="px-6 py-4 border border-[#42EADDFF]">
                  Resume
                </span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="hidden lg:block fixed left-5 bottom-6 ml-5 mb-5 ">
        <div className="flex flex-col gap-10 ">
          <a href="https://x.com/KKaddesh?t=HVQ50nIp6-NF94K9pQyW8g&s=09" className="twitter text-[#A8B2D1] ">
            <FaTwitter size={25} />
          </a>
          <a href="https://www.linkedin.com/in/oludamola-ijimade-3a341a1b3" className="linkedin text-[#A8B2D1] ">
            <FaLinkedinIn size={25} />
          </a>
          <a href="https://www.facebook.com/ijimadeoluwadamola.david?mibextid=ZbWKwL" className="facebook text-[#A8B2D1]">
            <FaFacebookF size={25} />
          </a>
          <a href="https://www.instagram.com/kkaddesh?igsh=ZGUzMzM3NWJiOQ==" className="instagram text-[#A8B2D1]">
            <FaInstagramSquare size={25} />
          </a>
        </div>
      </div>

      <div className="hidden lg:block fixed right-10 ml-5 bottom-20 transform rotate-90 origin-bottom-right ">
       
          
          <a href="mailto:oludamolaijimade@gmail.com" className="text-[#A8B2D1]">
            oludamolaijimade@gmail.com
          </a>
     
      </div>

      <section id="section1" className="flex items-center justify-start h-screen">
        <div className="flex flex-col ml-5 text-start md:pl-20">
          <div className="">
            <h1 className="text-3xl text-wrap md:text-6xl lg:text-8xl">
              O<span style={{ color: "#42EADDFF" }}>LU</span>DAMOLA
              <br />
              <span>
                I<span style={{ color: "#42EADDFF" }}>JIMA</span>DE
              </span>
            </h1>
            <h3 className="text-lg md:text-xl lg:text-4xl text-white pt-3">
              <span className="rotate">A Digital Solutionist from Nigeria.</span>
            </h3>
          </div>

          <div className=" mt-5 " >
           <p className="text-[#A8B2D1] text-base lg:text-lg">Creating flawless web experiences that captivate and leave lasting  impressions. <br /> Delivering pixel-perfect realities with unmatched expertise. Always developing <br /> web solutions like a boss.</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
