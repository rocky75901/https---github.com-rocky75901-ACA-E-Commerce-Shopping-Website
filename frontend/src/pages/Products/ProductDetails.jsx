import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AllProducts from '../Admin/AllProducts';
import './ProductDetails.css';
import { useCart } from '../CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = AllProducts.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={() => navigate(-1)} className="go-back-button">Go Back</button>
      </div>
    </div>
  );
};

export default ProductDetails;
