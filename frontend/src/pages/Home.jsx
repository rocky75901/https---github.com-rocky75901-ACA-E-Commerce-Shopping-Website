import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Product from './Products/Product';
import ProductCarousel from './Products/ProductCarousel';
import AllProducts from './Admin/AllProducts';
import './Home.css';
import ProductCard from './Products/ProductCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Home = ({ addToCart }) => {
  const [firstThreeProducts, setFirstThreeProducts] = useState([]);
  const [nextThreeProducts, setNextThreeProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Assuming AllProducts is an array of products
    setFirstThreeProducts(AllProducts.slice(0, 3)); // Displaying first 3 products
    setNextThreeProducts(AllProducts.slice(3, 6)); // Displaying next 3 products
  }, []);

  const handleShopButtonClick = () => {
    navigate('/shop'); // Navigate to /shop path
  };

  return (
    <div className="home-page">
      <div className='heading'>
        <h1>Welcome to ACA E-commerce Website</h1>
        <h2>Explore a diverse selection of high-quality products and exclusive deals tailored to your needs. Enjoy a seamless shopping experience with us.</h2>
      </div>
      <div className="products-section">
        {firstThreeProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div><ProductCarousel /></div>
      <h1 className='special-products'>Special Products</h1>
      <button className='shop-button' onClick={handleShopButtonClick}>Shop</button>
      <div className="products-section-card">
        {nextThreeProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

// Define prop types for Home component
Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;


