import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import AnimateInView from './animate';
import Stack from './stack';

const About = () => {
  return (
    <section id="section2" className="lg:text-center lg:mt-20 mx-6 lg:mx-0" data-section="about">
      <AnimateInView initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
        <div>
          <div className="flex gap-3">
            <h3 className="text-[#42EADDFF] text-lg xl:text-3xl">01.</h3>
            <h1 className="text-lg xl:text-3xl font-bold lg:text-end">Who Am I?</h1>
          </div>

          <div className="grid xl:grid-cols-2 justify-center pt-10 lg:pt-20 gap-10">
            <div className="spiral-border lg:h-[450px] lg:w-[450px] order-2 xl:order-1 mx-auto xl:my-auto">
              <img src="/assets/myProfimage.png" alt="Oludamola Ijimade" className="profile-image" />
            </div>

            <div className="order-1 xl:order-2 text-start text-wrap space-y-5 lg:space-y-10 tracking-wider leading-8">
              <div>
                <span className="blurr">Introduction</span>
                <p className="text-sm lg:text-base lg:max-w-xl">
                  Hi, I'm <strong>Oludamola Ijimade</strong>, a frontend engineer who began his tech journey in 2022 after an inspiring experience with a friend. Witnessing the innovation happening around the world, I felt compelled to contribute, and today, I'm passionately building impactful digital experiences.
                </p>
              </div>
              <div>
                <span className="blurr">Approach</span>
                <p className="text-sm lg:text-base lg:max-w-xl">
                  I create digital experiences by balancing technical expertise with a deep understanding of user needs. I love building things that matter. By leveraging collaboration, architectural design, and a keen understanding of stakeholders’ needs, I craft solutions that are both functional and delightful.
                </p>
              </div>
              <div>
                <span className="blurr">Expertise</span>
                <p className="text-sm lg:text-base lg:max-w-xl">
                  With an unwavering commitment to learning and growth, I thrive on challenges and approach each project with enthusiasm. By blending technical proficiency with an eye for empathetic design, I develop digital solutions that simplify and empower users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimateInView>
      <Stack />
    </section>
  );
};

export default About;
