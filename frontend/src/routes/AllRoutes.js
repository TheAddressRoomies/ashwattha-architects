import { PublicRoute } from "../routes/PublicRoute.js";
import { ProtectedRoute } from "../routes//ProtectedRoute.js";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { MainLayout } from "../components/layout_components/MainLayout.js";
import HomePage from "../components/pages_components/Homepage.js";
import ProjectsPage from "../components/pages_components/ProjectsPage.js";
import ProjectDetails from "../components/pages_components/ProjectDetails.js";
import AboutUsPage from "../components/pages_components/AboutUs.js";
import AdminLoginPage from "../components/pages_components/AdminLogin.js";
import AdminDashboardPage from "../components/pages_components/AdminDashboard.js";
import ServicesPage from "../components/pages_components/services_page/ServicesPage.js";
import AddProjectForm from "../components/common_components/project_forms/AddProjectForm.js";
import EditProjectForm from "../components/common_components/project_forms/EditProjectForm.js";

const AllRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Routes location={location} key={location.key}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id/view" element={<ProjectDetails />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route
            path="/admin/login"
            element={<PublicRoute element={<AdminLoginPage />} />}
          />
          <Route
            path="/admin/dashboard"
            element={<ProtectedRoute element={<AdminDashboardPage />} />}
          />
          <Route
            path="/admin/add-project-form"
            element={<ProtectedRoute element={<AddProjectForm />} />}
          />
          <Route
            path="/admin/edit-project-form"
            element={<ProtectedRoute element={<EditProjectForm />} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
