import { useState } from 'react';
import Select from 'react-select';
import { Box, InputLabel } from '@mui/material';
// import { ChevronDown } from '@gravity-ui/icons';
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
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [customOptionText, setCustomOptionText] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        setShowSuccessPopup(true);

        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 3000);
    };

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
            <div className="cardForm__buttons extraInfo">
                <button className="cardForm__button-cancel">Сбросить</button>
                <button className="cardForm__button-confirm" onClick={handleSave}>
                    Сохранить
                </button>
                {showSuccessPopup && (
                    <div className="successPopup">
                        <span className="successPopup__icon"></span>
                        <span className="successPopup__text">Изменения сохранены</span>
                    </div>
                )}
            </div>
        </form>
    );
};
export default ExtraInfoCard;

{
    /* <Box className="cardForm__box">
                <ChevronDown className="cardForm__chevronIcon" />
                <select className="cardForm__input">
                    <option selected disabled>
                        Выберите из списка
                    </option>
                    <option value="1">Получение новой профессии</option>
                    <option value="2">Углубление имеющихся знаний</option>
                    <option value="3">Свой вариант</option>
                </select>
            </Box> */
}

{
    /* <Box className="cardForm__box">
                <ChevronDown className="cardForm__chevronIcon" />
                <select className="cardForm__input">
                    <option selected disabled>
                        Выберите из списка
                    </option>
                    <option value="1">Вести блог</option>
                    <option value="2">Развивать локальные проф. сообщества</option>
                    <option value="3">Сниматься / сниматься в видео</option>
                    <option value="4">Знакомить коллег с Практикумом</option>
                    <option value="5">Давать консультации</option>
                    <option value="6">Выступать на мероприятиях</option>
                </select>
            </Box> */
}
