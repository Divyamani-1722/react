import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => <h2>Home Page</h2>;
const Products = () => <h2>Products Page</h2>;
const Cart = () => <h2>Cart Page</h2>;
const Checkout = () => <h2>Checkout Page</h2>;

const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <nav className='navbar'>
          <ul className='nav-list'>
            <li><Link to='/' className='nav-link'>Home</Link></li>
            <li><Link to='/products' className='nav-link'>Products</Link></li>
            <li><Link to='/cart' className='nav-link'>Cart</Link></li>
            <li><Link to='/checkout' className='nav-link'>Checkout</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
