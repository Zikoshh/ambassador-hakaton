import { useState } from 'react';
import { Toolbar, Typography, Button, Icon, TextField, Box, InputAdornment } from '@mui/material/';
import { Plus, Magnifier, SlidersVertical, BarsDescendingAlignCenter, LayoutColumns3, EllipsisVertical } from '@gravity-ui/icons';
import ActionButton from '../ActionButton/ActionButton';
import './tableContents.css';

export default function EnhancedTableToolbar({title, textCreatButton}) {
    const [name, setName] = useState('');
    console.log('name', name);

    function handleSubmit(evt) {
        console.log('handleSubmit');

        evt.preventDefault();
    }

    function handleChange(evt) {
        setName(evt.target.value);
    }
    return (
        <Box sx={{ paddingBottom: '20px' }}>
            <Toolbar
                sx={{
                    border: '1ps solid red'
                }}
            >
                <Typography
                    sx={{
                        flex: '1 1 100%',
                        fontFamily: 'Inter',
                        fontSize: '34px',
                        fontWeight: '500',
                        lineHeight: '40px'
                    }}
                    variant="h1"
                    id="tableTitle"
                    component="div"
                >
                    {title}
                </Typography>
                <Button
                    sx={{
                        backgroundColor: '#625DF5',
                        color: '#FCFCFC',
                        width: '200px',
                        height: '40px',
                        borderRadius: '999px',
                        textTransform: 'none',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        lineHeight: '22px',
                        '&:hover': {
                            backgroundColor: '#342DF2'
                        }
                    }}
                    variant="text"
                >
                    {textCreatButton}
                    <Icon
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '10px',
                            height: '10px',
                            objectFit: 'cover',
                            marginLeft: '9px',
                            color: '#FCFCFC'
                        }}
                    >
                        <Plus />
                    </Icon>
                </Button>
            </Toolbar>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box component="form" noValidate onSubmit={handleSubmit} onChange={handleChange}>
                    <TextField
                        id="input_search"
                        size="small"
                        sx={{
                            width: '300px',
                            color: '#ABABAB',
                            fontFamily: 'Inter',
                            fontWeight: '400',
                            fontSize: '14px',
                            lineHeight: '22px',
                            border: '1px solid #D5D5D5',
                            borderRadius: '8px',
                            '&:hover': {
                                borderColor: '#A5A5AC'
                            },
                            '&:focus': {
                                borderColor: '#881616'
                            }
                        }}
                        placeholder="Поиск по дате, фио или @"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" sx={{ paddingLeft: '16px', color: '#ABABAB' }}>
                                    <Magnifier />
                                </InputAdornment>
                            )
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <ActionButton startIcon={<SlidersVertical />}>Фильтры</ActionButton>
                    <ActionButton startIcon={<BarsDescendingAlignCenter />}>Сортировка</ActionButton>
                    <ActionButton startIcon={<LayoutColumns3 />}>Столбцы</ActionButton>
                    <ActionButton
                        startIcon={<EllipsisVertical />}
                        sx={{ display: 'flex', minWidth: '20px', width: '40px', objectFit: 'fill' }}
                    />
                </Box>
            </Toolbar>
        </Box>
    );
}
