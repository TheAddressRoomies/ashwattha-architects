import { Row,Col,Form,Button,FloatingLabel } from 'react-bootstrap';
import './ContactUs.css';
import { useState } from 'react';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location = `mailto:ashwatthaarchitects@gmail.com?subject=Lead From Studio Ashwattha Wesbite&body=Name: ${formData.firstName} ${formData.lastName} Email: ${formData.email} Phone: ${formData.mobile} Message: ${formData.message}`;
  };

  return (
    <div className="container my-1 pt-4 pb-5 animated fadeIn slow" id="contact-section">
      <p data-aos="fade-up" data-aos-duration="400" className="section-heading text-center my-4">Contact Us</p>
      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="40" className="contact-section-card py-lg-5 pt-5 pb-4 px-md-5 px-sm-5 text-center text-lg-left dark-grey-text contact-us-card">

        <div id="map-container-google-1" className="z-depth-1 map-container mb-4 mb-lg-0 mx-lg-0 mx-4">
          <iframe title="Google Map" src="https://www.google.com/maps/embed/v1/search?q=Ashwattha+architect's+and+valuer's&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
        </div>

        <Row className="align-items-center mx-lg-0 mx-4">
          <Col lg={5} md={12} className="mb-0 mb-md-0">
            <p style={{ letterSpacing: '1px', fontSize: '22px', fontWeight: 700 ,textAlign:'left', color: '#4F4F4F'}}>Studio Ashwattha</p>
            <p className="text-black" style={{textAlign:'left'}} >
            First Floor, Fulsundar Market, near Lala Urban Bank, Mahtre Wadi, Narayangaon, Maharashtra 410504
            </p>
            <p style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '0.5px',textAlign:'left', color: '#4F4F4F'}}><span className="font-weight-bold mr-2">Email:</span>ashwatthaarchitects@gmail.com</p>
            <p style={{ fontSize: '15px', fontWeight: 400, letterSpacing: '0.5px',textAlign:'left', color: '#4F4F4F' }}><span className="font-weight-bold mr-2">Phone:</span>+91 9975455424</p>
          </Col>
          <Col lg={7} md={12} className="mb-2 mb-md-0 mt-lg-5 mt-0">
            <Form onSubmit={handleSubmit}>
              <Row className="contact-us-form-row">
                <Col md={6} className='mt-2'>
                  <Form.Group controlId="form-first-name" className="contact-us-form-field">
                    <FloatingLabel controlId="form-first-name" label="First name" className="contact-us-form-field-label">
                        <Form.Control type="text" placeholder="First name" onChange={handleOnChange} name='firstName'/>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col md={6} className='mt-2'>
                  <Form.Group controlId="form-last-name" className="contact-us-form-field">
                    <FloatingLabel controlId="form-last-name" label="Last name" className="contact-us-form-field-label">
                      <Form.Control type="text" placeholder="Last name" onChange={handleOnChange} name='lastName'/>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="contact-us-form-row">
                <Col md={6} className='mt-2'>
                  <Form.Group controlId="form-email" className="contact-us-form-field">
                    <FloatingLabel controlId="form-email" label="Email" className="contact-us-form-field-label">
                      <Form.Control type="email" placeholder="E-mail" onChange={handleOnChange} name='email'/>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col md={6} className='mt-2'>
                  <Form.Group controlId="form-mobile" className="contact-us-form-field">
                    <FloatingLabel controlId="form-mobile" label="Mobile No." className="contact-us-form-field-label">
                      <Form.Control type="number" placeholder="Mobile No." onChange={handleOnChange} name='mobile'/>
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <Row className='mt-2'>
                <Form.Group controlId="form-message" className="my-2 mt-2 contact-us-form-row contact-us-form-field">
                  <FloatingLabel controlId="form-message" label="How we can help?" className="mb-3 contact-us-form-field-label">
                    <Form.Control as="textarea" rows={3} placeholder="How we can help?" style={{height:100}} onChange={handleOnChange} name='message'/>
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Button sm variant="primary" type="submit" className="btn-sm ml-0 contact-us-submit-button">SUBMIT</Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
);
};

export default ContactUs;