//import { lazy } from 'react';

//import Loadable from '../Loadable';
import MainLayout from '../layout/MainLayout/MainLayout';
import ContentsTable from '../Contents/Contents';
//const AuthLogin = Loadable(lazy(() => import('../Login/Login')));
import Profiles from '../Profiles/Profiles';

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <p>Главная страница</p>
    },
    {
      path: 'profiles',
      element: <p>Профили</p>
    },
    {
      path: 'content',
      element: <ContentsTable />
    },
    {
      path: 'tasks',
      element: <p>Страница tasks</p>
    },
    {
      path: 'merch',
      element: <p>Страница merch</p>
    },
    {
      path: 'analytics',
      element: <p>Страница analytics</p>
    },
    {
      path: 'settings',
      element: <p>Страница settings</p>
    },
    {
      path: 'test',
      element: <Profiles />
    },
  ]
};

export default MainRoutes;
