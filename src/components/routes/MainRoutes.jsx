import { lazy } from 'react';
//import ContentsTable from '../Contents/Contents';

import Loadable from '../Loadable';
import MainLayout from '../layout/MainLayout/MainLayout';
const Contents = Loadable(lazy(() => import('../Contents/Contents')));
const Profiles = Loadable(lazy(() => import('../Profiles/Profiles')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Profiles />
    },
    {
      path: 'profiles',
      element: <Profiles />
    },
    {
      path: 'content',
      element: <Contents />
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
  ]
};

export default MainRoutes;
