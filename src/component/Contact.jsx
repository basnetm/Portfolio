import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='text-3xl font-bold mb-6'>Contact Me</h1>
        <p className='text-lg mb-8'>
          I'm always open to discussing new opportunities and collaborations. Feel free to reach out to me through any of the following channels.
        </p>

        <div className='flex flex-col items-center'>
          <div className='mb-4'>
            <h2 className='text-xl font-semibold mb-2'>Address</h2>
            <p className='text-gray-400'>Banepa- Nayabasti, Kavre</p>
          </div>

          <div className='mb-4'>
            <h2 className='text-xl font-semibold mb-2'>Phone</h2>
            <p className='text-gray-400'>9803298926</p>
          </div>

          <div className='mb-4'>
            <h2 className='text-xl font-semibold mb-2'>Email</h2>
            <p className='text-gray-400'>basnetmanoj557@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
