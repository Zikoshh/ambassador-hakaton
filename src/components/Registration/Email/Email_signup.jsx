import { Link } from 'react-router-dom';
import './Email_signup.css';

const Email_signup = () => {
  return (
    <section className="email">
      <div className="email__container">
        <div className="email__title-container">
          <Link to="/signin-email" className="email__link-back">
            {' '}
            <img src="/src/img/back-button.svg"></img>
          </Link>
          <h1 className="email__title email__title-signup">Регистрация в CRM</h1>
        </div>
        <form className="email__form">
          <label className="email__label">
            Email
            <div className="email__label-container">
              <input className="email__input" placeholder="Введите ваш email" />
            </div>
          </label>
          <Link to="/signup-password" className="email__button email__button-signup">
            {' '}
            Продолжить
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Email_signup;
