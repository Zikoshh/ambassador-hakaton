import Stack from '@mui/material/Stack';
import MenuButton from '../../../ui/MenuButton/MenuButton';
import { NavLink } from 'react-router-dom';
export default function Menu() {
    return (
        <Stack sx={{ width: '224px', display: 'flex', margin: '20px auto', gap: '4px' }} useFlexGap spacing={2}>
            <MenuButton LinkComponent={NavLink} to="/profiles/card/mainInfo">
                Основная информация
            </MenuButton>
            <MenuButton>Адрес</MenuButton>
            <MenuButton>Контакты</MenuButton>
            <MenuButton>Доп.информация</MenuButton>
            <MenuButton>Размер</MenuButton>
            <MenuButton>Промокоды</MenuButton>
            <MenuButton>Задачи</MenuButton>
        </Stack>
    );
}
