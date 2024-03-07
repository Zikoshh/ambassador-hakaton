import { Box, Typography } from '@mui/material';
import ContactCard from '../CardForms/ContactCard';

const Contacts = () => {
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
                <p className="mainInfo__text">Контакты</p>
                <p className="mainInfo__steps">Шаг 3/7</p>
            </Typography>
            <ContactCard />
        </Box>
    );
};
export default Contacts;
