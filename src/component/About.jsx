import React from 'react';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold'>
        About <span className='text-neutral-500'>Me</span>
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap items-center">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center lg:justify-end">
            <img className='rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out max-w-full' src={aboutImg} alt="About Me" />
          </div>
        </div>

        {/* Paragraph on the right */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className='my-2 max-w-xl py-6 tracking-tighter'>
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
