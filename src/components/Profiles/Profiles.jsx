import { useNavigate } from 'react-router-dom';

import {Box} from '@mui/material';
import EnhancedTableToolbar from '../../ui/TableContents/EnhancedTableToolbar';

const Profiles = () => {
    let navigate = useNavigate(); // навигация в react v6

    const handleClickAddProfile = () => {
        navigate('/mainInfo');
    };
    return (
        <>
            <Box sx={{ width: '100%', height: '100%', mb: 2 }}>
            <EnhancedTableToolbar title="Профили" textCreatButton="Создать профиль" onClickAdd={handleClickAddProfile} />

           </Box>
        </>
    );
};

export default Profiles;
