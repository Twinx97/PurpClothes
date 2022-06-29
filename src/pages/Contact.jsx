import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className='bg-indigo-200 p-12 md:p-15 flex items-center justify-center'>
      <div className='bg-white w-full md:max-w-xs p-10 rounded-lg'>
        <h1 className='text-3xl text-center mb-10'>Contact Us</h1>
        <form action="#" className='flex flex-col'>
          
          <input className='border p-2 rounded py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="text" name="email" aria-aria-label='Email' placeholder='Email'/>
          <input className='border p-2 rounded py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="text" name="Product" aria-label='Product' placeholder='Product'/>
          <textarea className='border p-2 rounded py-1 mb-5 resize-none placeholder:italic placeholder:text-slate-400' type="textarea" placeholder='Message...' />
          <Button>Send</Button>
        </form>
      </div>
  </div>
  )
}

export default Contact