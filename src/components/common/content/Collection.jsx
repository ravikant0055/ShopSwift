import React from 'react'
import "./Collection.css"

export const Collection = () => {
 
  return (
    <div className='collection_container'>
        <div  className='collection_men'>
            <img className='collection_men_img'  src={process.env.PUBLIC_URL + '/images/men.png'} alt='men_image' />
        </div>
        <div  className='collection_women'>
            <img className='collection_women_img' src={process.env.PUBLIC_URL + '/images/female.png'} alt="female image"/>
        </div>
    </div>
  )



}





