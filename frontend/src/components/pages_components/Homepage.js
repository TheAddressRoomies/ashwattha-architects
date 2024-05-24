import React from 'react';
import './HomePage.css';
import AutoIncrementLayout from './AutoIncrementLayout';
import Footer from '../layout_components/Footer';
import CarouselLayout from './CarouselLayout';

const HomePage = () => (
  <div className="home-page">
    <CarouselLayout/>
    <AutoIncrementLayout/>    
    <Footer/>
  </div>
);

export default HomePage;