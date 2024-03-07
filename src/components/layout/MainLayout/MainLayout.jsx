import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../../Header/Header';
import MenuLeft from '../../MenuMain/MenuLeft';

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex', width: '1440px', height: '100vh', margin: 'auto', flexDirection: 'column' }}>
            <Box sx={{ width: '1440px', margin: 'auto' }}>
                <Header />
            </Box>
            <Box sx={{ display: 'flex', width: '1440px', height: '100vh', margin: '0' }}>
                <MenuLeft />
                <Box sx={{ width: '1192px' }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
};

export default MainLayout;
