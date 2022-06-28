import React from 'react';
import CartItem from './CartItem/CartItem';
import { Link, useLocation } from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  const EmptyCart = () => (
    <div className='mt-20 h-screen'>
      <p className='text-2xl text-center'>There are no items in your cart yet.<br/><br/>
        <div className="text-indigo-800 hover:text-indigo-500 font-semibold text-4xl md:text-5xl">
          <Link to="/">Start Adding Products</Link>!
        </div>
      </p>
    </div>
  )

  const FilledCart = () => (
    <div className='flex flex-col-reverse md:flex-row'>
      <div className='flex md:flex-3 flex-col md:flex-row md:flex-wrap items-center justify-center md:justify-evenly gap-1 md:gap-1'>
        {cart.line_items.map((item) => (
          <div className='w-full md:w-2/5 py-2' key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        ))}
      </div>
      <div className='md:flex-1 mt-2 flex flex-col md:flex-row justify-start items-center md:items-center md:flex-col'>
        <h5 className='text-2xl mb-5 md:text-2xl font-semibold md:mb-4'>Subtotal: {cart.subtotal.formatted_with_symbol}</h5>
        <div className='flex gap-10 md:gap-5 justify-between md:justify-start mb-10'>
          <button className='text-white bg-red-600 py-3 px-4 md:px-6 rounded md:ml-0 hover:bg-red-800 duration-500 flex items-center justify-center text-lg md:text-sm font-semibold w-auto' onClick={handleEmptyCart} >Empty Cart</button>
          <button className='text-white bg-green-600 py-3 px-14 md:px-12 rounded md:ml-0 hover:bg-green-800 duration-500 flex items-center justify-center text-xl md:text-xl font-semibold w-auto '>Checkout</button>
        </div>
      </div>
    </div>
  );

  if(!cart.line_items) return <div className='text-center text-2xl font-extrabold mt-40'>Loading...</div>;

  return (
    <>
      <div className='grid p-10 md:px-20 md:py-10'>            
        { !cart.line_items.length ? <EmptyCart /> : 
        <>
          <h3 className='text-5xl font-medium pb-5 md:pb-10 text-center md:text-left'>Shopping Cart</h3>
          <FilledCart />  
        </> }      
      </div>      
    </>
  )
}

export default Cart