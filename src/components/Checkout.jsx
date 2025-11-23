import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = ({ onClose }) => {
    const { cartTotal, clearCart, setIsCartOpen } = useCart();
    const [step, setStep] = useState('form'); // form, success

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            clearCart();
            setStep('success');
        }, 1000);
    };

    if (step === 'success') {
        return (
            <div className="cart-overlay">
                <div className="cart-sidebar checkout-sidebar">
                    <div className="checkout-success">
                        <div className="success-icon">🎉</div>
                        <h3>Order Placed!</h3>
                        <p>Thank you for your purchase. Your daily dose of sunshine is on its way.</p>
                        <button className="btn btn-primary" onClick={() => setIsCartOpen(false)}>
                            Back to Store
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-overlay">
            <div className="cart-sidebar checkout-sidebar">
                <div className="cart-header">
                    <h3>Checkout</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <form className="checkout-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" required placeholder="you@example.com" />
                    </div>

                    <div className="form-group">
                        <label>Shipping Address</label>
                        <input type="text" required placeholder="Street Address" />
                        <div className="form-row">
                            <input type="text" required placeholder="City" />
                            <input type="text" required placeholder="Postcode" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Card Details</label>
                        <input type="text" required placeholder="Card Number" />
                        <div className="form-row">
                            <input type="text" required placeholder="MM/YY" />
                            <input type="text" required placeholder="CVC" />
                        </div>
                    </div>

                    <div className="checkout-summary">
                        <div className="summary-row total">
                            <span>Total to Pay</span>
                            <span>€{cartTotal.toFixed(2)}</span>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary place-order-btn">
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
