import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import AnimateInView from './animate';
import Stack from './stack';


const About = () => {
  return (
    <section id="section2" className=" lg:text-center  lg:mt-20 xl:pr-20 mx-10 lg:px-20 xl:pl-40" data-section="about">
      <AnimateInView initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <div >
            <h1 className=" text-xl xl:text-3xl lg:text-end lg:pr-80 lg:pl-10">Who Am I?</h1>
            <div className="grid  xl:grid-cols-2  pt-10 lg:pt-20 gap-10">

              <div className="spiral-border lg:h-[450px] lg:w-[450px] order-2 xl:order-1 mx-auto xl:my-auto ">
              <img src="./assets/myProfimage.png" alt="Your Name" className="profile-image" />
              </div>

              <div className="order-1 xl:order-2 text-start text-wrap space-y-5 lg:space-y-10 tracking-wider leading-8">
                <div>
                  <span className="blurr">Introduction</span>
                  <p className=' lg:text-lg '>
                    Hi I'm <strong>Oludamola Ijimade</strong> a frontend engineer who started his tech journey in 2022 after an amazing experience with a friend. I saw the innovation going on in the world and I got convinced that my contribution will be pivotal, so here I am today contributing immensely.
                  </p>
                </div>
                <div>
                  <span className="blurr">Approach</span>
                  <p className=' lg:text-lg '>
                    I innovate in the world through balancing technical prowess with a keen understanding of user experience. It is fun to say anytime that I love to build stuff. With the power of collaborative skill, architectural design, and understanding of stakeholders' needs I am swimming and having fun creating beautiful experiences in the world.
                  </p>
                </div>
                <div>
                  <span className="blurr">Expertise</span>
                  <p className=' lg:text-lg '> 
                    With an unwavering commitment to learning and growth, I thrives on challenges and embraces each project with enthusiasm. Combining technical expertise with a knack for empathetic design, I create digital solutions that empower and simplify.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-5 lg:justify-center lg:gap-6 md:ml-10 mt-20 text-[#CCD6f6]">
            <div className="lg:pr-20">
              <ul className='space-y-5'>
                <li className="about lg:text-lg ">
                  <FaChevronRight  /> <strong>Birthday:</strong> <span>7 Jan</span>
                </li>
                <li className="about lg:text-lg ">
                  <FaChevronRight  /> <strong>Website:</strong> <span>oludamolaiji.com</span>
                </li>
                <li className="about lg:text-lg ">
                  <FaChevronRight  /> <strong>Phone:</strong> <span>+234-8068453717</span>
                </li>
              </ul>
            </div>
            <div className="lg:pl-20">
              <ul className='space-y-5 '>
                <li className="about lg:text-lg ">
                  <FaChevronRight  /> <strong>City:</strong> <span>Lagos, Nigeria</span>
                </li>
                <li className="about lg:text-lg ">
                  <FaChevronRight  /> <strong>Degree:</strong> <span>Master</span>
                </li>
                <li className="about lg:text-lg  ">
                  <FaChevronRight className=" " /> <strong>Email:</strong> <span></span>
                </li>
              </ul>
            </div>
          </div>
      </AnimateInView>
      <Stack />
    </section>
  );
};

export default About;
