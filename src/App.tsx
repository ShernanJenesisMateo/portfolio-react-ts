// import './styleGlobal.css';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Journey from './components/Journey';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App h-screen flex flex-col">
//       <div className=''>
//         <Navbar />
//       </div>
//       <div className='overflow-auto mt-16 h-full relative scroll-hidden'>
//         <div className='flex items-center justify-center h-full' id='HeroSectionId'>
//           <Hero />
//         </div>
//         <div className='flex items-center justify-center' id='AboutSectionId'>
//           <About />
//         </div>
//         <div className='flex items-center justify-center' id='JourneySectionId'>
//           <Journey />
//         </div>
//         <div className='flex items-center justify-center py-20' id='ProjectsSectionId'>
//           <Projects />
//         </div>
//         <div className='flex items-center justify-center mt-20 bg-base-200' id='FooterSectionId'>
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
import BgBlobs from './assets/BgBlobs';


function App() {
  return (
    <div className="App h-screen flex flex-col relative">
      <div className="">
        <Navbar />
      </div>
      <div className="overflow-auto mt-16 h-full relative">
      <BgBlobs />
        <div className="flex items-center justify-center h-full relative" id="HeroSectionId">
          <Hero />
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
