import { Box } from '@mui/material';

const RightMenu = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 40px',
        width: '100%',
        backgroundColor: 'lightGray'
      }}
    >
      <p className="mainInfo">Основная информация</p>
      <Box
        sx={{
          width: '80px',
          height: '80px',
          backgroundColor: 'gray',
          margin: '28px 0px 8px 0px',
          borderRadius: '50%'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '24px',
            height: '24px',
            backgroundColor: 'blue',
            borderRadius: '50%',
            justifyContent: 'end',
            alignContent: 'end'
          }}
        ></Box>
      </Box>
    </Box>
  );
};
export default RightMenu;
