import React, { useEffect, useRef, useState } from 'react'
import CardForm from './productDetails/CardForm'
import { RxCross2 } from "react-icons/rx";

function PopupForm({hideDiv}) {
    const divRef = useRef(null);
    const [applyPadding, setApplyPadding] = useState(0)
  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      console.log('Right position:', rect.right);
      console.log(window.innerWidth)
      setApplyPadding(rect.right)
    }
  }, []);
  return (
    <div className={`option-popup ${window.innerWidth<applyPadding && 'right-5'}`} ref={divRef}>
        {/* <div className='fixed text-red-500 text-2xl top-0'>Hello</div> */}
        <CardForm full={false} />
        <div className='absolute right-0 top-0 p-5 '>
            <button className='text-xl cursor-pointer text-gray-400 hover:text-black' onClick={() => hideDiv(false)}>
                <RxCross2 />
            </button>
        </div>
    </div>
  )
}

export default PopupForm