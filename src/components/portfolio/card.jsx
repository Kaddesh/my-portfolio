import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLink } from 'react-icons/fa';


const Card = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="block bg-[#162e48] py-8 px-10 w-full transition-transform duration-300 ease-in-out"
    >
      <div className='flex items-center justify-between'>
        <a href={item.hrefGit} ><FaGithub size={30} className=" text-[#ADEFD1FF]" /></a>
        <a href={item.hrefLink}><FaLink size={30} className=" text-[#ADEFD1FF]" /></a>
      </div>
      <div className='md:h-64 mt-4'>
        <h3>{item.projectTitle}</h3>
        <p className=' lg:text-base leading-7 text-[#afb6ce] mt-3'>{item.description}</p>
      </div>
      
    </motion.div>
  );
};

export default Card;
