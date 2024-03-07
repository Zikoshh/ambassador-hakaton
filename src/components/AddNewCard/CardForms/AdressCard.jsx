import { Box, InputLabel } from '@mui/material';
import './AdressCard.css';
import { NavLink } from 'react-router-dom';

const AdressCard = () => {
    return (
        <Box className="box-container">
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
                    Страна
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
                    Город
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
                    Адрес
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
                    Индекс
                </InputLabel>
                <Box className="cardForm__box index">
                    <input placeholder="Добавить" className="cardForm__input"></input>
                </Box>
            </form>

            <div className="cardForm__buttons adress">
                <button className="cardForm__button-cancel">Сбросить</button>
                <NavLink
                    to="/newCard__page3"
                    className="cardForm__button-confirm"
                    style={{ display: 'flex', textDecoration: 'none', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                >
                    Далее
                </NavLink>
            </div>
        </Box>
    );
};
export default AdressCard;
