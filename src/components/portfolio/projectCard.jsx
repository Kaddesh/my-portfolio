import React from 'react';
import AnimateInView from '../animate';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({ item, reverse }) => {
  return (
    <AnimateInView
      initial={{ opacity: 0, x: reverse ? -100 : 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      hoverScale={1.05}
    >
      <div className={`relative text-xl flex flex-col my-10  lg:mb-40  ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} `}>
        <div className="hidden lg:block h-[400px] w-[70%]  ">
          <img src={item.imgSrc} alt={item.altText} className={`object-contain h-full w-full opacity-60 hover:opacity-100`} />
        </div>
        <div className={`lg:absolute flex flex-col  lg:w-[50%] space-y-3 ${reverse ? 'left-0  lg:mr-20 text-start' : 'right-0  lg:text-end items-end'}`}>
          <h3 className='text-lg lg:text-2xl'> Featured Project</h3>
          <h2 className='text-[#ADEFD1FF] text-2xl '>{item.projectTitle}</h2> 
            <div className='bg-[#162e48] rounded-md items-center px-8 sm:mx-10 py-6'>
           
            <p className='lg:text-lg leading-7'>{item.description}</p>           
            </div>

            <div className='flex'>
          <a href={item.hrefGit}> <FaGithub size={30} className="mr-10 text-[#ADEFD1FF] " /> </a>
          <a href={item.hrefLink}> <FaLink size={30} className="text-[#ADEFD1FF]  " /> </a>  
        </div>
        </div>
        
      </div>
    </AnimateInView>
  );
};

export default ProjectCard;

