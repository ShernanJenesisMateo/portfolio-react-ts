import './styleGlobal.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <div className='flex-none'>
        <Navbar />
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <Hero />
      </div>
    </div>
  );
}

export default App;