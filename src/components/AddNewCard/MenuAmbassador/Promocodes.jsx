import { useState, useEffect } from 'react';
import { Box, Button, Typography, InputLabel, IconButton } from '@mui/material';
import { ChevronLeft } from '@gravity-ui/icons';
import CardHeader from '../Header/CardHeader';
import { Plus } from '@gravity-ui/icons';
import './Promocodes.css';

const Promocodes = ({ onNext, onBack, onClose }) => {
    const handleNext = () => {
        onNext();
    };

    const handleBack = () => {
        onBack();
    };

    const [showBlock, setShowBlock] = useState(false);
    const [neutral, setNeutral] = useState(true);
    const [promoCode, setPromoCode] = useState('');
    const [promoCodeValue, setPromoCodeValue] = useState('');
    const [validInput, setValidInput] = useState(false);
    const [inputStarted, setInputStarted] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (promoCode.length > 5) {
            setNeutral(false);
        }
    }, [promoCode]);

    const handleAddButtonClick = () => {
        setShowBlock(true);
    };

    const handlePromoCodeChange = (event) => {
        if (!inputStarted) {
            setInputStarted(true);
        }
        const inputText = event.target.value;

        const latinLetters = /^[A-Za-z]+$/;
        const isValidInput = latinLetters.test(inputText);

        if (!isValidInput) {
            setError('Можно использовать только латинские символы');
        } else {
            setError('');
        }

        setPromoCode(inputText);
        setValidInput(isValidInput);

        if (inputText.length > 5 && isValidInput) {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    };

    const clearPromoCode = () => {
        setPromoCode('');
        setButtonActive(false);
    };

    const handleSave = () => {
        const promoCodeString = `Промокод: ${promoCodeValue}`;
        console.log(promoCodeString);
        setShowSuccessPopup(true);

        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 3000);
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <Box
                    className="addNewAmbassadorCard"
                    sx={{
                        display: 'flex',
                        width: '416px',
                        margin: '20px auto 0px',
                        flexDirection: 'column',
                        borderRadius: '8px',
                        border: '1px solid rgb(195, 195, 201)'
                    }}
                >
                    <CardHeader handleCloseModal={onClose} />
                    <Box
                        sx={{
                            position: 'relative',
                            fontFamily: ('Inter', 'Arial', 'sans-serif'),
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '40px 40px 0px',
                            width: '100%',
                            backgroundColor: '#ffff',
                            border: 'none',
                            outline: 'none',
                            borderBottomRadius: '8px'
                        }}
                    >
                        <div className="topBlock" style={{ display: 'flex', flexDirection: 'column', width: '336px', height: '100%' }}>
                            <Typography
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: '24px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: '#212121'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <IconButton onClick={handleBack}>
                                        <ChevronLeft />
                                    </IconButton>
                                    <p className="mainInfo__text">Промокоды</p>
                                </div>
                                <p className="mainInfo__steps">Шаг 6/7</p>
                            </Typography>
                            <Box
                                className="promoTitleBox"
                                sx={{
                                    width: '100%',
                                    height: '24px',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginTop: '20px'
                                }}
                            >
                                <Button
                                    className="promo-addButton"
                                    sx={{
                                        fontFamily: 'Inter',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '111px',
                                        height: '24px',
                                        padding: '0',
                                        borderRadius: '999px',
                                        outline: '1px solid rgba(195, 195, 201, 1)',
                                        gap: '8px',
                                        boxSizing: 'border-box',
                                        color: 'rgba(107, 104, 114, 1)'
                                    }}
                                    onClick={handleAddButtonClick}
                                >
                                    <Plus
                                        sx={{
                                            width: '10px',
                                            height: '10px'
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            lineHeight: '22px',
                                            textAlign: 'center',
                                            textTransform: 'none'
                                        }}
                                    >
                                        Добавить
                                    </Typography>
                                </Button>
                            </Box>
                            {showBlock && (
                                <Box
                                    sx={{
                                        width: '100%',
                                        marginTop: '20px'
                                    }}
                                >
                                    <InputLabel
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontSize: '10px',
                                            fontWeight: '400',
                                            lineHeight: '20px',
                                            textAlign: 'left',
                                            textTransform: 'none',
                                            color: 'rgba(171, 171, 171, 1)',
                                            marginBottom: '8px'
                                        }}
                                    >
                                        Промокод должен состоять из латинских символов
                                    </InputLabel>
                                    <Box className="cardForm__box">
                                        <input
                                            className={`password__input ${
                                                error ? 'errorInput' : promoCode.length > 0 && validInput ? 'validInput' : 'neutral'
                                            }`}
                                            value={promoCode}
                                            onChange={handlePromoCodeChange}
                                        />
                                        {promoCode.length > 0 && inputStarted && !error && (
                                            <picture
                                                className={`password__input-image ${promoCode.length > 5 ? 'image-shift' : ''}`}
                                                onClick={() => clearPromoCode()}
                                            />
                                        )}
                                        {error && (
                                            <div
                                                style={{
                                                    color: 'rgba(251, 57, 57, 1)',
                                                    fontSize: '12px',
                                                    fontWeight: '400',
                                                    lineHeight: '22px'
                                                }}
                                            >
                                                {error}
                                            </div>
                                        )}
                                        {!error && promoCode.length > 5 && (
                                            <img
                                                src="/src/img/password-correct.svg"
                                                alt="Valid Password"
                                                className="password__input-imageCorrect"
                                            />
                                        )}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginTop: '8px',
                                            gap: '8px'
                                        }}
                                    >
                                        <Button
                                            sx={{
                                                width: '78px',
                                                height: '22px',
                                                padding: '0px',
                                                background: 'rgba(255, 255, 255, 1)',
                                                border: '1px solid rgba(213, 213, 213, 1)',
                                                borderRadius: '999px',
                                                color: 'rgba(107, 104, 114, 1)',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '22px',
                                                textAlign: 'center',
                                                textTransform: 'none',
                                                pointerEvents: 'none'
                                            }}
                                        >
                                            Отмена
                                        </Button>

                                        <Button
                                            sx={{
                                                width: '91px',
                                                height: '22px',
                                                padding: '0px',
                                                background: buttonActive ? 'rgba(98, 93, 245, 1)' : 'rgba(237, 237, 237, 1)',
                                                border: '1px solid rgba(213, 213, 213, 1)',
                                                borderRadius: '999px',
                                                color: buttonActive ? 'white' : 'rgba(171, 171, 171, 1)',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                                lineHeight: '22px',
                                                textAlign: 'center',
                                                textTransform: 'none',
                                                '&:hover': {
                                                    background: buttonActive ? 'rgba(98, 93, 245, 1)' : 'rgba(237, 237, 237, 1)',
                                                    color: buttonActive ? 'white' : 'rgba(171, 171, 171, 1)',
                                                    cursor: 'pointer'
                                                }
                                            }}
                                            onClick={() => {
                                                setPromoCodeValue(promoCode);
                                                handleSave();
                                            }}
                                        >
                                            Добавить
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </div>
                        {showSuccessPopup && (
                            <div className="successPopup">
                                <span className="successPopup__icon"></span>
                                <span className="successPopup__text">Промокод добавлен</span>
                            </div>
                        )}
                        <div className="cardForm__buttons cardForm__buttons_promocodes">
                            <button className="cardForm__button-cancel">Сбросить</button>
                            <button
                                className="cardForm__button-confirm"
                                style={{
                                    display: 'flex',
                                    textDecoration: 'none',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                onClick={handleNext}
                            >
                                Далее
                            </button>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
};
export default Promocodes;
