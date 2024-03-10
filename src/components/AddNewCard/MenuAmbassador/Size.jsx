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
                outline: 'none',
                borderRadius: '8px'
            }}
        >
            <Typography
                className="mainInfo"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#212121'
                }}
            >
                <p className="mainInfo__text">Размер</p>
                <p className="mainInfo__steps">Шаг 5/7</p>
            </Typography>
            <SizeCard />
        </Box>
    );
};
export default Size;
