import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';


const Thankyou = () => {
  return (
    <div className='h-screen flex items-center pt-10 flex-col md:pt-20'>
        <h2 className='text-5xl px-10'>Thank you for getting in touch!</h2>
        <p className='text-2xl mt-5 px-10 md:px-40 md:text-center mb-8 md:mb-10'>We have received your message. One of our colleagues will get back in touch with you soon, have a great day!</p>
        <Link to="/">
            <Button>Return to Homepage</Button>
        </Link>
    </div>
  )
}

export default Thankyou