import React, { useState } from 'react';

const SizeButton = ({size, selected, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleButtonClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div>
        <button
        className={`border-[2px] text-sm border-gray-300 px-3 py-2 text-center ${selected ? '!border-black !border-[2px]' : ''} rounded-md ${size.endsWith('!') && 'border-red-200'}  `}
        disabled = {size.endsWith('!')}
        style={{ boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none' }}
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
        {size.endsWith('!') ? <del className='text-gray-300'>{size.slice(0, -1)}</del> : size}
        </button>
    </div>
  );
};

export default SizeButton;