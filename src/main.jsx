import React from 'react';
import { lazy } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
//import { StyledEngineProvider } from '@mui/material/styles'; // Порядок внедрения CSS
//import createCache from '@emotion/cache';
//import { CacheProvider } from '@emotion/react';
//import GlobalStyles from '@mui/material/GlobalStyles';
import Loadable from './components/Loadable';
//import App from './components/App/App';
import theme from './theme';

const AppLoad = Loadable(lazy(() => import('./components/App/App')));

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
//const inputGlobalStyles = <GlobalStyles styles={{ div: { color: 'red' } }} />;
// вставыить перед App

/*
Примечание. Если вы используете Emotion и в вашем приложении есть собственный кеш, 
он переопределит тот, который поступает из пользовательского интерфейса Material. 
Чтобы порядок внедрения оставался правильным, вам необходимо добавить опцию prepend.
*/
//const cache = createCache({
//    key: 'css',
//    prepend: true
//});
/*
Примечание. Большинство решений CSS-in-JS внедряют свои стили в нижнюю часть HTML <head>, 
что дает пользовательский интерфейс Material приоритет над вашими пользовательскими стилями. 
Чтобы устранить необходимость в !important , вам нужно изменить порядок внедрения CSS. 
Вот демонстрация того, как это можно сделать в Material UI
<StyledEngineProvider injectFirst>
      {Your component tree. Now you can override Material UI's styles. }
      </StyledEngineProvider>
*/
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <AppLoad />
                </ThemeProvider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>
);
