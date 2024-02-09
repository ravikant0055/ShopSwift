import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import Slider from "react-slick";
import { Data } from "./Data";

const ProductDetail = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isSmallScreen) {
    return (
      <div className="product-mainContainer">
        <div className="product-imgDiv">
          <div className="top-image">
            <img
              src={process.env.PUBLIC_URL + "/images/men.png"}
              alt="Top Image"
            />
          </div>
          <div className="image-grid">
          {Data.map((data) => (
            
              <div className="grid-item">
                <img
                  src={process.env.PUBLIC_URL + data.imageSrc}
                  alt="Image 1"
                />
              </div>
            
          ))}
          </div>
        </div>

        <div className="product-detailDiv">
          
        </div>
      </div>
      
    );
  }

  const settings = {
    customPaging: function (i) {
      return (
        <a className="slick-thumb-item">
          <img className="slider-img" src={`${process.env.PUBLIC_URL}/images/cat_image${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {Data.map((data,index) => (
          <div  key={index}>
            <img  alt={`Image ${index + 1}`}  src={process.env.PUBLIC_URL + data.imageSrc} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductDetail;
