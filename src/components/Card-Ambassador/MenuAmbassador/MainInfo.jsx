import { Box, Typography } from '@mui/material';
import { Camera } from '@gravity-ui/icons';
import CardForm from '../../../ui/MenuForm/CardForm';

const MainInfo = () => {
    return (
        <Box
            sx={{
                fontFamily: ('Inter', 'Arial', 'sans-serif'),
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 40px',
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
                <p className="mainInfo">Основная информация</p>
            </Typography>
            <Box
                className="avatar"
                sx={{
                    display: 'flex',
                    position: 'relative',
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(235, 235, 237, 1)',
                    margin: '28px 0px 8px 0px',
                    borderRadius: '50%'
                }}
            >
                <Box
                    className="avatar-icon"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        width: '24px',
                        height: '24px',
                        backgroundColor: 'rgba(98, 93, 245, 1)',
                        borderRadius: '50%',
                        color: '#fff',
                        top: 0,
                        right: 0
                    }}
                >
                    <Camera />
                </Box>
                <Typography
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontWeight: '400',
                        fontSize: '24px',
                        lineHeight: '20px',

                        color: 'rgba(33, 33, 33, 1)'
                    }}
                >
                    МР
                </Typography>
            </Box>
            <Typography
                sx={{
                    height: '24px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgba(171, 171, 171, 1)'
                }}
            >
                <p>Дата создания: 07.08.2023</p>
            </Typography>
            <CardForm />
        </Box>
    );
};
export default MainInfo;