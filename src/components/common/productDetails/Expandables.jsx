import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Expandables({ data }) {
  const [showStates, setShowStates] = useState(
    new Array(data.length).fill(false)
  );

  const handleToggle = (index) => {
    const newShowStates = [...showStates];
    newShowStates[index] = !newShowStates[index];
    setShowStates(newShowStates);
  };
  return (
    <div className="flex flex-col border-b border-gray-300">
      {data.map(([key, value], index) => (
        <div
          className="border-t border-gray-300 py-4 px-2 cursor-pointer 
                md:py-5
                "
          onClick={() => handleToggle(index)}

          key={index}
        >
          <div className="flex items-center justify-between ">
            <strong
              className="font-[500] text-sm
                        "
            >
              {(key.charAt(0).toUpperCase() + key.slice(1))
                .replace(/_/g, " ")
                .replace(/\b\w/g, (firstLetter) => firstLetter.toUpperCase())}
            </strong>
            <div
              className="cursor-pointer p-1 "
              style={{ transform: `rotate(${showStates[index] ? 0 : 180}deg)`, transition: 'all 0.25s' }}
            >
                <IoIosArrowUp className="cursor-pointer text-base " />
            </div>
          </div>

          {showStates[index] &&
            (Array.isArray(value) ? (
              <ul className="list-disc pl-6 mt-1">
                {value.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm font-[400] mt-4
                        "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p key={index} className="text-sm font-[400] mt-4  px-3">
                {value}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
}

export default Expandables;
