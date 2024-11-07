import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { SiCsharp, SiNodedotjs, SiJavascript, SiDjango, SiMongodb, SiGit, SiMicrosoftsqlserver } from "react-icons/si"

const Techno = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl font-bold'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {/* React Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <RiReactjsLine className='text-6xl text-blue-500 hover:scale-110 transition duration-300' />
          <p className='mt-4'>React</p>
        </div>
        
        {/* C# Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiCsharp className='text-6xl text-purple-500 hover:scale-110 transition duration-300' />
          <p className='mt-4'>C#</p>
        </div>

        {/* Node.js Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiNodedotjs className='text-6xl text-green-500 hover:scale-110 transition duration-300' />
          <p className='mt-4'>Node.js</p>
        </div>

        {/* JavaScript Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiJavascript className='text-6xl text-yellow-500 hover:scale-110 transition duration-300' />
          <p className='mt-4'>JavaScript</p>
        </div>

        {/* Django Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiDjango className='text-6xl text-green-600 hover:scale-110 transition duration-300' />
          <p className='mt-4'>Django</p>
        </div>

        {/* SQL Server Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiMicrosoftsqlserver className='text-6xl text-red-500 hover:scale-110 transition duration-300' />
          <p className='mt-4'>SSMS</p>
        </div>

        {/* MongoDB Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiMongodb className='text-6xl text-green-700 hover:scale-110 transition duration-300' />
          <p className='mt-4'>MongoDB</p>
        </div>

        {/* Git Icon */}
        <div className="rounded-2xl border-4 border-neutral-800 p-6 flex flex-col items-center bg-white/5 hover:bg-white/10 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
          <SiGit className='text-6xl text-orange-500 hover:scale-110 transition duration-300' />
          <p className='mt-4'>Git</p>
        </div>
      </div>
    </div>
  )
}

export default Techno;
