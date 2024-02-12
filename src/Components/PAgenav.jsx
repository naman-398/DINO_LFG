import React, { useState } from 'react'
import pagelogo from "../Assets/Images/pagelogo.webp";
import { Discord, Insta, Twitter } from '../Pagesvg/Icon';
const PAgenav = () => {
    const [show, setShow] = useState(false)
  function mobile() {
    setShow(!show)
    if (show === false) {
      document.body.classList.add('overflow_hidden')
    }
    else {
      document.body.classList.remove('overflow_hidden')
    }
  }
    return (
        <div className=' max-w-[1156px] mx-auto px-3 pt-[28px]'>
            <div className=' bg-[#FFF] border-b-[4px] border-solid max-w-[1132px] mx-auto p-[4px_7px_8px_1px] rounded-[61.1px] w-full border-b-[#000000]'>
                <div className=' flex items-center justify-between'>
                    <img src={pagelogo} alt="" className=' ps-[23px] cursor-pointer max-w-[120px] 576:max-w-[158px] ' />
                    <div className=' flex items-center gap-[15px] 992:gap-[136px]'>
                    <ul className={`${show === true ? "left-0" : "left-[-100%]"}  flex items-center gap-[15px] 992:gap-[28px] mobile-view`}>
                            <li><a href="#about" className=' font-chewy text-[18px] font-normal text-[#000] leading-[23.52px]'>About</a></li>
                            <li><a href="#toke" className=' font-chewy text-[18px] font-normal text-[#000] leading-[23.52px]'>Tokenomic</a></li>
                            <li><a href="#roadmap" className=' font-chewy text-[18px] font-normal text-[#000] leading-[23.52px]'>Roadmap</a></li>
                            <li><a href="#faq" className=' font-chewy text-[18px] font-normal text-[#000] leading-[23.52px]'>FAQ</a></li>
                            <li className=' flex items-center gap-[5px]'>
                            <a href='https://twitter.com/login' className=' 576:hidden h-[28px] 992:h-[37px] w-[28px] 992:w-[37px] border-[1px] border-solid border-[#000] rounded-full flex justify-center items-center'>
                                <Twitter />
                            </a>
                            <a  href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login" className=' 576:hidden h-[28px] 992:h-[37px] w-[28px] 992:w-[37px] border-[1px] border-solid border-[#000] rounded-full flex justify-center items-center'>
                                <Discord />
                            </a>
                            <a href="https://www.instagram.com/" className=' 576:hidden h-[28px] 992:h-[37px] w-[28px] 992:w-[37px] border-[1px] border-solid border-[#000] rounded-full flex justify-center items-center'>
                                <Insta />
                            </a></li>
                        </ul>
                        <div className=' flex items-center gap-[8px]'>
                            <a href='https://twitter.com/login' className=' hidden h-[28px] 992:h-[37px] w-[28px] 992:w-[37px] border-[1px] border-solid border-[#000] rounded-full 576:flex justify-center items-center'>
                                <Twitter />
                            </a>
                            <a  href="https://support.discord.com/hc/en-us/community/posts/360056220432-Login" className=' hidden h-[28px] 992:h-[37px] w-[28px] 992:w-[37px] border-[1px] border-solid border-[#000] rounded-full 576:flex justify-center items-center'>
                                <Discord />
                            </a>
                            <a href="https://www.instagram.com/" className=' hidden h-[28px] 992:h-[37px] w-[28px] 992:w-[37px] border-[1px] border-solid border-[#000] rounded-full 576:flex justify-center items-center'>
                                <Insta />
                            </a>
                            <button className=' bg-[url(../src/Assets/Images/navbtn.webp)] p-[6px_20px_10px_20px] bg-100% 450:bg-[unset] 450:p-[11px_36px_19px_36px] font-chewy text-[14px] 450:text-[18px] font-normal text-[#000] leading-[23.52px]'>Join Now</button>
            <button onClick={mobile} className={`${show === false ? "rotate-90" : "rotate-360"} block md:hidden relative z-[6] font-bold text-[27px] text-[#000] duration-300`}>{show === false ? "|||" : "X"}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PAgenav