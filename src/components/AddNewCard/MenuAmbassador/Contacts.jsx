import { Box, Typography, IconButton } from '@mui/material';
import { ChevronLeft } from '@gravity-ui/icons';
import ContactCard from '../CardForms/ContactCard';
import CardHeader from '../Header/CardHeader';
import './Contacts.css';

const Contacts = ({ onNext, onBack, onClose }) => {
    const handleNext = () => {
        onNext();
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
                                <p className="mainInfo__text">Контакты</p>
                            </div>
                            <p className="mainInfo__steps">Шаг 3/7</p>
                        </Typography>
                        <ContactCard />
                        <div className="cardForm__buttons cardForm__buttons_contacts">
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

export default Contacts;
