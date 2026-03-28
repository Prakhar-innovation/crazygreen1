import React, { useState, useEffect } from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import './Shop.css';

const API_ENDPOINT = import.meta.env.BASE_URL + 'api/products.json';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchAllProducts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        await new Promise(r => setTimeout(r, 800)); // Slightly longer for "WOW" feel

        if (isMounted) setProducts(data);
      } catch (err) {
        if (isMounted) {
          console.error("Failed to fetch shop API:", err);
          setError('Failed to load the product catalog. Please try again.');
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchAllProducts();
    
    return () => { isMounted = false; };
  }, []);

  const handleAddToCart = (id) => {
    const productToAdd = products.find(p => p.id === id);
    if (productToAdd) {
      addToCart(productToAdd);
    }
  };

  const handleBuyNow = (id) => {
    const productToBuy = products.find(p => p.id === id);
    if (productToBuy) {
      navigate('/checkout', { state: { buyNowItem: { ...productToBuy, quantity: 1 } } });
    }
  };

  return (
    <div className="shop-page">
      {/* Premium Header */}
      <header className="shop-header">
        <div className="shop-header-bg">
          <img src={`${import.meta.env.BASE_URL}images/shop_header_bg.png`} alt="Shop background" />
        </div>
        <div className="shop-header-content">
          <h1 className="fade-in-up">The Collection</h1>
          <p className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our curated selection of high-quality indoor plants, 
            carefully sourced to elevate your sanctuary.
          </p>
        </div>
      </header>

      <div className="container">
        {/* Controls / Filter Bar Mockup */}
        <div className="shop-controls">
          <div className="shop-results-count">
            {isLoading ? 'Searching...' : `Showing all ${products.length} species`}
          </div>
          <div className="shop-filters-placeholder">
            <button className="filter-btn">
              Sort by <ChevronDown size={16} />
            </button>
            <button className="filter-btn">
              Filter <SlidersHorizontal size={16} />
            </button>
          </div>
        </div>

        <div className="shop-grid-container">
          {isLoading ? (
            <div className="skeleton-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                <div key={n} className="skeleton-card"></div>
              ))}
            </div>
          ) : error ? (
            <div className="error-state">{error}</div>
          ) : products.length === 0 ? (
            <div className="empty-state">No products found in our collection.</div>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
