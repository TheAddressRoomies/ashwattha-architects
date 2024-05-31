import React, { useState } from 'react';
import ProjectForm from '../common_components/ProjectForm';
import { sessionStorage } from '../../storage/SessionStorage';
import { authApi } from '../../api/AuthApi';
import { useNavigate, useOutletContext } from 'react-router-dom';

const AdminDashboardPage = () => {
  const [isLoading, setLoading] = useState(false);
  const session = useOutletContext();
  const navigate = useNavigate();

  const onLogout = async () => {
    setLoading(true);
    sessionStorage.clear();
    await authApi.logout();
    session.setData(null);
    setLoading(false);
    navigate('/admin/login');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button disabled={isLoading} onClick={onLogout}>
        {isLoading ? 'loading...' : 'Logout'}
      </button>
      <ProjectForm />
    </div>
  );
}

export default AdminDashboardPage;