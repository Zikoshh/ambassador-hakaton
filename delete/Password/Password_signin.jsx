import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Password_signin.css';

const Password_signin = () => {
  const [errors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="password">
      <div className="password__container">
        <div className="email__title-container">
          <Link to="/signin-email" className="email__link-back">
            {' '}
            <img src="/src/img/back-button.svg"></img>
          </Link>
          <h1 className="password__title password__title-signin">Войти в CRM</h1>
        </div>
        <form className="password__form">
          <label className="password__label">
            Пароль
            <div className="password__label-container">
              <input className="password__input" type={showPassword ? 'text' : 'password'} />
              <picture
                className={`password__input-image ${showPassword ? 'opened' : 'closed'}`}
                onClick={handleTogglePassword}
              ></picture>
            </div>
            {errors.password && <span className="password__error">{errors.password}</span>}
          </label>
          <Link to="/signin-access" className="password__button password__button-signin">
            {' '}
            Войти
          </Link>
          <img
            src="/src/img/devider.svg"
            className="email__devider"
            alt="разделительная линия"
          ></img>
          <p className="email__question email__question-signin">
            Забыли свой пароль?
            <Link to="/signin-passRestore" className="email__link">
              {' '}
              Восстановить
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Password_signin;
