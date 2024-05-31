import React, { useState } from 'react';
import { sessionStorage } from '../../storage/SessionStorage';
import { authApi } from '../../api/AuthApi';
import { useSession } from '../../hooks/UseSession';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Form, FloatingLabel, Col, Container, Button } from 'react-bootstrap';
import './AdminLogin.css';

const AdminLoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError]  = useState();
  const session = useOutletContext();
  const navigate = useNavigate();

  const SESSION_KEY = 'SESSION_KEY';

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value}));
    setError(null);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    authApi.login(formData.username, formData.password)
    .then((sessionData) => {
      session.setData(sessionData);
      sessionStorage.setItem(SESSION_KEY, sessionData);
      setLoading(false);
      navigate('/admin/dashboard');
    })
    .catch((error) => {
      setLoading(false);
      setError(error.response.data.backendError);
    });
  };


  return (
    <Container className="admin-login-page">
      <div className='login-form-card m-4'>
        <h1>Admin Login</h1>
        <Form onSubmit={handleLogin} className="login-form">
          <Col className='mt-4' lg={8} md={10} sm={12} xs={12}>
            <Form.Group controlId="form-username" className="admin-login-form-field">
              <FloatingLabel controlId="form-username" label="Username" className="contact-us-form-field-label">
                  <Form.Control type="text" placeholder="Username" onChange={handleOnChange} name='username' required/>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col className='mt-2' lg={8} md={10} sm={12} xs={12}>
            <Form.Group controlId="form-password" className="admin-login-form-field">
              <FloatingLabel controlId="form-password" label="Password" className="contact-us-form-field-label">
                  <Form.Control type="password" placeholder="Password" onChange={handleOnChange} name='password' required/>
              </FloatingLabel>
            </Form.Group>
          </Col>
          <>{error && <span className='mt-2 login-error'>{error}</span>}</>
          <Col className='mt-4'>
            <Button sm variant="primary" type="submit" className="contact-us-submit-button" disabled={isLoading}>
               {isLoading ? 'loading...' : 'Login'}
            </Button>
          </Col>
        </Form>
      </div>
    </Container>
  );
};

export default AdminLoginPage;