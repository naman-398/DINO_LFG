import React from 'react'
import dinolpg from "../Assets/Images/DinoLFG.webp";
import s2treedargon from "../Assets/Images/s2treedargon.webp";
const ABoutsection = () => {
    return (
        <div className=' bg-[#09655A] md:pt-[35px] 576:pt-[15px] 992:pt-[76px] pb-[17px] relative '>
            <img src={s2treedargon} alt="" className=' absolute right-0 bottom-[-20%] z-[1] max-w-[220px] opacity-60 md:opacity-100 md:max-w-[493]' />
            <div className=' max-w-[1140px] mx-auto px-3 relative z-[2]'>
                <div className=' justify-center font-chewy font-normal text-[48px] 450:text-[64px] leading-[normal] 576:leading-[83.64px] text-[#fff] flex items-center gap-[10px] 576:gap-[22px] mx-auto'   data-aos="zoom-in">About
                    <img src={dinolpg} alt="dinolpg" className=' 450:max-w-[281px] max-w-[200px] 450:max-h-[66px] ' /></div>
                <p className=' font-balsamiq text-[20px] 576:text-[24px] text-center text-[#FFF] mt-[15px] 576:mt-[42px] font-normal leading-[normal] 576:leading-[28.8px]'   data-aos="zoom-in">$DINO is a meme coin with very strong utility.</p>
                <p className=' font-balsamiq text-[20px] 576:text-[24px] text-center text-[#FFF] mt-[8px] 576:mt-[18px] font-normal leading-[normal] 576:leading-[28.8px] max-w-[560px] mx-auto'   data-aos="zoom-in">Biggest problem of meme coins is lack of utility and usecase,  <span className=' font-bold'><span className=' text-[#8EC627]'>$</span><span className=' text-[#FBA11D]'>D</span><span className=' text-[#23AAAC]'>I</span><span className=' text-[#D45B07]'>N</span><span className=' text-[#FB5352]'>O</span></span>  is going to fix it.</p>
                <p className=' font-balsamiq text-[20px] 576:text-[24px] text-center text-[#FFF] mt-[6px] 576:mt-[10px] font-normal leading-[normal] 576:leading-[28.8px] max-w-[522px] mx-auto'   data-aos="zoom-in">We want to bring a lot of usecases and utility to $DINO holders, just sit back and relax.</p>
                <p className=' font-balsamiq text-[20px] 576:text-[24px] text-center text-[#FFF] mt-[8px] 576:mt-[14px] font-normal leading-[normal] 576:leading-[28.8px] max-w-[599px] mx-auto'   data-aos="zoom-in">In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
            </div>
        </div>
    )
}

export default ABoutsection