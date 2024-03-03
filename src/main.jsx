import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import App from './components/App/App';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <React.Fragment>
                <CssBaseline />
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </React.Fragment>
        </BrowserRouter>
    </React.StrictMode>
);
