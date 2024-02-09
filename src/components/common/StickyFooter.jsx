import React, { useEffect, useState, useRef } from 'react';
import { IoIosArrowUp } from "react-icons/io";
import './StickyFooter.css'
import NavArrows from './NavArrows';

const StickyBottomDiv = React.forwardRef((props, ref) => {
  const [isSticky, setIsSticky] = useState(window.innerHeight<1024 );
  const [showCard, setShowCard] = useState(false)
  console.log(window.innerHeight)
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const isReferenceDivVisible = ref.current.getBoundingClientRect().y > windowHeight ||  ref.current.getBoundingClientRect().y <0 -ref.current.offsetHeight ;
      setIsSticky(!isReferenceDivVisible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='stickFooter_wrapper'>
      <div className={`stickFooter_elements fixed bottom-0 bg-white right-0 p-4 w-full h-[70px] flex items-center justify-center ${isSticky ? 'hidden' : 'block'} 
        md:h-24 md:justify-between md:px-4 shadow-2xl 
        lg:px-14
      `}>
        <div className='hidden md:flex justify-between w-full  md:block '>
          <h4 className='md:text-xl lg:text-3xl font-bold w-full'>Disney Shere Oversized T-shirt</h4>
          <div className='hidden md:block md:flex md:text-center md:items-center md:mr-14'>
            <del className='text-red-700 font-bold text-[18px] '>$900</del>
            <span className='font-bold text-[16px] ml-3 underline text-gray-700'>${900-(900*27)/100}</span>
            <span
              className="text-white bg-red-600 ml-3 text-[10px] px-[15px] py-[8px] font-[700] rounded-md"
            >
              -27%
            </span>
          </div>
        </div>

        <div className='items-center gap-14 w-full md:w-auto md:block md:flex '>
          <div className=' bg-black h-[46px] md:w-56 rounded-md w-full'>
            <button 
              className=' text-white h-full text-[12px] font-semibold flex justify-center items-center w-full
                md:text-[14px]'
              onClick={() => {setShowCard(!showCard)}}
            >
                SELECT OPTIONS
                <IoIosArrowUp className={`cursor-pointer text-base ml-3 `}
                style={{ transform: `rotate(${showCard ? 0 : 180}deg)`, transition: 'all 0.25s' }}
                />
            </button>
          </div>
          <div className='hidden md:block'>
            <NavArrows />
          </div>
        </div>
      </div>
    </div>
  );
});

export default StickyBottomDiv;
