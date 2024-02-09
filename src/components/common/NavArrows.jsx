import React from 'react'
import { CgArrowLongLeft } from "react-icons/cg";
import { CgArrowLongRight } from "react-icons/cg";


function NavArrows() {
  return (
    <div className='flex gap-2'>
        <div className='cursor-pointer transition-transform transform hover:scale-75'>
            <CgArrowLongLeft className='text-3xl' />
        </div>
        
        <div className='cursor-pointer transition-transform transform hover:scale-75'>
            <CgArrowLongRight className='text-3xl' />
        </div>
    </div>
  )
}

export default NavArrows