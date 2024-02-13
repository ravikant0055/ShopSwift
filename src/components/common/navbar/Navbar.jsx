import React, { useState } from 'react';
import logo from "../../../assets/logo.png";
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 flex flex-row items-center justify-between p-[15px] h-[10vh] shadow-md shadow-gray-500/50">

    
      {/* menu icon */}  
      <div className="  md:hidden flex">
          <button onClick={toggleMenu} className="text-black focus:outline-none focus:border-none">
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (<path d="M6 18L18 6M6 6l12 12"></path>) : (<path d="M4 6h16M4 12h16m-7 6h7"></path>)}
            </svg>
          </button> 
      </div>

      {/* logo code */}
      <div className="flex items-center">
        <Link to="/" >
          <img className='w-[100px] md:w-[140px] p-2' src={logo} alt='logo' />
        </Link>
      </div>
      
      {/* nav links */}
      <div className={isOpen?'nav-linkdiv-mobile':'nav-linkdiv'} onClick={()=>setIsOpen(false)}>
          <NavLink to="/men" activeStyle={{color:"red"}} className="text-black before:w-[11%] hover:text-gray-600">
            MEN
          </NavLink>
          <NavLink to="/women" activeStyle={{color:"red"}} className="text-black before:w-[20%]  hover:text-gray-600">
            WOMEN
          </NavLink>
          <NavLink to="/kids" activeStyle={{color:"red"}} className="text-black before:w-[12%] hover:text-gray-600">
            KIDS
          </NavLink>
          <NavLink to="/accessories" activeStyle={{color:"red"}} className="text-black before:w-[34%] hover:text-gray-600">
            ACCESSORIES
          </NavLink>

      </div>

    {/*side icon: profile, cart and search */}

      <div className="flex gap-5 md:gap-7 mr-3 items-center">
           <Link to='/'><FiSearch className='text-xl md:text-2xl'/></Link>
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