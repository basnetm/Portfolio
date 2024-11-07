import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Techno from './component/Techno';
import Experience from './component/Experience';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Main container */}
      <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>

        {/* Background layer */}
        <div className="fixed top-0 -z-10 h-full w-full"><div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Background gradient */}
        </div>

        {/* Content container */}
        <div className="container mx-auto">
          {/* Navbar component */}
          <Navbar />
          {/* Hero component */}
          <Hero />
          <About />
          <Techno />
          <Experience />
          <Project/>
          <Contact/>
        </div>

      </div>
    </>
  );
}

export default App;
