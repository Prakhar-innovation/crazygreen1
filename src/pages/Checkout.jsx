import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  
  const [isSuccess, setIsSuccess] = useState(false);

  // If navigated from Buy Now, use only that item
  const buyNowItem = location.state?.buyNowItem;
  const checkoutItems = buyNowItem ? [buyNowItem] : cartItems;

  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      const numericPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, ''));
      return total + (numericPrice * item.quantity);
    }, 0);
  };

  const totalAmount = calculateTotal(checkoutItems);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setIsSuccess(true);
      if (!buyNowItem) {
        clearCart();
      }
    }, 800);
  };

  if (isSuccess) {
    return (
      <div className="checkout-page container section success-state fade-in-up">
        <CheckCircle size={64} className="success-icon" />
        <h1 className="success-title">Order Confirmed!</h1>
        <p className="success-message">Thank you for your purchase. Your order is being processed.</p>
        <Link to="/" className="btn btn-primary mt-4">Return Home</Link>
      </div>
    );
  }

  if (checkoutItems.length === 0) {
    return (
      <div className="checkout-page empty-state container section">
        <h2>Nothing to checkout</h2>
        <Link to="/shop" className="btn btn-primary mt-4">Browse Shop</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page container section fade-in-up">
      <div className="checkout-header">
        <Link to={buyNowItem ? "/shop" : "/cart"} className="return-link">
          <ArrowLeft size={16} /> Back to {buyNowItem ? "Shop" : "Cart"}
        </Link>
        <h1 className="checkout-title">Secure Checkout</h1>
      </div>

      <div className="checkout-grid">
        <div className="checkout-form-section">
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <div className="form-section">
              <h3>Contact Information</h3>
              <input type="email" placeholder="Email Address" required className="form-input" />
            </div>
            
            <div className="form-section">
              <h3>Shipping Address</h3>
              <div className="form-row">
                <input type="text" placeholder="First Name" required className="form-input" />
                <input type="text" placeholder="Last Name" required className="form-input" />
              </div>
              <input type="text" placeholder="Address" required className="form-input" />
              <div className="form-row">
                <input type="text" placeholder="City" required className="form-input" />
                <input type="text" placeholder="Postal Code" required className="form-input" />
              </div>
            </div>

            <div className="form-section">
              <h3>Payment</h3>
              <div className="payment-mock">
                Credit Card Checkout (Mock)
              </div>
              <input type="text" placeholder="Card Number" required className="form-input" />
              <div className="form-row">
                <input type="text" placeholder="MM/YY" required className="form-input" />
                <input type="text" placeholder="CVC" required className="form-input" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary place-order-btn w-full">
              Place Order - ${totalAmount.toFixed(2)}
            </button>
          </form>
        </div>

        <div className="checkout-summary-section">
          <div className="checkout-summary-card">
            <h2>Order Summary</h2>
            <div className="checkout-items">
              {checkoutItems.map(item => (
                <div key={item.id} className="checkout-item">
                  <div className="checkout-item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="checkout-item-qty">{item.quantity}</span>
                  </div>
                  <div className="checkout-item-info">
                    <span className="checkout-item-name">{item.name}</span>
                    <span className="checkout-item-price">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="summary-divider"></div>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
