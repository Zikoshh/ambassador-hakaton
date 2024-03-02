import Stack from '@mui/material/Stack';
import MenuButton from './BottomMenuButton';
import { Archive, TrashBin } from '@gravity-ui/icons';

export default function Bottom_Menu() {
    const handleClick = (evt) => {
        console.log('click', evt);
    };
    return (
        <Stack sx={{ width: '224px', display: 'flex', margin: '0px 0px 20px 20px', gap: '4px' }} useFlexGap spacing={2}>
            <MenuButton startIcon={<Archive />} onClick={handleClick}>
                Архивировать
            </MenuButton>
            <MenuButton startIcon={<TrashBin />} onClick={handleClick}>
                Удалить карточку
            </MenuButton>
        </Stack>
    );
}
