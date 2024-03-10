import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn }) => {
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to='/' state={{ from: location }} />;
};

export default ProtectedRoute;
