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
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: false,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        //]
      };

  return (
    <div className="container">
      <div className="container_title">
        <h1>Categories</h1>
      </div>
      <div className="categories_container">
        <Slider {...settings}>
          <div>
            <img src={process.env.PUBLIC_URL + '/images/cat_image1.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image2.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image3.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image4.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image5.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image6.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image7.png'} />
          </div>
          <div>
          <img src={process.env.PUBLIC_URL + '/images/cat_image8.png'} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
