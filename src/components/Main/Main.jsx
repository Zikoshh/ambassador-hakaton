import { Link } from 'react-router-dom';
import './Main.css';

const Main = () => {
  return (
    <section className="main">
      <div className="main__container">
        <Link to="/signin-email" className="main__link">
          {' '}
          Перейти на страницу регистрации
        </Link>
        {/* <Link to="/" className="main__link">
          {' '}
          Вернуться на главную страницу
        </Link> */}
      </div>
    </section>
  );
};
export default Main;
