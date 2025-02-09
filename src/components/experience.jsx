import React, { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { FaCaretRight } from 'react-icons/fa';
import AnimateInView from './animate';

const content = [
  [
    "Converted static design files into responsive, interactive web pages using HTML, CSS, and JavaScript",
    "Enhanced website functionality and user experience by implementing responsive design techniques and optimizing for various devices",
    "Refined and debugged code to ensure compatibility across different browsers and improve overall performance",
    "Utilized Git for version control, managing branches, commits, and collaborating on code reviews with peers"
  ],
  [
    "Developed robust and scalable frontend solutions using best practices in HTML, CSS, and JavaScript, focusing on performance optimization and user experience.",
    "Collaborated closely with cross-functional teams in code reviews and pair programming sessions to ensure code quality, consistency, and knowledge sharing.",
    "Troubleshooted and debugged frontend issues, employing systematic approaches to identify root causes and implement effective solutions.",
    "Conducted research into new technologies and frameworks to align with project requirements, ensuring continuous improvement and innovation."
  ],
  [
    "Applied skills gained from actively participating in Frontend Mentor challenges to research and implement emerging technologies and frameworks.",
    "Developed scalable and maintainable frontend solutions using HTML, CSS, and JavaScript, ensuring robust performance and reliability.",
    "Successfully integrated performance optimizations, such as efficient code structures and responsive design principles, to enhance web application speed and user interaction.",
    "Collaborated in code reviews and pair programming sessions to refine coding practices and foster team collaboration, contributing to high-quality software delivery."
  ],
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  const buttons = ["Fapss", "Haven360-lab"];

  return (
    <section id="section3" className="flex flex-col gap-4 mt-20 lg:mt-60 mx-6 lg:mx-0">
      <AnimateInView>
      <div className='flex gap-3'>
              <h3 className='text-[#42EADDFF] text-lg xl:text-3xl'>02.</h3>
            <h1 className=" text-lg xl:text-3xl font-bold lg:text-end lg:pr-80 lg:pl-10">Work experience</h1>
            </div>
        <div
          className="flex overflow-x-auto items-start lg:items-center lg:justify-center text-[#CCD6f6] gap-5 mt-6 text-lg xl:text-xl scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {buttons.map((name, index) => (
            <button
              key={index}
              className={`text-base lg:text-lg text-nowrap px-4 py-5 lg:py-10 w-1/2 rounded hover:bg-gray-900 cursor-pointer ${
                openIndex === index ? "border-b-2 border-[#ADEFD1FF]" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              {name}
            </button>
          ))}
        </div>
        {openIndex !== null && (
          <Collapsible.Root open>
            <Collapsible.Content>
              <div className="mt-10 lg:mt-4 lg:p-4 items-start">
                {content[openIndex].map((text, idx) => (
                  <p key={idx} className="flex text-start px-2 mb-5">
                    <FaCaretRight className="mr-5 mt-2 text-[#ADEFD1FF]" />
                    <span className="text-sm lg:text-base xl:text-lg text-[#afb6ce]">{text}</span>
                  </p>
                ))}
              </div>
            </Collapsible.Content>
          </Collapsible.Root>
        )}
      </AnimateInView>
    </section>
  );
}
