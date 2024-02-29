import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MenuButtonArrow = styled(Button)(({ open }) => ({
    width: `${open ? '248px' : '40px'}`,
    height: '20px',
    justifyContent: 'centre',
    margin: '0 auto',
    boxShadow: 'none',
    color: '#212121',
    borderRadius: '0',
    backgroundColor: '#FFFFFF',
    '&:hover': {
        backgroundColor: '#E1E1F7',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#E1E1F7'
    }
}));

export default MenuButtonArrow;
