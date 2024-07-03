import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa'; // Import star icon

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success("Added to Cart", { position: toast.POSITION.TOP_RIGHT });
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => handleProductClick(product.id)}
        style={{ cursor: 'pointer' }}
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} color="FFC107" />
          ))}
        </div>
        <p className="product-price">${product.price}</p>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Product;

