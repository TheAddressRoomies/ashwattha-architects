import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import { FaFacebookF, FaRegEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="page-footer font-small unique-color-dark py-4 mt-3">
      <div className="container">
        <Row className="justify-content-lg-center">
          <Col md={12} lg={5} className="d-flex justify-content-lg-start justify-content-center mb-lg-0 mb-2">
            <div className="footer-copyright text-center bg-transparent" style={{ letterSpacing: '0.5px', fontSize: '15px' }}>
              © 2024 Copyright:
              <a href="#header-section" className="footer-business-name">Ashwattha Architects</a>
            </div>
          </Col>
          <Col md={12} lg={5} className="d-flex justify-content-lg-end justify-content-center align-items-center">
            <ul className="list-unstyled d-flex mb-0" style={{ fontSize: '17px' }}>
              <li>
                <a className="footer-icons-container" href="https://www.facebook.com/profile.php?id=100067924069593&mibextid=LQQJ4d" role="button"><FaFacebookF className="footer-icons"/></a>
              </li>
              <li>
                <a className="footer-icons-container" href="https://www.instagram.com/ashwatthaarchitects?igsh=MXY4NnF1eGl2YWY2MQ%3D%3D&utm_source=qr" role="button"><FaInstagram className="footer-icons"/></a>
              </li>
              <li>
                <a className="footer-icons-container" href="mailto:ashwatthaarchitects@gmail.com" role="button"><FaRegEnvelope className="footer-icons"/></a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
);

export default Footer;