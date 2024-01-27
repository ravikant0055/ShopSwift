import React, { useState } from 'react'
import "./Trending.css"
import Slider from "react-slick";

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
              slidesToShow: 1,
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
        <div className="trend-img"  onMouseEnter={() => setPopupVisibility(true)} onMouseLeave={() => setPopupVisibility(false)}>
          <img className={`trend_img_main ${isPopupVisible ? 'hovered' : ''}`} src={process.env.PUBLIC_URL + '/images/trend_image1.png'} />
          <h1 className={isPopupVisible ? 'hovered' : ''}>MEN SWEATSHIRT</h1>
          <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image2.png'} />
        <h1>WOMEN SWEATSHIRT</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image3.png'} />
        <h1>WOMEN BOTTOMS</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image4.png'} />
        <h1>MEN BOTTOMS</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image5.png'} />
        <h1>WOMEN BASICS</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image6.png'} />
        <h1>WOMEN OVERSIZED-SHIRT</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image7.png'} />
        <h1>WOMEN T-SHIRT</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
        <div className="trend-img">
        <img className="trend_img_main" src={process.env.PUBLIC_URL + '/images/trend_image8.png'} />
        <h1>WOMEN PRINTED-TSHIRT</h1>
        <h4 className={isPopupVisible ? 'hovered' : ''}>Together Fu-ever Sweetshirt</h4>
          <h3 className={isPopupVisible ? 'hovered' : ''}>₹1700</h3>
          <h2 className={isPopupVisible ? 'hovered' : ''}>-33%</h2>
          <button onClick={handleButtonClick}>Select Options</button>
        </div>
      </Slider>
    </div>
  </div>
  )
}

export default Trending;