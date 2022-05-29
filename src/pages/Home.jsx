import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className='bg-blue-500 text-white text-3xl p-4'>Homepage</h1>
      <Link to="contact">Go to Contact page</Link>
      <br/>
      <Link to="order">Order now</Link>
    </div>
  )
}

export default Home