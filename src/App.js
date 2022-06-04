import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from './lib/commerce';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Order from './pages/Order';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import CartPage from "./components/Cart/Cart";


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});



  const fetchProducts = async() => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };



  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      <div className='mt-20'></div>
        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
    </>
  );
}

export default App;
