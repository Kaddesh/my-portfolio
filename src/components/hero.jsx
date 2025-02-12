import React, { useEffect } from "react";
import { heroContent, highlightColor } from "../data/hero";

const Hero = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".fade-hero-down").forEach((doc) => {
        doc.style.opacity = "1";
        doc.style.transform = "translateY(0)";
      });
    }, 1000);
  }, []);

  return (
    <section
      id="section1"
      className="flex items-center justify-start h-screen px-6 lg:px-0"
    >
      <div className="flex flex-col text-start md:pl-20">
        <div className="space-y-4">
          <p
            className="text-2xl fade-hero-down"
            style={{ transitionDuration: "100ms" }}
          >
            {heroContent.greeting}
          </p>
          <h1
            className="text-3xl text-wrap md:text-6xl 2xl:text-8xl fade-hero-down"
            style={{ transitionDuration: "300ms" }}
          >
            {heroContent.firstName}
            <span style={{ color: highlightColor }}>
              {heroContent.lastName}
            </span>
            <br />
            <span
              className="fade-hero-down"
              style={{ transitionDuration: "500ms" }}
            >
              I
              <span style={{ color: highlightColor }}>
                {heroContent.lastNameHighlight}
              </span>
              DE
            </span>
          </h1>

          <h3 className="text-2xl md:text-xl lg:text-4xl text-white pt-3 fade-hero-down">
            {heroContent.title.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{
                  display: char === " " ? "inline" : "inline-block",
                  animation: `fadeInOut 2s ease-in-out ${
                    index * 150
                  }ms infinite`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h3>
        </div>

        <div
          className="mt-5 text-[#A8B2D1] text-base lg:text-lg fade-hero-down"
          style={{ transitionDuration: "900ms" }}
        >
          {heroContent.description}
        </div>
      </div>
    </section>
  );
};

export default Hero;
