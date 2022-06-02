import React from 'react';
import Product from './Product/Product';

const productsContainer = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80',
        imageAlt: 'blablabla',
        name: 'Black Shirt',
        description: 'Newest trending shirt!',
        price: '10'
    },
    {
        id: 2,
        image: 'https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png',
        imageAlt: 'blablabla',
        name: 'White Shirt',
        description: 'Basic white shirt',
        price: '25'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        imageAlt: 'blablabla',
        name: 'Whirt Shirt',
        description: 'Casual White Shirt',
        price: '29'
    }
];

const Products = () => {
  return (
    <main>
        <div className='grid md:justify-center gap-4 grid-cols-1 md:grid-cols-3 md:grid-rows-3 mx-5 md:p-10'>
            {productsContainer.map((product) => (
                <div key={product.id} className='grid py-10 px-5 justify-center md:justify-start gap-1'>
                    <Product product={product} />
                </div>
            ))}
        </div>
    </main>
  )
}

export default Products