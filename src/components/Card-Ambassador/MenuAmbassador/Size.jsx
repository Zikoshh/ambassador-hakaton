import { Box, Typography } from '@mui/material';
import SizeCard from '../CardForms/SizeCard';

const Size = () => {
    return (
        <Box
            sx={{
                fontFamily: ('Inter', 'Arial', 'sans-serif'),
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 40px 0px',
                width: '100%',
                backgroundColor: '#ffff',
                border: 'none',
                outline: 'none'
            }}
        >
            <Typography
                sx={{
                    height: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#212121'
                }}
            >
                <p className="mainInfo">Размер</p>
            </Typography>
            <SizeCard />
        </Box>
    );
};
export default Size;
