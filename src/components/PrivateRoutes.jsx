import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes() {
  const isAuthenticated = !!localStorage.getItem("jwtToken");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
