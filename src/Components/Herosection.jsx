import React from 'react'
import PAgenav from './PAgenav'
import heromainimg from "../Assets/Images/heromainimg.webp";
import heroaero from "../Assets/Images/heroaero.png";
import pagelogo from "../Assets/Images/about-text.webp";
import herobabydargon from "../Assets/Images/herobabydargon.png";
import herobabydargon2 from "../Assets/Images/herobabydargon2.png";
import cloud2 from "../Assets/Images/Group 1.png";
import cloud1 from "../Assets/Images/cloud.png";
const Herosection = () => {
    return (
        <div className=' bg-[url(../src/Assets/Images/hersectionbg.webp)] bg-cover bg-left md:bg-100% md:bg-center min-h-[85vh] md:min-h-110 bg-no-repeat relative overflow-hidden '>
            <img src={cloud1} alt="" className=' left-0 top-[20%] absolute z-0 576:max-w-[177px] max-w-[100px]'/>
            <img src={cloud2} alt="" className=' right-[1.5%] top-[10%] absolute z-[0] 576:max-w-[172px] max-w-[100px]'/>
            <img src={herobabydargon} alt="" className=' absolute right-[7%] babydargon-footer bottom-[11%] z-[1] max-w-[120px] 576:max-w-[211px] ' />
            <img src={herobabydargon2} alt="" className=' absolute right-[39%] bottom-[18%] z-0 animation-hero hidden md:block' />
            <PAgenav />
            <div className=' max-w-[1140px] mx-auto px-3 min-h-[80vh] md:min-h-[90vh]'>
                <div className=' flex flex-wrap 576:flex-row -mx-3 items-end mt-[83px] flex-col-reverse relative z-[1]'>
                <div className=' w-full 576:w-1/2 px-3 mt-[20px] 576:mt-0'>
<img src={heroaero} alt="" className=' mx-auto max-w-[300px] 576:max-w-[394px] w-full'/>
                </div>
                <div className=' w-full 576:w-1/2 px-3'>
<img src={heromainimg} alt="" className=' hidden 576:block' />
<img src={pagelogo} alt=""  className=' block 576:hidden max-w-[320px] w-full mx-auto  576:pt-[92px]'/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection