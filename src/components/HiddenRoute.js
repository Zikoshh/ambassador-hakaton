import { useNavigate } from 'react-router-dom';

const HiddenRoute = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();
  return !isLoggedIn ? children : navigate(-1);
};

export default HiddenRoute;
