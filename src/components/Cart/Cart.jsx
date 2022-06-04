import React from 'react';
import Button from '../Button';
import CartItem from './CartItem/CartItem';
import { Link, useLocation } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => (
    <>
      <p className='text-xl mt-20 text-center'>You have no items in your cart.<br/>
        <div className="text-blue-500 hover:text-blue-800">
          <Link to="/">Start adding some</Link>!
        </div>
      </p>
    </>
  )

  const FilledCart = () => (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center gap-1'>
        {cart.line_items.map((item) => (
          <div className='w-full md:w-1/3 py-2' key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        ))}
      </div>
      <div className='mt-5 flex justify-start items-center'>
        <h5 className='text-xl md:text-2xl font-semibold'>Subtotal: {cart.subtotal.formatted_with_symbol}</h5>
        <div className='ml-auto flex gap-5 justify-between'>
          <button className='text-white bg-red-600 py-3 px-6 rounded md:ml-5 hover:bg-red-800 duration-500 flex items-center justify-center text-lg md:text-sm font-semibold w-auto' onClick={handleEmptyCart} >Empty Cart</button>
          <button className='text-white bg-green-600 py-3 px-6 rounded md:ml-5 hover:bg-green-800 duration-500 flex items-center justify-center text-lg md:text-sm font-semibold w-auto '>Checkout</button>
        </div>
      </div>
    </>
  );

  if(!cart.line_items) return <div className='text-center text-2xl font-semibold mt-40'>Loading...</div>;

  return (
    <>
      <div className='grid p-10 md:p-20'>            
        { !cart.line_items.length ? <EmptyCart /> : 
        <>
          <h3 className='text-4xl font-medium pb-10 text-center md:text-left'>Your Shopping Cart</h3>
          <FilledCart />  
        </> }      
      </div>      
    </>
  )
}

export default Cart