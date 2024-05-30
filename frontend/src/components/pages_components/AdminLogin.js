import React, { useState } from 'react';
import { sessionStorage } from '../../storage/SessionStorage';
import { authApi } from '../../api/AuthApi';
import { useSession } from '../../hooks/UseSession';
import { useNavigate, useOutletContext } from 'react-router-dom';

const AdminLoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const session = useOutletContext();
  const navigate = useNavigate();

  const SESSION_KEY = 'SESSION_KEY';

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const sessionData = await authApi.login();
    session.setData(sessionData);
    sessionStorage.setItem(SESSION_KEY, sessionData);
    setLoading(false);
    navigate('/admin/dashboard');
  };


  return (
    <div>
      <h1>Admin Login</h1>
      <button disabled={isLoading} onClick={handleLogin}>
        {isLoading ? 'loading...' : 'Login'}
      </button>
    </div>
  );
};

export default AdminLoginPage;