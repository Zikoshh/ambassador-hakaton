import Select from 'react-select';
import { Box, InputLabel } from '@mui/material';
import './MainInfoCard.css';

const MainInfoCard = () => {
    const options1 = [
        { value: 'Не амбассадор', label: 'Не амбассадор' },
        { value: 'Онбординг', label: 'Онбординг' },
        { value: 'Активный', label: 'Активный' },
        { value: 'На паузе', label: 'На паузе' },
        { value: 'Не определен', label: 'Не определен' }
    ];
    const options2 = [
        { value: 'Мужской', label: 'Мужской' },
        { value: 'Женский', label: 'Женский' }
    ];

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
                <Select
                    className="cardForm__box"
                    placeholder="Выберите из списка"
                    options={options1}
                    styles={{
                        placeholder: (baseStyles) => ({
                            ...baseStyles,
                            fontFamily: 'Inter',
                            color: 'rgba(0, 0, 0, 0.3)',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '22px'
                        })
                    }}
                />
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
                <Select
                    className="cardForm__box"
                    placeholder="Выберите из списка"
                    options={options2}
                    styles={{
                        placeholder: (baseStyles) => ({
                            ...baseStyles,
                            fontFamily: 'Inter',
                            color: 'rgba(0, 0, 0, 0.3)',
                            fontSize: '14px',
                            fontWeight: '400',
                            lineHeight: '22px'
                        })
                    }}
                />

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
        </Box>
    );
};
export default MainInfoCard;
