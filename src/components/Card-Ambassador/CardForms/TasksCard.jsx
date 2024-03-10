import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import './TasksCard.css';

const TasksCard = () => {
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
                        padding: '0px 16px 0px',
                        color: 'rgb(33, 33, 33)'
                    }}
                >
                    <Typography
                        className="task"
                        sx={{
                            fontFamily: 'Inter',
                            marginRight: '16px',
                            color: 'rgb(33, 33, 33)',
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '22px',
                            letterSpacing: '0px',
                            textAlign: 'left'
                        }}
                    >
                        Опубликовать видео-отзыв
                    </Typography>

                    <Button
                        sx={{
                            width: '79px',
                            height: '22px',
                            background: 'rgb(62, 107, 255)',
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
                        Назначена
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
                        padding: '0px 16px 0px',
                        color: 'rgb(171, 171, 171)'
                    }}
                >
                    <Typography
                        className="task"
                        sx={{
                            fontFamily: 'Inter',
                            marginRight: '16px',
                            color: 'rgb(33, 33, 33)',
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '22px',
                            letterSpacing: '0px',
                            textAlign: 'left'
                        }}
                    >
                        Написать пост в telegram канале
                    </Typography>
                    <Button
                        sx={{
                            width: '82px',
                            height: '22px',
                            padding: '0px',
                            background: 'rgb(54, 196, 160)',
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
                        Выполнена
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
                        padding: '0px 16px 0px',
                        color: 'rgb(171, 171, 171)'
                    }}
                >
                    <Typography
                        className="task"
                        sx={{
                            fontFamily: 'Inter',
                            marginRight: '16px',
                            color: 'rgb(33, 33, 33)',
                            fontSize: '12px',
                            fontWeight: '500',
                            lineHeight: '22px',
                            letterSpacing: '0px',
                            textAlign: 'left'
                        }}
                    >
                        Опубликовать видео-отзыв
                    </Typography>
                    <Button
                        sx={{
                            width: '82px',
                            height: '22px',
                            padding: '0px',
                            background: 'rgb(54, 196, 160)',
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
                        Выполнена
                    </Button>
                </Item>
            </Stack>
            <div className="cardForm__buttons promo">
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
export default TasksCard;
