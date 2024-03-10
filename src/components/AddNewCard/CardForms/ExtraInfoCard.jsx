import { useState } from 'react';
import Select from 'react-select';
import { Box, InputLabel } from '@mui/material';
import './ExtraInfoCard.css';

const options1 = [
    { value: 'новая профессия', label: 'Получение новой профессии' },
    { value: 'углубление знаний', label: 'Углубление имеющихся знаний' },
    { value: 'свой вариант', label: 'Свой вариант' }
];
const options2 = [
    { value: 'новая профессия', label: 'Вести блог' },
    { value: 'проф. сообщества', label: 'Развивать локальные проф. сообщества' },
    { value: 'писать статьи', label: 'Писать статьи' },
    { value: 'снимать видео', label: 'Снимать / сниматься в видео' },
    { value: 'знакомить с практикумом', label: 'Знакомить коллег с Практикумом' },
    { value: 'давать консультации', label: 'Давать консультации' },
    { value: 'выступать на мероприятиях', label: 'Выступать на мероприятиях' }
];

const ExtraInfoCard = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [customOptionText, setCustomOptionText] = useState('');

    const handleSelectChange = (selected) => {
        setSelectedOption(selected);
        if (selected.value === 'custom') {
            setCustomOptionText('');
        }
    };

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
            <Select
                className="cardForm__box"
                placeholder="Выберите из списка"
                options={options1}
                onChange={handleSelectChange}
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
            {selectedOption && selectedOption.value === 'custom' && (
                <input type="text" value={customOptionText} onChange={(e) => setCustomOptionText(e.target.value)} />
            )}
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
            <Select
                className="cardForm__box"
                placeholder="Выберите из списка"
                isMulti
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
                О себе
            </InputLabel>
            <Box className="cardForm__box-aboutMe">
                <textarea placeholder="Добавить" className="cardForm__input-aboutMe"></textarea>
            </Box>
        </form>
    );
};
export default ExtraInfoCard;
