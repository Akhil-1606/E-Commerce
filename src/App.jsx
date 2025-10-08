import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Shop from './pages/shop';
import Cart from './pages/cart';
import Home from './pages/home';
import Payment from './pages/payment';


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home addToCart={addToCart} />} />
        <Route path='/shop' element={<Shop cart={cart} addToCart={addToCart} />} />
        <Route path='/cart' element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
        <Route path='/payment' element={<Payment cart={cart} />} />
      </Routes>
    </Router>
  )
}

export default App;
