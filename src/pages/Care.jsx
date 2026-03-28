import React from 'react';
import { Droplets, Sun, AlertTriangle, BookOpen, Wind, ThermometerSun } from 'lucide-react';
import './Care.css';

const Care = () => {
  return (
    <div className="care-page fade-in-up">
      {/* Premium Hero */}
      <section className="care-hero">
        <div className="container care-hero-content">
          <h1>The Art of Plant Care</h1>
          <p>Master the simple, timeless routines that keep your indoor jungle thriving.</p>
        </div>
      </section>

      {/* Core Needs: Watering & Sunlight */}
      <section className="care-core section container">
        <div className="care-split">
          <div className="care-text-block">
            <Droplets size={36} className="care-icon" />
            <h2>Watering Guide</h2>
            <p>
              Overwatering is the leading cause of plant decline. Always check the soil moisture before you water. For most tropicals, allow the top 2 inches of soil to dry out completely. 
            </p>
            <ul className="care-list">
              <li>Use filtered water or let tap water sit overnight.</li>
              <li>Water thoroughly until it drains from the bottom.</li>
              <li>Never let plants sit in standing water.</li>
            </ul>
          </div>
          <div className="care-image-block">
            <img 
              src={`${import.meta.env.BASE_URL}images/care_watering.jpg`} 
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop"} 
              alt="Watering a premium indoor plant" 
            />
          </div>
        </div>

        <div className="care-split reversed">
          <div className="care-text-block">
            <Sun size={36} className="care-icon" />
            <h2>Sunlight Requirements</h2>
            <p>
              Light is food for your plants. Understanding your home's natural light profile is the first step to successful plant parenthood. Assess which direction your windows face.
            </p>
            <ul className="care-list">
              <li><strong>Bright Indirect:</strong> Just out of direct sun (ideal for most).</li>
              <li><strong>Low Light:</strong> North-facing windows (Sansevieria, ZZ plants).</li>
              <li><strong>Direct Sun:</strong> South-facing (Cacti, succulents).</li>
            </ul>
          </div>
          <div className="care-image-block">
            <img 
              src={`${import.meta.env.BASE_URL}images/care_sunlight.jpg`} 
              onError={(e) => e.target.src = "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=800&auto=format&fit=crop"} 
              alt="Sunlight hitting indoor plants" 
            />
          </div>
        </div>
      </section>

      {/* Common Mistakes grid */}
      <section className="care-mistakes section">
        <div className="container">
          <div className="section-header center">
            <AlertTriangle size={32} className="care-header-icon" />
            <h2>Common Mistakes</h2>
            <p>Avoid these frequent pitfalls to ensure your plants live a long, healthy life.</p>
          </div>
          <div className="mistakes-grid">
            <div className="mistake-card">
              <h4>Over-potting</h4>
              <p>Moving a plant into a pot that is too large causes the soil to retain water longer than the roots can drink, leading to root rot.</p>
            </div>
            <div className="mistake-card">
              <h4>Ignoring Drainage</h4>
              <p>Decorative pots without holes trap water. Always keep plants in a nursery pot inside the decorative cachepot.</p>
            </div>
            <div className="mistake-card">
              <h4>Drafts & Vents</h4>
              <p>Placing plants near AC or heating vents causes rapid temperature and humidity swings, stressing tropical foliage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="care-tips section container">
        <div className="section-header">
          <BookOpen size={32} className="care-header-icon" />
          <h2>Plant Care Tips</h2>
        </div>
        <div className="tips-grid">
          <div className="tip-item">
            <Wind size={24} className="tip-icon" />
            <div className="tip-content">
              <h3>Dust the leaves</h3>
              <p>Gently wipe leaves with a damp cloth monthly. Dust clogs their pores and limits their ability to photosynthesize.</p>
            </div>
          </div>
          <div className="tip-item">
            <ThermometerSun size={24} className="tip-icon" />
            <div className="tip-content">
              <h3>Boost Humidity</h3>
              <p>Most house plants are tropical. Group them together, use a humidifier, or put them on a pebble tray with water.</p>
            </div>
          </div>
          <div className="tip-item">
            <Droplets size={24} className="tip-icon" />
            <div className="tip-content">
              <h3>Fertilize in Spring</h3>
              <p>Feed your plants with a diluted liquid fertilizer only during their active growing season (Spring and Summer).</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Care;
