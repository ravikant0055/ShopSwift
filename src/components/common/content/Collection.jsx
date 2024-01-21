import React from 'react'

export const Collection = () => {
  return (
    <div className=' h-[440px] mb-10 sm:mb-20 md:mb-30 flex flex-col sm:flex-row justify-between items-center'>
        <div  className='mb-4 sm:mb-0'>
            <img className='max-w-full h-auto sm:max-h-[300px]'  src={process.env.PUBLIC_URL + '/images/men.png'} alt='men_image' />
        </div>
        <div>
            <img className='max-w-full h-auto sm:max-h-[300px]' src={process.env.PUBLIC_URL + '/images/female.png'} alt="female image"/>
        </div>
    </div>
  )



}





