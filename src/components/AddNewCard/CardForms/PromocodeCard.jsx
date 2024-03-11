import Stack from '@mui/material/Stack';
import './SizeCard.css';
import './PromocodeCard.css';

const PromocodeCard = () => {
    return (
        <form className="cardForm promocode">
            <Stack
                className="promoItems"
                direction="column"
                sx={{
                    width: '336px',
                    height: '178px',
                    display: 'flex',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '22px'
                }}
            ></Stack>
        </form>
    );
};
export default PromocodeCard;
