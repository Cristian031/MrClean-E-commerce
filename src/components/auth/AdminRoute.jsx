import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();  
  const isAdmin = user?.email === import.meta.env.VITE_MAIL;

  return isAdmin ? children : <Navigate to="/" />;
};

export default AdminRoute;
