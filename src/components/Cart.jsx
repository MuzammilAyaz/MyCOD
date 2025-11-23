import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Checkout from './Checkout';
import './Cart.css';

const Cart = () => {
    const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

    if (!isCartOpen) return null;

    if (isCheckoutOpen) {
        return <Checkout onClose={() => setIsCheckoutOpen(false)} />;
    }

    return (
        <div className="cart-overlay">
            <div className="cart-sidebar">
                <div className="cart-header">
                    <h3>Your Cart</h3>
                    <button className="close-btn" onClick={toggleCart}>&times;</button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <p>Your cart is empty.</p>
                        <button className="btn btn-secondary" onClick={toggleCart}>Continue Shopping</button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.title} className="cart-item-image" />
                                    <div className="cart-item-details">
                                        <h4>{item.title}</h4>
                                        <p className="cart-item-price">{item.price}</p>
                                        <div className="cart-item-controls">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>&times;</button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total:</span>
                                <span>€{cartTotal.toFixed(2)}</span>
                            </div>
                            <button className="btn btn-primary checkout-btn" onClick={() => setIsCheckoutOpen(true)}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
