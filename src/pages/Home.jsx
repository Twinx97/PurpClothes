import React from 'react';
import bannerImage from '../assets/backgroundImages/mobile-banner.jpg';
import Products from '../components/Products/Products';

const Home = ({ products }) => {
  return (
    <div>
      <div className='bg-gradient-to-tr from-indigo-900 to-indigo-800 h-96 w-full md:top-0 relative'>
        <img src={bannerImage} className="w-full h-full object-cover absolute mix-blend-overlay" alt="Landing Page image" />
        <div className='p-20 px-10 md:px-20 md:py-20 lg:py-30'>
          <h1 className='text-white text-5xl md:text-7xl lg:text-8xl mb-2 font-bold'>Upgrade your<br/>wardrobe today!</h1>
          <p className='text-white text-3xl font-light mb-10'>The Latest Fashion trends have arrived.</p>
        </div>
      </div>
      <Products products={products}/>
    </div>
  )
}

export default Home