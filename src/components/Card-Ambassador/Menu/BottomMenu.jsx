import Stack from '@mui/material/Stack';
import MenuButton from '../../../ui/MenuButton/MenuButton';
import { Archive, TrashBin } from '@gravity-ui/icons';

export default function Bottom_Menu() {
  const handleClick = evt => {
    console.log('click', evt);
  };
  return (
    <Stack
      sx={{ width: '224px', display: 'flex', margin: '20px auto', gap: '4px' }}
      useFlexGap
      spacing={2}
    >
      <MenuButton startIcon={<Archive />} onClick={handleClick}>
        Архивировать
      </MenuButton>
      <MenuButton startIcon={<TrashBin />} onClick={handleClick}>
        Удалить карточку
      </MenuButton>
    </Stack>
  );
}
