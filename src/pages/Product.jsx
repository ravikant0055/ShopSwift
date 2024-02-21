import React from "react";
import TrendCard from "../components/common/trending/TrendCard";
import "../components/common/trending/Trending.css";
// import { useDispatch, useSelector } from "react-redux";
// import Data from "./Data";
// import { setProductDetails } from "../redux/slice/ProductDetailsSlice";

const Product = ({ item }) => {
  
  // const {products} = useSelector((state)=> state.products);
  // const dispatch = useDispatch(Data);

  // useEffect(()=>{
  //   console.log('in product page')
  //   dispatch(setProductDetails(Data));
  // }, [])

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {item.map((data,index) => (
            <div key={index} className="w-1/2 md:w-1/4 md:px-4">
              <TrendCard
                imageSrc={data.imageSrc}
                title={data.title}
                subtitle={data.subtitle}
                price={data.price}
                priceDis={data.priceDis}
                discount={data.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
