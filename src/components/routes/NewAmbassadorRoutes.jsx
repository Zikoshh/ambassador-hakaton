//import { lazy } from 'react';

//import Loadable from '../Loadable';
import Size from '../AddNewCard/MenuAmbassador/Size';
import ExtraInfo from '../AddNewCard/MenuAmbassador/ExtraInfo';
import Adress from '../AddNewCard/MenuAmbassador/Adress';
import Contacts from '../AddNewCard/MenuAmbassador/Cotacts';
import MainInfo from '../AddNewCard/MenuAmbassador/MainInfo';
import Promocodes from '../AddNewCard/MenuAmbassador/Promocodes';
import Tasks from '../AddNewCard/MenuAmbassador/Tasks';
import AddNewAmbassadorCardLayout from '../layout/AddNewAmbassadorCard/AddNewAmbassadorCard';

//const AuthLogin = Loadable(lazy(() => import('../Login/Login')));

const NewAmbassadorRoutes = {
    path: '/',
    element: <AddNewAmbassadorCardLayout />,
    children: [
        {
            path: 'newCard__page1',
            element: <MainInfo />
        },
        {
            path: 'newCard__page2',
            element: <Adress />
        },
        {
            path: 'newCard__page3',
            element: <Contacts />
        },
        {
            path: 'newCard__page4',
            element: <ExtraInfo />
        },
        {
            path: 'newCard__page5',
            element: <Size />
        },
        {
            path: 'newCard__page6',
            element: <Promocodes />
        },
        {
            path: 'newCard__page7',
            element: <Tasks />
        }
    ]
};

export default NewAmbassadorRoutes;
