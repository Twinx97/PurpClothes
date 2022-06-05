import React from 'react';

const Button = (props) => {
  return (
    <button className='bg-indigo-600 text-white font-semibold py-3 px-6 rounded w-full hover:bg-indigo-400 duration-500 flex items-center justify-center text-lg md:text-sm'>
        {props.children}
    </button>
  )
};

export default Button