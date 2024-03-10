import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ActionButton = styled(Button)({
    width: '125px',
    height: '40px',
    display: "flex",
    justifyContent: 'center',
    margin: '0 auto',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '22px',
    textTransform: 'none',
    border: '1px solid #C3C3C9',
    borderRadius: '12px',
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    color: '#6B6872',
    fontFamily: 'Inter',
    '&:hover': {
        backgroundColor: '#FBF9FF',
        borderColor: '#E1E1F7',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        borderColor: '#E1E1F7',
        backgroundColor: '#140DDA'
    }
});

export default ActionButton;
