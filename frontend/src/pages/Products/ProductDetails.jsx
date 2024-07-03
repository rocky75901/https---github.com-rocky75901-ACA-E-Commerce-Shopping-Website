import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon
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
    <div className="productdetails-product-details">
      <button className="productdetails-go-back" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Go Back
      </button>
      <div className="productdetails-product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="productdetails-product-info">
        <h1>{product.name}</h1>
        <p className="productdetails-price">${product.price}</p>
        <p>{product.description}</p>
        <div className="productdetails-product-meta">
          <p><strong>Brand:</strong> {product.brand}</p>
        </div>
        <div className="productdetails-product-rating">
          {'★'.repeat(product.rating)}
        </div>
        <button className="productdetails-add-to-cart-button" onClick={() => addToCart(product)}>
          Add To Cart
        </button>
        <div className="productdetails-reviews">
          <button className="productdetails-write-review">Write Your Review</button>
          <p>Please <a href="/login">sign in</a> to write a review.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

