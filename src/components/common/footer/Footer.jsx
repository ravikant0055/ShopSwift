import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../assets/logowhite.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { RiPaypalFill } from "react-icons/ri";
import { SiPaytm } from "react-icons/si";

function Footer() {
  return (
    <div className='w-full h-full md:h-[500px] bg-black '>
        
        {/* upper div */}
        <div className='md:flex p-7 justify-between'>
          
          {/* logo / social link */}
          <div className='flex md:flex-col items-center md:items-start md:gap-0 gap-9'>
          
           <div className="w-[160px]">
            <Link to="/" >
             <img  src={logo} alt='logo' />
            </Link>
           </div>

           <div className='flex md:gap-9 gap-5 mt-2'>
             <Link to='/'><FaInstagram className='text-white text-2xl md:text-3xl '/></Link>
             <Link to='/'><FaFacebook className='text-white text-2xl md:text-3xl '/></Link>
             <Link to='/'><FaXTwitter className='text-white text-2xl md:text-3xl '/></Link>
             <Link to='/'><FaPinterest className='text-white text-2xl md:text-3xl '/></Link>
           </div>

          </div>

          {/* content div */}
          <div className='flex flex-col md:flex-row gap-6 md:gap-20 md:md:m-[50px]'>
              <div className='text-white flex flex-col '>
                <h1 className='font-bold mb-2'>SHOP</h1>
                <Link className='hover:text-gray-300' to=''>Special price</Link>
                <Link className='hover:text-gray-300' to=''>SpongeBob</Link>
                <Link className='hover:text-gray-300' to=''>Tokidoki</Link>
                <Link className='hover:text-gray-300' to=''>Pokemon</Link>
                <Link className='hover:text-gray-300' to=''>Disney</Link>
                <Link className='hover:text-gray-300' to=''>Marvel</Link>
              </div>

              <div className='text-white flex flex-col '>
                <h1 className='font-bold mb-2'>TRENDING</h1>
                <Link className='hover:text-gray-300' to=''>Acosta Collection</Link>
                <Link className='hover:text-gray-300' to=''>Oversized Shirt</Link>
                <Link className='hover:text-gray-300' to=''>Oversized T-shirt</Link>
                <Link className='hover:text-gray-300' to=''>Bottoms Women</Link>
                <Link className='hover:text-gray-300' to=''>Hoddies</Link>
                <Link className='hover:text-gray-300' to=''>Jackets</Link>
              </div>

              <div className='text-white flex flex-col '>
                <h1 className='font-bold mb-2'>HELP</h1>
                <Link className='hover:text-gray-300' to=''>Wishlist</Link>
                <Link className='hover:text-gray-300' to=''>Conditions</Link>
                <Link className='hover:text-gray-300' to=''>Return</Link>
                <Link className='hover:text-gray-300' to=''>Privacy Policy</Link>
                <Link className='hover:text-gray-300' to=''>About us</Link>
                <Link className='hover:text-gray-300' to=''>Contact</Link>
              </div>
          </div>  

        </div>

        <hr className='mx-4 md:my-7 my-3'/>

        {/* lower div */}
        <div className='p-7 gap-7 flex flex-col md:flex-row justify-between'>
  
          <h1 className='text-white' >© SwiftShop 2024. All rights reserved. </h1>

          <div className='flex md:gap-9 gap-5'>
           <Link to='/'><FaCcVisa className='text-white text-3xl '/></Link>
           <Link to='/'><FaCcMastercard className='text-white text-3xl '/></Link>
           <Link to='/'><RiPaypalFill className='text-white text-3xl '/></Link>
           <Link to='/'><FaAmazonPay className='text-white text-3xl  '/></Link>
           <Link to='/'><FaGooglePay className='text-white text-3xl  '/></Link>
           <Link to='/'><SiPaytm className='text-white text-3xl  '/></Link>
          </div>

        </div>

    </div>
  )
}

export default Footer;