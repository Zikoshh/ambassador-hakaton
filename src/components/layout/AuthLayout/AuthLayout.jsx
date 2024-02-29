import Email_signin from '../../Login/Email/Email_signin';
import Email_signup from '../../Registration/Email/Email_signup';
import Password_signup from '../../Registration/Password/Password_signup';
import Email_confirmation from '../../Registration/Email-confirmation/Email_confirmation';
import Email_help from '../../Registration/Email-help/Email_help';
import Password_signin from '../../Login/Password/Password_signin';
import Password_restore from '../../Login/Password-restore/Password_restore';
import Login_access from '../../Login/Login-access/Login_access';
import { Routes, Route } from 'react-router-dom';
import './AuthLayout.css';

const AuthLayout = () => {
    return (
        <div className="authlayout">
            <Routes>
                <Route exact path="/signin-email" element={<Email_signin />} />
                <Route path="/signup-email" element={<Email_signup />} />
                <Route path="/signup-password" element={<Password_signup />} />
                <Route path="/signup-confirmation" element={<Email_confirmation />} />
                <Route path="/signup-help" element={<Email_help />} />
                <Route path="/signin-password" element={<Password_signin />} />
                <Route path="/signin-passRestore" element={<Password_restore />} />
                <Route path="signin-access" element={<Login_access />} />
            </Routes>
        </div>
    );
};

export default AuthLayout;
