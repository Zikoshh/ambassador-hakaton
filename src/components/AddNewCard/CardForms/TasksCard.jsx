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

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary
    // }));

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
            ></Stack>
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
