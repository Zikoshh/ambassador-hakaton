import Menu from './Menu';
import MenuButton from '../../../../ui/MenuButton/MenuButton';
import MenuButtonArrow from '../../../../ui/MenuButton/MenuButtonArrow';
import { Gear, CaretLeft } from '@gravity-ui/icons';
import { Box } from '@mui/material';

const LeftMenu = () => {
    const handleClick = (evt) => {
        console.log('click', evt);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minWidth: '248px',
                    backgroundColor: '#F7F7F8',
                    border: '1px solid blue'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        width: '224px',
                        height: '100%',
                        margin: '12px auto 0px',
                        gap: '0',
                        borderRadius: '12px',
                        border: '1px solid red',
                        backgroundColor: '#FFFFFF'
                    }}
                >
                    <Menu />
                    <MenuButton startIcon={<Gear />} onClick={handleClick}>
                        Настройки
                    </MenuButton>
                </Box>
                <MenuButtonArrow startIcon={<CaretLeft />}></MenuButtonArrow>
            </Box>
        </>
    );
};
export default LeftMenu;
