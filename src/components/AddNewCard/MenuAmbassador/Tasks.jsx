// import { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { ChevronLeft } from '@gravity-ui/icons';
import { Plus } from '@gravity-ui/icons';
import CardHeader from '../Header/CardHeader';
import './Tasks.css';

const Tasks = ({ onClose, onBack }) => {
    const handleClose = () => {
        onClose();
    };

    const handleBack = () => {
        onBack();
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
                        <Typography
                            className="mainInfo"
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
                                <p className="mainInfo__text">Задачи</p>
                            </div>
                            <p className="mainInfo__steps">Шаг 7/7</p>
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
                                    width: '169px',
                                    height: '24px',
                                    padding: '0',
                                    borderRadius: '999px',
                                    outline: '1px solid rgba(195, 195, 201, 1)',
                                    gap: '8px',
                                    boxSizing: 'border-box',
                                    color: 'rgba(107, 104, 114, 1)'
                                }}
                            >
                                <Plus
                                    sx={{
                                        width: '12px',
                                        height: '12px'
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
                                    <p className="promo-addButtonText">Назначить задачу</p>
                                </Typography>
                            </Button>
                        </Box>
                        <div className="cardForm__buttons cardForm__buttons_tasks">
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
                                onClick={() => {
                                    handleClose();
                                }}
                            >
                                Сохранить
                            </button>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>
    );
};
export default Tasks;
