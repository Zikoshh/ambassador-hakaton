import { styled } from '@mui/material/styles';
import { Select } from '@mui/material';

const SelectForTable = styled(Select)({
    width: 'max-content',
    height: '28px',
    color: '#6B6872',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '22px',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    '&:hover': {
        borderColor: '#A5A5AC',
    },
    '&:active': {
        boxShadow: 'none', //?
    }
});

export default SelectForTable;
