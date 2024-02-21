import "./ProductDetail.css"
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import Slider from "react-slick";
import { Data } from "./Data";

const ProductDetail = () => {
   
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${process.env.PUBLIC_URL}/images/cat_image${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }


  return (
    <div className='product-mainContainer'>
      <div className='product-imgDiv hidden lg:block'>
        
        <div className="top-image flex w-[600px]">
          <InnerImageZoom 
            src={process.env.PUBLIC_URL + '/images/men.png'} 
            zoomSrc={process.env.PUBLIC_URL + '/images/men.png'} 
            zoomType="hover"
            hideCloseButton="true"
            hideHint="true"
            imgStyle={{width:'100vh'}}
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

      {/* product image for mobile screen  */}
      <div className='block lg:hidden product-smallImgDiv'>
      <Slider {...settings}>
        {Data.map((data,index) => (
          <div  key={index} className="product-slidingImgDiv">
            <img className="product-slidingImg"  alt={`Image ${index + 1}`}  src={process.env.PUBLIC_URL + data.imageSrc} />
          </div>
        ))}
      </Slider>
      </div>

    </div>
  );
}


export default ProductDetail;
