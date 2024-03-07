import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const MenuButton = styled(Button)(() => ({
    width: '212px',
    height: '48px',
    display: 'flex',
    justifyContent: 'left',
    padding: '0px 0px 0px 20px',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    textTransform: 'none',
    borderRadius: '12px',
    backgroundColor: 'rgba(247, 247, 248, 1)',
    boxShadow: 'none',
    color: '#212121',
    fontFamily: ['Inter'].join(','),
    '&:hover': {
        backgroundColor: '#E1E1F7',
        boxShadow: 'none',
        color: 'rgba(98, 93, 245, 1)'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#E1E1F7'
    }
}));

export default MenuButton;
