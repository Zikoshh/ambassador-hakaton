import { NavLink } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import MenuButton from './MenuButton';
export default function Menu() {
    return (
        <Stack sx={{ width: '224px', display: 'flex', margin: '20px 20px 0px', gap: '0px' }} useFlexGap spacing={2}>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/mainInfo">
                Основная информация
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/address">
                Адрес
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/contacts">
                Контакты
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/extraInfo">
                Доп.информация
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/size">
                Размер
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/promocodes">
                Промокоды
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/ambassador_tasks">
                Задачи
            </MenuButton>
        </Stack>
    );
}
