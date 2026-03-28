import React from 'react';
import { Link } from 'react-router-dom';
import './PlantCareTeaser.css';

const PlantCareTeaser = () => {
  return (
    <section className="section plant-care">
      <div className="container plant-care-container text-center">
        <div className="plant-care-content">
          <span className="section-subtitle">Plant Care</span>
          <h2 className="plant-care-title">
            Thrive Guide
          </h2>
          <p className="plant-care-description">
            Bringing nature indoors is just the beginning. Discover simple, expert routines to keep your sanctuary lush and vibrant all year round.
          </p>
          
          <Link to="/care" className="btn btn-primary care-btn">
            Read Care Guide
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlantCareTeaser;
