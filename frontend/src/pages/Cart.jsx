// Cart.jsx
import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{product.title}</h4>
                <p>{product.brand}</p>
                <p>${product.price.toFixed(2)}</p>
                <div className="cart-item-actions">
                  <select
                    value={product.quantity}
                    onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))}
                  >
                    {[...Array(10).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Items: {cart.length}</p>
          <p>Total: ${getTotal().toFixed(2)}</p>
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

