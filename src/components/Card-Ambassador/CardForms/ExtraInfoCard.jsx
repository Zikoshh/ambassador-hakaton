import { Box, InputLabel } from '@mui/material';
import { ChevronDown } from '@gravity-ui/icons';
import './ExtraInfoCard.css';

const CardForm = () => {
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
                Образование
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
                Работа
            </InputLabel>
            <Box className="cardForm__box work">
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
                Цель обучения в Практикуме
            </InputLabel>
            <Box className="cardForm__box">
                <ChevronDown className="cardForm__chevronIcon" />
                <select className="cardForm__input">
                    <option selected disabled>
                        Выберите из списка
                    </option>
                    <option value="1">Статус-1</option>
                    <option value="2">Статус-2</option>
                    <option value="3">Статус-3</option>
                </select>
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
                Желаемые активности
            </InputLabel>
            <Box className="cardForm__box">
                <ChevronDown className="cardForm__chevronIcon" />
                <select className="cardForm__input">
                    <option selected disabled>
                        Выберите из списка
                    </option>
                    <option value="1">Статус-1</option>
                    <option value="2">Статус-2</option>
                    <option value="3">Статус-3</option>
                </select>
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
                О себе
            </InputLabel>
            <Box className="cardForm__box-aboutMe">
                <textarea placeholder="Добавить" className="cardForm__input-aboutMe"></textarea>
            </Box>
            <div className="cardForm__buttons extraInfo">
                <button className="cardForm__button-cancel">Сбросить</button>
                <button className="cardForm__button-confirm">Сохранить</button>
            </div>
        </form>
    );
};
export default CardForm;
