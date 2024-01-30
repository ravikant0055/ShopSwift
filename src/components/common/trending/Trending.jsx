import React, { useState } from 'react'
import "./Trending.css"
import Slider from "react-slick";
import TrendCard from "./TrendCard"
import { Data } from './Data';

const Trending  = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

      const [isPopupVisible, setPopupVisibility] = useState(false);

      const handleButtonClick = () => {
        setPopupVisibility(!isPopupVisible);
      };

  return (
    <div className="main_trending_container">
    <div className="trending_title">
      <h1>Trending</h1>
    </div>
    <div className="trending_container">
      <Slider {...settings}>
        { 
          Data.map((data)=>(
            data.trending &&
            (<TrendCard
        imageSrc={data.imageSrc}
        title={data.title}
        subtitle={data.subtitle}
        price={data.price}
        priceDis = {data.priceDis}
        discount={data.discount}
            
      />
            )
          ))
        }
      </Slider>
    </div>
  </div>
  )
}

export default Trending;