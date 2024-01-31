import React, { useState } from 'react'
import Data from './Data';
import Product from './Product';
import Buttons from './Buttons';
import FilterSection from './FilterSection'
import Sort from './Sort';

const ProductItems = () => {

  const [item, setItem] = useState(Data);  
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <>
      <div className="container-fluid flex">
        {/* Filter Section */}
        <div>
            <FilterSection/>
            <Buttons
            filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}
          />
        </div>

        <section>
            {/* sorting and heading */}
            <div>
                <h1 className="col-12 text-gray-600 text-4xl px-8 my-3 fw-bold font-bold ">Women</h1>
                <Sort item={item}/>
            </div>
            
            {/* product list */}
            <div>
               <Product item={item}/> 
            </div>
        </section>

      </div>
    </>
  )
}

export default ProductItems;