import React from "react";
import "./Categories.css";
import Slider from "react-slick";

export const Categories = () => {

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

  return (
    <div className="main_container">
      <div className="container_title">
        <h1>Categories</h1>
      </div>
      <div className="categories_container">
        <Slider {...settings}>
          <div className="cat-img">
            <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image1.png'} />
            <h1>MEN SWEATSHIRT</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image2.png'} />
          <h1>WOMEN SWEATSHIRT</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image3.png'} />
          <h1>WOMEN BOTTOMS</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image4.png'} />
          <h1>MEN BOTTOMS</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image5.png'} />
          <h1>WOMEN BASICS</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image6.png'} />
          <h1>WOMEN OVERSIZED-SHIRT</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image7.png'} />
          <h1>WOMEN T-SHIRT</h1>
          </div>
          <div className="cat-img">
          <img className="cat_img_main" src={process.env.PUBLIC_URL + '/images/cat_image8.png'} />
          <h1>WOMEN PRINTED-TSHIRT</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};
