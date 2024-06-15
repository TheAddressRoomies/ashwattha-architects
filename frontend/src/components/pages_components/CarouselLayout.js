import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import "./CarouselLayout.css";
import backgroundImage from "../../assets/background.avif";
import backgroundImage2 from "../../assets/background2.jpg";
import backgroundImage3 from "../../assets/background3.png";
import { dashboardApi } from "../../api/DashboardApi";
import { BACKEND_BASE_URL } from "../../keys/keys";

const CarouselLayout = () => {
  const [images, setIamges] = useState([]);

  useEffect(() => {
    dashboardApi
      .fetchCarouselImages()
      .then((response) => {
        setIamges((_) => response.data.data);
      })
      .catch((error) => {});
  }, []);

  if (images.length == 0) {
    return (
      <Carousel className="carousel">
        <Carousel.Item className="img-wrapper">
          <Image src={backgroundImage} className="img hover-zoom" />
          <Carousel.Caption>
            <h3>Architecture</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-wrapper">
          <Image src={backgroundImage2} className="img hover-zoom" />
          <Carousel.Caption>
            <h3>Interior Design</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-wrapper">
          <Image src={backgroundImage3} className="img hover-zoom" />
          <Carousel.Caption>
            <h3>Landscaping</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-wrapper">
          <Image src={backgroundImage2} className="img hover-zoom" />
          <Carousel.Caption>
            <h3>Valuation</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="img-wrapper">
          <Image src={backgroundImage} className="img hover-zoom" />
          <Carousel.Caption>
            <h3>Liecensing</h3>
            {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  return (
    <Carousel className="carousel">
      {images.length != 0 &&
        images.map((image) => {
          return (
            <Carousel.Item className="img-wrapper">
              <Image
                src={BACKEND_BASE_URL + "/images/" + image.imageName}
                className="img hover-zoom"
              />
              <Carousel.Caption>
                <h3>{image.imageType}</h3>
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CarouselLayout;
