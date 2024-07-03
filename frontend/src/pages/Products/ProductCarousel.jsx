import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.css';
import allProducts from '../Admin/AllProducts';
import { NextArrow, PrevArrow } from './CarouselArrows';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // Import star icon

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const products = allProducts.slice(0, 3);
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-carousel-card">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-carousel-image" 
              onClick={() => handleProductClick(product.id)} 
            />
            <div className="product-carousel-details">
              <h3>{product.name}</h3>
              <p>Brand: {product.brand}</p>
              <div className="product-carousel-rating">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} color="#FFC107" />
                ))}
              </div>
              <p style={{fontWeight:"800"}}>Price: $ {product.price}</p>
              <button className="product-button">Add to Cart</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
