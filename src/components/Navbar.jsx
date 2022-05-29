import React, { useState } from 'react';
import { FaPizzaSlice, FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    let Links = [
        {name: "HOME", link: "/"},
        {name: "CONTACT", link: "/"},
        {name: "ORDER", link: "/"}
    ];
    let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 px-8'>
        <div className='md:flex items-center justify-between bg-white py-6 md:px-10 '>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-2'>
                    <FaPizzaSlice/>
                </span>
                Logo
            </div>
            <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <FaBars style={open ? {display: 'none'}: {display: 'block'}}></FaBars>
                <MdOutlineClose style={open ? {display: 'block', fontSize: '36px', lineHeight: '40px'}: {display: 'none'}}></MdOutlineClose>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className="text-gray-700 hover:text-gray-400 duration-500">
                                {link.name}
                            </a>
                        </li>
                    ))
                }
                <Button>
                    Get Started
                </Button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar