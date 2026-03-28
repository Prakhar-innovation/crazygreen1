import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ProductCard from './ProductCard';
import './BestSelling.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const API_ENDPOINT = '/api/products.json';

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // API Driven Data Fetching
  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Fetch from our local API payload
        const response = await fetch(API_ENDPOINT);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Simulate a slight network delay so the skeleton flashes
        await new Promise(r => setTimeout(r, 600));

        if (isMounted) {
          // Filter to only show Best Sellers on the homepage
          const bestSellers = data.filter(item => item.tag === 'Best Seller');
          setProducts(bestSellers);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch products API:", err);
          setError('Failed to load products from API. Please try again.');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchProducts();
    
    return () => { isMounted = false; };
  }, []);

  const displayedProducts = useMemo(() => {
    return products.slice(0, 6);
  }, [products]);

  const handleAddToCart = useCallback((id) => {
    const productToAdd = products.find(p => p.id === id);
    if (productToAdd) {
      addToCart(productToAdd);
    }
  }, [products, addToCart]);

  const handleBuyNow = useCallback((id) => {
    const productToBuy = products.find(p => p.id === id);
    if (productToBuy) {
      navigate('/checkout', { state: { buyNowItem: { ...productToBuy, quantity: 1 } } });
    }
  }, [navigate, products]);

  let content;

  if (isLoading) {
    content = (
      <div className="products-grid skeleton-grid">
        {[1, 2, 3, 4].map(n => (
          <div key={n} className="skeleton-card" style={{height: '400px', backgroundColor: 'var(--color-background)', borderRadius: '16px', animation: 'pulse 1.5s infinite'}}></div>
        ))}
      </div>
    );
  } else if (error) {
    content = <div className="error-state">{error}</div>;
  } else if (displayedProducts.length === 0) {
    content = <div className="empty-state">No products found at this time.</div>;
  } else {
    content = (
      <div className="products-grid">
        {displayedProducts.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            tag={product.tag}
            image={product.image}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="section best-selling">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <span className="section-subtitle">Plant Shop</span>
            <h2 className="section-title">Best Selling Additions</h2>
          </div>
          <Link to="/shop" className="btn btn-secondary desktop-only">
            View All Plants
          </Link>
        </div>

        {content}
        
        <div className="mobile-view-all">
          <Link to="/shop" className="btn btn-secondary w-full">
            View All Plants
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
