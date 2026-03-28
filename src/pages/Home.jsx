import React from 'react';
import Hero from '../components/Hero';
import FeaturedCategories from '../components/FeaturedCategories';
import BestSelling from '../components/BestSelling';
import BrandStory from '../components/BrandStory';
import PlantCareTeaser from '../components/PlantCareTeaser';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <BestSelling />
      <BrandStory />
      <PlantCareTeaser />
    </>
  );
};

export default Home;
