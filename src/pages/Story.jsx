import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Sun, Home, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import './Story.css';

const Story = () => {
  return (
    <div className="story-page fade-in-up">
      {/* Premium Hero Section */}
      <section className="story-hero">
        <div className="container story-hero-content">
          <h1>Bringing Nature Closer to You</h1>
          <p>CazyGreen curates premium indoor plants for modern living.</p>
        </div>
      </section>

      {/* Brand Story: Split Layout */}
      <section className="story-split container section">
        <div className="story-split-image">
          <img 
            src={`${import.meta.env.BASE_URL}images/story_brand_image.jpg`} 
            onError={(e) => e.target.src = "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=800&auto=format&fit=crop"} 
            alt="Beautiful premium indoor plants" 
          />
        </div>
        <div className="story-split-text">
          <span className="section-subtitle">Our Roots</span>
          <h2>Who We Are</h2>
          <p>
            Founded by impassioned botanists and interior designers, CazyGreen was born from a mutual belief: nature belongs indoors. We started in a small greenhouse, dedicating our time to understanding the profound impact greenery has on human well-being and spaces.
          </p>
          <p>
            Our mission is simple, yet ambitious. We strive to seamlessly integrate nature into the architecture of your everyday life, providing spaces that breathe, inspire, and reconnect you with the earth—without sacrificing contemporary elegance.
          </p>
        </div>
      </section>

      {/* Values Section: 3 Columns */}
      <section className="story-values section">
        <div className="container">
          <div className="values-header">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3>Sustainably Sourced</h3>
              <p>We partner with responsible nurseries to ensure every plant is raised ethically, protecting native ecosystems.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Sun size={32} strokeWidth={1.5} />
              </div>
              <h3>Smart Plant Care</h3>
              <p>We provide intuitive care routines, making the journey from seedling to thriving plant effortless and joyful.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Home size={32} strokeWidth={1.5} />
              </div>
              <h3>Designed for Modern Homes</h3>
              <p>Each variety is chosen not just for vitality, but for its architectural beauty inside your personal sanctuary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="story-choose container section">
        <div className="choose-header">
          <h2>Why Choose CazyGreen</h2>
        </div>
        <div className="choose-grid">
          <div className="choose-item">
            <ShieldCheck size={28} className="choose-icon" />
            <h4>Premium Quality</h4>
            <p>Hand-selected specimens guaranteed to arrive healthy and vibrant.</p>
          </div>
          <div className="choose-item">
            <Heart size={28} className="choose-icon" />
            <h4>Carefully Curated</h4>
            <p>A refined collection of species tailored to elevate any room aesthetic.</p>
          </div>
          <div className="choose-item">
            <Sparkles size={28} className="choose-icon" />
            <h4>Easy Maintenance</h4>
            <p>Clear guidance matching your busy lifestyle with perfect botanical companions.</p>
          </div>
        </div>
      </section>

      {/* Lifestyle Full-Width Image Section */}
      <section className="story-lifestyle">
        <img 
          src={`${import.meta.env.BASE_URL}images/story_lifestyle.jpg`} 
          onError={(e) => e.target.src = "https://images.unsplash.com/photo-1545241047-6083a36ee2c8?w=1600&auto=format&fit=crop"} 
          alt="Premium lifestyle interior with plants" 
          className="lifestyle-img"
        />
        <div className="lifestyle-overlay">
          <h2>Designed to Elevate Your Space</h2>
        </div>
      </section>

      {/* Premium Call to Action */}
      <section className="story-cta container section fade-in-up">
        <div className="cta-content">
          <h2>Explore Our Collection</h2>
          <p>Find the perfect botanical companion for your modern sanctuary.</p>
          <Link to="/shop" className="btn btn-primary cta-btn">Shop Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Story;
