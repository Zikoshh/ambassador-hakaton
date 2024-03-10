import { Box, InputLabel } from '@mui/material';
import './SizeCard.css';

const SizeCard = () => {
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
                Одежда
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
                Обувь
            </InputLabel>
            <Box className="cardForm__box-size">
                <input placeholder="Добавить" className="cardForm__input"></input>
            </Box>
        </form>
    );
};
export default SizeCard;
