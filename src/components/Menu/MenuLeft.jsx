import { useState } from 'react';

import Menu from './Menu';
import MenuButton from '../../ui/MenuButton/MenuButton';
import MenuButtonArrow from '../../ui/MenuButton/MenuButtonArrow';
import { Gear, CaretLeft } from '@gravity-ui/icons';
import { Box } from '@mui/material';

const MenuLeft = () => {
    // состояние меню
    const [open, setOpen] = useState(true);
    console.log('open =', open);
    const handleMenuToggle = () => {
        console.log('clik handleMenuToggle');
        setOpen(!open);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    //minWidth: (open ? '248px' : '180px'),
                    width: open ? '248px' : '102px',
                    backgroundColor: '#F7F7F8',
                    border: '1px solid blue'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: open ? '224px' : '76px',
                        height: '100%',
                        margin: '12px auto 0px',
                        gap: '0',
                    }}
                >
                    <Menu open={open} />
                    <MenuButton sx={{marginBottom: '20px'}}startIcon={<Gear />} open={open}>
                        {open ? 'Настройки' : ''}
                    </MenuButton>
                </Box>
                <MenuButtonArrow startIcon={<CaretLeft />} onClick={handleMenuToggle} open={open}></MenuButtonArrow>
            </Box>
        </>
    );
};
export default MenuLeft;
