import React from 'react'
import "./Collection.css"

export const Collection = () => {
  return (
    <div className='h-[440px] mt-20 mb-10 sm:mt-20 md:mb-30 flex flex-col sm:flex-row justify-center items-center collection_container'>
        <div  className='mb-4 sm:mb-0 sm:mr-4 md:mr-8 lg:mr-12 collection_men'>
            <img className='w-full h-auto sm:w-[300px] lg:w-[400px] xl:w-[500px]'  src={process.env.PUBLIC_URL + '/images/men.png'} alt='men_image' />
        </div>
        <div className='mb-4 sm:mb-0 sm:mr-4 md:mr-4 collection_women'>
            <img className='w-full h-auto sm:w-[300px] lg:w-[400px] xl:w-[500px]' src={process.env.PUBLIC_URL + '/images/female.png'} alt="female image"/>
        </div>
    </div>
  )



}





