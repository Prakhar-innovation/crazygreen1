import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeaturedCategories.css';
import airPurifyingImg from '../assets/category_air_purifying.png';
import lowMaintenanceImg from '../assets/category_low_maintenance.png';
import smartPlantersImg from '../assets/category_smart_planters.png';
import decorativePotsImg from '../assets/category_decorative_pots.png';

const categories = [
  {
    id: 1,
    name: 'Air Purifying',
    image: airPurifyingImg
  },
  {
    id: 2,
    name: 'Low Maintenance',
    image: lowMaintenanceImg
  },
  {
    id: 3,
    name: 'Smart Planters',
    image: smartPlantersImg,
  },
  {
    id: 4,
    name: 'Decorative Pots',
    image: decorativePotsImg,
  }
];

const FeaturedCategories = () => {
  return (
    <section className="section categories-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-subtitle">Collections</span>
          <h2 className="section-title">Shop by Needs</h2>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image-wrapper">
                <img src={category.image} alt={category.name} className="category-image" />
              </div>
              <div className="category-content">
                <h3 className="category-name">{category.name}</h3>
                <span className="category-link">
                  Explore <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
