import React from 'react';
import Button from '../Button';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {

  const EmptyCart = () => (
    <>
      <p className='text-xl mt-20 text-center'>You have no items in your cart 
        <Link to="/">start adding some</Link>!
      </p>
    </>
  )

  const FilledCart = () => (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center gap-1'>
        {cart.line_items.map((item) => (
          <div className='w-full md:w-1/3 py-2' key={item.id}>
            <CartItem item={item} />
          </div>
        ))}
      </div>
      <div className='mt-5 flex justify-start items-center'>
        <h5 className='text-xl md:text-2xl font-semibold'>Subtotal: {cart.subtotal.formatted_with_symbol}</h5>
        <div className='ml-auto flex gap-5 justify-between'>
          <button className='text-white bg-red-600 py-3 px-6 rounded md:ml-5 hover:bg-red-800 duration-500 flex items-center justify-center text-lg md:text-sm font-semibold w-auto'>Empty Cart</button>
          <button className='text-white bg-green-600 py-3 px-6 rounded md:ml-5 hover:bg-green-800 duration-500 flex items-center justify-center text-lg md:text-sm font-semibold w-auto '>Checkout</button>
        </div>
      </div>
    </>
  );

  if(!cart.line_items) return <div className='text-center text-2xl font-semibold mt-40'>Loading...</div>;

  return (
    <>
      <div className='grid p-10 md:p-20'>
        <h3 className='text-4xl font-medium pb-10 text-center md:text-left'>Your Shopping Cart</h3>    
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }      
      </div>      
    </>
  )
}

export default Cart