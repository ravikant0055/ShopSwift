import React, { useState } from 'react'
import Data from './Data';
import Product from './Product';
import Buttons from './Buttons';
import FilterSection from './FilterSection'
import Sort from './Sort';
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";


const ProductItems = () => {

  const [item, setItem] = useState(Data);  
  // const menuItems = [...new Set(Data.map((Val) => Val.category))];
  // const filterItem = (curcat) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === curcat;
  //   });
  //   setItem(newItem);   
  // };

  return (
    <>
      <div className="container-fluid flex mt-7">
        {/* Filter Section */}
        <div className='hidden  md:block w-[20%] '>
            <FilterSection item={item}/>
        </div>

        <section className='md:w-[80%] w-full ' >
            {/* sorting and heading */}
            <div className='px-5 md:px-[30px] '>
                <h1 className="col-12 text-gray-600 text-4xl mb-5 fw-bold font-bold ">Women</h1>
                <Sort item={item}/>
            </div>
            
            {/* product list */}
            <div className='mt-7'>
               <Product item={item}/> 
               
               {/* pagination */}
               <div className='flex items-center p-3 gap-4 '>
                    <div className='border-2'>
                       <HiOutlineArrowLongLeft className=' text-3xl px-1 w-[70px] text-gray-400 hover:text-gray-700 transition-transform duration-300 transform hover:-translate-x-1'/>
                    </div>
                     
                     <p>1</p>
                    
                    <div className='border-2'>
                       <HiOutlineArrowLongRight className=' text-3xl px-1 w-[70px] text-gray-400 hover:text-gray-700 transition-transform duration-300 transform hover:translate-x-1'/>
                    </div>
                    
               </div>
            </div>
        </section>

      </div>
    </>
  )
}

export default ProductItems;