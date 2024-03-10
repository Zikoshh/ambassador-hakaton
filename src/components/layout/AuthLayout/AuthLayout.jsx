import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = () => {
  return (
    <main className="authlayout">
      <Outlet />
    </main>
  )
};

export default AuthLayout;
