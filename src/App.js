
import './App.css';
import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';
import Confirmation from './pages/confirmation';
import Item from './pages/Item';
import Cart from './pages/Cart';



import './styles/aboutUs.css';
import './styles/checkout.css';
import './styles/homepage.css';
import './styles/productPage.css';
import './styles/main.css';
import './styles/item.css';
import './styles/cart.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, { id: Date.now(), ...item }]);
    setIsCartOpen(true);
  };

  const handleQuantityChange = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        
        items={cartItems}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
          
      <Routes>
        <Route path="/" element={<Home />} />  
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/product/:slug" element={<Item onAddToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
