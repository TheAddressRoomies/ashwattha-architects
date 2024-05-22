import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Welcome to Our Website</h1>
    <Link to="/projects">View All Projects</Link>
  </div>
);

export default HomePage;