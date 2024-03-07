//import { lazy } from 'react';

//import Loadable from '../Loadable';
import Size from '../Card-Ambassador/MenuAmbassador/Size';
import ExtraInfo from '../Card-Ambassador/MenuAmbassador/ExtraInfo';
import Adress from '../Card-Ambassador/MenuAmbassador/Adress';
import Contacts from '../Card-Ambassador/MenuAmbassador/Cotacts';
import MainInfo from '../Card-Ambassador/MenuAmbassador/MainInfo';
import AmbassadorLayout from '../layout/AmbassadorLayout/AmbassadorLayout';
import Promocodes from '../Card-Ambassador/MenuAmbassador/Promocodes';
import Tasks from '../Card-Ambassador/MenuAmbassador/Tasks';

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
            element: <Adress />
        },
        {
            path: 'contacts',
            element: <Contacts />
        },
        {
            path: 'extraInfo',
            element: <ExtraInfo />
        },
        {
            path: 'size',
            element: <Size />
        },
        {
            path: 'promocodes',
            element: <Promocodes />
        },
        {
            path: 'ambassador_tasks',
            element: <Tasks />
        }
    ]
};

export default AmbassadorRoutes;
