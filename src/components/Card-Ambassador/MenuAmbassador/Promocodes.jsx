import { useState, useEffect } from 'react';
import { Box, Button, Typography, InputLabel } from '@mui/material';
import PromocodeCard from '../CardForms/PromocodeCard';
import { Plus } from '@gravity-ui/icons';
import './Promocodes.css';

const Promocodes = () => {
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
                outline: 'none'
            }}
        >
            <div className="topBlock" style={{ display: 'flex', flexDirection: 'column', width: '336px', height: '100%' }}>
                <Box
                    className="promoTitleBox"
                    sx={{
                        width: '100%',
                        height: '24px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography
                        sx={{
                            height: '24px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#212121',
                            margin: '0'
                        }}
                    >
                        Промокоды
                    </Typography>
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
                                <div style={{ color: 'rgba(251, 57, 57, 1)', fontSize: '12px', fontWeight: '400', lineHeight: '22px' }}>
                                    {error}
                                </div>
                            )}
                            {!error && promoCode.length > 5 && (
                                <img src="/src/img/password-correct.svg" alt="Valid Password" className="password__input-imageCorrect" />
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
            <PromocodeCard />
            {showSuccessPopup && (
                <div className="successPopup">
                    <span className="successPopup__icon"></span>
                    <span className="successPopup__text">Промокод добавлен</span>
                </div>
            )}
        </Box>
    );
};
export default Promocodes;
