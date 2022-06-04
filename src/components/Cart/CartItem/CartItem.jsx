import React from 'react';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div className='flex flex-col border-4 md:p-2'>
        <div className='w-full'>
            <img src={item.image.url} className="w-100 h-48 object-contain" />
        </div>
        <div className='flex flex-row justify-between text-3xl md:text-xl font-bold px-5'>
            <h5>{item.name}</h5>
            <p>{item.line_total.formatted_with_symbol}</p>
        </div>
        <div className='flex flex-row items-center justify-start gap-4 p-5 px-5 pt-2 text-2xl md:text-xl'>
            <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
            <p className='font-medium'>{item.quantity}</p>
            <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            <button className='text-white bg-red-400 py-3 px-3 rounded md:ml-3 hover:bg-red-700 duration-500 flex items-center justify-center text-sm md:text-xs font-medium md:font-semibold w-auto ml-auto' onClick={() => onRemoveFromCart(item.id)}>Remove Items</button>
        </div>
    </div>
  )
}

export default CartItem