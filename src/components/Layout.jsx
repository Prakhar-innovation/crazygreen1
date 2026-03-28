import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

// The Layout component persists Navbar and Footer across routes
const Layout = () => {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main key={location.pathname} className="page-transition-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
