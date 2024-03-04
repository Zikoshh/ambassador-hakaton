import { Box, InputLabel } from '@mui/material';
import './CardForm.css';
import { ChevronDown } from '@gravity-ui/icons';

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
                    Статус
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
                    ФИО
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
                    Пол
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
                    Программа
                </InputLabel>
                <Box className="cardForm__box">
                    <input placeholder="Добавить" className="cardForm__input"></input>
                </Box>
                <Box className="cardForm__box">
                    <input type="checkbox" tabIndex="0" aria-checked="false"></input>
                    <label className="checkbox-name">Амбассадор прошел Онбординг</label>
                </Box>
                <Box className="cardForm__box">
                    <input type="checkbox" tabIndex="0" aria-checked="false"></input>
                    <label className="checkbox-name">Амбассадор выполнил задания из Гайда</label>
                </Box>
            </form>
            <div className="cardForm__buttons">
                <button className="cardForm__button-cancel">Сбросить</button>
                <button className="cardForm__button-confirm">Сохранить</button>
            </div>
        </Box>
    );
};
export default CardForm;
