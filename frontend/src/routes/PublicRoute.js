import { Navigate, Outlet, useOutletContext } from "react-router-dom";

export const PublicRoute = ({ element }) => {
    const session = useOutletContext();
    return session.data ? <Navigate to="/admin/dashboard" replace /> : element || <Outlet />;
  };