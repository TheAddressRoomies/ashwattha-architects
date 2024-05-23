import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Row,Col } from 'react-bootstrap';
import './HomePage.css';
import backgroundImage from '../../assets/background.avif';
import backgroundImage2 from '../../assets/background2.jpg';
import CountUp from 'react-countup';
import AutoIncrementLayout from './AutoIncrementLayout';
import Footer from '../layout_components/Footer';

const HomePage = () => (
  <div className="home-page">
    <Carousel>
      <Carousel.Item>
        <img src={backgroundImage}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={backgroundImage2}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={backgroundImage}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <AutoIncrementLayout/>    
    <Footer/>
  </div>
);

export default HomePage;