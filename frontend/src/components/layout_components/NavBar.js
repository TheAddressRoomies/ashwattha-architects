import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import './NavBar.css';
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/projects');
  }

  const handleAboutUsClick = () => {
    navigate('/about');
  }

  const handleHomeClick = () => {
    navigate('');
  }

  const handlContactUsClick = () => {
    navigate('');
  }

  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'transparent', zIndex: 99, boxShadow: 'none'}}>
  
        <Container>
  
          <Navbar.Brand href="#home" className='navbar-brand'>
              <img src={logo} className="logo" onClick={handleHomeClick}/>
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-toggle'/>
  
          <Navbar.Collapse id="responsive-navbar-nav"  className='justify-content-end' style={{zIndex: 99}}>
            <Nav>
              <Nav.Link href="#Home" className='nav-link' onClick={handleHomeClick}>
                  Home
              </Nav.Link>
              <Nav.Link eventKey={2} className='nav-link' onClick={handleProjectsClick}>
                  Projects
              </Nav.Link>
              <Nav.Link eventKey={3} href="#ContactUs" className='nav-link' onClick={handlContactUsClick}>
                  Contact Us
              </Nav.Link>
              <Nav.Link eventKey={4} className='nav-link' onClick={handleAboutUsClick}>
                  About Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;