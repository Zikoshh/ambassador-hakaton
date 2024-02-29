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
            <MenuButton startIcon={<Persons />} open={open}>
                {open ? 'Профили' : ''}
            </MenuButton>
            <MenuButton startIcon={<Picture />} open={open}>
                {open ? 'Контент' : ''}
            </MenuButton>
            <MenuButton startIcon={<ListCheck />} open={open}>
                {open ? 'Задачи' : ''}
            </MenuButton>
            <MenuButton startIcon={<TShirt />} open={open}>
                {open ? 'Мерч' : ''}
            </MenuButton>
            <MenuButton startIcon={<ChartPie />} open={open}>
                {open ? 'Аналитика' : ''}
            </MenuButton>
        </Stack>
    );
}

//Профили
