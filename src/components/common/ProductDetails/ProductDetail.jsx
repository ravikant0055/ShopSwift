import React from 'react'
import "./ProductDetail.css"

const ProductDetail = () => {
  return (
    <div className='product-mainContainer'>
      <div className='product-imgDiv'>
        
      <div className="top-image">
        <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Top Image" />
      </div>
      <div className="image-grid">
        <div className="grid-item">
          <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Image 1" />
        </div>
        <div className="grid-item">
          <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Image 2" />
        </div>
        <div className="grid-item">
          <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Image 2" />
        </div>
        <div className="grid-item">
          <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Image 2" />
        </div>
        <div className="grid-item">
          <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Image 2" />
        </div>
        <div className="grid-item">
          <img src={process.env.PUBLIC_URL + '/images/men.png'} alt="Image 2" />
        </div>
        

      </div>
      </div>
      
      <div className='product-detailDiv'>

      </div>
    </div>
  )
}

export default ProductDetail