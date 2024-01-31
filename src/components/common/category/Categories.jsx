import React from "react";
import "./Categories.css";
import Slider from "react-slick";
import { Data } from "./Data";

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
            {
              Data.map((data)=>(
                <div className="cat-img">
            <img className="cat_img_main" src={process.env.PUBLIC_URL + data.imageSrc} />
            <h1>{data.title}</h1>
          </div>
              ))
            }
        </Slider>
      </div>
    </div>
  );
};
