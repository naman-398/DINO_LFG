import logo from './logo.svg';
import './App.css';
import Herosection from './Components/Herosection';
import ABoutsection from './Components/ABoutsection';
import Tokenomicssection from './Components/Tokenomicssection';
import Ulitiltysection from './Components/Ulitiltysection';
import Roadmapsection from './Components/Roadmapsection';
import Accordian from './Components/Accordian';
import Footersection from './Components/Footersection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Loader from './Components/Loader';
import Backtotop from './Components/Backtotop';
function App() {
  useEffect(() => {
    AOS.init(
      {once:true,
      duration:2000,}
    );
  }, [])
  return (
    <div className='bg-[#0A4740]'>
      <Loader/>
      <Backtotop/>
      <Herosection/>
      <ABoutsection/>
      <Tokenomicssection/>
      <Ulitiltysection/>
      <Roadmapsection/>
      <Accordian/>
      <Footersection/>
    </div>
  );
}

export default App;
