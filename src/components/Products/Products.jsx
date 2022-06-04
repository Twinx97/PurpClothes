import React from 'react';
import Product from './Product/Product';

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
        <div className='grid md:justify-center gap-2 grid-cols-1 md:grid-cols-3 md:p-10'>
            {
              (products || []).map((product) => (
                <div key={product.id} className='flex py-10 px-5 justify-center md:justify-start gap-1'>
                    <Product product={product} onAddToCart={onAddToCart} />
                </div>
            ))
            }
        </div>
    </main>
  )
}

export default Products