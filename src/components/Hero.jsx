import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section fade-in-up">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-subtitle">The Art of Botanical Living</span>
          <h1 className="hero-title">
            Curated Indoor Plants for Elevated Living
          </h1>
          <p className="hero-description">
            Transform your space with our curated collection of luxury botanicals, designed to bring life, elegance, and tranquility to the modern home.
          </p>
          <div className="hero-actions">
            <a href="#shop" className="btn btn-primary">
              Shop Collection
            </a>
            <a href="#quiz" className="care-link" style={ {textTransform: 'none', letterSpacing: 'normal', color: 'var(--color-text-main)'} }>
              Find Your Plant
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img 
              src={`${import.meta.env.BASE_URL}images/hero_plant.png`} 
              alt="Huge beautiful monstera plant in a modern living space" 
              className="hero-image"
            />
            <div className="hero-image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
