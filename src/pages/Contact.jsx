import React from 'react';
import Button from '../components/Button';

const Contact = () => {
  return (
    <div className='bg-indigo-200 p-12 md:p-15 flex items-center justify-center'>
      <div className='bg-white w-full md:max-w-xs p-10 rounded-lg'>
        <h1 className='text-3xl text-center mb-10'>Contact Us</h1>
        <form name="contact" action="POST" data-netlify="true" className='flex flex-col'>
          <input type="hidden" name="contact" value="contact" />
        
          <input required className='border p-2 rounded py-1 mb-4 placeholder:italic placeholder:text-slate-400' type="email" id="customerEmail" name="email" aria-aria-label='Email' placeholder='Email' />

          <textarea required className='border p-2 rounded py-1 mb-5 resize-none placeholder:italic placeholder:text-slate-400' type="textarea" name="message" placeholder='Message...' />
          <Button type="submit">Send</Button>
        </form>

      </div>
  </div>
  )
}

export default Contact