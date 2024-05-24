import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const history = useNavigate();

  const handleLogin = () => {
    // Implement login logic
    history.push('/admin/dashboard');
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLoginPage;