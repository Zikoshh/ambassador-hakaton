import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import './CardHeader.css';
import { Xmark } from '@gravity-ui/icons';

const CardHeader = ({ handleCloseModal }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickDelete = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDeleteCard = () => {
        setOpenDialog(false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px 40px 0px',
                justifyContent: 'space-between',
                maxWidth: '668px',
                height: '68px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                backgroundColor: 'rgb(252, 252, 252)',
                borderBottom: '1px solid rgb(195, 195, 201);'
            }}
        >
            <p className="header-title">Добавить амбассадора</p>
            <Box
                sx={{
                    cursor: 'pointer'
                }}
            >
                <Xmark onClick={handleClickDelete} />
            </Box>
            <Dialog
                sx={{
                    width: '416px',
                    margin: '0px auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '20px'
                }}
                open={openDialog}
                onClose={handleCloseDialog}
            >
                <Box onClick={handleCloseDialog} sx={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer' }}>
                    <Xmark />
                </Box>
                <DialogTitle
                    sx={{
                        maxWidth: '100%',
                        textAlign: 'center',
                        height: '26px',
                        padding: '40px 0px 28px',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '26px',
                        color: 'rgba(33, 33, 33, 1)',
                        marginButtom: '28px'
                    }}
                >
                    Сохранить изменение перед выходом?
                </DialogTitle>
                <DialogActions
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: '16px',
                        padding: '0px 40px 40px',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '26px',
                        color: 'rgba(33, 33, 33, 1)'
                    }}
                >
                    <Button
                        onClick={handleCloseDialog}
                        sx={{
                            background: 'rgba(255, 255, 255, 1)',
                            color: 'rgba(33, 33, 33, 1)',
                            border: '1px solid rgba(195, 195, 201, 1)',
                            borderRadius: '999px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',

                            width: '160px',
                            height: '36px',
                            textTransform: 'none'
                        }}
                    >
                        Отмена
                    </Button>
                    <Button
                        onClick={() => {
                            handleDeleteCard();
                            handleCloseModal();
                        }}
                        sx={{
                            background: 'rgba(98, 93, 245, 1)',
                            color: 'rgba(252, 252, 252, 1)',
                            borderRadius: '999px',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '160px',
                            height: '36px',
                            textTransform: 'none',
                            '&:hover': {
                                background: 'rgba(98, 93, 245, 1)',
                                color: 'rgba(252, 252, 252, 1)'
                            }
                        }}
                    >
                        Сохранить
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CardHeader;
