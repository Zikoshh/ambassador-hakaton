//import { lazy } from 'react';

//import Loadable from '../Loadable';
import MainInfo from '../Card-Ambassador/MenuAmbassador/MainInfo';
import AmbassadorLayout from '../layout/AmbassadorLayout/AmbassadorLayout';

//const AuthLogin = Loadable(lazy(() => import('../Login/Login')));

const AmbassadorRoutes = {
    path: '/',
    element: <AmbassadorLayout />,
    children: [
        {
            path: 'mainInfo',
            element: <MainInfo />
        },
        {
            path: 'adress',
            element: <p>Страница adress</p>
        },
        {
            path: 'contacts',
            element: <p>Страница contacts</p>
        },
        {
            path: 'extraInfo',
            element: <p>Страница extraInfo</p>
        },
        {
            path: 'size',
            element: <p>Страница size</p>
        },
        {
            path: 'promocodes',
            element: <p>Страница promocodes</p>
        },
        {
            path: 'ambassador_tasks',
            element: <p>Страница tasks</p>
        }
    ]
};

export default AmbassadorRoutes;
