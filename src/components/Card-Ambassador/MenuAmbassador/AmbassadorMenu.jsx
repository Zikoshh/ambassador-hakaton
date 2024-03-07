import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import MenuButton from './MenuButton';
export default function AmbassadorMenu() {
    return (
        <Stack sx={{ width: '224px', display: 'flex', margin: '20px 20px 0px', gap: '0px' }} useFlexGap spacing={2}>
            <MenuButton LinkComponent={NavLink} to="/mainInfo">
                Основная информация
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/adress">
                Адрес
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/contacts">
                Контакты
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/extraInfo">
                Доп.информация
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/size">
                Размер
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/promocodes">
                Промокоды
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/ambassador_tasks">
                Задачи
            </MenuButton>
        </Stack>
    );
}
