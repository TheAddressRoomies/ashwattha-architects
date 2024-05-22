import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout_components/Navbar';
import Footer from './components/layout_components/Footer';
import HomePage from './components/pages_components/Homepage.js';
import ProjectsPage from './components/pages_components/ProjectsPage.js';
import ProjectDetails from './components/pages_components/ProjectDetails.js';
import AboutUsPage from './components/pages_components/AboutUs.js';
import AdminLoginPage from './components/pages_components/AdminLogin.js';
import AdminDashboardPage from './components/pages_components/AdminDashboard.js';

const App = () => (

  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
