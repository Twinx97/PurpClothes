import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Order from './pages/Order';
import ProductsContainer from './components/Products/ProductsContainer';

function App() {
  return (
    <>
      <Navbar />
      <div className='mt-20'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
