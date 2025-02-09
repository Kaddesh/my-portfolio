import React from 'react';
import ProjectCard from './portfolio/projectCard';
import OtherProjects from './portfolio/otherProject';


const portfolioItems = [
  {
    hrefLink:'https://kaddesh.github.io/EShopsy/',
    hrefGit: 'https://github.com/Kaddesh/EShopsy',
    imgSrc: '/assets/shopsy.PNG',
    altText: 'shop',
    projectTitle: 'Shopsy',
    description: 'An e-commerce website that dynamically display products with amazing animation. The website allows users to use light or dark mode with ease and show modal for ordering of products..',
  },
  {
    hrefLink:  'https://www.smartparrot.ai/',
    hrefGit: '',
    imgSrc: '/assets/parrot1.PNG',
    altText: 'parrotAi',
    projectTitle: 'Smartparrot',
    description: 'One app to manage all social content post, it helps you to generate ai prompt for all your social media content and helps you to schedule post, assign your post and also tract all your social media content on all social media platforms.',
  },
  {
    hrefLink:  'https://kaddesh.github.io/tracker/',
    hrefGit: 'https://github.com/Kaddesh/tracker',
    imgSrc: '/assets/ip-tracker.PNG',
    altText: 'IP Address Tracker app',
    projectTitle: 'Tracker',
    description: 'The app is an IP Address Tracker that provides users with the ability to view their own IP address and location on a map upon initial page load. Users can search for any IP address or domain to see key information and its location.',
  },
  {
    hrefLink:  'https://kaddesh.github.io/easybank-/',
    hrefGit: 'https://github.com/Kaddesh/easybank-',
    imgSrc: '/assets/easybuy1.PNG',
    altText: 'EasyBuy app',
    projectTitle: 'EasyBank',
    description: 'The app is a landing page that provides users with an optimal layout depending on their device screen size. It displays hover states for all interactive elements on the page.',
  },
];

export default function Portfolio() {
  return (
    <section id="section4" className="flex flex-col  mt-40 lg:mt-60 mx-6 lg:mx-0 ">
      <div className='flex gap-3'>
              <h3 className='text-[#42EADDFF] text-lg xl:text-3xl'>03.</h3>
            <h1 className=" text-lg xl:text-3xl font-bold lg:text-end lg:pr-80 lg:pl-10">Some Projects I've Built</h1>
            </div>
      <div className=''>
      {portfolioItems.map((item, index) => (
        <ProjectCard
          key={index}
          item={item}
          reverse={index % 2 !== 0}
          
        />
      ))}
      </div>
      <OtherProjects />
    </section>
  );
}
