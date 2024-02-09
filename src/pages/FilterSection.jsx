import Data from './Data';
import React, { useState } from 'react'

const FilterSection = () => { 

  const [allData, setAllData] = useState(Data);

  // get uniqiue data from each field
  const getUniqueData = (Data, Property) => {
      let mydata = Data.map((val)=>{
        return val[Property];
      });
      mydata = [...new Set(mydata)];
      console.log(mydata);
      return mydata
  }

  const categorydata = getUniqueData(allData,"title");
  const colorsdata = getUniqueData(allData,"color");
  console.log(categorydata)
  

  return (
    <div className='p-3 flex flex-col gap-10'>
        <h1 className='font-bold text-gray-800 text-lg'>FILTERS</h1>

        {/* Categories */}
        <div>
            <h1 className='font-bold text-[15px] text-gray-600'>CATEGORIES</h1>
            <ol>
            {
              categorydata.map(val => (
                <li className='text-[12px] mt-1 hover:text-red-500'>{val}</li>
              ))
            }
            </ol>
        </div>
        
        {/* Color */}
        <div>
            <h1 className='font-bold text-[15px] text-gray-600'>COLORS</h1>
            {
              colorsdata.map((cval)=>{
                return (
                      <button 
                        type='butoon' 
                        className={`border border-gray-400 w-5 h-5 rounded-full m-1 hover:opacity-50`} 
                        style={{backgroundColor: cval}}
                      ></button>
                )})
            }
        </div>
         
        {/* price range */}
        <div>
            <h1 className='font-bold  text-[15px] text-gray-600'>PRICE</h1>
            <p>$2000</p>
            <input
              type='range'
              name='price'
              min='10'
              max='100'
            />
        </div>
         
        <div className='text-center'> 
           <button className='bg-red-600 text-white px-5 py-2 rounded-xl w-[150px] hover:bg-red-400'>Clear Filter</button>
        </div> 
        
    </div>
  )
}

export default FilterSection;