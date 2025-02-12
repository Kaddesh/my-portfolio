import React, { useState } from "react";
import Card from "./card";
import AnimateInView from "../animate";
import otherItems from "../../data/project";

export default function OtherProjects() {
  const [visibleProjects, setVisibleProjects] = useState(6); 

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, otherItems.length)); 
  };

  const showLessProjects = () => {
    setVisibleProjects(6); 
  };

  return (
    <div className="mt-20 lg:mt-0 lg:mx-auto">
      <h1 className="text-lg xl:text-3xl text-center font-bold">
        Other noteworthy projects
      </h1>
      <p className="text-center">
        <a
          href="https://github.com/kaddesh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm lg:text-base text-[#ADEFD1FF]"
        >
          View Github Repos
        </a>
      </p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 pt-10">
        {otherItems.slice(0, visibleProjects).map((item, index) => (
          <AnimateInView key={index}>
            <Card item={item} />
          </AnimateInView>
        ))}
      </div>

      {/* Show More & Show Less Buttons */}
      <div className="text-center mt-10">
        {visibleProjects < otherItems.length && (
          <button
            onClick={showMoreProjects}
            className="py-3 px-5 lg:py-5 lg:px-[28px] border-2 rounded-md border-[#ADEFD1FF] hover:bg-gray-800 mr-4"
          >
            Show More
          </button>
        )}
        {visibleProjects > 6 && (
          <button
            onClick={showLessProjects}
            className="py-3 px-5 lg:py-5 lg:px-[28px] border-2 rounded-md border-[#ADEFD1FF] hover:bg-gray-800"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
