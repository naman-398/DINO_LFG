import React, { useState,  } from "react";
import Faq_uppr from "../Assets/Images/faq-uppr.webp";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function OpenSign({ id, open }) {
  return (
    <div className="relative ">
      <svg
        className={`${
          id === open ? "rotate-180" : ""
        } sm:w-[36px] sm:h-[36px] w-[20px] 450:w-[26px] h-[26px] duration-300`}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="18"
          transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)"
          fill="white"
        />
        <path
          d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z"
          fill="#0A4740"
        />
      </svg>
    </div>
  );
}
const Accordian = () => {
 
  const [open, setOpen] = React.useState();

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div
        id="faq"
        className="relative z-[6] bg-[#0a4740] mt-[-2px] max-sm:mt-[-60px]"
      >
        <div className="max-w-[826px] mx-auto px-3 relative z-[1] md:pt-[150px] pb-5 md:pb-[100px]">
          <div className="pt-[90px] md:pt-[130px]   pb-[12px]">
            <h2
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="text-[64px]  font-chewy leading-[normal] 576:leading-[84px] font-normal text-center mb-[20px] 576:mb-6 md:mb-[61px] text-white"
            >
              Faq{" "}
            </h2>
            <Accordion
              data-aos="zoom-in"
              data-aos-duration="2000"
              className=" border-[#fff] bg-[#09655a] border mb-[8px] 450:mb-4 sm:mb-7 rounded-[40.5px] "
              open={open === 1}
              icon={<OpenSign id={1} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className=" font-balsamiq ps-6 md:ps-[50px] pe-5 md:pe-[50px] pb-2 sm:pb-[21px] pt-2 sm:pt-[24px] text-[14px] 576:text-[16px] sm:text-xl text-start font-bold  text-white leading-[normal] 576:leading-[24px]  border-transparent"
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody className=" font-balsamiq sm:text-base text-[12px]   font-bold ps-6 md:ps-[50px] pe-5 md:pe-[50px]  leading-[160%]  text-[#fff] max-w-[880px] mt-[-1px] pb-2">
                sapien vel cursus ultricies?Maecenas laoreet, sapien vel cursus
                ultricies?Maecenas laoreet,
              </AccordionBody>
            </Accordion>
            <Accordion
              data-aos="zoom-in"
              data-aos-duration="2000"
              className=" border-[#fff] bg-[#09655a] border mb-[8px] 450:mb-4 sm:mb-7 rounded-[40.5px]  overflow-hidden "
              open={open === 2}
              icon={<OpenSign id={2} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="font-balsamiq ps-6 md:ps-[50px] pe-5 md:pe-[50px] pb-2 sm:pb-[21px] pt-2 sm:pt-[24px] text-[14px] 576:text-[16px] sm:text-xl text-start font-bold text-white leading-[normal] 576:leading-[24px] border-transparent"
              >
                {" "}
                Maecenas laoreet, sapien vel cursus ultricies?{" "}
              </AccordionHeader>
              <AccordionBody className="font-balsamiq text-[12px] sm:text-base  md:text-[16px] font-medium leading-[160%] ps-6 md:ps-[50px] pe-5 md:pe-[50px]  text-[#fff] max-w-[880px] mt-[-1px] pb-2">
                sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus
                ultricies? Maecenas laoreet,
              </AccordionBody>
            </Accordion>
            <Accordion
              data-aos="zoom-in"
              data-aos-duration="2000"
              className=" border-white bg-[#09655a] border mb-[8px] 450:mb-4 sm:mb-7 rounded-[40.5px] "
              open={open === 3}
              icon={<OpenSign id={3} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="font-balsamiq ps-6 md:ps-[50px] pe-5 md:pe-[50px] pb-2 sm:pb-[21px] pt-2 sm:pt-[24px] text-[14px] 576:text-[16px] sm:text-xl text-start font-bold text-white leading-[normal] 576:leading-[24px] border-transparent"
              >
                {" "}
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody className="font-balsamiq text-[12px] sm:text-base  md:text-[16px] font-medium leading-[160%] ps-6 md:ps-[50px] pe-5 md:pe-[50px] text-[#fff] max-w-[880px] mt-[-1px] pb-2  ">
                sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus
                ultricies? Maecenas laoreet,
              </AccordionBody>
            </Accordion>
            <Accordion
              data-aos="zoom-in"
              data-aos-duration="2000"
              className=" border-[#fff] bg-[#09655a] border mb-[8px] 450:mb-4 sm:mb-7 rounded-[40.5px] "
              open={open === 4}
              icon={<OpenSign id={4} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="font-balsamiq ps-6 md:ps-[50px] pe-5 md:pe-[50px] pb-2 sm:pb-[21px] pt-2 sm:pt-[24px] text-[14px] 576:text-[16px] sm:text-xl text-start font-bold text-white leading-[normal] 576:leading-[24px] border-transparent"
              >
                Maecenas laoreet, sapien vel cursus ultricies?{" "}
              </AccordionHeader>
              <AccordionBody className="font-balsamiq text-[12px] sm:text-base  md:text-[16px] font-medium leading-[160%] ps-6 md:ps-[50px] pe-5 md:pe-[50px] text-[#fff] max-w-[880px] mt-[-1px] pb-2  ">
                sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus
                ultricies? Maecenas laoreet,
              </AccordionBody>
            </Accordion>
            <Accordion
              data-aos="zoom-in"
              data-aos-duration="2000"
              className=" border-[#fff] bg-[#09655a] border mb-4 sm:mb-7 rounded-[43.5px]  "
              open={open === 5}
              icon={<OpenSign id={5} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(5)}
                className="font-balsamiq ps-6 md:ps-[50px] pe-5 md:pe-[50px] pb-2 sm:pb-[21px] pt-2 sm:pt-[24px] text-[14px] 576:text-[16px] sm:text-xl text-start font-bold text-white leading-[normal] 576:leading-[24px]  border-transparent"
              >
                Maecenas laoreet, sapien vel cursus ultricies?
              </AccordionHeader>
              <AccordionBody className="font-balsamiq text-[12px] z-20 mt-[-1px] sm:text-base  md:text-[16px] ps-6 md:ps-[50px] pe-5 md:pe-[50px] font-medium leading-[160%] text-[#fff] max-w-[880px]  pb-2  ">
                sapien vel cursus ultricies? Maecenas laoreet, sapien vel cursus
                ultricies? Maecenas laoreet,
              </AccordionBody>
            </Accordion>
          </div>
        </div>
        <img className="absolute !w-full top-[-2%] " src={Faq_uppr} alt="" />
      </div>
    </>
  );
};

export default Accordian;