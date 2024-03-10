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
    color: 'rgba(107, 104, 114, 1)',
    fontFamily: ['Inter'].join(',')
}));

export default MenuButton;
