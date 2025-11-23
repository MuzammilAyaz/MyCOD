import React from 'react';
import './Footer.css';

const Footer = () => {
    const handleDeadLink = (e) => {
        e.preventDefault();
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">MYCOD<span className="logo-dot">.</span></h3>
                        <p className="footer-desc">
                            Your daily dose of sunshine, sustainably grown in Ireland.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="#" onClick={handleDeadLink}>All Products</a></li>
                            <li><a href="#" onClick={handleDeadLink}>Bundles</a></li>
                            <li><a href="#" onClick={handleDeadLink}>Subscriptions</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#" onClick={handleDeadLink}>Our Story</a></li>
                            <li><a href="#" onClick={handleDeadLink}>Sustainability</a></li>
                            <li><a href="#" onClick={handleDeadLink}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-newsletter">
                        <h4>Stay Sunny</h4>
                        <p>Subscribe for updates and exclusive offers.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MycoD Biotech Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
