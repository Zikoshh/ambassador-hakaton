import { Box, InputLabel } from '@mui/material';
import './ContactCard.css';
import { NavLink } from 'react-router-dom';

const ContactCard = () => {
    return (
        <form className="cardForm">
            <InputLabel
                sx={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    textAlign: 'left'
                }}
            >
                Email
            </InputLabel>
            <Box className="cardForm__box">
                <input placeholder="Добавить" className="cardForm__input"></input>
            </Box>

            <InputLabel
                sx={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    textAlign: 'left'
                }}
            >
                Номер телефона
            </InputLabel>
            <Box className="cardForm__box">
                <input placeholder="Добавить" className="cardForm__input"></input>
            </Box>

            <InputLabel
                sx={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    textAlign: 'left'
                }}
            >
                Telegram
            </InputLabel>
            <Box className="cardForm__box index">
                <input placeholder="Добавить" className="cardForm__input"></input>
            </Box>

            <InputLabel
                sx={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    textAlign: 'left'
                }}
            >
                Whatsapp
            </InputLabel>
            <Box className="cardForm__box index">
                <input placeholder="Добавить" className="cardForm__input"></input>
            </Box>

            <InputLabel
                sx={{
                    color: 'rgb(0, 0, 0)',
                    fontSize: '12px',
                    fontWeight: '600',
                    lineHeight: '22px',
                    textAlign: 'left'
                }}
            >
                Блог
            </InputLabel>
            <Box className="cardForm__box-contact">
                <input placeholder="Добавить" className="cardForm__input-contact"></input>
            </Box>
            <div className="cardForm__buttons contacts">
                <button className="cardForm__button-cancel">Сбросить</button>
                <NavLink
                    to="/newCard__page4"
                    className="cardForm__button-confirm"
                    style={{ display: 'flex', textDecoration: 'none', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                >
                    Далее
                </NavLink>
            </div>
        </form>
    );
};
export default ContactCard;
