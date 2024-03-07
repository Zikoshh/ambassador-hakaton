import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';
import MenuButton from '../../ui/MenuButton/MenuButton';
import MenuButtonArrow from '../../ui/MenuButton/MenuButtonArrow';
import { Gear, CaretLeft, CaretRight } from '@gravity-ui/icons';
import { Box } from '@mui/material';

const MenuLeft = () => {
    const [open, setOpen] = useState(true);

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
                        gap: '0'
                    }}
                >
                    <Menu open={open} />
                    <MenuButton LinkComponent={NavLink} to="/settings" sx={{ marginBottom: '20px' }} startIcon={<Gear />} open={open}>
                        {open ? 'Настройки' : ''}
                    </MenuButton>
                </Box>
                <MenuButtonArrow startIcon={open ? <CaretLeft /> : <CaretRight />} onClick={handleMenuToggle} open={open}></MenuButtonArrow>
            </Box>
        </>
    );
};
export default MenuLeft;
