import { Box } from '@mui/material';
import Card_Header from '../../Card-Ambassador/Header/Card_Header';
import LeftMenu from '../../Card-Ambassador/MenuAmbassador/LeftMenu';
// import { Outlet } from 'react-router-dom';
import MainInfo from '../../Card-Ambassador/MenuAmbassador/MainInfo';

const AmbassadorLayout = () => {
    return (
        <div className="modal">
            <div className="modal-content">
                <Box
                    className="ambassadorLayout"
                    sx={{
                        display: 'flex',
                        width: '668px',
                        margin: '20px auto 0px',
                        flexDirection: 'column',
                        borderRadius: '8px',
                        border: '1px solid rgb(195, 195, 201)'
                    }}
                >
                    <Card_Header />
                    <Box sx={{ display: 'flex', width: '668px', height: '100%', margin: '0', borderRadius: '8px' }}>
                        <LeftMenu />
                        <Box sx={{ display: 'flex', width: '100%', borderRadius: '8px' }}>
                            <MainInfo />
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
};

export default AmbassadorLayout;
