import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-screen bg-blue-50">
      <main className="p-5 bg-light-blue">
        <div className="flex justify-center items-start my-2">
          <div className="w-full sm:w-10/12 md:w-1/2 my-1">
           <h1 className='text-3xl font-mono'>Looking for answers?</h1>
            <ul className="flex flex-col">
              {[{
                question: 'What qualifications do I need to become a tutor?',
                answer: 'To become a tutor, you generally need expertise in the subject you wish to teach. While formal teaching certifications or degrees are preferred for some subjects, many tutors succeed with a strong knowledge base, relevant experience, and a passion for helping students learn.'
              }, {
                question: 'How do I get matched with students?',
                answer: "To become a tutor, you generally need expertise in the subject you wish to teach. While formal teaching certifications or degrees are preferred for some subjects, many tutors succeed with a strong knowledge base, relevant experience, and a passion for helping students learn."
              }, {
                question: "Can I set my own rates and schedule?",
                answer: 'To become a tutor, you generally need expertise in the subject you wish to teach. While formal teaching certifications or degrees are preferred for some subjects, many tutors succeed with a strong knowledge base, relevant experience, and a passion for helping students learn.'
              }, {
                question: 'How do I get paid for my tutoring sessions?',
                answer: 'To become a tutor, you generally need expertise in the subject you wish to teach. While formal teaching certifications or degrees are preferred for some subjects, many tutors succeed with a strong knowledge base, relevant experience, and a passion for helping students learn.'
              }, {
                question: 'What support will I receive as a tutor?',
                answer: 'To become a tutor, you generally need expertise in the subject you wish to teach. While formal teaching certifications or degrees are preferred for some subjects, many tutors succeed with a strong knowledge base, relevant experience, and a passion for helping students learn.'
              }].map((item, index) => (
                <li
                  key={index}
                  className=" my-2 border-b-2 border-gray-400"
                  onClick={() => toggleAccordion(index)}
                >
                  <h2 className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer">
                    <span className='flex items-center gap-2 text-gray-700'> <GoDotFill /> {item.question}</span>
                    <IoIosArrowDown  className={`fill-current text-black h-6 w-6 transform transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
                    
                  </h2>
                  <div
                    className={`overflow-hidden duration-500 transition-all ease-in-out ${
                      openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                    }`}
                  >
                    <p className="p-3 text-gray-600">{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;
