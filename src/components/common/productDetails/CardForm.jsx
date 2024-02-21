import React, { useState } from "react";
import SizeButton from "./SizeButton";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setWishlist } from "../../../redux/slice/authSlice";

function CardForm({ product_id, full = true   }) {
  const [selectedSize, setSelectedSize] = useState(null);
  const form = useForm();
  const { register, control, handleSubmit, formState, setValue, getValues } =
    form;

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };
  const { wishlist } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleWishlistClick = () => {
    //
    //api call here
    //
    dispatch(
      setWishlist(
        wishlist.includes(product_id)
          ? wishlist.filter((item) => item !== product_id)
          : [...wishlist, product_id]
      )
    );
  };
  
  return (
    <div className="cardForm_wrapper">
      <div className="cardForm_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center mb-2">
            <div className="">
              <span className="text-[12px] font-semibold">SIZE</span>
              <div className="relative">
                <div className="flex items-center space-x-2 pt-2 pb-6">
                  {["XS", "S", "M", "XL", "XXL"].map((size) =>
                    ["XS", "S", "M", "XL"].includes(size) ? size : size + "!"
                    ).map((size) => (
                    <SizeButton
                      key={size}
                      size={size}
                      selected={selectedSize === size}
                      onClick={() => {
                        setSelectedSize(size);
                      }}
                    />
                  ))}
                </div>
                {selectedSize && (
                  <span
                    className="absolute bottom-0 text-base cursor-pointer hover:font-semibold"
                    onClick={() => setSelectedSize(null)}
                  >
                    Clear
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* <div>            //confirm it first
                        <button className=''>Size Chart</button>
                    </div> */}
          <div className="">
            <div className="flex gap-5 items-center mb-5">
              <div className="border border-gray-300 flex justify-center h-11 w-full rounded-md border-2 hover:border-black">
                <button
                  className="w-full h-full flex justify-center items-center"
                  onClick={() => {
                    setValue("quantity", parseInt(getValues("quantity")) - 1);
                  }}
                  type="button"
                >
                  <FaMinus className="text-gray-500 text-[12px]" />
                </button>
                <input
                  type="number"
                  className="w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none outline-none text-center"
                  id="quantity"
                  value={1}
                  {...register("quantity")}
                />
                <button
                  className="w-full flex justify-center h-full items-center"
                  onClick={() => {
                    setValue("quantity", parseInt(getValues("quantity")) + 1);
                  }}
                  type="button"
                >
                  <FaPlus className="text-gray-500 text-[12px]" />
                </button>
              </div>
              <button
                className="group flex text-center items-center justify-center w-full border border-gray-300 h-11 rounded-md border-2 after:text-red-500 hover:border-black"
                onClick={() => {
                  handleWishlistClick();
                }}
              >
                <FaRegHeart
                  className={`text-xl mr-2 font-semibold flex pt-[2px] group-hover:text-red-500 text-gray-500  ${
                    wishlist.includes(product_id) && "hidden"
                  }`}
                />
                <FaHeart
                  className={`text-xl mr-2 font-semibold flex pt-[2px] hidden group:after:text-red-500 ${
                    wishlist.includes(product_id) && "!block text-red-500"
                  }`}
                />
                <span className="text-sm font-semibold flex ">
                  {wishlist.includes(product_id) ? "WISHLISTED" : "WISHLIST"}
                </span>
              </button>
            </div>
            <div>
              <button
                className={`border w-full text-sm border border-gray-300 font-semibold py-[13px] text-center mr-4 rounded-md mb-5 border-2 hover:border-black ${!selectedSize && '!text-gray-400'} ${!full && 'bg-black text-white'}`}
                type="submit"
                disabled={!selectedSize}
              >
                ADD TO CART
              </button>
              {full && <button
                className={`border w-full text-sm border border-gray-500 font-semibold py-[13px] text-center mr-4 rounded-md bg-black text-white ${!selectedSize && 'text-opacity-35'}`}
                type="button"
              >
                BUY IT NOW
              </button>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CardForm;
