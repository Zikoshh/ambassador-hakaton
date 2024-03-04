import { Box, InputLabel } from '@mui/material';
import './AdressCard.css';

const CardForm = () => {
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
                <button className="cardForm__button-confirm">Сохранить</button>
            </div>
        </Box>
    );
};
export default CardForm;
