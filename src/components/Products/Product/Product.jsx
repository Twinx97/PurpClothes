import React from 'react';
import { FaPlus } from "react-icons/fa";
import Button from '../../Button';


const Product = ({ product, onAddToCart }) => {

  return (
    <div className='flex flex-col'>

        <div className='flex-1 w-full rounded'>
          <div className='w-full h-auto rounded-3xl items-center m-auto'>
            <img className='w-96 h-48 object-contain' src={product.image.url} />
          </div>
        </div>

        <div className='flex-1 flex flex-col items-center py-4 text-lg'>
          <h2 className='text-3xl font-bold'>
            {product.name}
          </h2>
          <p dangerouslySetInnerHTML={{ __html:product.description }} className='text-gray-600' />
          <p className='text-3xl font-bold'>
            {product.price.formatted_with_symbol}
          </p>
        </div>
        <div onClick={() => onAddToCart(product.id, 1)} className='flex-1'>
          <Button aria-label="Add Product">
              <FaPlus className='mr-2'/>
              <span>Add To Cart</span>
          </Button>
        </div>
    </div>
  )
}

export default Product