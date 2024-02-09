import React, { useState } from 'react'
import { LiaFilterSolid } from "react-icons/lia";
import FilterSection from './FilterSection';

const Sort = ({item}) => {
 const [showFilter, setFilter] = useState(false);
 

  return (
    <div className='flex justify-between'>
       
       {/* Available product and mobile filter button */}
       <div className='flex flex-col gap-3'>
         <p className='font-semibold text-gray-500'>{`${item.length} Products Available`}</p>
         <div onClick={() => {setFilter(true)}} className='flex gap-0.5 items-center w-content md:hidden hover:opacity-70'>
            <LiaFilterSolid/>
            <p className='font-bold text-gray-700'>FILTER</p>
         </div> 
       </div>

       {/* side filter */}
       <div className={` bg-red-800 w-full h-full z-50 ${showFilter?'block':'hidden'}`}>
             <FilterSection/>
       </div>

        {/* sort button */}
        <div className='flex flex-col justify-end'>
            <form>
                <label htmlFor='sort'>Sort by:</label>
                <select  name='sort' id='sort' className='font-semibold border-gray-500'>
                   <option value="lowest">Price(lowest)</option>
                   <option value="higest">Price(highest)</option>
                   <option value="az">Price(a-z)</option>
                   <option value="za">Price(z-a)</option>
                </select>
            </form>
        </div>


    </div>
  )
}

export default Sort;