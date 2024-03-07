import { Box, Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import './SizeCard.css';
import './PromocodeCard.css';

const PromocodeCard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    return (
        <form className="cardForm promocode">
            <Stack
                className="promoItems"
                direction="column"
                sx={{
                    width: '336px',
                    height: '178px',
                    display: 'flex',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '22px'
                }}
            ></Stack>
            <div className="cardForm__buttons promo">
                <button className="cardForm__button-cancel">Сбросить</button>
                <NavLink
                    to="/newCard__page7"
                    className="cardForm__button-confirm"
                    style={{ display: 'flex', textDecoration: 'none', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                >
                    Далее
                </NavLink>
            </div>
        </form>
    );
};
export default PromocodeCard;
