import React, { useState } from 'react';
import { ChevronUpIcon } from '@heroicons/react/outline';
import { FaArrowsToDot } from 'react-icons/fa6';
import AnimateInView from '../animate';

const FAQAccordion = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What inspired you to embark on your journey into software engineering?",
      answer: "The profound impact of technology across diverse fields ignited my curiosity, leading me to delve deeply into the world where everything is possible."
    },
    {
      question: "What is your process for designing user-friendly and responsive interfaces?",
      answer: "I start with user research and wireframing, use responsive design principles, and conduct cross-device testing to ensure usability and accessibility for all users."
    },
    {
      question: "Can you describe a challenging project you’ve worked on and how you overcame the obstacles?",
      answer: "Developing a responsive e-commerce site was challenging due to cross-device consistency. I used a mobile-first approach, flexible layouts, and extensive testing to ensure a smooth user experience."
    },
    {
      question: "How do you ensure that your code is both efficient and maintainable?",
      answer: "I ensure efficiency and maintainability by writing modular, clean code, using linters, and conducting regular code reviews. I also document thoroughly and employ unit tests for reliability."
    },
    {
      question: "How do you balance creativity with technical constraints in your projects?",
      answer: "I balance creativity with constraints by exploring innovative solutions within limits, iterating on designs, and collaborating with stakeholders to align aesthetics with technical feasibility."
    },
    {
      question: "What are your long-term goals in software engineering, and how do you plan to achieve them?",
      answer: "I aim to become a front-end expert and contribute to groundbreaking projects. I plan to achieve this through advanced learning, diverse project experience, and mentoring others in the field."
    }
  ];

  return (
    <section id="section5" className="relative mt-40 mx-10 lg:ml-40 lg:mr-20">
      <AnimateInView>
      <h1 className=" text-2xl xl:text-3xl">Potential Questions Answered</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="relative mb-3 mt-10">
          <FaArrowsToDot className='text-[#ADEFD1FF] size-6 mb-5' />
          <div>
            <button
              className={`w-full flex justify-between items-center text-white hover:bg-[black] lg:px-4 py-2 text-left hover:text-[#ADEFD1FF] ${expandedIndex === index ? 'shadow-lg' : ''}`}
              onClick={() => handleChange(index)}
            >
              <span className='lg:text-lg leading-9'>{faq.question}</span>
              <ChevronUpIcon className={`w-5 h-5 transform ${expandedIndex === index ? 'rotate-180' : ''}`} />
            </button>
            {expandedIndex === index && (
              <div className="lg:px-40 pt-4 pb-2">
                <p className='lg:text-lgl bg-[#ADEFD1FF] text-black px-5 leading-7'>{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
      </AnimateInView>
    </section>
  );
};

export default FAQAccordion;
