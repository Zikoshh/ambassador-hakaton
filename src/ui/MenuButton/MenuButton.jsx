import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MenuButton = styled(Button)(({ open }) => ({
    width: `${open ? '192px' : '40px'}`,
    height: '48px',
    display: 'flex',
    justifyContent: `${open ? 'left' : 'center'}`,
    margin: '0 auto',
    paddingLeft: `${open ? '20px' : '0'}`,
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    textTransform: 'none',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    color: '#212121',
    fontFamily: ['Inter'].join(','),
    '&:hover': {
        backgroundColor: '#E1E1F7',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#E1E1F7'
    }
}));

export default MenuButton;
