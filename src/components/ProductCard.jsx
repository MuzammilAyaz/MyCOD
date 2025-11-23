import React from 'react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ id, title, subtitle, image, price, tags }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, image, price });
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
        <div className="product-overlay">
          <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <div className="product-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <h3 className="product-title">{title}</h3>
        <p className="product-subtitle">{subtitle}</p>
        <p className="product-price">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
