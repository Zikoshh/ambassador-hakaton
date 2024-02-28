import { Link } from 'react-router-dom';
import './Email_signin.css';

const Email_signin = () => {
  return (
    <section className="email">
      <div className="email__container">
        <h1 className="email__title">Войти в CRM</h1>
        <form className="email__form">
          <label className="email__label">
            Email
            <div className="email__label-container">
              <input className="email__input" placeholder="mail@yandex.ru" />
            </div>
          </label>
          <button type="submit" className="email__button">
            Продолжить
          </button>
          <img
            src="/src/img/devider.svg"
            className="email__devider"
            alt="разделительная линия"
          ></img>
          <p className="email__question">
            Ещё нет аккаунта в CRM?
            <Link to="/signup-email" className="email__link">
              {' '}
              Создать
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Email_signin;
