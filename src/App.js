import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { commerce } from './lib/commerce';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import CartPage from "./components/Cart/Cart";
import Footer from "./components/Footer";
import SignIn from "./pages/SignIn";
import Checkout from "./pages/Checkout";


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
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };
  
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    
    setCart(cart)
  }


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
          <Route path="/cart" element={<CartPage 
            cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty} 
            handleRemoveFromCart={handleRemoveFromCart} 
            handleEmptyCart={handleEmptyCart} 
          />} />
          <Route path="/products" element={<Products products={products} onAddToCart={handleAddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
