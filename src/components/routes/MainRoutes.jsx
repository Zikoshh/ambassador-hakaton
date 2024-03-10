import { lazy } from 'react';
//import ContentsTable from '../Contents/Contents';

import Loadable from '../Loadable';
import MainLayout from '../layout/MainLayout/MainLayout';
const Contents = Loadable(lazy(() => import('../Contents/Contents')));
const Profiles = Loadable(lazy(() => import('../Profiles/Profiles')));
// // import MainInfo from '../Card-Ambassador/MenuAmbassador/MainInfo';
// import Adress from '../Card-Ambassador/MenuAmbassador/Adress';
// import Contacts from '../Card-Ambassador/MenuAmbassador/Cotacts';
// import ExtraInfo from '../Card-Ambassador/MenuAmbassador/ExtraInfo';
// import Size from '../Card-Ambassador/MenuAmbassador/Size';
// import Promocodes from '../Card-Ambassador/MenuAmbassador/Promocodes';
// import Tasks from '../Card-Ambassador/MenuAmbassador/Tasks';
// import AmbassadorLayout from '../layout/AmbassadorLayout/AmbassadorLayout';

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
        }
    ]
};

export default MainRoutes;
