import React from 'react'
import "./Collection.css"

export const Collection = () => {
 
  return (
    <div className='collection_container'>

        <div  className='collection_men'>
            <img className='collection_men_img'  src="https://images.unsplash.com/photo-1506638794690-bbea5c6f0ab7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='men_image' />
            <div class="middle">
              <div class="hovertext">MEN</div>
            </div>
        </div>

        <div  className='collection_women'>
            <img className='collection_women_img' src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="female_image"/>
            <div class="middle">
              <div class="hovertext">WOMEN</div>
            </div>
        </div>

    </div>
  )



}





