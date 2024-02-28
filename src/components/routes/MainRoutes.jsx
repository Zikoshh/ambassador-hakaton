//import { lazy } from 'react';

//import Loadable from '../Loadable';
import MainLayout from '../layout/MainLayout/MainLayout';

//const AuthLogin = Loadable(lazy(() => import('../Login/Login')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <p>Главная страница1</p>
    },
    {
      path: 'main',
      element: <p>Страница Main</p>
    },
  ]
};

export default MainRoutes;
