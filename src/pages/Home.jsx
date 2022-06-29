import React from 'react';
import bannerImage from '../assets/backgroundImages/mobile-banner.jpg';
import Products from '../components/Products/Products';

const Home = ({ products, onAddToCart }) => {
  return (
    <div>
      <div className='bg-gradient-to-tr from-indigo-800 to-indigo-500 h-96 w-full md:top-0 relative'>
        {/* <img src={bannerImage} className="w-full h-full object-cover absolute mix-blend-overlay" alt="Landing Page image" /> */}
        <div className='p-12 px-10 md:p-20 px-10 md:px-20 md:py-20 lg:py-30'>
          <h1 className='text-white text-4xl md:text-7xl mb-2 font-bold'>Upgrade your<br/>wardrobe today!</h1>
          <p className='text-white text-2xl font-light mb-10 lg:text-4xl'>The Latest Fashion trends have arrived.</p>
        </div>
      </div>
      <Products products={products} onAddToCart={onAddToCart} />
    </div>
  )
}

export default Home