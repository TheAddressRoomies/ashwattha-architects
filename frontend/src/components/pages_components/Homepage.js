import React from 'react';
import './HomePage.css';
import AutoIncrementLayout from './AutoIncrementLayout';
import CarouselLayout from './CarouselLayout';
import Services from './Services';
import Expertise from './Expertise';
import ContactUs from './ContactUs';
import Reviews from './Reviews';
import OurPartners from './OurPartners';

const HomePage = () =>{
  return  (
    <div className="home-page">
      <CarouselLayout/>
      <AutoIncrementLayout/>
      <Expertise/>
      {/* <Services/> */}
      <Reviews/>
      <OurPartners/>
      <ContactUs/>
    </div>
  );
};

export default HomePage;