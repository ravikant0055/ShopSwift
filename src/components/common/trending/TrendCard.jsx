import React, { useState } from 'react';
import "./Trending.css"
import PopupForm from '../PopupForm';

const TrendCard = ({ imageSrc, title, subtitle, price, discount ,priceDis}) => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [isDivVisible, setDivVisibility] = useState(false);


  const handleMouseEnter = () => {
    setPopupVisibility(true);
  };

  const handleMouseLeave = () => {
    setPopupVisibility(false);
  };

  const handleButtonClick = () => {
    setDivVisibility(!isDivVisible);
  };

  isDivVisible ? document.body.style.overflowY = 'hidden' : (document.body.style.overflow = 'auto') ;


  return (
    <div className="trend-img" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img className={`trend_img_main ${isPopupVisible ? 'hovered' : ''}`} src={process.env.PUBLIC_URL + imageSrc} alt={title} />
      <h1 className={isPopupVisible ? 'hovered' : ''}>{title}</h1>
      <h4 className={isPopupVisible ? 'hovered' : ''}>{subtitle}</h4>
      <div className='flex'>
        <del><h3 className={isPopupVisible ? 'hovered' : ''}>{price}</h3></del>
        <h3 className={`${isPopupVisible ? 'hovered' : ''} font-bold text-red-600` }>{priceDis}</h3>
      </div>
      
      <h2 className={isPopupVisible ? 'hovered' : ''}>{discount}</h2>
      
        
          {isDivVisible &&
            <PopupForm hideDiv={setDivVisibility} />
          }
        
      
      {(isPopupVisible || isDivVisible) && <button className='' onClick={handleButtonClick}>Select Options</button>}

    </div>
  );
};

export default TrendCard;