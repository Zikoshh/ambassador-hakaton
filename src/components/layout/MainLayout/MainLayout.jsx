import { Outlet } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

const mainCss = { width: '100%', flexGrow: 1, p: { xs: 2, sm: 3 }, border: '1px solid red' };

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex', width: '1440px', margin: 'auto', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ display: 'flex', width: '1440px', margin: 'auto' }}>
        <Paper sx={{ width: '224px' }}>
          <p>Paper</p>
        </Paper>
        <Box component="main" sx={mainCss}>
          <Link to="/signin-email" className="main__link">
            {' '}
            Перейти на страницу регистрации
          </Link>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
