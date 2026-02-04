import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, roles }) => {
  const token = sessionStorage.getItem("token");
  const role = sessionStorage.getItem("role");

  if (!token) return <Navigate to="/login" />;

  if (roles && !roles.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
