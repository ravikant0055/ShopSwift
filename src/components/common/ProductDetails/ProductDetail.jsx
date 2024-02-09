import React from 'react'
import "./ProductDetail.css"
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

const ProductDetail = () => {
  return (
    <div className='product-mainContainer'>
      <div className='product-imgDiv'>
        
      <div className="top-image w-[700px]">
        <InnerImageZoom 
          src={process.env.PUBLIC_URL + '/images/men.png'} 
          zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} 
          zoomType="hover"
          hideCloseButton="true"
          hideHint="true"
        />
      </div>
      
      <div className="image-grid">
        <div className="grid-item">
           <InnerImageZoom src={process.env.PUBLIC_URL + '/images/men.png'} zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} zoomType="hover" hideCloseButton="true" hideHint="true" />
        </div>
        <div className="grid-item">
           <InnerImageZoom src={process.env.PUBLIC_URL + '/images/men.png'} zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} zoomType="hover" hideCloseButton="true" hideHint="true" />
        </div>
        <div className="grid-item">
           <InnerImageZoom src={process.env.PUBLIC_URL + '/images/men.png'} zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} zoomType="hover" hideCloseButton="true" hideHint="true" />
        </div>
        <div className="grid-item">
           <InnerImageZoom src={process.env.PUBLIC_URL + '/images/men.png'} zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} zoomType="hover" hideCloseButton="true" hideHint="true" />
        </div>
        <div className="grid-item">
           <InnerImageZoom src={process.env.PUBLIC_URL + '/images/men.png'} zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} zoomType="hover" hideCloseButton="true" hideHint="true" />
        </div>
        <div className="grid-item">
           <InnerImageZoom src={process.env.PUBLIC_URL + '/images/men.png'} zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} zoomType="hover" hideCloseButton="true" hideHint="true" />
        </div>
        
        

      </div>
      </div>
      
    </div>
  )
}

export default ProductDetail