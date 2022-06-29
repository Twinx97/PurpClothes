import React from 'react';

const Checkout = () => {
  return (
    <div className='bg-indigo-200 p-12 md:p-15 flex items-center justify-center'>
      <div className='bg-white w-full md:max-w-xs p-10 rounded-lg'>
        <h1 className='text-3xl text-center mb-10'>Shipping</h1>
        <form action="#" className='flex flex-col'>
          
            <input className='border p-2 rounded-lg py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="text" name="email" aria-aria-label='Email' placeholder='Country'/>
          <input className='border p-2 rounded-lg py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="text" name="email" aria-aria-label='Email' placeholder='Address'/>
          <input className='border p-2 rounded-lg py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="text" name="text" aria-label='Password' placeholder='Postal Code'/>
          
          <div className='flex mt-5 items-center'>
            <button className='bg-indigo-600 text-white font-semibold py-2 px-5 whitespace-nowrap rounded-full w-full hover:bg-indigo-900 duration-500 flex items-center justify-center text-base md:text-sm'>
              Proceed
            </button>
            
          </div>
        </form>
      </div>
  </div>
  )
}

export default Checkout