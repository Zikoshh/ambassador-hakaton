import Stack from '@mui/material/Stack';
import MenuButton from './BottomMenuButton';
import { Archive, TrashBin, Xmark } from '@gravity-ui/icons';
import { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export default function Bottom_Menu() {
    const [openDialog, setOpenDialog] = useState(false);
    const [openArchiveDialog, setOpenArchiveDialog] = useState(false);

    const handleClickDelete = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleDeleteCard = () => {
        // Действия по удалению карточки
        setOpenDialog(false);
    };

    const handleClickArchive = () => {
        setOpenArchiveDialog(true);
    };

    const handleCloseArchiveDialog = () => {
        setOpenArchiveDialog(false);
    };

    const handleArchiveCard = () => {
        // Действия по архивации карточки
        setOpenArchiveDialog(false);
    };

    return (
        <Stack
            sx={{ width: '224px', display: 'flex', margin: '0px 0px 20px 20px', gap: '4px', borderRadius: '8px' }}
            useFlexGap
            spacing={2}
        >
            <MenuButton startIcon={<Archive />} onClick={handleClickArchive}>
                Архивировать
            </MenuButton>
            <MenuButton startIcon={<TrashBin />} onClick={handleClickDelete}>
                Удалить карточку
            </MenuButton>
            <Dialog
                sx={{
                    width: '416px',
                    margin: '0px auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%'
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
                        padding: '40px 0px 16px',
                        fontFamily: 'Inter',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '26px',
                        color: 'rgba(33, 33, 33, 1)'
                    }}
                >
                    Удалить карточку амбассадора?
                </DialogTitle>
                <DialogContent
                    sx={{
                        width: '327px',
                        textAlign: 'center',
                        margin: '0 auto',
                        padding: '40px 0px 28px',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '22px'
                    }}
                >
                    <DialogContentText>После удаления карточку невозможно восстановить</DialogContentText>
                </DialogContent>
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
                        onClick={handleDeleteCard}
                        sx={{
                            background: 'rgba(251, 57, 57, 1)',
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
                                background: 'rgba(251, 57, 57, 1)',
                                color: 'rgba(252, 252, 252, 1)'
                            }
                        }}
                    >
                        Удалить
                    </Button>
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
                </DialogActions>
            </Dialog>

            <Dialog
                open={openArchiveDialog}
                onClose={handleCloseArchiveDialog}
                sx={{
                    width: '416px',
                    margin: '0px auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%'
                }}
            >
                <Box onClick={handleCloseArchiveDialog} sx={{ position: 'absolute', top: '14px', right: '14px', cursor: 'pointer' }}>
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
                        color: 'rgba(33, 33, 33, 1)'
                    }}
                >
                    Архивировать карточку амбассадора?
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
                        onClick={handleArchiveCard}
                        sx={{
                            background: 'rgba(251, 57, 57, 1)',
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
                                background: 'rgba(251, 57, 57, 1)',
                                color: 'rgba(252, 252, 252, 1)'
                            }
                        }}
                    >
                        Архивировать
                    </Button>
                    <Button
                        onClick={handleCloseArchiveDialog}
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
                </DialogActions>
            </Dialog>
        </Stack>
    );
}
