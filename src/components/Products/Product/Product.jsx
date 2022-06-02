import React from 'react';
import { FaPlus } from "react-icons/fa";

const Product = ({ product }) => {
  return (
    <div className='flex flex-col'>
        <div className='w-full h-auto bg-white-400 rounded'>
          <div className='w-2/3 flex rounded-3xl items-center m-auto'>
            <img src={product.image} alt={product.imageAlt} />
          </div>
        </div>
        <div className='flex flex-col items-center py-4 text-lg'>
          <h2 className='text-3xl font-bold'>
            {product.name}
          </h2>
          <p>
            {product.description}
          </p>
          <p className='text-3xl'>&euro;
            {product.price}
          </p>
        </div>
        <div className='flex gap-2 justify-center items-center m-auto mb-4 text-1xl border border-2 py-2 rounded-sm w-2/4'>
          <FaPlus />
          <span>Add to Cart </span>
        </div>
    </div>
  )
}

export default Product