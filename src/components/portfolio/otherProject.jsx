import React from 'react';
import Card from './card';
import AnimateInView from '../animate'; 

const otherItems = [
  {
    hrefLink:  'https://kaddesh.github.io/country/',
    hrefGit: 'https://github.com/Kaddesh/country',
    altText: 'country app',
    projectTitle: 'Country-Api ',
    description: 'The app integrates with the REST Countries API to pull and display country data. Users can see all countries on the homepage, search for a country using an input field, and filter countries by region. Clicking on a country reveals more detailed information on a separate page.',
  },

  {
    hrefLink:  'https://kaddesh.github.io/Multi-step-form/',
    hrefGit: 'https://github.com/Kaddesh/Multi-step-form',
    altText: 'multi-page',
    projectTitle: 'OrderPic ',
    description: 'It ensures that users can view the optimal layout for the interface depending on their device\'s screen size, see hover and focus states for all interactive elements on the page, and receive form validation messages for forms.',
  },
  {
    hrefLink:  'https://kaddesh.github.io/Quiz-App-Tailwind/',
    hrefGit: 'https://github.com/Kaddesh/Quiz-App-Tailwind',
    altText: 'Quiz-app',
    projectTitle: 'Quiz App',
    description: 'This project sharpened Javascript skill, a simple to-do App that allows users to manage their tasks efficiently. Users can add new tasks, and delete tasks they no longer need.',
  },
];

export default function OtherProjects() {
  return (
    <div className='mt-20 lg:mt-0 lg:max-w-[1100px] lg:mx-auto'>
            <h1 className=" text-lg xl:text-3xl text-center font-bold lg:text-end lg:pr-80 lg:pl-10">Other noteworthy projects</h1>
            <p className='text-center'><a href="https://github.com/kaddesh" target="_blank" rel="noopener noreferrer" className='text-sm lg:text-base text-[#ADEFD1FF]'>View Github Repos</a></p>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 pt-10">
        {otherItems.map((item, index) => (
          <AnimateInView key={index}>
            <Card item={item} />
          </AnimateInView>
          
        ))}
        
      </div>
      <div className=" hidden text-center">
                <button className="py-3 px-5 lg:py-5 lg:px-[28px] mt-20 border-2 rounded-md border-[#ADEFD1FF] hover:bg-gray-800">
                  Show more
                </button>
      </div>
    </div>
  );
}
