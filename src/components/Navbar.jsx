import React, { useState } from 'react';
import { FaTshirt, FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import Button from './Button';
import { Link, useLocation } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Navbar = ({ totalItems }) => {
    const location = useLocation();

    let Links = [
        {name: "Home", link: "/"},
        {name: "Products", link: "Products"},
        {name: "Contact", link: "Contact"}
    ];
    let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 md:px-0 z-50'>
        <div className='flex md:flex items-center justify-between md:justify-start bg-white py-5 md:px-5 px-8 lg:px-8'>
         
            <Link to="/" className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-2'>
                    <FaTshirt/>
                </span>
                PurpClothes
            </Link>

            <div className="block md:hidden ml-auto mr-11 text-3xl">
                {location.pathname === '/cart' ? (
                    <div className='h-10 w-10 bg-white'></div>
                ) : (
                    <IconButton component={Link} to="/cart" aria-label='Show Cart Items' color="inherit" >
                        <Badge badgeContent={totalItems} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                )}
            </div>

            <div onClick={() => {
                setOpen(!open);
            }} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden flex items-center gap-3 hover:rotate-90 hover:text-indigo-600 transition duration-500'>
                
                <FaBars style={open ? {display: 'none'}: {display: 'block'}}></FaBars>
                <MdOutlineClose style={open ? {display: 'block'}: {display: 'none'}}></MdOutlineClose>
            </div>
            <ul id="test" className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'} `}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-4 text-base md:my-0 my-3">
                            <Link to={link.link} className="text-black font-light text-xl hover:pt-1 md:focus:border-b-2 hover:border-b-2 hover:border-indigo-700 hover:text-indigo-700" onClick={() => {
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
                
                <div className='md:hidden flex mt-10 gap-5 flex-col md:flex-row md:gap-0 pr-10'>
                    <Link to="SignIn" onClick={() => {
                                let myId = document.getElementById('test');
                                if(open) {
                                    myId.classList.add('top-[-490px]');
                                    setOpen(!open);
                                } else {
                                    myId.classList.add('top-20')
                                }
                            }}>
                        <Button>Sign In</Button>
                    </Link>
                </div>
            </ul>
            <div className='hidden md:flex ml-auto gap-4 md:gap-5'>
                    <Link to="SignIn">
                        <Button>Sign In</Button>
                    </Link>
                    {location.pathname === '/cart' ? null : (
                        <IconButton component={Link} to="/cart" aria-label='Show Cart Items' color="inherit">
                            <Badge badgeContent={totalItems} color="error">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    )}
                </div>
        </div>
    </div>
  )
}



export default Navbar