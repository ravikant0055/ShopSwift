import React, { useState } from 'react'
import "./Trending.css"
import Slider from "react-slick";
import TrendCard from "./TrendCard"

const Trending  = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: false,
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
        
         <TrendCard
        imageSrc="/images/trend_image1.png"
        title="MEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
       <TrendCard
        imageSrc="/images/trend_image2.png"
        title="WOMEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
        <TrendCard
        imageSrc="/images/trend_image3.png"
        title="WOMEN BOTTOMS"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
        <TrendCard
        imageSrc="/images/trend_image4.png"
        title="WOMEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
        <TrendCard
        imageSrc="/images/trend_image5.png"
        title="WOMEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
        <TrendCard
        imageSrc="/images/trend_image6.png"
        title="WOMEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
        <TrendCard
        imageSrc="/images/trend_image7.png"
        title="WOMEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
        <TrendCard
        imageSrc="/images/trend_image8.png"
        title="WOMEN SWEATSHIRT"
        subtitle="Together Fu-ever Sweatshirt"
        price="₹1700"
        discount="-33%"
      />
      </Slider>
    </div>
  </div>
  )
}

export default Trending;