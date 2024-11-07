import React from 'react'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-8'>
      <h1 className='text-center text-4xl font-bold mb-8 text-white'>Experience</h1>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4 lg:flex lg:justify-start'>
              <div className='lg:w-1/3 lg:text-left'>
                <p className='text-sm my-2 py-6 tracking-tighter text-white'>{experience.year}</p>
              </div>
            </div>
            <div className='lg:w-2/3 lg:pl-4'>
              <h2 className='text-xl font-semibold text-white'>{experience.role}</h2>
              <p className='mt-2 text-white'>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
