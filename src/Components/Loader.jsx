import React, { useEffect, useState } from 'react'
import herobabydargon from "../Assets/Images/herobabydargon.png";
const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 4500); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
  return (
    <div>
    <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
        <div className='flex items-center justify-center h-screen relative'>
            <div className=' flex flex-col justify-center sm576:gap-[20px] items-center '>
             
           <h1 className='text-[30px] 576:text-[50px] font-chewy font-bold' data-aos="zoom-in">
           <span className="text-[#8EC627]">D</span>
                <span className="text-[#FBA11D]">I</span>
                <span className="text-[#23AAAC]">N</span>
                <span className="text-[#D45B07]">O</span>
                <span className="text-[#FB5352]">_</span>
                <span className="text-[#8EC627]">L</span>
                <span className="text-[#FBA11D]">F</span>
                <span className="text-[#23AAAC]">G</span>
           </h1>
           <img src={herobabydargon} alt="" className=' absolute right-[7%] babydargon-footer bottom-[2%] z-[1] max-w-[120px] 576:max-w-[211px] ' />
           </div>
        </div>
    </div>
</div>
  )
}

export default Loader