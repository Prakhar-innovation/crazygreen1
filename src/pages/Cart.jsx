import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotalItems } = useCart();
  const navigate = useNavigate();

  // Helper to parse price string (assuming format like "$45.00") and compute total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      // Remove text/symbols, parse float
      const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  const cartTotal = calculateTotal();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart-state container section">
        <h1 className="cart-title">Your Cart</h1>
        <p className="empty-cart-text">Your cart is currently empty.</p>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container section fade-in-up">
      <div className="cart-header">
        <h1 className="cart-title">Your Cart</h1>
        <span className="cart-count">{cartTotalItems} items</span>
      </div>

      <div className="cart-content">
        <div className="cart-items-section">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image.startsWith('/') ? import.meta.env.BASE_URL + item.image.slice(1) : item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <Link to={`/shop/${item.id}`} className="cart-item-name">{item.name}</Link>
                  <span className="cart-item-price">{item.price}</span>
                </div>
                <div className="cart-item-actions">
                  <div className="quantity-selector">
                    <button 
                      className="qty-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button 
                      className="qty-btn" 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-return-link">
            <Link to="/shop" className="return-link">
              <ArrowLeft size={16} /> Continue Shopping
            </Link>
          </div>
        </div>

        <div className="cart-summary-section">
          <div className="cart-summary-card">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary checkout-btn w-full" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
