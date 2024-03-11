import { Box, Button, Typography } from '@mui/material';
import TasksCard from '../CardForms/TasksCard';
import { Plus } from '@gravity-ui/icons';

const Tasks = () => {
    return (
        <Box
            sx={{
                fontFamily: ('Inter', 'Arial', 'sans-serif'),
                display: 'flex',
                flexDirection: 'column',
                padding: '40px 40px 0px',
                width: '100%',
                backgroundColor: '#ffff',
                border: 'none',
                outline: 'none'
            }}
        >
            <Box
                className="promoTitleBox"
                sx={{
                    width: '100%',
                    height: '24px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Typography
                    sx={{
                        height: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '16px',
                        lineHeight: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#212121',
                        margin: '0'
                    }}
                >
                    <p className="promocodes">Задачи</p>
                </Typography>
                <Button
                    className="promo-addButton"
                    sx={{
                        fontFamily: 'Inter',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '169px',
                        height: '24px',
                        padding: '0',
                        borderRadius: '999px',
                        outline: '1px solid rgba(195, 195, 201, 1)',
                        gap: '8px',
                        boxSizing: 'border-box',
                        color: 'rgba(107, 104, 114, 1)'
                    }}
                >
                    <Plus
                        sx={{
                            width: '12px',
                            height: '12px'
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '22px',
                            textAlign: 'center',
                            textTransform: 'none'
                        }}
                    >
                        <p className="promo-addButtonText">Назначить задачу</p>
                    </Typography>
                </Button>
            </Box>
            <TasksCard />
        </Box>
    );
};
export default Tasks;
