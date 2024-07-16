import './styleGlobal.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App flex flex-col">
      <div className='flex-none absolute w-full'>
        <Navbar />
      </div>
      <div className='h-screen'>
        <div className='flex items-center justify-center h-full'>
          <Hero />
        </div>
        <div className='flex justify-center h-4/5 my-border-green' id='AboutSectionId'>
          <About />
        </div>
        <div className='flex justify-center h-4/5' id='JourneySectionId'>
          <Journey />
        </div>
        <div className='flex justify-center h-4/5' id='ProjectsSectionId'>
          <Projects />
        </div>
      </div>

    </div>
  );
}

export default App;