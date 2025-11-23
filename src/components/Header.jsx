import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          MYCOD<span className="logo-dot">.</span>
        </a>
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#about" className="nav-link">Our Story</a></li>
            <li><a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>Science</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="cart-btn" onClick={toggleCart}>
            🛒 <span className="cart-count">{cartCount}</span>
          </button>
          <button className="btn btn-primary shop-btn" onClick={(e) => { e.preventDefault(); document.getElementById('products').scrollIntoView({ behavior: 'smooth' }); }}>Shop Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
