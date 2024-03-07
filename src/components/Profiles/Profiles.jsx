import { Button, Typography } from '@mui/material';
const Profiles = () => {
    return (
        <>
            <h1>Profiles h1</h1>
            <Typography variant='h1'  >
                Typografy h1
            </Typography>
            <Typography variant='h2' >
                Typografy h2
            </Typography>
            <Typography  sx={{fontSize: '10px'}}>
                Typografy 10px
            </Typography>
            <Typography  sx={{fontSize: '1em'}}>
                Typografy
            </Typography>
            <Typography  sx={{fontSize: '1.6em'}}>
                Typografy 1.6em
            </Typography>
            <Typography  sx={{fontSize: '16px', lineHeight: '22px'}}>
                Typografy 16px
            </Typography>
            <Button>Button</Button>
        </>
    );
};

export default Profiles;
