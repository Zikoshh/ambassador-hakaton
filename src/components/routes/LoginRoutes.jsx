import Email_signin from '../Login/Email/Email_signin';
import Email_confirmation from '../Registration/Email-confirmation/Email_confirmation.jsx';
import Email_signup from '../Registration/Email/Email_signup';
import Password_signup from '../Registration/Password/Password_signup';
import Email_help from '../Registration/Email-help/Email_help';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import Password_signin from '../Login/Password/Password_signin';
import Password_restore from '../Login/Password-restore/Password_restore';
import Login_access from '../Login/Login-access/Login_access.jsx';

const LoginRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: 'signin-email',
            element: <Email_signin />
        },
        {
            path: 'signup-email',
            element: <Email_signup />
        },
        {
            path: 'signup-password',
            element: <Password_signup />
        },
        {
            path: 'signup-confirmation',
            element: <Email_confirmation />
        },
        {
            path: 'signup-help',
            element: <Email_help />
        },
        {
            path: 'signin-password',
            element: <Password_signin />
        },
        {
            path: 'signin-passRestore',
            element: <Password_restore />
        },
        {
            path: 'signin-access',
            element: <Login_access />
        }
    ]
};
export default LoginRoutes;
