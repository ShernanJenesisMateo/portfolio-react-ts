import './styleGlobal.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <div className=''>
        <Navbar />
      </div>
      <div className='my-border-green overflow-auto mt-16 h-full relative scroll-hidden'>
        <div className='flex items-center justify-center my-border-blue h-full' id='HeroSectionId'>
          <Hero />
        </div>
        <div className='flex items-center justify-center my-border-green' id='AboutSectionId'>
          <About />
        </div>
        <div className='flex items-center justify-center my-border-red' id='JourneySectionId'>
          <Journey />
        </div>
        <div className='flex items-center justify-center my-border-blue py-20' id='ProjectsSectionId'>
          <Projects />
        </div>
      </div>
    </div>

  );
}

export default App;