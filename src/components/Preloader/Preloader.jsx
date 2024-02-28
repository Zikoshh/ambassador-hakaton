import CircularProgress from '@mui/material/CircularProgress';
import './Preloader.css';

const Preloader = () => {
  // TODO: исправить с затемнением
  return (
    <div className='preloader'>
      <div className="preloader__container">
        <CircularProgress sx={{ color: '#625DF5' }} />
        <p className="preloader__text">загрузка</p>
      </div>
    </div>
  );
};

export default Preloader;
