import { useRoutes } from 'react-router-dom';

import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
// последовательность роутов важна!!
export default function ThemeRoutes() {
    return useRoutes([MainRoutes, LoginRoutes]);
}
