// import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft } from '@gravity-ui/icons';
import AddressCard from '../CardForms/AddressCard';
import CardHeader from '../Header/CardHeader';
import './Address.css';

const Address = ({ onNext, onBack, onClose }) => {
    const handleNext = () => {
        onNext();
    };

    const handleBack = () => {
        onBack();
    };

    return (
        // <Box sx={{ display: showComponent ? 'block' : 'none' }}>
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
                                <p className="mainInfo__text">Адрес</p>
                            </div>
                            <p className="mainInfo__steps">Шаг 2/7</p>
                        </Typography>
                        <AddressCard />
                        <div className="cardForm__buttons cardForm__buttons_address">
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
export default Address;
