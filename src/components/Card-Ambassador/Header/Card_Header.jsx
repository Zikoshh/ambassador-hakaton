import { Box } from '@mui/material';
import './Card_Header.css';
import { Xmark } from '@gravity-ui/icons';

const Card_Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '21px 40px',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '668px',
                height: '68px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                backgroundColor: 'rgb(252, 252, 252)',
                borderBottom: '1px solid rgb(195, 195, 201);'
            }}
        >
            <p className="header-title">Мехеев Роман Анатольевич</p>
            <Xmark />
        </Box>
    );
};

export default Card_Header;
