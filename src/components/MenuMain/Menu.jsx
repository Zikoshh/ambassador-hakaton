import { NavLink } from 'react-router-dom';
import { Persons, Picture, ListCheck, TShirt, ChartPie } from '@gravity-ui/icons';

import Stack from '@mui/material/Stack';
import MenuButton from '../../ui/MenuButton/MenuButton';

export default function Menu({ open }) {
    return (
        <Stack
            sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: '12px',
                width: open ? '224px' : '76px',
                display: 'flex',
                margin: '20px auto',
                gap: '4px'
            }}
            useFlexGap
            spacing={2}
        >
            <MenuButton LinkComponent={NavLink } to="/profiles" sx={{ marginTop: '20px' }} startIcon={<Persons />} open={open}>
                {open ? 'Профили' : ''}
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/content" startIcon={<Picture />} open={open}>
                {open ? 'Контент' : ''}
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/tasks" startIcon={<ListCheck />} open={open}>
                {open ? 'Задачи' : ''}
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/merch" startIcon={<TShirt />} open={open}>
                {open ? 'Мерч' : ''}
            </MenuButton>
            <MenuButton LinkComponent={NavLink} to="/analytics" sx={{ marginBottom: '20px' }} startIcon={<ChartPie />} open={open}>
                {open ? 'Аналитика' : ''}
            </MenuButton>
        </Stack>
    );
}

//Профили
