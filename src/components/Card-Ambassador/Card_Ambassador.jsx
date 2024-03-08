import { Box } from '@mui/material';
import Card_Header from './Header/Card_Header';
import LeftMenu from './Menu/LeftMenu';
import RightMenu from './Menu/RightMenu';

const Card_Ambassador = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '668px',
        height: '680px',
        margin: '20px auto 0px',
        flexDirection: 'column',
        borderRadius: '10px',
        boxShadow: '0 0 10px 15px black'
      }}
    >
      <Card_Header />
      <Box sx={{ display: 'flex', width: '668px', height: '100%', margin: '0' }}>
        <LeftMenu />
        <Box sx={{ display: 'flex', width: '420px' }}>
          <RightMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default Card_Ambassador;
