import { Navigate, Outlet, useOutletContext } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
    const session = useOutletContext();
    return session.data ? ( element || <Outlet /> ) : ( <Navigate to="/admin/login" replace /> );
  };