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
    path: '/card',
    element: <AmbassadorLayout />,
    children: [
        {
            path: '/card/mainInfo',
            element: <MainInfo />
        },
        {
            path: '/card/address',
            element: <Adress />
        },
        {
            path: '/card/contacts',
            element: <Contacts />
        },
        {
            path: '/card/extraInfo',
            element: <ExtraInfo />
        },
        {
            path: '/card/size',
            element: <Size />
        },
        {
            path: '/card/promocodes',
            element: <Promocodes />
        },
        {
            path: '/card/ambassador_tasks',
            element: <Tasks />
        }
    ]
};

export default AmbassadorRoutes;
