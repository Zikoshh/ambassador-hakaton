import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft } from '@gravity-ui/icons';
import { Camera } from '@gravity-ui/icons';
import CardHeader from '../Header/CardHeader';
import MainInfoCard from '../CardForms/MainInfoCard';
import './MainInfo.css';

const MainInfo = ({ onNext, onBack, onClose }) => {
    const handleNext = () => {
        onNext();
    };

    const handleBack = () => {
        onBack();
    };

    const [photo, setPhoto] = useState(null);

    const handleUploadPhoto = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                setPhoto(file);
            }
        };
        input.click();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <Box
                    className="addNewAmbassadorCard"
                    sx={{
                        display: 'flex',
                        width: '416px',
                        margin: '0px auto',
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
                            borderButtomRadius: '8px'
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
                                <p className="mainInfo__text">Основная информация</p>
                            </div>
                            <p className="mainInfo__steps">Шаг 1/7</p>
                        </Typography>
                        <Box
                            className="avatar"
                            sx={{
                                display: 'flex',
                                position: 'relative',
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(235, 235, 237, 1)',
                                margin: '28px 0px 8px 0px',
                                borderRadius: '50%'
                            }}
                        >
                            {photo ? (
                                <img
                                    src={URL.createObjectURL(photo)}
                                    alt="User Avatar"
                                    style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                                />
                            ) : (
                                <Box
                                    className="avatar-icon"
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        position: 'absolute',
                                        width: '24px',
                                        height: '24px',
                                        backgroundColor: 'rgba(98, 93, 245, 1)',
                                        borderRadius: '50%',
                                        color: '#fff',
                                        top: 0,
                                        right: 0,
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleUploadPhoto}
                                >
                                    <Camera />
                                </Box>
                            )}
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontWeight: '400',
                                    fontSize: '24px',
                                    lineHeight: '20px',

                                    color: 'rgba(33, 33, 33, 1)'
                                }}
                            >
                                МР
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                height: '24px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                lineHeight: '22px',
                                display: 'flex',
                                alignItems: 'center',
                                color: 'rgba(171, 171, 171, 1)'
                            }}
                        >
                            <p>Дата создания: 07.08.2023</p>
                        </Typography>
                        <MainInfoCard />
                        <div className="cardForm__buttons">
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
export default MainInfo;
