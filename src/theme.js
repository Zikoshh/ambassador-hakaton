import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',  //заменить
    },
    secondary: {
      main: '#19857b',  //заменить
    },
    error: {
      main: red.A400,   //заменить
    },
  },
});

export default theme;