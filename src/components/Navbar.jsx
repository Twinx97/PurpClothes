import React, { useState } from 'react';
import { FaTshirt, FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Button from './Button';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";

const Navbar = () => {
    let Links = [
        {name: "HOME", link: "/"},
        {name: "CONTACT", link: "Contact"},
        {name: "ORDER", link: "Order"}
    ];
    let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 md:px-0 z-50'>
        <div className='md:flex items-center justify-between md:justify-start bg-white py-6 md:px-10 px-8'>
         
            <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-2'>
                    <FaTshirt/>
                </span>
                PurpClothes
            </Link>

            <div onClick={() => {
                setOpen(!open);
            }} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden hover:text-indigo-700 hover:rotate-90 transform-gpu duration-700'>
                <FaBars style={open ? {display: 'none'}: {display: 'block'}}></FaBars>
                <MdOutlineClose style={open ? {display: 'block', fontSize: '36px', lineHeight: '40px'}: {display: 'none'}}></MdOutlineClose>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-6 text-xl md:my-0 my-7">
                            <Link to={link.link} className="text-gray-600 hover:text-indigo-600 duration-500">
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
                
                <div className='md:hidden flex gap-4 flex-col md:flex-row md:gap-0 pr-10'>
                    <Button>
                        Sign In
                    </Button>
                    <Button>
                        <IoCart className='inline mr-1 text-2xl'/>
                        Cart
                    </Button>
                </div>
            </ul>
            <div className='hidden md:flex flex ml-auto gap-4 flex-col md:flex-row md:gap-0'>
                    <Button>
                        Sign In
                    </Button>
                    <Button>
                        <IoCart className='inline mr-1 text-2xl'/>
                        Cart
                    </Button>
                </div>
        </div>
    </div>
  )
}



export default Navbar