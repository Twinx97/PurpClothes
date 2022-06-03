import React, { useState } from 'react';
import { FaTshirt, FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Button from './Button';
import { Link } from 'react-router-dom';
import { IoCart } from "react-icons/io5";
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';


const Navbar = ({ totalItems }) => {
    let Links = [
        {name: "Home", link: "/"},
        {name: "Products", link: "Products"},
        {name: "Contact", link: "Contact"},
        {name: "Order", link: "Order"}
    ];
    let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 md:px-0 z-50'>
        <div className='md:flex items-center justify-between md:justify-start bg-white py-6 md:px-5 px-8'>
         
            <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-2'>
                    <FaTshirt/>
                </span>
                PurpClothes
            </Link>

            <div onClick={() => {
                setOpen(!open);
            }} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden flex items-center gap-3'>
                
                <FaBars style={open ? {display: 'none'}: {display: 'block'}}></FaBars>
                <MdOutlineClose style={open ? {display: 'block'}: {display: 'none'}}></MdOutlineClose>
            </div>
            <ul id="test" className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'} `}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-4 text-base md:my-0 my-4">
                            <Link to={link.link} className="text-gray-800 font-normal text-xl hover:text-indigo-600 duration-500" onClick={() => {
                                let myId = document.getElementById('test');
                                if(open) {
                                    myId.classList.add('top-[-490px]');
                                    setOpen(!open);
                                } else {
                                    myId.classList.add('top-20')
                                }
                            }}>
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
                
                <div className='md:hidden flex gap-4 flex-col md:flex-row md:gap-0 pr-10'>
                    <Button aria-label="Sign In">
                        Sign In
                    </Button>
                    <Button>
                    <IconButton aria-label='Show Cart Items' color="inherit">
                        <Badge badgeContent={totalItems} style={{color: "white"}}>
                            <ShoppingCart />
                        </Badge>
                        <span className='pl-1 text-lg font-medium'>Cart</span>
                    </IconButton>
                    </Button>
                </div>
            </ul>
            <div className='hidden md:flex ml-auto gap-4 md:gap-3'>
                    <Button aria-label="Sign In">
                        Sign In
                    </Button>
                    <IconButton aria-label='Show Cart Items' color="inherit">
                        <Badge badgeContent={totalItems}>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
        </div>
    </div>
  )
}



export default Navbar