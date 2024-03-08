import AmbassadorMenu from './AmbassadorMenu';
import Bottom_Menu from './BottomMenu';
import { Box } from '@mui/material';

const LeftMenu = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '252px',
                backgroundColor: 'rgb(247, 247, 248)',
                borderBottomLeftRadius: '8px'
            }}
        >
            <AmbassadorMenu />
            <Bottom_Menu />
        </Box>
    );
};
export default LeftMenu;