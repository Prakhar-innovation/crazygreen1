import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controlled UI state
  const location = useLocation();
  const { cartTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="logo">
          CazyGreen
        </Link>

        {/* Desktop Navigation */}
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" className="nav-link" end>Home</NavLink>
          <NavLink to="/shop" className="nav-link">Shop</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/care" className="nav-link">Care Guide</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>

        {/* Icons */}
        <div className="nav-icons">
          <Link to="/login" className="icon-btn login-btn" aria-label="Login">
            <User size={22} strokeWidth={1.5} />
          </Link>
          <Link to="/cart" className="icon-btn cart-btn" aria-label="Cart">
            <ShoppingBag size={22} strokeWidth={1.5} />
            {cartTotalItems > 0 && <span className="cart-badge">{cartTotalItems}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
