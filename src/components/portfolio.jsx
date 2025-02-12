import React from 'react';
import ProjectCard from './portfolio/projectCard';
import OtherProjects from './portfolio/otherProject';
import PortfolioItems from '../data/portfolio';

export default function Portfolio() {
  return (
    <section id="section4" className="flex flex-col  mt-40 lg:mt-60 mx-6 lg:mx-0 ">
      <div className='flex gap-3'>
              <h3 className='text-[#42EADDFF] text-lg xl:text-3xl'>03.</h3>
            <h1 className=" text-lg xl:text-3xl font-bold lg:text-end lg:pr-80 lg:pl-10">Some Projects I've Built</h1>
            </div>
      <div>
      {PortfolioItems.map((item, index) => (
        <ProjectCard
          key={index}
          item={item}
         
          
        />
      ))}
      </div>
      <OtherProjects />
    </section>
  );
}
