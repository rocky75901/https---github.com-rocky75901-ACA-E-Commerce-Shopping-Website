import React from 'react';
import { FaHome, FaShoppingBag, FaShoppingCart, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/home">
              <FaHome className="icon" />
              <span className="text">Home</span>
            </a>
          </li>
          <li>
            <a href="/shop">
              <FaShoppingBag className="icon" />
              <span className="text">Shop</span>
            </a>
          </li>
          <li>
            <a href="/cart">
              <FaShoppingCart className="icon" />
              <span className="text">Cart</span>
              <div className='cart-counter'>0</div>
            </a>
          </li>
          <li>
            <a href="/login">
              <FaSignInAlt className="icon" />
              <span className="text">Login</span>
            </a>
          </li>
          <li>
            <a href="/register">
              <FaUserPlus className="icon" />
              <span className="text">Register</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

