import React from 'react';
import { FaPlus } from "react-icons/fa";
import Button from '../../Button';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className='flex flex-col'>
        <div className='flex-1 w-full h-auto rounded'>
          <div className='w-full h-auto rounded-3xl items-center m-auto'>
            <img className='w-100 h-30 object-contain' src={product.image.url} />
          </div>
        </div>
        <div className='flex-1 flex flex-col items-center py-1 text-lg'>
          <h2 className='text-3xl md:text-4xl font-bold'>
            {product.name}
          </h2>
          <p dangerouslySetInnerHTML={{ __html:product.description }} className='text-gray-700' />
        </div>
        <div className='flex-1 flex flex-col-reverse items-center'>
          <div onClick={() => onAddToCart(product.id, 1)} className='w-4/5 mt-4'>
            <Button aria-label="Add Product">
                <FaPlus className='mr-2'/>
                <span>Add To Cart</span>
            </Button>
          </div>
          <div>
            <p className='text-2xl md:text-2xl font-bold md:font-extrabold'>
                {product.price.formatted_with_symbol}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Product