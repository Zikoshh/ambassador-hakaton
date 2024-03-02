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
            element: <p>Главная страница</p>
        },
        {
            path: 'profiles',
            element: <p>Страница profiles</p>
        },
        {
            path: 'content',
            element: <p>Страница content</p>
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
        }
    ]
};

export default MainRoutes;
