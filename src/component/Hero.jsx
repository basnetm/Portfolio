import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/img075.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-5'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, duration: 2 }}
            >
              Manoj Basnet
            </motion.h1>
            <motion.span
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-light text-transparent'
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, duration: 2 }}
            >
              Backend Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 tracking-tighter"
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, duration: 2 }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="rounded-2xl shadow-lg transform hover:scale-105 transition duration-500 ease-in-out max-w-full"
              src={profilePic}
              alt="profile"
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 50, duration: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
