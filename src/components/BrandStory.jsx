import React from 'react';
import './BrandStory.css';

const BrandStory = () => {
  return (
    <section className="section brand-story">
      <div className="container brand-story-container">
        <div className="brand-story-image-wrapper">
          <img 
            src={`${import.meta.env.BASE_URL}images/brand_story_lifestyle.png`} 
            alt="CazyGreen editorial lifestyle featuring modern indoor plants" 
            className="brand-story-image"
          />
        </div>
        
        <div className="brand-story-content">
          <span className="section-subtitle">The Editorial Collection</span>
          <h2 className="brand-story-title">Designed for Modern Spaces</h2>
          <p className="brand-story-text">
            Our collection is thoughtfully curated to harmonize with contemporary interiors. Each plant is selected not just for its botanical beauty, but for its architectural presence and ability to transform a room into a serene sanctuary.
          </p>
          <p className="brand-story-text">
            Experience the intersection of high-end design and natural vitality—where every leaf tells a story of refined living.
          </p>
          <a href="#collection" className="btn btn-secondary story-btn">
            Explore the Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
