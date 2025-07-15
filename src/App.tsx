// import React, { useEffect, useRef, useState } from 'react';

// import './styleGlobal.css';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Journey from './components/Journey';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import BgBlobs from './assets/BgBlobs';


// function App() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       console.log('User is scrolling in the main-section-scroll div');
//     };

//     const div = scrollRef.current;
//     if (div) {
//       div.addEventListener('scroll', handleScroll);
//     }

//     // Cleanup event listener on component unmount
//     return () => {
//       if (div) {
//         div.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

//   return (
//     <div className="App h-screen flex flex-col relative">
//       <div className="">
//         <Navbar />
//       </div>
//       {/* <div className="main-section-scroll overflow-y-auto overflow-x-hidden mt-16 h-full relative"> */}
//       <div
//         className="main-section-scroll overflow-y-auto overflow-x-hidden mt-16 h-full relative"
//         ref={scrollRef} // Attach ref to the div
//       >
//       <BgBlobs />
//         <div className="flex items-center justify-center h-full relative" id="HeroSectionId">
//           <Hero />
//         </div>
//         <div className="flex items-center justify-center relative" id="AboutSectionId">
//           <About />
//         </div>
//         <div className="flex items-center justify-center relative" id="JourneySectionId">
//           <Journey />
//         </div>
//         <div className="flex items-center justify-center py-20 relative" id="ProjectsSectionId">
//           <Projects />
//         </div>
//         <div className="flex items-center justify-center mt-20 bg-base-200 relative" id="FooterSectionId">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import './styleGlobal.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Background from './assets/Background';

function App() {
  return (
    <div className="App h-screen flex flex-col relative">
      <Background />
      <div className="">
        <Navbar />
      </div>
      <div className="main-section-scroll overflow-y-auto overflow-x-hidden mt-16 h-full relative">
        <div className="flex items-center justify-center h-full relative " id="HeroSectionId">
          <div className='w-full mb-20'>
            test
            <Hero />
          </div>
        </div>
        <div className="flex items-center justify-center relative" id="AboutSectionId">
          <About />
        </div>
        <div className="flex items-center justify-center relative" id="JourneySectionId">
          <Journey />
        </div>
        <div className="flex items-center justify-center py-20 relative" id="ProjectsSectionId">
          <Projects />
        </div>
        <div className="flex items-center justify-center mt-20 bg-base-200 relative" id="FooterSectionId">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

