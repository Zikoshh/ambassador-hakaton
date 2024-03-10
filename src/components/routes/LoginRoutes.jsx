import AuthLayout from '../layout/AuthLayout/AuthLayout';
import Password_restore from '../Login/Password-restore/Password_restore';
import Login__no_access from '../Login/Login__no_access/Login__no_access.jsx';
import Login from '../Login/Login.jsx';
import Signup from '../Signup/Signup.jsx';
import Signup__confirmation from '../Signup/Signup__confirmation/Signup__confirmation.jsx';
import Signup__help from '../Signup/Signup__help/Signup__help.jsx';

const LoginRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',  //исправленный
            element: <Login />
        },
        {
            path: 'signin-passRestore',
            element: <Password_restore /> //восстановление пароля, исправить!!
        },
        {
            path: 'signup',  //исправленный
            element: <Signup />
        },
        {
            path: 'signup_confirmation', //подветрждени регистрации, исправить!!
            element: <Signup__confirmation />
        },
        {
            path: 'signup_help',    //информация, если не получили письмо, исправить!!
            element: <Signup__help />
        },
        {
            path: 'login_no_access', //это если доступ ограничен
            element: <Login__no_access />
        },
    ]
};

export default LoginRoutes;
