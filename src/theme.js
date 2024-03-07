import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/material/locale';
import './vendor/Inter/inter.css';

const theme = createTheme(
    {
        palette: {
            //цвета переопределить
            primary: {
                //для основных элементов интерфейса
                main: '#625DF5', //Основной оттенок цвета изменил!!
                light: '#1976d2', //Более светлый оттенок.main
                dark: '#1565c0', //Более темный оттенок.main
                contrastText: '#fff' //Цвет текста, предназначенный для контраста main
            },
            secondary: {
                //для вторичных элементов интерфейса
                main: '#ba68c8',
                light: '#9c27b0',
                dark: '#7b1fa2',
                contrastText: '#fff' //Цвет текста, предназначенный для контраста сmain
            },
            error: {
                //для элементов, о которых пользователь должен быть осведомлен
                main: '#FB3939', // изменил
                light: '#d32f2f',
                dark: '#c62828',
                contrastText: '#fff' //Цвет текста, предназначенный для контраста сmain
            },
            warning: {
                //для элементов, о которых пользователь должен быть осведомлен
                main: '#ff9800',
                light: '#ed6c02',
                dark: '#e65100',
                contrastText: '#fff' //Цвет текста, предназначенный для контраста сmain
            },
            info: {
                //для элементов, о которых пользователь должен быть осведомлен
                main: '#03a9f4',
                light: '#0288d1',
                dark: '#01579b',
                contrastText: '#fff'
            },
            success: {
                //для элементов, о которых пользователь должен быть осведомлен
                main: '#36C4A0', // изменил
                light: '#4caf50',
                dark: '#1b5e20',
                contrastText: '#fff'
            }
        },
        typography: {
            //можно написать название темы и после настройки
            fontFamily: 'Inter',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 600,
            body: {
                color: '#212121',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: 14,
            },
            body1: {
                color: '#212121',
                fontWeight: 400,
                lineHeight: '22px',
                fontSize: 14
            },

            h1: {
                fontSize: 16
            },
            h2: {
                fontSize: 34,
                lineHeight: '40px',
                fontWeight: 500
            },
            button: {
                color: '#625DF5',
                backgroundColor: '#625DF5', // заменить на переменную
                fontSize: 14,
                lineHeight: '22px',
                textTransform: 'none'
            },
            input: {
                fontSize: 12
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        scrollbarColor: '#EDEDED #ffffff',
                        '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
                            backgroundColor: '#ffffff'
                        },
                        '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
                            borderRadius: 10,
                            backgroundColor: '#EDEDED',//
                            minHeight: 8,
                            border: '3px solid #ffffff' //3
                        },
                        '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
                            backgroundColor: '#EDEDED' //
                        },
                        '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
                            backgroundColor: '#EDEDED' //
                        },
                        '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
                            backgroundColor: '#EDEDED' //
                        },
                        '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
                            backgroundColor: '#ffffff'
                        }
                    }
                }
            }

            /*MuiButton: {
                styleOverrides: {
                    root: {
                        fontSize: '1.4em',
                        backgroundColor: 'red'
                    }
                }
            }*/
        }
    },
    ruRU
);

export default theme;

/*

components: {
            MuiCssBaseline: {
                styleOverrides: {
                    h1: {
                        color: 'grey'
                    },
                    typography: {
                        fontFamily: 'Inter',
                        color: 'green'
                    }
                },
                MuiTypography: {
                    color: 'red'
                }
            },

            MuiTableCel: {
                styleOverrides: () => ({
                    body: 'red'
                })
            },
            MuiTypography: {
                styleOverrides: () => ({
                    root: () => ({
                        color: 'red'
                    })
                })
            }
        },
        typography: {
            fontFamily: 'Inter',
            color: 'red'
        }

        */
