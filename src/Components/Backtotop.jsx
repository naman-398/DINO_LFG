import React, { useState } from 'react'
import { Backtop } from '../Pagesvg/Icon';

const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  return (
    <div>
    <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[20px] right-[20px] z-[60]`}
    onClick={scrollToTop}
    style={{ display: isVisible ? 'block' : 'none',}} >
        <div className='w-[30px] h-[30px] 450:w-[50px] p-[7px] 450:p-0 450:h-[50px] rounded-full bg-[#D45B07] flex justify-center items-center'>
<Backtop/>
</div>
</button>
</div>
  )
}

export default Backtotop