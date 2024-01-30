import React, { useState } from 'react';
import logo from "../../../assets/logo.png";
import { Link } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-200 p-4 h-[90px] flex justify-between">

    
      {/* menu icon */}  
      <div className="  md:hidden flex">
          <button onClick={toggleMenu} className="text-black focus:outline-none focus:border-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (<path d="M6 18L18 6M6 6l12 12"></path>) : (<path d="M4 6h16M4 12h16m-7 6h7"></path>)}
            </svg>
          </button> 
      </div>
      
      {/* nav links */}
      <div className={` absolute md:relative left-0 top-20 md:top-0 w-[50%] p-4 md:w-0 h-[100%] bg-gray-200  md:flex flex-col md:flex-row md:items-center md:px-5 ${isOpen ? 'flex' : 'hidden'}`} onClick={()=>setIsOpen(false)}>
          <Link to="/men" className="text-black mx-2 my-1 md:my-0 md:px-0 py-2 text-xl font-medium hover:text-gray-600">
            Men
          </Link>
          <Link to="/women" className="text-black mx-2 my-1 md:my-0 md:px-2 py-2 text-xl font-medium hover:text-gray-600">
            Women
          </Link>
          <Link to="/kids" className="text-black mx-2 my-1 md:my-0 md:px-2 py-2 text-xl font-medium hover:text-gray-600">
            Kids
          </Link>
      </div>
    
    

      
    {/* logo code */}
      <div className="flex items-center w-[100px] md:w-[140px]">
        <Link to="/" >
          <img  src={logo} alt='logo' />
        </Link>
      </div>

    {/*side icon: profile, cart and search */}
      <div className="flex gap-5 md:gap-7 mr-3 items-center">
           <FiSearch className='text-xl md:text-2xl'/>
           <Link to='/cart'><RiShoppingCartLine className='text-xl md:text-2xl'/>
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -mt-9 ml-3">
             0
            </span>
           </Link>
           <Link to='/login'><GoPerson className='text-xl md:text-2xl'/></Link> 
      </div>
   
    </nav>

  )
}

export default Navbar;