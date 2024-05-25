import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import './CarouselLayout.css';
import backgroundImage from '../../assets/background.avif';
import backgroundImage2 from '../../assets/background2.jpg';
import backgroundImage3 from '../../assets/background3.png';

const CarouselLayout = () => (
    <Carousel className='carousel'>
      <Carousel.Item className="img-wrapper">
        <Image src={backgroundImage} className="img hover-zoom"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="img-wrapper">
      <Image src={backgroundImage2} className="img hover-zoom"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="img-wrapper">
      <Image src={backgroundImage3} className="img hover-zoom"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);

export default CarouselLayout;