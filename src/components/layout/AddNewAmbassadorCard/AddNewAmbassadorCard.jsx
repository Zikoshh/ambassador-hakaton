import { Box } from '@mui/material';
import CardHeader from '../../AddNewCard/Header/CardHeader';
import { Outlet } from 'react-router-dom';

const AddNewAmbassadorCardLayout = () => {
    return (
        <Box
            className="addNewAmbassadorCard"
            sx={{
                display: 'flex',
                width: '416px',
                margin: '20px auto 0px',
                flexDirection: 'column',
                borderRadius: '8px',
                border: '1px solid rgb(195, 195, 201)'
            }}
        >
            <CardHeader />
            <Box sx={{ display: 'flex', width: '100%', borderRadius: '8px' }}>
                <Outlet />
            </Box>
        </Box>
    );
};

export default AddNewAmbassadorCardLayout;
