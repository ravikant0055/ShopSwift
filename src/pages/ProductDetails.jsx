import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setProductDetails } from "../redux/slice/ProductDetailsSlice";
import Expandables from "../components/common/productDetails/Expandables";
import CardForm from "../components/common/productDetails/CardForm";

function ProductDetails({ images, type }) {
  let data;
  const dispatch = useDispatch();
  function call() {
    dispatch(
      setProductDetails({
        product_id: 1,
        details: ["first", "second", "third"],
        descriptions: "description",
        fabric: "cotton",
        care_instructions: "wash",
      })
    );
  }

  data = useSelector((state) => state.productDetails);
  const { product_id, ...dataToSend } = data.details;

  return (
    <div className="productDetails_wrapper p-4 w-auto lg:p-14">
      {/* give padding for full website */}
      <div className="productDetails_summary 
        lg:flex lg:gap-14">
        <div className="productDetails_slick mb-6 lg:flex-5">
            <img 
                src='https://assets.bonkerscorner.com/uploads/2024/01/23172054/disney-shere-oversized-tshirt-2.jpg' 
                alt='product_img' 
                className="md:h-screen md:w-screen lg:w-auto lg:h-auto"
            />
        </div>

        <div className="productDetails_productSummary lg:flex-4">
          <div className="">
            <span className="text-[13px] font-[600] text-gray-500 md:text-[15px]">
              MEN & <span className="font-[600] md:text-[15px]">Oversized T-Shirt</span>
            </span>
            <h1
              className="text-[30px] my-6
                    md:text-[40px]
                    "
            >
              Disney Shere Oversized T-Shirt
            </h1>
          </div>
          <div className="flex items-center mb-2">
            <span
              className=" text-[18px]  text-red-700 font-bold
                    md:text-[22px]
                    "
            >
              ₹{(1599 * 40) / 100}{" "}
            </span>

            <del
              className="mx-3 text-[18px]
                    md:text-[22px]
                    "
            >
              ₹1,599.00{" "}
            </del>

            <span
              className="text-white bg-red-600 ml-3 text-[14px] px-[15px] py-[8px] font-[700] rounded-md
                    md:text-[16px]
                    
                    "
            >
              -27% OFF
            </span>
          </div>

          <div className="">
            <CardForm />
          </div>

          <div className="my-2">
            <span
              className="text-gray-500 text-sm
                    md:text-base
                    "
            >
              SKU: 8904413460265
            </span>
          </div>

          <div className="flex items-center gap-5 mb-6 md:gap-7">
            <h5
              className="font-medium
                    md:text-base
                    "
            >
              Share :
            </h5>
            <FaTwitter className="text-gray-400 md:text-lg" />
            <FaFacebookF className="text-gray-400 md:text-lg" />
            <FaLinkedinIn className="text-gray-400 md:text-lg" />
            <FaPinterestP className="text-gray-400 md:text-lg" />
            <IoMailOutline className="text-gray-400 md:text-lg" />
          </div>
          <div className="productDetails_description">
            <div>
              {<Expandables data={Object.entries(dataToSend)} />}
              <button onClick={() => call()}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
