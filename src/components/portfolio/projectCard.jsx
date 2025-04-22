import React from "react";
import AnimateInView from "../animate";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({ item, reverse }) => {
  return (
    <AnimateInView
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      hoverScale={1.05}
    >
      <div
        className={`relative text-xl flex flex-col my-10 lg:mb-40 ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* ✅ Mobile Background Image (Only on mobile) */}
        <div
          className="block lg:hidden w-full h-auto rounded-md"
          style={{
            backgroundImage: `url(${item.imgSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* ✅ Dark Overlay for Readability */}
          <div className="bg-[#162e48] bg-opacity-95 p-6">
            <h2 className="text-white font-bold text-base lg:text-lg">{item.projectTitle}</h2>
            <p className="text-sm leading-7 text-[#afb6ce] mt-6">{item.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.tools?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-[#ADEFD1FF] text-[#00203FFF] px-2 py-1 rounded text-xs font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex mt-4">
              <a href={item.hrefGit}>
                <FaGithub size={30} className="mr-10 text-[#ADEFD1FF]" />
              </a>
              <a href={item.hrefLink}>
                <FaLink size={30} className="text-[#ADEFD1FF]" />
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Desktop Image (No Changes) */}
        <div className="hidden lg:block h-[300px] w-[60%] rounded-md">
          <img
            src={item.imgSrc}
            alt={item.altText}
            className="object-contain rounded-md h-full w-full opacity-60 hover:opacity-100"
          />
        </div>

        {/* ✅ Desktop Content (No Changes) */}
        <div
          className={`hidden lg:absolute lg:flex flex-col lg:w-[50%] space-y-3 ${
            reverse
              ? "lg:left-0 lg:mr-20 text-start"
              : "lg:right-0 lg:text-end lg:items-end"
          }`}
        >
          <h2 className="text-[#ADEFD1FF] text-base lg:text-lg">{item.projectTitle}</h2>
          <div className="bg-[#162e48] rounded-md items-center px-8 sm:mx-10 lg:mx-0 py-6">
            <p className="text-sm lg:text-base leading-7">{item.description}</p>
          </div>
           {/* ✅ Tools (Desktop view) */}
        <div
              className={`flex flex-wrap gap-2 mt-4 ${
                reverse ? "justify-start" : "justify-end"
              }`}
            >
              {item.tools?.map((tool, index) => (
                <span
                  key={index}
                  className="bg-[#ADEFD1FF] text-[#00203FFF] px-2 py-1 rounded text-xs font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>

          <div className="flex">
            <a href={item.hrefGit}>
              <FaGithub size={30} className="mr-10 text-[#ADEFD1FF]" />
            </a>
            <a href={item.hrefLink}>
              <FaLink size={30} className="text-[#ADEFD1FF]" />
            </a>
          </div>
        </div>
       
      </div>
    </AnimateInView>
  );
};

export default ProjectCard;
