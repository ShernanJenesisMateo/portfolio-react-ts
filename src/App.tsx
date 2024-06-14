import './styleGlobal.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

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
        <div className='flex justify-center m-5'>
          <About />
        </div>
      </div>

    </div>
  );
}

export default App;