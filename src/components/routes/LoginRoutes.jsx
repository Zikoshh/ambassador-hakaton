import { lazy } from 'react';

import Loadable from '../Loadable';
import AuthLayout from '../layout/AuthLayout/AuthLayout';

// TODO: "../Login/Login" заменить на свой компонент формы авторизации и регистрации
const AuthLogin = Loadable(lazy(() => import('../Login/Login')));

const LoginRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'register',
      element: <AuthLogin />
    }
  ]
};

export default LoginRoutes;
