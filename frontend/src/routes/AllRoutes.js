
import { PublicRoute } from '../routes/PublicRoute.js';
import { ProtectedRoute } from '../routes//ProtectedRoute.js';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import { MainLayout } from '../components/layout_components/MainLayout.js';
import HomePage  from '../components/pages_components/Homepage.js';
import ProjectsPage  from '../components/pages_components/ProjectsPage.js';
import ProjectDetails  from '../components/pages_components/ProjectDetails.js';
import AboutUsPage  from '../components/pages_components/AboutUs.js';
import NotFoundPage  from '../components/common_components/NotFoundPage.js';
import AdminLoginPage from '../components/pages_components/AdminLogin.js';
import AdminDashboardPage from '../components/pages_components/AdminDashboard.js';
import Services from '../components/pages_components/Services.js';

const AllRoutes = () => (
    <Router>
      <div>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
        <Routes>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id/view" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/admin/login" element={<PublicRoute element={<AdminLoginPage/>}/>} />
            <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminDashboardPage />}/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
  
  export default AllRoutes;