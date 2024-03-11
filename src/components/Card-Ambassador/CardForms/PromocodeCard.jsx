import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './SizeCard.css';
import './PromocodeCard.css';

const PromocodeCard = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        setShowSuccessPopup(true);

        setTimeout(() => {
            setShowSuccessPopup(false);
        }, 3000);
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    return (
        <form className="cardForm promocode">
            <Stack
                className="promoItems"
                direction="column"
                sx={{
                    width: '336px',
                    height: '178px',
                    display: 'flex',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '22px'
                }}
            >
                <Item
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'rgb(247, 247, 248)',
                        height: '54px',
                        boxShadow: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        padding: '16px',
                        color: 'rgb(33, 33, 33)'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Typography
                            className="date"
                            sx={{
                                fontFamily: 'Inter',
                                marginRight: '16px'
                            }}
                        >
                            21.12.2023
                        </Typography>
                        <Typography
                            className="promoText"
                            sx={{
                                fontFamily: 'Inter'
                            }}
                        >
                            promokod2024
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            width: '65px',
                            height: '22px',
                            background: 'rgb(54, 196, 160)',
                            borderRadius: '999px',
                            color: 'rgb(255, 255, 255)',
                            fontFamily: 'Inter',
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '22px',
                            textAlign: 'center',
                            textTransform: 'none',
                            pointerEvents: 'none'
                        }}
                    >
                        Активен
                    </Button>
                </Item>
                <Item
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'rgb(247, 247, 248)',
                        height: '54px',
                        boxShadow: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        padding: '16px',
                        color: 'rgb(171, 171, 171)'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Typography
                            className="date"
                            sx={{
                                fontFamily: 'Inter',
                                marginRight: '16px'
                            }}
                        >
                            21.12.2023
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter'
                            }}
                        >
                            newcode32
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            width: '83px',
                            height: '22px',
                            padding: '0px',
                            background: 'rgb(171, 171, 171)',
                            borderRadius: '999px',
                            color: 'rgb(255, 255, 255)',
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '22px',
                            textAlign: 'center',
                            textTransform: 'none',
                            pointerEvents: 'none'
                        }}
                    >
                        Не активен
                    </Button>
                </Item>
                <Item
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'rgb(247, 247, 248)',
                        height: '54px',
                        boxShadow: 'none',
                        borderRadius: '10px',
                        textAlign: 'center',
                        padding: '16px',
                        color: 'rgb(171, 171, 171)'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}
                    >
                        <Typography
                            className="date"
                            sx={{
                                fontFamily: 'Inter',
                                marginRight: '16px'
                            }}
                        >
                            21.12.2023
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Inter'
                            }}
                        >
                            firstcode2023
                        </Typography>
                    </Box>
                    <Button
                        sx={{
                            width: '83px',
                            height: '22px',
                            padding: '0px',
                            background: 'rgb(171, 171, 171)',
                            borderRadius: '999px',
                            color: 'rgb(255, 255, 255)',
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '22px',
                            textAlign: 'center',
                            textTransform: 'none',
                            pointerEvents: 'none'
                        }}
                    >
                        Не активен
                    </Button>
                </Item>
            </Stack>
            <div className="cardForm__buttons cardForm__buttons_promo">
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
export default PromocodeCard;
