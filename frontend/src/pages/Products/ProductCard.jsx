import React from 'react';
import './ProductCard.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { FaStar } from 'react-icons/fa'; // Import star icon

const ProductCard = ({ product, rating = 5 }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        onClick={() => handleProductClick(product.id)}
        style={{ cursor: 'pointer' }}
      />
      <div className="product-info-card">
        <h3>{product.name}</h3>
        <p className="product-description-card">{product.description}</p>
        <div className="product-rating-card">
          {[...Array(rating)].map((_, index) => (
            <FaStar key={index} color="FFC107" />
          ))}
        </div>
        <p className="product-price-card">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    brand: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  rating: PropTypes.number, // Add rating prop type
};

export default ProductCard;
