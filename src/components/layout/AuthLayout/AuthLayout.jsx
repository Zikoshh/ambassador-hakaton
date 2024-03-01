import { Outlet } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = () => {
    return (
        <main className="authlayout">
            <p className="authlayout__title">AuthLayot</p>
            <Outlet />
        </main>
    );
};

export default AuthLayout;
