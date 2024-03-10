import { Link } from 'react-router-dom';
import './Login__no_access.css';

const Login__no_access = () => {
  return (
    <section className="password">
      <div className="password__container">
        <img
          src="/src/img/no-access-face.svg"
          className="access-sadIcon"
          alt="грустный смайлик"
        ></img>
        <h1 className="password__title password__title-access">Доступ к CRM ограничен</h1>
        <h2 className="password__message password__message-access">
          Пожалуйста, обратитесь к вашему куратору
        </h2>
        <Link to="/" className="password__button password__button-access">
          {' '}
          Вернуться на главную
          <img src="/src/img/back-icon.svg" className="back-icon" alt="стрелочка назад"></img>
        </Link>
      </div>
    </section>
  );
};

export default Login__no_access;
